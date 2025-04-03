// src/components/ui/Button.tsx
import Link from "next/link";
import { ReactNode, forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "accent";
type ButtonSize = "sm" | "default" | "lg";

interface BaseButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  className?: string;
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
      size = "default",
      asLink,
      href,
      icon,
      className = "",
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles = "flex items-center justify-center transition-colors rounded";
    
    // Variant styles
    const variantStyles: Record<ButtonVariant, string> = {
      primary: "bg-primary-900 text-primary-400 hover:bg-primary-800",
      secondary: "border border-secondary-700 text-white hover:bg-secondary-900",
      accent: "bg-white text-primary-500 hover:bg-secondary-100"
    };
    
    // Size styles
    const sizeStyles: Record<ButtonSize, string> = {
      sm: "px-4 py-1 text-sm",
      default: "px-6 py-2 text-sm",
      lg: "px-8 py-3"
    };
    
    const buttonStyles = `${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${sizeStyles[size] || sizeStyles.default} ${className}`;
    
    // Render as link if asLink is true
    if (asLink && href) {
      return (
        <Link 
          href={href} 
          className={buttonStyles} 
          ref={ref as React.Ref<HTMLAnchorElement>} 
          {...props as AnchorHTMLAttributes<HTMLAnchorElement>}
        >
          {children}
          {icon && <span className="ml-2">{icon}</span>}
        </Link>
      );
    }
    
    // Render as button
    return (
      <button 
        className={buttonStyles} 
        ref={ref as React.Ref<HTMLButtonElement>} 
        {...props as ButtonHTMLAttributes<HTMLButtonElement>}
      >
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
