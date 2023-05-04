// Es preferible separa en componentes cada que se vaya a utilizar un render porque así evita que cada que la aplicación se llame se vuelva a crear el componente.
export const ListOfMovies = ({ movies }) => {
  return (
    <ul className="grid-movies">
      {
        movies.map((movie) => (
          <li className="movie" key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  );
};

export const NoMoviesResults = () => {
  return (
    <h2>No se encontraron películas para esta busqueda.</h2>
  );
}