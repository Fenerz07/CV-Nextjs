import Image from "next/image";
import Cover from "./components/Cover";
import Navbar from "./components/Navbar";
import About from "./components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class="container mt-40 mx-auto p-12">
        <Cover />
      </div>
      <div class="container mt-40 mx-auto p-12">
        <About />
      </div>
    </main>
  );
}