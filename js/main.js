theme = (e) => {
    var tema = e.classList.value
    var corpo = document.querySelector("body")

    var date = new Date();
    var days = 30;
    date.setTime(date.getTime() + (days*24*60*60*1000));
    var expire = date.toGMTString();

    if(tema.indexOf("moon") == -1) {
        e.classList.replace("bi-brightness-high-fill", "bi-moon-fill");
        document.body.className = "dark";
        document.cookie = "theme=dark; expires=" + expire;
    } 
    if(tema.indexOf("moon") != -1) {
        e.classList.replace("bi-moon-fill", "bi-brightness-high-fill");
        document.body.className = "light";
        document.cookie = "theme=light; expires=" + expire;
    }
}

loadTheme = () => {
    if(document.cookie.indexOf("dark") != -1) {
        document.body.classList.toggle("dark");
        var btn = document.querySelector("i#theme");
        btn.classList.replace("bi-brightness-high-fill", "bi-moon-fill");
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