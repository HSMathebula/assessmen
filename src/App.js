import { Routes, Route } from 'react-router-dom';
import { Banner } from './pages/banner/banner';
import { AccordionSection } from './pages/accordion/accordion';
import { Navbar } from './pages/navbar';

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/accordion" element={<AccordionSection />} />
      </Routes>
    </div>
  );
}

export default App;
