import './App.css';
import Homepage from './pages/Homepage';
import Quiz from './pages/Quiz';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resultpage from './pages/Resultpage';
import { UserProvider } from './context/UserProvider';


// import Resultpage from './pages/Resultpage';
function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/result' element={<Resultpage />} />
          </Routes>
        </Router>
      </UserProvider>

      {/* <Resultpage /> */}
    </>
  );
}

export default App;
