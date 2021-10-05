$(document).ready(function(){
    $( "img" ).click(function() {
        for (var i = 0; i < 5; i++){
            $(this).slideUp();
            $(this).slideDown();
        }
    });
}); 