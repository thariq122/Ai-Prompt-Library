import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function About() {
  return (
    <div className="font-body-md overflow-x-hidden bg-[#F3EAE3] text-[#000000] min-h-screen flex flex-col justify-between">

      <main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl space-y-2xl flex-grow w-full">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-xl">
          <div className="flex-1 space-y-md">
            <span className="bg-badge-cyan border-2 border-border px-4 py-1 rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-sm inline-block">
              TENTANG PROMPTVAULT
            </span>
            <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl font-black">
              Menjembatani kesenjangan antara{' '}
              <span className="text-primary italic">kreativitas manusia</span>{' '}
              dan AI.
            </h1>
            <p className="text-on-surface-variant text-lg max-w-xl">
              PromptVault adalah repositori neubrutalist paling ekspresif di
              dunia untuk prompt AI berperforma tinggi, dikurasi oleh manusia,
              untuk manusia.
            </p>
          </div>
          <div className="flex-1 relative w-full h-[400px]">
            <div className="absolute inset-0 bg-white border-[3px] border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden"></div>
            <div className="absolute -bottom-6 -right-6 bg-badge-orange p-lg max-w-[200px] z-10 rotate-3 bg-white border-[3px] border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-bold text-center">1Jt+ Prompt Dikurasi</p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-lg items-start">
          <div className="md:col-span-4 sticky top-32">
            <h2 className="font-headline-lg text-headline-lg font-black">
              Misi Kami
            </h2>
            <div className="h-2 w-24 bg-primary mt-sm border-2 border-border shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
          </div>
          <div className="md:col-span-8 space-y-lg">
            <div className="bg-white border-[3px] border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-lg space-y-md">
              <p className="text-lg leading-relaxed">
                PromptVault lahir dari observasi sederhana: AI adalah alat,
                tetapi{' '}
                <strong className="text-primary">prompt adalah bahasa seni.</strong>{' '}
                Kami percaya bahwa batasan antara ide brilian dan hasil yang
                memukau tidak seharusnya menjadi masalah teknis.
              </p>
              <p className="text-lg leading-relaxed">
                Platform kami berfungsi sebagai ekosistem berbasis komunitas di
                mana para insinyur, seniman, dan antusias berkolaborasi untuk
                membangun repositori logika generatif terbaik. Kami bukan
                sekadar marketplace; kami adalah perpustakaan niat kreatif.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md pt-md">
                <div className="p-md bg-surface-container rounded-xl border-2 border-border">
                  <span className="material-symbols-outlined text-primary mb-2">
                    groups
                  </span>
                  <h4 className="font-bold">Prioritas Komunitas</h4>
                  <p className="text-sm">
                    Digerakkan oleh kontributor yang menyempurnakan dan menilai
                    setiap prompt demi kualitas.
                  </p>
                </div>
                <div className="p-md bg-surface-container rounded-xl border-2 border-border">
                  <span className="material-symbols-outlined text-secondary mb-2">
                    bolt
                  </span>
                  <h4 className="font-bold">Optimasi Performa</h4>
                  <p className="text-sm">
                    Diuji di berbagai iterasi model untuk memastikan output yang
                    dapat diprediksi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Models */}
        <section className="space-y-xl">
          <div className="text-center space-y-sm">
            <h2 className="font-headline-lg text-headline-lg font-black">
              Dukungan AI Omnichannel
            </h2>
            <p className="text-on-surface-variant">
              Kami mendukung setiap mesin utama yang menggerakkan revolusi
              kreatif.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-lg">
            {/* GPT-4 */}
            <div className="bg-white border-[3px] border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-lg flex flex-col items-center gap-md hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-primary-container border-2 border-border flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  chat_bubble
                </span>
              </div>
              <span className="font-bold text-lg">GPT-4o</span>
              <span className="bg-badge-cyan px-3 py-1 rounded-full text-xs font-bold border-2 border-border">
                Teks &amp; Kode
              </span>
            </div>
            {/* Midjourney */}
            <div className="bg-white border-[3px] border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-lg flex flex-col items-center gap-md hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-secondary-container border-2 border-border flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  palette
                </span>
              </div>
              <span className="font-bold text-lg">Midjourney</span>
              <span className="bg-badge-orange px-3 py-1 rounded-full text-xs font-bold border-2 border-border">
                Seni Generatif
              </span>
            </div>
            {/* Claude */}
            <div className="bg-white border-[3px] border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-lg flex flex-col items-center gap-md hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-surface-container-highest border-2 border-border flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  auto_awesome
                </span>
              </div>
              <span className="font-bold text-lg">Claude 3.5</span>
              <span className="bg-tertiary-fixed px-3 py-1 rounded-full text-xs font-bold border-2 border-border">
                Analitis
              </span>
            </div>
            {/* DALL-E */}
            <div className="bg-white border-[3px] border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-lg flex flex-col items-center gap-md hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-error-container border-2 border-border flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  image
                </span>
              </div>
              <span className="font-bold text-lg">DALL-E 3</span>
              <span className="bg-outline-variant px-3 py-1 rounded-full text-xs font-bold border-2 border-border">
                Seni Terintegrasi
              </span>
            </div>
          </div>
        </section>

        {/* The Vision / Team */}
        <section className="bg-primary text-on-primary p-xl overflow-hidden relative border-[3px] border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="absolute -right-20 -top-20 w-64 h-64 border-[10px] border-black/20 rounded-full"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
            <div className="space-y-md">
              <h2 className="font-headline-lg text-headline-lg text-on-primary font-black">
                Visinya
              </h2>
              <p className="text-on-primary/90 text-lg">
                Didirikan oleh kolektif "Insinyur Prompt" pada tahun 2023,
                PromptVault dimulai sebagai halaman Notion bersama. Hari ini,
                ini adalah hub global bagi para kreator yang ingin melampaui
                batas-batas LLM.
              </p>
              <p className="text-on-primary/90">
                Tim kami tersebar secara global, bekerja berdasarkan keyakinan
                bahwa prompt sumber terbuka adalah satu-satunya cara untuk
                mendemokratisasi era AI.
              </p>
              <div className="pt-md">
                <button className="bg-white text-black font-bold px-lg py-sm rounded-full border-[2.5px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer">
                  Bergabung dengan Kolektif
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-md">
              <div className="bg-white p-xs aspect-square overflow-hidden border-[3px] border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  alt="Creative professional"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpgY5rCR_iG-rNmd6YgvsVld1PDXcIrOLlmL98fru2dLHtM7aQaDLSz7V065_udBh8CEgTQm6d-91jA2iqbmVqaezzk154psdSnEARH5dufAejJLnRjzNMD3w1DzkTHj0Yn6qmSyVFrx9z2WvyexU5xGXdJ5eOPZ9tqRuLMNDcelmI-j8NZoo2C7t4OU3s2ymWR2h3ul295Xd8sf7BM5UA4qglKpp_8iY0PV9Jwpyms45BbqWgaMNIAQ"
                />
              </div>
              <div className="bg-white p-xs aspect-square overflow-hidden mt-lg border-[3px] border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  alt="Team collaborating"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4S_O_90L8CCdTujk4sWPB-qTvXuZ4p19T1kdPDQ7QljHFBHLXjllfhvOuZzL68gcBPew9FZTGSs-7TeEmdoBd-gy8sG0J_Dbi_0a4sH8Pzfzc4hkRf6ML9yvSfnWYyr9Zw8ZWdt2zgX1Ifpma5DgcDe0M7PW4UGHPqbtR434bAHXxjmc-MYJRF4EN8TMBOfowA8gTrCU-m2zpSZKm5MsgrHnZjcm6pj2CGZED3DBM7S3ZcJTSwRgSKw"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer CTA & Footer */}
      <section className="pb-2xl px-margin-mobile md:px-margin-desktop">
        <div className="max-w-7xl mx-auto bg-primary-container border-[4px] border-black rounded-[32px] p-xl flex flex-col md:flex-row items-center justify-between gap-xl">
          <div className="max-w-md">
            <h2 className="font-headline-lg text-[2.5rem] mb-md leading-tight font-black">
              Bergabung dengan Lingkaran Dalam
            </h2>
            <p className="text-lg text-on-primary-container/80">
              Dapatkan 'Prompt Digest' mingguan dengan 5 prompt fidelitas tinggi
              gratis yang dikirim langsung ke kotak masuk Anda.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row w-full max-w-lg gap-md">
            <input
              className="flex-1 bg-surface border-[3px] border-black rounded-full px-lg py-md focus:ring-0 focus:outline-none font-label-sm"
              placeholder="master_prompt@email.com"
              type="email"
            />
            <button className="bg-on-background text-surface px-xl py-md rounded-full font-headline-lg text-xl whitespace-nowrap cursor-pointer">
              Berlangganan
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-surface-container-highest border-t-[3px] border-black py-2xl px-margin-mobile md:px-margin-desktop">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-xl">
          <div className="col-span-1 md:col-span-2">
            <Link
              to="/"
              className="font-headline-lg text-h2 font-black text-on-surface mb-md block"
            >
              PromptVault
            </Link>
            <p className="text-on-surface-variant max-w-sm mb-lg">
              Dirancang untuk kreator, pembangun, dan penggemar AI. Mengkurasi
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
            <h4 className="font-headline-lg text-xl mb-lg font-black">
              Marketplace
            </h4>
            <ul className="space-y-sm">
              <li>
                <Link
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  to="/"
                >
                  Prompt Populer
                </Link>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Model
                </a>
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
            <h4 className="font-headline-lg text-xl mb-lg font-black">Legal</h4>
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
            © 2024 PromptVault AI. Dirancang untuk Kreator.
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

export default About;