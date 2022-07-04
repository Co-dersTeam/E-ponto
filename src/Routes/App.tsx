import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "../templates/Home"
import Sobre from '../templates/Sobre';
import Contatos from '../templates/Contatos';
import * as S from './style'



function App() {
  return (

      <Router>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/sobre' element={<Sobre/>} />
          <Route  path='/contatos' element={<Contatos/>} />
        </Routes>
      </Router>

  )
}

export default App
