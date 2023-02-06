import Head from 'next/head'



import Navbar from '@/Components/Navbar/Navbar'
import Banner from '@/Components/Banner/Banner'
import Info from '@/Components/Info/Info'
import CardInfos from '@/Components/CardInfos/CardInfos'
import Poster from '@/Components/Poster/Poster'



export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" max-w-[1440px] mx-auto">
       <Navbar></Navbar>
       <Banner></Banner>
       <Info></Info>
       <CardInfos></CardInfos>
       <Poster></Poster>
  

      </main>
      </div>
  )
}
