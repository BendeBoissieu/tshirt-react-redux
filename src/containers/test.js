const frame = new Scene.Frame({
  left: "0px",
  top: "0px",
  transform: {
    rotate: "0deg",
    scaleX: 1,
    scaleY: 1,
    matrix3d: [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1,
    ],
  },
});
const moveable = new Moveable(document.querySelector(".main"), {
  target: document.querySelector("#picture"),
  origin: false,
  dragArea: true,
  draggable: true,
  rotatable: true,
  scalable: true,
  pinchable: true,
  keepRatio: true,
  snappable: true,
  edge: true,
  elementGuidelines: [document.querySelector("img")],
  verticalGuidelines: [100, 200, 300],
  horizontalGuidelines: [0, 100, 200],

  throttleDrag: 1,
  throttleRotate: 0.2,
  throttleResize: 1,
})
.on("drag", ({ target, left, top, clientX, clientY, isPinch }) => {
  frame.set("left", `${left}px`);
  frame.set("top", `${top}px`);
  setTransform(target);
  !isPinch && setLabel(clientX, clientY, `X: ${left}px<br/>Y: ${top}px`);

}).on("scale", ({ target, delta, clientX, clientY, isPinch }) => {
  const scaleX = frame.get("transform", "scaleX") * delta[0];
  const scaleY = frame.get("transform", "scaleY") * delta[1];
  frame.set("transform", "scaleX", scaleX);
  frame.set("transform", "scaleY", scaleY);
  setTransform(target);
  !isPinch && setLabel(clientX, clientY, `S: ${scaleX.toFixed(2)}, ${scaleY.toFixed(2)}`);

}).on("rotate", ({ target, beforeDelta, clientX, clientY, isPinch }) => {
  const deg = parseFloat(frame.get("transform", "rotate")) + beforeDelta;

  frame.set("transform", "rotate", `${deg}deg`);
  setTransform(target);
  !isPinch && setLabel(clientX, clientY, `R: ${deg.toFixed(1)}`);
}).on("resize", ({ target, width, height, clientX, clientY, isPinch }) => {
  frame.set("width", `${width}px`);
  frame.set("height", `${height}px`);
  setTransform(target);
  !isPinch &&  setLabel(clientX, clientY, `W: ${width}px<br/>H: ${height}px`);
}).on("warp", ({ target, multiply, delta, clientX, clientY }) => {
  frame.set("transform", "matrix3d", multiply(frame.get("transform", "matrix3d"), delta));
  setTransform(target);
  setLabel(clientX, clientY, `X: ${clientX}px<br/>Y: ${clientY}px`);
}).on("dragEnd", () => {
  labelElement.style.display = "none";
}).on("scaleEnd", () => {
  labelElement.style.display = "none";
}).on("rotateEnd", () => {
  labelElement.style.display = "none";
}).on("resizeEnd", () => {
  labelElement.style.display = "none";
}).on("warpEnd", () => {
  labelElement.style.display = "none";
});

window.addEventListener("resize", () => {
  moveable.updateRect();
});
const labelElement = document.querySelector(".label");

function setTransform(target) {
  target.style.cssText = frame.toCSS();
}
function setLabel(clientX, clientY, text) {
  labelElement.style.cssText = `
display: block; transform: translate(${clientX +50}px, ${clientY -10}px) translate(-100%, -100%);`;
  labelElement.innerHTML = text;
}
