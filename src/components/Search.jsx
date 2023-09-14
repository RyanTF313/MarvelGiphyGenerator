/* eslint-disable react/prop-types */
import React, { useState, useContext } from "react";
import { ErrorContext } from "../App";
import md5 from "md5";
const envObj = import.meta.env;

const searchStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
};

const headingStyle = {
  fontSize: "32px",
};

const inputStyle = {
  width: "400px",
  height: "50px",
  fontSize: "28px",
  outline: "none",
  border: "3px solid #f78f3f",
  borderRadius: "10px",
  color: "#f78f3f",
};

const btnStyle = {
  width: "150px",
  height: "55px",
  fontSize: "28px",
  outline: "none",
  border: "3px solid #f78f3f",
  borderRadius: "10px",
  brderleft: "none",
  color: "#f78f3f",
};

function Search({ setCharacters, setIsLoading }) {
  const errorContext = useContext(ErrorContext);
  const { setError } = errorContext;
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setCharacters(null);
    setIsLoading(true);
    if (!e.target.value) {
      setIsLoading(false);
      return;
    }
    fetch(
      `${
        envObj.VITE_MARVEL_API_URL
      }v1/public/characters?ts=${new Date().getTime()}&apikey=${
        envObj.VITE_MARVEL_PUBLIC_API_KEY
      }&hash=${md5(
        new Date().getTime() +
          envObj.VITE_MARVEL_PRIVATE_API_KEY +
          envObj.VITE_MARVEL_PUBLIC_API_KEY
      )}&nameStartsWith=${e.target.value}&limit=100`
    )
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError({});
    setCharacters(null);
    setIsLoading(true);
    if (!inputValue) {
      setIsLoading(false);
      setError({
        status: "Invalid Input Value",
        message: "You must enter a name",
      });

      return;
    }

    fetch(
      `${
        envObj.VITE_MARVEL_API_URL
      }v1/public/characters?ts=${new Date().getTime()}&apikey=${
        envObj.VITE_MARVEL_PUBLIC_API_KEY
      }&hash=${md5(
        new Date().getTime() +
          envObj.VITE_MARVEL_PRIVATE_API_KEY +
          envObj.VITE_MARVEL_PUBLIC_API_KEY
      )}&nameStartsWith=${inputValue}&limit=100`
    )
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };
  return (
    <div className="Search" style={searchStyle}>
      <img
        src="https://gifdb.com/images/high/marvel-superhero-comics-logo-ayb7iohl2zg3rh8k.gif"
        alt="Marvel Logo"
        style={{ display: "flex", maxWidth: "480px" }}
      />
      <h2 style={headingStyle}>Input your character Name:</h2>
      <form className="character-search">
        <input
          type="text"
          name="character"
          id=""
          value={inputValue}
          onChange={handleChange}
          style={inputStyle}
          placeholder="Enter character name"
        />
        <button onClick={handleSubmit} style={btnStyle}>
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
