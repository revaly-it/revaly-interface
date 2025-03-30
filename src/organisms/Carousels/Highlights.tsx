'use client'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function Highlights() {
    const [sliderRef] = useKeenSlider({
        loop: true,
        slides: {
        perView: 1,
        spacing: 16,
        origin: "center",
        },
        breakpoints: {
        '(min-width: 640px)': {
            slides: { perView: 2, spacing: 16 },
        },
        '(min-width: 768px)': {
            slides: { perView: 3, spacing: 16 },
        },
        '(min-width: 1024px)': {
            slides: { perView: 4, spacing: 16 },
        },
        },
    })

    return (
        <section className="max-w-screen-xl mx-auto overflow-hidden">
        <h2 className="text-xl font-semibold text-white mb-4">❤️ Romance</h2>
        <div ref={sliderRef} className="keen-slider pb-2">
            {Array.from({ length: 10 }).map((_, i) => (
            <div
                key={i}
                className="keen-slider__slide bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
                <a href="#">
                <img
                    className="rounded-t-lg w-full h-48 object-cover"
                    src={`https://picsum.photos/200/200?random=${i}`}
                    alt=""
                />
                </a>
                <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                    </h5>
                </a>
                <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
                <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                    Read more
                    <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                    >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                    </svg>
                </a>
                </div>
            </div>
            ))}
        </div>
        </section>
    )
}
