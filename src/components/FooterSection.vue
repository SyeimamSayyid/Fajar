<template>
  <footer id="footer" class="footer">
    <div class="footer-pattern">
      <div class="pattern-overlay"></div>
      <h2 class="quote-text">"Sekolah yang aman adalah tempat setiap siswa merasa dihargai dan didengarkan."</h2>
      <div class="hashtag-footer">#TEMANSMABersuara</div>
    </div>

    <div class="footer-content">
      <div class="footer-brand">
        <div class="brand-logo">
          <img src="../assets/Logo-Suaramu.webp" alt="Suaramu Project Logo" class="footer-logo-img">
          <h2>Suaramu Project</h2>
        </div>
        <p>
          Bersama menciptakan lingkungan belajar yang ramah, positif,
          bebas dari perundungan, kekerasan, diskriminasi, dan tekanan psikologis.
        </p>
      </div>

      <div class="footer-links">
        <h3>Menu</h3>
        <a href="#home">Beranda</a>
        <a href="#tentang">Tentang</a>
        <a href="#visi-misi">Visi & Misi</a>
        <a href="#program">Program</a>
        <a href="#nilai">Nilai</a>
        <a href="#profil">Profil Inovator</a>
      </div>

      <div class="footer-contact">
        <h3>Kontak & Lokasi</h3>
        <div class="contact-item">
          <span class="contact-icon">📍</span>
          <p>Jl. Moha Lasuloro No.57, Antang, Kec. Manggala,<br>Kota Makassar, Sulawesi Selatan 90234</p>
        </div>
        
        <div class="social-media">
          <h4>Ikuti Kami</h4>
          <ul class="social-icons">
            <!-- Instagram -->
            <li class="icon-content">
              <a href="https://www.instagram.com/suaramu.project?igsh=MWVrN2xhbDlpdHlieA==" aria-label="Instagram" data-social="instagram" target="_blank" rel="noopener noreferrer">
                <div class="filled"></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                </svg>
              </a>
              <div class="tooltip">Instagram</div>
            </li>

            <!-- WhatsApp -->
            <li class="icon-content">
              <a href="https://wa.me/6288884759447" aria-label="WhatsApp" data-social="whatsapp" target="_blank" rel="noopener noreferrer">
                <div class="filled"></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 2.25c-5.38 0-9.75 4.37-9.75 9.75 0 1.72.45 3.34 1.24 4.76L2.25 21.75l5.15-1.28c1.39.76 2.97 1.18 4.63 1.18 5.38 0 9.75-4.37 9.75-9.75 0-5.38-4.37-9.75-9.75-9.75zm0 1.5c4.55 0 8.25 3.7 8.25 8.25 0 4.55-3.7 8.25-8.25 8.25-1.48 0-2.88-.39-4.11-1.07l-.29-.17-3.08.77.82-3.01-.19-.3c-.75-1.25-1.17-2.7-1.17-4.22 0-4.55 3.7-8.25 8.25-8.25zm-3.94 4.75c-.2 0-.5.05-.76.25-.23.17-.87.85-.87 2.07 0 1.23.88 2.42 1.01 2.59.14.17 1.74 2.68 4.21 3.76.59.26 1.05.41 1.41.53.59.19 1.13.16 1.55.1.48-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.05-.11-.2-.17-.42-.3-.22-.13-1.31-.65-1.51-.72-.2-.07-.35-.11-.5.11-.15.22-.58.72-.71.87-.13.15-.26.17-.48.05-.22-.12-.93-.34-1.77-1.09-.65-.59-1.09-1.31-1.22-1.53-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.4.11-.13.15-.22.22-.38.07-.16.03-.3-.02-.42-.05-.12-.5-1.21-.69-1.66-.18-.44-.36-.38-.5-.38-.13 0-.28-.02-.43-.02-.15 0-.39.06-.59.28-.2.22-.76.75-.76 1.82 0 1.08.78 2.12.88 2.27.1.15 1.52 2.33 3.68 3.27.51.22.91.35 1.23.45.52.16.99.14 1.36.08.42-.06 1.31-.53 1.49-1.05.18-.52.18-.96.13-1.05-.05-.09-.19-.15-.41-.28z"/>
                </svg>
              </a>
              <div class="tooltip">WhatsApp</div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2026 Suaramu Project | #TEMANSMABersuara</p>
      <p class="tagline-footer">Inisiatif dari siswa, oleh siswa, dan untuk siswa</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Footer Pattern Section dengan warna baru */
.footer-pattern {
  position: relative;
  min-height: 320px;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #203864;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(242, 183, 5, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(242, 183, 5, 0.06) 0%, transparent 50%),
    repeating-linear-gradient(45deg, rgba(242, 183, 5, 0.03) 0px, rgba(242, 183, 5, 0.03) 2px, transparent 2px, transparent 8px);
  overflow: hidden;
}

.pattern-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(32, 56, 100, 0.9), rgba(242, 183, 5, 0.15));
  z-index: 1;
}

.footer-pattern .quote-text {
  position: relative;
  z-index: 2;
  max-width: 900px;
  font-size: 36px;
  line-height: 1.4;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
  margin-bottom: 20px;
  font-weight: 700;
}

.hashtag-footer {
  position: relative;
  z-index: 2;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  display: inline-block;
  padding: 8px 24px;
  border-radius: 50px;
  margin-top: 10px;
}

/* Footer Content dengan warna baru */
.footer-content {
  background: linear-gradient(135deg, #203864 0%, #1a2d55 100%);
  padding: 60px 8%;
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr;
  gap: 50px;
}

/* Brand Section */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
}

.footer-logo-img {
  width: 50px;
  height: 50px;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.footer-brand h2 {
  font-size: 28px;
  font-weight: bold;
  background: linear-gradient(135deg, #F2B705, #FFD700);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;
}

.footer-brand p {
  max-width: 480px;
  line-height: 1.8;
  opacity: 0.9;
  font-size: 15px;
}

/* Links Section */
.footer-links h3,
.footer-contact h3 {
  font-size: 20px;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  color: #F2B705;
}

.footer-links h3::after,
.footer-contact h3::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 3px;
  background: #F2B705;
  border-radius: 2px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links a {
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  opacity: 0.85;
  font-size: 14px;
}

.footer-links a:hover {
  color: #F2B705;
  padding-left: 8px;
  opacity: 1;
}

/* Contact Section */
.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.contact-icon {
  font-size: 20px;
  min-width: 28px;
  color: #F2B705;
}

.contact-item p {
  margin: 0;
  line-height: 1.6;
  font-size: 14px;
  opacity: 0.9;
}

/* Social Media Section dengan Icon SVG */
.social-media {
  margin-top: 10px;
}

.social-media h4 {
  font-size: 16px;
  margin-bottom: 15px;
  color: #F2B705;
}

.social-icons {
  display: flex;
  flex-direction: row;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.icon-content {
  position: relative;
}

.icon-content a {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
  text-decoration: none;
}

.icon-content a svg {
  position: relative;
  width: 24px;
  height: 24px;
  fill: white;
  z-index: 2;
  transition: fill 0.3s ease;
}

.icon-content a .filled {
  position: absolute;
  top: auto;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: currentColor;
  transition: height 0.3s ease;
  z-index: 1;
}

.icon-content a[data-social="instagram"] {
  color: #E4405F;
}
.icon-content a[data-social="whatsapp"] {
  color: #25D366;
}

.icon-content a:hover {
  transform: translateY(-5px);
}

.icon-content a:hover svg {
  fill: white;
}

.icon-content a:hover .filled {
  height: 100%;
}

.tooltip {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: #203864;
  color: #F2B705;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  pointer-events: none;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.tooltip::before {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #203864;
}

.icon-content:hover .tooltip {
  opacity: 1;
  visibility: visible;
  top: -45px;
}

/* Footer Bottom */
.footer-bottom {
  background: #0f1e3a;
  text-align: center;
  padding: 20px;
  font-size: 13px;
  border-top: 1px solid rgba(242, 183, 5, 0.2);
}

.footer-bottom p {
  margin: 5px 0;
}

.tagline-footer {
  font-size: 11px;
  opacity: 0.7;
  letter-spacing: 1px;
}

/* Animasi */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.footer-pattern .quote-text {
  animation: fadeInUp 0.8s ease;
}

.hashtag-footer {
  animation: fadeInUp 0.8s ease 0.2s both;
}

/* Responsive */
@media (max-width: 968px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .footer-brand {
    align-items: center;
    text-align: center;
  }

  .brand-logo {
    justify-content: center;
  }

  .footer-brand p {
    margin: 0 auto;
  }

  .footer-links h3::after,
  .footer-contact h3::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .footer-links h3,
  .footer-contact h3 {
    display: block;
    text-align: center;
  }

  .footer-links a {
    text-align: center;
  }

  .footer-links a:hover {
    padding-left: 0;
    transform: scale(1.05);
  }

  .contact-item {
    justify-content: center;
  }

  .social-icons {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .footer-pattern {
    min-height: 280px;
    padding: 40px 20px;
  }

  .footer-pattern .quote-text {
    font-size: 24px;
  }

  .hashtag-footer {
    font-size: 16px;
    padding: 6px 18px;
  }

  .footer-content {
    padding: 40px 6%;
  }

  .footer-brand h2 {
    font-size: 24px;
  }

  .footer-logo-img {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .footer-pattern .quote-text {
    font-size: 18px;
  }

  .hashtag-footer {
    font-size: 14px;
  }

  .footer-brand h2 {
    font-size: 20px;
  }

  .footer-brand p {
    font-size: 13px;
  }

  .contact-item p {
    font-size: 12px;
  }

  .icon-content a {
    width: 42px;
    height: 42px;
  }

  .icon-content a svg {
    width: 20px;
    height: 20px;
  }

  .tooltip {
    font-size: 10px;
    padding: 4px 10px;
  }
}
</style>