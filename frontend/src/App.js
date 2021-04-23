import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {TaskList} from "./pages/TaskList";
import {CreateTask} from "./pages/CreateTask";
import {ModifyTask} from "./pages/ModifyTask";

function App() {
  return (
   <> 
      
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={TaskList} />
          <Route exact path="/create" component={CreateTask} />
          <Route exact path="/modify" component={ModifyTask} />
        </Switch>
      </Router>
   </>
  );
}

export default App;
