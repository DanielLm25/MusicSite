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







document.addEventListener('DOMContentLoaded', function() {
  const inputSearch = document.querySelector('.inputSearch');
  const searchResultsDiv = document.querySelector('.searchResults'); // Obtém a div onde os resultados serão exibidos
  const iconSearch = document.querySelectorAll('.search'); // Use querySelectorAll para obter todos os elementos com a classe '.search'

  // Quando o campo de pesquisa recebe foco, esconde os ícones de pesquisa
  inputSearch.addEventListener('focus', function () {
    iconSearch.forEach((icon) => {
      icon.classList.add('hidden');
    });
  });

  // Quando o campo de pesquisa perde foco, mostra os ícones de pesquisa
  inputSearch.addEventListener('blur', function () {
    iconSearch.forEach((icon) => {
      icon.classList.remove('hidden');
    });
  });

  // Quando o usuário digita algo na barra de pesquisa
  inputSearch.addEventListener('input', async (event) => {
    const searchTerm = event.target.value.trim(); // Obtém o termo de pesquisa do campo de entrada

    if (searchTerm) {
      searchResultsDiv.style.display = 'block'; // Torna a div de resultados visível quando há um termo de pesquisa
      await searchSpotify(searchTerm); // Chama a função de pesquisa do Spotify com o termo de pesquisa fornecido pelo usuário
    } else {
      searchResultsDiv.style.display = 'none'; // Oculta a div de resultados quando não há termo de pesquisa
    }
  });

  // Limpa o campo de pesquisa e os resultados ao clicar fora da barra de pesquisa
  document.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (!inputSearch.contains(clickedElement)) {
      inputSearch.value = ''; // Limpa o valor do campo de pesquisa
      searchResultsDiv.style.display = 'none'; // Oculta a div de resultados
    }
  });
});
    
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





 



let accessToken = null;
const clientId = 'f3e70e3bf6a343008d27a1272470b523';
const redirectUri = 'http://127.0.0.1:5500/music_site/index.html';


const iniciarAutenticacaoSpotify = async () => {
  const generateRandomString = (length) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from(crypto.getRandomValues(new Uint8Array(length)))
      .map((x) => possible[x % possible.length])
      .join('');
  };

  const sha256 = async (plain) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return await crypto.subtle.digest('SHA-256', data);
  };

  const base64encode = (input) => {
    return btoa(String.fromCharCode(...new Uint8Array(input)))
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
  };

  const codeVerifier = generateRandomString(128);
  const hashed = await sha256(codeVerifier);
  const codeChallenge = base64encode(hashed);

  window.localStorage.setItem('code_verifier', codeVerifier);

  const authUrl = new URL('https://accounts.spotify.com/authorize');
  const params = {
    response_type: 'code',
    client_id: clientId,
    scope: 'user-read-private user-read-email user-read-recently-played user-top-read playlist-read-private user-read-currently-playing user-modify-playback-state ',
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
  };

  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString(); // Redirecionar para a página de autorização do Spotify
};



const getClientCredentialsToken = async () => {
  if (!accessToken) {
    const tokenEndpoint = 'https://accounts.spotify.com/api/token';
    const clientSecret = '9a8548093fb045aeaa9c4b4e98eea799';
    const basicAuth = btoa(`${clientId}:${clientSecret}`);
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${basicAuth}`,
    };

    const params = {
      grant_type: 'client_credentials',
    };

    const formData = new URLSearchParams(params).toString();

    try {
      const response = await fetch(tokenEndpoint, {
        method: 'POST',
        headers: headers,
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        accessToken = data.access_token;
        console.log('Token de acesso obtido:', accessToken);
      } else {
        throw new Error('Falha ao obter o token de acesso');
      }
    } catch (error) {
      console.error('Erro ao obter o token de acesso:', error);
      return null; // Retornar null em caso de erro
    }
  }

  return accessToken; // Retorna o token de acesso existente ou recém-obtido
};


const exchangeCodeForToken = async (code) => {
  const codeVerifier = window.localStorage.getItem('code_verifier');
  const tokenEndpoint = 'https://accounts.spotify.com/api/token';

  const params = {
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: redirectUri,
    client_id: clientId,
    code_verifier: codeVerifier,
  };

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  const formData = new URLSearchParams(params).toString();

  try {
    const response = await fetch(tokenEndpoint, {
      method: 'POST',
      headers: headers,
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      const accessToken = data.access_token; // Armazenar o token de acesso
      localStorage.setItem('access_token', accessToken); // Salvar o token no localStorage
      console.log('Token de acesso obtido2:', accessToken);

      await getRecentlyPlayed(accessToken);
      await getTopTracks(accessToken);
      await getPlaylists(accessToken);

    } else {
      throw new Error('Falha ao trocar código por token');
    }
  } catch (error) {
    console.error('Erro ao trocar código por token:', error);
  }
};



window.onSpotifyWebPlaybackSDKReady = () => {

const playTrack = (trackUri) => {
  const player = new Spotify.Player({
    name: 'Nome do Seu App',
    getOAuthToken: cb => { cb(accessToken); }
  });

  player.addListener('player_state_changed', state => {
    console.log('Estado do player alterado', state);
  });

  player.connect().then(success => {
    if (success) {
      console.log('O player está conectado!');
      player.getCurrentState().then(state => {
        if (!state) {
          console.error('Não é possível reproduzir no momento');
          return;
        }
        player.play({
          uris: [trackUri],
          position_ms: 0, // Posição inicial da reprodução em milissegundos
        });
      });
    }
  }).catch(error => {
    console.error('Erro ao conectar o player:', error);
  });

  player.addListener('ready', ({ device_id }) => {
    console.log('Ready with Device ID', device_id);
  });
};
};



const getRecentlyPlayed = async (token) => {
  const apiUrl = 'https://api.spotify.com/v1/me/player/recently-played';

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data); // Lidar com os dados das músicas recentemente tocadas
    } else {
      console.error('Erro na solicitação:', response.status);
    }
  } catch (error) {
    console.error('Erro na solicitação:', error);
  }
};

const getTopTracks = async (token) => {
  const apiUrl = 'https://api.spotify.com/v1/me/top/tracks?limit=5';

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Resposta de getTopTracks:', data); // Exibir os dados da resposta da API
    } else {
      console.error('Erro na solicitação de getTopTracks:', response.status);
    }
  } catch (error) {
    console.error('Erro na solicitação de getTopTracks:', error);
  }
};


const getPlaylists = async (token) => {
  const apiUrl = 'https://api.spotify.com/v1/me/playlists?limit=3&offset=0';

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Resposta de getPlaylists:', data); // Exibir os dados da resposta da API
    } else {
      console.error('Erro na solicitação de getPlaylists:', response.status);
    }
  } catch (error) {
    console.error('Erro na solicitação de getPlaylists:', error);
  }
};











const iniciarAutenticacao = () => {
  iniciarAutenticacaoSpotify();
};

// Adicionando evento de clique ao botão
const authButton = document.getElementById('authButton');
authButton.addEventListener('click', iniciarAutenticacao);

// Verificar se há um código na URL ao carregar a página
window.onload = async () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  if (code) {
    // Se há um código na URL, trocar por token
    await exchangeCodeForToken(code);
  } else {
    // Se não há código, verificar se já existe um token
    const existingToken = localStorage.getItem('access_token');
    if (existingToken) {
      accessToken = existingToken;
      await getRecentlyPlayed(accessToken);
      await getTopTracks(accessToken);
      await getPlaylists(accessToken);


    } else {
      // Se não há token, iniciar a autenticação ao carregar a página
      iniciarAutenticacaoSpotify();
    }
  }
};


const searchSpotify = async (searchTerm) => {
  const token = accessToken; // Supondo que 'accessToken' esteja definido em um escopo acessível

  if (!token) {
    console.error('Token de acesso ausente.');
    return;
  }

  const apiUrl = 'https://api.spotify.com/v1/search';
  const query = `q=${encodeURIComponent(searchTerm)}&type=track&market=BR&limit=20`;

  try {
    const response = await fetch(`${apiUrl}?${query}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      console.error('Erro na solicitação:', response.status);
      return;
    }

    const data = await response.json();
    displayResults(data);
    console.log('Resultado da busca:', data);
  } catch (error) {
    console.error('Erro na solicitação:', error);
  }
};

const displayResults = (data) => {
  const searchResultsDiv = document.querySelector('.searchResults');

  if (data && data.tracks && data.tracks.items && data.tracks.items.length > 0) {
    searchResultsDiv.innerHTML = '';

    data.tracks.items.forEach(item => {
      const resultItem = document.createElement('a');
      resultItem.textContent = item.name;
      resultItem.href = '#';

      resultItem.addEventListener('click', (event) => {
        event.preventDefault();
        playTrack(item.uri); // Reproduz a música ao clicar no resultado da busca
      });

      searchResultsDiv.appendChild(resultItem);
    });
  } else {
    searchResultsDiv.innerHTML = '<p>Nenhum resultado encontrado.</p>';
  }
};


const getCurrentlyPlaying = async (token) => {
  if (token) {
    const apiUrl = 'https://api.spotify.com/v1/me/player/currently-playing';
    const params = new URLSearchParams({
      market: 'BR,US', // Adicione os mercados desejados separados por vírgula
    });

    try {
      const response = await fetch(`${apiUrl}?${params.toString()}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Lidar com os dados da resposta da API
      } else {
        console.error('Erro na solicitação:', response.status);
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
    }
  } else {
    console.error('Token de acesso ausente.');
  }
};


// Chamada para buscar a faixa de reprodução atual em múltiplos mercados
const main = async () => {
  const token = await getClientCredentialsToken(); // Obtém o token de acesso

  // Chama as funções após o token ser obtido
  if (token) {
    getCurrentlyPlaying(token);
    searchSpotify(token, 'sua busca aqui');
  }
};window
// Chama a função principal
main()
; 
