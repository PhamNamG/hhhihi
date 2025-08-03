import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";

type UseDynamicFormProps = {
  fields: any[];
  onSubmit: (data: any) => void;
  schema: any; // Schema for validation (e.g., using Zod)
  defaultValues?: Record<string, any>; // Default values for form
};

export function useDynamicForm({
  fields,
  onSubmit,
  schema,
  defaultValues,
}: UseDynamicFormProps) {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues || {},
  });
  const renderFields = () => {
    return fields.map((fields: any, index) => (
      <FormField
        key={index}
        control={form.control}
        name={fields.name}
        render={({ field, fieldState }: any) => (
          <FormItem>
            <FormLabel>{field.label}</FormLabel>
            <FormControl>
                
              {field.type === "file" ? (
                <Input
                  type="file"
                  onChange={(e) => field.onChange(e.target.files)}
                  value={undefined} // to reset file input
                />
              ) : (
                <Input
                  type={fields.type}
                  placeholder={fields.placeholder || ""}
                  {...field}
                />
              )}
            </FormControl>
            <FormMessage>{fieldState?.error?.message}</FormMessage>{" "}
          </FormItem>
        )}
      />
    ));
  };

  return {
    form,
    renderFields,
    onSubmit: form.handleSubmit(onSubmit),
  };
}
