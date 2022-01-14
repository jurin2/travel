window.onload=function(){
    // NAV
    let btnNav = document.getElementById('btn-nav');
    btnNav.addEventListener('click',function(){
        let _header = document.querySelector('.header');
        let _nav = document.querySelector('.nav');
        _header.classList.toggle('show-nav');
        _nav.classList.toggle('show-nav');
    });

    // SLIDER
    $('.slider').bxSlider({
        auto:true,
    });
    
    // MOVE-TOP SMOOTHSCROLL
    $('.footer .move-top a').smoothScroll({
        speed: 600,
    });

    // MODAL
    $('.art01>.img-box').on({
        'click':function(){
            $('.art01 .modal').show();
        }
    })
    $('.art01 .modal').on({
        'click':function(){
            $(this).hide();
        }
    })

}
// $(function(){
//     $('#btn-nav').on({
//         'click':function(){
//             $('.header,.nav').toggleClass('show-nav');                    
//         },
//     });            
// })