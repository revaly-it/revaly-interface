'use client';
import { ChevronDown, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function SearchBar() {

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
    );
}