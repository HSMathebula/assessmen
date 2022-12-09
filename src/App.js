import { Routes, Route } from 'react-router-dom';
import { Bunner } from './pages/bunner/bunner';
import { AccordionSection } from './pages/accordion/accordion';
import { Navbar } from './pages/navbar';

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Bunner />} />
        <Route path="/accordion" element={<AccordionSection />} />
      </Routes>
    </div>
  );
}

export default App;
