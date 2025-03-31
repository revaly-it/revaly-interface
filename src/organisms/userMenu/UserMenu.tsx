'use client'

import { useState } from "react";

export default function UserMenu() {
    const [showUserMenu, setShowUserMenu] = useState(false);

    return (
        <div className="relative self-end md:self-auto">
            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer" onClick={() => setShowUserMenu(!showUserMenu)}>
                <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
            </div>

            {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-zinc-800 border border-zinc-700 rounded-md shadow-lg py-2 z-50">
                <a
                    href="#"
                    className="block px-4 py-2 text-sm text-white hover:bg-zinc-700"
                >
                    Profile
                </a>
                <a
                    href="#"
                    className="block px-4 py-2 text-sm text-white hover:bg-zinc-700"
                >
                    Reviews
                </a>
                <a
                    href="#"
                    className="block px-4 py-2 text-sm text-white hover:bg-zinc-700"
                >
                    Reports
                </a>
                <a
                    href="#"
                    className="block px-4 py-2 text-sm text-white hover:bg-zinc-700"
                >
                    Logout
                </a>
                </div>
            )}
        </div>
    );
}
