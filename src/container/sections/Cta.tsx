export function Cta() {
  return (
    <>
      {/* CTA */}
      <section
        id="cta"
        className="
          relative
          overflow-hidden
          bg-linear-to-br
          from-[#6B5B4D]
          via-[#5A4A3F]
          to-[#3E2F28]
          py-32
          px-6
        "
      >
        {/* glow */}
        <div className="absolute left-1/2 top-1/2 w-175 h-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,181,160,0.12)_0%,transparent_70%)]" />

        {/* blur */}
        <div className="absolute top-30 right-30 w-[320px] h-80 rounded-full bg-[#D4B5A0]/10 blur-3xl" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          
          {/* LABEL */}
          <span className="inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.35em] text-[#D4B5A0] mb-7">
            <span className="w-8 h-px bg-[#D4B5A0]/40" />
            Dar o primeiro passo
            <span className="w-8 h-px bg-[#D4B5A0]/40" />
          </span>

          {/* TITLE */}
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl leading-[1.05] text-[#F8F4EF] max-w-212.5 mx-auto mb-8">
            Uma jornada que transforma hoje e acompanha{" "}
            <em className="italic text-[#D4B5A0]">
              você para sempre
            </em>
          </h2>

          {/* TEXT */}
          <p className="text-[#F5F0EA]/70 text-[1rem] md:text-[1.05rem] font-light leading-loose max-w-145 mx-auto mb-14">
            Agende sua primeira sessão e comece um processo de acolhimento,
            escuta e autoconhecimento com delicadeza e leveza.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            
            {/* WHATS */}
            <a
              href="https://wa.me/5511957877900"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                overflow-hidden
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#F8F4EF]
                px-9
                py-5
                text-[#4A3A33]
                text-[0.78rem]
                uppercase
                tracking-[0.18em]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-2xl
                hover:shadow-black/10
              "
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <span className="relative z-10 text-lg">
                ✨
              </span>

              <span className="relative z-10">
                Falar pelo WhatsApp
              </span>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:contato@thalitasantos.com.br"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-white/15
                bg-white/5
                backdrop-blur-md
                px-9
                py-5
                text-[#F8F4EF]
                text-[0.78rem]
                uppercase
                tracking-[0.18em]
                transition-all
                duration-500
                hover:bg-white/10
                hover:border-[#D4B5A0]/30
                hover:-translate-y-1
              "
            >
              <span className="text-base">
                ✉
              </span>

              Enviar e-mail
            </a>
          </div>

          {/* CARD */}
          <div
            className="
              mt-16
              inline-flex
              items-center
              gap-4
              rounded-full
              border
              border-white/10
              bg-white/5
              backdrop-blur-md
              px-7
              py-4
            "
          >
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#D4B5A0]" />
              <div className="w-10 h-10 rounded-full bg-[#B89581]" />
              <div className="w-10 h-10 rounded-full bg-[#F5F0EA]" />
            </div>

            <p className="text-[#F5F0EA]/70 text-sm font-light">
              Atendimento online & presencial
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="
          bg-[#3E2F28]
          border-t
          border-white/5
          px-6
          md:px-[8vw]
          py-10
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-8
          "
        >
          
          {/* LEFT */}
          <div className="text-center md:text-left">
            <div className="font-['Cormorant_Garamond'] text-[1.5rem] text-[#F8F4EF]">
              Thalita{" "}
              <span className="italic text-[#D4B5A0]">
                Santos
              </span>
            </div>

            <p className="text-[#F5F0EA]/45 text-[0.78rem] tracking-[0.12em] uppercase mt-2">
              Psicóloga & Psicanalista
            </p>
          </div>

          {/* CENTER */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-[#F5F0EA]/50 text-[0.78rem] tracking-[0.08em]">
              CRP 06/139597 · Barueri, SP
            </p>

            <p className="text-[#F5F0EA]/35 text-[0.72rem]">
              © 2026 · Todos os direitos reservados
            </p>
          </div>

          {/* SOCIALS */}
          <div className="flex items-center gap-4">
            
            {/* Instagram */}
            <a
              href="https://www.instagram.com/thalitasantos.psi/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                w-12
                h-12
                rounded-full
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                flex
                items-center
                justify-center
                text-[#D4B5A0]
                transition-all
                duration-500
                hover:bg-[#D4B5A0]
                hover:text-[#3E2F28]
                hover:scale-110
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.5h8.5a4.25 4.25 0 014.25 4.25v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm8.75 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5A3.5 3.5 0 1112 15.5 3.5 3.5 0 0112 8.5z" />
              </svg>
            </a>

            {/* Whats */}
            <a
              href="https://wa.me/5511957877900"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                w-12
                h-12
                rounded-full
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                flex
                items-center
                justify-center
                text-[#D4B5A0]
                transition-all
                duration-500
                hover:bg-[#D4B5A0]
                hover:text-[#3E2F28]
                hover:scale-110
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M20.52 3.48A11.82 11.82 0 0012.06 0C5.54 0 .24 5.3.24 11.82c0 2.08.54 4.1 1.57 5.88L0 24l6.48-1.7a11.8 11.8 0 005.58 1.42h.01c6.52 0 11.82-5.3 11.82-11.82 0-3.16-1.23-6.13-3.47-8.42z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Cta;