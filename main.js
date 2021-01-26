$(document).ready(function () {
    if ($(window).width() <= 500) {


        $('.open-menu').click(function () {
            $(this).css('display', 'none')
            $('.close-menu').css('display', 'block')
            $('.home').css('right', '0')
            $('body').css('overflow', 'hidden')

        })
        $('.close-menu').click(function () {
            $(this).css('display', 'none')
            $('.open-menu').css('display', 'block')
            $('.home').css('right', '-110%')
            $('body').css('overflow', 'auto')
        })
        $('.close-menu , .menu a').click(function () {
            $('.close-menu').css('display', 'none')
            $('.open-menu').css('display', 'block')
            $('.home').css('right', '-110%')
            $('body').css('overflow', 'auto')
        })
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(document).height() - $(document).height() + 150) {
            $('header.home').addClass('scroll-event')
        } else {
            $('header.home').removeClass('scroll-event')
        }
    })

})
let imgDiv = document.getElementsByClassName('img')
let lengthImgDiv = 100* (imgDiv.length-1)
let nextClick = document.getElementById('next-div');
let prevClick = document.getElementById('prev-div');
let imgsMainDiv = document.getElementById('imgs');
let tmpWidth = 0;
nextClick.addEventListener('click',function(){
    if ( tmpWidth < lengthImgDiv ){
        tmpWidth+=100
        imgsMainDiv.style.right = tmpWidth+'%'
    }else if (tmpWidth === lengthImgDiv ){
        tmpWidth=0
        imgsMainDiv.style.right = tmpWidth+'%'
    }
})
prevClick.addEventListener('click',function(){
    if ( tmpWidth > 0 ){
        tmpWidth-=100
        imgsMainDiv.style.right = tmpWidth+'%'
    }else if (tmpWidth === 0 ){
        tmpWidth=lengthImgDiv
        imgsMainDiv.style.right = tmpWidth+'%'
    }
})

























