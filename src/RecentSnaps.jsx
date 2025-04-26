import hero from "./assets/hero.jpg";
import elk from "./assets/elk.jpg"
import tree from "./assets/tree.jpg"
import basketball from "./assets/basketball.jpg"
export default function RecentSnaps() {
  return (
    <header className="bg-white px-4 gap-8 pt-36 pb-20 xl:px-32">
      <h1 className="text-5xl font-bold tracking-tighter pb-10">Recent Snaps</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <a className="hover:brightness-110" href="https://www.instagram.com/thisismalindu/p/DIzEAnfynFs9IetpHv77t0ASoLm1uJwD2EJkTQ0/" target="_blank"><img src={elk} alt="elk in horton plains" className="w-full object-cover" /></a>
        <a className="hover:brightness-110" href="https://www.instagram.com/thisismalindu/p/C3svYVYCTuPf9hwit6tgNuFXbS0G4xl68GH8oA0/" target="_blank"><img src={tree} alt="tree in awissawella botanical rainforest" className="w-full object-cover" /></a>
        <a className="hover:brightness-110" href="https://www.instagram.com/thisismalindu/p/Cza78lLRv5kN_oiSB11ARUzllYbwEkfHJsH_-w0/" target="_blank"><img src={basketball} alt="basketball court in maliyadeva college kurunegala" className="w-full object-cover" /></a>
      </div>
    </header>
  );
}
