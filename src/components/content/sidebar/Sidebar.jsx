import './styles.css';
import resume from '../../../files/Pavel_Skuratovets_CV.pdf';
import { NavLink } from 'react-router-dom';
import { RiMailLine, RiGithubLine, RiLinkedinLine, RiTelegramLine } from 'react-icons/ri';
import { RxCross1 } from 'react-icons/rx';

const Sidebar = ({ setActiveMenu, activeMenu }) => {

    return (
    <div 
      className={activeMenu ? 'app-sidebar active-menu' 
                              : 'app-sidebar'}
    >
      <div 
        className='sidebar-top'
      >
        <div className='top-cv'>
          <a 
            className='top-cv-a'
            href={resume}
            download='Pavel_Skuratovets_CV.pdf'
            rel='noreferrer noopener'
          >
            Download CV
          </a>
        </div>
        <RxCross1 
          onClick={() => setActiveMenu(false)}
          className='sidebar-close'
        />
      </div>
      <ul 
        className='sidebar-list' 
        onClick={() => setActiveMenu(false)}
      >
        <NavLink to='/'><li className='sidebar-item'>Home</li></NavLink>
        <NavLink to='/about'><li className='sidebar-item'>About</li></NavLink>
        <NavLink to='/experience'><li className='sidebar-item'>Experience</li></NavLink>
        {/* <NavLink to='/portfolio'><li className='sidebar-item'>Portfolio</li></NavLink> */}
        <NavLink to='/contacts'><li className='sidebar-item'>Contacts</li></NavLink>
      </ul>
      <div className='sidebar-links'>
        <a 
          className='sidebar-icon'
          href='https://linkedin.com/in/pavelstj'
          target='_blank'
          rel='noreferrer noopener'
          data-tooltip='LinkedIn'
        >
          <RiLinkedinLine className='icon'/>
        </a>
        <a 
          className='sidebar-icon'
          href='https://t.me/millnti'
          target='_blank'
          rel='noreferrer noopener'
          data-tooltip='Telegram'
        >
          <RiTelegramLine className='icon'/>
        </a>
        <a 
          className='sidebar-icon'
          href='mailto:pavelstj@gmail.com'
          rel='noreferrer noopener'
          data-tooltip='Email'
        >
          <RiMailLine className='icon'/>
        </a>
        <a 
          className='sidebar-icon'
          href='https://github.com/Pavelstj'
          target='_blank'
          rel='noreferrer noopener'
          data-tooltip='GitHub'
        >
          <RiGithubLine className='icon'/>
        </a>
      </div>
    </div>
    );
}

export default Sidebar;