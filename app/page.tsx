import { BRAND, CATEGORIES, FEATURES, MOMENTS } from './content';
import { VisitPlanner } from './components/visit-planner';

export default function Home() {
  return (
    <>
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title" data-reveal>A pausa é<br />no Café 40.</h1>
          <p className="lead" data-reveal>Cafés, sabores e encontros no Centro de Nova Iguaçu.</p>
          <a className="button" href={BRAND.menu} target="_blank" rel="noopener noreferrer" data-reveal>Ver cardápio</a>
          <p className="hero-note" data-reveal>Um lugar para ficar mais um pouco.</p>
        </div>
        <div className="hero-media" data-reveal>
          <div className="hero-window">
            <img className="hero-building" src="/static/images/cafe40/fachada-dia.jpg" alt="Fachada de vidro do Café 40 no Centro de Nova Iguaçu" width="361" height="640" fetchPriority="high" />
          </div>
          <img className="hero-coffee" src="/static/images/cafe40/cappuccino.jpg" alt="Uma bebida cremosa e um croissant à mesa" width="361" height="640" />
        </div>
      </section>
      <section className="intro wrap" aria-labelledby="intro-title">
        <h2 id="intro-title" data-reveal>A pausa tem endereço.</h2>
        <p className="statement" data-reveal>Entre um compromisso e outro, cabe um café.<br className="desktop-break" /> Entre um café e outro, cabe um encontro.</p>
        <ul className="offering-band" aria-label="Experiências no Café 40">
          {['Café', 'Cozinha', 'Encontros', 'Coworking'].map((offering) => <li key={offering} data-reveal>{offering}</li>)}
        </ul>
      </section>
      <div className="features wrap">
        {FEATURES.map((feature, index) => (
          <section className={`feature${index % 2 ? ' feature-reverse' : ''}`} id={feature.id} aria-labelledby={`feature-title-${index + 1}`} key={feature.id}>
            <div className="feature-copy">
              <h2 id={`feature-title-${index + 1}`} data-reveal>{feature.title}</h2>
              <p data-reveal>{feature.body}</p>
              {feature.destination === 'contact'
                ? <a className="text-link" href="/contato?motivo=encontro" data-reveal>{feature.link}</a>
                : <a className="text-link" href={BRAND[feature.destination]} target="_blank" rel="noopener noreferrer" data-reveal>{feature.link}</a>}
            </div>
            <figure className="feature-image" data-reveal>
              <img src={`/static/images/cafe40/${feature.image}`} alt={feature.alt} width="480" height="640" loading="lazy" />
            </figure>
          </section>
        ))}
      </div>
      <section className="moments wrap" id="momentos" aria-labelledby="moments-title">
        <div className="moments-heading">
          <h2 id="moments-title" data-reveal>O que fica à mesa.</h2>
          <p data-reveal>Uma pausa muda de assunto.<br />O endereço continua o mesmo.</p>
        </div>
        {MOMENTS.map((moment, index) => (
          <article className={`moment${index % 2 ? ' moment-reverse' : ''}`} key={moment.title}>
            <div className="moment-copy"><h3 data-reveal>{moment.title}</h3><p data-reveal>{moment.body}</p></div>
            <figure data-reveal><img src={`/static/images/cafe40/${moment.image}`} alt={moment.alt} width="480" height="640" loading="lazy" /></figure>
          </article>
        ))}
      </section>
      <VisitPlanner />
      <section className="categories wrap" aria-labelledby="categories-title">
        <h2 id="categories-title" data-reveal>O seu próximo encontro.</h2>
        <div className="category-grid">
          {CATEGORIES.map((category) => (
            <article className="category" key={category.title}>
              <img src={`/static/images/cafe40/${category.image}`} alt={category.alt} width="480" height="640" loading="lazy" data-reveal />
              <h3 data-reveal>{category.title}</h3><p data-reveal>{category.text}</p>
            </article>
          ))}
        </div>
        <a className="text-link" href={BRAND.menu} target="_blank" rel="noopener noreferrer" data-reveal>Consulte opções e valores no cardápio</a>
      </section>
      <section className="visit-section wrap" id="visita" aria-labelledby="visit-title">
        <div className="visit-copy">
          <h2 id="visit-title" data-reveal>Seu tempo, à mesa.</h2>
          <p className="lead" data-reveal>Faça uma pausa no Café 40.<br />Estamos no Centro de Nova Iguaçu.</p>
          <a className="button button-inverse" href={BRAND.menu} target="_blank" rel="noopener noreferrer" data-reveal>Ver cardápio</a>
        </div>
        <div className="visit-info" data-reveal>
          <p>{BRAND.address}<br />{BRAND.city}</p><p>{BRAND.hours}</p>
          <a className="text-link" href={BRAND.maps} target="_blank" rel="noopener noreferrer">Como chegar</a>
        </div>
      </section>
    </>
  );
}
