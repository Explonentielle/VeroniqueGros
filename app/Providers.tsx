"use client"

import { PropsWithChildren } from "react"
import { Toaster } from "@/src/components/ui/toaster";
import { ThemeProvider } from "@/src/features/theme/ThemeProvider";



export type ProvidersProps = PropsWithChildren

export const Providers = (props: ProvidersProps) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
            <Toaster />
            {props.children}
        </ThemeProvider> 
    )
}