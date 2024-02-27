import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Front from './Front';
import Single from './Single';
import Error from './Error';
function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Front />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Home/movie/:id" element={<Single />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
