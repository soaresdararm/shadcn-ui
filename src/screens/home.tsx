import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  default as profileImage,
  default as project2,
} from "../assets/devices-animate.svg";
import project1 from "../assets/Firmware-amico.svg";
import rental from "../assets/Mobile UX-amico.svg";

interface Skill {
  name: string;
  icon: string;
  description: string;
}

const skills: Skill[] = [
  {
    name: "Tailwind CSS",
    icon: "🎨",
    description:
      "React é uma biblioteca JavaScript para construir interfaces de usuário.",
  },
  {
    name: "HTML5 & CSS3",
    icon: "🌐",
    description:
      "React é uma biblioteca JavaScript para construir interfaces de usuário.",
  },
  {
    name: "API Integration",
    icon: "🔌",
    description:
      "React é uma biblioteca JavaScript para construir interfaces de usuário.",
  },
  {
    name: "JavaScript",
    icon: "🟨",
    description:
      "JavaScript é uma linguagem de programação usada principalmente no desenvolvimento web.",
  },
  {
    name: "React",
    icon: "⚛️",
    description:
      "React é uma biblioteca JavaScript para construir interfaces de usuário.",
  },
  {
    name: "TypeScript",
    icon: "🔷",
    description:
      "TypeScript é um superconjunto de JavaScript que adiciona tipagem estática.",
  },
];

const Home = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };
  return (
    <main className="flex flex-col items-center min-w-96">
      {/* Header */}
      <header className=" w-full py-4 px-6 shadow-md flex items-center justify-between ">
        <div className="text-xl font-bold">Logo</div>
        <nav className="flex space-x-4">
          <a
            href="#about"
            className="text-muted-foreground hover:text-foreground"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-muted-foreground hover:text-foreground"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-muted-foreground hover:text-foreground"
          >
            Contact
          </a>
        </nav>
      </header>
      {/* Main Section with Carousel */}
      <section className="flex-grow  flex items-center justify-center h-screen bg-white w-full overflow-hidden">
        <Carousel className="w-full max-w-5xl  md:max-w-2xl lg:max-w-5xl">
          <CarouselContent>
            {/* Carousel Item 1 */}
            <CarouselItem>
              <Card className="flex flex-col md:flex-row items-center justify-center  p-8 rounded-lg bg-secondary ">
                <img
                  src={profileImage}
                  alt="Technology Revolution"
                  className="w-60 h-60 object-contain"
                />
                <div className="md:ml-8 text-center md:text-left">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold">
                      Tailwind CSS Power
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Building modern and responsive designs quickly with the
                      utility-first Tailwind CSS framework.
                    </p>
                  </CardContent>
                </div>
              </Card>
            </CarouselItem>

            {/* Carousel Item 2 */}
            <CarouselItem>
              <Card className="flex flex-col md:flex-row items-center justify-center bg-card p-8 rounded-lg">
                <img
                  src={project1}
                  alt="React Flexibility"
                  className="w-60 h-60 object-contain"
                />
                <div className="md:ml-8 text-center md:text-left">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold">
                      React Dynamic UIs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Crafting efficient and reusable components with the power
                      of React and its vast ecosystem.
                    </p>
                  </CardContent>
                </div>
              </Card>
            </CarouselItem>

            {/* Carousel Item 3 */}
            <CarouselItem>
              <Card className="flex flex-col md:flex-row items-center justify-center bg-secondary  p-8 rounded-lg">
                <img
                  src={rental}
                  alt="Frontend Synergy"
                  className="w-60 h-60 object-contain"
                />
                <div className="md:ml-8 text-center md:text-left">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold">
                      Synergy of Tech
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Combining Tailwind CSS and React to build cutting-edge,
                      performant, and beautiful web apps.
                    </p>
                  </CardContent>
                </div>
              </Card>
            </CarouselItem>
          </CarouselContent>

          {/* Carousel Controls */}
          <div className="flex justify-between items-center mt-4">
            <CarouselPrevious />
            <Separator orientation="vertical" className="h-10" />
            <CarouselNext />
          </div>
        </Carousel>
      </section>

      {/* Section About Tailwind CSS and React */}
      <section
        id="about"
        className="w-full bg-primary-foreground p-10 text-center flex h-screen  items-center justify-center text-black "
      >
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={profileImage}
              alt="Illustration"
              className="w-[180px] sm:w-[200px] md:w-[400px] object-contain"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-start md:items-start text-left mt-8 md:mt-0">
            <div className="text-green-300 text-lg font-bold">About me</div>
            <h1 className="text-2xl md:text-4xl font-bold text-black mt-2 md:mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h1>
            <p className="text-gray-400 mt-2 md:mt-4">
              Beyond coding, I'm a coffee enthusiast, a cat lover, and a
              self-taught artist who enjoys spending my free time doodling. I am
              currently seeking opportunities to bring my skills and enthusiasm
              to a tech company in the United States or Europe and am excited
              about the prospect of relocating to pursue new challenges.
            </p>

            <a
              href="/resume"
              className="inline-block bg-purple-500 text-white py-2 px-4 rounded mt-4 md:mt-6 hover:bg-purple-600 transition-colors"
            >
              My resume
            </a>
          </div>
        </div>
      </section>

      {/* Section Featured Projects */}
      <section
        id="projects"
        className="w-full p-4 md:p-10 md:h-screen flex flex-col items-center justify-center gap-2 md:gap-10 min-h-[800px]"
      >
        <h2 className="text-xl font-bold mb-4 text-center md:text-3xl">
          Projects Built with React & Tailwind
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src={project1}
              alt="Project 1"
              className="w-full h-28 object-cover md:h-48"
            />
            <div className="p-4">
              <h3 className="font-semibold">Project One</h3>
              <p className="text-gray-600">
                A fully responsive web application using Tailwind and React.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src={project2}
              alt="Project 2"
              className="w-full h-28 object-cover md:h-48"
            />
            <div className="p-4">
              <h3 className="font-semibold">Project Two</h3>
              <p className="text-gray-600">
                An interactive dashboard showcasing React components.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src={project1}
              alt="Project 3"
              className="w-full h-28 object-cover md:h-48"
            />
            <div className="p-4">
              <h3 className="font-semibold">Project Three</h3>
              <p className="text-gray-600">
                A feature-rich platform for seamless user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Key Skills */}
      <section className="w-full p-10 flex flex-col items-center justify-center h-screen bg-violet-100">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-black ">
          Key Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-violet-700 text-white p-4 md:p-6 rounded-lg flex items-center justify-center flex-col shadow-lg hover:shadow-xl hover:bg-violet-600 transition duration-300 ease-in-out cursor-pointer"
              onClick={() => handleSkillClick(skill)}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-4xl mb-2">{skill.icon}</span>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal - Usando Dialog Skills */}
      {selectedSkill && (
        <Dialog open={Boolean(selectedSkill)} onOpenChange={closeModal}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>{selectedSkill.name}</DialogTitle>
              <DialogDescription>{selectedSkill.description}</DialogDescription>
            </DialogHeader>
            <div className="flex justify-end mt-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600"
              >
                Fechar
              </button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Contact Section */}
      <section id="contact" className="w-full bg-white p-10 text-center ">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-4">
          Interested in collaborating or learning more about my projects? Feel
          free to reach out!
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Contact Me
        </Link>
      </section>
    </main>
  );
};

export default Home;
