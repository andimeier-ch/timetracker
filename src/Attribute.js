import { Observable }  from "../observable/Observable.js";
import { Observer } from "../observable/Observer.js";

export { Attribute };

const VALUE = 'value';

const Attribute = value => {

    const observables = new Map();

    const hasObservable = name => observables.has(name);

    const createObservable = (name, value) => {
        const observable = Observable(value);
        observable.addObserver(Observer());
        observables.set(name, observable);

    };

    const getObservable = name => {

    };

};
