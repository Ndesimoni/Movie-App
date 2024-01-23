import { useState, useEffect } from "react";

const KEY = "91bc1bfa";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  // const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      //   callBack?.();

      const controller = new AbortController();

      async function fetchMovie() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok) {
            throw new Error("something went wrong with the fetchig movies");
          }
          const data = await res.json();
          if (data.Response === "False") {
            throw new Error(`❌ movies not found}`);
          }

          setMovies(data.Search);
          setError("");
        } catch (error) {
          if (error.name !== "aboutError") {
            console.log(error.message);
            setError(error.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 2) {
        setMovies([]);
        setError(" ");
        return;
      }
      //   onCloseMovie();
      fetchMovie();
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isLoading, error };
}
