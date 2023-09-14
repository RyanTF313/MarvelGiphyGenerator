/* eslint-disable react/prop-types */
import React, { useState, useContext } from "react";
import { ErrorContext } from "../App";
const envObj = import.meta.env;

function Gif({ character }) {
  const [gifSrc, setGifSrc] = useState(null);
  const [emptyResults, setEmptyResults] = useState(false);
  const errorContext = useContext(ErrorContext);
  const {setError} = errorContext

  const handleClick = (e) => {
    e.preventDefault();
    fetch(
      `${envObj.VITE_GIPHY_API_SEARCH_URL}?q=${
        character.name + " marvel-comics"
      }&api_key=${envObj.VITE_GIPHY_API_KEY}`
    )
      .then((res) => res.json())
      .then(({ data }) => {
        const gif = data[Math.floor(Math.random() * data.length)];
        if (!Object.keys(gif)){
          setEmptyResults(true)
        }
        setGifSrc(gif);
      })
      .catch((err) => {
        const obj = {
          status: err.meta.status,
          message: err.meta.msg,
        };
        setError(obj);
      });
  };

  return (
    <div
      className="gif"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: "0 0 50%",
      }}
    >
      <button
        type="button"
        onClick={handleClick}
        style={{ width: "200px", height: "50px", fontSize: "24px" }}
      >
        Get Random Gif
      </button>
      {gifSrc && (
        <img
          src={gifSrc.images.original.url}
          alt={gifSrc.title}
          style={{ display: "flex", width: "500px", height: "500px" }}
        />
      )}
      {emptyResults && <div>No Results found</div>}
    </div>
  );
}

export default Gif;
