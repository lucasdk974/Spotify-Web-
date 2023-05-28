let cards = document.getElementsByClassName("card");
let audio = document.getElementById("audioPlay");

let textSongClicked = document.querySelector(".text-song-clicked");

const classCardClicked = "card-clicked";
const classCardClickedSongName = "card-clicked-song-name";

for (let card of cards) {
  card.addEventListener("click", function () {
    let { song_path_name } = card.dataset;

    let cardSongName = card.getElementsByTagName("p")[0];
    let cardAuthorName = card.getElementsByTagName("p")[1];

    let cardIsClicked = card.classList.contains(classCardClicked);

    cardRemoveClass(classCardClicked);

    if (!cardIsClicked) {
      card.classList.add(classCardClicked);
      cardSongName.classList.add(classCardClickedSongName);

      let text = `Você está escutando: <p class="text-card-clicked-song-name">${cardSongName.innerText}</p>
      <p class="text-card-clicked-author-name">${cardAuthorName.innerText}</p>`;

      textSongClicked.innerHTML = text;
      textSongClicked.classList.add("text-card-clicked");
      textSongClicked.classList.remove("no-text-card-clicked");

      playSong(song_path_name);
    } else {
      card.classList.remove(classCardClicked);
      textSongClicked.innerHTML = "Você não está escutando :(";
      textSongClicked.classList.add("no-text-card-clicked");
      playSong(null, false);
    }
  });
}

function playSong(songName, play = true) {
  if (play) {
    audio.src = `./lista/audios/${songName}.mp3`;
    audio.play();
  } else {
    audio.src = "";
  }
}
function cardRemoveClass(className) {
  for (let card of cards) {
    card.classList.remove(className);
    let cardSongName = card.getElementsByTagName("p")[0];
    cardSongName.classList.remove(classCardClickedSongName);
  }
}
