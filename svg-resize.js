var svgList = document.getElementsByTagName("svg");

svgList.forEach(element => {
    let bbox = svg.getBBox();

    element.setAttribute("width", bbox.x + bbox.width + "px");
    element.setAttribute("height", bbox.x + bbox.height + "px");
});