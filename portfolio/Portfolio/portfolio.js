const show=document.getElementById("nav")
const ham=document.getElementById('ham')
ham.addEventListener('click',()=>{
show.classList.toggle("show")

})





const typed =new Typed('.multiple-text',{
    strings:['Frontend Developer.','Fresher.','Quick Learner.'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true
});

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 50
});
ScrollReveal().reveal('.home-content,.about-content h1,.skills-content h1,.education-info h1,.certification h1,.portfolio h1,.contact h1',{origin:'top'});
ScrollReveal().reveal('.home-image,.courses',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-content p,.skills-list,.adddress',{origin:'left'});
ScrollReveal().reveal('.home-content p,.personal-info,.education-info,.contact form',{origin:'right'});

