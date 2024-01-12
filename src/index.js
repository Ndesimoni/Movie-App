import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
// import "./index.css";
// import App from "./App";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>this movie was rated {movieRating} stars</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating
      maxRating={5}
      messages={["terribel", "bad", "ok", "good", "amazing"]}
    />
    <StarRating
      maxRating={5}
      color="red"
      size={35}
      className="className"
      defaultRating={3}
    />

    <Test />

    {/* <App /> */}
  </React.StrictMode>
);
