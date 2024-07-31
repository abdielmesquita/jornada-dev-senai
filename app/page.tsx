import NavBar from "./NavBar";

export default function Home() {
  return (
    <main className="bg-black text-white h-full block">
      <NavBar/>
      <div className="h-screen flex flex-col items-center justify-center">
        <p className="text-pink-600 font-black text-5xl pb-2 mb-4 border-b-2 border-pink-400">
          Jornada <br/>
          Dev Senai
        </p>
        <p className="text-2xl italic">
          Projeto base inicial
        </p>
      </div>
    </main>
  );
}
