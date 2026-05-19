import thalita from "../../assets/thalita.jpeg";

export function Hero() {
  return (
    <main className="bg-[#F5F0EA]">
      <section className="pt-44 pb-28 px-6 relative overflow-hidden">
        
        {/* blur decorativo */}
        <div className="absolute top-30 left-30 w-[320px] h-80 rounded-full bg-[#F3E7DD] blur-3xl opacity-60" />
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
          
          {/* TEXT */}
          <div>
            
            {/* LABEL */}
            <span className="block text-xs uppercase tracking-[0.35em] text-[#B79B87] mb-7">
              Psicóloga · Psicanalista
            </span>

            {/* TITLE */}
            <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl leading-[1.02] mb-8 text-[#4A3A33]">
              Invista em você: <br />
              inicie sua{" "}
              <span className="italic text-[#B79B87]">
                jornada
              </span>{" "}
              hoje.
            </h1>

            {/* TEXT */}
            <p className="text-[1.05rem] font-light leading-loose text-[#7A685D] mb-12 max-w-xl">
              Você é o maior investimento que pode fazer. A psicoterapia oferece
              um espaço seguro para aprofundar o autoconhecimento, clarear seus
              desejos e construir uma vida com mais sentido — uma jornada que
              transforma hoje e acompanha você para sempre.
            </p>

            {/* BUTTON */}
            <a
              href="#contato"
              className="
                inline-flex
                items-center
                gap-3
                bg-[#B79B87]
                text-white
                px-10
                py-5
                rounded-full
                text-[0.82rem]
                uppercase
                tracking-[0.12em]
                shadow-lg
                shadow-[#B79B87]/20
                hover:bg-[#A58A76]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              Agendar primeira sessão
            </a>
          </div>

          {/* IMAGE */}
          <div className="relative">
            
            {/* fundo suave */}
            <div className="absolute inset-0 bg-[#F3E7DD] rounded-[42px] rotate-3 scale-[1.02]" />

            <img
              src={thalita}
              alt="Thalita Santos, psicóloga e psicanalista"
              className="
                relative
                z-10
                w-full
                h-180
                object-cover
                object-top
                rounded-[42px]
                shadow-2xl
                shadow-[#B79B87]/15
              "
              loading="eager"
            />

            {/* CARD */}
            <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md p-8 rounded-[28px] shadow-2xl shadow-[#B79B87]/10 max-w-70 hidden sm:block border border-[#E8D9C8]/40 z-20">
              
              <p className="font-['Cormorant_Garamond'] italic text-[1.25rem] text-[#B79B87] leading-relaxed">
                “O encontro humano é onde a transformação começa.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;