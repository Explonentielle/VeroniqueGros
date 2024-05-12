"use client"


import { PropsWithChildren } from "react"
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/src/components/ui/toaster";
import { ThemeProvider } from "@/src/features/theme/ThemeProvider";



const queryClient = new QueryClient()

export type ProvidersProps = PropsWithChildren

export const Providers = (props: ProvidersProps) => {
    return (
        <SessionProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem
                disableTransitionOnChange
            >
                {/* <QueryClientProvider client={queryClient}> */}
                    <Toaster />
                    {props.children}
                {/* </QueryClientProvider> */}
            </ThemeProvider>
        </SessionProvider>
    )
}