import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function to merge Tailwind classes with clsx and twMerge.
 * @param values List of Tailwind classes
 * @returns A string of merged Tailwind classes
 */
export const cn = (...values: ClassValue[]) => twMerge(clsx(...values));
