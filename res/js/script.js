
 new Typed('#typed',{
    strings:['Shop With Us <i class="fa fa-shopping-cart" aria-hidden="true"></i>','Limited Quantities Available'],
    typeSpeed:80,
    backSpeed:50,
    loop:true,
    cursorChar:'',
});

AOS.init();


$('.page-load').ready(function(){
    $.fakeLoader({
        timeToHide:1200,
        bgColor:"#004d40",
        spinner:"spinner3"
    });
$(document).ready(_=>{
    $('.page-load').addClass('show')
    setTimeout(_=> {
        $('.page-load').addClass('hide')
        $('.all').addClass('show')
    },4000)
})
});