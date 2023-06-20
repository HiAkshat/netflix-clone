import { Route, Routes, BrowserRouter} from "react-router-dom"
import Home from "./pages/home/home"
import Watch from "./pages/watch/watch";
import Register from "./pages/register/register";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
