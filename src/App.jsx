
import { useEffect, useState } from 'react'
import './App.css'

import Card from './components/Card'
import { ThemeContextProvider } from './context/UseContext'
import ThemeBtn from './components/ThemeBtn'


function App() {
   const [thememode,setthememode]=useState('light')

   const setdarktheme=()=>{
    setthememode('dark')
   }
   const setwhitetheme=()=>{
    setthememode('white')
   }
    

   useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(thememode)
  }, [thememode])
  



  return (
     <ThemeContextProvider value={{thememode,setdarktheme,setwhitetheme}}>
      
    <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
     </ThemeContextProvider>
  )
}

export default App
