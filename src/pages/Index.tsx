import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function Index() {
  const [hovered, setHovered] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex flex-col items-center justify-center font-golos">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #c8a96e 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        <div
          className="absolute bottom-[-10%] right-[5%] w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #8b6fae 0%, transparent 70%)", filter: "blur(100px)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Nav */}
      <nav
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6 opacity-0 animate-fade-in"
        style={{ animationFillMode: "forwards" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full border border-[#c8a96e]/60 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#c8a96e]" />
          </div>
          <span className="text-white/60 text-sm tracking-widest uppercase font-golos">Название компании</span>
        </div>
        <button className="text-white/40 hover:text-white/80 text-sm transition-colors duration-300 tracking-wide">
          Контакты
        </button>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        {/* Tag */}
        <div
          className="opacity-0 animate-fade-up mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c8a96e]/30 bg-[#c8a96e]/5"
          style={{ animationFillMode: "forwards" }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#c8a96e] animate-pulse" />
          <span className="text-[#c8a96e] text-xs tracking-[0.2em] uppercase font-golos">Новое решение</span>
        </div>

        {/* Headline */}
        <h1
          className="opacity-0 animate-fade-up-delay font-cormorant text-white leading-[1.05] mb-6"
          style={{ animationFillMode: "forwards", fontSize: "clamp(3rem, 8vw, 7rem)" }}
        >
          Ваше главное
          <br />
          <em className="italic text-[#c8a96e]">offer</em>
          <br />
          здесь
        </h1>

        {/* Subheadline */}
        <p
          className="opacity-0 animate-fade-up-delay2 text-white/50 font-golos font-light leading-relaxed mb-12 max-w-xl"
          style={{ animationFillMode: "forwards", fontSize: "clamp(1rem, 2vw, 1.15rem)" }}
        >
          Краткое описание вашего продукта или услуги. Объясните ценность
          для клиента в одном-двух предложениях.
        </p>

        {/* CTA buttons */}
        <div
          className="opacity-0 animate-fade-up-delay3 flex flex-col sm:flex-row items-center gap-4"
          style={{ animationFillMode: "forwards" }}
        >
          <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group relative overflow-hidden px-8 py-4 rounded-full bg-[#c8a96e] text-[#0a0a0a] font-golos font-semibold text-sm tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(200,169,110,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Начать сейчас
              <Icon
                name="ArrowRight"
                size={16}
                className={`transition-transform duration-300 ${hovered ? "translate-x-1" : ""}`}
              />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
          </button>

          <button className="flex items-center gap-2 px-6 py-4 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 font-golos text-sm tracking-wide transition-all duration-300">
            <Icon name="Play" size={14} className="text-[#c8a96e]" />
            Узнать больше
          </button>
        </div>

        {/* Social proof strip */}
        <div
          className="opacity-0 animate-fade-in mt-20 flex items-center gap-6"
          style={{ animationFillMode: "forwards" }}
        >
          <div className="flex -space-x-2">
            {["#8b6fae", "#c8a96e", "#6fae8b", "#ae6f8b"].map((color, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-[#0a0a0a]"
                style={{ backgroundColor: color + "80" }}
              />
            ))}
          </div>
          <p className="text-white/30 text-xs font-golos">
            <span className="text-white/60 font-medium">200+</span> клиентов уже используют решение
          </p>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-white text-[10px] tracking-[0.3em] uppercase font-golos">Листайте</span>
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
      </div>
    </main>
  );
}