var menu = document.querySelector("#nav-prt2 i");
var full = document.querySelector("#full-scr-nav");

var flag = 0;
menu.addEventListener("click",function(){
    if(flag==0){
        full.style.top = "0%";
        document.querySelector("#nav h2").style.color = "#222";
        document.querySelector("#nav-prt2 h3").style.color = "#222";
        document.querySelector("#nav-prt2 i").style.color = "#222";
        flag = 1;
    }else{
        full.style.top = "-100%";
        document.querySelector("#nav h2").style.color = "#dadada";
        document.querySelector("#nav-prt2 h3").style.color = "#dadada";
        document.querySelector("#nav-prt2 i").style.color = "#dadada";
        flag = 0;
    }
    

})

var tl = gsap.timeline();
tl.from("#page1 h1",{
    y : 70,
    opacity:0,
    duration:0.8,
    delay:0.5,

})
.from("#page1 h2",{
    y : 60,
    opacity:0,
    duration:0.5,
    delay:-0.2,
})
.from("#page1 h3",{
    y : 60,
    opacity:0,
    duration:0.5,
    delay:-0.2,
})
.to("#page1 img",{
    scale: 0.97,
    scrollTrigger: {
        trigger:"#page1 img",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 5%"
    }
})
.from("#page2 h1",{
    y:80,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 50%",
        scrub:5,
    }
})
// var slide1h1 = document.querySelectorAll("#page5 #page5-slide #slide1");
// slide1h1.forEach(function(elem){
//     gsap.to(elem,{
//         transform:'translate(-100%)',
//         duration:'4s',
//         scrollTrigger:{
//             trigger:'#page5',
//             scroller:'body',
//             scrub:3
//         }
    // })
// })