window.onload=function(){
    let btnNav = document.getElementById('btn-nav');
    btnNav.addEventListener('click',function(){
        let _header = document.querySelector('.header');
        let _nav = document.querySelector('.nav');
        _header.classList.toggle('show-nav');
        _nav.classList.toggle('show-nav');
    });
}
// $(function(){
//     $('#btn-nav').on({
//         'click':function(){
//             $('.header,.nav').toggleClass('show-nav');                    
//         },
//     });            
// })