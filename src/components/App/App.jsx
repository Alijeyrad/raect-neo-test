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
// import PageNotFound from '../PageNotFound/PageNotFound';
import q from '../../util/questions.json';
import { answers, answersList } from '../../util/answers';
import './App.css';

function App() {
  const [loaded, setLoaded] = useState(true);
  const [state, dispatch] = useReducer(questionReducer, answers);
  const [testFinished, setTestFinished] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1);
  }, []);

  // get questions from local storage if there are any
  function dispatchAnsweredQuestions(ques) {
    if (window.localStorage.getItem(ques.code)) {
      dispatch({
        type: 'ANSWER',
        name: ques.code,
        value: window.localStorage.getItem(ques.code),
      });
    }
  }

  useEffect(() => {
    q.questions.map((item) => dispatchAnsweredQuestions(item));
  }, []);

  // memo to send values through context
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

                {/* <Route path="/404" component={PageNotFound} />
                <Redirect to="/404" /> */}

              </>
            )}

          </Layout>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
