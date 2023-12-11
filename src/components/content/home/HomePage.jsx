import './styles.css';
import resume from '../../../files/Pavel_Skuratovets_CV.pdf';

const HomePage = () => {

    return (
      <div className='content-item item-home'>
        <div className='home-left'>
            <div className='left-extra'>Hello</div>
            <div className='left-me'>I'm Pavel Skuratovets</div>
            <div 
              className='left-extra' 
              style={{ color: 'var(--extra-color)' }}
            >
              Java Software Developer
            </div>
            <div className="left-cv">
              <a 
                className="left-cv-a"
                href={resume}
                rel='noreferrer noopener'
                download='Pavel_Skuratovets_CV.pdf'
              >
                Download CV
              </a>
            </div>
        </div>
      </div>
    );
}

export default HomePage;