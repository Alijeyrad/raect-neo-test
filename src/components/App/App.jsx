import React, {
  useEffect,
  useState,
  // useReducer,
  useMemo,
} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Spinner from '../Spinner/Spinner';
import WellcomeCard from '../WellcomeCard/WellcomeCard';
import Questions from '../Questions/Questions';
import AnimationContext from '../../contexts/AnimationContext';
import './App.css';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  // memo to send values through context
  const value = useMemo(() => ({
    setLoaded,
  }), [loaded]);

  return (
    <AnimationContext.Provider value={value}>
      <BrowserRouter>
        <Switch>
          <Layout>

            {!loaded && (
              <Spinner />
            )}
            {loaded && (
              <>
                <Route exact path="/">
                  <WellcomeCard />
                </Route>

                <Route path="/questions">
                  <Questions />
                </Route>
              </>
            )}

          </Layout>
        </Switch>
      </BrowserRouter>
    </AnimationContext.Provider>
  );
}

export default App;
