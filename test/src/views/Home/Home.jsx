import './Home.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";
import React, { useEffect, useState } from "react";
import SearchBar from '../../components/SearchBar/SearchBar'
import axios from 'axios';
import CardCharacters from '../../components/CardCharacters/CardCharacters';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [character, setCharacter] = useState([]);
  const [result, setResult] = useState([]);

  const fetchDataCharacters = async () => {
    const apiKey = 'd21bb365ba4ff40132f24c4ad59a1f3c';
    const hash = 'f05d123508f64e411f3846f09b44fe07';
    const URL = 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=';
    //https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=d21bb365ba4ff40132f24c4ad59a1f3c&hash=f05d123508f64e411f3846f09b44fe07
    try {
      const response = await axios.get(`${URL}${apiKey}&hash=${hash}`);
  
      const characters = response.data.data.results?.map((e) => {
        return {
          id: e?.id,
          name: e?.title,
          image: `${e?.thumbnail.path}.${e?.thumbnail.extension}`,
        };
      });
  
      setResult(characters)
      setCharacter(characters);
    } catch (error) {
      console.error("Error fetching data:", error);
      setCharacter([]);
    }
  };
  useEffect(() => {
    fetchDataCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
      
    //paginado 
    const countriesPerPage = 6;
  
    const lastIndex = currentPage * countriesPerPage;
    const firstIndex = lastIndex - countriesPerPage;
    const currentCharacters = result.slice(firstIndex, lastIndex);
  
    const total = Math.ceil(result.length / countriesPerPage);
  
    const nextHandler = () => {
      if (currentPage < total) {
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
      }
    };
  
    const prevHandler = () => {
      if (currentPage > 1) {
        const prevPage = currentPage - 1;
        setCurrentPage(prevPage);
      }
    };

    return (
      <div className='containerHome'>
        <div className="containPaginate">
          <div className='titleText'>
            <h2 className="text2">MARVEL</h2>
            <hr />
            <h1 className="text">TRENDING IN THE UNIVERSE</h1>
          </div>
          <SearchBar character={character} setResult={setResult} />
          <div className="paginate">
            <div className="buttons">
              <button onClick={prevHandler} className="prev">
                Prev
              </button>
              <button onClick={nextHandler} className="next">
                Next
              </button>
            </div>
            <span className="text">{`${currentPage} / ${total}`}</span>
          </div>
        </div>
        <div className="BoxContainer">
          {character?.length > 0 ? (
            <div className="Box">
              {currentCharacters.map((a) => {
                return (
                  <CardCharacters a={a} />
                )
              } ) }
            </div>
          ) : (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </div>
      </div>
    )
}

export default Home;