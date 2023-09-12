import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StartView } from "./Views/Home";
import { RenderQuestions } from "./Views/Questions";
import { ShowResult } from "./Views/ShowResult";
import { Header } from './component/header';
import { Footer } from './component/footer';

function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartView />} />
          <Route path="/questions" element={<RenderQuestions />} />
          <Route path="/result" element={<ShowResult />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );

}

export default App;