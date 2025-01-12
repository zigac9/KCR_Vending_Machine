"use client";
import Image from "next/image";

export default function Instructions() {
  return (
    <main>
      <div className="px-10 py-2">
        <div className="title-text flex font-semibold text-5xl items-center gap-4 mb-8">
          <Image src="../logo.svg" alt="logo" width={148} height={148} />
          <h1>
            <span className="text-neutral-900">Navodila za</span> uporabo
          </h1>
        </div>
        <div className="content-section space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-black">
              Brskanje po meniju
            </h2>
            <ul className="list-disc list-inside ml-4 text-xl text-neutral-900">
              <li>
                Priljubljene uporabniške storitve: Priljubljene pijače za hitri
                izbor.
              </li>
              <li>Popust za pijače: Pijače po znižani ceni.</li>
              <li>
                Vse pijače: Za več možnosti dostopajte do celotnega menija.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black">
              Personalizacija vašega napitka
            </h2>
            <ul className="list-disc list-inside ml-4 text-xl text-neutral-900">
              <li>Prilagodite dodatke kave.</li>
              <li>Izberite zeleno znamko in velikost kave.</li>
              <li>Kliknite Potrdi, da potrdite izbiro.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black">
              Možnosti plačevanja
            </h2>
            <ul className="list-disc list-inside ml-4 text-xl text-neutral-900">
              <li>Ključ prodajnega avtomata: Vstavite ključ.</li>
              <li>Kreditna/debetna kartica: Uporabite čitalnik kartic.</li>
              <li>Gotovina: Vnesite gotovino; drobiž bo na voljo.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black">
              Podajte svoje mnenje
            </h2>
            <p className="ml-4 text-xl text-neutral-900">
              Skenirajte kodo QR (v spodnjem levem kotu) in delite svojo
              izkušnjo.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
