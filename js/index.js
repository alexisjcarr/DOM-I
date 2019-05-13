const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// nav bar
let navEls = document.querySelectorAll(".container header nav a");
navEls[0].textContent = siteContent.nav["nav-item-1"];
navEls[1].textContent = siteContent.nav["nav-item-2"];
navEls[2].textContent = siteContent.nav["nav-item-3"];
navEls[3].textContent = siteContent.nav["nav-item-4"];
navEls[4].textContent = siteContent.nav["nav-item-5"];
navEls[5].textContent = siteContent.nav["nav-item-6"];

// CTA
let header_ = document.querySelector(".cta .cta-text h1");
header_.innerHTML = siteContent.cta.h1;

let button = document.querySelector(".cta .cta-text button");
button.innerHTML = siteContent.cta.button;

let codeSnip = document.querySelector(".cta #cta-img");
codeSnip.src = siteContent.cta["img-src"];

/* Main Content*/

// Top Content
let featuresHead = document.querySelectorAll(
  ".main-content .top-content .text-content h4"
)[0];
featuresHead.innerHTML = siteContent["main-content"]["features-h4"];

let featuresCont = document.querySelectorAll(
  ".main-content .top-content .text-content p"
)[0];
featuresCont.innerHTML = siteContent["main-content"]["features-content"];

let aboutHead = document.querySelectorAll(
  ".main-content .top-content .text-content h4"
)[1];
aboutHead.innerHTML = siteContent["main-content"]["about-h4"];

let aboutCont = document.querySelectorAll(
  ".main-content .top-content .text-content p"
)[1];
aboutCont.innerHTML = siteContent["main-content"]["about-content"];

// Middle Image
let midImg = document.querySelector(".main-content .middle-img");
midImg.src = siteContent["main-content"]["middle-img-src"];

// Bottom Content
// services
let servicesHead = document.querySelectorAll(
  ".main-content .bottom-content .text-content h4"
)[0];
servicesHead.innerHTML = siteContent["main-content"]["services-h4"];

let servicesCont = document.querySelectorAll(
  ".main-content .bottom-content .text-content p"
)[0];
servicesCont.innerHTML = siteContent["main-content"]["services-content"];

// product
let productHead = document.querySelectorAll(
  ".main-content .bottom-content .text-content h4"
)[1];
productHead.innerHTML = siteContent["main-content"]["product-h4"];

let productCont = document.querySelectorAll(
  ".main-content .bottom-content .text-content p"
)[1];
productCont.innerHTML = siteContent["main-content"]["product-content"];

// vision
let visionHead = document.querySelectorAll(
  ".main-content .bottom-content .text-content h4"
)[2];
visionHead.innerHTML = siteContent["main-content"]["vision-h4"];

let visionCont = document.querySelectorAll(
  ".main-content .bottom-content .text-content p"
)[2];
visionCont.innerHTML = siteContent["main-content"]["vision-content"];

/* Contact */
let contactHead = document.querySelector('.contact h4');
contactHead.innerHTML = siteContent.contact["contact-h4"];

let contactCont = document.querySelectorAll('.contact p');
contactCont[0].innerHTML = siteContent.contact.address;
contactCont[1].innerHTML = siteContent.contact.phone;
contactCont[2].innerHTML = siteContent.contact.email;

/* Footer */
let footer_ = document.querySelector('footer');
footer_.innerHTML = siteContent.footer.copyright;