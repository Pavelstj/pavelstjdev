import "./styles.css";
import resume from '../../files/Pavel_Skuratovets_CV.pdf';
import { RxHamburgerMenu } from 'react-icons/rx';



const Header = ({ setActiveMenu, activeMenu }) => {
  
    return (
      <div className={activeMenu 
        ? 'app-head menu-active' : 'app-head'}
      >
        <RxHamburgerMenu 
          onClick={() => setActiveMenu(true)}
          style={activeMenu && { display: 'none' }}
          className='hamburger'
        />
        <div className='head-cv'>
          <a 
            className='head-cv-a'
            href={resume}
            download='Pavel_Skuratovets_CV.pdf'
            rel='noreferrer noopener'
          >
            Download CV
          </a>
        </div>
        <div className='h-logo'>
          <div className='h-logo-name'>Pavel Skuratovets</div>
          <div className='h-logo-who'>Java Developer</div>
        </div>
      </div>
    );
}


export default Header;