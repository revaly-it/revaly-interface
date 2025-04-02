"use client";

import Footer from "@/organisms/footer/Footer";
import Header from "@/organisms/header/Header";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function ProfilePage() {
    const pathname = usePathname();
    const router = useRouter();

    const options = ["Profile", "Reviews", "Reports"];
    const [selectedOption, setSelectedOption] = useState("Profile");

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        birthDate: "",
    });

    useEffect(() => {
        const path = pathname.split("/").pop()?.toLowerCase();
        const matched = options.find(opt => opt.toLowerCase() === path);
        if (matched) setSelectedOption(matched);
    }, [pathname]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log("Dados atualizados:", form);
    }

    function handleOptionClick(option: string) {
        setSelectedOption(option);
        router.push(`/profile/${option.toLowerCase()}`);
    }

    return (
        <>
        <Header />

        <main className="max-w-screen-xl mx-auto p-6 text-white min-h-[80vh]">
            <h1 className="text-3xl font-bold mb-8">Profile</h1>

            <div className="flex flex-col md:flex-row gap-6">
            <aside className="w-full md:w-64">
                <h2 className="text-xl font-semibold mb-4">Menu</h2>
                <div className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white">
                {options.map(option => (
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

            <section className="flex-1">
                <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-zinc-900 p-6 rounded-lg shadow-md border border-zinc-700"
                >
                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-300">Name</label>
                    <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-zinc-800 border border-zinc-600 text-white"
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-300">Last name</label>
                    <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-zinc-800 border border-zinc-600 text-white"
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-300">Telephone</label>
                    <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-zinc-800 border border-zinc-600 text-white"
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-300">Birth date</label>
                    <input
                    type="date"
                    name="birthDate"
                    value={form.birthDate}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-zinc-800 border border-zinc-600 text-white"
                    />
                </div>

                <div className="pt-4">
                    <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded text-white font-medium transition-colors"
                    >
                    Update
                    </button>
                </div>
                </form>
            </section>
            </div>
        </main>

        <Footer />
        </>
    );
}
