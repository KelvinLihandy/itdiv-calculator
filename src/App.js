
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './Pages/Calculator';
import Support from './Pages/Support';
import Ticket from './Pages/Ticket';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Calculator />} />
        <Route path='/support' element={<Support />} />
        <Route path='/support/:id' element={<Ticket />} />
      </Routes>
    </Router>
  );
}

export default App;
