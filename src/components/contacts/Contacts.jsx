import './styles.css';
import { RiMailLine, RiGithubLine, RiLinkedinLine, RiTelegramLine } from 'react-icons/ri';

const Contacts = () => {

    return (
      <div className='app-contacts'>
        <div className='contacts-icons'>
          <a 
            className='contacts-icon'
            href='https://linkedin.com/in/pavelstj'
            target='_blank'
            rel='noreferrer noopener'
            data-tooltip='LinkedIn'
          >
            <RiLinkedinLine className='icon'/>
          </a>
          <a 
            className='contacts-icon'
            href='https://t.me/millnti'
            target='_blank'
            rel='noreferrer noopener'
            data-tooltip='Telegram'
          >
            <RiTelegramLine className='icon'/>
          </a>
          <a 
            className='contacts-icon'
            href='mailto:pavelstj@gmail.com'
            rel='noreferrer noopener'
            data-tooltip='Email'
          >
            <RiMailLine className='icon'/>
          </a>
          <a 
            className='contacts-icon'
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

export default Contacts;