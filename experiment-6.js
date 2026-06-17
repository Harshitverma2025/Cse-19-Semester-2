let fontSize = 16;
let colors = ["lightblue", "lightgreen", "lightpink", "lightyellow", "lavender", "peachpuff", "lightcoral", "skyblue"];
let index = 0;

    function changeHeading() {
        let text = document.getElementById("inputText").value;
        document.getElementById("heading").innerText = text;
    }

function changeBackground() {
    document.body.style.background = colors[index];
    index++;

    if (index >= colors.length) {
        index = 0;
    }
}
    function increaseFont() {
        fontSize += 2;
        document.getElementById("para").style.fontSize = fontSize + "px";
    }

    function togglePara() {
        let p = document.getElementById("para");
        p.style.display = (p.style.display === "none") ? "block" : "none";
    }

    function resetAll() {
        document.getElementById("heading").innerText = "Welcome to JavaScript Lab";
        document.getElementById("para").style.display = "block";
        document.body.style.background = "#eef2f3";
        fontSize = 16;
        document.getElementById("para").style.fontSize = "16px";
    }