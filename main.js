$(document).ready(function(){
    $('.open-menu').click(function (){
        $(this).css('display','none')
        $('.close-menu').css('display','block')
        $('.home').css('right','0')
        $('body').css('overflow','hidden')

    })
    $('.close-menu').click(function (){
        $(this).css('display','none')
        $('.open-menu').css('display','block')
        $('.home').css('right','-110%')
        $('body').css('overflow','auto')
    })
    $('.close-menu , .menu a').click(function (){
        $('.close-menu').css('display','none')
        $('.open-menu').css('display','block')
        $('.home').css('right','-110%')
        $('body').css('overflow','auto')
    })

})




















