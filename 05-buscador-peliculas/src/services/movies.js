import { useId } from "react";

export const searchMovies = async ({ search }) => {
  if (search === "") return null;

  try {
    if (search) {
      const data = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${search}&`);

      const moviesResult = await data.json();
      const movies = moviesResult.Search;
 
      // Siempre es mejor hacer el mapeo de la API y adecuar el objeto a nuestra necesidad. Si en el futuro la API cambia no dependeremos enteramente de sus resultados.
      return movies?.map(movie => ({
        id: movie?.imdbID || useId,
        title: movie?.Title,
        poster: movie?.Poster,
        year: movie?.Year
      }));
    } else {
      setResponseMovieApi(withNoresults);
    }
  } catch (e) {
    throw new Error("Error searching Movies");
  }
}