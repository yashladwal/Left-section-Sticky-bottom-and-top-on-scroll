$(function(){
    let $sidebar = $('#sidebar');
    let $window = $(window)
    let sh = $sidebar.innerHeight()
    let sp = $sidebar.position().top;
    let ws = $window.scrollTop();
    let wh = $window.height();
    $window.scroll(()=>{
     sidebar_scroll();
    });
    $window.resize(()=>{
     sidebar_scroll();
    });
    
 let sidebar_scroll = () => {
    ws = $window.scrollTop();
    wh = $window.height();
   // console.log(wh + " "+ sh);
    if(wh > sh){
        // for large window height
        if(ws > sp){
            $sidebar.addClass('fixed').css({top:0})
        }else{
            $sidebar.removeClass('fixed').css({top:0})
        }
    }else{
        // for small window height
        if(ws > sp){
            if(ws > (sp+sh - wh)){
                $sidebar.addClass('fixed').css({top:wh-sh})
            }
        }else{
            $sidebar.removeClass('fixed').css({top:0})
        }
    }   
}
});