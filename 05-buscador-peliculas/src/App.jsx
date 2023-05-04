import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css'
import { ListOfMovies, NoMoviesResults } from './components/Movies';
import { useMovies } from './hooks/useMovies';
import debounce from "just-debounce-it";

/**
 * ¿Para qué se usan los custom Hooks?
 * Se usan principalmente para extraer lógica de nuestro componente.
 * Truco: si tú tienes un useEffect en tu componente es un buen candidato a custom hook.
 * @returns 
 */

const useSearch = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("No se puede buscar una pelicula vacía.");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una pelicula con un número.");
      return;
    }

    if (search.length < 3) {
      setError("No se puede buscar una pelicula con menos de 3 caracteres.");
      return;
    };

    setError(null);
  }, [search])

  return { search, setSearch, error };
};

function App() {
  // Explicación mala: Te permite crear una referencia a un elemento del DOM ----"InCompleta"
  // Explicación buena: useRef es un Hook que permite crear una referencia mutable que persiste durante todo el ciclo de vida de tu componente. Es muy util para guardar cualquier valor que puedas mutar: como un identificador, Como un elemento del DOM, como un contador, etc. y que cada vez que cambia no vuelve a renderizar el componente. Eso es lo que lo hace totalmente diferente al useState.
  // useRef empieza a hablar en el minuto 01:00:00
  const inputRef = useRef();
  /*
    Explicacion de como usar el useRef Mutable minuto 01:22:00
   */
  const { search, setSearch, error } = useSearch();
  const [sort, setSorted] = useState(false);
  const { movies, getMovies, loading } = useMovies({ search, sort });
  const hasMovies = movies?.length > 0;

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   const value = inputRef.current.value;
  //   console.log(value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // no Controlada.
    // si tenemos el useState no es necesario esto. 
    // const dataForm = Object.fromEntries(
    //   new window.FormData(e.target)
    // );
    // const value = inputRef.current.value;
    // const query = dataForm.get("query");
    // console.log({ search });
    getMovies({ search });
  };

  const debouncedSearch = useCallback(
    debounce((search) => {
      console.log("Executed debounced search")
      getMovies({ search });
    }, 500), [])

  const handleChange = (e) => {
    const newSearch = e.target.value;
    setSearch(e.target.value);
    debouncedSearch(newSearch)
  };

  const counter = useRef(0); // valor que persiste entre renders

  // let i = 0;
  counter.current++;
  // console.log(counter);

  return (
    <div className="page">
      <header>
        <h1 className='page'>Buscador de peliculas</h1>
        <form onSubmit={handleSubmit} className="form">
          <input onChange={handleChange} name="search" ref={inputRef} placeholder="Avengers, Star wars, The matrix..." />
          <input type="checkbox" name="sort" id="sort" onChange={e => setSorted(e.target.checked)}/>
          <button type="submit">Search</button>
        </form>
        {error && <p style={{color: "red"}}>{error}</p>}
      </header>

      <main>
        {loading ? <>Loading....</> : 
          hasMovies
            ? <ListOfMovies movies={movies}/>
            : <NoMoviesResults />
        }
      </main>

    </div>
  )
}

export default App
