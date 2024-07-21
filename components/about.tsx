"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      After graduating with a degree in <span className="font-medium">Software Engineering</span>,
      I decided to pursue my passion for mobile app development. 
      I started by developing native apps using <span className="font-medium">Java/Kotlin and Swift UI</span> for two years. Later, 
      I transitioned to <span className="font-medium">Flutter</span> for building hybrid apps. 
      <span className="italic">My favorite part of programming</span> 
      is creating cross-platform apps with a native-like feel and performance. 
      I <span className="underline">love</span> the satisfaction of seeing users enjoy the seamless experience my apps provide. 
      My core stack is <span className="font-medium">Flutter, Dart, and Firebase</span>. 
      I am also proficient in <span className="font-medium">JavaScript, PHP, HTML, CSS, Java, and Kotlin</span>. 
      I am always eager to learn new technologies and improve my skills. 
      I am currently looking for exciting opportunities to collaborate on innovative projects and further my career as a <span className="font-medium">software engineer</span>.
      </p>

      <p>
      <span className="italic">When I'm not coding</span>, I enjoy researching the latest technologies, 
      playing video games, and exploring new advancements in the tech world. 
      I also enjoy <span className="font-medium">learning new things</span>. 
      I am currently delving into <span className="font-medium">cutting-edge technologies and innovative solutions</span> 
      that are shaping the future of software development.
      </p>
    </motion.section>
  );
}
