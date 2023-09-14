/* eslint-disable react/prop-types */
import Gif from "../components/Gif";
import Details from "../components/Details";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ErrorContext } from "../App";
import md5 from "md5";
const envObj = import.meta.env;

function Character() {
  const { id: characterId } = useParams();
  const [character, setCharacter] = useState({});

  const errorContext = useContext(ErrorContext);
  const { setError } = errorContext;

  useEffect(() => {
    fetch(
      `${
        envObj.VITE_MARVEL_API_URL
      }v1/public/characters/${characterId}?ts=${new Date().getTime()}&apikey=${
        envObj.VITE_MARVEL_PUBLIC_API_KEY
      }&hash=${md5(
        new Date().getTime() +
          envObj.VITE_MARVEL_PRIVATE_API_KEY +
          envObj.VITE_MARVEL_PUBLIC_API_KEY
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        data.data.results[0].description = data.data.results[0].description
          .split("ï¿½")
          .join("'");
        data.data.results[0].uriName = data.data.results[0].name
          .split(" ")
          .map((str) => str.replace(/[()]/g, "").toLowerCase())
          .join("_");
        setCharacter(data.data.results[0]);
      })
      .catch((err) => console.log(err));
  }, [characterId]);

  return character.id ? (
    <div
      className="character"
      style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
    >
      <h2 style={{ flex: "0 0 100%", textAlign: "center", fontSize: "36px" }}>
        Character: {character.name}
      </h2>
      <Gif character={character} setError={setError} />
      <Details character={character} />
    </div>
  ) : (
    <div></div>
  );
}

export default Character;
