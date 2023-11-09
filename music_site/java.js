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
      const newItemContainer = document.createElement('div');
      newItemContainer.classList.add('itemContainer');
  
      const newItem = document.createElement('a');
      const icon = document.createElement('i');
      icon.className = 'bx bxs-album';
  
      const deleteButton = document.createElement('button');
      const iconFour = document.createElement('i');
      iconFour.className = 'bx bxs-x-circle XF';
  
      newItem.appendChild(icon);
      newItem.appendChild(document.createTextNode(newItemText));
  
      deleteButton.appendChild(iconFour);
      deleteButton.classList.add('deleteButton');
  
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
      });
  
      function selected_link(event) {
        event.preventDefault();
        const items = document.querySelectorAll('.selected');
        items.forEach((item) => item.classList.remove('selected'));
        this.classList.add('selected');
      }
  
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

const heartButton = document.querySelector('.heart');
const hearthFillIcon = document.querySelector('.hearthFill');
const hearthPrincipal = document.querySelector('.bx-heart');

// Inicia a página com o ícone hearthPrincipal visível e hearthFillIcon oculto
hearthFillIcon.style.display = 'none';
hearthPrincipal.style.display = 'flex';

heartButton.addEventListener('click', function() {
  // Alternar a visibilidade dos ícones ao clicar no botão
  if (hearthFillIcon.style.display === 'none') {
    hearthFillIcon.style.display = 'flex';
    hearthPrincipal.style.display = 'none';
  } else {
    hearthFillIcon.style.display = 'none';
    hearthPrincipal.style.display = 'flex';
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var volumeSlider = document.getElementById('volumeSlider');
  var sliderThumb = document.getElementById('sliderThumb');
  var sliderFill = document.getElementById('sliderFill');
  var volumeIcon = document.querySelector('.volumeIcon i');

  // Defina o valor inicial para 50%
  volumeSlider.value = 50;
  var percent = volumeSlider.value / 100;
  setSliderPosition(percent);
  updateVolumeIcon(percent);

  volumeSlider.addEventListener('mousedown', startDragging);

  function startDragging(e) {
    e.preventDefault();
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDragging);
  }

  function stopDragging() {
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDragging);
  }

  function drag(e) {
    var percent = calculatePercent(e);
    setSliderPosition(percent);
    updateVolumeIcon(percent);

    // Ajuste o volume do áudio durante o arraste
    var volumeValue = percent;
    audioPlayer.volume = volumeValue;
  }

  function calculatePercent(e) {
    var sliderRect = volumeSlider.getBoundingClientRect();
    var offsetX = e.clientX - sliderRect.left;
    var percent = offsetX / sliderRect.width;
    return Math.max(0, Math.min(1, percent)); // Garante que percent esteja entre 0 e 1
  }

  function setSliderPosition(percent) {
    var thumbPosition = percent * 100;
    sliderThumb.style.left = thumbPosition + '%';

    // Atualizar o preenchimento da barra
    sliderFill.style.width = thumbPosition + '%';

    // Atualizar o valor do slider
    volumeSlider.value = percent * 100;
  }

  function updateVolumeIcon(percent) {
    var volumeIconClass = getVolumeIconClass(percent);
    volumeIcon.className = `bx ${volumeIconClass} volume-icon`;
  }

  function getVolumeIconClass(percent) {
    if (percent === 0) {
      return 'bx bx-volume-mute';
    } else if (percent > 0 && percent <= 0.5) {
      return 'bx bx-volume-low';
    } else {
      return 'bx bx-volume-full';
    }
  }

  // Adicione esta parte para chamar a função toggleMute no clique do ícone do botão
  volumeIcon.addEventListener('click', toggleMute);

  // Defina isMuted como falso inicialmente
  var isMuted = false;

  function toggleMute() {
    isMuted = !isMuted;

    if (isMuted) {
      volumeSlider.value = 0;
    } else {
      volumeSlider.value = 100; // Defina o valor inicial para 50%
    }

    var percent = volumeSlider.value / 100;
    setSliderPosition(percent);
    updateVolumeIcon(percent);

    // Ajuste o volume do áudio ao clicar no ícone de volume
    var volumeValue = percent;
    audioPlayer.volume = volumeValue;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const audioPlayer = document.getElementById('audioPlayer');
  const playButton = document.querySelector('.Play');

  playButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playButton.innerHTML = '<i class="bx bx-pause-circle"></i>'; 
    } else {
      audioPlayer.pause();
      playButton.innerHTML = '<i class="bx bx-play-circle" ></i>'; 
    }
  });
});;

document.addEventListener('DOMContentLoaded', () => {
  const audioPlayer = document.getElementById('audioPlayer');
  const progressBar = document.getElementById('progressBar');
  const currentTimeSpan = document.getElementById('currentTime');
  const totalDurationSpan = document.getElementById('totalDuration');

  audioPlayer.addEventListener('timeupdate', () => {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;

    // Atualiza o tempo atual
    currentTimeSpan.textContent = formatTime(currentTime);

    // Atualiza a duração total (se disponível)
    if (!isNaN(duration)) {
      totalDurationSpan.textContent = formatTime(duration);
    }

    const progressPercentage = (currentTime / duration) * 100;

    // Atualiza a largura da progressBar
    progressBar.style.width = `${progressPercentage}%`;
  });

  // Função para formatar o tempo em minutos e segundos
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const audioPlayer = document.getElementById('audioPlayer');
  const progressContainer = document.querySelector('.progressContainer');
  const progressBar = document.getElementById('progressBar');

  progressContainer.addEventListener('click', (event) => {
    const boundingRect = progressContainer.getBoundingClientRect();
    const clickX = event.clientX - boundingRect.left;
    const progressContainerWidth = boundingRect.width;

    const progressPercentage = (clickX / progressContainerWidth) * 100;

    // Move a barra preenchida para a posição clicada
    progressBar.style.width = `${progressPercentage}%`;

    // Atualiza a reprodução da música a partir do ponto clicado
    const duration = audioPlayer.duration || 0;
    const seekTime = (progressPercentage / 100) * duration;
    audioPlayer.currentTime = seekTime;
  });
});


