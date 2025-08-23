import Couverture from "@/components/Couverture";
import Frameworks from "@/components/Frameworks";
import Nav from "@/components/Nav";
import Seconde from "@/components/Seconde";
import Work from "@/components/Work";
import Head from "next/head";
export default function Home() {
  return (
    <>
    <Head>
      <title>Home - Portfolio</title>
    </Head>
      <main className="px-3">
        <Nav/>
        <Couverture/>
        <Seconde/>
        {/* {<Frameworks/>} */}
        <Work/>
      </main>
    </>
  );
}

