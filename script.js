window.addEventListener("scroll", function() {
    const distance = window.scrollY;
    
    document.querySelector(
      ".box11"
    ).style.transform = `translateY(${distance * 1}px)`;
    setTimeout(() => {
      document.querySelector("#sec2").classList.add(".cont1");
    }, 400);
  });


  const hamburger = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");
  
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
      link.classList.toggle("fade");
    });
  });