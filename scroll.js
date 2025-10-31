const ele = document.getElementById("to-top");

window.addEventListener("scroll", (e) => {
    ele.style.scale = window.scrollY > 0 ? "1" : "0";
});

ele.addEventListener("click", () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });

    ele.style.scale = "0";
});