import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../contexts/ThemeContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { usePromptStore } from '../contexts/PromptStoreContext';

gsap.registerPlugin(ScrollTrigger);

function AllPrompt() {
  const containerRef = useRef(null);
  const [filter, setFilter] = useState('Semua');
  const [search, setSearch] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [copied, setCopied] = useState(false);
  const [modalPos, setModalPos] = useState({ x: 0, y: 0 });
  
  const { theme } = useTheme();
  const { toggleFavorite, isFavorite } = useFavorites();
  const { prompts: allPromptsFromStore } = usePromptStore();

  const filteredPrompts = allPromptsFromStore.filter((p) => {
    const matchFilter = filter === 'Semua' || p.category === filter;
    const matchSearch =
      search === '' ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.author.toLowerCase().includes(search.toLowerCase()) ||
      p.model.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.allprompt-hero > *', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const cards = gsap.utils.toArray('.prompt-card-item');
    cards.forEach((card, i) => {
      const direction = i % 2 === 0 ? -1 : 1;
      gsap.fromTo(
        card,
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
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, [filter, search]);

  const handleCopy = (text, e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`min-h-screen flex flex-col font-body-md transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-background text-on-background'
          : 'text-on-surface bg-[#F3EAE3]'
      }`}
      ref={containerRef}
    >
      <main className="flex-grow w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <div className="mb-2xl flex flex-col md:flex-row md:items-end justify-between gap-md allprompt-hero">
          <div>
            <span
              className={`${
                theme === 'dark'
                  ? 'bg-primary text-on-primary border-border'
                  : 'bg-primary text-on-primary border-border'
              } px-4 py-1 border-2 rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-sm inline-block mb-md`}
            >
              REPOSITORI LENGKAP
            </span>
            <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl mb-xs font-['Syne'] font-black">
              Semua Prompt Tersedia
            </h1>
            <p
              className={`${
                theme === 'dark'
                  ? 'text-on-surface-variant'
                  : 'text-on-surface-variant'
              } text-lg`}
            >
              Jelajahi seluruh koleksi prompt pilihan berkualitas tinggi untuk berbagai kebutuhan AI Anda.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-md mb-xl">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
              search
            </span>
            <input
              type="text"
              placeholder="Cari prompt, model, penulis..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`${
                theme === 'dark'
                  ? 'bg-surface text-on-surface'
                  : 'bg-surface'
              } w-full border-2 border-border rounded-full px-lg py-sm pl-12 focus:ring-0 focus:border-border shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none transition-all`}
            />
          </div>
          <div className="flex flex-wrap gap-sm">
            {['Semua', 'Kreatif', 'Analisis', 'Seni', '3D Render', 'Coding'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 border-2 border-border rounded-full font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-primary text-on-primary'
                    : theme === 'dark'
                      ? 'bg-surface text-on-surface'
                      : 'bg-surface text-on-surface'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredPrompts.length === 0 ? (
          <div
            className={`${
              theme === 'dark' ? 'bg-surface text-on-surface' : 'bg-surface'
            } text-center py-2xl border-[3px] border-border rounded-xl p-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-lg mx-auto`}
          >
            <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-md block">
              search_off
            </span>
            <p
              className={`${
                theme === 'dark'
                  ? 'text-on-surface-variant'
                  : 'text-on-surface-variant'
              } text-lg font-body-md`}
            >
              Tidak ada prompt yang cocok dengan pencarian Anda.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {filteredPrompts.map((item) => (
              <div
                key={item.id}
                onClick={(e) => {
                  setModalPos({ x: e.clientX, y: e.clientY });
                  setSelectedPrompt(item);
                }}
                className={`${
                  theme === 'dark' ? 'bg-surface' : 'bg-surface'
                } border-[3px] border-border rounded-xl p-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all group prompt-card-item cursor-pointer`}
              >
                <div className="flex justify-between items-start mb-md">
                  <div className="flex gap-sm">
                    <span
                      className={`${
                        theme === 'dark'
                          ? `${item.modelClass} text-on-surface`
                          : `${item.modelClass} text-on-surface`
                      } border-2 border-border rounded-full px-3 py-0.5 text-label-sm font-label-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
                    >
                      {item.model}
                    </span>
                    <span
                      className={`${
                        theme === 'dark'
                          ? `${item.categoryClass} text-on-surface`
                          : `${item.categoryClass} text-on-surface`
                      } border-2 border-border rounded-full px-3 py-0.5 text-label-sm font-label-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
                    >
                      {item.category}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(item.id);
                    }}
                    className={`transition-transform cursor-pointer ${
                      isFavorite(item.id)
                        ? 'text-error active:scale-90'
                        : 'text-on-surface-variant active:scale-90'
                    }`}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: `"FILL" ${isFavorite(item.id) ? 1 : 0}` }}
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
                <div
                  className={`${
                    theme === 'dark' ? 'bg-surface-container-low' : 'bg-surface-container-low'
                  } border-2 border-border rounded-lg p-md mb-md font-code-sm text-code-sm overflow-hidden`}
                >
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
        )}
      </main>

      <footer className="bg-surface-container-highest border-t-[3px] border-black py-xl px-margin-mobile md:px-margin-desktop mt-2xl transition-colors duration-300">
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

      {selectedPrompt && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 p-md overflow-y-auto flex items-center justify-center"
          onClick={() => setSelectedPrompt(null)}
        >
          <div
            className={`${
              theme === 'dark' ? 'bg-surface' : 'bg-surface'
            } border-[3px] border-border rounded-xl p-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-2xl w-full my-auto animate-in fade-in zoom-in-95 duration-200`}
            style={{ transformOrigin: `${modalPos.x}px ${modalPos.y}px` }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-lg">
              <div className="flex-1">
                <h2 className="font-headline-xl text-3xl font-black mb-xs">
                  {selectedPrompt.title}
                </h2>
                <div className="flex gap-sm flex-wrap">
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
                <div
                  className={`${
                    theme === 'dark' ? 'bg-surface-container-low' : 'bg-surface-container-low'
                  } border-2 border-border rounded-lg p-md font-code-sm text-code-sm overflow-x-auto`}
                >
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
                <div className="flex items-center gap-sm">
                  <button
                    onClick={() => toggleFavorite(selectedPrompt.id)}
                    className={`px-3 py-1.5 border-2 border-border rounded-full font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:scale-95 cursor-pointer transition-all ${
                      isFavorite(selectedPrompt.id)
                        ? 'bg-error text-on-error'
                        : 'bg-surface text-on-surface-variant'
                    }`}
                  >
                    <span className="material-symbols-outlined align-middle">
                      favorite
                    </span>
                  </button>
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
        </div>
      )}
    </div>
  );
}

export default AllPrompt;
