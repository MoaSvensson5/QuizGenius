import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StartView } from "./Views/Home";
import { RenderQuestions } from "./Views/Questions";
import { ShowResult } from "./Views/ShowResult";
import { Header } from './component/header';
import { Scoreboard } from './Views/Scoreboard';
import { RegisterUsername } from './Views/RegisterUsername';

function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<StartView />} />
          <Route path="/home" element={<StartView />} />
          <Route path="/questions" element={<RenderQuestions />} />
          <Route path="/result" element={<ShowResult />} />
          <Route path="/scoreboard" element={<Scoreboard/>}/>
          <Route path="/registerusername" element={<RegisterUsername/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;