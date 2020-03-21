export { Time };


const Time = milliseconds => {

    const getMinutes = () => Math.floor((milliseconds / 1000) / 60);
    const getSeconds = () => Math.floor((milliseconds / 1000) % 60);

    const displayTime = () => {
        let minutes = getMinutes();
        let seconds = getSeconds();
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };


    return { getMinutes, getSeconds, displayTime };

};
