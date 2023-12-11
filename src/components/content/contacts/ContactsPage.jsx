import { RiMapPinLine, RiLinkedinLine, RiTelegramLine, RiMailLine } from 'react-icons/ri';
import './styles.css';

const ContactsPage = () => {

    return (
        <div className='content-item item-contacts'>
            <div className='cont-title'>
                <div className='title-text'>Contacts</div>
                <div></div>
            </div>
            <div className='contacts'>
                <div className='contact'>
                    <div className='contact-name'>
                        <span className='contact-icon'><RiMapPinLine className='icon'/></span>
                        <div className='name-text'>Location</div>
                    </div>
                    <div className='contact-data'>Minsk, Belarus</div>
                </div>
                <div className='contact'>
                    <div className='contact-name'>
                        <span className='contact-icon'><RiLinkedinLine className='icon'/></span>
                        <div className='name-text'>LinkedIn</div>
                    </div>
                    <div className='contact-data'>linkedin.com/in/pavelstj</div>
                </div>
                <div className='contact'>
                    <div className='contact-name'>
                        <span className='contact-icon'><RiTelegramLine className='icon'/></span>
                        <div className='name-text'>Telegram</div>
                    </div>
                    <div className='contact-data'>@millnti</div>
                </div>
                <div className='contact'>
                    <div className='contact-name'>
                        <span className='contact-icon'><RiMailLine className='icon'/></span>
                        <div className='name-text'>Email</div>
                    </div>
                    <div className='contact-data'>pavelstj@gmail.com</div>
                </div>
            </div>
        </div>
    );
}

export default ContactsPage;