// OPEN POPUP
function openPopup() {
    document.getElementById("popupForm").style.display = "block";
}

// CLOSE POPUP
function closePopup() {
    document.getElementById("popupForm").style.display = "none";
}

function toggleMode() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        document.getElementById("theme-btn").innerHTML = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        document.getElementById("theme-btn").innerHTML = "🌙";
    }
}

window.onload = function () {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        document.getElementById("theme-btn").innerHTML = "☀️";
    }

}
