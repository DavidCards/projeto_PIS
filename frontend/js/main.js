//menu responsivo
class MobileNavBar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this); 
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavBar = new MobileNavBar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);

mobileNavBar.init();

const categoriasList = document.getElementById('categorias-list');

// Buscar categorias do backend
async function fetchCategorias() {
  const response = await fetch('/api/categorias');
  const categorias = await response.json();
  categoriasList.innerHTML = '';
  categorias.forEach(categoria => {
    const li = document.createElement('li');
    li.textContent = categoria.nome;
    categoriasList.appendChild(li);
  });
}

// Inicializar
fetchCategorias();
