import { useState } from "react";

import consultorio from "../../assets/consultorioultimo.jpeg";
import consultorio2 from "../../assets/consultoriodois.jpeg";
import consultorio3 from "../../assets/consultoriotres.jpeg";
import consultorio4 from "../../assets/consultorioquatro.jpeg";
import consultorio5 from "../../assets/consultoriocinco.jpeg";

export function Consultorio() {
  const imagens = [consultorio, consultorio2, consultorio3, consultorio4, consultorio5];

  const [imagemAtual, setImagemAtual] = useState(0);

  const nextSlide = () => {
    setImagemAtual((prev) => (prev + 1) % imagens.length);
  };

  const prevSlide = () => {
    setImagemAtual((prev) =>
      prev === 0 ? imagens.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative overflow-hidden py-28 px-6 bg-[#F5F0EA]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <div className="relative">

          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-[38px] shadow-[0_20px_60px_rgba(168,149,126,0.15)]">
            
            <img
              src={imagens[imagemAtual]}
              alt="Consultório"
              className="
                w-full
                h-155
                object-cover
                object-center
                transition-all
                duration-500
              "
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent" />

            {/* LEFT BUTTON */}
            <button
              onClick={prevSlide}
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                w-12
                h-12
                rounded-full
                bg-white/70
                backdrop-blur-md
                border
                border-white/40
                flex
                items-center
                justify-center
                text-[#3E2F28]
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
                w-12
                h-12
                rounded-full
                bg-white/70
                backdrop-blur-md
                border
                border-white/40
                flex
                items-center
                justify-center
                text-[#3E2F28]
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
              {imagens.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setImagemAtual(index)}
                  className={`
                    h-2.5
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      imagemAtual === index
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
              -right-6
              bg-white/90
              backdrop-blur-xl
              rounded-[28px]
              px-7
              py-5
              shadow-2xl
              border
              border-[#E8D9C8]
              hidden
              md:flex
              flex-col
            "
          >
            <span className="text-[0.7rem] uppercase tracking-[0.18em] text-[#A8957E] mb-2">
              Ambiente
            </span>

            <p className="font-['Cormorant_Garamond'] italic text-[1.2rem] text-[#3E2F28] leading-snug max-w-55">
              Um espaço acolhedor pensado para você se sentir segura.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>

          {/* LABEL */}
          <span className="block text-xs uppercase tracking-[0.32em] text-[#A8957E] mb-6">
            Modalidades
          </span>

          {/* TITLE */}
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl leading-[1.05] text-[#3E2F28] mb-10">
            Como podemos <br />
            nos <em className="italic text-[#B89B84]">encontrar</em>
          </h2>

          <p className="text-[#6B5B4D] leading-[1.9] font-light text-[1rem] max-w-135 mb-12">
            Cada atendimento é pensado para que você se sinta confortável,
            acolhida e livre para viver seu processo com tranquilidade.
          </p>

          {/* CARDS */}
          <div className="space-y-6">

            {/* PRESENCIAL */}
            <div
              className="
                bg-white
                rounded-[30px]
                p-9
                border
                border-[#E8D9C8]
                shadow-[0_10px_40px_rgba(168,149,126,0.08)]
              "
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-[#F5F0EA] flex items-center justify-center text-2xl">
                  🏢
                </div>

                <div>
                  <h3 className="font-['Cormorant_Garamond'] text-[2rem] text-[#3E2F28]">
                    Presencial
                  </h3>

                  <span className="text-[0.7rem] uppercase tracking-[0.18em] text-[#A8957E]">
                    Barueri · SP
                  </span>
                </div>
              </div>

              <p className="text-[#6B5B4D] leading-[1.9] font-light">
                R. Adelino Cardana, 293 — Bethaville, Barueri – SP
                <br />
                Office Innovation
              </p>
            </div>

            {/* ONLINE */}
            <div
              className="
                rounded-[30px]
                p-9
                bg-linear-to-br
                from-[#4B3A31]
                to-[#3E2F28]
                shadow-[0_15px_60px_rgba(0,0,0,0.15)]
              "
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl">
                  💻
                </div>

                <div>
                  <h3 className="font-['Cormorant_Garamond'] text-[2rem] text-[#F5F0EA]">
                    Online
                  </h3>

                  <span className="text-[0.7rem] uppercase tracking-[0.18em] text-[#D4B5A0]">
                    Qualquer lugar
                  </span>
                </div>
              </div>

              <p className="text-[#F5F0EA]/75 leading-[1.9] font-light">
                Por vídeochamada ou ligação de áudio, a modalidade é definida
                em conjunto com o paciente conforme sua preferência e rotina.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Consultorio;