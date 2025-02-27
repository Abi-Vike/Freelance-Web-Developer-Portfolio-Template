// Set current year in the footer
let date = new Date();
let year = date.getFullYear();
document.getElementById("year").innerHTML = year;

// Back-to-top button functionality
const amountScrolled = 200;
const btnBackToTop = document.querySelector('.back-to-top');

const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
const toggleBtnBackToTop = () => {
  if (window.scrollY > amountScrolled) {
    btnBackToTop.classList.add('back-to-top_show');
  } else {
    btnBackToTop.classList.remove('back-to-top_show');
  }
};

if (btnBackToTop) {
  btnBackToTop.addEventListener('click', backToTop);
  window.addEventListener('scroll', toggleBtnBackToTop);
}

// Add to existing script
document.addEventListener('DOMContentLoaded', function() {
  // Handle logout
  document.body.addEventListener('click', function(e) {
    if (e.target.matches('[data-netlify-logout-button]')) {
      e.preventDefault();
      if (window.netlifyIdentity) {
        window.netlifyIdentity.logout();
        window.location.href = '/';
      }
    }
  });
});