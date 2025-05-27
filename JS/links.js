document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".menu-a");
    const sections = [];
  
    links.forEach(link => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const section = document.querySelector(href);
        if (section) {
          sections.push({ href, section });
        }
      }
    });
  
    function activateLink(href) {
      links.forEach(link => {
        if (link.getAttribute("href") === href) {
          link.classList.add("active-link");
        } else {
          link.classList.remove("active-link");
        }
      });
    }
  
    window.addEventListener("scroll", () => {
      let current = null;
  
      sections.forEach(({ href, section }) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
  
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = href;
        }
      });
  
      if (current) activateLink(current);
    });
  
    // Подсветка по клику
    links.forEach(link => {
      link.addEventListener("click", () => {
        const href = link.getAttribute("href");
        activateLink(href);
      });
    });
  });