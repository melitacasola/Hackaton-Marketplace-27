import Image from "next/image";
import AdsList from "./components/AdsComponents/AdsList";
import Search from "./components/Search/Search";

export default function Home({searchParams}) {
  const query = searchParams?.name
  return (
    <main className="flex min-h-screen flex-col items-center p-6">
      <Search />
      <AdsList  query={query} />
    </main>
  );
}
