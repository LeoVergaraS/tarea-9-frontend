import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './pilares.scss'

export function Pilares({data}) {
  return (
    <article class="pilares">
      {data.map((item) => (
        <div class="pilares__pilar">
          <h3 class="pilares__h3">{item.title}</h3>
          <p class="pilares__texto">{item.text}</p>
          <a href="/" class="pilares__icono">
            <FontAwesomeIcon className="fa-2x" icon={faArrowRight} />
          </a>
        </div>
      ))}
    </article>
  );
}
