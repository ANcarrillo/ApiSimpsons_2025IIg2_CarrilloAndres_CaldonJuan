import { useState, useEffect } from "react";
import CardCharacters from "../../Components/CardCharacter/CardCharacter";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./Characters.css";
import { useNavigate } from "react-router-dom";
import gifCarga from '../../assets/7SJ1.gif';


const Characters = () => {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchId, setSearchId] = useState(0);

  const buscarPersonaje = () => {
    fetch(`https://thesimpsonsapi.com/api/characters/${searchId}`)
      .then((response) => (!response.ok ? navigate(`/*`) : response.json()))
      .then((data) => {
        navigate(`/personaje/${data.id}`);
      })
      .catch((error) => navigate(`/`));
  };
  useEffect(() => {
    fetch(`https://thesimpsonsapi.com/api/characters?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setTotalPages(data.pages);
      })
      .catch((error) => console.error(error));
  }, [currentPage]);

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
    <div className="contenedor">
      <div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
            padding: "10px",
            margin: "10px",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Id Personaje"
            variant="outlined"
            type="number"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            sx={{
              inputinput: { color: "#ffdd02" }, // color del texto dentro del input
              label: { color: "#ffdd02" }, // color del label (placeholder)
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#ffdd02" }, // color del borde
                "&:hover fieldset": { borderColor: "#ffdd02" }, // color al pasar el mouse
                "&.Mui-focused fieldset": { borderColor: "#ffdd02" }, // color al enfocar
              },
            }}
          />
          <Button
            variant="contained"
            onClick={buscarPersonaje}
            sx={{
              backgroundColor: "#ffdd02",
              color: "#000",
            }}
          >
            Buscar Personaje
          </Button>
        </Box>
      </div>
      <div
        className="contenedor-imagenes"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {characters.length > 0 ? (
          characters.map((character) => (
            <CardCharacters key={character.id} data={character} />
          ))
        ) : (
          <img src={gifCarga} alt="pantallaCarga" />
        )}
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
    </div>
  );
};

export default Characters;