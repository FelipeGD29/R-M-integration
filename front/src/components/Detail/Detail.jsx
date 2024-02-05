import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(
      `http://localhost:3001/rickandmorty/character/${id}?key=pi-felipegd29`
    ).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);
  return (
    <div className={style.container}>
      <img
        className={style.characterImg}
        src={character.image && character.image}
        alt={character.name && character.name}
      />
      <div>
        <div className={style.detailCharacter}>
          <h2>Name: {character.name && character.name}</h2>
          <h2>Status: {character.status && character.status}</h2>
          <h2>Species: {character.species && character.species}</h2>
          <h2>Gender: {character.gender && character.gender}</h2>
          <h2>Origin: {character.origin?.name && character.origin?.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Detail;
