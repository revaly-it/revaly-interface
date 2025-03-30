import Highlights from '@/organisms/Carousels/Highlights'
import LatestReleases from '@/organisms/Carousels/LatestReleases'
import Publishers from '@/organisms/Carousels/Publishers'
import Header from '@/organisms/Header/Header'
import Head from 'next/head'

export default function HomePage() {

    return (
        <>
        <Head>
            <title>Revaly - Página Inicial</title>
        </Head>

        <Header />

        <main className="max-w-screen-xl mx-auto p-4">
            {/* Carrossel: Livros em destaque */}
            <LatestReleases />

            {/* Carrossel por gênero */}
            <Publishers />

            {/* <Highlights /> */}
            <Highlights />
        </main>
        </>
    )
}