
import './App.css'
import Weather from "./components/Weather.jsx/"

import { ThemeProvider } from "@material-tailwind/react";
function App() {

  return (
    <ThemeProvider>
      <Weather/>
  </ThemeProvider>
    
    
  )
}

export default App
