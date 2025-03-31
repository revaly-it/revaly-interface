import Image from "next/image";

const PUBLISHERS = [
  {
    name: "Penguin Random House",
    logo: "https://yt3.googleusercontent.com/DQl575yeGTJ2gEz-irXmaH7FAsd2aNdXWWoV8P9np32JuxMtsPDoa0ZzhcJiGKNaoN3q4EkofQ=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "HarperCollins",
    logo: "https://tse4.mm.bing.net/th?id=OIP.0lauBnRc1BHc7HEVNaiRoQHaHa&pid=Api",
  },
  {
    name: "Macmillan Publishers",
    logo: "https://pbs.twimg.com/profile_images/1801143388810461184/7rHxXoWw_400x400.jpg",
  },
  {
    name: "Simon & Schuster",
    logo: "https://yt3.googleusercontent.com/ytc/AIdro_nr6Xd_Lw5ZFNLr0xlnIiplxUWBzYmGScwpwQVnOMC3ZRw=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Hachette Livre",
    logo: "https://logosandtypes.com/wp-content/uploads/2020/07/hachette.png",
  },
  {
    name: "Scholastic",
    logo: "https://yt3.googleusercontent.com/ytc/AIdro_nSpSZIDGpZaZdvUWk_sG2SrlkNYcN_NKbm_4p8B9YJAQA=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Grupo Planeta",
    logo: "https://cdn.brandfetch.io/planeta.es/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed",
  },
  {
    name: "Companhia das Letras",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQ5yawAdzTCo_MPHdMcw8-JLEQOnPoYPeEQ&s",
  },
  {
    name: "DarkSide Books",
    logo: "https://uncodedprod.com/wp-content/uploads/2022/02/g865.webp",
  },
  {
    name: "Editora Rocco",
    logo: "https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/4/AmazonStores/A2Q3Y263D00KWC/87bd3656a86183f2772460bbc3f11b2d.w1280.h1279.jpg",
  },
];

export default function TopPublishers() {
    return (
        <section className="max-w-screen-xl mx-auto">
            <h2 className="text-xl font-semibold text-white mb-4">
                Bests Publishers
            </h2>
            <div className="flex items-center gap-4 overflow-x-auto pb-2 justify-center pb-10">
                {PUBLISHERS.map((publisher) => (
                <div
                    key={publisher.name}
                    className="flex-shrink-0 w-20 h-20 bg-white rounded-md border border-gray-200 flex items-center justify-center shadow-sm dark:bg-gray-800 dark:border-gray-700"
                >
                    <img
                        src={publisher.logo}
                        alt={publisher.name}
                        className="object-contain w-full h-full"
                        />
                </div>
                ))}
            </div>
        </section>
    );
}
