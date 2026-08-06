import { useState, useEffect } from 'react';

const useFetch = (query, page) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (query.trim() === "") {
      setMovies([]);
      setError(null);
      setIsLoading(false);
      setTotalPages(0);
      return;
    }

    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=62aede51&s=${query}&page=${page}`, { signal });
        const data = await response.json();
        
        if (data.Response === "True") {
          setMovies(data.Search);
          setTotalPages(Math.ceil(data.totalResults / 10));
        } else {
          setMovies([]);
          setTotalPages(0);
          setError(data.Error === "Movie not found!" ? "Film tapılmadı " : data.Error);
        }
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log("Köhnə sorğu ləğv edildi");
        } else {
          setError("Şəbəkə xətası baş verdi. İnternet bağlantınızı yoxlayın! ");
          setMovies([]);
          setTotalPages(0);
        }
      } finally {
        setIsLoading(false);
      }
    };

    const timerId = setTimeout(() => {
      fetchData();
    }, 500);

    return () => {
      clearTimeout(timerId); 
      abortController.abort(); 
    };
  }, [query, page]); 

  return { movies, isLoading, error, totalPages };
};

export default useFetch;