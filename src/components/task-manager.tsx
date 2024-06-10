import { useState, useEffect, useCallback } from "react";
import { TaskForm } from "./task-form";
import { TaskList } from "./task-list";
import { SearchInput } from "./search-input";
import { Switch } from "@/components/ui/switch";
import { Label } from "./ui/label";
import { useLanguage } from "@/hooks/use-language";
import { cn } from "@/lib/utils";

export interface Task {
  id: number;
  name: string;
  time: string;
  completed: boolean;
}

export const TaskManager = () => {
  const { language, setLanguage } = useLanguage();

  const [tasks, setTasks] = useState<Task[]>(() => {
    const tasksInLocalStorage = localStorage.getItem("tasks");
    return tasksInLocalStorage ? JSON.parse(tasksInLocalStorage) : [];
  });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback((task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  }, []);

  const deleteTask = useCallback((id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, []);

  const completeTaskHandler = useCallback((id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="w-full flex items-center sm:flex-row flex-col gap-4">
        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <TaskForm addTask={addTask} />
        <div className="flex items-center space-x-2">
          <Label
            className={cn(
              "",
              language === "AR" ? "ml-2 order-1" : "ml-2 order-2"
            )}
          >
            EN
          </Label>
          <Switch
            id="language"
            onCheckedChange={() => {
              setLanguage(language === "AR" ? "EN" : "AR");
            }}
          />
          <Label
            className={cn(language === "EN" ? "-order-1 ml-2" : "-order-1")}
          >
            AR
          </Label>
        </div>
      </div>
      <div className="h-[calc(100vh-150px)] pr-2 box-content w-full overflow-y-auto">
        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          completeTask={completeTaskHandler}
        />
      </div>
    </>
  );
};
