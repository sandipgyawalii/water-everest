/*=============== Blog Filter ===============*/
$(document).ready(function(){
    $('.filter-item').click(function(){
       const value = $(this).attr('data-filter')
       if (value == 'all') {
          $('.post-box').show('1000')
       }
       else{
          $('.post-box').not('.' + value).hide('1000')
          $('.post-box').filter('.' + value).show('1000')
       }
    })
 
    $(".filter-item").click(function (){
       $(this).addClass("active-filter").siblings().removeClass("active-filter")
    })
 })

//  Product Slider JS


const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})