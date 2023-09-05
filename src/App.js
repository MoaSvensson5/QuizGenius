import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {StartView} from "./Views/Home";
import { RenderQuestions } from "./Views/Questions";
import {ShowResult} from "./Views/ShowResult";
import { Header } from './component/header';
import { Footer } from './component/footer';

function App() {


  return (
    <>
      <Header/>
      <Router>
        <Switch>
          <Route path="/" exact component={StartView} />
          <Route path="/Questions" component={RenderQuestions} />
          <Route path="/ShowResult" component={ShowResult} />
        </Switch>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
