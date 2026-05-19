import { useState } from "react";

export function Signs() {
  const symptoms = [
    {
      title: "Baixa motivação",
      text: "A sensação constante de cansaço emocional pode fazer tarefas simples parecerem difíceis e sem sentido.",
    },
    {
      title: "Estresse",
      text: "Quando a mente permanece sobrecarregada por muito tempo, o corpo e as emoções também começam a sentir os impactos.",
    },
    {
      title: "Ausência de autocontrole",
      text: "Dificuldade em controlar emoções, impulsos ou reações pode indicar conflitos internos importantes.",
    },
    {
      title: "Ansiedade excessiva",
      text: "Pensamentos acelerados, preocupação constante e sensação de alerta podem afetar sua qualidade de vida.",
    },
    {
      title: "Evita pensar no passado",
      text: "Algumas experiências ficam guardadas silenciosamente e influenciam nossa vida mesmo sem percebermos.",
    },
    {
      title: "Falta de autoconhecimento",
      text: "Entender quem você é, o que sente e o que deseja é parte essencial de uma vida mais saudável.",
    },
    {
      title: "Transtornos alimentares",
      text: "A relação com a alimentação também pode refletir emoções profundas e conflitos internos.",
    },
    {
      title: "Depressão",
      text: "A sensação de vazio, tristeza persistente e desconexão emocional merece acolhimento e cuidado.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="signs"
      className="relative overflow-hidden bg-[#FCF8F5] py-24 px-5"
    >
      {/* decoração */}
      <div className="absolute top-30 right-30 w-70 h-70 rounded-full bg-[#F3E7DD] blur-3xl opacity-50" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="mb-12 text-center md:text-left">
          <span className="block text-[0.7rem] uppercase tracking-[0.35em] text-[#C3A995] mb-5">
            Identificação
          </span>

          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-6xl leading-[1.08] text-[#4A3A33] mb-5">
            Será que a terapia é{" "}
            <em className="italic text-[#C3A995]">
              para mim?
            </em>
          </h2>

          <p className="text-[#7B685D] font-light leading-[1.9] max-w-2xl">
            Se você se identifica com algum destes sinais, toque em um deles
            para entender melhor.
          </p>
        </div>

        {/* LIST */}
        <div className="space-y-4">
          {symptoms.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.title}
                className={`
                  rounded-[28px]
                  border
                  transition-all
                  duration-300
                  overflow-hidden
                  ${
                    isOpen
                      ? "bg-[#F7EEE8] border-[#DABFAE] shadow-lg shadow-[#DABFAE]/10"
                      : "bg-white/80 border-[#EFE5DD]"
                  }
                `}
              >
                {/* HEADER BUTTON */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`
                        w-3 h-3 rounded-full shrink-0
                        ${
                          isOpen
                            ? "bg-[#B89581]"
                            : "bg-[#DCC7B8]"
                        }
                      `}
                    />

                    <span className="text-[#4A3A33] text-[1rem] md:text-[1.05rem] font-light">
                      {item.title}
                    </span>
                  </div>

                  <span
                    className={`
                      text-[#B89581]
                      text-2xl
                      transition-transform
                      duration-300
                      ${isOpen ? "rotate-45" : ""}
                    `}
                  >
                    +
                  </span>
                </button>

                {/* CONTENT */}
                <div
                  className={`
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "max-h-75 opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <div className="px-6 pb-6 border-t border-[#E8DDD5]">
                    <p className="pt-5 text-[#7B685D] text-[0.95rem] leading-[1.9] font-light">
                      {item.text}
                    </p>

                    <p className="mt-4 italic text-[#B89581] font-['Cormorant_Garamond']">
                      Cada experiência é única — compreender a origem dos
                      sintomas faz parte do processo terapêutico.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Signs;