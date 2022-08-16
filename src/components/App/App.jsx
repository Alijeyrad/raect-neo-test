import React, {
  useEffect,
  useState,
  useReducer,
  useMemo,
} from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Layout from '../Layout/Layout';
import Spinner from '../Spinner/Spinner';
import WellcomeCard from '../WellcomeCard/WellcomeCard';
import Questions from '../Questions/Questions';
import AppContext from '../../contexts/AppContext';
import SubmitPage from '../SubmitPage/SubmitPage';
import FinishPage from '../FinishPage/FinishPage';
import questionReducer from '../../reducers/questions.reducer';
import q from '../../util/questions.json';
import { answers, answersList } from '../../util/answers';
import './App.css';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [state, dispatch] = useReducer(questionReducer, answers);
  const [testFinished, setTestFinished] = useState(false);

  // Stop the loading animation
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  // dispatch answers in local storage to the reducer
  function dispatchAnsweredQuestions(ques) {
    if (window.localStorage.getItem(ques.code)) {
      dispatch({
        type: 'ANSWER',
        name: ques.code,
        value: window.localStorage.getItem(ques.code),
      });
    }
  }

  // get questions from local storage if there are any
  useEffect(() => {
    q.questions.map((item) => dispatchAnsweredQuestions(item));
  }, []);

  // memo to send values through context (performance optimization)
  const value = useMemo(() => ({
    questions: q.questions,
    state,
    dispatch,
    answersList,
    setTestFinished,
  }), [q, state, dispatch, answersList]);

  return (
    <AppContext.Provider value={value}>
      <Router basename="/test_neo">
        <Switch>
          <Layout>

            {!loaded && (
              <Spinner />
            )}
            {loaded && (
              <>

                <Route exact path="/test" component={WellcomeCard} />

                <Route exact path="/questions" component={Questions} />

                <Route exact path="/submit" component={SubmitPage} />

                {testFinished && (
                  <Route
                    exact
                    path="/finish"
                    component={FinishPage}
                  />
                )}

              </>
            )}

          </Layout>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
