import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GlobalStyle } from './globalStyles';
import Login from './pages/Login';
import Main from './pages/Main';
import SignUp from './pages/SignUp';
import Signature from './pages/Signature';
import SignatureForm from './pages/SignatureForm';
import UserContext from './contexts/UserContext';
import AddressForm from './pages/AddressForm';

export default function App() {
  const userSession = JSON.parse(localStorage.getItem('userSession'));
  const [user, setUser] = useState({});
  const [signatureInfo, setSignatureInfo] = useState([]);

  useEffect(() => {
    if (userSession) {
      setUser(userSession);
    }
  }, []);
  return (
    <UserContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ user, setUser, signatureInfo, setSignatureInfo }}
    >
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signature' element={<Signature />} />
          <Route path='/form' element={<SignatureForm />} />
          <Route path='/address' element={<AddressForm />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
