import Footer from '@/organisms/footer/Footer';
import Header from '@/organisms/header/Header';
import ExploreBooks from '@/organisms/exploreBooks/ExploreBooks';

export default function Books() {
    return (
        <>
            <Header />

            <main className="max-w-screen-xl mx-auto p-6 text-white min-h-[80vh]">
                <ExploreBooks />
            </main>

            <Footer />
        </>
    );
}
