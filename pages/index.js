import Image from 'next/image'
import { Inter } from 'next/font/google'

import TextInput from "/components/generator/TextInput";
import AutoGenerateFlashcards from "/components/autogenerate/AutoGenerateFlashcards";
import FlashcardPreview from "/components/autogenerate/FlashcardPreview";
import FlashcardApp from "/components/FlashcardApp";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=" min-h-screen  items-center justify-between p-24">

      <FlashcardApp />

    </main>
  )
}
