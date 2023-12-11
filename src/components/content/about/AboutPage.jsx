import './styles.css';

const AboutPage = () => {

    return(
        <div className='content-item item-about'>
            <div className='about-title'>
                <div className='title-text'>About</div>
                <div></div>
            </div>
            <p className='about-text'>Software engineer with an ability to adapt, work persistently and concentrate. 
                Develop backend in Java, work with a relational database, have experience in frontend with React/Redux. 
                My goal is to increase the level of English and my technical skills and to improve the results of work.</p>
            <div className='about-educ'>
                <div className='educ-title'>Education</div>
                <div className='educ-who'>Industrial electronic</div>
                <div className='educ-info'>Brest State Technical University</div>
                <div className='educ-info'>09/2015 - 07/2019</div>
            </div>
            <div className='about-lang'>
                <div className='lang-title'>Languages</div>
                <ul className='lang-list'>
                    <li>Belarusian - native</li>
                    <li>Russian - native</li>
                    <li>English - A2</li>
                </ul>
            </div>
            <div className='about-tech'>
                <div className='tech-title'>Tech skills</div>
                <ul className='tech-list'>
                    <li>Java 8-11</li>
                    <li>Spring Framework</li>
                    <li>Spring Boot</li>
                    <li>Spring Data</li>
                    <li>Spring Web</li>
                    <li>Spring Security</li>
                    <li>Hibernate</li>
                    <li>Gradle</li>
                    <li>SQL, PL/pgSQL</li>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                    <li>MapStruct</li>
                    <li>Docker</li>
                    <li>Git</li>
                    <li>JavaScript</li>
                    <li>React.js, Redux.js</li>
                </ul>
            </div>
        </div>
    );
}

export default AboutPage;