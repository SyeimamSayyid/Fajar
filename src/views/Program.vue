<template>
  <div class="program-page">
    <!-- Navbar -->
    <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
      <div class="logo-container">
        <img src="../assets/Logo-Suaramu.Webp" alt="Suaramu Project Logo" class="logo-image">
        <div class="logo">Suaramu Project</div>
      </div>
      <div class="menu">
        <a href="#" @click.prevent="goToHome">Home</a>
        <a href="#" @click.prevent="goToHome('tentang')">Tentang</a>
        <a href="#" @click.prevent="goToHome('visi-misi')">Visi & Misi</a>
        <a href="#" class="active">Program</a>
        <a href="#" @click.prevent="goToHome('nilai')">Nilai</a>
        <a href="#" @click.prevent="goToHome('profil')">Profil</a>
        <button class="contact-btn" @click="scrollToForm">Daftar Sekarang</button>
      </div>
      <button class="mobile-menu-btn" @click="toggleMobileMenu">
        <span class="menu-icon" :class="{ 'menu-icon-open': mobileMenuOpen }">☰</span>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <transition name="mobile-menu-slide">
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <a href="#" @click.prevent="closeMenuAndGoHome">Home</a>
        <a href="#" @click.prevent="closeMenuAndGoHome('tentang')">Tentang</a>
        <a href="#" @click.prevent="closeMenuAndGoHome('visi-misi')">Visi & Misi</a>
        <a href="#" class="active">Program</a>
        <a href="#" @click.prevent="closeMenuAndGoHome('nilai')">Nilai</a>
        <a href="#" @click.prevent="closeMenuAndGoHome('profil')">Profil</a>
        <button class="contact-btn" @click="closeMenuAndScrollToForm">Daftar Sekarang</button>
      </div>
    </transition>

    <!-- Hero Section -->
    <section class="program-hero">
      <div class="hero-content">
        <h1>Program <span class="highlight">Suaramu Project</span></h1>
        <p>Bergabunglah menjadi bagian dari gerakan perubahan untuk menciptakan lingkungan sekolah yang aman, nyaman, dan bebas dari kekerasan.</p>
      </div>
    </section>

    <!-- Program Details Section -->
    <section class="program-details">
      <div class="container">
        <h2 class="section-title">4 Program Unggulan</h2>
        <p class="section-subtitle">Pilar utama dalam menciptakan ekosistem sekolah yang aman</p>

        <div class="program-cards">
          <div class="prog-card" v-for="(prog, index) in programDetails" :key="index">
            <div class="prog-card-icon">{{ prog.icon }}</div>
            <h3>{{ prog.title }}</h3>
            <p>{{ prog.longDesc }}</p>
            <div class="prog-features">
              <span v-for="(feature, idx) in prog.features" :key="idx">✓ {{ feature }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery-section">
      <div class="container">
        <h2 class="section-title">Galeri Kegiatan</h2>
        <p class="section-subtitle">Dokumentasi program dan kegiatan Suaramu Project</p>
        
        <div class="gallery-grid">
          <div class="gallery-item" v-for="(img, index) in galleryImages" :key="index">
            <img :src="img.src" :alt="img.caption">
            <div class="gallery-overlay">
              <p>{{ img.caption }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Program Section -->
    <section class="about-program">
      <div class="container">
        <div class="about-grid">
          <div class="about-text">
            <h2>Tentang Program Ini</h2>
            <p><strong>Suaramu Project</strong> adalah inisiatif dari siswa, oleh siswa, dan untuk siswa yang bertujuan menciptakan ekosistem sekolah aman dan nyaman.</p>
            <p>Program ini didasari oleh Permendikdasmen No. 6 Tahun 2026 tentang akselerasi pembentukan karakter pembelajar Pancasila yang bebas dari 4 pilar isu strategis: <strong>perundungan, kekerasan, diskriminasi, dan tekanan psikologis</strong>.</p>
            <p>Melalui program ini, kami menyediakan wadah bagi siswa untuk bersuara, berpartisipasi, dan menjadi agen perubahan di lingkungan sekolah masing-masing.</p>
            <div class="stats">
              <div class="stat-item">
                <span class="stat-number">50+</span>
                <span class="stat-label">Sekolah Terlibat</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">1000+</span>
                <span class="stat-label">Siswa Terdaftar</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">24/7</span>
                <span class="stat-label">Dukungan</span>
              </div>
            </div>
          </div>
          <div class="about-image">
            <img src="../assets/Suaramu1.Webp" alt="Tentang Program">
          </div>
        </div>
      </div>
    </section>

    <!-- Registration Form Section -->
    <section id="form-daftar" class="form-section">
      <div class="container">
        <div class="form-container">
          <div class="form-header">
            <h2>✨ Daftar Menjadi Relawan ✨</h2>
            <p>Isi formulir di bawah ini untuk bergabung dengan gerakan #TEMANSMABersuara</p>
          </div>
          
          <form @submit.prevent="handleSubmit" class="registration-form">
            <div class="form-group">
              <label for="nama">Nama Lengkap</label>
              <input 
                type="text" 
                id="nama" 
                v-model="formData.nama" 
                placeholder="Masukkan nama lengkap Anda"
                required
              >
              <span class="input-icon">👤</span>
            </div>

            <div class="form-group">
              <label for="sekolah">Asal Sekolah</label>
              <input 
                type="text" 
                id="sekolah" 
                v-model="formData.sekolah" 
                placeholder="Nama sekolah Anda"
                required
              >
              <span class="input-icon">🏫</span>
            </div>

            <div class="form-group">
              <label for="usia">Usia</label>
              <input 
                type="number" 
                id="usia" 
                v-model="formData.usia" 
                placeholder="Usia Anda"
                min="12"
                max="25"
                required
              >
              <span class="input-icon">🎂</span>
            </div>

            <div class="form-group">
              <label for="alasan">Alasan Bergabung</label>
              <textarea 
                id="alasan" 
                v-model="formData.alasan" 
                placeholder="Mengapa Anda ingin bergabung dengan Suaramu Project?"
                rows="4"
                required
              ></textarea>
              <span class="input-icon">💬</span>
            </div>

            <button type="submit" class="submit-btn">Kirim Pendaftaran ✨</button>
          </form>

          <!-- Modal Popup -->
          <div v-if="showModal" class="modal-overlay" @click="closeModal">
            <div class="modal-content" @click.stop>
              <div class="modal-icon">🎉</div>
              <h3>Pendaftaran Diterima!</h3>
              <p>Terima kasih telah mendaftar sebagai relawan Suaramu Project.</p>
              <p class="modal-note"><strong>Catatan:</strong> Web ini hanyalah desain untuk presentasi. Tim kami akan menghubungi Anda jika program ini terealisasi.</p>
              <button class="modal-btn" @click="closeModal">Tutup</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-logo">
          <img src="../assets/Logo-Suaramu.Webp" alt="Logo">
          <span>Suaramu Project</span>
        </div>
        <div class="footer-links">
          <a href="#" @click.prevent="goToHome">Home</a>
          <a href="#" @click.prevent="goToHome('tentang')">Tentang</a>
          <a href="#" @click.prevent="goToHome('profil')">Profil</a>
        </div>
        <div class="footer-social">
          <span>#TEMANSMABersuara</span>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Suaramu Project - Inisiatif Pelajar untuk Sekolah Aman</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const mobileMenuOpen = ref(false)
const isScrolled = ref(false)
const showModal = ref(false)

const formData = ref({
  nama: '',
  sekolah: '',
  usia: '',
  alasan: ''
})

const programDetails = ref([
  {
    icon: '🛡️',
    title: 'Program Anti Perundungan',
    longDesc: 'Mengedukasi siswa tentang dampak perundungan dan menciptakan budaya saling menghormati di lingkungan sekolah.',
    features: ['Pelatihan Peer Counselor', 'Sistem Pelaporan Anonim', 'Kampanye #StopBullying']
  },
  {
    icon: '✋',
    title: 'Program Anti Kekerasan',
    longDesc: 'Mencegah segala bentuk kekerasan fisik, verbal, dan emosional melalui pendekatan preventif dan responsif.',
    features: ['Sosialisasi Anti Kekerasan', 'Pos Pengaduan Aman', 'Mediasi Konflik']
  },
  {
    icon: '⚖️',
    title: 'Program Anti Diskriminasi',
    longDesc: 'Menghapus diskriminasi berdasarkan suku, agama, ras, gender, dan latar belakang sosial di sekolah.',
    features: ['Kampanye Inklusi', 'Forum Dialog', 'Pelatihan Kesetaraan']
  },
  {
    icon: '💚',
    title: 'Program Dukungan Psikologis',
    longDesc: 'Memberikan dukungan mental dan psikologis bagi siswa yang mengalami tekanan, stres, atau kecemasan.',
    features: ['Konseling Sebaya', 'Mental Health Workshop', 'Ruang Curhat Aman']
  }
])

const galleryImages = ref([
  { src: '../assets/Sekolah.webp', caption: 'Sosialisasi Anti Perundungan' },
  { src: '../assets/Suaramu1.Webp', caption: 'Pelatihan Relawan' },
  { src: '../assets/Fajar1.webp', caption: 'Founder Suaramu Project' },
  { src: '../assets/Foto.Webp', caption: 'Inspirasi untuk Perubahan' }
])

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const goToHome = (sectionId = null) => {
  closeMenu()
  if (sectionId) {
    router.push({ path: '/', hash: `#${sectionId}` })
  } else {
    router.push('/')
  }
}

const closeMenuAndGoHome = (sectionId = null) => {
  closeMenu()
  goToHome(sectionId)
}

const scrollToForm = () => {
  closeMenu()
  const formElement = document.getElementById('form-daftar')
  if (formElement) {
    formElement.scrollIntoView({ behavior: 'smooth' })
  }
}

const closeMenuAndScrollToForm = () => {
  closeMenu()
  setTimeout(() => {
    scrollToForm()
  }, 300)
}

const handleSubmit = () => {
  // Validasi sederhana
  if (formData.value.nama && formData.value.sekolah && formData.value.usia && formData.value.alasan) {
    showModal.value = true
    // Reset form setelah submit
    formData.value = {
      nama: '',
      sekolah: '',
      usia: '',
      alasan: ''
    }
  }
}

const closeModal = () => {
  showModal.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.program-page {
  width: 100%;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #203864;
}

/* Navbar Styles (sama dengan home) */
.navbar {
  width: 100%;
  height: 90px;
  padding: 0 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  position: fixed;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.navbar-scrolled {
  height: 70px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-image {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.logo {
  font-size: 26px;
  font-weight: 800;
  background: linear-gradient(135deg, #0d5a7a 0%, #1f8aad 50%, #0d5a7a 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.15);
}

.menu {
  display: flex;
  gap: 28px;
  align-items: center;
}

.menu a {
  text-decoration: none;
  color: #203864;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
}

.menu a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #203864, #F2B705);
  transition: width 0.3s ease;
}

.menu a:hover::after,
.menu a.active::after {
  width: 100%;
}

.menu a.active {
  color: #F2B705;
}

.menu a:hover {
  color: #F2B705;
}

.contact-btn {
  background: linear-gradient(135deg, #203864, #F2B705);
  color: white;
  border: none;
  padding: 12px 26px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.contact-btn:hover {
  background: linear-gradient(135deg, #F2B705, #203864);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(242, 183, 5, 0.4);
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #203864;
}

.mobile-menu {
  position: fixed;
  top: 90px;
  right: 0;
  width: 100%;
  max-width: 300px;
  background: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 99;
  box-shadow: -4px 20px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 0 20px;
}

.mobile-menu a {
  text-decoration: none;
  color: #203864;
  font-weight: 600;
  padding: 12px;
  text-align: center;
  cursor: pointer;
}

.mobile-menu a.active {
  color: #F2B705;
  background: rgba(242, 183, 5, 0.1);
  border-radius: 10px;
}

.mobile-menu .contact-btn {
  width: 100%;
}

.mobile-menu-slide-enter-active,
.mobile-menu-slide-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-slide-enter-from,
.mobile-menu-slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Hero Section Program */
.program-hero {
  min-height: 60vh;
  background: linear-gradient(135deg, rgba(32, 56, 100, 0.9), rgba(242, 183, 5, 0.8)), url('../assets/Sekolah.webp');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  margin-top: 90px;
}

.hero-content h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.hero-content .highlight {
  color: #F2B705;
}

.hero-content p {
  font-size: 20px;
  max-width: 700px;
  margin: 0 auto;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Section Title */
.section-title {
  font-size: 36px;
  color: #203864;
  text-align: center;
  margin-bottom: 15px;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, #203864, #F2B705);
  border-radius: 2px;
}

.section-subtitle {
  text-align: center;
  color: #6b7280;
  margin-bottom: 50px;
  font-size: 18px;
}

/* Program Details Section */
.program-details {
  padding: 80px 0;
  background: #f8fafc;
}

.program-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.prog-card {
  background: white;
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.prog-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.prog-card-icon {
  font-size: 60px;
  margin-bottom: 20px;
}

.prog-card h3 {
  font-size: 22px;
  color: #203864;
  margin-bottom: 15px;
}

.prog-card p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 20px;
}

.prog-features {
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
}

.prog-features span {
  font-size: 14px;
  color: #203864;
}

/* Gallery Section */
.gallery-section {
  padding: 80px 0;
  background: white;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.gallery-item {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  height: 250px;
  cursor: pointer;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, rgba(32, 56, 100, 0.9), rgba(242, 183, 5, 0.85));
  padding: 15px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  text-align: center;
}

.gallery-overlay p {
  color: white;
  font-weight: 600;
}

.gallery-item:hover .gallery-overlay {
  transform: translateY(0);
}

/* About Program Section */
.about-program {
  padding: 80px 0;
  background: linear-gradient(135deg, #f0f4fa, #fff8e7);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.about-text h2 {
  font-size: 32px;
  color: #203864;
  margin-bottom: 20px;
}

.about-text p {
  color: #4b5563;
  line-height: 1.8;
  margin-bottom: 20px;
  font-size: 16px;
}

.stats {
  display: flex;
  gap: 30px;
  margin-top: 30px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 28px;
  font-weight: bold;
  background: linear-gradient(135deg, #203864, #F2B705);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.stat-label {
  font-size: 14px;
  color: #6b7280;
}

.about-image img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Form Section */
.form-section {
  padding: 80px 0;
  background: white;
}

.form-container {
  max-width: 600px;
  margin: 0 auto;
  background: #f8fafc;
  border-radius: 30px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.form-header {
  text-align: center;
  margin-bottom: 30px;
}

.form-header h2 {
  font-size: 28px;
  color: #203864;
  margin-bottom: 10px;
}

.form-header p {
  color: #6b7280;
}

.registration-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  position: relative;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #203864;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 15px 45px 15px 20px;
  border: 2px solid #e5e7eb;
  border-radius: 15px;
  font-size: 16px;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #F2B705;
  box-shadow: 0 0 0 3px rgba(242, 183, 5, 0.2);
}

.form-group .input-icon {
  position: absolute;
  right: 15px;
  bottom: 15px;
  font-size: 20px;
  opacity: 0.5;
}

.submit-btn {
  background: linear-gradient(135deg, #203864, #F2B705);
  color: white;
  border: none;
  padding: 16px;
  border-radius: 15px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(242, 183, 5, 0.4);
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 40px;
  border-radius: 30px;
  text-align: center;
  max-width: 400px;
  animation: modalPop 0.3s ease;
}

@keyframes modalPop {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.modal-icon {
  font-size: 60px;
  margin-bottom: 20px;
}

.modal-content h3 {
  font-size: 24px;
  color: #203864;
  margin-bottom: 15px;
}

.modal-content p {
  color: #6b7280;
  margin-bottom: 15px;
  line-height: 1.6;
}

.modal-note {
  font-size: 14px;
  background: #f0f4fa;
  padding: 12px;
  border-radius: 10px;
  margin: 15px 0;
}

.modal-btn {
  background: linear-gradient(135deg, #203864, #F2B705);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 10px;
}

.modal-btn:hover {
  transform: scale(1.05);
}

/* Footer */
.footer {
  background: #203864;
  color: white;
  padding: 40px 7% 20px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-logo img {
  width: 40px;
  height: 40px;
}

.footer-logo span {
  font-size: 20px;
  font-weight: bold;
}

.footer-links {
  display: flex;
  gap: 25px;
}

.footer-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #F2B705;
}

.footer-social span {
  font-size: 14px;
  color: #F2B705;
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  font-size: 14px;
  opacity: 0.7;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar {
    padding: 0 5%;
  }
  
  .menu {
    display: none;
  }
  
  .mobile-menu-btn {
    display: block;
  }
  
  .program-hero {
    margin-top: 90px;
  }
  
  .hero-content h1 {
    font-size: 32px;
  }
  
  .about-grid {
    grid-template-columns: 1fr;
  }
  
  .stats {
    justify-content: center;
  }
  
  .form-container {
    margin: 0 20px;
    padding: 30px 20px;
  }
  
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 28px;
  }
  
  .hero-content h1 {
    font-size: 24px;
  }
  
  .prog-card h3 {
    font-size: 18px;
  }
}
</style>