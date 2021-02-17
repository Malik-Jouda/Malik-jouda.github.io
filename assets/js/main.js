$(document).ready(function (){

    setTimeout(function () {
        $(".preloader").fadeOut(400,"linear");
    }, 1500);

    $('a[href*="#"]').on('click',function (){
        $('html , body').animate(
            {
               scrollTop : $($(this).attr('href')).offset().top - 40
            },
            500
        )
    })

    $('.owl-products').owlCarousel({
        loop:false,
        margin:30,
        nav:false,
        dots: true,

        rtl: true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },

            991:{
                items:3
            },

            1200:{
                items:4
            }
        }
    })
})


if(localStorage.getItem("themeSwitch") === null){
    localStorage.setItem("themeSwitch","dark")
}

document.documentElement.setAttribute('color-mode',localStorage.getItem("themeSwitch"))

function themeSwitch(){
     if(localStorage.getItem("themeSwitch") == "dark" ) {

         localStorage.setItem("themeSwitch", "light")
     }else {
         localStorage.setItem("themeSwitch", "dark")
     }


    document.documentElement.setAttribute('color-mode',localStorage.getItem("themeSwitch"))

}



