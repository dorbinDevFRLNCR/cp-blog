export default function DatenschutzPage() {
  return (
    <main className="min-h-screen [&_p]:text-fg-muted [&_p]:leading-7 bg-bg py-12 px-4">
      <div className="max-w-3xl mx-auto bg-bg-card border border-border rounded-2xl p-8 md:p-12">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-zinc max-w-none text- leading-7 space-y-8">
          <section>
            <h2 className="font-semibold">1. Verantwortlicher</h2>
            <p>
              Kyrylo Pavlov
              <br />
              Lerchenstraße 6<br />
              63150 Heusenstamm
              <br />
              Deutschland
              <br />
              E-Mail: kirillpavlov.dev@gmail.com
            </p>
          </section>

          <section>
            <h2 className="font-semibold">2. Allgemeine Hinweise</h2>
            <p>
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Rechtsgrundlagen: Art. 6
              Abs. 1 lit. a, b, c, f DSGVO. Speicherdauer bis Zweckerfüllung. Widerruf nach Art. 7
              Abs. 3 DSGVO jederzeit möglich.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">3. Hosting</h2>
            <p>
              Vercel Inc.
              <br />
              440 N Barranca Ave #4133
              <br />
              Covina, CA 91723, USA
              <br />
              <br />
              Grundlage Art. 6 Abs. 1 lit. f DSGVO. Vercel stellt AVV/DPA nach Art. 28 DSGVO über
              Dashboard zur Verfügung. Nach EU-US Data Privacy Framework zertifiziert.
              <br />
              Server-Logs: IP, Browsertyp, OS, Referrer, Hostname, Uhrzeit - keine Zusammenführung.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">4. Datenerfassung</h2>
            <p>
              <strong>Cookies und TTDSG:</strong> Keine Cookies i.S.v. § 25 TTDSG. Kein
              Consent-Banner erforderlich.
              <br />
              <br />
              <strong>Schriftarten:</strong> Über next/font lokal eingebunden. Kein Abruf von Google
              Fonts. Keine Datenübertragung an Dritte.
              <br />
              <br />
              Es findet keine weitere Datenerfassung durch eigene Tracking- oder Like-Systeme statt.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">5. Analyse-Tools</h2>
            <p>
              <strong>Vercel Analytics:</strong> Datenschutzfreundliche Lösung ohne Cookies und ohne
              Erstellung von Nutzerprofilen. Anonymisiert. Grundlage Art. 6 Abs. 1 lit. f DSGVO.
              <br />
              Google Analytics ist nicht im Einsatz.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">6. Ihre Rechte</h2>
            <p>
              Auskunft Art.15, Berichtigung Art.16, Löschung Art.17, Einschränkung Art.18,
              Übertragbarkeit Art.20, Widerspruch Art.21, Beschwerde Art.77 DSGVO.
              <br />
              <br />
              Aufsichtsbehörde Hessen: Der Hessische Beauftragte für Datenschutz, Postfach 3163,
              65021 Wiesbaden.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">7. SSL-Verschlüsselung</h2>
            <p>Diese Seite nutzt SSL- bzw. TLS-Verschlüsselung.</p>
            <p className="text-sm text-zinc-500 mt-8">Stand: 12.10.2026</p>
          </section>
        </div>
      </div>
    </main>
  )
}
