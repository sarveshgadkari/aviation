import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Mission from "@/components/Mission";
import ProgramAreasPreview from "@/components/ProgramAreasPreview";
import StudentOpportunities from "@/components/StudentOpportunities";
import Impact from "@/components/Impact";
import Partners from "@/components/Partners";
import Legacy from "@/components/Legacy";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Mission />
      <ProgramAreasPreview />
      <StudentOpportunities />
      <Impact />
      <Partners />
      <Legacy />
      <Contact />
    </>
  );
}
