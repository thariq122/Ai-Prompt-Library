import { useState } from 'react';
import { Link } from 'react-router-dom';

function Submit() {
  const [formData, setFormData] = useState({
    title: '',
    model: 'GPT-4',
    category: 'Penulisan Kreatif',
    prompt: '',
    tips: '',
    price: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Prompt berhasil disetorkan ke draf Vault lokal!');
  };

  return (
    <div className="font-body-md text-body-md bg-[#F3EAE3] text-[#1f1a20] min-h-screen flex flex-col justify-between">
      {/* TopNavBar */}
      <header className="sticky top-4 z-50 px-4 md:px-margin-desktop mb-md">
        <div className="max-w-7xl mx-auto bg-surface border-[3px] border-black rounded-full px-lg py-sm grid grid-cols-3 items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full pointer-events-auto">
          <div className="flex justify-start">
            <Link
              to="/"
              className="text-2xl font-black text-text-primary font-headline-xl"
            >
              PromptVault
            </Link>
          </div>
          <nav className="hidden md:flex justify-center gap-lg">
            <Link
              to="/"
              className="font-bold text-on-surface-variant hover:text-primary transition-colors"
            >
              Beranda
            </Link>
            <Link
              to="/favorites"
              className="font-bold text-on-surface-variant hover:text-primary transition-colors"
            >
              Favorit
            </Link>
            <Link
              to="/about"
              className="font-bold text-on-surface-variant hover:text-primary transition-colors"
            >
              Tentang
            </Link>
          </nav>
          <div className="flex justify-end">
            <button className="md:hidden p-2 border-2 border-black rounded-full bg-surface-variant flex items-center justify-center">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-margin-mobile md:px-0 py-2xl flex-grow w-full">
        {/* Hero Section */}
        <header className="text-center mb-xl">
          <div className="inline-block bg-secondary-fixed text-on-secondary-fixed-variant px-md py-xs rounded-full border-[2px] border-black text-label-sm mb-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            BERBASIS KOMUNITAS
          </div>
          <h1 className="font-headline-xl text-headline-xl mb-md">
            Kontribusi ke Vault
          </h1>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Bagikan prompt buatan Anda kepada dunia. Kiriman berkualitas membantu
            para kreator membuka potensi penuh AI. Bergabunglah dengan pasar
            kami dan hasilkan pendapatan dari logika kreatif Anda.
          </p>
        </header>

        {/* Submission Form Card */}
        <section className="bg-surface rounded-xl border-[3px] border-black p-lg md:p-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-2xl">
          <form className="space-y-lg" onSubmit={handleSubmit}>
            {/* Row 1: Title */}
            <div className="flex flex-col gap-sm">
              <label
                className="font-label-sm text-label-sm text-primary uppercase tracking-wider"
                htmlFor="title"
              >
                Judul Prompt
              </label>
              <input
                className="w-full bg-surface-container-low p-md rounded-lg font-body-md border-[2.5px] border-black focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none transition-all"
                id="title"
                placeholder="contoh: Hyper-Realistic Cyberpunk Portrait Generator"
                type="text"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            {/* Row 2: Grid for Selects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              <div className="flex flex-col gap-sm">
                <label
                  className="font-label-sm text-label-sm text-primary uppercase tracking-wider"
                  htmlFor="model"
                >
                  Model AI
                </label>
                <div className="relative">
                  <select
                    className="w-full bg-surface-container-low p-md rounded-lg font-body-md appearance-none border-[2.5px] border-black focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none transition-all"
                    id="model"
                    value={formData.model}
                    onChange={handleChange}
                  >
                    <option>GPT-4</option>
                    <option>Midjourney v6</option>
                    <option>Claude 3 Opus</option>
                    <option>DALL-E 3</option>
                    <option>Stable Diffusion XL</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-sm">
                <label
                  className="font-label-sm text-label-sm text-primary uppercase tracking-wider"
                  htmlFor="category"
                >
                  Kategori
                </label>
                <div className="relative">
                  <select
                    className="w-full bg-surface-container-low p-md rounded-lg font-body-md appearance-none border-[2.5px] border-black focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none transition-all"
                    id="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option>Penulisan Kreatif</option>
                    <option>Seni Digital</option>
                    <option>Koding/Pengembangan</option>
                    <option>Analisis Data</option>
                    <option>Pemasaran & SEO</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>
            </div>

            {/* Row 3: The Prompt */}
            <div className="flex flex-col gap-sm">
              <label
                className="font-label-sm text-label-sm text-primary uppercase tracking-wider"
                htmlFor="prompt"
              >
                Teks Prompt
              </label>
              <div className="relative">
                <textarea
                  className="w-full bg-surface-container-lowest p-md rounded-lg font-code-sm text-code-sm custom-scrollbar resize-none border-[2.5px] border-black focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none transition-all"
                  id="prompt"
                  placeholder="Tempelkan prompt hasil rekayasa Anda di sini..."
                  rows="6"
                  value={formData.prompt}
                  onChange={handleChange}
                ></textarea>
                <div className="absolute top-md right-md">
                  <span className="material-symbols-outlined text-outline">
                    terminal
                  </span>
                </div>
              </div>
              <p className="text-[12px] text-on-surface-variant italic">
                Tips: Gunakan [kurung-siku] untuk variabel input pengguna.
              </p>
            </div>

            {/* Row 4: Tips */}
            <div className="flex flex-col gap-sm">
              <label
                className="font-label-sm text-label-sm text-primary uppercase tracking-wider"
                htmlFor="tips"
              >
                Hasil yang Diharapkan / Tips
              </label>
              <textarea
                className="w-full bg-surface-container-low p-md rounded-lg font-body-md resize-none border-[2.5px] border-black focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none transition-all"
                id="tips"
                placeholder="Apa yang harus diharapkan pengguna? Pengaturan khusus apa pun (seperti rasio aspek)?"
                rows="3"
                value={formData.tips}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Row 5: Price */}
            <div className="flex flex-col gap-sm md:w-1/2">
              <label
                className="font-label-sm text-label-sm text-primary uppercase tracking-wider"
                htmlFor="price"
              >
                Nilai Pasar (USD)
              </label>
              <div className="flex items-center gap-sm">
                <div className="flex items-center bg-surface-container-low rounded-lg px-md w-full border-[2.5px] border-black">
                  <span className="font-bold text-on-surface">$</span>
                  <input
                    className="bg-transparent border-none focus:ring-0 w-full p-md font-body-md focus:outline-none"
                    id="price"
                    placeholder="0.00"
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </div>
                <span className="material-symbols-outlined text-secondary text-2xl">
                  monetization_on
                </span>
              </div>
            </div>

            {/* Submit Area */}
            <div className="pt-lg border-t-[2.5px] border-surface-variant flex flex-col md:flex-row items-center justify-between gap-lg">
              <div className="flex items-center gap-sm">
                <input
                  className="w-6 h-6 border-[2.5px] border-black rounded text-primary focus:ring-primary"
                  id="terms"
                  type="checkbox"
                  checked={formData.terms}
                  onChange={handleChange}
                />
                <label className="text-label-sm" htmlFor="terms">
                  Saya menyetujui{' '}
                  <a className="text-primary underline" href="#">
                    Ketentuan Penjual
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto bg-primary-container text-on-primary-container px-2xl py-md rounded-full border-[3px] border-black font-h2 text-xl font-bold flex items-center justify-center gap-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer"
              >
                Setorkan ke Vault{' '}
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </form>
        </section>

        {/* Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-2xl">
          <div className="md:col-span-1 bg-badge-cyan p-lg rounded-xl border-[2.5px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center items-center text-center">
            <span
              className="material-symbols-outlined text-4xl mb-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            <h3 className="font-h2 text-lg">Pemeriksaan Kurasi</h3>
            <p className="text-label-sm">
              Tim kami meninjau setiap kiriman untuk memastikan performanya.
            </p>
          </div>
          <div className="md:col-span-1 bg-badge-orange p-lg rounded-xl border-[2.5px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center items-center text-center">
            <span
              className="material-symbols-outlined text-4xl mb-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              payments
            </span>
            <h3 className="font-h2 text-lg">Pembayaran Instan</h3>
            <p className="text-label-sm">
              Dapatkan 80% dari setiap penjualan langsung ke dompet Anda.
            </p>
          </div>
          <div className="md:col-span-1 bg-secondary-container p-lg rounded-xl border-[2.5px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center items-center text-center">
            <span
              className="material-symbols-outlined text-4xl mb-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              groups
            </span>
            <h3 className="font-h2 text-lg">Umpan Balik Komunitas</h3>
            <p className="text-label-sm">
              Dapatkan rating dan ulasan untuk meningkatkan kualitas prompt
              Anda.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-highest border-t-[3px] border-black py-2xl px-margin-mobile md:px-margin-desktop">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-xl">
          <div className="col-span-1 md:col-span-2">
            <Link
              to="/"
              className="text-h2 font-black text-on-surface mb-md font-headline-xl block"
            >
              PromptVault
            </Link>
            <p className="text-on-surface-variant max-w-sm mb-lg">
              Didesain untuk para kreatif, pembangun, dan penggemar AI. Mengkurasi
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
            <h4 className="text-xl mb-lg font-black font-headline-xl">Pasar</h4>
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
            <h4 className="text-xl mb-lg font-black font-headline-xl">Legal</h4>
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
            © 2024 PromptVault AI. Didesain untuk Kreator.
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

export default Submit;