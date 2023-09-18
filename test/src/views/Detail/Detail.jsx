import { useEffect, useState } from 'react';
import './Detail.scss';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';


const Detail = () => {
  
  const {id} = useParams();
  const [detail, setDetail] = useState([]);

  const fetchDataDetail = async (id) => {
    const apiKey = 'd21bb365ba4ff40132f24c4ad59a1f3c';
    const hash = 'f05d123508f64e411f3846f09b44fe07';
    const URL = `https://gateway.marvel.com:443/v1/public/comics/${id}?ts=1&apikey=`;
    try {
      const response = await axios.get(`${URL}${apiKey}&hash=${hash}`);
  
      const comics = response.data.data.results?.map((e) => {
        const characterNames = e.characters.items.map((character) => character.name);
        const creators = e.creators.items.map((creator) => creator.name);
        return {
          key: e?.id,
          id: e?.id,
          title: e?.title,
          description: e?.description,
          creators: creators.join(', '),
          characters: e?.characters.available,
          characterNames: characterNames.join(', '),
          image: `${e?.thumbnail.path}.${e?.thumbnail.extension}`,
        };
      });

      setDetail(comics);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDetail([detail]);
    }
  };

  useEffect(() => {
    fetchDataDetail(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {detail.map((a) => {
        return(
          <div className='detail-all'>
            <Card sx={{ maxWidth: 500 }} className='card-detail-all' key={a?.id}>
              <Typography variant="body2" color="text.secondary" className='card-id'>
                  {a?.id}
              </Typography>
              <CardMedia
                className='card-detail-image'
                sx={{ height: 250 }}
                image={a?.image}
                title={a?.name} 
                alt={a?.name}
              />
              <CardContent className='card-detail-desc'>
                <Typography gutterBottom variant="h5" component="div" className='card-desc-name'>
                  {a?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" className='card-desc-characters'>
                  {a?.creators.length === 0 ? ('No creators found') : (a?.creators.length === 1 ? (`Creator: ${a?.creators}`) : (`Creators: ${a?.creators}`))}
                </Typography>
                <hr />
                <Typography variant="body2" color="text.secondary" className='card-desc-desc'>
                  {a?.description}
                </Typography>
                <hr />
                <Typography variant="body2" color="text.secondary" className='card-desc-count'>
                  {a?.characters === 0 ? ('No characters found') : (a?.characters === 1 ? (`${a?.characters} Character`) : (`${a?.characters} Characters`))}
                </Typography>
                <Typography variant="body2" color="text.secondary" className='card-desc-characters'>
                  {a?.characterNames}
                </Typography>
                <CardActions className='card-detail-buttons'>
                  <NavLink to={`/home`} style={{ textDecoration: 'none' }}>
                    <Button size="small" color="primary" className='card-button'>
                      Back Home
                    </Button>
                  </ NavLink>
                </CardActions>
              </CardContent>
            </Card>
          </div>
        )
      })
      } 
    </div>
    
  )
}


export default Detail