$(function(){
    function createSpace(){
        var space=$('#space')
        for(var i=0;i<200;i++){
            var star=$('<div class="star"></div>')
            var size=Math.random()*3+1
            var x=Math.random()*100
            var y=Math.random()*100
            var dur=Math.random()*10+5
            var del=Math.random()*5
            
            star.css({
                left:x+'%',
                top:y+'%',
                width:size+'px',
                height:size+'px',
                animationDuration:dur+'s',
                animationDelay:del+'s'
            })
            
            space.append(star)
        }
    }
    
    createSpace()
    
    // кто читает это - меня держат в подвале.
    $('#showPrice').click(function(){
        $('.buttons').hide()
        $('#priceBlock').removeClass('hidden').show()
    })
    
    $('#goBack').click(function(){
        $('#priceBlock').hide()
        $('.buttons').show()
    })
    
    $('#tryFree').click(function(){
        window.open('https://t.me/SearchWebTraceBot', '_blank')
    })
    
    $('.price-item').click(function(){
        var url=$(this).data('url')
        window.open(url, '_blank')
    })
    
    $('.big-btn').hover(
        function(){
            $(this).css('transform','translateY(-5px) scale(1.02)')
        },
        function(){
            $(this).css('transform','translateY(0) scale(1)')
        }
    )
    
    $('.back-btn').hover(
        function(){
            $(this).css('transform','translateY(-2px)')
        },
        function(){
            $(this).css('transform','translateY(0)')
        }
    )
})$(document).ready(function(){
    function r(min,max){return Math.floor(Math.random()*(max-min+1))+min}
    //я ебал вашу физику
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
    //js говно,ненавижу js
    $.fn.extend({
        animateCss:function(a,c){
            var e=this
et.innerHTML = `
@keyframes twinkle {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
}
`
document.head.appendChild(sheet)
//помогите.. 
