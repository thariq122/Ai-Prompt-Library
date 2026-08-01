import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [toastVisible, setToastVisible] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(null);

  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const storyRef = useRef(null);
  const faqRef = useRef(null);
  const newsletterRef = useRef(null);

  useEffect(() => {
    // GSAP Hero Animation Timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      '.hero-badge',
      { opacity: 0, y: -20, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6 }
    )
      .fromTo(
        '.hero-title',
        { opacity: 0, y: 40, rotationX: 15 },
        { opacity: 1, y: 0, rotationX: 0, duration: 0.8 },
        '-=0.3'
      )
      .fromTo(
        '.hero-desc',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        '.hero-cta',
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'back.out(1.7)' },
        '-=0.3'
      )
      .fromTo(
        '.hero-card-preview',
        { opacity: 0, x: 80, rotation: 8, scale: 0.9 },
        { opacity: 1, x: 0, rotation: 0, scale: 1, duration: 0.9 },
        '-=0.6'
      );

    // Cards Stagger Animation on Scroll with 3D perspective tilt
    const cards = cardsRef.current?.querySelectorAll('.group');
    if (cards) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 80, rotationY: -15, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Story Stats Stagger with scale spring effect
    const stats = storyRef.current?.querySelectorAll('.stat-box');
    if (stats) {
      gsap.fromTo(
        stats,
        { opacity: 0, y: 40, scale: 0.5 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // FAQ items scroll reveal
    const faqItems = faqRef.current?.querySelectorAll('.accordion-item');
    if (faqItems) {
      gsap.fromTo(
        faqItems,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: faqRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Newsletter section scale up animation
    if (newsletterRef.current) {
      gsap.fromTo(
        newsletterRef.current,
        { opacity: 0, scale: 0.9, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: newsletterRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Floating decorative badge animation
    gsap.to('.floating-badge', {
      y: -12,
      rotation: 15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const copyPrompt = (e) => {
    const button = e.currentTarget;
    gsap.to(button, { scale: 0.85, duration: 0.1, yoyo: true, repeat: 1 });
    setToastVisible(true);

    setTimeout(() => {
      setToastVisible(false);
    }, 2000);
  };

  const toggleAccordion = (index) => {
    setAccordionOpen(accordionOpen === index ? null : index);
  };

  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary-container min-h-screen flex flex-col justify-between overflow-x-hidden">
      {/* Toast Notification */}
      <div
        className={`fixed top-8 left-1/2 -translate-x-1/2 z-[100] bg-secondary-container border-[3px] border-black px-lg py-sm rounded-full shadow-brutal flex items-center gap-sm transition-all ${
          toastVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
        id="copy-toast"
      >
        <span className="material-symbols-outlined text-on-secondary-container">
          check_circle
        </span>
        <span className="font-label-sm text-label-sm text-on-secondary-container">
          Prompt Berhasil Disalin!
        </span>
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-[140px] pb-xl px-margin-mobile md:px-margin-desktop overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-xl items-center">
          <div className="relative z-10">
            <div className="hero-badge inline-block bg-badge-cyan border-[2px] border-black rounded-full px-md py-xs font-label-sm text-label-sm shadow-brutal-sm mb-md">
              SELAMAT DATANG DI PROMPT VAULT!
            </div>
            <h1 className="hero-title font-h1 text-h1 mb-lg leading-[1.05] font-black">
              Akses <span className="text-primary italic">Prompt AI</span> Terbaik
            </h1>
            <p className="hero-desc text-body-md text-on-surface-variant max-w-lg mb-xl text-lg">
              Marketplace premium untuk rekayasa prompt kelas dunia. Temukan,
              beli, dan jual prompt berkualitas tinggi untuk LLM, Penjana
              Gambar, dan model spesialis.
            </p>
            <div className="hero-cta flex flex-wrap gap-md">
              <Link
                to="/submit"
                className="bg-secondary-fixed text-on-secondary-fixed px-xl py-md rounded-full border-[3px] border-black shadow-brutal font-h2 text-[1.25rem] hover-lift active-press inline-block"
              >
                Setorkan Prompt
              </Link>
            </div>
          </div>
          <div className="hero-card-preview relative lg:h-[600px] flex items-center justify-center">
            {/* Decorative Element */}
            <div className="absolute inset-0 bg-accent-purple/10 rounded-[40px] border-[3px] border-dashed border-black/20 -rotate-3"></div>
            <div className="bg-surface p-lg border-[3px] border-black rounded-xl shadow-brutal-lg w-full max-w-[500px] relative">
              <div className="flex items-center gap-sm mb-md">
                <div className="w-3 h-3 rounded-full bg-error border border-black"></div>
                <div className="w-3 h-3 rounded-full bg-badge-orange border border-black"></div>
                <div className="w-3 h-3 rounded-full bg-secondary-fixed border border-black"></div>
              </div>
              <div className="bg-surface-container rounded-lg p-md mb-md border-[2px] border-black font-code-sm text-code-sm">
                <p className="text-on-primary-fixed-variant">
                  &quot;Bertindaklah sebagai arsitek ahli di masa depan solarpunk.
                  Deskripsikan kota hutan vertikal hanya menggunakan metafora
                  sensorik...&quot;
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-xs">
                  <span className="material-symbols-outlined text-badge-orange filled-icon">
                    star
                  </span>
                  <span className="font-label-sm text-label-sm">
                    4.9 (1.2rb)
                  </span>
                </div>
                <span className="font-h2 text-[1.5rem]">Rp140.000</span>
              </div>
            </div>
            {/* Floaties */}
            <div className="floating-badge absolute -top-4 -right-4 bg-badge-orange border-[2px] border-black px-md py-sm rounded-xl shadow-brutal hidden md:block">
              <span className="font-label-sm">Terlaris!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Marquee */}
      <div className="bg-tertiary-fixed border-y-[3px] border-black py-md overflow-hidden relative">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          <span className="font-h2 text-h2 uppercase mx-xl flex items-center gap-md">
            Prompt Baru Setiap Hari{' '}
            <span className="material-symbols-outlined text-[3rem]">
              auto_awesome
            </span>
          </span>
          <span className="font-h2 text-h2 uppercase mx-xl flex items-center gap-md">
            Optimasi GPT-4{' '}
            <span className="material-symbols-outlined text-[3rem]">
              psychology
            </span>
          </span>
          <span className="font-h2 text-h2 uppercase mx-xl flex items-center gap-md">
            Siap untuk Midjourney 6.0{' '}
            <span className="material-symbols-outlined text-[3rem]">
              palette
            </span>
          </span>
          <span className="font-h2 text-h2 uppercase mx-xl flex items-center gap-md">
            Terverifikasi Claude 3 Opus{' '}
            <span className="material-symbols-outlined text-[3rem]">
              shield
            </span>
          </span>
          {/* Duplicated for seamless loop */}
          <span className="font-h2 text-h2 uppercase mx-xl flex items-center gap-md">
            Prompt Baru Setiap Hari{' '}
            <span className="material-symbols-outlined text-[3rem]">
              auto_awesome
            </span>
          </span>
          <span className="font-h2 text-h2 uppercase mx-xl flex items-center gap-md">
            Optimasi GPT-4{' '}
            <span className="material-symbols-outlined text-[3rem]">
              psychology
            </span>
          </span>
          <span className="font-h2 text-h2 uppercase mx-xl flex items-center gap-md">
            Siap untuk Midjourney 6.0{' '}
            <span className="material-symbols-outlined text-[3rem]">
              palette
            </span>
          </span>
          <span className="font-h2 text-h2 uppercase mx-xl flex items-center gap-md">
            Terverifikasi Claude 3 Opus{' '}
            <span className="material-symbols-outlined text-[3rem]">
              shield
            </span>
          </span>
        </div>
      </div>

      {/* Filters & Search */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-lg justify-between items-center mb-2xl">
          <div className="flex flex-wrap gap-sm justify-center md:justify-start">
            <button className="bg-on-background text-surface px-md py-sm rounded-full font-label-sm border-[2px] border-black shadow-brutal-sm cursor-pointer hover:scale-105 transition-transform">
              Semua Model
            </button>
            <button className="bg-surface border-[2px] border-black px-md py-sm rounded-full font-label-sm hover:bg-primary-container transition-all cursor-pointer hover:scale-105">
              ChatGPT-4
            </button>
            <button className="bg-surface border-[2px] border-black px-md py-sm rounded-full font-label-sm hover:bg-badge-cyan transition-all cursor-pointer hover:scale-105">
              Midjourney
            </button>
            <button className="bg-surface border-[2px] border-black px-md py-sm rounded-full font-label-sm hover:bg-badge-orange transition-all cursor-pointer hover:scale-105">
              DALL-E 3
            </button>
            <button className="bg-surface border-[2px] border-black px-md py-sm rounded-full font-label-sm hover:bg-secondary-fixed transition-all cursor-pointer hover:scale-105">
              Claude 3
            </button>
          </div>
          <div className="relative w-full max-w-md">
            <input
              className="w-full bg-surface border-[3px] border-black rounded-full px-xl py-md shadow-brutal focus:ring-0 focus:outline-none transition-all focus:translate-x-1"
              placeholder="Cari prompt, model, penulis..."
              type="text"
            />
            <span className="material-symbols-outlined absolute right-lg top-1/2 -translate-y-1/2 text-on-surface-variant">
              search
            </span>
          </div>
        </div>

        {/* Prompt Card Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
          {/* Card 1 */}
          <div className="group relative bg-surface border-[3px] border-black rounded-[20px] p-lg shadow-brutal hover-lift transition-all duration-300">
            <div className="absolute -top-4 -left-2 bg-accent-purple text-surface px-md py-xs rounded-full border-[2px] border-black font-label-sm rotate-[-5deg] z-10 animate-float-badge">
              Unggulan!
            </div>
            <div className="flex justify-between items-start mb-md">
              <span className="bg-badge-cyan border-[2px] border-black px-sm py-xs rounded-lg font-label-sm text-[12px] shadow-brutal-sm">
                MIDJOURNEY
              </span>
              <button className="text-on-surface-variant hover:text-primary cursor-pointer transition-transform hover:scale-125">
                <span className="material-symbols-outlined">favorite</span>
              </button>
            </div>
            <h3 className="font-h2 text-[1.25rem] mb-sm">
              Neo-Tokyo Cinematic Stills
            </h3>
            <p className="text-body-md text-on-surface-variant text-sm mb-lg line-clamp-2">
              Prompt fotografi 8k sangat detail untuk lingkungan urban
              futuristik dengan pencahayaan neon.
            </p>
            <div className="bg-surface-container rounded-xl border-[2.5px] border-black p-md mb-lg relative">
              <pre className="font-code-sm text-code-sm overflow-hidden whitespace-pre-wrap">
                /imagine prompt: Cyberpunk cityscape, rainy night, neon
                reflections --v 6.0
              </pre>
              <button
                className="absolute top-2 right-2 bg-surface border-[2px] border-black p-xs rounded-lg hover:bg-primary-container transition-all cursor-pointer"
                onClick={copyPrompt}
              >
                <span className="material-symbols-outlined text-[18px]">
                  content_copy
                </span>
              </button>
            </div>
            <div className="flex items-center justify-between mt-auto pt-md border-t-[2px] border-dashed border-outline-variant">
              <div className="flex items-center gap-sm">
                <div className="w-10 h-10 rounded-full border-[2px] border-black bg-badge-orange overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Avatar"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVuje3odSoHu732GKwugz-AkMep9ExpXfDI2M9SQFvnejvZfAHKyaPbyyTAqd80RvX36M5RiEfmvQV2ZH2d5mMo8Vy5kNb3mSOaxlsvb5raVAiMNrmOaeWm2gp8qWITV4guy40fDNCmhctCaQaMfi7sRq7CkORHPD93zj3p1jVzoU1FFUr63bFIW2FNUAEZuR2d3p2Ym2r9CDWzTOYMTGCRUD2j19BsEEvKBkfWNHxvLjkW8DhvEvxlg"
                  />
                </div>
                <span className="font-label-sm text-sm">@pixel_ninja</span>
              </div>
              <span className="font-h2 text-xl">Rp90rb</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-surface border-[3px] border-black rounded-[20px] p-lg shadow-brutal hover-lift transition-all duration-300">
            <div className="flex justify-between items-start mb-md">
              <span className="bg-primary-container border-[2px] border-black px-sm py-xs rounded-lg font-label-sm text-[12px] shadow-brutal-sm">
                GPT-4
              </span>
              <button className="text-on-surface-variant hover:text-primary cursor-pointer transition-transform hover:scale-125">
                <span className="material-symbols-outlined">favorite</span>
              </button>
            </div>
            <h3 className="font-h2 text-[1.25rem] mb-sm">
              Arsitek Backend Python
            </h3>
            <p className="text-body-md text-on-surface-variant text-sm mb-lg line-clamp-2">
              Instruksi sistem ahli untuk membuat boilerplate FastAPI yang
              skalabel dengan autentikasi terintegrasi.
            </p>
            <div className="bg-surface-container rounded-xl border-[2.5px] border-black p-md mb-lg relative">
              <pre className="font-code-sm text-code-sm overflow-hidden whitespace-pre-wrap">
                Sistem: Anda adalah Senior DevOps Engineer spesialis
                Kubernetes...
              </pre>
              <button
                className="absolute top-2 right-2 bg-surface border-[2px] border-black p-xs rounded-lg hover:bg-primary-container transition-all cursor-pointer"
                onClick={copyPrompt}
              >
                <span className="material-symbols-outlined text-[18px]">
                  content_copy
                </span>
              </button>
            </div>
            <div className="flex items-center justify-between mt-auto pt-md border-t-[2px] border-dashed border-outline-variant">
              <div className="flex items-center gap-sm">
                <div className="w-10 h-10 rounded-full border-[2px] border-black bg-secondary-fixed overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Avatar"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0UzNwT9sSDPPJ2DXiI1TLFFMLvRmO2X625hbjo-QTVXrFPXKbwjHTspev-iQmAHE1dVymWS0Q1awXz8FILjxBZRSCCL5VqOayOfO_Ws9Ej-IuFnk7tAvhG3KpEdD3eveRWozDPBjvzwJR02jdApQfvkFKhgBVJZYJPVKAMRrJenQ3bHDiwsYGXfmExZIJbNNL93txd10Y14QrNahUqF5VMkaek0O5QRqMUaT6Lof1m1TSyXNll8TMXw"
                  />
                </div>
                <span className="font-label-sm text-sm">@code_wizard</span>
              </div>
              <span className="font-h2 text-xl">Rp190rb</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-surface border-[3px] border-black rounded-[20px] p-lg shadow-brutal hover-lift transition-all duration-300">
            <div className="flex justify-between items-start mb-md">
              <span className="bg-badge-orange border-[2px] border-black px-sm py-xs rounded-lg font-label-sm text-[12px] shadow-brutal-sm">
                DALL-E 3
              </span>
              <button className="text-on-surface-variant hover:text-primary cursor-pointer transition-transform hover:scale-125">
                <span className="material-symbols-outlined">favorite</span>
              </button>
            </div>
            <h3 className="font-h2 text-[1.25rem] mb-sm">
              Set Ikon Neubrutalis
            </h3>
            <p className="text-body-md text-on-surface-variant text-sm mb-lg line-clamp-2">
              Hasilkan ikon dengan kontras tinggi yang konsisten untuk proyek
              desain UI web dan mobile.
            </p>
            <div className="bg-surface-container rounded-xl border-[2.5px] border-black p-md mb-lg relative">
              <pre className="font-code-sm text-code-sm overflow-hidden whitespace-pre-wrap">
                Hasilkan ikon gaya vektor roket melayang, garis hitam tebal...
              </pre>
              <button
                className="absolute top-2 right-2 bg-surface border-[2px] border-black p-xs rounded-lg hover:bg-primary-container transition-all cursor-pointer"
                onClick={copyPrompt}
              >
                <span className="material-symbols-outlined text-[18px]">
                  content_copy
                </span>
              </button>
            </div>
            <div className="flex items-center justify-between mt-auto pt-md border-t-[2px] border-dashed border-outline-variant">
              <div className="flex items-center gap-sm">
                <div className="w-10 h-10 rounded-full border-[2px] border-black bg-badge-cyan overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Avatar"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1k4JUfyNiGM8FCx7QnYr4e3EZkDwbGen2lkvwc1ZJhGNIOx5X8cBagnvJsRtgJzJRoZvIZ45aoDehZlPoJNgRX_wlRQsYneUGf9IthTe7frISyzd-RMJ1La6x0Jo5XWbFVvmLjBUZVrO-Obh8NjUjzkgS140F4gd9joZp5u4wFm0V22ogRDPcjKm6X81DEvA8_SahnnmYhSBB_aGqj2WnnAlNXMNJnQty-tTOv-v6VsmxRJUX8FK2mw"
                  />
                </div>
                <span className="font-label-sm text-sm">@vector_vibe</span>
              </div>
              <span className="font-h2 text-xl">Rp120rb</span>
            </div>
          </div>
        </div>

        <div className="mt-2xl flex justify-center">
          <Link
            to="/allprompt"
            className="bg-surface border-[3px] border-black px-xl py-md rounded-full font-h2 text-[1.5rem] shadow-brutal hover-lift active-press cursor-pointer"
          >
            Lihat Semua Prompt
          </Link>
        </div>
      </section>

      {/* Story Section */}
      <section
        ref={storyRef}
        className="bg-accent-purple py-[120px] px-margin-mobile md:px-margin-desktop overflow-hidden relative"
      >
        <div className="absolute top-20 left-20 w-32 h-32 border-[3px] border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border-[3px] border-white/20 rounded-lg rotate-12"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-h1 text-h1 text-surface mb-lg font-black">
            10.000+ Prompt AI Terakurat untuk{' '}
            <span className="text-secondary-fixed">Kreator</span> &amp; Engineer
          </h2>
          <p className="text-xl text-surface/90 mb-2xl">
            Kami menjembatani celah antara kreativitas manusia dan kecerdasan
            mesin. Vault berbasis komunitas kami memastikan Anda tidak pernah
            memulai dengan layar kosong lagi.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-lg">
            <div className="stat-box bg-surface/10 backdrop-blur-md border-[2px] border-surface/30 p-lg rounded-xl">
              <div className="font-h1 text-[3rem] text-surface mb-xs">
                50rb+
              </div>
              <div className="text-surface/80 font-label-sm">Pengguna</div>
            </div>
            <div className="stat-box bg-surface/10 backdrop-blur-md border-[2px] border-surface/30 p-lg rounded-xl">
              <div className="font-h1 text-[3rem] text-surface mb-xs">12Jt</div>
              <div className="text-surface/80 font-label-sm">Generasi</div>
            </div>
            <div className="stat-box bg-surface/10 backdrop-blur-md border-[2px] border-surface/30 p-lg rounded-xl">
              <div className="font-h1 text-[3rem] text-surface mb-xs">99%</div>
              <div className="text-surface/80 font-label-sm">Keberhasilan</div>
            </div>
            <div className="stat-box bg-surface/10 backdrop-blur-md border-[2px] border-surface/30 p-lg rounded-xl">
              <div className="font-h1 text-[3rem] text-surface mb-xs">$450rb</div>
              <div className="text-surface/80 font-label-sm">
                Dibayar ke Penulis
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-2xl px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto w-full">
        <h2 className="font-h1 text-h2 text-center mb-2xl font-black">
          Pertanyaan Umum
        </h2>
        <div className="space-y-md">
          {[
            {
              q: 'Bagaimana cara menggunakan prompt-nya?',
              a: 'Setelah Anda membeli atau menyalin prompt, cukup tempelkan ke antarmuka AI yang diinginkan (ChatGPT, Midjourney Discord, dll.). Beberapa prompt menyertakan parameter khusus yang dapat Anda sesuaikan untuk hasil kustom.',
            },
            {
              q: 'Bisakah saya menjual prompt saya sendiri?',
              a: "Ya! Kreator dapat mendaftar ke program 'Vault Guardian' kami untuk mendaftarkan prompt mereka. Kami meninjau semua kiriman untuk kualitas dan konsistensi sebelum ditayangkan di marketplace.",
            },
            {
              q: 'Apakah ada model langganan?',
              a: "Kami menawarkan model bayar-per-prompt dan akses 'Unlimited Vault' untuk pengguna Pro. Pengguna Pro mendapatkan akses awal ke prompt yang sedang tren dan koleksi pribadi.",
            },
          ].map((faq, index) => (
            <div
              key={faq.q}
              className={`accordion-item bg-surface border-[3px] border-black rounded-xl overflow-hidden shadow-brutal transition-all ${
                accordionOpen === index ? 'active' : ''
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-lg text-left cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-h2 text-[1.25rem]">{faq.q}</span>
                <span className="material-symbols-outlined icon-rotate transition-transform">
                  expand_more
                </span>
              </button>
              <div className="accordion-content px-lg">
                <p className="text-body-md text-on-surface-variant">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="pb-2xl px-margin-mobile md:px-margin-desktop">
        <div ref={newsletterRef} className="max-w-7xl mx-auto bg-primary-container border-[4px] border-black rounded-[32px] p-xl shadow-brutal-lg flex flex-col md:flex-row items-center justify-between gap-xl">
          <div className="max-w-md">
            <h2 className="font-h1 text-[2.5rem] mb-md leading-tight font-black">
              Bergabung dengan Inner Circle
            </h2>
            <p className="text-lg text-on-primary-container/80">
              Dapatkan 'Prompt Digest' mingguan dengan 5 prompt berkualitas
              tinggi gratis yang dikirim ke kotak masuk Anda.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row w-full max-w-lg gap-md">
            <input
              className="flex-1 bg-surface border-[3px] border-black rounded-full px-lg py-md shadow-brutal focus:ring-0 focus:outline-none font-label-sm"
              placeholder="master_prompt@email.com"
              type="email"
            />
            <button className="bg-on-background text-surface px-xl py-md rounded-full font-h2 text-xl shadow-brutal hover-lift active-press whitespace-nowrap cursor-pointer">
              Berlangganan
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-highest border-t-[3px] border-black py-2xl px-margin-mobile md:px-margin-desktop">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-xl">
          <div className="col-span-1 md:col-span-2">
            <Link
              to="/"
              className="font-headline-lg text-h2 font-black text-on-surface mb-md font-headline-xl block"
            >
              PromptVault
            </Link>
            <p className="text-on-surface-variant max-w-sm mb-lg">
              Dibuat untuk para kreatif, pembangun, dan penggemar AI. Mengkurasi
              masa depan kecerdasan generatif.
            </p>
            <div className="flex gap-md">
              <a
                className="w-12 h-12 bg-surface border-[2px] border-black rounded-full flex items-center justify-center hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                href="#"
              >
                <span className="material-symbols-outlined">
                  swap_horizontal_circle
                </span>
              </a>
              <a
                className="w-12 h-12 bg-surface border-[2px] border-black rounded-full flex items-center justify-center hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                href="#"
              >
                <span className="material-symbols-outlined">
                  alternate_email
                </span>
              </a>
              <a
                className="w-12 h-12 bg-surface border-[2px] border-black rounded-full flex items-center justify-center hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                href="#"
              >
                <span className="material-symbols-outlined">public</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-headline-lg text-xl mb-lg">Pasar</h4>
            <ul className="space-y-sm">
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Prompt Populer
                </a>
              </li>
              <li>
                <Link
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  to="/"
                >
                  Model
                </Link>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Kategori
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Program Penulis
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline-lg text-xl mb-lg">Legal</h4>
            <ul className="space-y-sm">
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Ketentuan Layanan
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Lisensi
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Kebijakan Pengembalian
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-2xl pt-lg border-t-[2px] border-black/10 flex flex-col md:flex-row justify-between items-center gap-md">
          <p className="text-on-surface-variant text-sm">
            © 2026 PromptVault AI.
          </p>
          <div className="flex items-center gap-md">
            <span className="bg-secondary-fixed border-[2px] border-black px-md py-xs rounded-full text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              STATUS SISTEM: ONLINE
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;