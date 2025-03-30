"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";

export default function Header() {
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All categories");
    const [searchTerm, setSearchTerm] = useState("");
    const categories = ["All categories", "Books", "Reviews", "Reports"];

    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: { target: any; }) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowCategoryDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
            <div className="max-w-screen-xl mx-auto p-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                {/* Logo */}
                <a
                    href="https://flowbite.com"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-8"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Flowbite
                    </span>
                </a>

                <div className="w-full md:w-auto flex-1">
                    <div className="flex flex-col sm:flex-row w-full max-w-2xl mx-auto rounded-md border border-gray-600 bg-gray-800 text-white relative">
                        <div className="relative" ref={dropdownRef}>
                            <button
                                className="flex items-center justify-between w-full sm:w-auto px-4 py-2 bg-gray-900 hover:bg-gray-700 focus:outline-none"
                                onClick={() => setShowCategoryDropdown((prev) => !prev)}
                            >
                                {selectedCategory} <ChevronDown className="ml-2 w-4 h-4" />
                            </button>
                            {showCategoryDropdown && (
                                <ul className="absolute z-10 bg-gray-900 text-white border border-gray-700 mt-1 w-full sm:min-w-[10rem]">
                                    {categories.map((category) => (
                                        <li
                                            key={category}
                                            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                                            onClick={() => {
                                                setSelectedCategory(category);
                                                setShowCategoryDropdown(false);
                                            }}
                                        >
                                            {category}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search anything..."
                            className="flex-1 px-4 py-2 bg-gray-800 text-white focus:outline-none"
                        />
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white">
                            <Search className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* User menu */}
                <div className="relative self-end md:self-auto">
                    <button
                        onClick={() => setShowUserMenu(!showUserMenu)}
                        className="w-10 h-10 rounded-full bg-zinc-700 hover:bg-zinc-600 flex items-center justify-center"
                    >
                        👤
                    </button>

                    {showUserMenu && (
                        <div className="absolute right-0 mt-2 w-48 bg-zinc-800 border border-zinc-700 rounded-md shadow-lg py-2 z-50">
                            <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-zinc-700">Profile</a>
                            <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-zinc-700">Reviews</a>
                            <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-zinc-700">Reports</a>
                            <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-zinc-700">Logout</a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
