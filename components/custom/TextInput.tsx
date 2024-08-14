import { ComponentProps } from "react";
import { Control, useController } from "react-hook-form";

type TextInputProps = ComponentProps<"input"> & {
  control: Control<any>;
  name: string;
  label?: string;
};

export default function TextInput({
  control,
  name,
  label,
  ...inputPorps
}: TextInputProps) {
  const {
    formState: { errors },
  } = useController({ control, name });
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-semibold">{label}</label>}
      <input {...inputPorps} {...control.register(name)}></input>
      {errors[name] && (
        <span className="text-red-500">{errors[name].message?.toString()}</span>
      )}
    </div>
  );
}
