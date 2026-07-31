import { useEffect, useRef, useState } from 'react';
import './home.css';

function Home() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    return (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  });

  const [modal, setModal] = useState({ open: false, title: '', prompt: '' });
  const [toastVisible, setToastVisible] = useState(false);
  const [faqOpen, setFaqOpen] = useState([false, false]);
  const sectionRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    if (modal.open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modal.open]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const targets = sectionRef.current
      ? sectionRef.current.querySelectorAll('.reveal')
      : [];
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const openModal = (title, prompt) => {
    setModal({ open: true, title, prompt });
  };

  const closeModal = () => {
    setModal({ open: false, title: '', prompt: '' });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const copyToClipboard = () => {
    if (!modal.prompt) return;
    navigator.clipboard.writeText(modal.prompt).then(() => {
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 3000);
    });
  };

  const toggleFaq = (index) => {
    setFaqOpen((prev) => prev.map((v, i) => (i === index ? !v : v)));
  };

  const promptCards = [
    {
      featured: true,
      model: 'Midjourney v6',
      modelClass: 'bg-tertiary-container text-on-tertiary-container',
      price: '$4.99',
      title: 'Neon Cyberpunk Dream',
      description:
        'Generate stunningly detailed rainy streets with deep purple and cyan color grading.',
      preview:
        'A hyper-realistic cyberpunk city at night, neon lights reflecting on wet pavement...',
      fullPrompt:
        'A hyper-realistic cyberpunk city at night, neon lights reflecting on wet pavement, cinematic lighting, 8k resolution, shot on 35mm lens --v 6.0',
      author: 'by Pixerati',
      rating: 4.9,
      copies: '1.2k',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA1vdidxFKCM5ZBbnxcuKHtyhTa-0PH93EVGUj1lKspWwQg3MStEKiX7mrJtNVpSbp0eow_QfY2VAtW2AqLZa-dQAmN6YjmRR3S66qQfT_5ythix7_wBxUjNxsi5kGjklujs7nvoi3iuhVjl-UOqtKgFoyNLKTIPefJi2xNWQCFDDWZjR7phRC-QyN_A8X3j5_XB0UWSSVNt_XqK2tt6M15cLv56f5YdLOZESoPtmShIxwWlYajoz2v',
    },
    {
      featured: false,
      model: 'ChatGPT-4',
      modelClass: 'bg-secondary-container text-on-secondary-container',
      price: 'Free',
      title: 'React Expert Architect',
      description:
        'Professional code reviewer persona for large-scale React applications.',
      preview:
        'Act as a Senior Software Architect. Review this component and suggest optimizations...',
      fullPrompt:
        'Act as a Senior Software Architect. Review this component and suggest optimizations for performance, accessibility, and clean code patterns.',
      author: 'by DevMaster',
      rating: 5.0,
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBxB-WfCQRt1M6Amq8KdxHqinwVhEZ74B2F-6Q53Gnl8mdusyMLWPdyq4VArcKOTL0liA0mWsBVx0mnmF04O8AuRk0vIud7gsn9YuFuhrRrH0A-0tpLdH7IGhhKyzyw2xOoUA05BePGQV8za4xOV2H0EC9s9O2oycyCZpmXagNUsaS-BA0vntB72GyZpLKwJLZDBFPuV2ppifWyxVYyIwWWtQahIZsRf1pR4j8SiBKssEZUxWN37p7E',
    },
    {
      featured: false,
      model: 'Claude 3.5',
      modelClass: 'bg-primary-container text-on-primary-container',
      price: '$2.50',
      title: 'SaaS Sales Engine',
      description:
        'Copywriting prompt engineered for conversion-focused landing pages.',
      preview:
        'Write a high-converting sales page for a SaaS product that solves [PROBLEM]...',
      fullPrompt:
        'Write a high-converting sales page for a SaaS product that solves [PROBLEM] for [AUDIENCE].',
      author: 'by CopyQueen',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAKBuFR_Sp9Kte1lR9XI38WTStMIjCul94jaAZtHBMAGWRJFXPsEYEQE2fCFz3uHCHyccCCVxXrMo7uGIitR3Ll89dOwXqgY9WwimkIEiObqiI82t85W5J8RbY0-vAskrnzJ9GA_OaGEMwrkFcTRKOnDZqSxV3Q-0krn1brKGTFTcCe5owQJrSqyzTgB4CfnBZISsNTT-QuLiC_kOrlgvV0t4WIXdvhUYC00uS0rQKNPwnUOgx3ZVnJ',
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container transition-colors duration-300"
    >
      {/* Navbar */}
      <header className="sticky top-4 z-50 w-full px-margin-mobile md:px-margin-desktop">
        <nav className="bg-surface border-[3px] border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between px-lg py-sm max-w-7xl mx-auto dark:border-white transition-all">
          <div className="flex items-center gap-sm">
            <span className="font-headline-lg text-headline-lg font-black text-on-surface uppercase italic tracking-tighter">
              AIPromptLibrary
            </span>
          </div>
          <div className="hidden md:flex items-center gap-lg">
            <a
              className="font-label-sm text-label-sm text-primary dark:text-primary-container font-bold underline decoration-2 underline-offset-4 hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              href="#"
            >
              Explore
            </a>
            <a
              className="font-label-sm text-label-sm text-on-surface font-medium hover:text-primary transition-all"
              href="#"
            >
              Creators
            </a>
            <a
              className="font-label-sm text-label-sm text-on-surface font-medium hover:text-primary transition-all"
              href="#"
            >
              Vaults
            </a>
            <a
              className="font-label-sm text-label-sm text-on-surface font-medium hover:text-primary transition-all"
              href="#"
            >
              Pricing
            </a>
          </div>
          <div className="flex items-center gap-md">
            <button
              className="w-10 h-10 border-[3px] border-black dark:border-white rounded-full bg-white dark:bg-surface-bright flex items-center justify-center hover:bg-surface-container transition-colors click-press"
              onClick={() => setDark((prev) => !prev)}
              aria-label="Toggle dark mode"
            >
              <span className="material-symbols-outlined dark:hidden">
                dark_mode
              </span>
              <span className="material-symbols-outlined hidden dark:block">
                light_mode
              </span>
            </button>
            <div className="hidden sm:block border-[3px] border-black dark:border-white rounded-full p-xs hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] transition-all cursor-pointer">
              <img
                alt="Avatar"
                className="w-8 h-8 rounded-full border border-black dark:border-white"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlDpU8GENeQa6qARiS4Sq6MbL4YrlKH_l9DkQ6rphsnMdyqZWfrNXJH-LWcnzHJ3Dq7D8u54gUt9tldqllyor4bfb0ED1vpjQHpeYe4x_BgeWAUk_gYQHi5V-HZIYbEYYgfwSTmWOzwdMNosUUvZ-fLzOiAzvRKwJwU5ecevH8OwQHSvSUkpl_ZVRbsSLZNTjWB8kgbC5M5mbfV637Ytdl-UrQ5Kuq_1q6-EHEghsNokS7XKqA8bLK"
              />
            </div>
            <button className="bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold px-lg py-sm rounded-full border-[3px] border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] active:scale-95 duration-100 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all click-press">
              Vault Access
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-2xl pb-xl px-margin-mobile md:px-margin-desktop flex flex-col items-center text-center reveal">
        <div className="max-w-4xl">
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background mb-lg leading-[0.95]">
            Unlock the Best <br />
            <span className="bg-secondary-container dark:bg-secondary px-4 py-1 border-[3px] border-black dark:border-white inline-block rotate-[-2deg] text-shadow-hard text-white dark:text-on-secondary">
              AI Prompts
            </span>
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mb-xl">
            The world&apos;s most curated library of high-performing prompts for
            ChatGPT, Midjourney, and Claude. Stop hallucinating, start creating.
          </p>
          <div className="flex flex-wrap justify-center gap-lg">
            <button className="bg-primary-container text-on-primary-container font-headline-lg-mobile px-xl py-md rounded-full border-[3px] border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.3)] transition-all active:translate-x-0 active:translate-y-0 active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] click-press">
              Explore Vault
            </button>
            <button className="bg-secondary-container text-on-secondary-container font-headline-lg-mobile px-xl py-md rounded-full border-[3px] border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-0 active:translate-y-0 click-press">
              Submit Prompt
            </button>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="px-margin-mobile md:px-margin-desktop mb-xl reveal">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-lg items-center">
            <div className="relative w-full lg:flex-1">
              <span className="material-symbols-outlined absolute left-lg top-1/2 -translate-y-1/2 text-on-surface-variant">
                search
              </span>
              <input
                className="w-full bg-white border-[3px] border-black dark:border-white rounded-full py-md pl-14 pr-lg font-body-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] focus:outline-none focus:ring-4 focus:ring-primary/20 dark:bg-surface-bright"
                placeholder="Search for 'Cinematic Portraits'..."
                type="text"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-sm">
              <button className="px-lg py-sm bg-primary text-white border-[3px] border-black dark:border-white rounded-full font-label-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] click-press">
                All Models
              </button>
              <button className="px-lg py-sm bg-surface dark:bg-surface-bright border-[3px] border-black dark:border-white rounded-full font-label-sm hover:bg-surface-container-highest transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] click-press">
                ChatGPT-4
              </button>
              <button className="px-lg py-sm bg-surface dark:bg-surface-bright border-[3px] border-black dark:border-white rounded-full font-label-sm hover:bg-surface-container-highest transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] click-press">
                Midjourney v6
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Prompt Grid */}
      <section className="px-margin-mobile md:px-margin-desktop py-xl reveal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {promptCards.map((card) => (
            <div
              key={card.title}
              className="group relative bg-white border-[3px] border-black dark:border-white rounded-xl p-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] neubrutal-card-hover transition-all cursor-pointer"
              onClick={() => openModal(card.title, card.fullPrompt)}
            >
              {card.featured && (
                <div className="absolute -top-4 -right-2 bg-error text-white font-label-sm px-sm py-xs border-[3px] border-black dark:border-white rounded-lg animate-float z-10">
                  FEATURED!
                </div>
              )}
              <div className="flex items-center justify-between mb-md">
                <span
                  className={`px-sm py-1 ${card.modelClass} border-[2px] border-black dark:border-white rounded-full font-label-sm text-[12px]`}
                >
                  {card.model}
                </span>
                <span className="font-headline-lg-mobile text-primary dark:text-primary-container">
                  {card.price}
                </span>
              </div>
              <h3 className="font-h2 text-h2 mb-sm text-[24px]">{card.title}</h3>
              <p className="font-body-md text-on-surface-variant line-clamp-2 mb-md">
                {card.description}
              </p>
              <div className="bg-surface-container dark:bg-surface-dim rounded-lg border-[2px] border-black dark:border-white p-md mb-md font-mono text-[13px] text-on-surface opacity-75 overflow-hidden">
                {card.preview}
              </div>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-xs">
                  <img
                    alt="Avatar"
                    className="w-8 h-8 rounded-full border-2 border-black dark:border-white"
                    src={card.avatar}
                  />
                  <span className="font-label-sm text-[12px]">{card.author}</span>
                </div>
                <div className="flex items-center gap-sm">
                  {card.rating && (
                    <div className="flex items-center text-secondary dark:text-secondary-fixed font-bold">
                      <span className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                      <span className="ml-1">{card.rating}</span>
                    </div>
                  )}
                  {card.copies && (
                    <div className="flex items-center text-on-surface-variant font-medium">
                      <span className="material-symbols-outlined text-[18px]">
                        content_copy
                      </span>
                      <span className="ml-1">{card.copies}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-xl flex justify-center">
          <button className="bg-surface dark:bg-surface-bright border-[3px] border-black dark:border-white px-xl py-md rounded-full font-headline-lg-mobile shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:bg-primary-container transition-all neubrutal-btn-hover click-press">
            Load More Prompts
          </button>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="my-2xl px-margin-mobile md:px-margin-desktop reveal">
        <div className="max-w-7xl mx-auto bg-tertiary border-[4px] border-black dark:border-white rounded-[32px] p-xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.2)] relative overflow-hidden flex flex-col md:flex-row items-center gap-xl">
          <div className="flex-1 text-white relative z-10">
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-lg text-white mb-lg">
              10,000+ Curated <br /> AI Prompts
            </h2>
            <p className="font-body-md text-body-md text-tertiary-fixed mb-xl max-w-lg">
              We manually vet every single prompt submitted to our vault. No
              spam, no fluff, just high-quality results for your creative and
              professional workflows.
            </p>
            <button className="bg-secondary-container text-on-secondary-container font-headline-lg-mobile px-xl py-md rounded-full border-[3px] border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all click-press">
              Browse All Vaults
            </button>
          </div>
          <div className="flex-1 relative h-64 md:h-96 w-full opacity-50 dark:opacity-20"></div>
        </div>
      </section>

      {/* Marquee */}
      <div className="w-full bg-secondary py-4 border-y-[4px] border-black dark:border-white rotate-[-1deg] marquee overflow-hidden">
        <div className="marquee-content font-headline-lg-mobile text-white uppercase flex gap-xl items-center">
          <span>★ Fresh Prompts Daily ★</span>
          <span>Midjourney V6 ★</span>
          <span>ChatGPT-4 ★</span>
          <span>Claude 3.5 ★</span>
          <span>Stable Diffusion ★</span>
          <span>No More Hallucinations ★</span>
          <span>★ Fresh Prompts Daily ★</span>
          <span>Midjourney V6 ★</span>
          <span>ChatGPT-4 ★</span>
          <span>Claude 3.5 ★</span>
          <span>Stable Diffusion ★</span>
          <span>No More Hallucinations ★</span>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-2xl px-margin-mobile md:px-margin-desktop bg-surface-container-low reveal">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline-lg text-center mb-xl">
            Common Questions
          </h2>
          <div className="space-y-lg">
            {[
              {
                question: 'How do I get access to the prompts?',
                answer:
                  'Once you purchase a prompt or a vault subscription, you get instant access to the prompt strings, parameters, and negative prompt fields in your dashboard.',
              },
              {
                question: 'Can I sell my own prompts here?',
                answer:
                  'Yes! Apply to be a Creator. We offer the highest commission rates in the industry at 85% per sale.',
              },
            ].map((item, index) => (
              <div
                key={item.question}
                className="bg-white dark:bg-surface-bright border-[3px] border-black dark:border-white rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
              >
                <button
                  className="w-full flex items-center justify-between p-lg text-left font-headline-lg-mobile hover:bg-surface-container transition-all"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{item.question}</span>
                  <span
                    className={`material-symbols-outlined transform transition-transform ${
                      faqOpen[index] ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                <div
                  className={`faq-content p-lg pt-0 font-body-md border-t-[3px] border-black dark:border-white ${
                    faqOpen[index] ? 'block' : 'hidden'
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-2xl px-margin-mobile md:px-margin-desktop reveal">
        <div className="max-w-5xl mx-auto bg-primary-container border-[4px] border-black dark:border-white rounded-[32px] p-xl flex flex-col md:flex-row items-center justify-between gap-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
          <div className="text-center md:text-left">
            <h2 className="font-headline-lg-mobile md:text-headline-lg text-on-primary-container mb-sm">
              Level up your AI game
            </h2>
            <p className="font-body-md text-on-primary-container/80">
              Get the weekly Top 10 prompts delivered to your inbox.
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-md">
            <input
              className="bg-white dark:bg-surface-bright border-[3px] border-black dark:border-white rounded-full px-lg py-md font-body-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none flex-grow"
              placeholder="you@example.com"
              type="email"
            />
            <button className="bg-black dark:bg-white text-white dark:text-black px-lg py-md rounded-full font-label-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all click-press">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container dark:bg-surface-bright border-t-[3px] border-black dark:border-white py-xl px-margin-mobile md:px-margin-desktop">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex -space-x-4 mb-xl">
            <img
              alt="User 1"
              className="w-16 h-16 rounded-full border-4 border-black dark:border-white bg-secondary-container"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWf9xD54hX4su0etf73yL19Xmq8YPjVOPnMkdh6eLzM5Ie0Pr1Ksbj3gnDLOTgj_LkiqjMickSMERfVk6r3gQgYK27h1IahxaS_x5qXKCeP4PlLXzud1cYmI6zx0aF2Ly_RiYf_L1B4hEkw2cZdZ4FgXE4aPYy2UKe1q0SnVkX-HhuWsHLimbEMfe5YG0bSYNqbjkPdXJBD624Fm8IoB-9vMOHql4h1-UtQgB1D283EUmHpUrne_nD"
            />
            <img
              alt="User 2"
              className="w-16 h-16 rounded-full border-4 border-black dark:border-white bg-primary-container"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACro0uAzsdIOhgYqN-c1wiFjXLIfs56WDZIOpnMTzD6lJrPY81M9k7rdcwv57ERHGnXimYcgV_UDhtYZ_eAYJQX9XoS2xWL49Ilip7fDKnRD_ePwnTuTFZg8wc3POXa1BMZgyJk-YzoueXvTia9_aS4GkzZwGqj-Yz5MPRXuK_rFYnuXwe0PeH7ziW4feSoyMQl-dFqJ2OaMrlDZabDatMR9IdtgMIOEYHTwKoCAzlR5wYStLycrln"
            />
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-lg pt-lg border-t-2 border-black/10 dark:border-white/10">
            <div className="flex flex-col items-center md:items-start gap-sm">
              <span className="font-headline-lg-mobile text-headline-lg-mobile font-black text-on-surface uppercase italic">
                PromptVault
              </span>
              <p className="font-body-md text-on-surface-variant text-center md:text-left">
                © 2024 PromptVault AI. Built for the curious.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-lg">
              <a
                className="font-body-md text-on-surface hover:text-primary transition-colors"
                href="#"
              >
                Twitter
              </a>
              <a
                className="font-body-md text-on-surface hover:text-primary transition-colors"
                href="#"
              >
                Discord
              </a>
              <a
                className="font-body-md text-on-surface hover:text-primary transition-colors"
                href="#"
              >
                Docs
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal Drawer */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] ${
          modal.open ? 'flex' : 'hidden'
        } items-center justify-center p-md transition-all duration-300`}
        onClick={closeModal}
      >
        <div
          className="bg-white dark:bg-surface-bright border-[4px] border-black dark:border-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.2)] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-lg border-b-[3px] border-black dark:border-white bg-primary-container dark:bg-primary flex justify-between items-center">
            <h3 className="font-headline-lg-mobile text-on-primary-container dark:text-white">
              {modal.title || 'Prompt Details'}
            </h3>
            <button
              className="w-10 h-10 border-[3px] border-black dark:border-white rounded-full bg-white dark:bg-surface-bright flex items-center justify-center hover:bg-error hover:text-white transition-colors"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="p-lg overflow-y-auto">
            <div className="mb-lg">
              <label className="font-label-sm text-[12px] uppercase opacity-60 mb-xs block">
                Model Configuration
              </label>
              <div className="flex gap-sm">
                <span className="px-sm py-1 bg-surface-container-highest dark:bg-surface-dim border-[2px] border-black dark:border-white rounded-lg font-mono text-[13px]">
                  GPT-4-Turbo
                </span>
              </div>
            </div>
            <div className="mb-lg">
              <label className="font-label-sm text-[12px] uppercase opacity-60 mb-xs block">
                The Prompt
              </label>
              <div className="relative group">
                <pre className="bg-surface-container dark:bg-surface-dim border-[3px] border-black dark:border-white rounded-xl p-lg font-mono text-body-md whitespace-pre-wrap break-words min-h-[150px]">
                  {modal.prompt}
                </pre>
                <button
                  className="absolute top-4 right-4 bg-white dark:bg-surface-bright border-[2px] border-black dark:border-white p-2 rounded-lg hover:bg-secondary hover:text-white transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 click-press"
                  onClick={copyToClipboard}
                  aria-label="Copy prompt"
                >
                  <span className="material-symbols-outlined">
                    content_copy
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="p-lg bg-surface-container dark:bg-surface-dim border-t-[3px] border-black dark:border-white flex justify-between items-center">
            <button className="bg-black dark:bg-white text-white dark:text-black px-xl py-md rounded-full font-label-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all click-press">
              Unlock Full Parameters
            </button>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <div
        className={`fixed bottom-lg left-1/2 -translate-x-1/2 bg-secondary text-white border-[3px] border-black dark:border-white px-xl py-md rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform translate-y-32 transition-all duration-300 z-[110] font-label-sm flex items-center gap-sm ${
          toastVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-32 opacity-0 pointer-events-none'
        }`}
      >
        <span className="material-symbols-outlined">check_circle</span>
        Prompt copied to clipboard!
      </div>
    </div>
  );
}

export default Home;