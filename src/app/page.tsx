import Awards from "@/components/Awards";
import Couverture from "@/components/Couverture";
import Frameworks from "@/components/Frameworks";
import Nav from "@/components/Nav";
import Numbers from "@/components/Numbers";
import Seconde from "@/components/Seconde";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Head from "next/head";
export default function Home() {
  return (
    <>
    <Head>
      <title>Home - Portfolio</title>
    </Head>
      <main>
        <section className="px-3">
          <Couverture/>
          <Seconde/>
          {/* {<Frameworks/>} */}
          <Work/>
          <Services/>
          <Numbers/>
          <Skills/>
          <Awards/>
        </section>
        
      </main>
    </>
  );
}

