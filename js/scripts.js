function myFunction() {
    var x = document.querySelector(".myLinks");
    if (x.classList.contains("active")) {
        x.classList.remove("active");
    } else {
        x.classList.add("active");
    }
}

arrow = document.querySelectorAll('.down-arrow')

arrow.forEach(function (arrow) {

    arrow.onclick = function () {
        ul = arrow.parentNode
        if (ul.nextElementSibling.classList.contains('hidden')) {
            ul.nextElementSibling.classList.remove('hidden');
        } else ul.nextElementSibling.classList.add('hidden')
    }

});