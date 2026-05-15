function toggleContact() {
  const info = document.getElementById("contact-info");
  // Плавно додаємо або прибираємо клас .show
  info.classList.toggle("show");
}

function toggleMembers() {
  const list = document.getElementById("members-list");
  const arrow = document.getElementById("arrow-icon");
  
  // Відкриваємо/закриваємо список
  list.classList.toggle("open");
  
  // Повертаємо стрілку вниз при відкритті
  arrow.classList.toggle("rotate");
}