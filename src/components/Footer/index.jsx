import './footer.scss' 

export function Footer({items, title}) {
  return (
    <footer class="footer-container">
      <div class="footer-container__icono">
        <img
          class="footer-container__img"
          src="/tarea-9-frontend/logo.png"
          alt="Logo"
        />
        <span class="footer-container__texto footer-container__texto--bold">
          {title}
        </span>
        <span class="footer-container__texto"> | Leo Vergara</span>
      </div>
      <nav class="footer-container__nav">
        {items.map((item) => (
            <a href="/" class="footer-container__item">
                {item}
            </a>
        ))}
      </nav>
    </footer>
  );
}
