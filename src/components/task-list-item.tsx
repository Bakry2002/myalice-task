import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import en from "../assets/lang/en.json";
import ar from "../assets/lang/ar.json";
import { cn } from "@/lib/utils";

type TaskListItemProps = {
  id: number;
  name: string;
  time: string;
  completed?: boolean;
  onCompletionChange: (id: number) => void;
  onDelete: (id: number) => void;
};
export const TaskListItem = ({
  id,
  name,
  time,
  onDelete,
  completed,
  onCompletionChange,
}: TaskListItemProps) => {
  const { language } = useLanguage();
  const translations = language === "EN" ? en : ar;

  const handleCheckboxChange = () => {
    onCompletionChange(id);
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex px-4 py-2 flex-row items-center justify-between">
        <CardTitle className="text-left text-sm">
          {translations.tasks.task.task} #{id}
        </CardTitle>
        <Button
          variant="destructive"
          className="flex items-center gap-2"
          onClick={() => {
            onDelete(id);
          }}
        >
          <Trash2 size={16} />
          <span className="sm:block hidden">
            {translations.tasks.task.delete}
          </span>
        </Button>
      </CardHeader>
      <CardContent className="text-left px-4 py-2 flex justify-center gap-y-2 flex-col">
        <div className="flex items-center gap-2 w-full">
          <div className={cn("items-top flex gap-2")}>
            <input
              type="checkbox"
              id={`complete+${id}`}
              defaultChecked={completed}
              onChange={handleCheckboxChange}
            />
            <div className={cn("grid gap-1.5 leading-none")}>
              <label
                htmlFor={`complete+${id}`}
                className={cn(
                  "leading-none text-lg font-semibold peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                  completed ? "line-through text-gray-500" : "text-black"
                )}
              >
                {name}
              </label>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-medium">{translations.tasks.task.time}:</span>
          <p>{time}</p>
        </div>
      </CardContent>
    </Card>
  );
};
