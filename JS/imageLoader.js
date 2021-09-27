var selectedImage = localStorage.getItem("src")

console.log(selectedImage)
console.log(document.getElementById('puzzleImage').src)

window.addEventListener('load', () => {

    document.getElementById('bgimage').src = selectedImage
    document.getElementById('puzzleImage').src = selectedImage

})

console.log(document.getElementById('puzzleImage').src)