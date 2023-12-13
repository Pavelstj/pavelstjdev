import "./styles.css";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import ExperiencePage from "./experience/ExperiencePage";
// import PortfolioPage from "./portfolio/PortfolioPage";
import ContactsPage from "./contacts/ContactsPage";
import NotFoundPage from "./notfound/NotfoundPage";
import { Routes, Route, HashRouter } from "react-router-dom";


const Content = () => {

  
    return (
        <div className='app-content'>
          <HashRouter basename='/pavelstjdev'>
            <Routes>
              <Route path='/'>
                <Route index element={<HomePage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/experience' element={<ExperiencePage/>}/>
                {/* <Route path='/portfolio' element={<PortfolioPage/>}/> */}
                <Route path='/contacts' element={<ContactsPage/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
              </Route>
            </Routes>
          </HashRouter>
        </div>
    );
}


export default Content;