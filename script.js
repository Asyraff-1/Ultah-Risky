// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Inisialisasi Particles.js pada elemen dengan id "particles-js"
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": { "value": "#0ff" },
        "shape": {
          "type": "circle",
          "stroke": { "width": 0, "color": "#000" }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#0ff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 4,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": { "enable": true, "mode": "repulse" },
          "onclick": { "enable": true, "mode": "push" },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": { "opacity": 1 }
          },
          "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
          "repulse": { "distance": 100, "duration": 0.4 },
          "push": { "particles_nb": 4 },
          "remove": { "particles_nb": 2 }
        }
      },
      "retina_detect": true
    });
  
    // Simulasikan durasi preloader (misalnya 3 detik) sebelum menampilkan konten utama
    setTimeout(function () {
      // Sembunyikan preloader
      document.getElementById("preloader").style.display = "none";
  
      // Tambahkan kelas "loaded" ke body agar transisi CSS mengaktifkan animasi masuk konten
      document.body.classList.add("loaded");
  
      // Gunakan GSAP untuk melakukan animasi halus pada konten utama
      gsap.to(".container", { duration: 1, opacity: 1, y: 0, ease: "power2.out" });
    }, 3000);
  });
  