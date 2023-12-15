document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("svg").forEach((svg) => {
    const viewBox = svg.getAttribute("viewBox");

    if (viewBox) {
      const [, , width, height] = viewBox.split(/\s+|,/);
      svg.setAttribute("width", width);
      svg.setAttribute("height", height);
    }
  });
});
