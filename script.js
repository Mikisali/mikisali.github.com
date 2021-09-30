$("#btn").click(function(){
    alert("Click");
});
$(document).ready(function(){
    $( "img" ).click(function() {
        $(this).animate({
            height: '+=100px',
            width: '+=100px'});
    });
}); 