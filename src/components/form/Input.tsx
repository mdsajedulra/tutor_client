/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Input as ShadcnInput } from "@/components/ui/input";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface InputProps {
  field: any;
  placeholder?: string;
  label?: string;
  description?: string;
  type?: string;
}

export const Input = ({
  field,
  placeholder,
  label,
  description,
  type = "text",
}: InputProps) => {
  return (
    <FormItem>
      {label && <FormLabel>{label}</FormLabel>}
      <FormControl>
        <ShadcnInput {...field} placeholder={placeholder} type={type} />
      </FormControl>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
};
