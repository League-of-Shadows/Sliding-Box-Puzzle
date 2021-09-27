
function imageSrc(){

    selectedImage = document.getElementById("imageSelector").value
    startPuzzle(selectedImage)

}



function startPuzzle(selectedImage){

    console.log(selectedImage)

    localStorage.setItem("src", selectedImage)
    
    window.open("puzzle.html")

}

