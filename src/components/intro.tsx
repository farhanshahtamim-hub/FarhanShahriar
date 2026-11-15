"use client";
import { useActiveSectionContext } from "@/containers/active-section";
import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsLinkedin, BsYoutube } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  const { ref } = useSectionInView("#home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 flex w-full max-w-[75rem] flex-col items-center px-4 text-center sm:mb-0 sm:px-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            className="relative aspect-video w-[calc(100vw-2rem)] max-w-3xl overflow-hidden rounded-xl shadow-xl sm:w-[80vw] sm:rounded-[20px]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
          >
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/_SGIy7fWa2k"
              title="Farhan Shahriar Tamim's YouTube videos"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </motion.div>

          <motion.span
            className="absolute bottom-3 right-3 text-4xl sm:bottom-8 sm:right-12 sm:text-6xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <Fade
        direction="up"
        delay={400}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <h1 className="mb-10 mt-4 px-4 text-2xl sm:text-4xl">
          <span className="font-bold !leading-[1.5] font-small">
            "Crafting Stories, Frame by Frame."
          </span>{" "}
          <p className="text-[9px]">
            Shaping Visual Narratives, One Frame at a Time.
          </p>
        </h1>
      </Fade>

      <motion.div
        className="mx-auto grid w-full max-w-3xl grid-cols-6 items-center justify-items-center gap-3 px-2 text-base font-medium sm:grid-cols-7 sm:gap-4 sm:px-4 sm:text-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="mailto:work.farhanshahtamim@gmail.com"
          className="group col-span-6 flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-white outline-none transition hover:scale-105 hover:bg-gray-950 focus:scale-105 active:scale-105 dark:bg-white/10 sm:col-span-2 sm:px-7"
          onClick={() => {
            setActiveSection("#contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Connect <Mail color={"#9ca3af"} />
        </Link>

        <a
          className="group col-span-6 flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full borderBlack bg-gray-900 px-5 py-3 text-white transition hover:scale-105 focus:scale-105 active:scale-105 dark:bg-white/10 sm:col-span-2 sm:px-7"
          href="/Resume.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="col-span-2 mx-auto flex h-12 w-12 items-center justify-center rounded-full borderBlack bg-gray-900 text-xl text-white transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10 dark:text-white/60 sm:col-span-1 sm:h-14 sm:w-14 sm:text-2xl"
          href=" https://www.linkedin.com/in/s-m-farhan-sahriar-tamim/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="col-span-2 mx-auto flex h-12 w-12 items-center justify-center rounded-full borderBlack bg-gray-900 text-xl text-white transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10 dark:text-white/60 sm:col-span-1 sm:h-14 sm:w-14 sm:text-2xl"
          href="https://www.instagram.com/farhan_shah_tamim/?next=%2F&hl=en"
          target="_blank"
        >
          <BiLogoInstagramAlt />
        </a>
        <a
          className="col-span-2 mx-auto flex h-12 w-12 items-center justify-center rounded-full borderBlack bg-gray-900 text-xl text-white transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10 dark:text-white/60 sm:col-span-1 sm:h-14 sm:w-14 sm:text-2xl"
          href=" https://www.youtube.com/@FarhanShahriartamim"
          target="_blank"
        >
          <BsYoutube />
        </a>
      </motion.div>
    </section>
  );
}
