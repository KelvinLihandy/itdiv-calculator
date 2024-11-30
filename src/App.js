
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './Pages/Calculator';
import Support from './Pages/Support';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Calculator />} />
        <Route path='/support' element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
