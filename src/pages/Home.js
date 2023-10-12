import { Button, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import { ThemeProvider2 } from '..';

export default function Home({clr4}) {

  const themes = useTheme();                  //using material ui
  const themes2 = useContext(ThemeProvider2); //using usecontext react hook
  return (
    <>
        <div>home</div>
        <Button style={{Color2:themes.palette.primary.main}} >kuldeep using materialui</Button>
        <Button style={{color:themes2}}  >use contxt</Button>
        <Button style={{color:clr4}}>change color using prop drealing</Button>
   </>
  )
} 
