"use client";

import ExploreButton from "@/molecules/ExploreButton";
import SearchBar from "../searchBar/SearchBar";
import UserMenu from "../userMenu/UserMenu";

export default function Header() {
    return (
        <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
            <div className="max-w-screen-xl mx-auto p-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                {/* Logo */}
                <a
                    href="/home"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-8"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Revaly
                    </span>
                </a>

                {/* Search bar */}
                <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 w-full md:w-auto">
                    
                    <SearchBar />
                    <ExploreButton />
                </div>

                {/* User menu */}
                <UserMenu />
            </div>
        </nav>
    );
}
