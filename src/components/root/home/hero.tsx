import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Grids from "@/assets/grid-lines.png";
import Stars from "@/assets/stars.png";

const Hero = () => {
  return (
    <main className="bg-[radial-gradient(100%_100%_at_center,hsl(142.1,76.2%,36.3%,0.4)_5%,hsl(142.1,66%,38%,0.2)_20%,transparent_100%)]">
    <div
      className="min-h-[90vh] flex w-full relative px-4 md:px-0 justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${Stars})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <main
        className="max-w-2xl z-10 relative mx-auto text-center space-y-4 bg-cover bg-center"
      >
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Supercharge Your Learning with Smart AI & Seamless Integrations
        </h1>
        <p className="text-sm font-normal tracking-tight leading-relaxed text-muted-foreground">
          Struggling to stay organized? Our AI-powered study assistant helps
          you manage notes, schedule study sessions, and collaborate
          effortlessly with Notion, Google Calendar, and more. Track your
          progress, get instant answers, and stay ahead—all in one place!
        </p>

        <main className="flex flex-row gap-4 items-center justify-center">
          <Button variant={"outline"} size={"sm"} asChild>
            <Link to={"/sign-up"}>Get Started</Link>
          </Button>

          <Button variant={"default"} size={"sm"} asChild>
            <Link to={"/pricing"}>Learn More</Link>
          </Button>
        </main>
      </main>

      {/* Decorative Images for Larger Screens */}
      <main className="h-[90vh] absolute w-screen hidden md:block">
        <img
          src="/cta (1).png"
          alt="cta 1"
          className="h-[40vh] w-[40vh] object-cover absolute top-32 left-28"
        />
      </main>

      <main className="h-[90vh] w-screen absolute hidden md:block">
        <img
          src="/cta (2).png"
          alt="cta 2"
          className="h-[45vh] w-[40vh] object-cover absolute bottom-12 right-12"
        />
      </main>

      <main className="inset-0 absolute h-[90vh] w-full overflow-hidden rounded-xl bg-opacity-5 opacity-20" style={{
        backgroundImage: `url(${Grids})`,
        backgroundRepeat: "repeat",
      }}>
      </main>
    </div>
    </main>
  );
};

export default Hero;
