function reveal() {
    var reveals = document.querySelectorAll("div");
    var elementheight=document.getElementById("one").clientHeight;
    elementheight=elementheight*0.7;
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 10;
        if (elementTop +elementheight< windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
        // else
        // {
        //     reveals[i].classList.remove("active");
        // }
    }
}
window.addEventListener("scroll", reveal);

// To check the scroll position on page load
// reveal();
