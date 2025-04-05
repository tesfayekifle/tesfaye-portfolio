// Mobile Menu Toggle
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

const navbarLinks = document.querySelectorAll(".navbar a");
navbarLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
    }
  });
});

// Sticky Header
const header = document.querySelector(".header");
const stickyClass = "sticky";

window.onscroll = () => {
  if (window.scrollY > 0) {
    header.classList.add(stickyClass);
  } else {
    header.classList.remove(stickyClass);
  }
};

// Smooth Scrolling
const smoothScrollLinks = document.querySelectorAll("a[href^='#']");
smoothScrollLinks.forEach(anchor => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = anchor.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - header.offsetHeight,
      behavior: "smooth"
    });
  });
});

// Font Size Adjustment for Responsiveness
const adjustFontSize = () => {
  const root = document.documentElement;
  const screenWidth = window.innerWidth;

  if (screenWidth <= 480) {
    root.style.setProperty("--font-size", "14px");
  } else if (screenWidth <= 768) {
    root.style.setProperty("--font-size", "16px");
  } else {
    root.style.setProperty("--font-size", "18px");
  }
};

window.addEventListener("load", adjustFontSize);
window.addEventListener("resize", adjustFontSize);

// Lazy Loading for Images
const lazyLoadImages = () => {
  const images = document.querySelectorAll("img");

  images.forEach(img => {
    const imgSrc = img.getAttribute("data-src");
    if (imgSrc) {
      img.setAttribute("src", imgSrc);
    }
  });
};

window.addEventListener("load", lazyLoadImages);

// Dynamic Content Interaction
const handleDynamicContent = () => {
  const sectionTitles = document.querySelectorAll(".section h2");
  sectionTitles.forEach(title => {
    title.addEventListener("mouseover", () => {
      title.style.color = "#ff6347";
    });
    title.addEventListener("mouseout", () => {
      title.style.color = "";
    });
  });
};

window.addEventListener("load", handleDynamicContent);

// Layout Adjustment for Mobile View
const adjustLayoutBasedOnScreenSize = () => {
  const body = document.body;
  const screenWidth = window.innerWidth;

  if (screenWidth <= 768) {
    body.classList.add("mobile-view");
  } else {
    body.classList.remove("mobile-view");
  }
};

window.addEventListener("load", adjustLayoutBasedOnScreenSize);
window.addEventListener("resize", adjustLayoutBasedOnScreenSize);

