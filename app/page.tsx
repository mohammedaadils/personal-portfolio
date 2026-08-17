import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AccordionSection from "./components/AccordionSection";
import ExperienceContent from "./components/ExperienceContent";
import ProjectsContent from "./components/ProjectsContent";
import ResearchContent from "./components/ResearchContent";
import SkillsContent from "./components/SkillsContent";
import EducationContent from "./components/EducationContent";
import ContactContent from "./components/ContactContent";
import Footer from "./components/Footer";
import { experience } from "./content";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <AccordionSection id="experience" title="Experience" count={experience.length}>
          <ExperienceContent />
        </AccordionSection>

        <AccordionSection id="projects" title="Selected Projects">
          <ProjectsContent />
        </AccordionSection>

        <AccordionSection id="research" title="Research">
          <ResearchContent />
        </AccordionSection>

        <AccordionSection id="skills" title="Skills">
          <SkillsContent />
        </AccordionSection>

        <AccordionSection id="education" title="Education">
          <EducationContent />
        </AccordionSection>

        <AccordionSection id="contact" title="Contact">
          <ContactContent />
        </AccordionSection>
      </main>
      <Footer />
    </>
  );
}
