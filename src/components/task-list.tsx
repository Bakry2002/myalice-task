import { Task } from "./task-manager";
import { useLanguage } from "@/hooks/use-language";
import en from "../assets/lang/en.json";
import ar from "../assets/lang/ar.json";
import { TaskListItem } from "./task-list-item";

interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: number) => void;
  completeTask: (id: number) => void;
}
export const TaskList = ({
  deleteTask,
  tasks,
  completeTask,
}: TaskListProps) => {
  const { language } = useLanguage();
  const translations = language === "EN" ? en : ar;
  return (
    <div className="flex items-center flex-col gap-y-4 w-full">
      {tasks.length === 0 && (
        <p className="text-center text-gray-500">
          {translations.tasks.noTasks}
        </p>
      )}
      {tasks.map((task, index) => (
        <TaskListItem
          key={index}
          id={task.id}
          name={task.name}
          time={task.time}
          onDelete={deleteTask}
          onCompletionChange={completeTask}
          completed={task.completed}
        />
      ))}
    </div>
  );
};
