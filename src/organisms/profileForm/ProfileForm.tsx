'use client'

import { useState } from "react";

export default function ProfileForm() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        birthDate: "",
    });


    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log("Dados atualizados:", form);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-900 p-6 rounded-lg shadow-md border border-zinc-700" >
            <div>
                <label className="block mb-1 text-sm font-medium text-gray-300">
                Name
                </label>
                <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full p-2 rounded bg-zinc-800 border border-zinc-600 text-white"
                />
            </div>

            <div>
                <label className="block mb-1 text-sm font-medium text-gray-300">
                Last name
                </label>
                <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full p-2 rounded bg-zinc-800 border border-zinc-600 text-white"
                />
            </div>

            <div>
                <label className="block mb-1 text-sm font-medium text-gray-300">
                Telephone
                </label>
                <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-2 rounded bg-zinc-800 border border-zinc-600 text-white"
                />
            </div>

            <div>
                <label className="block mb-1 text-sm font-medium text-gray-300">
                Birth date
                </label>
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
    )
}