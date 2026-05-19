export function Psycho() {
  return (
    <section
      id="psycho"
      className="relative overflow-hidden bg-[#3E2F28] py-28 px-6"
    >
      {/* aspas gigantes decorativas */}
      <div className="absolute top-20 right-8 text-[28rem] leading-none text-white/5 font-['Cormorant_Garamond'] pointer-events-none select-none">
        "
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* TEXT */}
        <div>
          <span className="block text-xs uppercase tracking-[0.3em] text-[#D4B5A0] mb-6">
            Entenda
          </span>

          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl leading-[1.1] text-[#F5F0EA] mb-10">
            Como funciona <br />
            a <em className="italic text-[#D4B5A0]">psicanálise?</em>
          </h2>

          <div className="space-y-6">
            <p className="text-[1rem] font-light leading-[1.9] text-[#F5F0EA]/75">
              Você já se pegou agindo de um jeito que não entende, ou sentindo
              algo que não sabe explicar? A psicanálise existe exatamente para isso.
            </p>

            <p className="text-[1rem] font-light leading-[1.9] text-[#F5F0EA]/75">
              Nossa mente funciona como um iceberg: a parte consciente é só a
              superfície. Abaixo dela há uma vastidão de pensamentos,
              sentimentos e desejos inconscientes que guiam nossa vida de formas
              que mal percebemos.
            </p>

            <p className="text-[1rem] font-light leading-[1.9] text-[#F5F0EA]/75">
              Em conjunto, vou buscar essas pistas no que você traz para as
              sessões, para que você se conheça cada vez mais fundo e viva com
              mais qualidade.
            </p>
          </div>
        </div>

        {/* ICEBERG */}
        <div className="flex flex-col items-center">
          
          {/* TOP LABEL */}
          <p className="text-[0.72rem] uppercase tracking-[0.12em] text-[#D4B5A0] mb-2 text-center">
            Consciente
          </p>

          {/* TOP */}
          <div
            className="w-45 h-25 flex items-center justify-center text-center px-4 text-white italic text-[0.9rem] font-['Cormorant_Garamond']"
            style={{
              clipPath: "polygon(20% 100%, 80% 100%, 100% 0%, 0% 0%)",
              background:
                "linear-gradient(135deg, #E8D9C8, #A8957E)",
            }}
          >
            o que sabemos
            <br />
            sobre nós
          </div>

          {/* WATER */}
          <div className="w-60 h-0.5 bg-[#D4B5A0]/40" />

          {/* BOTTOM */}
          <div
            className="w-60 h-55 flex items-center justify-center text-center px-8 text-[#F5F0EA]/60 italic text-[0.9rem] font-['Cormorant_Garamond'] border border-[#A8957E]/20"
            style={{
              clipPath: "polygon(5% 0%, 95% 0%, 85% 100%, 15% 100%)",
              background:
                "linear-gradient(135deg, rgba(168,149,126,0.3), rgba(107,87,68,0.4))",
            }}
          >
            pensamentos,
            <br />
            sentimentos e desejos
            <br />
            inconscientes
          </div>

          {/* BOTTOM LABEL */}
          <p className="text-[0.72rem] uppercase tracking-[0.12em] text-[#D4B5A0]/50 mt-2 text-center">
            Inconsciente
          </p>
        </div>

      </div>
    </section>
  );
}

export default Psycho;