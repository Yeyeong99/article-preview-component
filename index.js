const btn = document.querySelector(".share-icon")
const shareBox = document.querySelector(".share-box")

btn.addEventListener("click", function() {
    shareBox.classList.toggle("share-show")
    shareBox.classList.toggle("share-box")
})

