import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import OperationsList from './pages/OperationsList';

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/operations' element={!user ? <Navigate to='/' /> : <OperationsList />} />
    </Routes>
  );
}

export default App;
