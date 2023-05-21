import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

type ButtonProps = {
    small?: boolean
    gray?: boolean
    className?: string
} & DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

function Button({
    small = false,
    gray = false,
    className = "",
    ...props
}: ButtonProps) {
    const sizeClasses = small ? "px-2 py-1" : "px-4 py-2 font-bold"
    const colorClasses = gray ? "text-primary bg-secondary hover:bg-primary focus-visible:bg-primary hover:text-secondary focus:text-secondary" :/* "bg-current hover:bg-current focus-visible:bg-current" : */
    "text-neutral bg-primary hover:bg-neutral focus-visible:bg-neutral hover:text-primary focus:text-primary"

    return (
        <button className={`rounded-full transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 text-primary ${sizeClasses} ${colorClasses} ${className}`} {...props} ></button>
    )
}

export default Button