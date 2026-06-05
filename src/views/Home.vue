<template>
  <div class="page">
    <!-- Navbar -->
    <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
      <div class="logo-container">
           <div class="logo">Suaramu Project</div>
      </div>
      <div class="menu">
        <a href="#home" class="nav-link" @click="smoothScrollTo('home')">Home</a>
        <a href="#tentang" class="nav-link" @click="smoothScrollTo('tentang')">Tentang</a>
        <a href="#visi-misi" class="nav-link" @click="smoothScrollTo('visi-misi')">Visi & Misi</a>
        <a href="#program" class="nav-link" @click="smoothScrollTo('program')">Kerangka</a>
        <a href="#nilai" class="nav-link" @click="smoothScrollTo('nilai')">Prinsip</a>
        <a href="#profil" class="nav-link" @click="smoothScrollTo('profil')">Profil</a>
        <button class="contact-btn" @click="showProgramSectionAndScroll">Dukung Sekarang</button>
      </div>
      <button class="mobile-menu-btn" @click="toggleMobileMenu">
        <span class="menu-icon" :class="{ 'menu-icon-open': mobileMenuOpen }">☰</span>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <transition name="mobile-menu-slide">
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <a href="#home" class="mobile-nav-link" @click="closeMobileMenuAndScroll('home')">Home</a>
        <a href="#tentang" class="mobile-nav-link" @click="closeMobileMenuAndScroll('tentang')">Tentang</a>
        <a href="#visi-misi" class="mobile-nav-link" @click="closeMobileMenuAndScroll('visi-misi')">Visi & Misi</a>
        <a href="#program" class="mobile-nav-link" @click="closeMobileMenuAndScroll('program')">Program</a>
        <a href="#nilai" class="mobile-nav-link" @click="closeMobileMenuAndScroll('nilai')">Nilai</a>
        <a href="#profil" class="mobile-nav-link" @click="closeMobileMenuAndScroll('profil')">Profil</a>
        <button class="contact-btn" @click="closeMobileMenuAndShowProgram">Dukung Sekarang</button>
      </div>
    </transition>

    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="hero-content" v-motion :initial="{ opacity: 0, y: 40 }" :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }">
        <div class="hashtag">#TEMANSMABersuara</div>
        <h1>Suaramu Project</h1>
        <p>Inisiatif dari siswa, oleh siswa, dan untuk siswa dalam menciptakan ekosistem sekolah yang aman, nyaman, dan bebas dari kekerasan.</p>
        <button class="cta-button" @click="showProgramSectionAndScroll">Mulai Gerakan Positif</button>
      </div>
    </section>

    <!-- About Section -->
    <section id="tentang" class="section two-column">
      <div class="text" v-motion :initial="{ opacity: 0, x: -60 }" :visible-once="{ opacity: 1, x: 0, transition: { duration: 700 } }">
        <h2>Tentang Suaramu Project</h2>
        <p>suaramu.project adalah wadah inisiatif dari siswa, oleh siswa, dan untuk siswa guna mendukung akselerasi Permendikdasmen No. 6 Tahun 2026 dalam menciptakan ekosistem karakter pembelajar Pancasila yang aman, nyaman, dan bebas dari kekerasan melalui penanggulangan 4 pilar isu strategis secara terintegrasi: <strong>perundungan, kekerasan, diskriminasi, tekanan psikologis</strong>.</p>
        <div class="tagline">#TEMANSMABersuara</div>
        <div class="project-tag">#Suaramu Project</div>
      </div>
      <div class="image-card" v-motion :initial="{ opacity: 0, x: 60 }" :visible-once="{ opacity: 1, x: 0, transition: { duration: 700 } }">
        <img src="../assets/Gambar1.jpeg" alt="Suaramu Project" class="about-image">
      </div>
    </section>

    <!-- ARTICLE SECTION - 3 CARDS dengan Gambar -->
    <section class="article-section">
      <div class="container-article">
        <div class="article-header" v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }">
          <h2>📰 Mengapa Suaramu Project Sangat Penting?</h2>
          <p>Berdasarkan pemberitaan nasional, Indonesia menghadapi darurat perundungan di berbagai satuan pendidikan</p>
        </div>

        <div class="article-cards">
          <!-- Card 1 - Kasus Viral 2025 -->
          <div class="article-card" v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 0 } }">
            <div class="card-image">
              <img src="../assets/Perundungan.jpeg" alt="Kasus Bullying Mengerikan">
              <div class="card-category">Kasus Viral 2025 | Bullying Mengerikan</div>
            </div>
            <div class="card-content">
              <h3>Rentetan Kasus Bullying Mengerikan di Sekolah</h3>
              <p class="card-date">Liputan6.com | 1 Oktober 2025</p>
              <p class="card-description">Sepanjang 2025, berbagai kasus mengerikan terjadi: siswa SMP Lampung tewas ditusuk teman, siswi Bandar Lampung difitnah hamil dan diejek 'miskin', serta santri Lombok meninggal akibat penganiayaan.</p>
              <div class="card-stats">
                <span>🗡️ Tewas Ditusuk</span>
                <span>📢 Difitnah & Diejek</span>
                <span>⚰️ Santri Meninggal</span>
              </div>
              <a href="https://www.liputan6.com/regional/read/6172816/rentetan-kasus-bullying-mengerikan-di-sekolah-bukti-nyata-bahaya-di-depan-mata" target="_blank" class="read-more">Baca Selengkapnya →</a>
            </div>
          </div>

          <!-- Card 2 - Data & Statistik -->
          <div class="article-card" v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 } }">
            <div class="card-image">
              <img src="../assets/Lonjakan.jpeg" alt="Data Statistik Perundungan">
              <div class="card-category">Data & Statistik</div>
            </div>
            <div class="card-content">
              <h3>Indonesia Darurat Kasus Perundungan</h3>
              <p class="card-date">GoodStats.id | 23 Februari 2024</p>
              <p class="card-description">UNICEF: 40% bunuh diri dilatarbelakangi perundungan. FSGI: kasus meningkat dari 21 (2022) ke 30 (2023). SD dan SMP catatkan korban jiwa. Kemdikbudristek tertinggi kasus perundungan.</p>
              <div class="card-stats">
                <span>📊 40% Bunuh Diri</span>
                <span>📈 30 Kasus (2023)</span>
                <span>👦 Laki-laki Tertinggi</span>
              </div>
              <a href="https://goodstats.id/article/miris-indonesia-darurat-kasus-perundungan-satuan-pendidikan-di-bawah-kemdikbudristek-terbanyak-0gcyv" target="_blank" class="read-more">Baca Selengkapnya →</a>
            </div>
          </div>

          <!-- Card 3 - Edukasi & Solusi -->
          <div class="article-card" v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }">
            <div class="card-image">
              <img src="../assets/Bully.jpeg" alt="Penanganan Bullying">
              <div class="card-category">Edukasi & Solusi | Penanganan Bullying</div>
            </div>
            <div class="card-content">
              <h3>Mengapa Anak Membully? & Cara Menanganinya</h3>
              <p class="card-date">Liputan6.com | Riset & Pakar</p>
              <p class="card-description">Penyebab: kurang empati, lingkungan keluarga konflik, pengaruh teman sebaya, eksposur konten negatif. Solusi: pendidikan empati, kebijakan anti-bullying, dukungan psikologis, pelibatan orang tua.</p>
              <div class="card-stats">
                <span>🏠 Pengaruh Keluarga</span>
                <span>💡 Pendidikan Empati</span>
                <span>📋 Kebijakan Anti-Bullying</span>
              </div>
              <a href="https://www.liputan6.com/regional/read/6172816/rentetan-kasus-bullying-mengerikan-di-sekolah-bukti-nyata-bahaya-di-depan-mata" target="_blank" class="read-more">Baca Selengkapnya →</a>
            </div>
          </div>
        </div>

        <div class="article-quote" v-motion :initial="{ opacity: 0, scale: 0.95 }" :visible-once="{ opacity: 1, scale: 1, transition: { duration: 500, delay: 300 } }">
          <p>"Bullying atau perundungan merupakan masalah serius yang berdampak besar pada kesehatan mental dan emosional anak-anak. Diperlukan langkah nyata untuk memutus lingkaran setan aksi perundungan di sekolah."</p>
          <cite>— Liputan6.com, 2025</cite>
        </div>
      </div>
    </section>

    <!-- Vision & Mission Section -->
    <section id="visi-misi" class="section visi-misi">
      <div class="visi-misi-content">
        <h2 v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 700 } }">Visi & Misi</h2>
        <div class="visi-card" v-motion :initial="{ opacity: 0, x: -50 }" :visible-once="{ opacity: 1, x: 0, transition: { duration: 700, delay: 200 } }">
          <div class="visi-icon">🎯</div>
          <h3>Visi</h3>
          <p>Menjadi penggerak utama dalam membangun budaya sekolah yang aman dan nyaman, di mana setiap pelajar dapat tumbuh tanpa rasa takut dan didengarkan dengan penuh empati.</p>
        </div>
        <div class="misi-grid">
          <div class="misi-card" v-for="(misi, index) in misiList" :key="index" v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: 300 + (index * 100) } }">
            <div class="misi-number">{{ index + 1 }}</div>
            <div class="misi-title">{{ misi.title }}</div>
            <p>{{ misi.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Section - 4 Pillars -->
    <section id="program" class="section program">
      <div class="program-overlay"></div>
      <div class="program-content">
        <h2 v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0 }">4 Kerangka Pilar</h2>
        <p class="program-subtitle">Empat pilar utama dalam menciptakan lingkungan sekolah yang aman dan nyaman</p>
        <div class="cards">
          <div class="card" v-for="(item, index) in programs" :key="index">
            <div class="card-image"><img :src="item.image" :alt="item.title" class="pillar-image"></div>
            <div class="card-icon">{{ item.icon }}</div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section id="nilai" class="section nilai">
      <h2 v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0 }">2 Prinsip Utama</h2>
      <p class="nilai-subtitle" v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { delay: 100 } }">Dua prinsip fundamental yang dibangun dalam gerakan Suaramu Project</p>
      <div class="nilai-cards">
        <div class="nilai-card" v-for="(nilai, index) in nilaiList" :key="index" v-motion :initial="{ opacity: 0, scale: 0.8 }" :visible-once="{ opacity: 1, scale: 1, transition: { duration: 500, delay: index * 100 } }">
          <div class="nilai-card-icon">{{ nilai.icon }}</div>
          <h3>{{ nilai.title }}</h3>
          <p>{{ nilai.description }}</p>
          <div class="nilai-card-stats"><div class="stat"><span class="stat-number">{{ nilai.percentage }}%</span><span class="stat-label">Partisipasi</span></div></div>
        </div>
      </div>
      <div class="hashtag-banner"><span class="hashtag-text">#TEMANSMABersuara</span></div>
    </section>

    <!-- BUKU PANDUAN SECTION - Ruang Dialog Sehat -->
    <section class="buku-panduan-section">
      <div class="container-buku">
        <div class="buku-card" v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }">
          <div class="buku-image-wrapper">
            <img src="../assets/Buku_Panduan.jpeg" alt="Buku Panduan Ruang Dialog Sehat" class="buku-image">
          </div>
          <h2>📖 Buku Panduan</h2>
          <h3>"Ruang Dialog Sehat"</h3>
          <p class="buku-description">Panduan lengkap untuk menciptakan ruang dialog yang aman, nyaman, dan konstruktif dalam mencegah perundungan di lingkungan sekolah. Buku ini berisi strategi komunikasi efektif, teknik mediasi sebaya, dan cara membangun budaya dialog sehat antar siswa.</p>
          <div class="buku-features">
            <span>✅ 120+ Halaman</span>
            <span>✅ Ilustrasi Praktis</span>
            <span>✅ Studi Kasus Nyata</span>
            <span>✅ Tips Implementasi</span>
          </div>
          <button class="buku-btn" @click="alertBuku">📥 Unduh Buku Panduan →</button>
          <p class="buku-note">*E-book gratis untuk seluruh relawan Suaramu Project</p>
        </div>
      </div>
    </section>

    <!-- Creator Profile Section -->
    <section id="profil" class="section profil">
      <div class="profil-container">
        <h2 v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0 }"><span class="profil-icon">⭐</span> Profil Inovator</h2>
        <p class="profil-subtitle" v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { delay: 100 } }">Perkenalkan, inovator di balik gerakan "Suaramu Project" - seseorang dengan segudang prestasi dan dedikasi tinggi terhadap kepemimpinan serta pendidikan karakter</p>

        <div class="creator-single" v-motion :initial="{ opacity: 0, scale: 0.8, rotateY: -90 }" :visible-once="{ opacity: 1, scale: 1, rotateY: 0, transition: { duration: 800, delay: 200 } }">
          <div class="creator-image-large"><div class="creator-avatar-large"><img src="../assets/Foto.webp" alt="Muhammad Fajar Syam Ibrahim" class="avatar-image"></div></div>
          <div class="creator-info-large">
            <h3>Muhammad Fajar Syam Ibrahim</h3>
            <p class="creator-role-large">Founder & Inovator Utama | Ketua OSIS</p>
            <div class="creator-bio"><p>Penggagas Suaramu Project - Sebuah gerakan untuk menciptakan lingkungan sekolah yang aman dari perundungan, kekerasan, diskriminasi, dan tekanan psikologis. #TEMANSMABersuara</p></div>
            <div class="creator-details">
              <div class="detail-item"><span class="detail-icon">🎓</span><div class="detail-text"><strong>Pendidikan</strong><p>SDN Panaikang III → SMPN 08 Makassar → SMA Negeri 12 Makassar</p></div></div>
              <div class="detail-item"><span class="detail-icon">💡</span><div class="detail-text"><strong>Cita-cita & Prinsip Hidup</strong><p>Pejabat Eksekutif Negara | "Become designer and not just consumer it"</p></div></div>
              <div class="detail-item"><span class="detail-icon">🏆</span><div class="detail-text"><strong>Jabatan Organisasi</strong><p>Ketua OSIS SMAN 12 Makassar 2025/2026 | Ketua OSIS SMPN 8 Makassar 2023/2024</p></div></div>
            </div>
            <div class="creator-skills-large"><span class="skill-tag-large">#Inovator</span><span class="skill-tag-large">#TEMANSMABersuara</span><span class="skill-tag-large">#SuaramuProject</span><span class="skill-tag-large">#PendidikanKarakter</span></div>
          </div>
        </div>

        <div class="achievement-section" v-motion :initial="{ opacity: 0, y: 50 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: 400 } }">
          <h3>🏆 Pencapaian & Prestasi</h3>
          <div class="achievement-grid">
            <div class="achievement-card"><div class="achievement-icon">🎤</div><div class="achievement-text"><h4>Juara 1 Orasi</h4><p>DPD Partai Demokrat se-Sulawesi Selatan</p></div></div>
            <div class="achievement-card"><div class="achievement-icon">🎙️</div><div class="achievement-text"><h4>Juara 1 Orasi</h4><p>Semrada se-Sulawesi Selatan</p></div></div>
            <div class="achievement-card"><div class="achievement-icon">🇬🇧</div><div class="achievement-text"><h4>The 1st Runner Up</h4><p>BOB English Olympic 2025 Nasional</p></div></div>
            <div class="achievement-card"><div class="achievement-icon">🥇</div><div class="achievement-text"><h4>4 Medali Emas</h4><p>Olimpiade Puskasnas Nasional</p></div></div>
            <div class="achievement-card"><div class="achievement-icon">🥈</div><div class="achievement-text"><h4>2 Medali Perak</h4><p>Olimpiade Puskasnas Nasional</p></div></div>
            <div class="achievement-card"><div class="achievement-icon">🏅</div><div class="achievement-text"><h4>Juara 3 Orasi</h4><p>Porseni Pemuda KNPI Makassar</p></div></div>
            <div class="achievement-card"><div class="achievement-icon">📖</div><div class="achievement-text"><h4>Juara 2 Cipta Baca Puisi</h4><p>SMAN 12 Makassar</p></div></div>
            <div class="achievement-card"><div class="achievement-icon">⭐</div><div class="achievement-text"><h4>8 Siswa Terbaik</h4><p>SMPN 08 Makassar</p></div></div>
            <div class="achievement-card"><div class="achievement-icon">👥</div><div class="achievement-text"><h4>Peserta Terbaik LDK</h4><p>MPK-OSIS 2024</p></div></div>
            <div class="achievement-card"><div class="achievement-icon">🚀</div><div class="achievement-text"><h4>Peserta Terbaik Bina Forsisma</h4><p>2025</p></div></div>
          </div>
        </div>

        <div class="personal-vision" v-motion :initial="{ opacity: 0, scale: 0.9 }" :visible-once="{ opacity: 1, scale: 1, transition: { duration: 500, delay: 500 } }">
          <div class="vision-quote">💬</div>
          <p class="quote-text">"Become designer and not just consumer it"</p>
          <p class="quote-author">- Muhammad Fajar Syam Ibrahim</p>
        </div>

        <div class="profil-cta" v-motion :initial="{ opacity: 0, scale: 0.9 }" :visible-once="{ opacity: 1, scale: 1, transition: { duration: 500, delay: 600 } }">
          <p>✨ Mari dukung gerakan #TEMANSMABersuara untuk menciptakan lingkungan sekolah yang aman dan nyaman bagi semua! ✨</p>
          <button class="cta-button" @click="showProgramSectionAndScroll">Dukung Sekarang</button>
        </div>
      </div>
    </section>

    <!-- LOGO MITRA SECTION - CAROUSEL 12 SLIDE (GAMBAR) -->
    <section class="mitra-logo-section">
      <div class="container-mitra-logo">
        <h2 v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }">🤝 Mitra Kolaborasi</h2>
        <p v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 } }">12 Mitra resmi yang berkolaborasi dengan Suaramu Project</p>

        <!-- Carousel Slider -->
        <div class="mitra-slider-container">
          <div class="mitra-slider" :style="{ transform: `translateX(-${currentSlide}%)` }">
            <div class="mitra-slide" v-for="(mitra, index) in mitraList" :key="index">
              <div class="mitra-logo-card">
                <div class="mitra-logo-image">
                  <img :src="mitra.img" :alt="mitra.name" class="mitra-img">
                </div>
                <h4>{{ mitra.name }}</h4>
                <p>{{ mitra.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Tombol Navigasi -->
        <button class="slider-btn prev-btn" @click="prevSlide">❮</button>
        <button class="slider-btn next-btn" @click="nextSlide">❯</button>

        <!-- Dots Indicator -->
        <div class="slider-dots">
          <span v-for="(_, index) in Math.ceil(mitraList.length / 3)" :key="index" 
                class="dot" 
                :class="{ active: currentSlideIndex === index }"
                @click="goToSlide(index)"></span>
        </div>
      </div>
    </section>

    <!-- PROGRAM DETAIL SECTION (Awalnya Sembunyi) -->
    <transition name="slide-fade">
      <section v-if="showProgramSection" id="program-detail" class="program-detail-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">✨ Program Unggulan ✨</h2>
            <p class="section-subtitle">Program unggulan untuk menciptakan perubahan positif di lingkungan sekolah</p>
          </div>

          <div class="program-detail-card">
            <div class="program-detail-icon">🚀</div>
            <h3>Gerakan #TEMANSMABersuara</h3>
            <p class="program-description">Program unggulan Suaramu Project yang bertujuan menciptakan lingkungan sekolah aman dan nyaman melalui pemberdayaan siswa sebagai agen perubahan. Program ini mengajak seluruh siswa untuk berani bersuara melawan perundungan, kekerasan, diskriminasi, dan tekanan psikologis.</p>
            <p class="program-description">Melalui berbagai kegiatan seperti pelatihan peer counselor, kampanye kesadaran, dan sistem pelaporan anonim, program ini telah berhasil menjangkau puluhan sekolah dan ratusan siswa.</p>
            <div class="program-highlights">
              <div class="highlight-item"><span class="highlight-icon">🎯</span><span>Target: 1000+ Siswa</span></div>
              <div class="highlight-item"><span class="highlight-icon">📅</span><span>Durasi: 6 Bulan</span></div>
              <div class="highlight-item"><span class="highlight-icon">👥</span><span>50+ Relawan</span></div>
            </div>
          </div>

          <div class="gallery-section">
            <h3 class="gallery-title">📸 Galeri Kegiatan</h3>
            <div class="gallery-grid">
              <div class="gallery-item" v-for="(img, index) in galleryImages" :key="index">
                <img :src="img.src" :alt="img.caption">
                <div class="gallery-caption">{{ img.caption }}</div>
              </div>
            </div>
          </div>

          <div class="about-program-card">
            <div class="about-program-text">
              <h3>Tentang Program Ini</h3>
              <p><strong>Gerakan #TEMANSMABersuara</strong> adalah inisiatif dari Suaramu Project yang bertujuan menciptakan ekosistem sekolah yang aman, nyaman, dan bebas dari kekerasan.</p>
              <p>Program ini didasari oleh Permendikdasmen No. 6 Tahun 2026 tentang akselerasi pembentukan karakter pembelajar Pancasila yang bebas dari 4 pilar isu strategis.</p>
              <div class="stats">
                <div class="stat-item"><span class="stat-number">100+</span><span class="stat-label">Peserta Aktif</span></div>
                <div class="stat-item"><span class="stat-number">20+</span><span class="stat-label">Sekolah</span></div>
                <div class="stat-item"><span class="stat-number">100%</span><span class="stat-label">Gratis</span></div>
              </div>
            </div>
            <div class="about-program-image"><img src="../assets/Gambar1.jpeg" alt="Tentang Program"></div>
          </div>

          <div class="form-container" id="form-daftar">
            <div class="form-header">
              <h2>📝 Daftar Menjadi Relawan</h2>
              <p>Isi formulir di bawah ini untuk bergabung dengan gerakan #TEMANSMABersuara</p>
            </div>
            <form @submit.prevent="handleSubmit" class="registration-form">
              <div class="form-group"><label>Nama Lengkap</label><input type="text" v-model="formData.nama" placeholder="Masukkan nama lengkap Anda" required></div>
              <div class="form-group"><label>Asal Sekolah</label><input type="text" v-model="formData.sekolah" placeholder="Nama sekolah Anda" required></div>
              <div class="form-group"><label>Usia</label><input type="number" v-model="formData.usia" placeholder="Usia Anda" min="12" max="25" required></div>
              <div class="form-group"><label>Alasan Bergabung</label><textarea v-model="formData.alasan" placeholder="Mengapa Anda ingin bergabung?" rows="4" required></textarea></div>
              <button type="submit" class="submit-btn">Kirim Pendaftaran ✨</button>
            </form>
          </div>
        </div>
      </section>
    </transition>

    <FooterSection />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import FooterSection from '../components/FooterSection.vue'

// ✅ Import semua gambar assets
import imgSosialisasi from '../assets/Sosialisasi.jpeg'
import imgRelawan from '../assets/Relawan.jpeg'
import imgDiskusi from '../assets/Diskusi.jpeg'
import imgSuaramu1 from '../assets/Suaramu1.webp'

import logoMakassar from '../assets/Makassar.png'
import logoUnicef from '../assets/Unicef.webp'
import logoForum from '../assets/Forum.png'  // atau unicef.jpeg jika ada

const mobileMenuOpen = ref(false)
const isScrolled = ref(false)
const showProgramSection = ref(false)

const formData = ref({ nama: '', sekolah: '', usia: '', alasan: '' })

// ✅ Pakai variabel import untuk galeri
const galleryImages = ref([
  { src: imgSosialisasi, caption: 'Sosialisasi Anti Perundungan' },
  { src: imgRelawan, caption: 'Pelatihan Relawan' },
  { src: imgDiskusi, caption: 'Diskusi Program' },
  { src: imgSuaramu1, caption: 'Dokumentasi Kegiatan' }
])

// ✅ Data 2 Mitra saja
const mitraList = ref([
  { 
    img: logoMakassar, 
    name: 'Makassar Creative Hub', 
    desc: 'Makassar Creative Hub' 
  },
  { 
    img: logoUnicef, 
    name: 'UNICEF Indonesia', 
    desc: 'Mitra program pencegahan perundungan anak' 
  },
    { 
    img: logoForum, 
    name: 'FAN', 
    desc: 'Forum Anak Nasional Wadah Partisipasi Anak' 
  }
])
// Carousel state
const currentSlide = ref(0)
const currentSlideIndex = ref(0)
const totalSlides = computed(() => Math.ceil(mitraList.value.length / 3))
let autoSlideInterval = null

const nextSlide = () => {
  if (currentSlideIndex.value < totalSlides.value - 1) {
    currentSlideIndex.value++
    currentSlide.value = (currentSlideIndex.value * 100)
  } else {
    currentSlideIndex.value = 0
    currentSlide.value = 0
  }
  resetAutoSlide()
}

const prevSlide = () => {
  if (currentSlideIndex.value > 0) {
    currentSlideIndex.value--
    currentSlide.value = (currentSlideIndex.value * 100)
  } else {
    currentSlideIndex.value = totalSlides.value - 1
    currentSlide.value = ((totalSlides.value - 1) * 100)
  }
  resetAutoSlide()
}

const goToSlide = (index) => {
  currentSlideIndex.value = index
  currentSlide.value = (index * 100)
  resetAutoSlide()
}

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    nextSlide()
  }, 4000)
}

const resetAutoSlide = () => {
  clearInterval(autoSlideInterval)
  startAutoSlide()
}

const showProgramSectionAndScroll = () => {
  showProgramSection.value = true
  setTimeout(() => {
    const element = document.getElementById('program-detail')
    if (element) {
      const offset = 90
      const elementPosition = element.offsetTop - offset
      window.scrollTo({ top: elementPosition, behavior: 'smooth' })
    }
  }, 100)
  closeMobileMenu()
}

const smoothScrollTo = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 90
    const elementPosition = element.offsetTop - offset
    window.scrollTo({ top: elementPosition, behavior: 'smooth' })
  }
  closeMobileMenu()
}

const handleSubmit = () => {
  if (formData.value.nama && formData.value.sekolah && formData.value.usia && formData.value.alasan) {
    alert('Terima kasih telah mendaftar! ✨\n\nCatatan: Web ini hanyalah desain untuk presentasi.\nTim kami akan menghubungi Anda jika program ini terealisasi.\n\n#TEMANSMABersuara')
    formData.value = { nama: '', sekolah: '', usia: '', alasan: '' }
  } else {
    alert('Harap isi semua data dengan lengkap!')
  }
}

const alertBuku = () => {
  alert('📘 Buku Panduan "Ruang Dialog Sehat"\n\nCatatan: Web ini hanyalah desain untuk presentasi.\nBuku panduan akan tersedia saat program terealisasi.\n\n#TEMANSMABersuara')
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : ''
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const closeMobileMenuAndScroll = (sectionId) => {
  closeMobileMenu()
  setTimeout(() => smoothScrollTo(sectionId), 300)
}

const closeMobileMenuAndShowProgram = () => {
  closeMobileMenu()
  setTimeout(() => showProgramSectionAndScroll(), 300)
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  startAutoSlide()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
  }
})

const misiList = [
  { title: 'Pemberdayaan Internal (Empower)', desc: 'Menempa dan meningkatkan kapasitas kolektif relawan pelajar lintas sekolah menjadi Promotor 4 Pilar Isu BSAN yang menghidupkan budaya saling mendukung dan bertumbuh bersama di dalam tim.' },
  { title: 'Edukasi & Kampanye (Educate)', desc: 'Mengikis budaya perundungan dan gurauan beracun melalui gerakan #TemanSMABersuara, ruang dialog sebaya yang setara, serta edukasi masif mengenai batasan ruang aman di media sosial.' },
  { title: 'Sistem Perlindungan (Protect)', desc: 'Menyediakan wadah pengaduan digital yang 100% aman dan rahasia, sekaligus melakukan aksi nyata pemetaan titik buta (blind spot) sekolah demi mengadvokasi perbaikan fasilitas keamanan.' }
]

const programs = [
  { title: 'Perundungan', desc: 'Mengedukasi siswa agar tidak melakukan, mendukung, atau membiarkan tindakan perundungan.', icon: '🛡️', image: 'https://placehold.co/400x200/113D87/white?text=Anti+Perundungan' },
  { title: 'Kekerasan', desc: 'Mencegah segala bentuk kekerasan fisik, verbal, dan emosional serta menciptakan lingkungan yang damai.', icon: '✋', image: 'https://placehold.co/400x200/145DD8/white?text=Anti+Kekerasan' },
  { title: 'Diskriminasi', desc: 'Menghapus segala bentuk diskriminasi berdasarkan suku, agama, ras, gender, maupun latar belakang sosial.', icon: '⚖️', image: 'https://placehold.co/400x200/113D87/white?text=Anti+Diskriminasi' },
  { title: 'Tekanan Psikologis', desc: 'Memberikan dukungan mental dan psikologis bagi siswa yang mengalami tekanan, stres, atau kecemasan.', icon: '💚', image: 'https://placehold.co/400x200/145DD8/white?text=Dukungan+Psikologis' }
]

const nilaiList = [
  { icon: '🌱', title: 'Tumbuh Bersama', description: 'Menciptakan lingkungan di mana setiap siswa dapat berkembang, belajar, dan tumbuh bersama dalam suasana yang saling mendukung dan menghargai.', percentage: 95 },
  { icon: '👂', title: 'Didengarkan', description: 'Memastikan setiap suara siswa didengar, setiap keluhan ditanggapi, dan setiap aspirasi dihargai tanpa rasa takut.', percentage: 92 }
]
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

.page {
  width: 100%;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #113D87;
}

/* Navbar Styles */
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
  width: 240px;
  height: 100px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.logo-image:hover {
  transform: scale(1.05);
}

.logo {
  font-size: 26px;
  font-weight: 800;
  background: linear-gradient(135deg, #113D87 0%, #145DD8 50%, #113D87 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.menu {
  display: flex;
  gap: 28px;
  align-items: center;
}

.menu a {
  text-decoration: none;
  color: #113D87;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
}

.menu a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #113D87, #145DD8);
  transition: width 0.3s ease;
}

.menu a:hover::after {
  width: 100%;
}

.menu a:hover {
  color: #145DD8;
  transform: translateY(-2px);
}

.contact-btn,
.hero .cta-button,
.profil-cta .cta-button,
.submit-btn,
.card-btn,
.buku-btn {
  background: linear-gradient(135deg, #113D87, #145DD8);
  color: white;
  border: none;
  padding: 12px 26px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.contact-btn::before,
.hero .cta-button::before,
.profil-cta .cta-button::before,
.submit-btn::before,
.card-btn::before,
.buku-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.contact-btn:hover::before,
.hero .cta-button:hover::before,
.profil-cta .cta-button:hover::before,
.submit-btn:hover::before,
.card-btn:hover::before,
.buku-btn:hover::before {
  width: 300px;
  height: 300px;
}

.contact-btn:hover,
.hero .cta-button:hover,
.profil-cta .cta-button:hover,
.submit-btn:hover,
.card-btn:hover,
.buku-btn:hover {
  background: linear-gradient(135deg, #145DD8, #113D87);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(17, 61, 135, 0.4);
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #113D87;
  transition: transform 0.3s ease;
}

.mobile-menu-btn:hover {
  transform: scale(1.1);
}

.menu-icon {
  display: inline-block;
  transition: transform 0.3s ease;
}

.menu-icon-open {
  transform: rotate(90deg);
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

.mobile-nav-link {
  text-decoration: none;
  color: #113D87;
  font-weight: 600;
  padding: 12px;
  text-align: center;
  transition: all 0.3s ease;
}

.mobile-nav-link:hover {
  color: #145DD8;
  padding-left: 20px;
}

.mobile-menu .contact-btn {
  width: 100%;
}

/* Hero Section */
.hero {
  width: 100%;
  min-height: 100vh;
  padding-top: 90px;
  position: relative;
  background-image: url('../assets/Sekolah.webp');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(17, 61, 135, 0.85), rgba(20, 93, 216, 0.75));
  z-index: 1;
}

.hero-content {
  position: relative;
  max-width: 850px;
  padding: 30px;
  z-index: 2;
}

.hashtag {
  font-size: 20px;
  letter-spacing: 2px;
  margin-bottom: 20px;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.2);
  display: inline-block;
  padding: 8px 20px;
  border-radius: 50px;
  backdrop-filter: blur(5px);
}

.hero h1 {
  font-size: 58px;
  margin-bottom: 24px;
  font-weight: 800;
  animation: slideUp 0.8s ease;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero p {
  font-size: 21px;
  line-height: 1.8;
  margin-bottom: 30px;
  animation: slideUp 0.8s ease 0.2s both;
}

.hero .cta-button {
  animation: slideUp 0.8s ease 0.4s both;
}

/* About Section */
.section {
  padding: 100px 7%;
}

.two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.text h2 {
  font-size: 42px;
  color: #113D87;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
}

.text h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, #113D87, #145DD8);
  border-radius: 2px;
  animation: expandWidth 0.6s ease;
}

@keyframes expandWidth {
  from { width: 0; }
  to { width: 60px; }
}

.text p {
  font-size: 18px;
  line-height: 1.8;
  color: #4b5563;
  margin-bottom: 20px;
}

.tagline {
  font-size: 16px;
  color: #145DD8;
  font-weight: bold;
  letter-spacing: 1px;
  display: inline-block;
  margin-right: 15px;
}

.project-tag {
  font-size: 16px;
  color: #113D87;
  font-weight: bold;
  letter-spacing: 1px;
  display: inline-block;
  margin-top: 10px;
}

/* IMAGE CARD */
.image-card {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: #f0f4fa;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  transition: transform 0.5s ease;
}

/* Article Section */
.article-section {
  padding: 60px 7%;
  background: linear-gradient(135deg, #f8fafc, #eef2fa);
}

.container-article {
  max-width: 1200px;
  margin: 0 auto;
}

.article-header {
  text-align: center;
  margin-bottom: 50px;
}

.article-header h2 {
  font-size: 36px;
  color: #113D87;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
}

.article-header h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, #113D87, #145DD8);
  border-radius: 2px;
}

.article-header p {
  font-size: 18px;
  color: #6b7280;
  margin-top: 20px;
}

.article-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;
}

.article-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.article-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-image {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.article-card:hover .card-image img {
  transform: scale(1.05);
}

.card-category {
  position: absolute;
  top: 15px;
  left: 15px;
  background: #145DD8;
  color: white;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
}

.card-content {
  padding: 20px;
}

.card-content h3 {
  font-size: 18px;
  color: #113D87;
  margin-bottom: 8px;
  line-height: 1.4;
}

.card-date {
  font-size: 12px;
  color: #145DD8;
  margin-bottom: 12px;
  font-weight: 600;
}

.card-description {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 15px;
}

.card-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}

.card-stats span {
  background: #eef2fa;
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 11px;
  color: #113D87;
  font-weight: 500;
}

.read-more {
  display: inline-block;
  color: #145DD8;
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
}

.read-more:hover {
  color: #113D87;
  transform: translateX(5px);
}

.article-quote {
  background: linear-gradient(135deg, #113D87, #145DD8);
  border-radius: 20px;
  padding: 30px 40px;
  text-align: center;
  margin-top: 20px;
}

.article-quote p {
  color: white;
  font-size: 18px;
  line-height: 1.6;
  font-style: italic;
  margin-bottom: 15px;
}

.article-quote cite {
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  font-weight: 600;
}

/* Vision & Mission Section */
.visi-misi {
  position: relative;
  background-image: none;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  padding: 100px 7%;
}

.visi-misi::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(17, 61, 135, 0.92), rgba(20, 93, 216, 0.88));
  z-index: 1;
}

.visi-misi-content {
  position: relative;
  z-index: 2;
}

.visi-misi h2 {
  font-size: 42px;
  text-align: center;
  margin-bottom: 50px;
  position: relative;
  display: inline-block;
  width: 100%;
}

.visi-misi h2::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: white;
  border-radius: 2px;
}

.visi-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  padding: 40px;
  margin-bottom: 50px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.visi-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.visi-icon {
  font-size: 60px;
  margin-bottom: 20px;
}

.visi-card h3 {
  font-size: 32px;
  margin-bottom: 20px;
}

.visi-card p {
  font-size: 18px;
  line-height: 1.8;
}

.misi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.misi-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.misi-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.misi-card:hover::before {
  left: 100%;
}

.misi-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.2);
}

.misi-number {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #113D87, #145DD8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
}

.misi-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #145DD8;
}

.misi-card p {
  font-size: 14px;
  line-height: 1.6;
}

/* Program Section */
.program {
  position: relative;
  background-image: none;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 100px 7%;
}

.program-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 1;
}

.program-content {
  position: relative;
  z-index: 2;
}

.program h2 {
  font-size: 42px;
  color: #113D87;
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  width: 100%;
}

.program h2::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, #113D87, #145DD8);
  border-radius: 2px;
}

.program-subtitle {
  text-align: center;
  color: #6b7280;
  margin-bottom: 50px;
  font-size: 18px;
}

.cards {
  margin-top: 45px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-image {
  width: 100%;
  height: 160px;
  overflow: hidden;
}

.pillar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover .pillar-image {
  transform: scale(1.05);
}

.card-icon {
  font-size: 48px;
  margin: 20px 0 10px;
}

.card h3 {
  color: #113D87;
  margin-bottom: 15px;
  font-size: 20px;
  padding: 0 15px;
}

.card p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 20px;
  padding: 0 20px;
  font-size: 14px;
}

/* Values Section */
.nilai {
  text-align: center;
  background: linear-gradient(135deg, #eef2fa, #f8fafc);
  padding: 100px 7%;
}

.nilai h2 {
  font-size: 42px;
  color: #113D87;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
}

.nilai h2::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, #113D87, #145DD8);
  border-radius: 2px;
}

.nilai-subtitle {
  font-size: 18px;
  color: #4b5563;
  margin-bottom: 50px;
}

.nilai-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

.nilai-card {
  background: white;
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.nilai-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(135deg, #113D87, #145DD8);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nilai-card:hover::before {
  transform: scaleX(1);
}

.nilai-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.nilai-card-icon {
  font-size: 70px;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}

.nilai-card:hover .nilai-card-icon {
  transform: scale(1.1);
}

.nilai-card h3 {
  color: #113D87;
  font-size: 28px;
  margin-bottom: 15px;
}

.nilai-card p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 16px;
}

.nilai-card-stats {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
}

.stat-number {
  font-size: 32px;
  font-weight: bold;
  background: linear-gradient(135deg, #113D87, #145DD8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.stat-label {
  font-size: 14px;
  color: #9ca3af;
}

.hashtag-banner {
  margin-top: 50px;
  padding: 20px;
  background: linear-gradient(135deg, #113D87, #145DD8);
  border-radius: 50px;
  display: inline-block;
  width: auto;
  margin-left: auto;
  margin-right: auto;
}

.hashtag-text {
  color: white;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
}

/* BUKU PANDUAN SECTION */
.buku-panduan-section {
  padding: 80px 7%;
  background: linear-gradient(135deg, #e8edf5, #f0f4fa);
}

.container-buku {
  max-width: 900px;
  margin: 0 auto;
}

.buku-card {
  background: white;
  border-radius: 32px;
  padding: 50px 45px;
  text-align: center;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
}

.buku-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 35px 60px rgba(0, 0, 0, 0.15);
}

.buku-image-wrapper {
  margin-bottom: 25px;
}

.buku-image {
  width: 200px;
  height: auto;
  object-fit: contain;
  transition: all 0.3s ease;
}

.buku-card:hover .buku-image {
  transform: scale(1.03);
}

.buku-card h2 {
  font-size: 32px;
  color: #113D87;
  margin-bottom: 10px;
}

.buku-card h3 {
  font-size: 24px;
  color: #145DD8;
  margin-bottom: 20px;
}

.buku-description {
  font-size: 16px;
  color: #4b5563;
  line-height: 1.7;
  margin-bottom: 25px;
}

.buku-features {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.buku-features span {
  background: #eef2fa;
  padding: 8px 18px;
  border-radius: 30px;
  font-size: 13px;
  color: #113D87;
  font-weight: 500;
}

.buku-btn {
  margin-top: 10px;
}

.buku-note {
  font-size: 12px;
  color: #9ca3af;
  margin-top: 15px;
}

/* Creator Profile Section */
.profil {
  position: relative;
  background-image: url('../assets/Fajar1.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 100px 7%;
  color: white;
}

.profil::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(17, 61, 135, 0.85), rgba(20, 93, 216, 0.75));
  z-index: 1;
}

.profil-container {
  position: relative;
  z-index: 2;
  max-width: 1000px;
  margin: 0 auto;
}

.profil h2 {
  font-size: 42px;
  text-align: center;
  color: white;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.profil-icon {
  font-size: 50px;
  animation: bounce 2s ease infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.profil-subtitle {
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  font-size: 18px;
  margin-bottom: 50px;
}

.creator-single {
  background: white;
  border-radius: 40px;
  overflow: hidden;
  margin-bottom: 60px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.creator-single:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
}

.creator-image-large {
  background: linear-gradient(135deg, #113D87, #145DD8);
  padding: 50px 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.creator-avatar-large {
  width: 220px;
  height: 220px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  overflow: hidden;
}

.creator-single:hover .creator-avatar-large {
  transform: scale(1.05);
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.creator-info-large {
  padding: 40px;
}

.creator-info-large h3 {
  font-size: 32px;
  color: #113D87;
  margin-bottom: 10px;
}

.creator-role-large {
  color: #145DD8;
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.creator-bio {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 25px;
}

.creator-bio p {
  color: #555;
  line-height: 1.8;
  font-size: 16px;
}

.creator-details {
  display: grid;
  gap: 20px;
  margin-bottom: 25px;
}

.detail-item {
  display: flex;
  gap: 15px;
  align-items: flex-start;
}

.detail-icon {
  font-size: 28px;
}

.detail-text strong {
  display: block;
  color: #113D87;
  margin-bottom: 5px;
  font-size: 14px;
}

.detail-text p {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
}

.creator-skills-large {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

.skill-tag-large {
  background: linear-gradient(135deg, #113D87, #145DD8);
  color: white;
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.skill-tag-large:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(17, 61, 135, 0.4);
}

.achievement-section {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  padding: 40px;
  margin-bottom: 40px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.achievement-section h3 {
  font-size: 28px;
  color: white;
  margin-bottom: 30px;
  text-align: center;
}

.achievement-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.achievement-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.achievement-card:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(10px);
}

.achievement-icon {
  font-size: 40px;
}

.achievement-text h4 {
  color: white;
  font-size: 18px;
  margin-bottom: 5px;
}

.achievement-text p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}

.personal-vision {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  padding: 40px;
  margin-bottom: 40px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.vision-quote {
  font-size: 60px;
  margin-bottom: 20px;
}

.quote-text {
  color: white;
  font-size: 22px;
  line-height: 1.6;
  font-style: italic;
  margin-bottom: 20px;
}

.quote-author {
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  font-weight: 600;
}

.profil-cta {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 60px;
  padding: 30px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.profil-cta p {
  color: white;
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 600;
}

/* MITRA LOGO SECTION - CAROUSEL DENGAN GAMBAR */
.mitra-logo-section {
  padding: 80px 7%;
  background: linear-gradient(135deg, #f0f4fa, #e8edf5);
  position: relative;
  overflow: hidden;
}

.container-mitra-logo {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
}

.mitra-logo-section h2 {
  font-size: 36px;
  color: #113D87;
  margin-bottom: 15px;
}

.mitra-logo-section h2::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, #113D87, #145DD8);
  margin: 15px auto 0;
  border-radius: 2px;
}

.mitra-logo-section p {
  font-size: 16px;
  color: #6b7280;
  margin-bottom: 50px;
}

/* Slider Container */
.mitra-slider-container {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  margin: 0 40px;
}

.mitra-slider {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.mitra-slide {
  flex: 0 0 33.333%;
  min-width: 33.333%;
  padding: 20px;
  box-sizing: border-box;
}

/* Logo Card dengan Gambar */
.mitra-logo-card {
  background: white;
  border-radius: 24px;
  padding: 30px 20px;
  text-align: center;
  transition: all 0.4s ease;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  cursor: pointer;
}

.mitra-logo-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

/* Gambar Logo Mitra */
.mitra-logo-image {
  width: 100px;
  height: 100px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f4fa;
  border-radius: 20px;
  padding: 15px;
  transition: all 0.3s ease;
}

.mitra-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.mitra-logo-card:hover .mitra-img {
  transform: scale(1.05);
}

.mitra-logo-card h4 {
  font-size: 18px;
  color: #113D87;
  margin-bottom: 10px;
}

.mitra-logo-card p {
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 0;
}

/* Tombol Navigasi */
.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(135deg, #113D87, #145DD8);
  color: white;
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.slider-btn:hover {
  background: linear-gradient(135deg, #145DD8, #113D87);
  transform: translateY(-50%) scale(1.1);
}

.prev-btn {
  left: 0;
}

.next-btn {
  right: 0;
}

/* Dots Indicator */
.slider-dots {
  text-align: center;
  margin-top: 30px;
}

.dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 0 6px;
  background: #cbd5e1;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: linear-gradient(135deg, #113D87, #145DD8);
  width: 30px;
  border-radius: 10px;
}

.dot:hover {
  background: #145DD8;
  transform: scale(1.2);
}

/* Program Detail Section */
.slide-fade-enter-active {
  transition: all 0.6s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from {
  transform: translateY(30px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.program-detail-section {
  padding: 80px 7%;
  background: linear-gradient(135deg, #eef2fa, #f8fafc);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-title {
  font-size: 36px;
  color: #113D87;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, #113D87, #145DD8);
  border-radius: 2px;
}

.section-subtitle {
  text-align: center;
  color: #6b7280;
  font-size: 18px;
}

.program-detail-card {
  background: white;
  border-radius: 30px;
  padding: 40px;
  text-align: center;
  margin-bottom: 60px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.program-detail-icon {
  font-size: 80px;
  margin-bottom: 20px;
}

.program-detail-card h3 {
  font-size: 28px;
  color: #113D87;
  margin-bottom: 20px;
}

.program-description {
  color: #4b5563;
  line-height: 1.8;
  margin-bottom: 20px;
  text-align: left;
}

.program-highlights {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 30px;
  flex-wrap: wrap;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #eef2fa;
  padding: 10px 20px;
  border-radius: 50px;
}

.highlight-icon {
  font-size: 24px;
}

.gallery-section {
  margin-bottom: 60px;
}

.gallery-title {
  font-size: 28px;
  color: #113D87;
  text-align: center;
  margin-bottom: 30px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.gallery-item {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  height: 200px;
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

.gallery-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, rgba(17, 61, 135, 0.9), rgba(20, 93, 216, 0.85));
  color: white;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-caption {
  transform: translateY(0);
}

/* About Program Card */
.about-program-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  background: white;
  border-radius: 32px;
  padding: 45px;
  margin-bottom: 60px;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  align-items: center;
}

.about-program-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.12);
}

.about-program-text h3 {
  font-size: 32px;
  color: #113D87;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
}

.about-program-text h3::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, #113D87, #145DD8);
  border-radius: 2px;
}

.about-program-text p {
  color: #4b5563;
  line-height: 1.8;
  margin-bottom: 20px;
  font-size: 16px;
}

.stats {
  display: flex;
  gap: 35px;
  margin-top: 30px;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
  background: #f0f4fa;
  padding: 15px 25px;
  border-radius: 20px;
  transition: all 0.3s ease;
  min-width: 100px;
}

.stat-item:hover {
  background: linear-gradient(135deg, #113D87, #145DD8);
  transform: translateY(-3px);
}

.stat-item:hover .stat-number,
.stat-item:hover .stat-label {
  color: white;
  background: transparent;
  -webkit-background-clip: unset;
  background-clip: unset;
}

.stat-number {
  display: block;
  font-size: 32px;
  font-weight: 800;
  background: linear-gradient(135deg, #113D87, #145DD8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 14px;
  color: #6b7280;
  font-weight: 500;
}

.about-program-image {
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  background: linear-gradient(135deg, #e8edf5, #dce3ef);
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-program-image img {
  width: 100%;
  height: auto;
  max-height: 280px;
  object-fit: contain;
  transition: transform 0.4s ease;
}

.about-program-card:hover .about-program-image img {
  transform: scale(1.02);
}

/* Form Container */
.form-container {
  max-width: 600px;
  margin: 0 auto;
  background: white;
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
  color: #113D87;
  margin-bottom: 10px;
}

.registration-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-weight: 600;
  color: #113D87;
  font-size: 16px;
}

.form-group input,
.form-group textarea {
  padding: 14px 18px;
  border: 2px solid #e5e7eb;
  border-radius: 15px;
  font-size: 16px;
  font-family: inherit;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #145DD8;
  box-shadow: 0 0 0 3px rgba(20, 93, 216, 0.2);
}

.submit-btn {
  margin-top: 10px;
}

/* Responsive */
@media (max-width: 1200px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 968px) {
  .two-column {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .text {
    text-align: center;
  }
  
  .text h2::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .text h2 {
    display: block;
    text-align: center;
  }
  
  .image-card {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .creator-single {
    grid-template-columns: 1fr;
  }
  
  .creator-image-large {
    padding: 40px;
  }
  
  .creator-avatar-large {
    width: 180px;
    height: 180px;
  }
  
  .creator-info-large h3 {
    font-size: 28px;
  }
  
  .nilai-cards {
    grid-template-columns: 1fr;
  }
  
  .misi-grid {
    grid-template-columns: 1fr;
  }
  
  .article-cards {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .about-program-card {
    grid-template-columns: 1fr;
    gap: 35px;
    padding: 35px;
  }
  
  .about-program-text h3 {
    font-size: 28px;
  }
  
  .about-program-text h3::after {
    width: 50px;
  }
  
  .stats {
    justify-content: center;
  }
  
  .about-program-image img {
    max-height: 250px;
  }
  
  .mitra-slide {
    flex: 0 0 50%;
    min-width: 50%;
  }
  
  .mitra-slider-container {
    margin: 0 30px;
  }
}

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

  .hero h1 {
    font-size: 38px;
  }

  .hero p {
    font-size: 18px;
  }

  .two-column,
  .cards {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 60px 5%;
  }

  .text h2,
  .visi-misi h2,
  .program h2,
  .nilai h2,
  .profil h2 {
    font-size: 32px;
  }

  .image-card {
    max-width: 350px;
  }

  .visi-card {
    padding: 30px;
  }

  .visi-card h3 {
    font-size: 28px;
  }

  .achievement-grid {
    grid-template-columns: 1fr;
  }

  .profil-cta p {
    font-size: 16px;
  }
  
  .quote-text {
    font-size: 18px;
  }
  
  .hashtag-text {
    font-size: 18px;
  }
  
  .program-detail-section {
    padding: 60px 5%;
  }
  
  .section-title {
    font-size: 28px;
  }
  
  .program-detail-card {
    padding: 30px 20px;
  }
  
  .program-detail-card h3 {
    font-size: 24px;
  }
  
  .form-container {
    padding: 30px 20px;
  }
  
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .article-section {
    padding: 60px 5%;
  }
  
  .article-header h2 {
    font-size: 28px;
  }
  
  .article-header p {
    font-size: 16px;
  }
  
  .article-cards {
    grid-template-columns: 1fr;
  }
  
  .article-quote p {
    font-size: 16px;
  }
  
  .article-quote {
    padding: 25px 20px;
  }
  
  .buku-card {
    padding: 35px 25px;
  }
  
  .buku-image {
    width: 150px;
  }
  
  .buku-card h2 {
    font-size: 28px;
  }
  
  .buku-card h3 {
    font-size: 20px;
  }
  
  .about-program-card {
    padding: 30px 25px;
  }
  
  .about-program-text h3 {
    font-size: 24px;
  }
  
  .about-program-text p {
    font-size: 14px;
  }
  
  .stat-number {
    font-size: 28px;
  }
  
  .stat-label {
    font-size: 12px;
  }
  
  .stat-item {
    padding: 12px 20px;
    min-width: 80px;
  }
  
  .mitra-slide {
    flex: 0 0 100%;
    min-width: 100%;
  }
  
  .mitra-slider-container {
    margin: 0 20px;
  }
  
  .slider-btn {
    width: 35px;
    height: 35px;
    font-size: 16px;
  }
  
  .mitra-logo-card {
    padding: 20px 15px;
  }
  
  .mitra-logo-image {
    width: 70px;
    height: 70px;
    padding: 10px;
  }
  
  .mitra-logo-card h4 {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 28px;
  }

  .hero p {
    font-size: 16px;
  }

  .text h2,
  .visi-misi h2,
  .program h2,
  .nilai h2,
  .profil h2 {
    font-size: 28px;
  }

  .visi-card p,
  .misi-card p {
    font-size: 14px;
  }
  
  .creator-info-large h3 {
    font-size: 24px;
  }
  
  .quote-text {
    font-size: 16px;
  }
  
  .cards {
    grid-template-columns: 1fr;
  }
  
  .creator-avatar-large {
    width: 150px;
    height: 150px;
  }
  
  .logo {
    font-size: 20px;
  }
  
  .logo-image {
    width: 32px;
    height: 32px;
  }
  
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  
  .program-highlights {
    flex-direction: column;
    align-items: center;
  }
  
  .form-header h2 {
    font-size: 24px;
  }
  
  .article-header h2 {
    font-size: 24px;
  }
  
  .card-content h3 {
    font-size: 16px;
  }
  
  .article-quote p {
    font-size: 14px;
  }
  
  .buku-image {
    width: 120px;
  }
  
  .buku-features span {
    font-size: 11px;
    padding: 6px 12px;
  }
  
  .about-program-card {
    padding: 25px 20px;
  }
  
  .about-program-text h3 {
    font-size: 22px;
  }
  
  .stats {
    gap: 15px;
  }
  
  .stat-item {
    padding: 10px 15px;
    min-width: 70px;
  }
  
  .stat-number {
    font-size: 24px;
  }
  
  .stat-label {
    font-size: 11px;
  }
  
  .about-program-image img {
    max-height: 200px;
  }
  
  .mitra-logo-image {
    width: 60px;
    height: 60px;
    padding: 8px;
  }
  
  .slider-btn {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
  
  .dot {
    width: 8px;
    height: 8px;
  }
}
</style>