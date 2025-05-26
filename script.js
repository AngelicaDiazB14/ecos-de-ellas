
let current = 0;
let score = 0;
let player = "";

function startGame() {
  const nameInput = document.getElementById("player-name").value.trim();
  if (!nameInput) return alert("Por favor, escribe tu nombre");

  player = nameInput;
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("game-container").classList.remove("hidden");
  document.getElementById("bg-music").play();
  renderCard(current);
}

function renderCard(index) {
  const card = cards[index];
  document.getElementById("front-img").src = card.img;
  document.getElementById("front-name").textContent = card.name;
  document.getElementById("back-year-badge").textContent = card.year;
  document.getElementById("back-img").src = card.img;
  document.getElementById("country").textContent = card.country;
  document.getElementById("area").textContent = card.area;
  document.getElementById("contribution").textContent = card.contribution;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";
  card.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => evaluateAnswer(i, card.correctIndex);
    optionsContainer.appendChild(btn);
  });

  document.getElementById("feedback").textContent = "";
  document.getElementById("card").classList.remove("flipped");
}

function evaluateAnswer(selected, correct) {
  const feedback = document.getElementById("feedback");
  const buttons = document.querySelectorAll("#options button");
  buttons.forEach(btn => btn.disabled = true);

  if (selected === correct) {
    feedback.textContent = "✅ ¡Correcto!";
    feedback.style.color = "green";
    score++;
    playSound("correct");
  } else {
    feedback.textContent = "❌ Incorrecto.";
    feedback.style.color = "red";
    playSound("wrong");
  }

  setTimeout(() => {
    document.getElementById("card").classList.add("flipped");
  }, 1000);
}

function nextCard() {
  current++;
  if (current >= cards.length) {
    showResult();
  } else {
    renderCard(current);
  }
}

function showResult() {
  document.getElementById("game-container").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");

  let mensaje = "";
  const total = cards.length;

  if (score === total) {
    mensaje = `🎉 ¡Felicidades, ${player}! Respondiste TODO correctamente. ¡Eres una estrella del conocimiento!`;
  } else if (score >= Math.ceil(total * 0.7)) {
    mensaje = `👏 ¡Bien hecho, ${player}! Acertaste ${score} de ${total}. ¡Buen trabajo!`;
  } else {
    mensaje = `😕 ¡Ánimo, ${player}! Solo acertaste ${score} de ${total}. Pero lo importante es aprender. ¡Sigue intentándolo!`;
  }

  document.getElementById("result-text").textContent = mensaje;
}


function restartGame() {
  current = 0;
  score = 0;
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("start-screen").classList.remove("hidden");

  // Reiniciar música desde el principio
  const music = document.getElementById("bg-music");
  music.currentTime = 0;
  music.play();
}


function playSound(type) {
  const audio = new Audio(type === "correct" ? "assets/success-340660.mp3" : "assets/fail-234710.mp3");
  audio.play();
}


function toggleMusic() {
  const music = document.getElementById("bg-music");
  const toggleBtn = document.getElementById("toggle-music");

  if (music.paused) {
    music.play();
    toggleBtn.textContent = "🔊 Pausar música";
    toggleBtn.classList.remove("paused");
  } else {
    music.pause();
    toggleBtn.textContent = "🔇 Reanudar música";
    toggleBtn.classList.add("paused");
  }
}


