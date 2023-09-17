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
    const URL = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=`;
    try {
      const response = await axios.get(`${URL}${apiKey}&hash=${hash}`);
  
      const characters = response.data.data.results?.map((e) => {
        return {
          id: e?.id,
          name: e?.name,
          description: e?.description,
          image: `${e?.thumbnail.path}.${e?.thumbnail.extension}`,
        };
      });
  
      setDetail(characters);
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
            <Card sx={{ maxWidth: 500 }} className='card-detail-all'>
              <CardMedia
                className='card-detail-image'
                sx={{ height: 250 }}
                image={a?.image}
                title={a?.name} 
                alt={a?.name}
              />
              <CardContent className='card-detail-desc'>
                <Typography gutterBottom variant="h5" component="div" className='card-desc-name'>
                  {a?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" className='card-desc-desc'>
                  {a?.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" className='card-desc-id'>
                  {a?.id}
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