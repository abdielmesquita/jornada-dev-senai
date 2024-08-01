import NavBar from "./NavBar";
import Hero from "./Hero";
import Section01 from "./Section01";
import Section02 from "./Section02";

export default function Home() {
  return (
    <main className="bg-white text-[#494949] h-full block">
      <NavBar/>
      <Hero />
      <Section01 />
      <Section02 />
    </main>
  );
}
