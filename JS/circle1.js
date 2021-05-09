$(function(){				  
    var num = parseInt($('.text').html());  
    var temp = 0;  
    var timer = setInterval(function(){  
        calculate(temp);  
        if(temp == num){  
            clearInterval(timer);  
        }  
        temp++;   
    },30)  

    function calculate(value){  
        
        $('.text').html(value + '%');  
        $('.circle-left').remove();  
        $('.mask-right').remove();  

        if(value <= 50){  
            var html = '';  
              
            html += '<div class="mask-right" style="transform:rotate('+ (value * 3.6) +'deg)"></div>';  
              
            $('.circle-right').append(html);  
        }

        else{  
            value -= 50;  
            var html = '';  
              
            html += '<div class="circle-left">';  
            html += '<div class="mask-left" style="transform:rotate('+ (value * 3.6) +'deg)"></div>';  
            html += '</div>';  
            $('.circle-right').after(html);  
        }  
    }  
})