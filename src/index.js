import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';
import {   blue, red, } from '@mui/material/colors';

 export const ThemeProvider2 = createContext(); //using usecontext hook
  let clr = 'green';

const theme = createTheme({
  palette: {
    primary: red,
  },
});////using mui

function kuldeep(){
return 'blue'
}

let clr2 = kuldeep()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme} >
        <ThemeProvider2.Provider value={clr}>
          <App clr3={clr2}  />
       </ThemeProvider2.Provider>
      </ThemeProvider> 
  </React.StrictMode>
);
   
