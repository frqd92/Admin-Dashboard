let navIcons = document.querySelector(".icons");
let hoverNav = document.querySelector(".links");
navIcons.addEventListener("mouseover", ()=>{
    hoverNav.classList.add("links-hover");
    navIcons.addEventListener("mouseleave", ()=>{
        hoverNav.classList.remove("links-hover")
    })
})