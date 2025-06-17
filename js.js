//Active button clicked and Selecting button submitted

const ratingScales = document.querySelectorAll('.rating_scale');
let selectedValue = null;

ratingScales.forEach(scale => {
  scale.addEventListener('click', () => {
    // Remove previous selection
    ratingScales.forEach(s => s.classList.remove('selected'));
    // Add "selected" to clicked one, Highlight selected
    scale.classList.add('selected');
    // Update thank-you message with selected rating
    selectedValue = scale.getAttribute('data-value');
  });
});


//Submit botton

function myFunction() {
  if (!selectedValue) {
    alert("Please select a rating before submitting.");
    return;
  }
  // Hide rating page
  document.querySelector('.rating_page').style.display = 'none';

  // Show thank you page
  const thanks_page = document.querySelector(".thanks_page");
  thanks_page.style.display = 'flex'; // use flex to respect CSS layout

  // Set selected rating
  document.getElementById('selected_rating').textContent = selectedValue;

}



