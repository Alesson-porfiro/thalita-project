import { useState } from "react";

export function Faq() {
  const faqs = [
    {
      q: "Atende por convênio?",
      a: "Não, apenas consultas particulares. Mas emito recibo para reembolso no seu plano de saúde.",
    },
    {
      q: "Qual o valor da sessão?",
      a: "Por conta do código de ética da psicologia, não posso divulgar os valores no site. Entre em contato comigo e conversamos com carinho sobre isso.",
    },
    {
      q: "Posso remarcar a sessão?",
      a: "Pode, sim. Porém a remarcação deve ser feita com até 24h de antecedência para que não haja cobrança.",
    },
    {
      q: "Como funciona a psicanálise?",
      a: "Nossa mente funciona como um iceberg: a parte consciente é só a superfície. Abaixo dela existem pensamentos, emoções e desejos inconscientes que influenciam nossa vida. Em conjunto, vamos explorar essas pistas para ampliar seu autoconhecimento e sua qualidade de vida.",
    },
  ];

  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#FCF8F5] py-32 px-6"
    >
      {/* blur decorativo */}
      <div className="absolute right-30 top-[10%] w-[320px] h-80 rounded-full bg-[#F3E7DD] blur-3xl opacity-60" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* LABEL */}
        <span className="block text-[0.7rem] uppercase tracking-[0.35em] text-[#C3A995] mb-6 text-center">
          Perguntas frequentes
        </span>

        {/* TITLE */}
        <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl leading-[1.05] text-[#4A3A33] text-center mb-5">
          Dúvidas{" "}
          <em className="italic text-[#C3A995]">
            frequentes
          </em>
        </h2>

        {/* TEXT */}
        <p className="text-[#7B685D] text-center leading-[1.9] max-w-2xl mx-auto mb-14 font-light">
          Algumas respostas para dúvidas comuns sobre o processo terapêutico,
          atendimento e funcionamento das sessões.
        </p>

        {/* FAQ LIST */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className="
                group
                overflow-hidden
                rounded-[30px]
                border
                border-[#EFE5DD]
                bg-white/80
                backdrop-blur-md
                shadow-lg
                shadow-[#D8C2B2]/5
                transition-all
                duration-500
                hover:shadow-xl
                hover:shadow-[#D8C2B2]/10
              "
            >
              {/* QUESTION */}
              <button
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  gap-6
                  px-7
                  py-6
                  text-left
                "
              >
                <div className="flex items-center gap-4">
                  
                  {/* bolinha */}
                  <div className="w-3 h-3 rounded-full bg-[#D6B8A5] shrink-0" />

                  {/* question */}
                  <span className="font-['Cormorant_Garamond'] text-[1.45rem] md:text-[1.65rem] leading-tight text-[#4A3A33]">
                    {faq.q}
                  </span>
                </div>

                {/* plus */}
                <div
                  className={`
                    w-10
                    h-10
                    rounded-full
                    bg-[#F7EEE8]
                    flex
                    items-center
                    justify-center
                    text-[#B89581]
                    text-2xl
                    transition-all
                    duration-300
                    shrink-0
                    ${
                      open === index
                        ? "rotate-45 bg-[#EEDFD3]"
                        : ""
                    }
                  `}
                >
                  +
                </div>
              </button>

              {/* ANSWER */}
              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-500
                  ${
                    open === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div className="px-7 pb-7 pt-1">
                  
                  <div className="border-t border-[#F3E7DD] pt-5">
                    <p className="text-[#7B685D] leading-loose font-light text-[0.98rem]">
                      {faq.a}
                    </p>

                    {/* detalhe delicado */}
                    <div className="mt-5 flex items-center gap-3">
                      <div className="w-8 h-px bg-[#D6B8A5]" />
                      <span className="text-[#B89581] italic font-['Cormorant_Garamond'] text-lg">
                        acolhimento e escuta
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;