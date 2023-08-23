$(document).ready(function(){
$('.box h3').click(function(){
    $(this).toggleClass('active');
    $(this).next().toggleClass('active');
})
});