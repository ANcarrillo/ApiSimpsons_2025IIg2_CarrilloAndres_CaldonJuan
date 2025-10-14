import { useState, useEffect } from 'react'
import CardCharacters from '../../Components/CardCharacter/AcorEpisodes'
import './Episodes.css'
import gifCarga from '../../assets/SimpsonsCarga.webp'


const Episodes = () => {

    const [characters, setCharacters] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetch(`https://thesimpsonsapi.com/api/episodes?page=${currentPage}`)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results);
                setTotalPages(data.pages);
            })
            .catch(error => console.error(error));
    }, [currentPage])

    //Acciones para los botones de paginacion

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    //Fin de acciones para los botones de paginacion


    return (

        <div className='contenedorEpisodios'>
            {
                characters.length > 0 ? characters.map(
                    character => <CardCharacters key={character.id} data={character} />
                ) : <img src={gifCarga} alt="Cargando" />
            }
            <div className="pagination-container">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="pagination-btn prev-btn"
                >
                    <span className="btn-icon">⬅️</span>
                    <span className="btn-text">Anterior</span>
                </button>

                <div className="page-info">
                    <span className="page-number">{currentPage}</span>
                    <span className="page-divider">de</span>
                    <span className="total-pages">{totalPages}</span>
                </div>

                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className="pagination-btn next-btn"
                >
                    <span className="btn-text">Siguiente</span>
                    <span className="btn-icon">➡️</span>
                </button>
            </div>
        </div>




    )
}

export default Episodes