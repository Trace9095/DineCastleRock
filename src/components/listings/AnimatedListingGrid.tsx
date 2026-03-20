"use client"

import { motion, useReducedMotion } from "framer-motion"

interface AnimatedListingGridProps {
    children: React.ReactNode
    className?: string
}

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.07,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
        },
    },
}

export function AnimatedListingGrid({ children, className }: AnimatedListingGridProps) {
    const prefersReducedMotion = useReducedMotion()

    if (prefersReducedMotion) {
        return (
            <div className={className}>
                {children}
            </div>
        )
    }

    // Wrap each child in a motion.div for stagger animation
    const childArray = Array.isArray(children) ? children : [children]

    return (
        <motion.div
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {childArray.map((child, index) => (
                <motion.div key={index} variants={itemVariants}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    )
}
