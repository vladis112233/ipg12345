$(document).ready(function (){
    $('.slider').slick({
        slidesToShow: 5,
        autoplay: true, // Включить автоматический скролл
        autoplaySpeed: 2000
    });
});

// $(".custom-carousel").owlCarousel({
//     autoWidth: true,
//     loop: true
// });
// $(document).ready(function () {
//     $(".custom-carousel .item").slick(function () {
//         $(".custom-carousel .item").not($(this)).removeClass("active");
//         $(this).toggleClass("active");
//     });
// });

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

