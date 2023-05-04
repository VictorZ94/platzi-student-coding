import { useCallback, useMemo, useRef, useState } from 'react';
import { searchMovies } from '../services/movies';

export const useMovies = ({ search, sort }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);

  const EnteredCounter = useRef(0);

  // useMemo sirve para memoizar funciones y otros que no sean funciones como objetos, array, calculos, etc...
  // useCallback es lo mismo que useMemo pero pensado para funciones. Lo unico que hace useCallback es simplificar la sintaxis.
  // Esto es lo mismo que hacerlo con useCallback
  /**const getMovies = useMemo(() => {
    return async ({ search }) => {
      if (search === previousSearch.current) return;

      try {
        setLoading(true);
        setError(true);
        // Forma usando promesas
        previousSearch.current = search;
        const newMovies = await searchMovies({ search });
        setMovies(newMovies);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  }, []);**/

  // useCallback le pasamos directamente la función.
  // useCallback vs useMemo === useCallback para funciones useMemo para valores
  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return;

    try {
      setLoading(true);
      setError(true);
      // Forma usando promesas
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * UseMemo nos permite momeizar calculos complejos no necesarios se renderizen cada que cambia el componente.
   * @returns 
   */
  const getSortedMovies = useMemo(() => {
    // console.log(`Entered by ${EnteredCounter.current++}`);

    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
        : movies
  }, [sort, movies]);

  return { movies: getSortedMovies, getMovies, loading };
};
