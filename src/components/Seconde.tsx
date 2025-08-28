import AboutMe from "./AboutMe";
import Me from "./Me";
import Profile from "./Profile";

export default function Seconde() {
  
  return (
    <section className=" pt-12 md:pt-16 lg:pt-24 xl:pt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  xl:gap-24 2xl:gap-32 items-start">
      <Me />
     <AboutMe />
     <Profile />
    </section>
  );
}
