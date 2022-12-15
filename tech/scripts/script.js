//Hamburger menu function
function menu() {
    var navlinks = document.getElementById("nav-links");
    var menuicon = document.getElementById("icon");
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
        menuicon.style.color = "#fff";
    } else {
        navlinks.style.display = "block";
        menuicon.style.color = "#f6eee4";
    }
}