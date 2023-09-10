"use client"
import Filtros from "@/app/components/searchComponent/filters";
import Canchas from "@/app/components/card/canchas";
import { useRouter, useSearchParams } from "next/navigation";


export default function SearchResults() {
  return (
    <main className="flex justify-center gap-3 py-6 sm:px-3 md:px-3 lg:px-3">
      <Filtros />
      <section className="flex flex-col gap-2 justify-between">
        <Canchas />
      </section>
    </main>
  );
}
