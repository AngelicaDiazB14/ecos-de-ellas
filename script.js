let answeredCorrectly = [];
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
  const buttons = document.querySelectorAll("#options button");
  buttons.forEach(btn => btn.disabled = true);

  let message = "";
  const isCorrect = selected === correct;

  answeredCorrectly[current] = isCorrect;

  if (isCorrect) {
    message = `✅ <strong>¡Correcto!</strong>`;
    score++;
    playSound("correct");
  } else {
    const correctText = cards[current].options[correct];
    message = `❌ <strong>¡Incorrecto!</strong><br>La respuesta correcta es:<br><br>"${correctText}"`;
    playSound("wrong");
  }

  showMessage(message);

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

  const total = cards.length;
  const nota = ((score / total) * 100).toFixed(1);

  const mensaje = `
    <h2>🎉 ¡Gracias por jugar, <strong>${player}</strong>!</h2>
    <p>✅ Acertaste <strong>${score}</strong> de <strong>${total}</strong> preguntas.</p>
    <p>📊 Tu nota final es: <strong>${nota}/100</strong>.</p>
    <p style="margin-top: 30px;">
      🙏 Gracias por participar. Si llegaste hasta aquí, ¿podrías ayudarnos respondiendo una breve encuesta sobre el juego?
    </p>
    <p style="font-size: 0.7em; margin-top: 10px; color: #ffd700;">
      🧠 Esta encuesta forma parte de un <strong>Experimento Social</strong> del curso <strong>Computación y Sociedad</strong>.
      Tu opinión nos sería de gran ayuda para fines académicos.
    </p>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfYj_As6zA58wz5mSlN9-7pUgF24QrR9crHz2wIbHShWYlrfw/viewform?usp=sharing&ouid=104709913440561032177" 
       target="_blank" 
       style="display:inline-block; margin-top: 10px; background-color: #d89e00; padding: 12px 20px; color: white; text-decoration: none; border-radius: 8px; font-weight: bold;">
      📋 Ir a la encuesta
    </a>
  `;

  document.getElementById("result-text").innerHTML = mensaje;
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


function showMessage(text) {
  const box = document.getElementById("message-box");
  const messageText = document.getElementById("message-text");
  messageText.innerHTML = text; // <-- usar innerHTML para interpretar etiquetas
  box.classList.remove("hidden");
}


function closeMessage() {
  const box = document.getElementById("message-box");
  box.classList.add("hidden");
}
