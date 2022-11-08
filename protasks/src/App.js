import Task from "./pages/tasks/Task";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Custumer from './pages/custumer/Custumer';
import Dashboard from "./pages/dashboard/Dashboard";
function App() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/custumer" component={Custumer} />
      <Route path="/tasks" component={Task} />
    </Switch>
  );
}

export default App;
