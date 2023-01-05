import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
//Pages
import { Home, Contact, Login, Register, Reset } from './pages';
import { Header, Footer } from './components';
import 'react-toastify/dist/ReactToastify.css';
//ToastContainer responsavel pela mensagem de sucesso e erro ao utilizar o login//
import { ToastContainer } from 'react-toastify';
//Components
function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
