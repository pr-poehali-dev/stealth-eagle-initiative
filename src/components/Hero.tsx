import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/5c8ad14c-ba5c-4140-9e01-019d6717a33d/files/c8de3b66-f1f6-4556-8b33-bf2016e14e20.jpg"
          alt="Такси ночью"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          ДОЕДЕМ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90 mb-8">
          Быстро, комфортно и безопасно — такси в любую точку города
        </p>
        <a
          href="tel:+79776607207"
          className="inline-block bg-white text-black px-8 py-3 uppercase tracking-wide text-sm font-semibold hover:bg-neutral-200 transition-colors duration-300"
        >
          Позвонить
        </a>
      </div>
    </div>
  );
}