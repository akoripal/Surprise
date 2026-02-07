const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const petImg = document.getElementById("letter-pet");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope -> show letter
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    document.querySelector(".letter-window").classList.add("open");
  }, 50);
});

// NO button dodges
noBtn.addEventListener("mouseover", () => {
  const distance = 200;
  const angle = Math.random() * Math.PI * 2;

  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  noBtn.style.transition = "transform 0.3s ease";
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES clicked -> final
yesBtn.addEventListener("click", () => {
  title.textContent = "WOOF WOOF! 🐶💖";

  petImg.src = "dog_dance.gif";

  document.querySelector(".letter-window").classList.add("final");

  buttons.style.display = "none";
  finalText.style.display = "block";
});
