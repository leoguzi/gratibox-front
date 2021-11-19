import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Login from './pages/Login';
import Main from './pages/Main';
import SignUp from './pages/SignUp';
import Signature from './pages/Signature';
import SignatureForm from './pages/SignatureForm';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signature' element={<Signature />} />
        <Route path='/form' element={<SignatureForm />} />
      </Routes>
    </BrowserRouter>
  );
}
