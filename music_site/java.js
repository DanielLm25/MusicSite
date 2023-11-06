document.addEventListener('DOMContentLoaded', function() {
  const link1 = document.querySelectorAll('.lista1 a');
  const link2 = document.querySelectorAll('.lista2 a');
  
 
  // Função para limpar a classe 'selected' em todos os links
  function clearSelectedLinks() {
    link1.forEach(link => link.classList.remove('selected'));
    link2.forEach(link => link.classList.remove('selected'));
    lista3.querySelectorAll('a').forEach(link => link.classList.remove('selected'));
  }

  link1.forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      clearSelectedLinks();
      item.classList.add('selected');
    });
  });

  link2.forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      clearSelectedLinks();
      item.classList.add('selected');
    });
  });
    });
 

  const plus_button = document.getElementById('plus_button');
  const playlistAdd = document.getElementById('playlistAdd');
  const inputField = document.getElementById('inputField');
  const plusTwo = document.getElementById('plusTwo');
  let deleteButtonSecond = null;

  
  inputField.style.display = 'none'; // Oculta o inputField
  plusTwo.style.display = 'none'; // Oculta o plusTwo
  playlistAdd.style.display = 'none';
  

  plus_button.addEventListener('click', () => {
    inputField.style.display = 'flex';
    plusTwo.style.display = 'flex';
    playlistAdd.style.display = 'flex';

    inputField.focus();

    if (deleteButtonSecond === null) {
      deleteButtonSecond = document.createElement('button');

      const icon = document.createElement('i');
      icon.className ='bx bxs-x-circle X'; 

  deleteButtonSecond.appendChild(icon)

  deleteButtonSecond.classList.add('deleteButtonSecond');


      deleteButtonSecond.addEventListener('click', () => {
        inputField.style.display = 'none';
        deleteButtonSecond.style.display = 'none';
        plusTwo.style.display = 'none';
        deleteButtonSecond = null;
      });

      playlistAdd.appendChild(deleteButtonSecond);
    }
  });

  plusTwo.addEventListener('click', () => {
    const lista3 = document.getElementById('lista3');
    const newItemText = inputField.value;
   
    if (newItemText.trim() !== '') {
      const newItemContainer = document.createElement('div'); // Crie uma div para envolver o item e o botão de delete
      newItemContainer.classList.add('itemContainer');
      
      const newItem = document.createElement('a');
      const icon = document.createElement('i');
      icon.className = 'bx bxs-album';

      
      const deleteButton = document.createElement('button');
      const iconFour = document.createElement('i');
      iconFour.className ='bx bxs-x-circle XF'; 

      newItem.appendChild(deleteButton);
      deleteButton.appendChild(iconFour)
      deleteButton.classList.add('deleteButton');

      newItem.appendChild(icon);
      newItem.appendChild(document.createTextNode(newItemText));

      
      newItemContainer.appendChild(newItem);
      newItemContainer.appendChild(deleteButton);

      inputField.style.display = 'none';
      plusTwo.style.display = 'none';
      deleteButtonSecond.style.display = 'none';
      deleteButtonSecond = null;

      lista3.appendChild(newItemContainer);
      inputField.value = '';

      

      deleteButton.addEventListener('click', () => {
        lista3.removeChild(newItemContainer);
        deleteButton.style.display = 'none';
      });

      function selected_link(event) {
        event.preventDefault(); // Impede o comportamento padrão do clique em links
        const items = document.querySelectorAll('.selected'); // Seleciona todos os elementos com a classe .selected
        items.forEach((item) => item.classList.remove('selected')); // Remove a classe .selected de todos os elementos com essa classe
        this.classList.add('selected'); // Adiciona a classe .selected apenas ao item clicado
      }

      lista3.appendChild(deleteButton);

      newItem.addEventListener('mousedown', selected_link);
    }
  });

  plusTwo.innerHTML = '<i class="bx bxs-plus-circle plusIcon"></i>';
  plusTwo.classList.add('plusTwo');


  document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded event fired");
    document.getElementById('toggleMenu').addEventListener('click', function() {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('active');
        const chevronIcon = document.getElementById('chevronIcon');
        chevronIcon.classList.toggle('rotate');
        
    });
});

const inputSearch = document.getElementsByClassName('inputSearch');
const iconSearch = document.getElementsByClassName('search');

for (let i = 0; i < inputSearch.length; i++) {
  inputSearch[i].addEventListener('focus', function () {
    iconSearch[i].classList.add('hidden');
  });

  inputSearch[i].addEventListener('blur', function () {
    iconSearch[i].classList.remove('hidden');
  });
}