let hamburgerMenu = document.querySelector('.humbergur-menu')
let mobileNav = document.querySelector('.mobile-nav')
let humbergurSpan1 = document.querySelector('.humbergur1')
let humbergurSpan2 = document.querySelector('.humbergur2')
let humbergurSpan3 = document.querySelector('.humbergur3')
let customScroll = document.querySelector('.custom-scroll')
let blur = document.querySelector('.blur')
let navList = document.querySelector('.nav-list')
let isVisible = false

//handling menu and humbergurMenu


hamburgerMenu.addEventListener('click',function(){

    if(!isVisible){
        openMenu()
        isVisible = true
    }else{
        closeMenu()
        isVisible = false
    }
})



function openMenu(){
    mobileNav.style.visibility = 'visible'
    mobileNav.style.opacity = '0.99'
    // mobileNav.style.display = 'block'
    humbergurSpan1.classList.add('transform-rotate')
    humbergurSpan2.style.display = 'none'
    humbergurSpan3.classList.add('transform-rotate--reset')
    blur.classList.add('active')
}

function closeMenu(){
    mobileNav.style.visibility = 'hidden'
    mobileNav.style.opacity = '0'
    //    mobileNav.style.display = 'none'
    humbergurSpan1.classList.remove('transform-rotate')
    humbergurSpan2.style.display = 'inline-block'
    humbergurSpan3.classList.remove('transform-rotate--reset')
    blur.classList.remove('active')
}





//handle custonScroll



window.addEventListener('scroll',function(){
    let scrollTop = document.documentElement.scrollTop
    let clientHeight = document.body.clientHeight
    let mainHeight = window.innerHeight
    let calcCustomWidth = scrollTop / (clientHeight - mainHeight)

    let resultScroll = Math.round(calcCustomWidth * 100)

    customScroll.style.width = resultScroll + '%'
})



//  dark light theme

let darkLightButton = document.querySelector('.dark-light-wrapper')
let sun = document.querySelector('.sun')
let moon = document.querySelector('.moon')
let body = document.body
let isDark = false

darkLightButton.addEventListener('click',function(){
    body.classList.toggle('dark-theme')
    
    if(!isDark){
        document.documentElement.style.setProperty('--text-color','#fff')
        document.documentElement.style.setProperty('--white-color','#1B1B1D')
        moon.style.display = 'none'
        sun.style.display = 'block'
        isDark = true
    }else{
        document.documentElement.style.setProperty('--text-color','#1B1B1D')
        document.documentElement.style.setProperty('--white-color','#fff')
        moon.style.display = 'block'
        sun.style.display = 'none'
        isDark = false
    }
})