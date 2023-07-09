import './titulo.scss'

export function Titulo({title}) {
  return (
    <article class="titulos">
      <h1 class="titulos__titulo">{title}</h1>
      <p class="titulos__parrafo">
        Somos un taller mecánico que se dedica a la reparación, pintura y
        limpieza de vehículos desde hace 10 años. Si necesitas uno de estos
        servicios no te olvides en llamarnos.
      </p>
    </article>
  );
}
