/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import { allPrompts } from "../data/prompts";

const PromptStoreContext = createContext();

const PROMPTS_STORAGE_KEY = "promptvault_user_prompts";

function getInitialPrompts() {
  try {
    const stored = JSON.parse(localStorage.getItem(PROMPTS_STORAGE_KEY));
    if (stored && Array.isArray(stored)) {
      const defaultIds = allPrompts.map((p) => p.id);
      const userPrompts = stored.filter((p) => !defaultIds.includes(p.id));
      return [...allPrompts, ...userPrompts];
    }
  } catch {
    // ignore parse errors
  }
  return [...allPrompts];
}

export function PromptStoreProvider({ children }) {
  const [prompts, setPrompts] = useState(getInitialPrompts);
  const [nextId, setNextId] = useState(() => {
    const userPrompts = prompts.filter((p) => p.id.startsWith("user-generated-"));
    const maxNum = userPrompts.reduce((max, p) => {
      const num = parseInt(p.id.replace("user-generated-", "")) || 0;
      return Math.max(max, num);
    }, 0);
    return maxNum + 1;
  });

  useEffect(() => {
    localStorage.setItem(PROMPTS_STORAGE_KEY, JSON.stringify(prompts));
  }, [prompts]);

  const addPrompt = (promptData) => {
    const newPrompt = {
      id: `user-generated-${nextId}`,
      modelClass:
        promptData.model === "GPT-4"
          ? "bg-badge-cyan"
          : promptData.model === "Midjourney v6"
            ? "bg-primary-container"
            : promptData.model === "Claude 3 Opus"
              ? "bg-secondary-container"
              : promptData.model === "DALL-E 3"
                ? "bg-badge-orange"
                : "bg-surface-container",
      categoryClass: "bg-badge-orange",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVuje3odSoHu732GKwugz-AkMep9ExpXfDI2M9SQFvnejvZfAHKyaPbyyTAqd80RvX36M5RiEfmvQV2ZH2d5mMo8Vy5kNb3mSOaxlsvb5raVAiMNrmOaeWm2gp8qWITV4guy40fDNCmhctCaQaMfi7sRq7CkORHPD93zj3p1jVzoU1FFUr63bFIW2FNUAEZuR2d3p2Ym2r9CDWzTOYMTGCRUD2j19BsEEvKBkfWNHxvLjkW8DhvEvxlg",
      author: "@new_creator",
      isSubmitted: true,
      submittedDate: new Date().toISOString().split("T")[0],
      ...promptData,
    };

    setPrompts((prev) => [newPrompt, ...prev]);
    setNextId((prev) => prev + 1);
    return newPrompt;
  };

  const getAllPrompts = () => prompts;
  const getSubmittedPrompts = () => prompts.filter((p) => p.isSubmitted);
  const getPromptById = (id) => prompts.find((p) => p.id === id);

  return (
    <PromptStoreContext.Provider
      value={{
        prompts,
        addPrompt,
        getAllPrompts,
        getSubmittedPrompts,
        getPromptById,
      }}
    >
      {children}
    </PromptStoreContext.Provider>
  );
}

export function usePromptStore() {
  const context = useContext(PromptStoreContext);
  if (!context) {
    throw new Error(
      "usePromptStore must be used within PromptStoreProvider"
    );
  }
  return context;
}
