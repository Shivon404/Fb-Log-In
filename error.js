function redirectToNewPage() {
  const emailInput = document.getElementById('email').value;
  if (emailInput.indexOf('@gmail.com') === -1) {
    alert('Please enter a valid email address ending with "@gmail.com"');
    return false;
  }
  window.location.href = "https://www.facebook.com/";
}
