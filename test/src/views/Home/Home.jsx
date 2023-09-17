import './Home.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar'

const Home = () => {
    const [character, setCharacter] = useState([]);
    let [currentPage, setCurrentPage] = useState(1);

    // keyPublic = 'd21bb365ba4ff40132f24c4ad59a1f3c';
    // keyPrivate = '2098508abb2c5044f8ca3843be9fa814ab18cb86';
    // 12098508abb2c5044f8ca3843be9fa814ab18cb86d21bb365ba4ff40132f24c4ad59a1f3c
    //ts : 1

    const apiKey = 'd21bb365ba4ff40132f24c4ad59a1f3c';
    const hash = 'f05d123508f64e411f3846f09b44fe07';
    const URL = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey='

    const fetchData = async () => {
        try {
          const response = await axios.get(
            `${URL}${apiKey}&hash=${hash}`
            );
            
            const characters = response.data.data.results?.map((e) => {
              return {
              id: e?.id,
              name: e?.name,
              image: `${e?.thumbnail.path}.${e?.thumbnail.extension}`,
            };
          })
          console.log(characters)
          setCharacter(characters); 
        } catch (error) {
          console.error("Error fetching data:", error);
          setCharacter([]);
        }
      };

    useEffect(() => {
        fetchData();
      }, []);
  
    const countriesPerPage = 4;
  
    const lastIndex = currentPage * countriesPerPage;
    const firstIndex = lastIndex - countriesPerPage;
    const currentCharacters = character.slice(firstIndex, lastIndex);
  
    const total = Math.ceil(character.length / countriesPerPage);
  
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
          <SearchBar />
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
                  <div key={a?.id} className="our_products_product">
                    <img className="our_products_image" src={a?.image} alt={a?.name} />
                    <div className="background_container">
                      <h6 className="background_title">{a?.name}</h6>
                      <NavLink to={`/details/${a?.id}`} style={{ textDecoration: 'none' }} className="background_button">Learn more</NavLink>
                    </div>
                  </div>
                );
              })}
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