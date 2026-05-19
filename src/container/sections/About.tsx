import { useState } from "react";

import thalita from "../../assets/thalitadois.jpeg";
import thalita2 from "../../assets/thalitatres.jpeg";
import thalita3 from "../../assets/thalitaquatro.jpeg";
import thalita4 from "../../assets/thalitacinco.jpeg";

export function About() {
  const fotos = [thalita, thalita2, thalita3, thalita4];

  const [fotoAtual, setFotoAtual] = useState(0);

  const nextSlide = () => {
    setFotoAtual((prev) => (prev + 1) % fotos.length);
  };

  const prevSlide = () => {
    setFotoAtual((prev) =>
      prev === 0 ? fotos.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FCF8F5] py-32 px-6"
    >
      {/* BG BLUR */}
      <div className="absolute left-30 top-[10%] w-[320px] h-80 rounded-full bg-[#F3E7DD] blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.95fr_1.1fr] gap-20 lg:gap-28 items-center relative z-10">
        
        {/* IMAGE SIDE */}
        <div className="relative flex justify-center">

          {/* organic bg */}
          <div className="absolute inset-0 bg-[#F3E7DD] rounded-[42px] rotate-6 scale-[0.96]" />

          {/* IMAGE CONTAINER */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[42px]
              w-full
              max-w-107.5
              h-150
              shadow-[0_25px_80px_rgba(184,149,129,0.18)]
              border
              border-white/50
            "
          >
            {/* IMAGE */}
            <img
              src={fotos[fotoAtual]}
              alt="Thalita Santos"
              className="
                w-full
                h-full
                object-cover
                object-top
                transition-all
                duration-500
              "
            />

            {/* gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent" />

            {/* LEFT BUTTON */}
            <button
              onClick={prevSlide}
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                w-11
                h-11
                rounded-full
                bg-white/70
                backdrop-blur-md
                border
                border-white/50
                flex
                items-center
                justify-center
                text-[#4A3A33]
                hover:bg-white
                hover:scale-105
                transition-all
                duration-300
              "
            >
              ←
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={nextSlide}
              className="
                absolute
                right-5
                top-1/2
                -translate-y-1/2
                w-11
                h-11
                rounded-full
                bg-white/70
                backdrop-blur-md
                border
                border-white/50
                flex
                items-center
                justify-center
                text-[#4A3A33]
                hover:bg-white
                hover:scale-105
                transition-all
                duration-300
              "
            >
              →
            </button>

            {/* DOTS */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              {fotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setFotoAtual(index)}
                  className={`
                    h-2.5
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      fotoAtual === index
                        ? "w-10 bg-white"
                        : "w-2.5 bg-white/50"
                    }
                  `}
                />
              ))}
            </div>
          </div>

          {/* FLOAT CARD */}
          <div
            className="
              absolute
              -bottom-8
              right-0
              bg-white/90
              backdrop-blur-xl
              border
              border-[#EFE5DD]
              rounded-[30px]
              px-7
              py-5
              shadow-2xl
              shadow-[#D8C2B2]/10
              hidden
              md:block
            "
          >
            <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-[#C3A995] mb-2">
              acolhimento
            </span>

            <p className="font-['Cormorant_Garamond'] italic text-[#B89581] text-[1.2rem] leading-snug max-w-55">
              “Escutar também é uma forma de cuidar.”
            </p>
          </div>
        </div>

        {/* TEXT SIDE */}
        <div>

          {/* LABEL */}
          <span className="block text-[0.72rem] uppercase tracking-[0.35em] text-[#C3A995] mb-6">
            Sobre mim
          </span>

          {/* TITLE */}
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl leading-[1.02] text-[#4A3A33] mb-6">
            Thalita{" "}
            <em className="italic text-[#C3A995]">
              Santos
            </em>
          </h2>

          {/* CRP */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2.5
              rounded-full
              bg-[#F7EEE8]
              text-[#B89581]
              text-[0.72rem]
              uppercase
              tracking-[0.18em]
              mb-10
              border
              border-[#E9D8CC]
            "
          >
            ✦ CRP 06/139597 · Psicóloga & Psicanalista
          </div>

          {/* TEXTS */}
          <div className="space-y-7">

            <p className="text-[1rem] md:text-[1.03rem] font-light leading-loose text-[#7B685D]">
              Meu maior objetivo como psicóloga é permitir que meus pacientes
              possam se escutar para que, assim, consigam entender quem são
              profundamente.
            </p>

            <p className="text-[1rem] md:text-[1.03rem] font-light leading-loose text-[#7B685D]">
              Acredito que o autoconhecimento é um caminho delicado e
              transformador — e que, quando percorrido com acolhimento, pode
              tornar a vida mais leve, consciente e saudável.
            </p>

            <p className="text-[1rem] md:text-[1.03rem] font-light leading-loose text-[#7B685D]">
              Atendo adolescentes e adultos de forma presencial em Barueri (SP)
              e também online, respeitando a individualidade e o ritmo de cada
              pessoa.
            </p>
          </div>

          {/* MINI INFO CARDS */}
          <div className="grid sm:grid-cols-2 gap-4 mt-12">

            <div
              className="
                bg-white/70
                backdrop-blur-sm
                border
                border-[#EFE5DD]
                rounded-3xl
                p-6
              "
            >
              <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-[#C3A995] mb-2">
                Atendimento
              </span>

              <p className="font-['Cormorant_Garamond'] text-2xl text-[#4A3A33]">
                Online & Presencial
              </p>
            </div>

            <div
              className="
                bg-white/70
                backdrop-blur-sm
                border
                border-[#EFE5DD]
                rounded-3xl
                p-6
              "
            >
              <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-[#C3A995] mb-2">
                Público
              </span>

              <p className="font-['Cormorant_Garamond'] text-2xl text-[#4A3A33]">
                Adultos & Adolescentes
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;