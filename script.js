const headerElement = document.querySelector("header");
const videoElement = document.querySelector("video");
const optionBtnsElement = document.getElementById("options");
const startBtn = document.getElementById("startBtn");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const autoAtt = document.createAttribute("autoplay");
const footerElement = document.querySelector("footer");

let state = 0;

videoElement.onended = (event) => {
  if (state == 1) {
    showVideo(3);
    openFullscreen();
    state++;
  } else if (state == 3) {
    showVideo(6);
    openFullscreen();
    state++;
  } else if (state == 5) {
    showVideo(9);
    openFullscreen();
    state++;
  } else if (state == 6) {
    videoElement.style.display = "none";
    startBtn.innerHTML = "Journey Again?";
    startBtn.style.display = "block";
    footerElement.style.display = "block";
    closeFullscreen();
  } else {
    optionBtnsElement.style.display = "block";
    closeFullscreen();
  }
};

startBtn.addEventListener("click", function () {
  startBtn.style.display = "none";
  videoElement.setAttributeNode(autoAtt);
  videoElement.style.display = "block";
  videoElement.src = "./Videos/Safari_Intro.mp4";
  footerElement.style.display = "none";
  openFullscreen();
  state = 0;
});

leftBtn.addEventListener("click", function () {
  switch (state) {
    case 0:
      hideButtons();
      showVideo(1);
      openFullscreen();
      state++;
      break;
    case 2:
      hideButtons();
      showVideo(4);
      openFullscreen();
      state++;
      break;
    case 4:
      hideButtons();
      showVideo(7);
      openFullscreen();
      state++;
      break;
    default:
      alert("Now how did you get here?");
  }
});

rightBtn.addEventListener("click", function () {
  switch (state) {
    case 0:
      hideButtons();
      showVideo(2);
      openFullscreen();
      state++;
      break;
    case 2:
      hideButtons();
      showVideo(5);
      openFullscreen();
      state++;
      break;
    case 4:
      hideButtons();
      showVideo(8);
      openFullscreen();
      state++;
      break;
    default:
      alert("Now how did you get here?");
  }
});

// Video Sources Array
const videoList = [
  "./Videos/Safari_Intro.mp4",
  "./Videos/Safari_Food_Left.mp4",
  "./Videos/Safari_Food_Right.mp4",
  "./Videos/Safari_Stampede.mp4",
  "./Videos/Safari_Stampede_Left.mp4",
  "./Videos/Safari_Stampede_Right.mp4",
  "./Videos/Safari_Cave.mp4",
  "./Videos/Safari_Cave_Left.mp4",
  "./Videos/Safari_Cave_Right.mp4",
  "./Videos/Safari_End.mp4",
];

// Helper Functions
function showVideo(videoIndex) {
  videoElement.src = videoList[videoIndex];
}

function hideButtons() {
  optionBtnsElement.style.display = "none";
}

function openFullscreen() {
  if (videoElement.requestFullscreen) {
    videoElement.requestFullscreen();
  } else if (videoElement.mozRequestFullScreen) {
    /* Firefox */
    videoElement.mozRequestFullScreen();
  } else if (videoElement.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    videoElement.webkitRequestFullscreen();
  } else if (videoElement.msRequestFullscreen) {
    /* IE/Edge */
    videoElement.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE/Edge */
    document.msExitFullscreen();
  }
}
