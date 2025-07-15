import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatView(count: number): string {
  let displayCount = "";

  if (count < 1000) {
    displayCount = `${count}`;
  } else if (count < 1_000_000) {
    displayCount = `${(count / 1000).toFixed(1)}k`;
  } else {
    displayCount = `${(count / 1_000_000).toFixed(1)}M`;
  }

  return `${displayCount} View${count === 1 ? "" : "s"}`;
}

export function parseServerActionResponse<T>(response: T) {
  return JSON.parse(JSON.stringify(response));
}