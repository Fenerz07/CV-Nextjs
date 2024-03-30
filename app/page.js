import Image from "next/image";
import Cover from "./components/Cover";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class="container mt-40 mx-auto p-12">
        <Cover />
      </div>
      <div id="about" class="container mt-40 mx-auto p-12">
        <About />
      </div>
      <div id="contact" class="container mt-40 mx-auto p-12">
        <Contact />
      </div>
      <div class="container mt-40 mx-auto p-12">
        <Footer />
      </div>
    </main>
  );
}