import Image from "next/image";
import AdsList from "./components/AdsComponents/AdsList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <AdsList />
    </main>
  );
}
