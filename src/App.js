import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {  Menu } from './components/menu/menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Education } from './components/Education/education';
import { Myworks } from './components/myworks/myworks';
import { Skills } from './components/Skills/skills';
import { Contact } from './components/Contact/contact';
import { Footer } from './components/footer/footer';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={[<Menunav/>]}/> */}
        <Route path='/' element={[<Menu/>,<Home/>,<Education/>,<Myworks/>,<Skills/>,<Contact/>,<Footer/>]}/>
        <Route path='/about' element={[<Menu/>,<About/>,<Footer/>]}/>
        <Route path='/education' element={[<Menu/>,<Education/>]}/>
        <Route path='/myworks' element={[<Menu/>,<Myworks/>]}/>
        <Route path='/skills' element={[<Menu/>,<Skills/>]}/>
        <Route path='/contact' element={[<Menu/>,<Contact/>,<Footer/>]}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
