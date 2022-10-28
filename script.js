let navIcons = document.querySelector(".icons");
let hoverNav = document.querySelector(".links");
navIcons.addEventListener("mouseover", ()=>{
    hoverNav.classList.remove("links-hover");
    navIcons.addEventListener("mouseleave", ()=>{
        hoverNav.classList.add("links-hover")
    })
})