import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Terapia", href: "#signs" },
    { label: "Sessões", href: "#expect" },
    { label: "Psicanálise", href: "#psycho" },
    { label: "Sobre", href: "#about" },
  ];

  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-100
        px-4
        md:px-[6vw]
        pt-4
      "
    >
      <nav
        className="
          max-w-7xl
          mx-auto
          flex
          items-center
          justify-between
          rounded-full
          border
          border-[#EADFD6]
          bg-[rgba(252,248,245,0.78)]
          backdrop-blur-xl
          px-6
          md:px-8
          py-4
          shadow-lg
          shadow-[#D8C2B2]/10
        "
      >
        {/* LOGO */}
        <a
          href="/"
          className="
            text-[1.7rem]
            md:text-[1.9rem]
            tracking-[0.04em]
            text-[#4A3A33]
            font-['Cormorant_Garamond']
            leading-none
          "
        >
          Thalita{" "}
          <span className="italic text-[#C3A995]">
            Santos
          </span>
        </a>

        {/* DESKTOP LINKS */}
        <ul className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="
                  relative
                  text-[0.74rem]
                  uppercase
                  tracking-[0.22em]
                  text-[#7B685D]
                  transition-all
                  duration-300
                  hover:text-[#4A3A33]
                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:h-px
                  after:w-0
                  after:bg-[#C3A995]
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          
          {/* CTA DESKTOP */}
          <a
            href="#cta"
            className="
              hidden
              md:inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#F3E7DD]
              px-6
              py-3
              text-[0.72rem]
              uppercase
              tracking-[0.18em]
              text-[#6B5B4D]
              transition-all
              duration-500
              hover:bg-[#CDB3A2]
              hover:text-white
              hover:-translate-y-0.5
            "
          >
            ✨ Agendar sessão
          </a>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              lg:hidden
              w-11
              h-11
              rounded-full
              bg-[#F3E7DD]
              flex
              items-center
              justify-center
              text-[#6B5B4D]
              transition-all
              duration-300
            "
          >
            <div className="flex flex-col gap-1">
              <span
                className={`
                  block
                  w-5
                  h-[1.5px]
                  bg-current
                  transition-all
                  duration-300
                  ${
                    menuOpen
                      ? "translate-y-[5.5px] rotate-45"
                      : ""
                  }
                `}
              />

              <span
                className={`
                  block
                  w-5
                  h-[1.5px]
                  bg-current
                  transition-all
                  duration-300
                  ${
                    menuOpen
                      ? "opacity-0"
                      : ""
                  }
                `}
              />

              <span
                className={`
                  block
                  w-5
                  h-[1.5px]
                  bg-current
                  transition-all
                  duration-300
                  ${
                    menuOpen
                      ? "translate-y-[-5.5px] -rotate-45"
                      : ""
                  }
                `}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-500
          ${
            menuOpen
              ? "max-h-100] opacity-100 mt-4"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div
          className="
            rounded-4xl
            border
            border-[#EADFD6]
            bg-[rgba(252,248,245,0.95)]
            backdrop-blur-xl
            shadow-xl
            shadow-[#D8C2B2]/10
            p-6
          "
        >
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    block
                    text-[0.82rem]
                    uppercase
                    tracking-[0.18em]
                    text-[#6B5B4D]
                    transition-colors
                    duration-300
                    hover:text-[#4A3A33]
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* MOBILE CTA */}
          <a
            href="#cta"
            onClick={() => setMenuOpen(false)}
            className="
              mt-7
              inline-flex
              w-full
              items-center
              justify-center
              rounded-full
              bg-[#CDB3A2]
              px-6
              py-4
              text-[0.74rem]
              uppercase
              tracking-[0.18em]
              text-white
              transition-all
              duration-300
              hover:bg-[#B89581]
            "
          >
            ✨ Agendar sessão
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;