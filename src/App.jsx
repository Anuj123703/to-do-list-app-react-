import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar'
import Home from "./components/Home";
import Main from './components/main';
import Contact from './components/contact';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Your_todos" element={<Main />} />
          <Route path="/contact_us" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
