import Image from "next/image";
import { Header } from "@/app/header";
import { About } from "@/app/about";
import { Content } from "@/app/content";
import { Contact } from "@/app/contact";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <About />
      <Content />
      <Contact />
    </div>
  );
}
