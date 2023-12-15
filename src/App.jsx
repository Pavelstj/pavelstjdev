import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Logo from './components/logo/Logo';
import Menu from './components/menu/Menu';
import Contacts from './components/contacts/Contacts';
import Sidebar from './components/content/sidebar/Sidebar';


const App = () => {

  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <IconContext.Provider value={{ color: 'var(--extra-color)', className: 'icons-class-name' }} >
      <div className='app-container'>
        <Logo/>
        <Header 
          setActiveMenu={setActiveMenu}
          activeMenu={activeMenu}
        />
        <Menu/>
        <Contacts/>
        <Content/>
        <Sidebar 
          setActiveMenu={setActiveMenu}
          activeMenu={activeMenu}
        />
    </div>
    </IconContext.Provider>
  );
}


export default App;
