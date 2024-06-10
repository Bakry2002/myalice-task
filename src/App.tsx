import { useEffect } from "react";
import "./App.css";
import { TaskManager } from "./components/task-manager";
import { useLanguage } from "./hooks/use-language";
import { cn } from "./lib/utils";

function App() {
  const { language } = useLanguage();

  // Quick way to manipulate the html tag
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "AR" ? "rtl" : "ltr";
  }, [language]);

  return (
    <div
      className={cn(
        "container pt-10 pb-4 max-w-2xl flex flex-col gap-y-10 items-center justify-center mx-auto w-full",
        language === "AR" ? "rtl" : "ltr"
      )}
    >
      <TaskManager />
    </div>
  );
}

export default App;
