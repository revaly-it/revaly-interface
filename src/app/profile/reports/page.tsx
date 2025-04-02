import Footer from "@/organisms/footer/Footer";
import Header from "@/organisms/header/Header";
import ProfileForm from "@/organisms/profileForm/ProfileForm";
import ProfileMenu from "@/organisms/profileMenu/profileMenu";

export default function ReportsPage() {
    return (
        <>
        <Header />

        <main className="max-w-screen-xl mx-auto p-6 text-white min-h-[80vh]">
            <h1 className="text-3xl font-bold mb-8">Profile</h1>

            <div className="flex flex-col md:flex-row gap-6">
            <ProfileMenu />

            <section className="flex-1">
                <ProfileForm />
            </section>
            </div>
        </main>

        <Footer />
        </>
    );
}
