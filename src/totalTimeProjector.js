import { Observer } from "../observable/Observer.js";

export { totalTimeProjector };


const totalTimeProjector = (timerListController, rootElement) => {
    const label = document.createTextNode('Total Time: ');

    const showTotalTime = () => timerListController.getTotalTime().displayTime();

    const output = document.createElement('output');
    output.textContent = showTotalTime();

    rootElement.appendChild(label);
    rootElement.appendChild(output);

    const totalTimeObserver = Observer(() => output.textContent = showTotalTime());

    timerListController.registerTimerAddObserver(Observer(() => {
        for (const t of timerListController.getTimerList()) {
            t.bindOutput(totalTimeObserver);
        }
    }));

    timerListController.registerTimerRemoveObserver(totalTimeObserver);
};
