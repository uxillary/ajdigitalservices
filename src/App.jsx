const services = [
  'New phone, tablet, laptop, printer, WiFi and smart TV setup',
  'Email, accounts, passwords and cloud storage explained clearly',
  'Slow computer checks, basic repairs, upgrades and troubleshooting',
  'Simple websites and online setup for small local businesses',
]

const prices = [
  { name: 'Home tech visit', price: 'from £35', note: 'Patient help at home with everyday technology.' },
  { name: 'Extra time', price: '£25/hour', note: 'Only if more time is needed and agreed first.' },
  { name: 'Device setup', price: 'from £40', note: 'Phones, tablets, laptops, printers and smart devices.' },
  { name: 'PC/laptop health check', price: 'from £50', note: 'A practical check-up for slow or troublesome computers.' },
  { name: 'Small business website', price: 'from £300', note: 'A clear starter website for local businesses.' },
]

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/70 bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4" aria-label="Main navigation">
        <a href="#top" className="text-xl font-bold tracking-tight text-ink">AJ Digital Services</a>
        <div className="hidden gap-6 text-base font-medium text-ink md:flex">
          <a href="#services" className="hover:text-sea">Services</a>
          <a href="#pricing" className="hover:text-sea">Pricing</a>
          <a href="#about" className="hover:text-sea">About</a>
          <a href="#contact" className="hover:text-sea">Contact</a>
        </div>
        <a href="#contact" className="rounded-full bg-sea px-5 py-3 text-base font-semibold text-white shadow-soft hover:bg-ink">Book Tech Help</a>
      </nav>
    </header>
  )
}

function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 px-5 py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {eyebrow && <p className="mb-3 text-lg font-semibold text-sea">{eyebrow}</p>}
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
        {children}
      </div>
    </section>
  )
}

function App() {
  return (
    <div id="top" className="min-h-screen bg-cream font-sans text-ink">
      <Header />
      <main>
        <section className="px-5 py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-skysoft px-4 py-2 text-base font-semibold text-sea">Friendly local tech help</p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
                No jargon, no pressure — just patient help with everyday technology.
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-ink/80">
                AJ Digital Services helps older users, families and small local businesses with computers, phones, WiFi, printers, websites and those little tech problems that never appear at a convenient time.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="rounded-full bg-sea px-7 py-4 text-center text-lg font-semibold text-white shadow-soft hover:bg-ink">Book Tech Help</a>
                <a href="#services" className="rounded-full border-2 border-sea px-7 py-4 text-center text-lg font-semibold text-sea hover:bg-skysoft">View Services</a>
              </div>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-soft">
              <p className="text-2xl font-bold text-ink">Help with technology, explained calmly.</p>
              <ul className="mt-6 space-y-4 text-lg text-ink/80">
                <li>✓ Clear, plain-English advice</li>
                <li>✓ Home visits and local support</li>
                <li>✓ Sensible prices with no pushy sales talk</li>
                <li>✓ Support for homes and small businesses</li>
              </ul>
            </div>
          </div>
        </section>

        <Section id="services" eyebrow="Services" title="Practical help for the technology you use every day." className="bg-white">
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article key={service} className="rounded-2xl border border-skysoft bg-cream p-6 text-lg leading-7 shadow-sm">
                {service}
              </article>
            ))}
          </div>
        </Section>

        <Section id="pricing" eyebrow="Pricing" title="Transparent ‘from’ pricing, with the details agreed before work begins.">
          <div className="mt-8 grid gap-5 lg:grid-cols-5">
            {prices.map((item) => (
              <article key={item.name} className="rounded-2xl bg-white p-6 shadow-soft">
                <h3 className="text-xl font-bold text-ink">{item.name}</h3>
                <p className="mt-3 text-2xl font-bold text-sea">{item.price}</p>
                <p className="mt-3 text-base leading-6 text-ink/75">{item.note}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-lg text-ink/75">If something looks more involved, Adam will explain the options first so you can decide what feels right.</p>
        </Section>

        <Section id="why" eyebrow="Why choose us" title="Friendly support that feels local, not corporate." className="bg-skysoft">
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm"><h3 className="text-xl font-bold">Patient and clear</h3><p className="mt-3 text-lg text-ink/75">Questions are welcome. Things are explained at a sensible pace, without making anyone feel silly.</p></div>
            <div className="rounded-2xl bg-white p-6 shadow-sm"><h3 className="text-xl font-bold">Useful, everyday fixes</h3><p className="mt-3 text-lg text-ink/75">The focus is on getting your device, account, printer or website working properly.</p></div>
            <div className="rounded-2xl bg-white p-6 shadow-sm"><h3 className="text-xl font-bold">Organised enquiries</h3><p className="mt-3 text-lg text-ink/75">Calls, texts and messages can be handled by a booking assistant to keep things simple.</p></div>
          </div>
        </Section>

        <Section id="about" eyebrow="About" title="Meet Adam Johnston, the person behind AJ Digital Services.">
          <div className="mt-6 max-w-3xl text-xl leading-8 text-ink/80">
            <p>Adam has spent over a decade helping friends, family, older people and local users sort out technology problems. He also has a BSc in Web Design &amp; Development and experience with websites, repairs, setup and troubleshooting.</p>
            <p className="mt-4">The aim is simple: make technology feel less stressful and more useful, whether you need a new phone set up or a small business website launched.</p>
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Ready to get a bit of tech help?" className="bg-white">
          <div className="mt-6 grid gap-8 rounded-3xl bg-cream p-8 shadow-soft lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="text-xl leading-8 text-ink/80">Call, text or send a message to arrange friendly support. Share what you need help with, and AJ Digital Services will suggest the next sensible step.</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="tel:+440000000000" className="rounded-full bg-sea px-7 py-4 text-center text-lg font-semibold text-white hover:bg-ink">Call or text</a>
                <a href="mailto:hello@ajdigitalservices.co.uk" className="rounded-full border-2 border-sea px-7 py-4 text-center text-lg font-semibold text-sea hover:bg-skysoft">Send a message</a>
              </div>
            </div>
            <aside className="rounded-2xl bg-white p-6 text-lg leading-7 text-ink/80">
              <p className="font-bold text-ink">Good to include:</p>
              <ul className="mt-3 space-y-2">
                <li>• Your name and area</li>
                <li>• The device or service you need help with</li>
                <li>• Whether it is urgent or can be booked in</li>
              </ul>
            </aside>
          </div>
        </Section>
      </main>
      <footer className="px-5 py-8 text-center text-base text-ink/70">© {new Date().getFullYear()} AJ Digital Services. Friendly local tech help without the confusing jargon.</footer>
    </div>
  )
}

export default App
