import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';

import "./style/main.scss";
import NotFound from './pages/NotFound';


export default function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/" element={<Login/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
}
