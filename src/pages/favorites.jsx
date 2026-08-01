import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../contexts/ThemeContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { usePromptStore } from '../contexts/PromptStoreContext';

gsap.registerPlugin(ScrollTrigger);

function Favorites() {
  const containerRef = useRef(null);
  const [search, setSearch] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [copied, setCopied] = useState(false);
  const [modalPos, setModalPos] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();
  const { favoriteIds, toggleFavorite, isFavorite } = useFavorites();
  const { prompts: allPrompts } = usePromptStore();

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const favoritedPrompts = allPrompts.filter((p) => {
    const isFav = favoriteIds.includes(p.id);
    const matchSearch =
      search === '' ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.author.toLowerCase().includes(search.toLowerCase()) ||
      p.model.toLowerCase().includes(search.toLowerCase());
    return isFav && matchSearch;
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.favorites-hero > *', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col font-body-md transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-background text-on-background'
          : 'bg-[#F3EAE3] text-on-surface'
      }`}
      ref={containerRef}
    >
      <main className="flex-grow w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <div className="mb-xl flex flex-col md:flex-row md:items-end justify-between gap-md favorites-hero">
          <div>
            <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl mb-xs font-['Syne'] font-black">
              Favorit Tersimpan Anda
            </h1>
            <div className="inline-block bg-tertiary-container text-on-tertiary-container px-4 py-1 border-2 border-border rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {favoriteIds.length} prompt tersimpan
            </div>
          </div>
          <div className="flex gap-sm w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <input
                className="bg-surface border-2 border-border rounded-full px-lg py-sm pl-12 focus:ring-0 focus:border-border w-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none"
                placeholder="Cari favorit Anda..."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
                search
              </span>
            </div>
          </div>
        </div>

        {favoritedPrompts.length === 0 ? (
          <div className="text-center py-2xl bg-surface border-[3px] border-border rounded-xl p-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-lg mx-auto">
            <span className="material-symbols-outlined text-6xl text-error mb-md block">
              favorite_border
            </span>
            <h3 className="font-headline-lg text-2xl font-bold mb-sm">
              Belum Ada Favorit
            </h3>
            <p className="text-on-surface-variant mb-lg">
              Anda belum menyimpan prompt apapun ke dalam daftar favorit. Jelajahi repositori dan klik ikon hati untuk menyimpan prompt favorit Anda.
            </p>
            <Link
              to="/allprompt"
              className="bg-primary text-on-primary px-lg py-md border-2 border-border rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all inline-block"
            >
              Jelajahi Semua Prompt
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter favorites-grid">
            {favoritedPrompts.map((item) => (
              <div
                key={item.id}
                onClick={(e) => {
                  setModalPos({ x: e.clientX, y: e.clientY });
                  setSelectedPrompt(item);
                }}
                className="bg-surface border-[3px] border-border rounded-xl p-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all group favorite-card cursor-pointer"
              >
                <div className="flex justify-between items-start mb-md">
                  <div className="flex gap-sm">
                    <span className={`${item.modelClass} text-on-surface border-2 border-border rounded-full px-3 py-0.5 text-label-sm font-label-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                      {item.model}
                    </span>
                    <span className={`${item.categoryClass} text-on-surface border-2 border-border rounded-full px-3 py-0.5 text-label-sm font-label-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                      {item.category}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(item.id);
                    }}
                    className="text-error active:scale-90 transition-transform cursor-pointer"
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: '"FILL" 1' }}
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
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(item.promptText);
                    }}
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

      <footer className="bg-surface-container-highest border-t-[3px] border-black py-2xl px-margin-mobile md:px-margin-desktop site-footer transition-colors duration-300">
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
            className="bg-surface border-[3px] border-border rounded-xl p-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-2xl w-full my-auto animate-in fade-in zoom-in-95 duration-200"
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
                <h3 className="text-label-sm font-label-sm text-on-surface-variant mb-xs">Deskripsi</h3>
                <p className="font-body-md text-on-surface">{selectedPrompt.description}</p>
              </div>
              <div>
                <h3 className="text-label-sm font-label-sm text-on-surface-variant mb-xs">Prompt Text</h3>
                <div className="bg-surface-container-low border-2 border-border rounded-lg p-md font-code-sm text-code-sm overflow-x-auto">
                  <code className="block text-on-surface-variant whitespace-pre">
                    {selectedPrompt.promptText}
                  </code>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-xs">
                  <div className="w-10 h-10 rounded-full border-2 border-border overflow-hidden bg-surface-variant">
                    <img className="w-full h-full object-cover" alt="Avatar" src={selectedPrompt.avatar} />
                  </div>
                  <span className="text-label-sm font-label-sm font-bold">{selectedPrompt.author}</span>
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
                    onClick={() => handleCopy(selectedPrompt.promptText)}
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

export default Favorites;
