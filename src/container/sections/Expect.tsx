export function Expect() {
  const cards = [
    {
      icon: "🌿",
      title: "Atendimento individualizado",
      desc: "Num percurso analítico, buscamos compreender as particularidades de cada um. Você e o que você traz serão o meu guia.",
    },
    {
      icon: "☁️",
      title: "Psicoterapia descomplicada",
      desc: "Associe livremente. Não prepare assuntos. Me fala o que você sente e vamos partir daí. Você define o ritmo do processo.",
    },
    {
      icon: "🤍",
      title: "Ambiente acolhedor",
      desc: "Valorizo a troca entre terapeuta e paciente. Você não fala para um profissional distante, mas para alguém presente.",
    },
    {
      icon: "✨",
      title: "Sessões semanais",
      desc: "Um ritmo fixo de atendimentos é essencial para desenvolvermos um vínculo e para que a análise possa fluir positivamente.",
    },
  ];

  return (
    <section
      id="expect"
      className="relative overflow-hidden bg-[#F5F0EA] py-28 px-6"
    >
      {/* blur decorativo */}
      <div className="absolute left-30 bottom-30 w-[320px] h-80 rounded-full bg-[#F3E7DD] blur-3xl opacity-60" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* LABEL */}
        <span className="block text-xs uppercase tracking-[0.35em] text-[#C3A995] mb-6">
          O que esperar
        </span>

        {/* TITLE */}
        <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl leading-[1.05] text-[#4A3A33] max-w-3xl">
          Sessões pensadas <br />
          para{" "}
          <em className="italic text-[#C3A995]">
            você
          </em>
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
          {cards.map((card) => (
            <div
              key={card.title}
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                bg-white/80
                backdrop-blur-md
                border
                border-[#EFE5DD]
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-[#D8C2B2]/10
              "
            >
              {/* glow hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,rgba(243,231,221,0.5),transparent_70%)]" />


              {/* TITLE */}
              <h3 className="relative z-10 font-['Cormorant_Garamond'] text-[1.6rem] leading-tight text-[#4A3A33] mb-4">
                {card.title}
              </h3>

              {/* DESC */}
              <p className="relative z-10 text-[0.95rem] font-light leading-[1.9] text-[#7B685D]">
                {card.desc}
              </p>

              {/* linha decorativa */}
              <div className="relative z-10 mt-8 w-12 h-px bg-[#D8C2B2]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expect;