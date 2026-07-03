import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    // Default variants
    let variantClass = ""
    switch (variant) {
      case "default":
        variantClass = className.includes("bg-") ? "" : "bg-black text-white hover:bg-neutral-800"
        break
      case "destructive":
        variantClass = "bg-red-500 text-white hover:bg-red-600"
        break
      case "outline":
        variantClass = className.includes("border-") ? "border bg-transparent text-neutral-800 hover:bg-neutral-100" : "border border-neutral-300 bg-transparent text-neutral-800 hover:bg-neutral-100"
        break
      case "secondary":
        variantClass = "bg-neutral-100 text-neutral-900 hover:bg-neutral-200"
        break
      case "ghost":
        variantClass = "hover:bg-neutral-100 hover:text-neutral-900"
        break
      case "link":
        variantClass = "text-neutral-900 underline-offset-4 hover:underline"
        break
    }

    // Default sizes & roundings
    const hasRounded = className.includes("rounded-")
    const roundedClass = hasRounded ? "" : "rounded-md"
    
    let sizeClass = ""
    switch (size) {
      case "default":
        sizeClass = `h-10 px-4 py-2 text-sm ${roundedClass}`
        break
      case "sm":
        sizeClass = `h-9 px-3 text-xs ${roundedClass}`
        break
      case "lg":
        sizeClass = `h-11 px-8 text-sm ${roundedClass}`
        break
      case "icon":
        sizeClass = `h-10 w-10 ${roundedClass}`
        break
    }

    const classes = `${baseStyles} ${variantClass} ${sizeClass} ${className}`

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
