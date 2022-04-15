theme = (e) => {
    let btn = document.querySelector("i#theme");
    e.classList.toggle("bi-moon-fill");
    let theme = e.classList.value

    if(theme.indexOf("bi-moon-fill") != -1) {
        document.cookie = "theme" + "=" + "dark";
        document.body.classList.toggle("dark");
    } else {
        document.cookie = "theme" + "=" + "light";
        document.body.classList.toggle("light");
    }
}

loadTheme = () => {
    if(document.cookie.indexOf("dark") != -1) {
        document.body.classList.toggle("dark");
    } else {
        document.body.classList.toggle("light");
    }
}

menu = () => {
    let menu = document.querySelector("#menu-burger");
    menu.classList.toggle("show");
    if(menu.classList == "show") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}