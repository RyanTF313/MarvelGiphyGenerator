/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const resultsStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const linkStyle = {
  border: "1px solid #f78f3f",
  color: "#f78f3f",
  fontSize: "18px",
  textDecoration: "none",
  padding: "10px",
};
const listStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "32px",
  flexWrap: "wrap",
  margin: 0,
  padding: 0,
};
const liStyle = {
  display: "flex",
  flex: "0 0 50%",
  listStyle: "none",
};

function ResultsList({ characters }) {
  return characters ? (
    <div className="characters-results-list" style={resultsStyle}>
      {characters.length > 0 ? (
        <div className="results" style={resultsStyle}>
          <h4 style={{ fontSize: "24px" }}>Results: </h4>
          <ul style={listStyle}>
            {!!characters.length &&
              characters.map((char) => (
                <li key={char.id} style={liStyle}>
                  <Link to={`/character/${char.id}`} style={linkStyle}>
                    {char.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ) : (
        <p>No Results Found</p>
      )}
    </div>
  ) : (
    <div></div>
  );
}

export default ResultsList;
