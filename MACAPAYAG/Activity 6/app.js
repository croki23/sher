import { leftDiv } from "./info.js";
import { rightDiv } from "./image.js";
import { sectwoDiv } from "./card.js";

// Function to display the modal and play video
function playVideo(modal, videoElement, videoSrc) {
    modal.style.display = "block"; // Display the modal
    magicSound.pause(); // Pause the intro sound
    magicSound.currentTime = 0; // Rewind the intro sound to the beginning
    playIntroButton.disabled = true; // Disable the intro sound button
    videoElement.src = videoSrc; // Set the video source to play
}

const dataOne = {
    title: "Demon Slayer",
    para: "Demon Slayer is a Japanese manga series. It is set in early 20th century Taishō-era Japan, where man-eating demons roam the land each night. The story follows a boy named Tanjiro Kamado, who tries to become a Demon Slayer after his family was killed and his younger sister, Nezuko, turned into a demon",
    button: "Play Intro Sound",
    image: "1.jpg"
};

const dataTwo = {
    title2: "Demon Slayer Main Characters",
    image1: "tanjiro.jpg",
    para1: "Tanjiro Kamado is the main protagonist of Demon Slayer: Kimetsu no Yaiba. He is a Demon Slayer in the Demon Slayer Corps, who joined to find a remedy to turn his sister, Nezuko Kamado, back into a human and to hunt down and kill demons,and later swore to defeat Muzan Kibutsuji,the King of Demons, in order to prevent others from suffering the same fate as him. Before he became a Demon Slayer, Tanjiro was a coal burner before his family was slaughtered by Muzan while his younger sister, Nezuko, was turned into a demon.",
    button1: "Play Tanjiro Best Fight",
    image2: "nezuko.jpg",
    para2: "Nezuko Kamado is the deuteragonist of Demon Slayer: Kimetsu no Yaiba. She is a demon and the younger sister of Tanjiro Kamado and one of the two remaining members of the Kamado family. Formerly a human, she was attacked and transformed into a demon by Muzan Kibutsuji.",
    button2: "Play Nezuko Best Fight",
    image3: "zenitsu.jpg",
    para3: "Zenitsu Agatsuma is one of the main characters of Demon Slayer: Kimetsu no Yaiba and along with Inosuke Hashibira, a travelling companion of Tanjiro Kamado and Nezuko Kamado. He is also a Demon Slayer in the Demon Slayer Corps.",
    button3: "Play Zenitsu Best Fight",
    image4: "inosuke.jpeg",
    para4: "Inosuke Hashibira is one of the main characters of Demon Slayer: Kimetsu no Yaiba and along with Zenitsu Agatsuma, a traveling companion of Tanjiro Kamado and Nezuko Kamado. He is also a Demon Slayer in the Demon Slayer Corps.",
    button4: "Play Inosuke Best Fight"
};

const { title, para, button, image } = dataOne;
const { title2, image1, image2, image3,image4, para1, para2, para3,para4, button1, button2, button3,button4 } = dataTwo;

const sectionOne = document.getElementById('sectionOne');
const sectionTwo = document.getElementById('sectionTwo');

sectionOne.append(leftDiv(title, para, button));
sectionOne.append(rightDiv(image));
sectionTwo.append(sectwoDiv(title2, image1, image2, image3,image4, para1, para2, para3,para4, button1, button2, button3,button4));

// Get reference to the Tanjiro video modal
const tanjiroModal = document.getElementById('tanjiroModal');
const tanjiroVideo = document.querySelector('#tanjiroModal iframe');

// Get reference to the Nezuko video modal
const nezukoModal = document.getElementById('nezukoModal');
const nezukoVideo = document.querySelector('#nezukoModal iframe');

// Get reference to the close button for Tanjiro modal
const tanjiroCloseButton = document.querySelector('.close');

// Get reference to the close button for Nezuko modal
const nezukoCloseButton = document.querySelector('.closeNezuko');

// Function to toggle sound on and off
function toggleSound() {
    if (magicSound.paused) {
        magicSound.play(); // If sound is paused, play it
    } else {
        magicSound.pause(); // If sound is playing, pause it
        magicSound.currentTime = 0; // Rewind the audio to the beginning
    }
}

// Attach event listener to the "Play Intro Sound" button
const playIntroButton = document.querySelector('.sec1btn');
playIntroButton.addEventListener('click', toggleSound);

// Function to play Tanjiro video
function playTanjiroVideo() {
    playVideo(tanjiroModal, tanjiroVideo, "https://www.youtube.com/embed/ON2382Rg6G4?autoplay=1");
}

// Function to close the Tanjiro modal and reset the video
function closeTanjiroModal() {
    tanjiroModal.style.display = "none"; // Hide the modal
    tanjiroVideo.src = ""; // Stop the video
    magicSound.pause(); // Pause the intro sound
    magicSound.currentTime = 0; // Rewind the intro sound to the beginning
    playIntroButton.disabled = false; // Re-enable the intro sound button
}

// Attach event listener to the "Play Tanjiro Best Fight" button
const playTanjiroButton = document.querySelector('.btn1');
playTanjiroButton.addEventListener('click', playTanjiroVideo);

// Close the Tanjiro modal and reset the video when the close button is clicked
tanjiroCloseButton.addEventListener('click', closeTanjiroModal);

// Close the Tanjiro modal and reset the video when clicked anywhere outside the modal
window.onclick = function(event) {
    if (event.target == tanjiroModal) {
        closeTanjiroModal();
    }
}

// Function to play Nezuko video
function playNezukoVideo() {
    playVideo(nezukoModal, nezukoVideo, "https://www.youtube.com/embed/56WUfNekDhs?autoplay=1");
}

// Function to close the Nezuko modal and reset the video
function closeNezukoModal() {
    nezukoModal.style.display = "none"; // Hide the modal
    nezukoVideo.src = ""; // Stop the video
    magicSound.pause(); // Pause the intro sound
    magicSound.currentTime = 0; // Rewind the intro sound to the beginning
    playIntroButton.disabled = false; // Re-enable the intro sound button
}

// Attach event listener to the "Play Nezuko Video" button
const playNezukoButton = document.querySelector('.btn2');
playNezukoButton.addEventListener('click', playNezukoVideo);

// Close the Nezuko modal and reset the video when the close button is clicked
nezukoCloseButton.addEventListener('click', closeNezukoModal);

// Close the Nezuko modal and reset the video when clicked anywhere outside the modal
window.onclick = function(event) {
    if (event.target == nezukoModal) {
        closeNezukoModal();
    }
}
// Get reference to the Zenitsu video modal
const zenitsuModal = document.getElementById('zenitsuModal');
const zenitsuVideo = document.querySelector('#zenitsuModal iframe');

// Get reference to the close button for Zenitsu modal
const zenitsuCloseButton = document.querySelector('.closeZenitsu');

// Function to play Zenitsu video
function playZenitsuVideo() {
    playVideo(zenitsuModal, zenitsuVideo, "https://www.youtube.com/embed/AsuYGa8pUvA?autoplay=1");
}

// Function to close the Zenitsu modal and reset the video
function closeZenitsuModal() {
    zenitsuModal.style.display = "none"; // Hide the modal
    zenitsuVideo.src = ""; // Stop the video
    magicSound.pause(); // Pause the intro sound
    magicSound.currentTime = 0; // Rewind the intro sound to the beginning
    playIntroButton.disabled = false; // Re-enable the intro sound button
}

// Attach event listener to the "Play Zenitsu Video" button
const playZenitsuButton = document.querySelector('.btn3');
playZenitsuButton.addEventListener('click', playZenitsuVideo);

// Close the Zenitsu modal and reset the video when the close button is clicked
zenitsuCloseButton.addEventListener('click', closeZenitsuModal);

// Close the Zenitsu modal and reset the video when clicked anywhere outside the modal
window.onclick = function(event) {
    if (event.target == zenitsuModal) {
        closeZenitsuModal();
    }
}
// Get reference to the Inosuke video modal
const inosukeModal = document.getElementById('inosukeModal');
const inosukeVideo = document.querySelector('#inosukeModal iframe');

// Get reference to the close button for Inosuke modal
const inosukeCloseButton = document.querySelector('.closeInosuke');

// Function to play Inosuke video
function playInosukeVideo() {
    playVideo(inosukeModal, inosukeVideo, "https://www.youtube.com/embed/XEy4LP-dKH8?autoplay=1");
}

// Function to close the Inosuke modal and reset the video
function closeInosukeModal() {
    inosukeModal.style.display = "none"; // Hide the modal
    inosukeVideo.src = ""; // Stop the video
    magicSound.pause(); // Pause the intro sound
    magicSound.currentTime = 0; // Rewind the intro sound to the beginning
    playIntroButton.disabled = false; // Re-enable the intro sound button
}

// Attach event listener to the "Play Inosuke Video" button
const playInosukeButton = document.querySelector('.btn4'); // Changed from .btn3 to .btn4
playInosukeButton.addEventListener('click', playInosukeVideo);

// Close the Inosuke modal and reset the video when the close button is clicked
inosukeCloseButton.addEventListener('click', closeInosukeModal);

// Close the Inosuke modal and reset the video when clicked anywhere outside the modal
window.onclick = function(event) {
    if (event.target == inosukeModal) {
        closeInosukeModal();
    }
}
