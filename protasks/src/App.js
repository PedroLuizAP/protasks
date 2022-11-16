import Task from "./pages/tasks/Task";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Custumer from './pages/custumer/Custumer';
import Dashboard from "./pages/dashboard/Dashboard";
import CustumerForm from './pages/custumer/CustumerForm';
import PageNotFound from './pages/dashboard/PageNotFound';
function App() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/custumer/list" component={Custumer} />
      <Route path="/custumer/detail/:id?" component={CustumerForm} />
      <Route path="/tasks/list" component={Task} />
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default App;
