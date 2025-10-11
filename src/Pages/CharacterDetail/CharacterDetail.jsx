import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CardCharacters from '../../Components/CharacterCard/CharacterCard';
import './CharacterDetail.css'; 

const CharacterDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`https://thesimpsonsapi.com/api/characters/${id}`)
      .then(response => response.json())
      .then(data => {
        setCharacters(Array.isArray(data) ? data : [data]);
      });
  }, [id]);

  return (
    <div style={{backgroundColor: 'lightgreen', height: 'calc(100vh - 150px)', width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '20px', overflowY: 'scroll', position: 'relative', paddingTop: '60px'}}>
      
      <button onClick={() => navigate('/personajes')} className="btn-back">
        ← Volver
      </button>

      {
        characters.length > 0 ? characters.map(
          character => <CardCharacters key={character.id} data={character} />
        ): <p>Cargando...</p>
      }
    </div>
  );
};

export default CharacterDetail;