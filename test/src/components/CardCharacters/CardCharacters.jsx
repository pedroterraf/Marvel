import { NavLink } from 'react-router-dom';
import './CardCharacters.scss'


const CardCharacters = ({a}) => {
    return (
        <div key={a?.id} className="our_character">
          <img className="our_character_image" src={a?.image} alt={a?.name} />
          <div className="background_container">
            <h6 className="background_name">{a?.name}</h6>
            <NavLink to={`/details/${a?.id}`} style={{ textDecoration: 'none' }} className="background_button">Learn more</NavLink>
          </div>
        </div>
      );
}


export default CardCharacters