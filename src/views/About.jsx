import { useEffect, useContext } from "react";
import { ErrorContext } from "../App";

function About() {
  const errorContext = useContext(ErrorContext);
  const { setError } = errorContext;

  useEffect(() => {
    setError({});
  }, []);

  return (
    <div
      className="about"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>About: Marvel-Giphy-Generator</h1>
      <h2>How it works</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum numquam
        animi et, rem debitis velit dicta cum quidem id accusamus sed at
        reiciendis iusto aliquam, esse quae repudiandae non delectus?
      </p>
      <h2>Technology used:</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>React-router-dom</li>
        <li>Marvel API</li>
        <li>Giphy API</li>
      </ul>
    </div>
  );
}

export default About;
