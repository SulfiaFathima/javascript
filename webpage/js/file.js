function log(txt) {
    events.insertAdjacentHTML('beforeend', `<div>[${Math.floor(performance.now())}] ${txt}</div>`);
}

log('initial readyState:' + document.readyState);

document.addEventListener('readystatechange', () => log('readyState:' + document.readyState));
document.addEventListener('DOMContentLoaded', () => log('DOMContentLoaded'));

window.onload = () => log('window onload');

img.onload = () => log('img onload');
