import { Timer } from "./Timer.js";

describe('the timer', () => {
    const timer = Timer();
    jest.useFakeTimers();

    test('starts counting', () => {
        expect(timer.isRunning()).toBe(false);
        expect(timer.getTimestamp()).toBe(0);
        timer.start();
        expect(timer.isRunning()).toBe(true);
        expect(setInterval).toHaveBeenCalledTimes(1);
        expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    });

    test('stops counting', () => {
        timer.stop();
        expect(timer.isRunning()).toBe(false);
        expect(clearInterval).toHaveBeenCalledTimes(1);
    });

    test('sets and gets the title', () => {
        timer.setTitle('cooking');
        expect(timer.getTitle()).toBe('cooking');
        timer.setTitle('');
        expect(timer.getTitle()).toBe('');
        timer.setTitle(null);
        expect(timer.getTitle()).toBe('');
        timer.setTitle(undefined);
        expect(timer.getTitle()).toBe('');
    });

    // test('displays the time correctly', () => {
    //     expect(timer.displayTime(23040)).toBe('00:23');
    //     expect(timer.displayTime(83040)).toBe('01:23');
    //     expect(timer.displayTime(688040)).toBe('11:28');
    // });

});
