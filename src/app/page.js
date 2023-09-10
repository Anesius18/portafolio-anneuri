import HelloSection from "./components/HelloSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import DiscordCard from "./components/DiscordCard";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <div className="sm:flex flex-row lg:space-x-44 ">
          <HelloSection />
          <div className="">
            <DiscordCard />
          </div>
        </div>

        <div className="mb-8 flex row-span-3 py-8"></div>
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
