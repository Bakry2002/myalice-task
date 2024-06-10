import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { TaskForm } from "./task-form";
import { Button } from "./ui/button";
import { useState } from "react";

export const AddTaskDialog = () => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2" variant="primary">
          <Plus size={18} /> Add Task
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New task</DialogTitle>
          <DialogDescription>Add new task from here.</DialogDescription>
        </DialogHeader>

        <TaskForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};
