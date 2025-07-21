
function showScreen(id) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.style.display = 'none');
  const selected = document.getElementById(id);
  if (selected) selected.style.display = 'block';
}

function playSound(audioId) {
  const audio = document.getElementById(audioId);
  if (audio) audio.play();
}

function startMemoryGame() {
  playSound('zuriMemory');
  alert('Launching Memory Match...');
}

function startColorSort() {
  playSound('zuriColor');
  alert('Launching Color Sort...');
}

function startLetterPop() {
  playSound('zuriLetter');
  alert('Launching Letter Pop...');
}

function startSoundSurprise() {
  playSound('zuriSurprise');
  alert('Launching Sound Surprise...');
}

window.addEventListener('load', () => {
  const greeting = new SpeechSynthesisUtterance("Hi, I’m Aria! Let’s learn together!");
  greeting.pitch = 1.1;
  greeting.rate = 1;
  greeting.voice = speechSynthesis.getVoices().find(v => v.name.includes("female") || v.lang.includes("en"));
  setTimeout(() => speechSynthesis.speak(greeting), 500);
});
