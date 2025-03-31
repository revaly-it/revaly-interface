import Highlights from '@/organisms/carousels/Highlights'
import LatestReleases from '@/organisms/carousels/LatestReleases'
import Publishers from '@/organisms/carousels/Publishers'
import Footer from '@/organisms/footer/Footer'
import Header from '@/organisms/header/Header'
import Head from 'next/head'

export default function HomePage() {

    return (
        <>
        <Head>
            <title>Revaly - Home</title>
        </Head>

        <Header />

        <main className="max-w-screen-xl mx-auto p-4">
            <LatestReleases />

            <Publishers />

            <Highlights />
        </main>

        <Footer />
        </>
    )
}