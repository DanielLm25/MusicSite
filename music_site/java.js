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
const searchResults = document.querySelector('.searchResults');
const token = 'BQDhhP2cpbzfNTqCfSl4FBx0a6i6QJS-MhYXRcC82zoATQDKyyHH6rimCxyZi3zzJkYWsUs7JY34Pp-TBwAhUlZSuaMzfcGcgPd1b9WH-vQANb77t3A';

// Adicione um ouvinte de evento de clique ao documento
document.addEventListener('click', function (event) {
  const isClickInsideInput = Array.from(inputSearch).some(input => input.contains(event.target));
  const isClickInsideResults = searchResults.contains(event.target);

  // Se o clique não foi dentro do input ou dos resultados, limpe os resultados e os inputs
  if (!isClickInsideInput && !isClickInsideResults) {
    limparResultados();
    Array.from(inputSearch).forEach(input => {
      input.value = ''; // ou input.value = null; para definir como null
    });
  }
});

for (let i = 0; i < inputSearch.length; i++) {
  inputSearch[i].addEventListener('focus', function () {
    iconSearch[i].classList.add('hidden');
  });

  inputSearch[i].addEventListener('blur', function () {
    iconSearch[i].classList.remove('hidden');
  });

  inputSearch[i].addEventListener('input', function () {
    const searchTerm = inputSearch[i].value;

    if (searchTerm.trim() !== '') {
      buscarResultadosAPI(searchTerm);
    } else {
      limparResultados();
    }
  });
}

function buscarResultadosAPI(searchTerm) {
  const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchTerm)}&type=track&limit=10`;
  const token = 'BQDhhP2cpbzfNTqCfSl4FBx0a6i6QJS-MhYXRcC82zoATQDKyyHH6rimCxyZi3zzJkYWsUs7JY34Pp-TBwAhUlZSuaMzfcGcgPd1b9WH-vQANb77t3A';
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };

  fetch(url, config)
    .then(response => response.json())
    .then(data => {
      renderizarDadosNaTela(data);
    })
    .catch(error => {
      console.error('Erro ao buscar resultados da API:', error);
    });
}

function limparResultados() {
  const searchResults = document.querySelector('.searchResults');
  
  searchResults.innerHTML = '';
  
  Array.from(inputSearch).forEach(input => {
    input.value = '';
  });
  
  searchResults.style.display = 'block';
  console.clear();
  console.log(token);
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
























const clientId = 'f3e70e3bf6a343008d27a1272470b523'; // Substitua pelo seu ID de cliente
const clientSecret = '9a8548093fb045aeaa9c4b4e98eea799'; // Substitua pelo seu segredo de cliente

const authOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`)
  },
  body: 'grant_type=client_credentials'
};

// Obter token de acesso
fetch('https://accounts.spotify.com/api/token', authOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao obter token de acesso');
    }
    return response.json();
  })
  .then(data => {
    console.log('Token de acesso:', data.access_token);
    // Salvar token de acesso onde necessário

    // Exemplo de como chamar a função para obter um novo token usando o refresh token
    // getRefreshToken(data.refresh_token);
  })
  .catch(error => {
    console.error('Erro ao obter token de acesso:', error.message);
  });

// Função para obter um novo token usando o refresh token
const getRefreshToken = async (refreshToken) => {
  const url = "https://accounts.spotify.com/api/token";

  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: clientId,
      client_secret: clientSecret
    }),
  };

  try {
    const response = await fetch(url, payload);
    const responseData = await response.json();
    
    // Atualizar o token de acesso e o refresh token onde necessário
    console.log('Novo Token de Acesso:', responseData.access_token);
    console.log('Novo Refresh Token:', responseData.refresh_token);
  } catch (error) {
    console.error('Erro ao obter novo token:', error.message);
  }
};

const accessToken = 'BQDhhP2cpbzfNTqCfSl4FBx0a6i6QJS-MhYXRcC82zoATQDKyyHH6rimCxyZi3zzJkYWsUs7JY34Pp-TBwAhUlZSuaMzfcGcgPd1b9WH-vQANb77t3A'; // Substitua pelo seu token de acesso

const searchQuery = 'remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis';
const market = 'BR';
const limit = 20;
const offset = 0;

const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchQuery)}&type=album%2Cartist%2Cplaylist%2Ctrack%2Cshow%2Cepisode%2Caudiobook&market=${market}&limit=${limit}&offset=${offset}`;

const headers = {
  'Authorization': `Bearer ${accessToken}`
};

fetch(url, { method: 'GET', headers: headers })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Resposta da API Spotify:', data);
    // Faça o que quiser com os dados aqui
  })
  .catch(error => {
    console.error('Erro ao fazer a requisição:', error.message);
  });


  function buscarResultadosAPI(searchTerm) {
    const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchTerm)}&type=track&limit=10`;
    const token = 'BQDhhP2cpbzfNTqCfSl4FBx0a6i6QJS-MhYXRcC82zoATQDKyyHH6rimCxyZi3zzJkYWsUs7JY34Pp-TBwAhUlZSuaMzfcGcgPd1b9WH-vQANb77t3A'; // Substitua pelo seu token de acesso
  
    const headers = {
      'Authorization': `Bearer ${token}`
    };
  
    fetch(url, { method: 'GET', headers: headers })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Resultados da API Spotify:', data);
  
        // Exibir os resultados na barra de pesquisa
        exibirResultados(data.tracks.items);
      })
      .catch(error => {
        console.error('Erro ao fazer a requisição:', error.message);
      });
  }
  
  // Função para exibir os resultados na barra de pesquisa
  function exibirResultados(items) {
    const searchResults = document.querySelector('.searchResults');
    searchResults.innerHTML = ''; // Limpa os resultados anteriores
  
    items.forEach(item => {
      const resultItem = document.createElement('div');
      resultItem.textContent = item.name; // Altere para exibir os dados que deseja
      resultItem.classList.add('search-item'); // Adiciona uma classe para estilização
  
      resultItem.addEventListener('click', () => {
        // Ação ao clicar em um resultado (por exemplo, adicionar à lista de reprodução)
        console.log('Clicou em:', item.name);
  
        // Limpa a barra de pesquisa após o clique no item
        limparResultados();
      });
  
      searchResults.appendChild(resultItem);
    });
  }