import AboutMe from "./AboutMe";
import Me from "./Me";
import Profile from "./Profile";

export default function Seconde() {
  return (
    <section className="pt-32 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-32 items-start">
      <Me />
     <AboutMe />
     <Profile />
    </section>
  );
}
