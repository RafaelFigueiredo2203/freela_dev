import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês é base 0, então adicionamos 1
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`; // Formato ISO 8601 (YYYY-MM-DD)
};