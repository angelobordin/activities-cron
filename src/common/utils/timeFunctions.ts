export default function timeToSeconds(timeOrigin: string) {
    const [hours = '0', minutes = '0', seconds = '0'] = timeOrigin.split(':');

    const hoursInSeconds = Number(hours) * 3600;
    const minutesInSeconds = Number(minutes) * 60;
    let result = hoursInSeconds + minutesInSeconds + Number(seconds);

    return result;
}