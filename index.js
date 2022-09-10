const canvas = document.getElementById("art");
const ctx = canvas.getContext("2d");

function getMousPos(e) {
  const rect = canvas.getBoundingClientRect();

  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}

function mouseMove(e) {
  const mousePos = getMousPos(e);
  ctx.lineTo(mousePos.x, mousePos.y);
  ctx.stroke();
  ctx.strokeStyle = "salmon";
  ctx.lineWidth = 6;
}

canvas.addEventListener("mousedown", (e) => {
  e.preventDefault();
  console.log(getMousPos(e));
  const mousePos = getMousPos(e);
  ctx.beginPath();
  ctx.moveTo(mousePos.x, mousePos.y);

  canvas.addEventListener("mousemove", mouseMove);
  canvas.addEventListener("mouseup", () => {
    canvas.removeEventListener("mousemove", mouseMove);
  });
});

reset.addEventListener("click", () => {
  ctx.clearRect(0, 0, 800, 400);
});
