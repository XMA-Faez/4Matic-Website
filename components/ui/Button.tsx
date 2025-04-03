// components/ui/Button.tsx
import Link from "next/link";
import { ReactNode, forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link";
type ButtonSize = "xs" | "sm" | "md" | "lg";

interface BaseButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  fullWidth?: boolean;
  loading?: boolean;
}

interface ButtonAsButtonProps extends BaseButtonProps, ButtonHTMLAttributes<HTMLButtonElement> {
  asLink?: false;
  href?: never;
}

interface ButtonAsLinkProps extends BaseButtonProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  asLink: true;
  href: string;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      asLink,
      href,
      icon,
      iconPosition = "right",
      className = "",
      fullWidth = false,
      loading = false,
      ...props
    },
    ref
  ) => {
    // Base styles with improved transition and focus states
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 focus-visible:ring-offset-white dark:focus-visible:ring-offset-secondary-950";
    
    // Variant styles - more contemporary and refined
    const variantStyles: Record<ButtonVariant, string> = {
      primary: "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-sm",
      secondary: "bg-secondary-100 text-secondary-900 hover:bg-secondary-200 active:bg-secondary-300 dark:bg-secondary-800 dark:text-secondary-100 dark:hover:bg-secondary-700 dark:active:bg-secondary-600",
      outline: "border border-secondary-300 text-secondary-700 hover:bg-secondary-50 active:bg-secondary-100 dark:border-secondary-700 dark:text-secondary-300 dark:hover:bg-secondary-800/70 dark:active:bg-secondary-800",
      ghost: "text-secondary-700 hover:bg-secondary-100 active:bg-secondary-200 dark:text-secondary-300 dark:hover:bg-secondary-800 dark:active:bg-secondary-700",
      link: "text-primary-600 hover:text-primary-700 active:text-primary-800 underline-offset-4 hover:underline dark:text-primary-400 dark:hover:text-primary-300",
    };
    
    // Size styles with better proportions
    const sizeStyles: Record<ButtonSize, string> = {
      xs: "text-xs px-2.5 py-1.5 rounded",
      sm: "text-sm px-3 py-2 rounded",
      md: "text-sm px-4 py-2.5 rounded-md",
      lg: "text-base px-5 py-3 rounded-md",
    };
    
    // Width style
    const widthStyle = fullWidth ? "w-full" : "";
    
    // Loading state
    const loadingStyle = loading ? "opacity-80 cursor-not-allowed" : "";
    
    const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${loadingStyle} ${className}`;
    
    // Loading spinner
    const LoadingSpinner = () => (
      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    );
    
    // Icon placement
    const iconLeft = icon && iconPosition === "left" ? <span className="mr-2">{icon}</span> : null;
    const iconRight = icon && iconPosition === "right" ? <span className="ml-2">{icon}</span> : null;
    
    // Render as link if asLink is true
    if (asLink && href) {
      return (
        <Link 
          href={href} 
          className={buttonStyles} 
          ref={ref as React.Ref<HTMLAnchorElement>} 
          {...props as AnchorHTMLAttributes<HTMLAnchorElement>}
        >
          {loading && <LoadingSpinner />}
          {iconLeft}
          {children}
          {iconRight}
        </Link>
      );
    }
    
    // Render as button
    return (
      <button 
        className={buttonStyles} 
        ref={ref as React.Ref<HTMLButtonElement>} 
        disabled={loading}
        {...props as ButtonHTMLAttributes<HTMLButtonElement>}
      >
        {loading && <LoadingSpinner />}
        {iconLeft}
        {children}
        {iconRight}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
