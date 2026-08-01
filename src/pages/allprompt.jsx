import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const dummyPrompts = [
  {
    id: 1,
    title: 'Cyberpunk Neon Cityscape',
    model: 'GPT-4',
    category: 'Kreatif',
    description: 'Hasilkan metropolis neon yang luas dengan struktur terapung organik dan kabut atmosfer bioluminesensi...',
    promptText: '/imagine prompt: taman terapung penuh neon di langit neo-tokyo...',
    author: '@pixel_wizard',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqqSW4FftwEuczhW__4ZMLmANdZoAmH34XEhCUmZIq4BuetfylQ_KX3h9p6cwDAPmz-hYY945sR-sav8y97qJEsETfHRx2yewFCtDa_8btAOhRQqVCqqeFbjUqkj_UfxNykB0xWkakyhnuChSp1_hHowHRNmkVl0B9RVFLmiRvAE8vjJ0_v9YvEyxvhGlHZxeU1rZzJnOZyixwIFthrk-2rD6Yzv9CoqWVjxOObjVhNZn3Fsou_X945g'
  },
  {
    id: 2,
    title: 'Complex Logic Solver',
    model: 'Claude 3',
    category: 'Analisis',
    description: 'Pendekatan struktural untuk memecahkan paradoks matematika dan logika multi-langkah dengan penalaran tahap demi tahap...',
    promptText: 'Analisis paradoks berikut melalui kacamata logika formal dan berikan kesimpulan terstruktur...',
    author: '@logic_lord',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIVjw3r5hDuozC-gaAMZI3ENvuLnLnC2mu7RfE3ETsMB_bJYFLahulOlZNcqPOwyBVXY7fQGvQYastqLJF0fCYtVGAuuht8BL_Xy0KFaBpcvEeTH2RA8ru-jh0CJwkBx5lklvHQmMri6CDfFFwOHuM_nXf2Ru0rHclK5HP4aUH1bDEJ_nE4ID8OM6rleoFgCC5U34e50EK1ttQrd41LnNPZJUk_qYYIuLk6uzHPuiz1VD9b7qubTnwUA'
  },
  {
    id: 3,
    title: 'Vintage Swiss Poster Aesthetic',
    model: 'Midjourney',
    category: 'Seni',
    description: 'Buat tata letak tipografi Gaya Swiss tahun 1960-an dengan tekstur grainy, blok warna datar, dan set ikon minimalis...',
    promptText: 'desain grafis 1960-an, gaya internasional Swiss, warna primer, grainy texture, minimalis...',
    author: '@retro_guru',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg7K7Bu6Y4JZiYimvYdThHXPe1rWn6s6Z4LasbSf3NF-5cioVNnqbqNRfmJjSTyffGHeO00Q0M63aKjTiMQKnnY3xl-IHRwI3eoLm3gUZ1Ns2jiaTfxEJQOkf8OJiv6Pv__fdWOVlSMV-Ks_cbL9ti9OQPoy7RKCn8hyBSvH2V_KiQ0Hcd5pNgTKOimND0fK7NtTi1NJRrCGyvvHkBZEO7FKGcS4D6J6hQLdAVNkjk_8TEy9dpKJwEcA'
  },
  {
    id: 4,
    title: 'Isometric Gaming Room',
    model: 'Stable Diffusion',
    category: '3D Render',
    description: 'Ruang isometrik 3D detail dengan pencahayaan nyaman, detail rumit, dan estetika clay-render yang lembut...',
    promptText: 'ruang gaming low-poly isometrik, octane render, pencahayaan global lembut, pastel color palette...',
    author: '@iso_master',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcDyeTCZHgvMGVRIb_xk7AvgJRC0AnWrjH4lQmw62oBPKmVenJH8g0qD2QzskftHYe3L1J0sJDUj92tsGe20naqnAfxUdpZI0m1W5unJmXsl4tWbbHJ8gxsCo9h7V5M4zkdfiwtqN-DycEJUoHpCNITPH6GGDic-oJ5t5ZwjNR4V2s6UmxvsNHFSy50TRhSJTYtiSlPz6uZpMG-B486i3jnFjyVBU_zf8ca5jFJpFu2LEm6tm9SGgC5A'
  },
  {
    id: 5,
    title: 'Epic Fantasy Landscape',
    model: 'Midjourney',
    category: 'Seni',
    description: 'Pegunungan megah dengan kastil kuno di atas awan, pencahayaan matahari terbenam yang dramatis...',
    promptText: 'epic fantasy landscape, floating castle, sunset cinematic lighting, 8k resolution, unreal engine 5...',
    author: '@fantasy_art',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqqSW4FftwEuczhW__4ZMLmANdZoAmH34XEhCUmZIq4BuetfylQ_KX3h9p6cwDAPmz-hYY945sR-sav8y97qJEsETfHRx2yewFCtDa_8btAOhRQqVCqqeFbjUqkj_UfxNykB0xWkakyhnuChSp1_hHowHRNmkVl0B9RVFLmiRvAE8vjJ0_v9YvEyxvhGlHZxeU1rZzJnOZyixwIFthrk-2rD6Yzv9CoqWVjxOObjVhNZn3Fsou_X945g'
  },
  {
    id: 6,
    title: 'Clean Code Architecture Refactor',
    model: 'GPT-4',
    category: 'Coding',
    description: 'Panduan lengkap untuk merestrukturisasi monolit besar menjadi arsitektur berbasis komponen yang bersih dan modular...',
    promptText: 'Refactor kode berikut menggunakan prinsip Clean Architecture, pisahkan layer service, repository, dan controller...',
    author: '@code_ninja',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIVjw3r5hDuozC-gaAMZI3ENvuLnLnC2mu7RfE3ETsMB_bJYFLahulOlZNcqPOwyBVXY7fQGvQYastqLJF0fCYtVGAuuht8BL_Xy0KFaBpcvEeTH2RA8ru-jh0CJwkBx5lklvHQmMri6CDfFFwOHuM_nXf2Ru0rHclK5HP4aUH1bDEJ_nE4ID8OM6rleoFgCC5U34e50EK1ttQrd41LnNPZJUk_qYYIuLk6uzHPuiz1VD9b7qubTnwUA'
  }
];

function AllPrompt() {
  const containerRef = useRef(null);
  const [filter, setFilter] = useState('Semua');
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [copied, setCopied] = useState(false);
  const [modalPos, setModalPos] = useState({ x: 0, y: 0 });

  const handleCopy = (text, e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredPrompts = filter === 'Semua' 
    ? dummyPrompts 
    : dummyPrompts.filter(p => p.category === filter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from('.allprompt-hero > *', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Animate cards on filter change or mount
  useEffect(() => {
    const cards = gsap.utils.toArray('.prompt-card-item');
    cards.forEach((card, i) => {
      const direction = i % 2 === 0 ? -1 : 1;
      gsap.fromTo(card,
        { x: direction * 70, opacity: 0, scale: 0.95 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: i * 0.08,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, [filter]);

  return (
    <div className="min-h-screen flex flex-col font-body-md text-on-surface bg-[#F3EAE3]" ref={containerRef}>
      <main className="flex-grow w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        
        {/* Hero Header */}
        <div className="mb-2xl flex flex-col md:flex-row md:items-end justify-between gap-md allprompt-hero">
          <div>
            <span className="bg-primary text-on-primary px-4 py-1 border-2 border-border rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-sm inline-block mb-md">
              REPOSITORI LENGKAP
            </span>
            <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl mb-xs font-['Syne'] font-black">
              Semua Prompt Tersedia
            </h1>
            <p className="text-on-surface-variant text-lg">
              Jelajahi seluruh koleksi prompt pilihan berkualitas tinggi untuk berbagai kebutuhan AI Anda.
            </p>
          </div>
          
          {/* Filter Pills */}
          <div className="flex flex-wrap gap-sm">
            {['Semua', 'Kreatif', 'Analisis', 'Seni', '3D Render', 'Coding'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 border-2 border-border rounded-full font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer ${
                  filter === cat ? 'bg-primary text-on-primary' : 'bg-surface text-on-surface'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Prompt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {filteredPrompts.map((item) => (
            <div
              key={item.id}
              onClick={(e) => {
                setModalPos({ x: e.clientX, y: e.clientY });
                setSelectedPrompt(item);
              }}
              className="bg-surface border-[3px] border-border rounded-xl p-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all group prompt-card-item cursor-pointer"
            >
              <div className="flex justify-between items-start mb-md">
                <div className="flex gap-sm">
                  <span className="bg-badge-cyan text-on-surface border-2 border-border rounded-full px-3 py-0.5 text-label-sm font-label-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {item.model}
                  </span>
                  <span className="bg-badge-orange text-on-surface border-2 border-border rounded-full px-3 py-0.5 text-label-sm font-label-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {item.category}
                  </span>
                </div>
                <button 
                  onClick={(e) => e.stopPropagation()} 
                  className="text-error active:scale-90 transition-transform cursor-pointer"
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: '"FILL" 0' }}
                  >
                    favorite
                  </span>
                </button>
              </div>
              <h3 className="font-headline-lg text-2xl font-bold mb-sm group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-on-surface-variant line-clamp-3 mb-md font-body-md">
                {item.description}
              </p>
              <div className="bg-surface-container-low border-2 border-border rounded-lg p-md mb-md font-code-sm text-code-sm overflow-hidden">
                <code className="block text-on-surface-variant">
                  {item.promptText}
                </code>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-xs">
                  <div className="w-8 h-8 rounded-full border-2 border-border overflow-hidden bg-surface-variant">
                    <img
                      className="w-full h-full object-cover"
                      alt="Avatar"
                      src={item.avatar}
                    />
                  </div>
                  <span className="text-label-sm font-label-sm">
                    {item.author}
                  </span>
                </div>
                <button 
                  onClick={(e) => handleCopy(item.promptText, e)}
                  className="bg-primary text-on-primary px-4 py-1.5 border-2 border-border rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:scale-95 cursor-pointer"
                >
                  {copied ? 'Disalin!' : 'Salin'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-highest border-t-[3px] border-black py-xl px-margin-mobile md:px-margin-desktop mt-2xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-md">
          <p className="text-on-surface-variant text-sm">
            © 2026 PromptVault AI
          </p>
          <Link
            to="/"
            className="bg-surface border-[2px] border-black px-md py-xs rounded-full text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all inline-block"
          >
            Kembali
          </Link>
        </div>
      </footer>

      {/* Modal Overlay */}
      {selectedPrompt && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 p-md overflow-y-auto flex items-center justify-center"
          onClick={() => setSelectedPrompt(null)}
        >
          <div
            className="bg-surface border-[3px] border-border rounded-xl p-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-2xl w-full my-auto animate-in fade-in zoom-in-95 duration-200"
            style={{
              transformOrigin: `${modalPos.x}px ${modalPos.y}px`
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-lg">
              <div>
                <h2 className="font-headline-xl text-3xl font-black mb-xs">
                  {selectedPrompt.title}
                </h2>
                <div className="flex gap-sm">
                  <span className="bg-badge-cyan text-on-surface border-2 border-border rounded-full px-3 py-0.5 text-label-sm font-label-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {selectedPrompt.model}
                  </span>
                  <span className="bg-badge-orange text-on-surface border-2 border-border rounded-full px-3 py-0.5 text-label-sm font-label-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {selectedPrompt.category}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedPrompt(null)}
                className="text-on-surface-variant hover:text-on-surface"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="space-y-lg">
              <div>
                <h3 className="text-label-sm font-label-sm text-on-surface-variant mb-xs">
                  Deskripsi
                </h3>
                <p className="font-body-md text-on-surface">
                  {selectedPrompt.description}
                </p>
              </div>

              <div>
                <h3 className="text-label-sm font-label-sm text-on-surface-variant mb-xs">
                  Prompt Text
                </h3>
                <div className="bg-surface-container-low border-2 border-border rounded-lg p-md font-code-sm text-code-sm overflow-x-auto">
                  <code className="block text-on-surface-variant whitespace-pre">
                    {selectedPrompt.promptText}
                  </code>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-xs">
                  <div className="w-10 h-10 rounded-full border-2 border-border overflow-hidden bg-surface-variant">
                    <img
                      className="w-full h-full object-cover"
                      alt="Avatar"
                      src={selectedPrompt.avatar}
                    />
                  </div>
                  <span className="text-label-sm font-label-sm font-bold">
                    {selectedPrompt.author}
                  </span>
                </div>
                <button
                  onClick={(e) => handleCopy(selectedPrompt.promptText, e)}
                  className="bg-primary text-on-primary px-4 py-1.5 border-2 border-border rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:scale-95 cursor-pointer"
                >
                  {copied ? 'Disalin!' : 'Salin Prompt'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AllPrompt;
