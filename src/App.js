import { Routes, Route } from 'react-router-dom';
import { Bunner } from './pages/bunner/bunner';
import { Accordion } from './pages/accordion/accordion';
import { Main } from './pages/main';

function App() {
  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/bunner" element={<Bunner />} />
        <Route path="/accordion" element={<Accordion />} />
      </Routes>
    </div>
  );
}

export default App;
