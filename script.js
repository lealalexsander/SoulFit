function aparecerMenu() {
    const sidebar = document.getElementById("sidebar");
    const background_noclick = document.getElementById("background-noclick");

    if(sidebar.className === "sidebar") {
        sidebar.className = "sidebar-active";
        background_noclick.className = "background-noclick-active";
    } else {
        sidebar.className = "sidebar";
        background_noclick.className = "background-noclick";
    }
}
