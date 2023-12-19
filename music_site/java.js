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
    scope: 'user-read-private user-read-email user-read-recently-played user-top-read playlist-read-private user-read-currently-playing user-modify-playback-state streaming user-read-email user-read-playback-state',
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

let player; // Declarar player fora do escopo de window.onSpotifyWebPlaybackSDKReady

window.onSpotifyWebPlaybackSDKReady = () => {
  const token = 'BQDsTCKBXfZZ4cSLGQ4w6Xcs3Guk7is54tZge2qVyv_HyRx0dlkPvuRza8Hfz5DNFmrtxEmRXsfeEJBo2wWpbs3yAubIu8R3RZEsaPSx8qro6ncepkL9DoNT5dxncZCq5bJQ2QBLwyF9KCVm3jM2VABUuHAFEfuxAMbblage67gDIMkqu8x3IJxE3StxiDutB9c5euQfDX_Q7w';

  player = new Spotify.Player({
    name: 'Web Playback SDK Quick Start Player',
    getOAuthToken: cb => { cb(token); },
    volume: 0.5
  });

  player.addListener('ready', ({ device_id }) => {
    console.log('Ready with Device ID', device_id);

    // Encontrar o botão de reprodução após o player estar pronto
    const playButton = document.querySelector('.Play');

    // Adicionar um evento de clique ao botão de reprodução
    playButton.addEventListener('click', function() {
      // Reproduzir ou pausar a música
      player.togglePlay().then(() => {
        console.log('Toggled playback');
      }).catch(error => {
        console.error('Erro ao reproduzir/pausar:', error);
      });
    });
  });

  player.addListener('not_ready', ({ device_id }) => {
    console.log('Device ID has gone offline', device_id);
  });

  player.addListener('initialization_error', ({ message }) => {
    console.error(message);
  });

  player.addListener('authentication_error', ({ message }) => {
    console.error(message);
  });

  player.addListener('account_error', ({ message }) => {
    console.error(message);
  });

  player.connect();
};

document.addEventListener('DOMContentLoaded', function () {
  const backButton = document.querySelector('.Back');
  const nextButton = document.querySelector('.Next');

  backButton.addEventListener('click', function () {
    if (player) {
      player.previousTrack().then(() => {
        console.log('Voltou para a faixa anterior!');
      }).catch(error => {
        console.error('Erro ao voltar para a faixa anterior:', error);
      });
    }
  });

  nextButton.addEventListener('click', function () {
    if (player) {
      player.nextTrack().then(() => {
        console.log('Passou para a próxima faixa!');
      }).catch(error => {
        console.error('Erro ao passar para a próxima faixa:', error);
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const volumeSlider = document.querySelector('.volume-slider');
  const muteButton = document.querySelector('.mute-button');

  // Associar controle de volume ao player do Spotify
  volumeSlider.addEventListener('input', function () {
    const percent = volumeSlider.value / 100;
    
    if (player) {
      player.setVolume(percent).then(() => {
        console.log('Volume atualizado para:', percent * 100);
      }).catch(error => {
        console.error('Erro ao definir o volume:', error);
      });
    }
  });

  muteButton.addEventListener('click', function () {
    if (player) {
      player.getVolume().then(currentVolume => {
        if (currentVolume > 0) {
          player.setVolume(0).then(() => {
            console.log('Mudo');
            volumeSlider.value = 0;
          }).catch(error => {
            console.error('Erro ao definir mudo:', error);
          });
        } else {
          // Obtenha o último volume antes do mudo e defina o volume de volta
          player.setVolume(0.5).then(() => {
            console.log('Volume restaurado');
            volumeSlider.value = 50;
          }).catch(error => {
            console.error('Erro ao restaurar volume:', error);
          });
        }
      }).catch(error => {
        console.error('Erro ao obter o volume:', error);
      });
    }
  });




const searchResultsDiv = document.querySelector('.searchResults');

searchResultsDiv.addEventListener('click', async (event) => {
  event.preventDefault();

  if (event.target.tagName === 'A') {
    const trackUri = event.target.getAttribute('data-track-uri');

    // Verifica se há um URI de faixa no elemento clicado
    if (trackUri) {
      try {
        const state = await player.getCurrentState();

        if (!state) {
          console.error('Não é possível reproduzir no momento');
          return;
        }

        // Reproduz a faixa clicada
        player.play({
          uris: [trackUri],
          position_ms: 0,
        });
      } catch (error) {
        console.error('Erro ao reproduzir a faixa:', error);
      }
    }
  }
});

const displayResults = (data) => {
  const searchResultsDiv = document.querySelector('.searchResults');

  if (data && data.tracks && data.tracks.items && data.tracks.items.length > 0) {
    searchResultsDiv.innerHTML = '';

    data.tracks.items.forEach(item => {
      const resultItem = document.createElement('a');
      resultItem.textContent = item.name;
      resultItem.href = '#';
      resultItem.setAttribute('data-track-uri', item.uri); // Adiciona o URI da faixa como um atributo

      searchResultsDiv.appendChild(resultItem);
    });
  } else {
    searchResultsDiv.innerHTML = '<p>Nenhum resultado encontrado.</p>';
  }
};


const searchSpotify = async (searchTerm) => {
  const token = accessToken;

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
    displayResults(data); // Chama displayResults com os dados da busca
    console.log('Resultado da busca:', data);
  } catch (error) {
    console.error('Erro na solicitação:', error);
  }
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
    await exchangeCodeForToken(code);
  } else {
    const existingToken = localStorage.getItem('access_token');
    if (existingToken) {
      accessToken = existingToken;
      await getRecentlyPlayed(accessToken);
      await getTopTracks(accessToken);
      await getPlaylists(accessToken);

      // Aqui é onde você chama a função searchSpotify ou outra lógica que deseja executar ao carregar a página com o token.
      // Por exemplo, vamos supor que você queira buscar uma música específica ao carregar a página.
      const searchTerm = 'Sua busca dinâmica';
      await searchSpotify(searchTerm);
    } else {
      iniciarAutenticacaoSpotify();
    }
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
};
// Chama a função principal
main();});