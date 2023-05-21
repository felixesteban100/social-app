
import type { ReactNode } from "react"

type IconHoverEffectProps = {
    children: ReactNode;
    red?: boolean
}

function IconHoverEffect({ children, red = false }: IconHoverEffectProps) {
    const colorClasses = red 
    ? "outline-red-400 hover:bg-red-200 group-hover-bg-red-200 group-focus-visible:bg-red-200 focus-visible:bg-red-200" 
    : "outline-primary hover:bg-primary group-hover-bg-neutral group-focus-visible:bg-base100 focus-visible:bg-base100"

    return (
        <div className={`rounded-full p-2 transition-colors duration-200 ${colorClasses}`}>
            {children}
        </div>
    )
}

export default IconHoverEffect