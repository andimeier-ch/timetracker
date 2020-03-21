import { Observer } from "../observable/Observer.js";

export { timerProjector };


const displayTime = timer => {
    let minutes = timer.getMinutes();
    let seconds = timer.getSeconds();
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};


const timerProjector = (timerListController, rootElement, timer) => {
    const output = document.createElement('output');
    output.textContent = '00:00';

    const toggle = document.createElement('button');
    toggle.textContent = 'Start';

    const title = document.createElement('input');
    title.type = 'text';
    title.value = timer.getTitle();

    const remove = document.createElement('button');
    remove.textContent = 'X';

    const timerWrapper = document.createElement('li');
    timerWrapper.classList.add('timer');
    timerWrapper.appendChild(toggle);
    timerWrapper.appendChild(output);
    timerWrapper.appendChild(title);
    timerWrapper.appendChild(remove);

    timer.bindOutput(Observer(() => output.textContent = displayTime(timer)));
    timer.bindTitle(Observer(() => title.value = timer.getTitle()));

    title.addEventListener('input', event => {
        timer.setTitle(title.value);
    });

    toggle.addEventListener('click', event => {
        if (timer.isRunning()) {
            timer.stop();
            toggle.textContent = 'Start';
        } else {
            timerListController.stopAllTimers();
            timer.start();
            toggle.textContent = 'Stop';
        }
    });

    remove.addEventListener('click', () => {
        timerListController.removeTimer(timer)
    });

    const timerRemoveObserver = Observer((removedTimer) => {
        if (removedTimer !== timer) return;
        rootElement.removeChild(timerWrapper);
        timerListController.unregisterTimerRemoveObserver(timerRemoveObserver);
    });

    timerListController.registerTimerRemoveObserver(timerRemoveObserver);

    rootElement.appendChild(timerWrapper);
};
