import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { usePromptStore } from "../contexts/PromptStoreContext";

function Submit() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { addPrompt } = usePromptStore();

  const [formData, setFormData] = useState({
    title: "",
    model: "GPT-4",
    category: "Kreatif",
    description: "",
    promptText: "",
    tips: "",
    price: "",
    terms: false,
  });

  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      showToast("Judul prompt harus diisi", "error");
      return;
    }
    
    if (!formData.promptText.trim()) {
      showToast("Teks prompt harus diisi", "error");
      return;
    }
    
    if (!formData.terms) {
      showToast("Anda harus menyetujui ketentuan penjual", "error");
      return;
    }

    addPrompt({
      title: formData.title,
      model: formData.model,
      category: formData.category,
      description: formData.description || "Prompt berkualitas tinggi yang dikirimkan oleh kontributor komunitas.",
      promptText: formData.promptText,
      price: formData.price ? `Rp${parseInt(formData.price) * 15000}rb` : "Gratis",
      author: "@new_creator",
    });

    showToast("Prompt berhasil ditambahkan ke koleksi!", "success");
    
    // Reset form
    setFormData({
      title: "",
      model: "GPT-4",
      category: "Kreatif",
      description: "",
      promptText: "",
      tips: "",
      price: "",
      terms: false,
    });

    // Navigate to allprompt after 2 seconds
    setTimeout(() => {
      navigate("/allprompt");
    }, 2000);
  };

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
  };

  const modelCategories = {
    "GPT-4": ["Kreatif", "Analisis", "Coding"],
    "Midjourney v6": ["Seni", "Desain", "3D Render"],
    "Claude 3 Opus": ["Analisis", "Penulisan", "Riset"],
    "DALL-E 3": ["Seni", "Desain"],
    "Stable Diffusion XL": ["Seni", "3D Render", "Desain"],
  };

  return (
    <div
      className={`font-body-md min-h-screen flex flex-col justify-between transition-colors duration-300 ${
        theme === "dark"
          ? "bg-background text-on-background"
          : "bg-[#F3EAE3] text-[#1f1a20]"
      }`}
    >
      {/* Toast Notification */}
      {toast.show && (
        <div
          className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 px-lg py-sm rounded-full shadow-brutal flex items-center gap-sm transition-all ${
            toast.type === "success"
              ? "bg-secondary-container text-on-secondary-container"
              : "bg-error text-on-error"
          }`}
        >
          <span className="material-symbols-outlined">
            {toast.type === "success" ? "check_circle" : "error"}
          </span>
          <span className="font-label-sm">{toast.message}</span>
        </div>
      )}

      <main className="max-w-4xl mx-auto px-margin-mobile md:px-0 py-2xl flex-grow w-full">
        <header className="text-center mb-xl">
          <div
            className={`inline-block ${
              theme === "dark"
                ? "bg-secondary-fixed text-on-secondary-fixed-variant"
                : "bg-secondary-fixed text-on-secondary-fixed-variant"
            } px-md py-xs rounded-full border-2 border-black text-label-sm mb-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
          >
            BERBASIS KOMUNITAS
          </div>
          <h1 className="font-headline-xl text-headline-xl mb-md">
            Kontribusi ke Vault
          </h1>
          <p
            className={`${
              theme === "dark"
                ? "text-on-surface-variant"
                : "text-on-surface-variant"
            } max-w-2xl mx-auto`}
          >
            Bagikan prompt buatan Anda kepada dunia. Kiriman berkualitas membantu
            para kreator membuka potensi penuh AI. Bergabunglah dengan pasar
            kami dan hasilkan pendapatan dari logika kreatif Anda.
          </p>
        </header>

        <section
          className={`${
            theme === "dark" ? "bg-surface" : "bg-surface"
          } rounded-xl border-[3px] border-black p-lg md:p-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-2xl`}
        >
          <form className="space-y-lg" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-sm">
              <label
                className="font-label-sm text-label-sm text-primary uppercase tracking-wider"
                htmlFor="title"
              >
                Judul Prompt
              </label>
              <input
                className={`${
                  theme === "dark"
                    ? "bg-surface-container-low text-on-surface"
                    : "bg-surface-container-low"
                } w-full p-md rounded-lg font-body-md border-[2.5px] border-black focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none transition-all`}
                id="title"
                placeholder="contoh: Hyper-Realistic Cyberpunk Portrait Generator"
                type="text"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

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
                    className={`${
                      theme === "dark"
                        ? "bg-surface-container-low text-on-surface"
                        : "bg-surface-container-low"
                    } w-full p-md rounded-lg font-body-md appearance-none border-[2.5px] border-black focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none transition-all`}
                    id="model"
                    value={formData.model}
                    onChange={handleChange}
                  >
                    {["GPT-4", "Midjourney v6", "Claude 3 Opus", "DALL-E 3", "Stable Diffusion XL"].map(
                      (model) => (
                        <option key={model}>{model}</option>
                      )
                    )}
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
                    className={`${
                      theme === "dark"
                        ? "bg-surface-container-low text-on-surface"
                        : "bg-surface-container-low"
                    } w-full p-md rounded-lg font-body-md appearance-none border-[2.5px] border-black focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none transition-all`}
                    id="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    {modelCategories[formData.model]?.map((cat) => (
                      <option key={cat}>{cat}</option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-sm">
              <label
                className="font-label-sm text-label-sm text-primary uppercase tracking-wider"
                htmlFor="description"
              >
                Deskripsi Singkat
              </label>
              <textarea
                className={`${
                  theme === "dark"
                    ? "bg-surface-container-low text-on-surface"
                    : "bg-surface-container-low"
                } w-full p-md rounded-lg font-body-md resize-none border-[2.5px] border-black focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none transition-all`}
                id="description"
                placeholder="Jelaskan apa yang prompt ini bisa lakukan..."
                rows="2"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="flex flex-col gap-sm">
              <label
                className="font-label-sm text-label-sm text-primary uppercase tracking-wider"
                htmlFor="promptText"
              >
                Teks Prompt
              </label>
              <div className="relative">
                <textarea
                  className={`${
                    theme === "dark"
                      ? "bg-surface-container-lowest text-on-surface-variant"
                      : "bg-surface-container-lowest text-on-surface-variant"
                  } w-full p-md rounded-lg font-code-sm text-code-sm custom-scrollbar resize-none border-[2.5px] border-black focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none transition-all`}
                  id="promptText"
                  placeholder="Tempelkan prompt hasil rekayasa Anda di sini..."
                  rows="6"
                  value={formData.promptText}
                  onChange={handleChange}
                  required
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

            <div className="flex flex-col gap-sm md:w-1/2">
              <label
                className="font-label-sm text-label-sm text-primary uppercase tracking-wider"
                htmlFor="price"
              >
                Nilai Pasar (USD)
              </label>
              <div className="flex items-center gap-sm">
                <div
                  className={`flex items-center ${
                    theme === "dark"
                      ? "bg-surface-container-low text-on-surface"
                      : "bg-surface-container-low"
                  } rounded-lg px-md w-full border-[2.5px] border-black`}
                >
                  <span className="font-bold">$</span>
                  <input
                    className="bg-transparent border-none focus:ring-0 w-full p-md font-body-md focus:outline-none"
                    id="price"
                    placeholder="0.00"
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </div>
                <span className="material-symbols-outlined text-secondary text-2xl">
                  monetization_on
                </span>
              </div>
            </div>

            <div className="pt-lg border-t-[2.5px] border-surface-variant flex flex-col md:flex-row items-center justify-between gap-lg">
              <div className="flex items-center gap-sm">
                <input
                  className="w-6 h-6 border-[2.5px] border-black rounded text-primary focus:ring-primary"
                  id="terms"
                  type="checkbox"
                  checked={formData.terms}
                  onChange={handleChange}
                />
                <label
                  className={`${
                    theme === "dark"
                      ? "text-on-surface"
                      : "text-on-surface"
                  } text-label-sm`}
                  htmlFor="terms"
                >
                  Saya menyetujui{" "}
                  <a className="text-primary underline" href="#">
                    Ketentuan Penjual
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto bg-primary-container text-on-primary-container px-2xl py-md rounded-full border-[3px] border-black font-h2 text-xl font-bold flex items-center justify-center gap-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
              >
                Setorkan ke Vault{" "}
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Submit;
