import { useLocalStorageState } from "../hook/UseLocalStorageState";

function Hero (){
  const [angka, setAngka] = useLocalStorageState("angka", 0);
  

  return (
    <section className="px-8 py-20 text-center bg-slate-50">
      <h1 className="mb-6 text-5xl font-extrabold text-slate-900">Solusi Terbaik untuk Bisnismu</h1>
      <p className="max-w-2xl mx-auto mb-8 text-lg text-slate-600">
        Platform all-in-one untuk manajemen, pemasaran, dan pertumbuhan bisnis kecil.
      </p>
      <button
        onClick={() => setAngka(angka + 10)}
        className="px-8 py-3 font-semibold text-white transition bg-pink-600 rounded-full hover:bg-pink-900"
      >
        Klik button ini : {angka}
      </button>
    </section>
  )
}
export default Hero;