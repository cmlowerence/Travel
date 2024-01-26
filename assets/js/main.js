const underDevMsg = () => {
  alert(`This section is not yet prepared...`);
};

// Hamburger JavaScript
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navLink_list = document.getElementById("navLink_list");
console.log(hamburger);
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

window.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.closest("#hamburger") && !target.closest("#navLink_list")) {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  }
});

// navbar JavaScript
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (this.scrollY > 80) {
    navbar.classList.add("scroll-navbar");
  } else {
    navbar.classList.remove("scroll-navbar");
  }
});

// navbar hidden
// let prevScrollPos = window.pageYOffset;

// window.onscroll = function() {
//   let currentScrollPos = window.pageYOffset;

//   if (prevScrollPos > currentScrollPos) {
//     document.querySelector(".navbar").style.top = "0";
//   } else {
//     document.querySelector(".navbar").style.top = "-100px"; // Adjust the value based on your navbar height
//   }

//   prevScrollPos = currentScrollPos;
// }
let prevScrollPos = scrollY;
isCursorTop = true;
window.addEventListener("scroll", () => {
  let currentScrollPos = scrollY;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-100px";
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  }
  prevScrollPos = currentScrollPos;
});

document.addEventListener("mousemove", (event) => {
  let y = event.clientY;
  if (y < 70) {
    document.querySelector(".navbar").style.top = "0";
  }
});



// Client Reviews Testimonial

const clientReview_wrapper = document.querySelector('.clientReview_testimony');
const reviewCard_wrapper = document.querySelector(".clientReviewCardsWrapper");
let clientData;
fetchClient = fetch("./assets/js/clients.json")
  .then(response => response.json())
  .then(data => clientData = data)
  .catch(error => console.error('Error fetching data:', error));

(async ()=>{
  await fetchClient
  swiper_wrapper = document.createElement("div");
  swiper_wrapper.classList.add("swiper-wrapper");
  reviewCard_wrapper.appendChild(swiper_wrapper);
  // Creating testimonial card
  clientData.clients.forEach(e=>{
    swiper_wrapper.innerHTML += `
    <div class="swiper-slide clientReviewCard">
      <span class="__clientReviewCard__">
        <span class="clientReviewCardImage">
          <img src="${e.photo}"/>
        </span>
        <span class="clientReviewCardTextWrapper">
          <span class="clientReviewText">
            ${e.review}
          </span>
          <span class="clientDesc">
            <span class="clientName"> ${e.name} </span>
            <span class="clientPlace"> ${e.address} </span>
          </span>
        </span>
      </span>
    </div>
    `
  })



  let clientReviewSwiper = new Swiper(".clientReviewCardsWrapper",{
    spaceBetween: 40,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".client-indicator-wrapper",
      clickable: true,
    },
  })
})()