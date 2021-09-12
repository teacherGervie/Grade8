const mainIntro = document.querySelector('.myIntro');
function hideIntro() {
    mainIntro.classList.toggle('left');
}
mainIntro.addEventListener('transitionend', function () {
    // document.getElementById("mainIntro").style.display = "none";
    mainIntro.classList.toggle('hide');
});