import { z } from "zod";

export const profileUpdateSchema = z.object({
  user: z.string().min(1, { message: "User ID is required" }),
  bio: z
    .string()
    .min(10, { message: "Bio must be at least 10 characters" })
    .max(500, { message: "Bio cannot exceed 500 characters" }),
  subjects: z
    .array(z.string().min(1, { message: "Subject ID cannot be empty" }))
    .min(1, { message: "At least one subject is required" }),
  hourlyRate: z
    .number()
    .min(100, { message: "Hourly rate must be at least 100" })
    .max(5000, { message: "Hourly rate cannot exceed 5000" }),
  
  ratings: z
    .number()
    .min(0, { message: "Rating cannot be negative" })
    .max(5, { message: "Rating cannot exceed 5" })
    .optional(),
  location: z
    .string()
    .min(2, { message: "Location must be at least 2 characters" })
    .max(100, { message: "Location cannot exceed 100 characters" }),
});

export const testSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  hobbies: z.array(z.string()).min(1, "Select at least one hobby."),
})