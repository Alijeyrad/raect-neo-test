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
import AppContext from '../../contexts/AppContext';
import q from '../../util/questions.json';
import './App.css';

function App() {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1);
  }, []);

  // memo to send values through context
  const value = useMemo(() => ({
    questions: q.questions,
  }), [q]);

  return (
    <AppContext.Provider value={value}>
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
    </AppContext.Provider>
  );
}

export default App;
