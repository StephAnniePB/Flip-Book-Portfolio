//var currentPage = 0;

//$('.book')
//.on('click', '.flipped', prevPage);

//$('.book').hammer().on("swipeleft", nextPage);
//$('.book').hammer().on("swiperight", prevPage);

function prevPage() {
  
  $('.flipped')
    .last()
    .removeClass('flipped')
    .addClass('active')
    .siblings('.page')
    .removeClass('active');
}
function nextPage() {
  
  $('.active')
    .removeClass('active')
    .addClass('flipped')
    .next('.page')
    .addClass('active')
    .siblings();
    
    
}
$(document).ready(function(){
    var currentPage=5
    if (window.location.hash == '#pagefive') {
        $('section').removeClass('active');
        $('#pagefive').addClass('active');
    }
});
var zCascade=function(pages, active, maxZ) {
    var offset=1;
    for(var i=2*active-1; i>=0; i--){
        $(pages[i]).css("z-index",maxZ+offset);
        offset--;
    }
    offset=1;
    for(var i=2*active; i<pages.length; i++){
        $(pages[i]).css("z-index",maxZ+offset);
        offset--;
    }
};
