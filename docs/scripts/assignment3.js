/*
 * Add your JavaScript to this file to complete the assignment.  Don't forget
 * to add your name and @oregonstate email address below.
 *
 * Name: Tom Nyuma
 * Email: nyumat@oregonstate.edu
 * 
 */

const createTwitButton = document.getElementById("create-twit-button");
const modalBackdrop = document.getElementById("modal-backdrop");
const createTwitModal = document.getElementById("create-twit-modal");
const closeModalButton = document.querySelector(".modal-close-button");
const submitTwitButton = document.querySelector(".modal-accept-button");
const cancelTwitButton = document.querySelector(".modal-cancel-button");
const navbarSearchInput = document.getElementById("navbar-search-input");
const navBarSearchButton = document.getElementById("navbar-search-button");
const numTwits = document.querySelectorAll('.twit').length;
const originalTwits = document.querySelectorAll('.twit');
const addedTwits = [];

const eraseForm = () => {
      let twitTextInput = document.getElementById("twit-text-input");
      let twitAuthorInput = document.getElementById("twit-attribution-input");
      twitTextInput.value = "";
      twitAuthorInput.value = "";
}

const closeModal = () => {
      modalBackdrop.classList.add("hidden");
      createTwitModal.classList.add("hidden");

      closeModalButton.removeEventListener("click", closeModal);
      eraseForm();

}

const createIcon = () => {
      let newTwitIcon = document.createElement("div");
      let twitIcon = document.createElement("i");
      newTwitIcon.classList.add("twit-icon");
      twitIcon.classList.add("fas", "fa-bullhorn");
      newTwitIcon.appendChild(twitIcon);
      return newTwitIcon;
}

const createAuthor = (givenAuthor) => {
      let twitAuthor = document.createElement("p");
      let twitLink = document.createElement("a");
      twitAuthor.classList.add("twit-author");
      twitLink.href = "#";
      twitLink.innerText = givenAuthor
      twitAuthor.append(twitLink);
      return twitAuthor;
}

const createText = (givenText) => {
      let twitText = document.createElement("p");
      twitText.classList.add("twit-text");
      twitText.innerText = givenText;
      return twitText;
}

const makeTwit = (icon) => {
      let article = document.createElement("article");
      article.classList.add("twit");
      article.append(icon);
      return article;
}

const createContent = (twitText, twitAuthor) => {
      let content = document.createElement("div");
      content.classList.add("twit-content");
      content.append(twitText, twitAuthor);
      return content;
}

const combineToTwit = (icon, twitText, twitAuthor) => {
      let twit = makeTwit(icon);
      let content = createContent(twitText, twitAuthor);
      twit.append(content);
      return twit;
}

const submitTwit = () => {
      const listOfTwits = document.getElementsByClassName("twit-container");

      let twitTextInput = document.getElementById("twit-text-input");
      let twitAuthorInput = document.getElementById("twit-attribution-input");

      let givenText = twitTextInput.value;
      let givenAuthor = twitAuthorInput.value;

      if (givenText === "" || givenAuthor === "") {
            alert("Please fill out all fields, or close the modal.");
      } else {
            const icon = createIcon();
            const twitText = createText(givenText);
            const twitAuthor = createAuthor(givenAuthor);
            const twitToAdd = combineToTwit(icon, twitText, twitAuthor);

            listOfTwits[0].appendChild(twitToAdd);
            addedTwits.push(twitToAdd);
            closeModal();
      }
}

const showModal = () => {
      modalBackdrop.classList.remove("hidden");
      createTwitModal.classList.remove("hidden");

      cancelTwitButton.addEventListener("click", closeModal);
      closeModalButton.addEventListener("click", closeModal);
      submitTwitButton.addEventListener("click", submitTwit);
}

window.onload = () => {
      createTwitButton.addEventListener("click", showModal);
      navbarSearchInput.addEventListener("keydown", search);
      navBarSearchButton.addEventListener("click", search);
}

const search = () => {
      let parent = document.getElementsByClassName("twit-container")[0];
      var listOfCurrentTwits = document.querySelectorAll('.twit');
      var currentInput = document.getElementById("navbar-search-input");

      for (let i = 0; i < listOfCurrentTwits.length; i++) {
            if (listOfCurrentTwits[i].textContent.toLowerCase().indexOf(currentInput.value.toLowerCase()) == -1) {
                  listOfCurrentTwits[i].parentNode.removeChild(listOfCurrentTwits[i]);
            }
      }

      if (currentInput.value == "") {
            for (let i = 0; i < numTwits; i++) {
                  parent.insertBefore(originalTwits[i], parent.firstChild);
                  for (let j = 0; j < addedTwits.length; j++) {
                        parent.appendChild(addedTwits[j]);
                  }
            }
      }

}