document.addEventListener("DOMContentLoaded", () => {
    const toggler = document.getElementsByClassName("caret");
    for (let i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function () {
            // Prevent other click events from interfering
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("caret-down");
        });
    }
});
