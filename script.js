let svg = document.getElementById("svg")
let sv=document.getElementById("sv")
svg.addEventListener("click", function () {
    // e.preventDefault;
    // svg.classList.remove("id");
    // void svg.offsetWidth;
    // svg.classList.add("id")
    sv.style.animation = "dash 3s ease-out 1 forwards";
});
let svg2 = document.getElementById("svg2")
svg2.addEventListener("click", function () {
    sv2.style.animation = "dash 3s ease-out 1 forwards";
});
let svg3 = document.getElementById("svg3")
svg3.addEventListener("click", function () {
    sv3.style.animation = "dash 3s ease-out 1 forwards";
});
let svg4 = document.getElementById("svg4")
svg4.addEventListener("click", function () {
    sv4.style.animation = "dash 3s ease-out 1 forwards";
});
let svg5 = document.getElementById("svg5")
svg5.addEventListener("click", function () {
    sv5.style.animation = "dash 3s ease-out 1 forwards";
});
let svg6 = document.getElementById("svg6")
svg6.addEventListener("click", function () {
    sv6.style.animation = "dash 3s ease-out 1 forwards";
});
let svg7 = document.getElementById("svg7")
svg7.addEventListener("click", function () {
    sv7.style.animation = "dash 3s ease-out 1 forwards";
});

let follow1=document.getElementById('follow1')
follow1.addEventListener("click",()=>{
    follow1.innerHTML="Followed"
    follow1.style.backgroundColor="rgb(247, 244, 247)"
    follow1.style.border="1px solid rgb(171, 170, 170)"
    follow1.style.color="black"
})
let follow2=document.getElementById('follow2')
follow2.addEventListener("click",()=>{
    follow2.innerHTML="Followed"
    follow2.style.backgroundColor="rgb(247, 244, 247)"
    follow2.style.border="1px solid rgb(171, 170, 170)"
    follow2.style.color="black"
})
let follow3=document.getElementById('follow3')
follow3.addEventListener("click",()=>{
    follow3.innerHTML="Followed"
    follow3.style.backgroundColor="rgb(247, 244, 247)"
    follow3.style.border="1px solid rgb(171, 170, 170)"
    follow3.style.color="black"
})
let follow4=document.getElementById('follow4')
follow4.addEventListener("click",()=>{
    follow4.innerHTML="Followed"
    follow4.style.backgroundColor="rgb(247, 244, 247)"
    follow4.style.border="1px solid rgb(171, 170, 170)"
    follow4.style.color="black"
})
let follow5=document.getElementById('follow5')
follow5.addEventListener("click",()=>{
    follow5.innerHTML="Followed"
    follow5.style.backgroundColor="rgb(247, 244, 247)"
    follow5.style.border="1px solid rgb(171, 170, 170)"
    follow5.style.color="black"
})

let home=document.getElementsByClassName("home")[0]
let find=document.getElementsByClassName("find")[0]
let main=document.getElementsByClassName("main")[0]
let search=document.getElementsByClassName("search")[0]
home.addEventListener("click", function (){
    find.onmouseover = function() {
        find.style.background="rgb(247, 244, 247)"
        find.style.borderRadius="0px 12px 12px 0px"
        find.style.fontWeight="700"
    };
    find.onmouseout = function() {
        find.style.background="none"
        find.style.borderRadius="none"
        find.style.fontWeight="normal"
    };
    find.style.background="none"
    find.style.borderRadius="none"
    home.style.background="rgb(247, 244, 247)"
    home.style.borderRadius="0px 12px 12px 0px"
    find.style.fontWeight="normal"
    home.style.fontWeight="700"
    search.style.display="none";
    main.style.display="flex";
    
})

find.addEventListener("click", function (){
    home.onmouseover = function() {
        home.style.background="rgb(247, 244, 247)"
        home.style.borderRadius="0px 12px 12px 0px"
        home.style.fontWeight="700"
    };
    home.onmouseout = function() {
        home.style.background="none"
        home.style.borderRadius="none"
        home.style.fontWeight="normal"
    };
    home.style.background="none"
    home.style.borderRadius="none"
    find.style.background="rgb(247, 244, 247)"
    find.style.borderRadius="0px 12px 12px 0px"
    home.style.fontWeight="normal"
    find.style.fontWeight="700"
    main.style.display="none";
    search.style.display="flex";
    
})