$(document).ready(function(){
    function r(min,max){return Math.floor(Math.random()*(max-min+1))+min}
    
    function makeStars(){
        var s=$('#stars')
        for(var i=0;i<150;i++){
            var x=r(0,100),y=r(0,100),size=r(1,3),dur=r(20,80)
            $('<div>').css({
                position:'absolute',
                left:x+'%',
                top:y+'%',
                width:size+'px',
                height:size+'px',
                backgroundColor:'white',
                borderRadius:'50%',
                opacity:r(3,10)/10,
                animation:`twinkle ${dur}s infinite`
            }).appendTo(s)
        }
    }
    
    $.fn.extend({
        animateCss:function(a,c){
            var e=this
            e.addClass('animated '+a).one('animationend',function(){
                e.removeClass('animated '+a)
                c&&c()
            })
        }
    })
    
    makeStars()
    
    $('#showPrice').click(function(){
        $('.buttons').fadeOut(300,function(){
            $('#priceBlock').fadeIn(300)
        })
    })
    
    $('#goBack').click(function(){
        $('#priceBlock').fadeOut(300,function(){
            $('.buttons').fadeIn(300)
        })
    })
    
    $('#tryFree').click(function(){
        window.location.href='https://t.me/SearchWebTraceBot'
    })
    
    $('.price-item').click(function(){
        var u=$(this).data('url')
        $(this).css({
            transform:'scale(0.95)',
            backgroundColor:'rgba(74, 140, 255, 0.2)'
        })
        setTimeout(function(){
            window.location.href=u
        },200)
    })
    
    $('.btn').hover(
        function(){$(this).css('transform','translateY(-3px)')},
        function(){$(this).css('transform','translateY(0)')}
    )
})

const sheet = document.createElement('style')
sheet.innerHTML = `
@keyframes twinkle {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
}
`
document.head.appendChild(sheet)
