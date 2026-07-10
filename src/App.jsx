const contact = {
  phoneDisplay: '07xxx xxx xxx',
  phoneHref: 'tel:+447000000000',
  email: 'hello@ajdigitalservices.co.uk',
}

const trustBadges = [
  '10+ Years Experience',
  'Friendly Local Support',
  'Home Visits Available',
  'Clear, Fair Pricing',
]

const services = [
  {
    name: 'Computer & Laptop Help',
    description: 'Help with awkward errors, setup, updates, backups and general troubleshooting for PCs and laptops.',
  },
  {
    name: 'Wi-Fi & Internet Problems',
    description: 'Support with weak signal, drop-outs, router issues and getting your devices connected again.',
  },
  {
    name: 'New Device Setup',
    description: 'Patient setup for new phones, tablets, laptops, printers, smart TVs and everyday accounts.',
  },
  {
    name: 'Virus / Slow PC Help',
    description: 'A calm check of slow or suspicious computers, with clear advice on the best next step.',
  },
  {
    name: 'Websites for Small Businesses',
    description: 'Simple, tidy websites for local businesses that need to be easy to update and easy to understand.',
  },
  {
    name: 'Tech Help for Older Adults',
    description: 'Friendly, unhurried support with email, passwords, video calls, photos and staying confident online.',
  },
]

const prices = [
  { name: 'PC Health Check', price: 'from £35' },
  { name: 'New Device Setup', price: 'from £40' },
  { name: 'Slow Computer Cleanup', price: 'from £45' },
  { name: 'Wi-Fi Troubleshooting', price: 'from £50' },
  { name: 'Small Business Website', price: 'quote required' },
]

const whoIHelp = [
  'Home users',
  'Older adults',
  'Small businesses',
  'Remote workers',
  'Students',
  'Anyone who feels overwhelmed by tech',
]

const testimonials = [
  {
    name: 'Placeholder testimonial',
    quote: '“Adam was patient, clear and got everything working again without making things complicated.”',
  },
  {
    name: 'Placeholder testimonial',
    quote: '“Really helpful local support. I felt comfortable asking questions and knew the price before work started.”',
  },
  {
    name: 'Placeholder testimonial',
    quote: '“Our small business website was explained in plain English and now looks much more professional.”',
  },
]

function ContactStrip() {
  return (
    <div className="bg-ink px-5 py-3 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-center text-sm font-semibold sm:flex-row sm:items-center sm:justify-between sm:text-base sm:text-left">
        <p>Need help? Call or message Adam</p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
          <a href={contact.phoneHref} className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/20">{contact.phoneDisplay}</a>
          <a href={`mailto:${contact.email}`} className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/20">{contact.email}</a>
        </div>
      </div>
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/70 bg-cream/90 backdrop-blur">
      <ContactStrip />
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4" aria-label="Main navigation">
        <a href="#top" className="text-xl font-bold tracking-tight text-ink">AJ Digital Services</a>
        <div className="hidden gap-6 text-base font-medium text-ink md:flex">
          <a href="#services" className="hover:text-sea">Services</a>
          <a href="#pricing" className="hover:text-sea">Pricing</a>
          <a href="#about" className="hover:text-sea">About</a>
          <a href="#contact" className="hover:text-sea">Contact</a>
        </div>
        <a href="#contact" className="rounded-full bg-sea px-5 py-3 text-base font-semibold text-white shadow-soft hover:bg-ink">Get Help Today</a>
      </nav>
    </header>
  )
}

function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-36 px-5 py-16 sm:py-20 ${className}`}>
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
              <p className="mb-4 inline-flex rounded-full bg-skysoft px-4 py-2 text-base font-semibold text-sea">Friendly local tech help across Fife and Scotland</p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">Friendly Tech Help in Fife</h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-ink/80">Computer repairs, Wi-Fi problems, new device setup, websites, and digital support — explained clearly, without the jargon.</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="rounded-full bg-sea px-7 py-4 text-center text-lg font-semibold text-white shadow-soft hover:-translate-y-0.5 hover:bg-ink">Get Help Today</a>
                <a href="#services" className="rounded-full border-2 border-sea px-7 py-4 text-center text-lg font-semibold text-sea hover:-translate-y-0.5 hover:bg-skysoft">View Services</a>
              </div>
              <p className="mt-5 text-base font-semibold text-ink/70">Local support • Fair pricing • No confusing tech talk</p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-2xl font-bold text-ink">Calm, practical help when tech gets annoying.</p>
              <ul className="mt-6 space-y-4 text-lg text-ink/80">
                <li>✓ Plain-English advice for homes and small businesses</li>
                <li>✓ Patient support for older adults and non-technical users</li>
                <li>✓ Help at home where available, or guidance by message</li>
                <li>✓ You will know the likely cost before work starts</li>
              </ul>
            </div>
          </div>
        </section>

        <Section id="trust" eyebrow="Why people get in touch" title="Local, friendly support you can feel comfortable asking for." className="bg-white">
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustBadges.map((badge) => (
              <article key={badge} className="rounded-2xl border border-skysoft bg-cream p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <h3 className="text-xl font-bold text-ink">{badge}</h3>
              </article>
            ))}
          </div>
        </Section>

        <Section id="services" eyebrow="Services" title="Clear help for the technology you use every day.">
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.name} className="rounded-2xl border border-skysoft bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <h3 className="text-xl font-bold text-ink">{service.name}</h3>
                <p className="mt-3 text-lg leading-7 text-ink/75">{service.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="pricing" eyebrow="Typical Prices" title="Simple starting prices, agreed before work begins." className="bg-white">
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {prices.map((item) => (
              <article key={item.name} className="rounded-2xl bg-cream p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <h3 className="text-xl font-bold text-ink">{item.name}</h3>
                <p className="mt-3 text-2xl font-bold text-sea">{item.price}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-lg leading-7 text-ink/75">Final price depends on the job, but you’ll always know before any work starts.</p>
        </Section>

        <Section id="about" eyebrow="About" title="Meet Adam Johnston, the person behind AJ Digital Services.">
          <div className="mt-6 max-w-3xl text-xl leading-8 text-ink/80">
            <p>I’m Adam, and I help people feel less stressed by technology. Whether your laptop is running slow, your Wi-Fi keeps dropping, or your small business needs a simple website, I’ll explain things clearly and help you get sorted.</p>
            <p className="mt-4">I have over a decade of informal experience helping friends, family, older people and local users with everyday tech, plus a BSc in Web Design &amp; Development.</p>
          </div>
        </Section>

        <Section id="who" eyebrow="Who I help" title="Support for everyday people, not just ‘tech people’." className="bg-skysoft">
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whoIHelp.map((person) => (
              <div key={person} className="rounded-2xl bg-white p-5 text-lg font-semibold shadow-sm transition hover:-translate-y-1 hover:shadow-soft">✓ {person}</div>
            ))}
          </div>
        </Section>

        <Section id="testimonials" eyebrow="Testimonials" title="Kind words from local customers will go here soon." className="bg-white">
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <article key={`${testimonial.name}-${index}`} className="rounded-2xl border border-dashed border-sea/40 bg-cream p-6 shadow-sm">
                <p className="mb-4 inline-flex rounded-full bg-skysoft px-3 py-1 text-sm font-bold text-sea">Placeholder — replace later</p>
                <p className="text-lg leading-7 text-ink/80">{testimonial.quote}</p>
                <p className="mt-4 font-bold text-ink">{testimonial.name}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Ready to get a bit of tech help?">
          <div className="mt-6 grid gap-8 rounded-3xl bg-white p-8 shadow-soft lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="text-xl leading-8 text-ink/80">Call, text or email Adam to arrange friendly local support in Fife and nearby areas. Share what you need help with, and AJ Digital Services will suggest the next sensible step.</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={contact.phoneHref} className="rounded-full bg-sea px-7 py-4 text-center text-lg font-semibold text-white hover:bg-ink">Call or text {contact.phoneDisplay}</a>
                <a href={`mailto:${contact.email}`} className="rounded-full border-2 border-sea px-7 py-4 text-center text-lg font-semibold text-sea hover:bg-skysoft">Email Adam</a>
              </div>
            </div>
            <aside className="rounded-2xl bg-cream p-6 text-lg leading-7 text-ink/80">
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
