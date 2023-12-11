import './styles.css';
import { NavLink } from 'react-router-dom';

const Menu = () => {

    return (
    <div className='app-menu'>
      <ul className='menu-list'>
        <NavLink to='/'><li className='menu-item'>Home</li></NavLink>
        <NavLink to='/about'><li className='menu-item'>About</li></NavLink>
        <NavLink to='/experience'><li className='menu-item'>Experience</li></NavLink>
        {/* <NavLink to='/portfolio'><li className='menu-item'>Portfolio</li></NavLink> */}
        <NavLink to='/contacts'><li className='menu-item'>Contacts</li></NavLink>
      </ul>
    </div>
    );
}

export default Menu;