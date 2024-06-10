import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { Task } from "./task-manager";
import en from "../assets/lang/en.json";
import ar from "../assets/lang/ar.json";
import { useLanguage } from "@/hooks/use-language";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Task name is required",
  }),
  time: z.string().min(1, {
    message: "Time is required",
  }),
  completed: z.boolean().optional(),
});

interface TaskFormProps {
  addTask: (task: Task) => void;
}

export const TaskForm = ({ addTask }: TaskFormProps) => {
  const { language } = useLanguage();
  const translations = language === "EN" ? en : ar;

  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      time: "",
      completed: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const tasksInLocalStorage = localStorage.getItem("tasks");

    const currentTasks = tasksInLocalStorage
      ? JSON.parse(tasksInLocalStorage)
      : [];

    // Speed & unrealistic way to generate unique id
    let id;
    if (currentTasks.length === 0) {
      console.log("Length is 0");
      id = 1;
    } else {
      id = currentTasks[currentTasks.length - 1].id + 1;
    }

    const newTask = { id, completed: false, ...values };
    currentTasks.push(newTask);

    const updatedTasksJson = JSON.stringify(currentTasks);

    localStorage.setItem("tasks", updatedTasksJson);

    setTimeout(() => {
      toast.success("Task added successfully");
      addTask(newTask);
      setOpen(false);
      form.reset();
    }, 200); // simulate the backend response time

    console.log(values);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2" variant="primary">
          <Plus size={18} />
          {translations.addTaskButton}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{translations.form.addTask}</DialogTitle>
          <DialogDescription>
            {translations.form.addTaskDescription}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 gap-4 flex flex-col w-full"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{translations.form.inputs.name.label}</FormLabel>
                  <FormControl>
                    <Input
                      className="h-12"
                      placeholder={translations.form.inputs.name.placeholder}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{translations.form.inputs.time.label}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={translations.form.inputs.time.placeholder}
                      {...field}
                      className={cn(
                        "h-12 time-placeholder",
                        language === "AR" ? "justify-end" : "justify-start"
                      )}
                      type="time"
                    />
                  </FormControl>
                  <FormMessage content="No" />
                </FormItem>
              )}
            />
            <Button type="submit">{translations.form.submit}</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
