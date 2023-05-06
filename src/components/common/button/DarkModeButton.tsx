import { useState } from "react";

const DarkModeButton = () => {
  const [dark, setDark] = useState<string>("");

  const toggleDarkMode = () => {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
      setDark("");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark("dark");
    }
  };
  return (
    <div className="lg:w-1/6 inline-flex lg:justify-end ml-5 lg:ml-0">
      <button
        className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 dark:bg-slate-700 dark:hover:bg-slate-600"
        onClick={toggleDarkMode}
      >
        {dark !== "dark" ? <>다크</> : <>태양</>}
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
};

export default DarkModeButton;