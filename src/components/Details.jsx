/* eslint-disable react/prop-types */
import React from "react";

function Details({ character }) {
  return (
    <div className="details" style={{ flex: "0 0 50%" }}>
      <h4 style={{ textAlign: "center", fontSize: "24px" }}>Description: </h4>
      <p style={{ textAlign: "center", fontSize: "20px", padding: "10px 25%" }}>
        {character.description.trim()
          ? character.description
          : "No description Available"}
      </p>

      {!!character.urls && (
        <p>
          <a
            href={character.urls[0].url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textAlign: "center",
              fontSize: "24px",
              display: "block",
              width: "100%",
              color: "inherit",
              textDecoration: "none",
              borderTop: '2px double blue'
            }}
          >
            Comics featured
          </a>
        </p>
      )}
      
    </div>
  );
}

export default Details;
