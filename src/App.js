import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Layout from './Layout/Layout';

function App() {
  return (
    <BrowserRouter basename='xrp'>
      <Routes>
        <Route path='/' element={<Layout />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
