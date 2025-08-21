import Couverture from "@/components/Couverture";
import Nav from "@/components/Nav";
import Seconde from "@/components/Seconde";
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
      </main>
    </>
  );
}

