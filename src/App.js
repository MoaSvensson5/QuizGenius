import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from "recoil";
import {StartView} from "./Views/Home";
import {QuestionView} from "./Views/Questions";
import {ShowResult} from "./Views/ShowResult";
import { Header } from './component/header';
import { Footer } from './component/footer';

function App() {


  return (
    <RecoilRoot>
      <Header/>
      <Router>
        <Switch>
          <Route path="/" exact component={StartView} />
          <Route path="/Questions" component={QuestionView} />
          <Route path="/ShowResult" component={ShowResult} />
        </Switch>
      </Router>
      <Footer/>
    </RecoilRoot>
  );
}

export default App;
