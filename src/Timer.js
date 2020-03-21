import { Observable } from "../observable/Observable.js";

export { Timer };

const Timer = () => {
    let isRunning = false;
    let timerInterval;
    let startTimestamp;
    let intermediateTime = 0;
    let time = Observable(0);
    let title = Observable('Task');

    const start = () => {
        isRunning = true;
        startTimestamp = Date.now();
        timerInterval = setInterval(updateTime, 1000);
    };

    const stop = () => {
        isRunning = false;
        intermediateTime = time.getValue();
        clearInterval(timerInterval);
    };

    const updateTime = () => {
        const currentTimestamp = Date.now();
        time.setValue(intermediateTime + currentTimestamp - startTimestamp);
    };

    const bindOutput = observer => time.addObserver(observer);
    const bindTitle  = observer => title.addObserver(observer);

    const getMinutes = () => Math.floor((time.getValue() / 1000) / 60);

    const getSeconds = () => Math.floor((time.getValue() / 1000) % 60);

    const setTitle = value => {
        if (null === value || undefined === value) return;
        title.setValue(value);
    };


    return {
        start,
        stop,
        bindOutput,
        bindTitle,
        getMinutes,
        getSeconds,
        isRunning: () => isRunning,
        getTimestamp:   () => time.getValue(),
        getTitle:  () => title.getValue(),
        setTitle,
    };
};
