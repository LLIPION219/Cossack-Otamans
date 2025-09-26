function showContact() {
  const contactInfo = document.getElementById("contact-info");
  if (contactInfo.style.display === "block") {
    contactInfo.style.display = "none";
  } else {
    contactInfo.style.display = "block";
  }
}
