import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';


export default function App(props) {
  // console.log(props.clr3)
  return (
   <>
   <BrowserRouter>
      <Routes>
        
         <Route path="/" element={< Home clr4={props.clr3} />}  />
         <Route path="/Contact" element={<Contact/>}/>
         <Route path="/About" element={<About/>}/>
         <Route path="/Blog" element={<Blog/>}/>
      </Routes>
   </BrowserRouter>
   </>
  )
}


