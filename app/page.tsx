import Collection from "@/components/collection";
import Herosection from "@/components/herosection";
import Partners from "@/components/partners";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Herosection />
      <Partners />
      <Collection />
    </main>
  );
}
