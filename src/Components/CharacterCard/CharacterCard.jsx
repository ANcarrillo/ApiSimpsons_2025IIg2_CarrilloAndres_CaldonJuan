import React from "react";
import "./CharacterCard.css";

const CharacterCard = ({ data }) => {
  return (
    <div className="card-character">
      <img
        src={`https://cdn.thesimpsonsapi.com/500${data.portrait_path}`}
        alt={data.name}
      />
      <h2 id="Text">{data.name}</h2>
      <div className="elementos">
        <p>Nombre: {data.name}</p>
        <p>Edad: {data.age}</p>
        <p>Fecha de Nacimiento: {data.birthdate}</p>
        <p>Estado: {data.status}</p>
        <p>Género: {data.gender}</p>
        <p>Ocupación: {data.occupation}</p>
        <p>Frases: {data.phrases.join(" | ")}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
