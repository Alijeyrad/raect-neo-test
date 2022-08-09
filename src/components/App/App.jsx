import React, {
  useEffect,
  useState,
  // useReducer,
  // useMemo,
} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Spinner from '../Spinner/Spinner';
import WellcomeCard from '../WellcomeCard/WellcomeCard';
import './App.css';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Layout>

          {!loaded && (
            <Spinner />
          )}
          {loaded && (
            <Route exact path="/">
              <WellcomeCard />
            </Route>
          )}

          {loaded && (
            <Route path="/start" />
          )}

        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
