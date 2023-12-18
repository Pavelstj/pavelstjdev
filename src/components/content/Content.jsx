import './styles.css';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import ExperiencePage from './experience/ExperiencePage';
// import PortfolioPage from './portfolio/PortfolioPage';
import ContactsPage from './contacts/ContactsPage';
import NotFoundPage from './notfound/NotfoundPage';
import { Routes, Route } from 'react-router-dom';


const Content = () => {

  
    return (
        <div className='app-content'>
          <Routes>
            <Route path='/'>
              <Route index element={<HomePage/>}/>
              <Route path='/pavelstjdev' element={<HomePage/>}/>
              <Route path='/about' element={<AboutPage/>}/>
              <Route path='/experience' element={<ExperiencePage/>}/>
              {/* <Route path='/portfolio' element={<PortfolioPage/>}/> */}
              <Route path='/contacts' element={<ContactsPage/>}/>
              <Route path='*' element={<NotFoundPage/>}/>
            </Route>
          </Routes>
        </div>
    );
}


export default Content;