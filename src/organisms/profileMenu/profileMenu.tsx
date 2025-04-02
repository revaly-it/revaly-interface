'use client'

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function ProfileMenu() {
    const [selectedOption, setSelectedOption] = useState("Profile");

    const pathname = usePathname();
    const router = useRouter();

    const options = ["Profile", "Reviews", "Reports"];

    useEffect(() => {
        const path = pathname.split("/").pop()?.toLowerCase();
        const matched = options.find((opt) => opt.toLowerCase() === path);
        if (matched) setSelectedOption(matched);
    }, [pathname]);

    function handleOptionClick(option: string) {
        setSelectedOption(option);

        const path = option.toLowerCase() === "profile"
            ? "/profile"
            : `/profile/${option.toLowerCase()}`;

        router.push(path);
    }

    return (
        <aside className="w-full md:w-64">
            <h2 className="text-xl font-semibold mb-4">Menu</h2>
            <div className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white">
                {options.map((option) => (
                <button
                    key={option}
                    onClick={() => handleOptionClick(option)}
                    className={`block w-full px-4 py-2 text-left border-b border-gray-200 cursor-pointer dark:border-gray-600 ${
                    selectedOption === option
                        ? "bg-blue-700 text-white dark:bg-blue-600"
                        : "bg-white text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                    }`}
                >
                    {option}
                </button>
                ))}
            </div>
        </aside>
    );
}
