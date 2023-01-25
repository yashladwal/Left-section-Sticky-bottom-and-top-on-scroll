$(document).ready(function(){
   let $sidebar = $('#sidebar');
   let $window = $(window)
   let sh = $sidebar.innerHeight()
   let sp = $sidebar.position().top;
    let ws = $window.scrollTop();
    let wh = $window.height();
   $(window).scroll(function(){
    ws = $window.scrollTop();
        if( wh > sh){
             // for large window height
             if(ws > sp){
                 $sidebar.addClass('fixed').css({top:0})
             }else{
                $sidebar.removeClass('fixed').css({top:0})
             }
        }else{
            // for small window height
            if(ws > sp){
                console.log(ws + " "+ sp)
                if(ws > (sp+sh - wh)){
                    $sidebar.addClass('fixed').css({top:wh-sh})
                }
            }else{
                $sidebar.removeClass('fixed').css({top:0})
            }
        }
   })
})



//  $(function() {
//     var $sidebar = $("#sidebar");
//     var $window = $(window);
//     var lastScrollTop = $window.scrollTop();
//     if ($sidebar.length > 0) {
//         if (lastScrollTop > $("#sidebar").innerHeight()) {
//             $sidebar.css('top', 0);
//         } else {
//             $sidebar.css('top', $window.height()- $sidebar.outerHeight());
//         }
//          initialSidebarTop = $sidebar.position().top;
//         $window.scroll(function(event) {
//             var windowHeight = $window.height();
//             var sidebarHeight = $sidebar.outerHeight();
//             var scrollTop = $window.scrollTop();
//             var scrollBottom = scrollTop + windowHeight;
//             var sidebarTop = $sidebar.position().top;
//             var sidebarBottom = sidebarTop + sidebarHeight;
//             var heightDelta = Math.abs(windowHeight - sidebarHeight);
//             var scrollDelta = lastScrollTop - scrollTop;
//             var isScrollingDown = (scrollTop > lastScrollTop);
//             if ((scrollTop > initialSidebarTop) || ( scrollTop > initialSidebarTop + heightDelta)) {
//                 $sidebar.addClass('fixed');
//             } else if (!isScrollingDown && scrollTop <= initialSidebarTop) {
//                 $sidebar.removeClass('fixed');
//             }
//             var dragBottomDown = (sidebarBottom <= scrollBottom && isScrollingDown);
//             var dragTopUp = (sidebarTop >= scrollTop && !isScrollingDown);
//             if (dragBottomDown) {
//                 if (windowHeight > sidebarHeight) {
//                     $sidebar.css('top', 0);
//                 } else {
//                     $sidebar.css('top', -heightDelta);
//                 }
//             } else if (dragTopUp) {
//                 $sidebar.css('top', 0);
//             } else if ($sidebar.hasClass('fixed')) {
//                 var currentTop = parseInt($sidebar.css('top'), 10);
//                 var minTop = -heightDelta;
//                 var scrolledTop = currentTop + scrollDelta  ;
//                 var isPageAtBottom = (scrollTop + windowHeight >= $(document).height());
//                 var newTop = (isPageAtBottom) ? minTop : scrolledTop;
//                 $sidebar.css('top', newTop);
//             }
//             lastScrollTop = scrollTop;
//         });
//     }
// });