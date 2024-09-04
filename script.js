document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.nav-toggle'); // Botão de alternância
  const menu = document.querySelector('.btn'); // Menu

  toggleButton.addEventListener('click', function () {
      menu.classList.toggle('show'); // Alterna a classe 'show' para o menu
  });
});
