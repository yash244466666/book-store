import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DisplayBookList from './components/DisplayBookList';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Form />
          <Routes>
            <Route path="/" element={<DisplayBookList />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
