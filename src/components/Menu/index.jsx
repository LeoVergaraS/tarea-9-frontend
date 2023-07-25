import './menu.scss'
export function Menu({items, title}) {
  return (
    <header class="header-container">
      <a href="/" class="header-container__logo">
        <img
          class="header-container__img"
          src="/tarea-9-frontend/logo.png"
          alt="Logo"
        />
        <span class="header-container__texto">{title}</span>
      </a>
      <nav class="header-container__nav">
        {items.map((item) => (
            <a href="/" class="header-container__item">
                {item}
            </a>
        ))}
      </nav>
    </header>
  );
}
