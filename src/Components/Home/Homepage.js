import React, {useEffect, useState} from 'react';
import Movies from './Movies';

const Homepage = () => {
    const[query, setQuery] = useState("");
    const[searches, setSearches] = useState('');
    const[results, setResults] = useState([]);

    const updateResults = (e) =>{
        setSearches(e.target.value); 
      }
      const getResults = (e) =>{
        e.preventDefault();
        setQuery(searches);
        }
 
    useEffect(() => {
      const searchMovies = async () => {
        const api_Key = "d3ceb755";
        const searchUrl = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${api_Key}`);
        const response = await searchUrl.json();
        console.log(response.Search);
        setResults(response.Search);
    }
    searchMovies();
 }, [query])
      
    return(
    <div>
   <section className= "first-section">
        <div className="firstsection-div">
        <h1>Welcome to The Shoppies.<br /> Now you can search your favourite movie and nominate.</h1>
        <form className = "search-form" onSubmit={getResults}>
          <input className = "search-input" name="query" type = "text"
           value={searches}
           placeholder="Search your favourite movie"
           onChange={updateResults} />
          <button className = "search-btn" type = "submit">search</button>
        </form>
        </div>
        </section>

        <section className="result-section">
        <h2>Your Search results for "{query}" </h2>
            <div className="card-div">
               {results && results.filter((result) => result.Poster).map((result) => (
                  <Movies 
                  key={result.imdbID}
                  id={result.imdbID}
                  Poster = {result.Poster}
                  Plots = {result.Year}
                  title = {result.Title}
                  />
              ))
              } 
          </div>   
        </section>
</div>
    )
}

export default Homepage;