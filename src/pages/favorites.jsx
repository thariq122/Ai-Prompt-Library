import { Link } from 'react-router-dom';

function Favorites() {
  return (
    <div className="min-h-screen flex flex-col font-body-md text-on-surface bg-[#F3EAE3]">

      <main className="flex-grow w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        {/* Hero Section / Title */}
        <div className="mb-xl flex flex-col md:flex-row md:items-end justify-between gap-md">
          <div>
            <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl mb-xs font-['Syne'] font-black">
              Favorit Tersimpan Anda
            </h1>
            <div className="inline-block bg-tertiary-container text-on-tertiary-container px-4 py-1 border-2 border-border rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              12 prompt tersimpan
            </div>
          </div>
          <div className="flex gap-sm">
            <div className="relative">
              <input
                className="bg-surface border-2 border-border rounded-full px-lg py-sm pl-12 focus:ring-0 focus:border-border w-full md:w-64 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none"
                placeholder="Cari favorit Anda..."
                type="text"
              />
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2">
                search
              </span>
            </div>
          </div>
        </div>

        {/* Favorites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {/* Prompt Card 1 */}
          <div className="bg-surface border-[3px] border-border rounded-xl p-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all group">
            <div className="flex justify-between items-start mb-md">
              <div className="flex gap-sm">
                <span className="bg-badge-cyan text-on-surface border-2 border-border rounded-full px-3 py-0.5 text-label-sm font-label-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  GPT-4
                </span>
                <span className="bg-badge-orange text-on-surface border-2 border-border rounded-full px-3 py-0.5 text-label-sm font-label-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  Kreatif
                </span>
              </div>
              <button className="text-error active:scale-90 transition-transform">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  favorite
                </span>
              </button>
            </div>
            <h3 className="font-headline-lg text-2xl font-bold mb-sm group-hover:text-primary transition-colors">
              Lanskap Cyberpunk Surealis
            </h3>
            <p className="text-on-surface-variant line-clamp-3 mb-md font-body-md">
              Hasilkan metropolis neon yang luas dengan struktur terapung
              organik dan kabut atmosfer bioluminesensi...
            </p>
            <div className="bg-surface-container-low border-2 border-border rounded-lg p-md mb-md font-code-sm text-code-sm overflow-hidden">
              <code className="block text-on-surface-variant">
                /imagine prompt: taman terapung penuh neon di langit neo-tokyo...
              </code>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-xs">
                <div className="w-8 h-8 rounded-full border-2 border-border overflow-hidden bg-surface-variant">
                  <img
                    className="w-full h-full object-cover"
                    alt="Avatar"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqqSW4FftwEuczhW__4ZMLmANdZoAmH34XEhCUmZIq4BuetfylQ_KX3h9p6cwDAPmz-hYY945sR-sav8y97qJEsETfHRx2yewFCtDa_8btAOhRQqVCqqeFbjUqkj_UfxNykB0xWkakyhnuChSp1_hHowHRNmkVl0B9RVFLmiRvAE8vjJ0_v9YvEyxvhGlHZxeU1rZzJnOZyixwIFthrk-2rD6Yzv9CoqWVjxOObjVhNZn3Fsou_X945g"
                  />
                </div>
                <span className="text-label-sm font-label-sm">
                  @pixel_wizard
                </span>
              </div>
              <button className="bg-primary text-on-primary px-4 py-1.5 border-2 border-border rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:scale-95 cursor-pointer">
                Salin
              </button>
            </div>
          </div>

          {/* Prompt Card 2 */}
          <div className="bg-surface border-[3px] border-border rounded-xl p-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all group">
            <div className="flex justify-between items-start mb-md">
              <div className="flex gap-sm">
                <span className="bg-secondary-container text-on-surface border-2 border-border rounded-full px-3 py-0.5 text-label-sm font-label-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  Claude 3
                </span>
                <span className="bg-surface-container-highest text-on-surface border-2 border-border rounded-full px-3 py-0.5 text-label-sm font-label-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  Analisis
                </span>
              </div>
              <button className="text-error active:scale-90 transition-transform">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  favorite
                </span>
              </button>
            </div>
            <h3 className="font-headline-lg text-2xl font-bold mb-sm group-hover:text-primary transition-colors">
              Pemecah Logika Kompleks
            </h3>
            <p className="text-on-surface-variant line-clamp-3 mb-md font-body-md">
              Pendekatan struktural untuk memecahkan paradoks matematika dan
              logika multi-langkah dengan penalaran tahap demi tahap yang
              jelas...
            </p>
            <div className="bg-surface-container-low border-2 border-border rounded-lg p-md mb-md font-code-sm text-code-sm overflow-hidden">
              <code className="block text-on-surface-variant">
                Analisis paradoks berikut melalui kacamata logika formal...
              </code>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-xs">
                <div className="w-8 h-8 rounded-full border-2 border-border overflow-hidden bg-surface-variant">
                  <img
                    className="w-full h-full object-cover"
                    alt="Avatar"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIVjw3r5hDuozC-gaAMZI3ENvuLnLnC2mu7RfE3ETsMB_bJYFLahulOlZNcqPOwyBVXY7fQGvQYastqLJF0fCYtVGAuuht8BL_Xy0KFaBpcvEeTH2RA8ru-jh0CJwkBx5lklvHQmMri6CDfFFwOHuM_nXf2Ru0rHclK5HP4aUH1bDEJ_nE4ID8OM6rleoFgCC5U34e50EK1ttQrd41LnNPZJUk_qYYIuLk6uzHPuiz1VD9b7qubTnwUA"
                  />
                </div>
                <span className="text-label-sm font-label-sm">
                  @logic_lord
                </span>
              </div>
              <button className="bg-primary text-on-primary px-4 py-1.5 border-2 border-border rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:scale-95 cursor-pointer">
                Salin
              </button>
            </div>
          </div>

          {/* Prompt Card 3 */}
          <div className="bg-surface border-[3px] border-border rounded-xl p-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all group">
            <div className="flex justify-between items-start mb-md">
              <div className="flex gap-sm">
                <span className="bg-primary-container text-on-surface border-2 border-border rounded-full px-3 py-0.5 text-label-sm font-label-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  Midjourney
                </span>
                <span className="bg-badge-cyan text-on-surface border-2 border-border rounded-full px-3 py-0.5 text-label-sm font-label-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  Seni
                </span>
              </div>
              <button className="text-error active:scale-90 transition-transform">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  favorite
                </span>
              </button>
            </div>
            <h3 className="font-headline-lg text-2xl font-bold mb-sm group-hover:text-primary transition-colors">
              Estetika Poster Vintage
            </h3>
            <p className="text-on-surface-variant line-clamp-3 mb-md font-body-md">
              Buat tata letak tipografi Gaya Swiss tahun 1960-an dengan tekstur
              grainy, blok warna datar, dan set ikon minimalis...
            </p>
            <div className="bg-surface-container-low border-2 border-border rounded-lg p-md mb-md font-code-sm text-code-sm overflow-hidden">
              <code className="block text-on-surface-variant">
                desain grafis 1960-an, gaya internasional Swiss, warna
                primer...
              </code>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-xs">
                <div className="w-8 h-8 rounded-full border-2 border-border overflow-hidden bg-surface-variant">
                  <img
                    className="w-full h-full object-cover"
                    alt="Avatar"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg7K7Bu6Y4JZiYimvYdThHXPe1rWn6s6Z4LasbSf3NF-5cioVNnqbqNRfmJjSTyffGHeO00Q0M63aKjTiMQKnnY3xl-IHRwI3eoLm3gUZ1Ns2jiaTfxEJQOkf8OJiv6Pv__fdWOVlSMV-Ks_cbL9ti9OQPoy7RKCn8hyBSvH2V_KiQ0Hcd5pNgTKOimND0fK7NtTi1NJRrCGyvvHkBZEO7FKGcS4D6J6hQLdAVNkjk_8TEy9dpKJwEcA"
                  />
                </div>
                <span className="text-label-sm font-label-sm">
                  @retro_guru
                </span>
              </div>
              <button className="bg-primary text-on-primary px-4 py-1.5 border-2 border-border rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:scale-95 cursor-pointer">
                Salin
              </button>
            </div>
          </div>

          {/* Featured Card - Bento Style */}
          <div className="md:col-span-2 lg:col-span-1 bg-tertiary-fixed border-[3px] border-border rounded-xl p-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between overflow-hidden relative group">
            <div className="relative z-10">
              <h3 className="font-headline-lg text-3xl mb-md leading-tight">
                Kuasai Seni Prompting
              </h3>
              <p className="font-body-md text-on-tertiary-fixed mb-lg">
                Buka potensi penuh AI dengan sertifikasi Prompt Engineering kami
                yang terkurasi.
              </p>
              <button className="bg-on-tertiary-fixed text-tertiary-fixed px-lg py-md border-2 border-border rounded-xl font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer">
                Daftar Sekarang
              </button>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-20 group-hover:rotate-12 transition-transform duration-500">
              <span className="material-symbols-outlined text-[200px]">
                rocket_launch
              </span>
            </div>
          </div>

          {/* Prompt Card 4 */}
          <div className="bg-surface border-[3px] border-border rounded-xl p-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all group">
            <div className="flex justify-between items-start mb-md">
              <div className="flex gap-sm">
                <span className="bg-secondary-container text-on-surface border-2 border-border rounded-full px-3 py-0.5 text-label-sm font-label-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  Stable Diffusion
                </span>
              </div>
              <button className="text-error active:scale-90 transition-transform">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  favorite
                </span>
              </button>
            </div>
            <h3 className="font-headline-lg text-2xl font-bold mb-sm group-hover:text-primary transition-colors">
              Desain Ruang Isometrik
            </h3>
            <p className="text-on-surface-variant line-clamp-3 mb-md font-body-md">
              Ruang isometrik 3D detail dengan pencahayaan nyaman, detail
              rumit, dan estetika clay-render yang lembut...
            </p>
            <div className="bg-surface-container-low border-2 border-border rounded-lg p-md mb-md font-code-sm text-code-sm overflow-hidden">
              <code className="block text-on-surface-variant">
                ruang gaming low-poly isometrik, octane render, pencahayaan
                global lembut...
              </code>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-xs">
                <div className="w-8 h-8 rounded-full border-2 border-border overflow-hidden bg-surface-variant">
                  <img
                    className="w-full h-full object-cover"
                    alt="Avatar"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcDyeTCZHgvMGVRIb_xk7AvgJRC0AnWrjH4lQmw62oBPKmVenJH8g0qD2QzskftHYe3L1J0sJDUj92tsGe20naqnAfxUdpZI0m1W5unJmXsl4tWbbHJ8gxsCo9h7V5M4zkdfiwtqN-DycEJUoHpCNITPH6GGDic-oJ5t5ZwjNR4V2s6UmxvsNHFSy50TRhSJTYtiSlPz6uZpMG-B486i3jnFjyVBU_zf8ca5jFJpFu2LEm6tm9SGgC5A"
                  />
                </div>
                <span className="text-label-sm font-label-sm">@iso_master</span>
              </div>
              <button className="bg-primary text-on-primary px-4 py-1.5 border-2 border-border rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:scale-95 cursor-pointer">
                Salin
              </button>
            </div>
          </div>

          {/* Browse More CTA Card */}
          <div className="bg-surface-container border-[3px] border-border border-dashed rounded-xl p-lg flex flex-col items-center justify-center text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all group">
            <div className="w-16 h-16 bg-primary-container border-2 border-border rounded-full flex items-center justify-center mb-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl">add</span>
            </div>
            <h3 className="font-headline-lg text-2xl font-bold mb-sm">
              Ingin lebih banyak?
            </h3>
            <p className="text-on-surface-variant mb-lg font-body-md">
              Jelajahi ribuan prompt premium di pasar kami.
            </p>
            <Link
              to="/"
              className="bg-surface border-2 border-border px-lg py-sm rounded-full font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all inline-block"
            >
              Jelajahi Pasar
            </Link>
          </div>
        </div>
      </main>

      {/* Footer CTA & Footer */}
      <section className="pb-2xl px-margin-mobile md:px-margin-desktop">
        <div className="max-w-7xl mx-auto bg-primary-container border-[4px] border-black rounded-[32px] p-xl flex flex-col md:flex-row items-center justify-between gap-xl">
          <div className="max-w-md">
            <h2 className="font-h1 text-[2.5rem] mb-md leading-tight font-black font-['Syne']">
              Gabung ke Inner Circle
            </h2>
            <p className="text-lg text-on-primary-container/80">
              Dapatkan 'Prompt Digest' mingguan dengan 5 prompt fidelitas tinggi
              gratis ke kotak masuk Anda.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row w-full max-w-lg gap-md">
            <input
              className="flex-1 bg-surface border-[3px] border-black rounded-full px-lg py-md focus:ring-0 focus:outline-none font-label-sm"
              placeholder="prompt_master@email.com"
              type="email"
            />
            <button className="bg-on-background text-surface px-xl py-md rounded-full font-h2 text-xl whitespace-nowrap cursor-pointer">
              Langganan
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-surface-container-highest border-t-[3px] border-black py-2xl px-margin-mobile md:px-margin-desktop">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-xl">
          <div className="col-span-1 md:col-span-2">
            <Link
              to="/"
              className="block font-headline-lg text-h2 font-black text-on-surface mb-md font-['Syne']"
            >
              PromptVault
            </Link>
            <p className="text-on-surface-variant max-w-sm mb-lg">
              Dibuat untuk kreatif, pembangun, dan antusias AI. Mengkurasi masa
              depan kecerdasan generatif.
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
            <h4 className="font-headline-lg text-xl mb-lg font-black font-['Syne']">
              Pasar
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
            <h4 className="font-headline-lg text-xl mb-lg font-black font-['Syne']">
              Legal
            </h4>
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
            © 2024 PromptVault AI. Didesain untuk para Kreatif.
          </p>
          <div className="flex items-center gap-md">
            <span className="bg-secondary-fixed border-[2px] border-black px-md py-xs rounded-full text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              STATUS SISTEM: AKTIF
            </span>
          </div>
        </div>
       </footer>
     </div>
  );
}

export default Favorites;