import { ObservableList } from "../observable/Observable.js";
import { Timer } from "./Timer.js";
import { Time } from "./Time.js";

export { TimerListController };


const TimerListController = () => {

    const timerList = ObservableList([]);

    const registerTimerAddObserver      = observer => {timerList.registerAddObserver(observer)};
    const unregisterTimerAddObserver    = observer => timerList.unregisterAddObserver(observer);
    const registerTimerRemoveObserver   = observer => timerList.registerRemoveObserver(observer);
    const unregisterTimerRemoveObserver = observer => timerList.unregisterRemoveObserver(observer);

    const getTimerList = () => timerList.getList();

    const addTimer = () => {
        timerList.addItem(Timer());
    };

    const removeTimer = timerList.removeItem;

    const getTotalTime = () => {
        let total = 0;
        timerList.getList().forEach(timer => {
            total += timer.getTimestamp();
        });

        return Time(total);
    };

    const stopAllTimers = () => {
        for (const timer of getTimerList()) {
            timer.stop();
        }
    };


    return {
        registerTimerAddObserver, unregisterTimerAddObserver,
        registerTimerRemoveObserver, unregisterTimerRemoveObserver,
        addTimer, removeTimer,
        getTotalTime,
        getTimerList,
        stopAllTimers,
    };

};
