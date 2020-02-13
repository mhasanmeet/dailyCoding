var skewed = document.querySelector('.skewed');
window.addEventListener('scroll', function () {
 var value = -10 + window.scrollY / 60;
 skewed.style.transfrom = "skewY(" + value + "deg)"
})