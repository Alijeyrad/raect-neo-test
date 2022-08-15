import useTimer from 'easytimer-react-hook';

function Stopwatch() {
  /* The hook returns an EasyTimer instance and a flag to see if the target has been achieved */
  const [timer] = useTimer({
    /* Hook configuration */
  });
  const initialHours = window.localStorage.getItem('hours') ? window.localStorage.getItem('hours') : 0;
  const initialMinutes = window.localStorage.getItem('minutes') ? window.localStorage.getItem('minutes') : 0;
  const initialSeconds = window.localStorage.getItem('seconds') ? window.localStorage.getItem('seconds') : 0;

  function saveTime() {
    window.localStorage.setItem('hours', timer.getTimeValues().hours);
    window.localStorage.setItem('minutes', timer.getTimeValues().minutes);
    window.localStorage.setItem('seconds', timer.getTimeValues().seconds);
  }

  timer.start({
    /* EasyTimer start configuration */
    callback: saveTime,
    startValues: [0, initialSeconds, initialMinutes, initialHours, 0],
  });
}

export default Stopwatch;
