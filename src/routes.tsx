import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Catalog } from './pages/Catalog';
import { Home } from './pages/Home';
import { TrainerProfile } from './pages/Profile';

export const MainRoutes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/catalog/:slug" component={Catalog} />
        <Route path="/profile" component={TrainerProfile} />
      </Switch>
    </Router>
  );
};
