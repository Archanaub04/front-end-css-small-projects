(() => {
  const el = document,
    frame = el.getElementById("js_frame"),
    cover = el.getElementById("js_cover");
  
  const initY = () => {
    cover.style.height = "200px";
  };
  
  initY();

  const setPos = (e) => {
    const posY = e.offsetY;
    if (200 < posY <= 400) {
      cover.style.height = posY + "px";
      console.log(posY);
    } else {
      initY();
      console.log("init");
    }
  };

  frame.addEventListener("mousemove", (e) => setPos(e));
})();
