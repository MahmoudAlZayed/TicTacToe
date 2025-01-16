//Copmonents 
import TicTacToe from './components/TicTacToe'

import { BrowserRouter, Routes, Route } from "react-router-dom";

//Style
import './App.css'


function App() {

  return (
    <>


   <BrowserRouter>
   <Routes>
   <Route path="Tic-Tac-Toe" element= {<TicTacToe />} />
   </Routes>
   </BrowserRouter>

      <div>
      </div>
    
    </>
  )
}

export default App
