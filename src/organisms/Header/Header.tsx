"use client";
import { useState } from "react";

export default function Header() {
    const [showCompanyMenu, setShowCompanyMenu] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);

    return (
        <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
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

            {/* Menu & User section */}
            <div className="flex items-center gap-4">
            {/* Mobile toggle */}
            <button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={() => setShowCompanyMenu((prev) => !prev)}
            >
                <span className="sr-only">Open main menu</span>
                <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
                >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                />
                </svg>
            </button>

            {/* User menu */}
            <div className="relative">
                <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="w-10 h-10 rounded-full bg-zinc-700 hover:bg-zinc-600 flex items-center justify-center"
                >
                👤
                </button>

                {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-zinc-800 border border-zinc-700 rounded-md shadow-lg py-2 z-50">
                    <a
                    href="#"
                    className="block px-4 py-2 text-sm text-white hover:bg-zinc-700"
                    >
                    Meu Perfil
                    </a>
                    <a
                    href="#"
                    className="block px-4 py-2 text-sm text-white hover:bg-zinc-700"
                    >
                    Minhas Avaliações
                    </a>
                    <a
                    href="#"
                    className="block px-4 py-2 text-sm text-white hover:bg-zinc-700"
                    >
                    Sair
                    </a>
                </div>
                )}
            </div>
            </div>
        </div>

        {/* Navigation Links */}
        <div className="max-w-screen-xl mx-auto md:flex md:justify-start px-4">
            <ul className="flex flex-col md:flex-row md:space-x-8 font-medium w-full justify-center">
            <li>
                <a
                href="#"
                className="block py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                >
                Home
                </a>
            </li>
            <li>
                <button
                onClick={() => setShowCompanyMenu((prev) => !prev)}
                className="flex items-center py-2 px-3 text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-500"
                >
                Company
                <svg
                    className="w-2.5 h-2.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                    />
                </svg>
                </button>
            </li>
            <li>
                <a
                href="#"
                className="block py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                >
                Marketplace
                </a>
            </li>
            <li>
                <a
                href="#"
                className="block py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                >
                Resources
                </a>
            </li>
            <li>
                <a
                href="#"
                className="block py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                >
                Contact
                </a>
            </li>
            </ul>
        </div>

        {/* Company Mega Menu */}
        {showCompanyMenu && (
            <div className="mt-1 bg-white border-t border-gray-200 shadow-xs dark:bg-gray-800 dark:border-gray-600">
            <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
                <ul className="space-y-4">
                <li><a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">Online Stores</a></li>
                <li><a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">Segmentation</a></li>
                <li><a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">Marketing CRM</a></li>
                <li><a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">Online Stores</a></li>
                </ul>
                <ul className="hidden md:block space-y-4">
                <li><a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">Our Blog</a></li>
                <li><a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">Terms & Conditions</a></li>
                <li><a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">License</a></li>
                <li><a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">Resources</a></li>
                </ul>
                <div className="mt-4 md:mt-0">
                <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">Our brands</h2>
                <p className="mb-2 text-gray-500 dark:text-gray-400">At Flowbite, we have a portfolio of brands that cater to a variety of preferences.</p>
                <a href="#" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 dark:hover:text-blue-700">
                    Explore our brands
                    <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
                </div>
            </div>
            </div>
        )}
        </nav>
    );
}
