var menu1 = document.querySelector("#menu1");
var menu2 = document.querySelector("#menu2");
var menu3 = document.querySelector("#menu3");

menu1.addEventListener("click",function(){
    var submenu = document.querySelector("#menu1 ul");
    submenu.classList.toggle("hide");
    submenu.classList.toggle("show");
});
menu2.addEventListener("click",function(){
    var submenu = document.querySelector("#menu2 ul");
    submenu.classList.toggle("hide");
    submenu.classList.toggle("show");
});
menu3.addEventListener("click",function(){
    var submenu = document.querySelector("#menu3 ul");
    submenu.classList.toggle("hide");
    submenu.classList.toggle("show");
});




// document.getElementById("menu1").addEventListener("click",function(){
//     console.log("click sur menu1");
//             // (querrySelector = css selector)
//     // document.querySelector("#menu1btn .submenu").style.height="120px";
//     var submenu = document.querySelector("#menu1 ul")
//     console.dir(submenu);
//     submenu.classList.toggle("hide");
//     submenu.classList.toggle("show");
// });
// document.getElementById("menu2").addEventListener("click",function(){
//     console.log("click sur menu2");
//             // (querrySelector = css selector)
//     // document.querySelector("#menu1btn .submenu").style.height="120px";
//     var submenu = document.querySelector("#menu2 ul")
//     console.dir(submenu);
//     submenu.classList.toggle("hide");
//     submenu.classList.toggle("show");
// });
// document.getElementById("menu3").addEventListener("click",function(){
//     console.log("click sur menu3");
//             // (querrySelector = css selector)
//     // document.querySelector("#menu1btn .submenu").style.height="120px";
//     var submenu = document.querySelector("#menu3 ul")
//     console.dir(submenu);
//     submenu.classList.toggle("hide");
//     submenu.classList.toggle("show");
// });