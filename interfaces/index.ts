// interfaces/index.ts

// Props for a Card component
export interface CardProps {
  title: string;
  description?: string; // optional
  imageUrl?: string;    // optional
  onClick?: () => void; // optional click handler
}

// Props for a Button component
export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;   // optional
  type?: "button" | "submit" | "reset"; // HTML button types
  className?: string;   // allow passing Tailwind classes
}
