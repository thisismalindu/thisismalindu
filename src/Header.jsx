import Button from "./Button";
import hero from "./assets/hero.jpg";
import { TypeAnimation } from "react-type-animation";

export default function Header() {
  return (
    <header className="bg-white px-4 flex flex-col-reverse gap-8 pt-36 pb-20 xl:grid xl:grid-cols-2 xl:items-center justify-center xl:px-32 ">
      <div className="flex flex-col gap-8">
        <h1 className="text-6xl font-bold tracking-tighter">
          <TypeAnimation
            sequence={[
              500,
              '',
              1000,
              "Hi, I am Malindu.",
              1000, 
            ]}
            speed={50}
          />
        </h1>
        <p className="mono tracking-tight max-w-2xl">
       Undergrad @ <a href="https://cse.mrt.ac.lk/" className="underline">CSE University of Moratuwa</a>.
        <br></br>I build things, break them, and sometimes post about it.
        </p>
        <div className="flex gap-4">
          <Button primary={true} href="/blog">
            Blog
          </Button>
          <Button href="/contact">Contact</Button>
        </div>
      </div>
      <img src={hero} alt="malindu bandara" />
    </header>
  );
}
