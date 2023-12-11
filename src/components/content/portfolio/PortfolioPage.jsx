import { useState } from 'react';
import { RiGithubLine, RiGlobalLine } from 'react-icons/ri';
import './styles.css';
import data from './data.json';

const PortfolioPage = () => {

    const [active, setActive] = useState(0);
    const [project, setProject] = useState(data.projects[0]);

    const changeProject = (id) => {
        setActive(id);
        setProject(data.projects[id]);
    } 

    return (
        <div className='content-item item-portfolio'>
            <div className='port-title'>
                <div className='title-text'>Portfolio</div>
                <div></div>
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
                <div className='project-title'>{project.name}</div>
                <div className='project-about'>{project.description}</div>
                <div className='project-tech'><span>Technologies: </span> {project.technologies}</div>
                <div className='project-links'>
                    {project.links && project.links.github ?
                        <a 
                            className='l-link'
                            href={project.links.github}
                            target='_blank'
                            rel='noreferrer noopener'
                            data-tooltip='GitHub'
                        >
                            <RiGithubLine className='icon'/>
                        </a> : <></>}
                    {project.links && project.links.website ?
                        <a 
                            className='l-link'
                            href={project.links.website}
                            target='_blank'
                            rel='noreferrer noopener'
                            data-tooltip='Website'
                        >
                            <RiGlobalLine className='icon'/>
                        </a> : <></>}
                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;