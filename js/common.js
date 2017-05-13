// Отправка формы 
$(document).ready(function(){
	$(".submit-login-form").click(function(){
		$('#LoginForm').submit()
	})
});
// Валидация формы
$(function(){
var mail=new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    $('form').submit(function(e){
        e.preventDefault();
        var errors=0;
        $(this).find('.obligatory').each(function(){
            if($(this).val().trim().length==0){
                $(this).addClass('error');
                errors++;
            }
            else{
                $(this).addClass('success');
                if($(this).is('[data-validate="email"]')){
                    if(!mail.test($(this).val())){
                         errors++;
                         $(this).removeClass('success');
                         $(this).addClass('error');
                    }
                }     
            }
        })
        if(errors==0){
            $(this)[0].submit();
        }
    })
    $('input,textarea').focus(function(){
        $(this).removeClass('error');
        $(this).removeClass('success');
    })
});

