// This is the real Javascript

window.onload = function() {
    doSomethingBadHere();
    document.querySelectorAll('script').forEach(s => {
        s.src = 'fake.js';
    });
};

function doSomethingBadHere() {
    // ¯\_(ツ)_/¯
}
