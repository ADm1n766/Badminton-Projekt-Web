import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage'
import RulesPage from './pages/RulesPage'
import './App.css';


function App() {
  return (
          <Router>
            <Routes>
              <Route path="/" element={ <HomePage /> } />
                <Route path="/regeln" element={ <RulesPage /> } />
            </Routes>
          </Router>
  );
}

export default App;
