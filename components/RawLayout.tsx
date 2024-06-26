import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../public/logo.png';

type RawLayoutProps = {
  children: React.ReactNode
};
export default function RawLayout({ children }: RawLayoutProps) {
  return (
    <>
      <Head>
        <title>OoTMM - The Ocarina of Time / Majora's Mask Combo Randomizer</title>
      </Head>
      <header className="header">
        <Link className="header-title" href="/">
          <Image className="logo" alt="OoTMM Logo" src={logo}/>
          <h1 className="title">OoTMM</h1>
        </Link>
        <nav className="header-nav">
          <Link href="/faq">FAQ</Link>
          <Link target="_blank" href="https://discord.gg/4QdtPBP6wf">Discord</Link>
          <Link href="/multiworld">Multiworld Guide</Link>
        </nav>
      </header>
      {children}
    </>
  )
}
