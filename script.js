      function showContact() {
      const info = document.getElementById("contact-info");
      info.style.display = (info.style.display === "block") ? "none" : "block";
    }

    function toggleMembers() {
      const list = document.getElementById("members-list");
      const arrow = document.getElementById("arrow-icon");
      list.classList.toggle("open");
      arrow.style.transform = list.classList.contains("open") ? "rotate(180deg)" : "rotate(0deg)";
    }