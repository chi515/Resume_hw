$(function(){				  
    var num1 = parseInt($('.text1').html());  
    var temp = 0;  
    var timer = setInterval(function(){  
        calculate(temp);  
        if(temp == num1){  
            clearInterval(timer);  
        }  
        temp++;   
    },30)  

    function calculate(value){  
        
        $('.text1').html(value + '%');  
        $('.circle-left1').remove();  
        $('.mask-right1').remove();  

        if(value <= 50){  
            var html = '';  
              
            html += '<div class="mask-right1" style="transform:rotate('+ (value * 3.6) +'deg)"></div>';  
              
            $('.circle-right1').append(html);  
        }

        else{  
            value -= 50;  
            var html = '';  
              
            html += '<div class="circle-left1">';  
            html += '<div class="mask-left1" style="transform:rotate('+ (value * 3.6) +'deg)"></div>';  
            html += '</div>';  
            $('.circle-right1').after(html);  
        }  
    }  
})