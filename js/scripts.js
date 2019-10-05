function myFunction() {
    var x = document.querySelector(".myLinks");
    if (x.classList.contains("active")) {
        x.classList.remove("active");
    } else {
        x.classList.add("active");
    }
}

document.querySelector('.down-arrow').onclick = function () {
    x = document.querySelector('.vaga-req');
    if (x.classList.contains('hidden')) {
        x.classList.remove('hidden');
    } else x.classList.add('hidden');
};

document.querySelector('.down-arrow2').onclick = function () {
    x = document.querySelector('.vaga-req2');
    if (x.classList.contains('hidden')) {
        x.classList.remove('hidden');
    } else x.classList.add('hidden');
};