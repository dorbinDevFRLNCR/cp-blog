export default function ImpressumPage() {
  return (
    <main className="min-h-screen [&_p]:text-fg-muted [&_p]:leading-7 bg-bg py-12 px-4">
      <div className="max-w-3xl mx-auto bg-bg-card border border-border rounded-2xl p-8 md:p-12">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Impressum</h1>
        <p className="text-sm text-zinc-500 mb-8">Angaben gemäß § 5 DDG</p>

        <div className="">
          <h2 className="font-semibold mt-8 mb-2">Diensteanbieter:</h2>
          <p>
            Kyrylo Pavlov
            <br />
            Lerchenstraße 6<br />
            63150 Heusenstamm
            <br />
            Deutschland
          </p>

          <h2 className="font-semibold mt-8 mb-2">Kontakt:</h2>
          <a
            href="mailto:kirillpavlov.dev@gmail.com"
            className="underline text-fg-muted hover:text-fg transition-colors duration-200"
          >
            E-Mail: kirillpavlov.dev@gmail.com
          </a>

          <h2 className="font-semibold mt-8 mb-2">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
          </h2>
          <p>
            Kyrylo Pavlov
            <br />
            Lerchenstraße 6<br />
            63150 Heusenstamm
          </p>

          <h2 className="font-semibold mt-8 mb-2">
            Verbraucherstreitbeilegung / Universalschlichtungsstelle:
          </h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
          </p>

          <h2 className="font-semibold mt-8 mb-2">Haftung für Inhalte:</h2>
          <p>
            Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen
            Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder
            gespeicherte fremde Informationen zu überwachen.
          </p>

          <h2 className="font-semibold mt-8 mb-2">Haftung für Links:</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
            übernehmen.
          </p>

          <h2 className="font-semibold mt-8 mb-2">Urheberrecht:</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht.
          </p>
        </div>
      </div>
    </main>
  )
}
