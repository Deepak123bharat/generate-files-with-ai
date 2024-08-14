"use client";

import { useKeyDown } from "@/app/hooks/useKeyDown";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  Control,
  useController,
  useForm,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";
import { z } from "zod";
import TextInput from "./TextInput";

const createProjectFormSchema = z.object({
  name: z.string(),
  description: z.string().nullable(),
  tasks: z.array(
    z.object({
      name: z.string(),
      duration: z.coerce.number().int().positive(),
    })
  ),
});

type CreateProjectFormValues = z.infer<typeof createProjectFormSchema>;

export default function CreateForm() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    setValue,
    getValues,
  } = useForm<CreateProjectFormValues>({
    resolver: zodResolver(createProjectFormSchema),
  });

  async function onSubmit(data: CreateProjectFormValues) {
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    console.log("Form submitted!", data);
  }

  useKeyDown("Enter", () => handleSubmit(onSubmit)());

  return (
    <form
      className="flex w-[300px] flex-col gap-4 m-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextInput
        control={control}
        name="name"
        label="Project Name"
        placeholder="Project Name"
      />
      <TextInput
        control={control}
        name="description"
        label="Project Description"
        placeholder="Project Description"
      />
      <CreateProjectFormTask
        control={control}
        getValues={getValues}
        setValue={setValue}
      />
      <button
        className="bg-slate-900 text-white rounded-md m-10"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

type CreateProjectFormTaskProps = {
  control: Control<CreateProjectFormValues>;
  getValues: UseFormGetValues<CreateProjectFormValues>;
  setValue: UseFormSetValue<CreateProjectFormValues>;
};
function CreateProjectFormTask({
  control,
  getValues,
  setValue,
}: CreateProjectFormTaskProps) {
  const [numberOfTasks, setNumberOfTasks] = useState(0);
  const {
    formState: { errors },
  } = useController({ control, name: "tasks" });

  return (
    <div className="flex flex-col gap-1">
      <label className="font-semibold">Projec Task</label>
      {Array.from({ length: numberOfTasks }).map((_, index) => (
        <div key={index} className="flex gap-2">
          <TextInput
            control={control}
            name={`tasks.${index}.name`}
            placeholder="Task Name"
          />
          <TextInput
            control={control}
            name={`tasks.${index}.duration`}
            placeholder="Duration"
            type="number"
          />
        </div>
      ))}
      <button
        onClick={() => {
          setNumberOfTasks(numberOfTasks + 1);
          const existingTasks = getValues("tasks") || [];

          setValue("tasks", [...existingTasks, { name: "", duration: 0 }]);
        }}
      >
        Add Task
      </button>
      {errors.tasks && (
        <span className="text-red-500">{errors.tasks?.message}</span>
      )}
    </div>
  );
}
