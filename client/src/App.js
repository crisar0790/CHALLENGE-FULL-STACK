import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import OperationsList from './pages/OperationsList';

function App() {
    return (
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/operations' element={<OperationsList />} />
      </Routes>
    );
  }

export default App;
