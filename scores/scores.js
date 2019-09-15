let p1Button = document.getElementById("p1");
let p2Button = document.getElementById("p2");
let p1Display = document.getElementById("player1");
let p2Display = document.getElementById("player2");
let p1Score = 0;
let p2Score = 0;

p1Button.addEventListener("click", () => {
  p1Score++;
  p1Display.textContent = p1Score;
});

p2Button.addEventListener("click", () => {
  p2Score++;
  p2Display.textContent = p2Score;
});
