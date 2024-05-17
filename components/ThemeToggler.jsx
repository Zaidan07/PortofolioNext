'use client';

import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
    const {theme, setTheme} = useTheme();
    return (
        <div>
            <Button onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}>
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:rotate-90 transition-all dark:scale-0"/>
                <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 dark:rotate-0 transition-all dark:scale-100"/>
            </Button>
        </div>
    )
}

export default ThemeToggler;