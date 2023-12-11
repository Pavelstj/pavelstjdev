import './styles.css';
import data from './data.json';
import { useState } from 'react';

const ExperiencePage = () => {

    const [active, setActive] = useState(0);
    const [project, setProject] = useState(data.projects[0]);

    const changeProject = (id) => {
        setActive(id);
        setProject(data.projects[id]);
    } 

    return (
        <div className='content-item item-experience'>
            <div className='exp-title'>
                <div className='title-text'>Experience</div>
                <div></div>
            </div>
            <div className='exp-info'>
                <div className='info-date'><span>3 years,</span><span>3 months</span></div>
                <div className='info-where'>
                    <div className='where-who'>Junior <span>Fullstack</span> Developer</div>
                    <div className='where-where'><span>Epol Soft</span> - Brest, Belarus</div>
                    <div className='where-when'>08/2019 - 08/2021</div>
                </div>
                <div className='info-where'>
                    <div className='where-who'><span>Java</span> Software Developer</div>
                    <div className='where-where'><span>Solbeg</span> - Minsk, Belarus</div>
                    <div className='where-when'>08/2021 - 10/2022</div>
                </div>
            </div>
            <ul className='projects'>
                {data.projects.map(proj => <li 
                    key={proj.id}
                    onClick={() => changeProject(proj.id)}
                    className={proj.id === active ? 'active' : ''}
                >
                    {proj.name}
                </li>)}
            </ul>
            <div className='project'>
                <div className='project-title'>
                    <div className='title-name'>{project.name}</div>
                    <div className='title-date'>{project.period}</div>
                </div>
                <div className='project-about'>{project.description}</div>
                <div className='project-tech'>
                    <span>Technologies: </span> {project.technologies}
                </div>
            </div>
        </div>
    );
}

export default ExperiencePage;