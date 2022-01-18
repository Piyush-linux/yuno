const talk = document.querySelector('talk');
const content = document.querySelector('content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('activated ! ! ');
}

recognition.onresult = function (eve) {
    console.log(eve);
}

talk.addEventListener('click', () => {
    recognition.start();
})