import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeUp from "@/animation/fade-up";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { Github, Linkedin, Mail } from "lucide-react";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{ transform: `translateY(${progress * 20}vh)` }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                Mohammad Mirza Suhail
              </h1>
              <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                AI/ML & MLOps Specialist
              </span>

              {/* Social Handles Section */}
              <div className="pointer-events-auto mt-6 flex gap-6">
                <a href={siteMetadata.github} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-accent dark:text-zinc-400">
                  <Github size={30} />
                </a>
                <a href={siteMetadata.linkedin} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-accent dark:text-zinc-400">
                  <Linkedin size={30} />
                </a>
                <a href={`mailto:${siteMetadata.email}`} className="text-zinc-600 hover:text-accent dark:text-zinc-400">
                  <Mail size={30} />
                </a>
              </div>
            </FadeUp>
            
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
                I am a Artificial Intelligence student specializing in building
                intelligent systems and scalable machine learning pipelines. 
                Skilled in <span className="font-semibold text-accent">Python</span>, 
                <span className="font-semibold text-accent">TensorFlow</span>, and 
                <span className="font-semibold text-accent"> Web Development.</span>.
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}