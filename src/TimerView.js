import { timerProjector } from "./timerProjector.js";
import { Observer } from "../observable/Observer.js";
import { totalTimeProjector } from "./totalTimeProjector.js";

export { TimerView, TimerTotalView };


const TimerView = (timerListController, rootElement) => {
    const render = timer => {
        timerProjector(timerListController, rootElement, timer);
    };

    const addItemObserver = Observer(render);

    timerListController.registerTimerAddObserver(addItemObserver);
};


const TimerTotalView = (timerListController, rootElement) => {
    const render = () => {
        totalTimeProjector(timerListController, rootElement);
    };

    // timerListController.registerTimerAddObserver(Observer(render));
    // timerListController.registerTimerRemoveObserver(Observer(render));

    return { render };
};
