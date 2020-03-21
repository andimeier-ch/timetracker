import { TimerListController } from "./TimerListController.js";
import { TimerView, TimerTotalView } from "./TimerView.js";


const timerList = document.querySelector('.js-timer-list');
const timerTotal = document.querySelector('.js-timer-total');
const addButton = document.querySelector('.js-add-timer');

const timerListController = TimerListController();

addButton.addEventListener('click', () => timerListController.addTimer());

TimerView(timerListController, timerList);
TimerTotalView(timerListController, timerTotal).render();

