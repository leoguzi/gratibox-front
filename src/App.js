import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Login from './pages/Login';
import Main from './pages/Main';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
