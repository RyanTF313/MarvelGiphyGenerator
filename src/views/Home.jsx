/* eslint-disable react/prop-types */
import ResultsList from "../components/ResultsList";
import Search from "../components/Search";
import React, { useState, useEffect, useContext } from "react";
import { ErrorContext } from "../App";

const homeStyle = {
  display: "flex",
  flexDirection: "column",
  alignitems: "center",
  justifyContent: "center",
  padding: "18px 25%",
};

function Home() {
  const [characters, setCharacters] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const errorContext = useContext(ErrorContext);
  const { setError } = errorContext;

  useEffect(() => {
    setError({});
  }, []);

  return (
    <div className="Home" style={homeStyle}>
      <Search
        setCharacters={setCharacters}
        setIsLoading={setIsLoading}
      />
      {!isLoading ? (
        <ResultsList characters={characters} />
      ) : (
        <p style={{ textAlign: "center" }}>Loading.....</p>
      )}
    </div>
  );
}

export default Home;
