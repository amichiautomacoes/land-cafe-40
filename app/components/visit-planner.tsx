'use client';

import { useRef, useState } from 'react';
import { INTENTS, type IntentKey } from '../content';

export function VisitPlanner() {
  const [selected, setSelected] = useState<IntentKey>('cafe');
  const photo = useRef<HTMLImageElement>(null);
  const intent = INTENTS[selected];

  const choose = (key: IntentKey) => {
    setSelected(key);
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      photo.current?.animate([{ opacity: 0.65 }, { opacity: 1 }], { duration: 400 });
    }
  };

  return (
    <section className="plan-section wrap" id="planeje" aria-labelledby="plan-title">
      <div className="plan-heading"><h2 id="plan-title" data-reveal>Como vai ser sua pausa?</h2><p data-reveal>Escolha o momento. A gente conversa pelo WhatsApp.</p></div>
      <div className="plan-panel" data-reveal>
        <div className="plan-photo"><img ref={photo} id="intent-image" src={`/static/images/cafe40/${intent.image}`} alt={`Café 40: ${intent.label.toLowerCase()}`} width="480" height="640" loading="lazy" /></div>
        <form className="plan-form" action="/contato" method="get">
          <fieldset>
            <legend>Eu quero…</legend>
            <div className="intent-options">
              {(Object.keys(INTENTS) as IntentKey[]).map((key) => (
                <label key={key}><input type="radio" name="motivo" value={key} defaultChecked={key === 'cafe'} onChange={() => choose(key)} /> <span>{INTENTS[key].label}</span></label>
              ))}
            </div>
          </fieldset>
          <div className="intent-description" aria-live="polite" aria-atomic="true"><h3 id="intent-title">{intent.title}</h3><p id="intent-description">{intent.description}</p></div>
          <button className="button" type="submit">Conversar no WhatsApp</button>
        </form>
      </div>
    </section>
  );
}
