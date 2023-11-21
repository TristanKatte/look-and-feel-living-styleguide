function copyToClipboard(elementId) {
    var textToCopy = document.getElementById(elementId).innerText;

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert("Tekst is gekopieerd naar het klembord: " + textToCopy);
      })
      .catch(err => {
        console.error('Fout bij kopiëren naar klembord', err);
      });
  }

function ToggleNav() {
    var Navbar = document.getElementById('nav-list');

    if (Navbar.style.display == "none") {
        Navbar.style.display = "block";
    }else {
        Navbar.style.display = "none";
    }
}