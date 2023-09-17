import './Landing.scss'
import { NavLink } from 'react-router-dom';

const Landing = () => {
    return (
        <div className='container'>
            <div className='landing'>
                <h1>¡Welcome to Marvel!</h1>
            <NavLink style={{ textDecoration: 'none' }} to="/home">
                <button className='home'>HOME</button>
            </NavLink>
            </div>
        </div>
    )
}

export default Landing;