import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Nugasin Automation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p>Ini salah satu landing page dari website nugasin.com. Nugasin.com sendiri merupakan salah satu web freelance online terbesar di Indonesia.</p>
        <a href="https://nugasin.hashnode.dev/programmer-an-increasingly-interesting-profession">Jasa Sebar Kuesioner Terpercaya di Indonesia</a>
      </main>

      <Footer />
    </div>
  )
}
