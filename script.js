document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.querySelector(".search-container input");

  searchBox.addEventListener("focus", function () {
    this.style.border = "2px solid #e23744";
  });

  searchBox.addEventListener("blur", function () {
    this.style.border = "none";
  });

  searchBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      alert("Searching for: " + this.value);
    }
  });
});
