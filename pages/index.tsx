import Banner from '@/src/Banner'
import CarouselHome from '@/src/CarouselHome'
import DownloadSection from '@/src/DownloadSection'
import Header from '@/src/Header'
import MainReasons from '@/src/MainReasons'
import Head from 'next/head'
import styled from 'styled-components'



export default function Home() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@300;400;600&display=swap" rel="stylesheet"/>        
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/Home/vscode-svg-icon.svg" />
      </Head>
      <Header isHomePage={false}/>
      <Banner/>
      <CarouselHome />
      <MainReasons />
      <DownloadSection />
    </>
  )
}
