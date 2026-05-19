import { Header } from "./container/sections/Header";
import { Hero } from "./container/sections/Hero";
import { Signs } from "./container/sections/Signs";
import { Expect } from "./container/sections/Expect";
import { Psycho } from "./container/sections/Psycho";
import { About } from "./container/sections/About";
import { Consultorio } from "./container/sections/Consultorio";
import { Faq } from "./container/sections/Faq";
import { Cta } from "./container/sections/Cta";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Signs />
      <Expect />
      <Psycho />
      <About />
      <Consultorio />
      <Faq />
      <Cta />
    </>
  );
}