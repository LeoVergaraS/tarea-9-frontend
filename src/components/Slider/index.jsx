import './slider.scss'

export function Slider({  }) {
  return (
    <article class="slider">
        <div id="carousel" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carousel"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="src\assets\reparaciones.jpg"
                class="carousel__img d-block"
                alt="reparaciones"
              />
              <div class="carousel-caption d-md-block">
                <h5 class="carousel__titulo">Reparaciones</h5>
                <p class="carousel__parrafo">
                  Ocupamos los repuestos de primera calidad
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="src\assets\pintura.webp"
                class="carousel__img d-block"
                alt="pintura"
              />
              <div class="carousel-caption d-md-block">
                <h5 class="carousel__titulo">Pintura</h5>
                <p class="carousel__parrafo">
                  Tenemos las mejores pinturas del mercado
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="src\assets\limpieza.jpg"
                class="carousel__img d-block"
                alt="limpieza"
              />
              <div class="carousel-caption d-md-block">
                <h5 class="carousel__titulo">Limpieza</h5>
                <p class="carousel__parrafo">
                  Utilizamos productos de limpieza de calidad
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </article>
  );
}
