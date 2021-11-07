var bounds = JSON.parse(localStorage.getItem("bounds"));

src = "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/"+bounds[0]+","+bounds[1]+","+bounds[2]+",0/500x400?access_token=pk.eyJ1IjoiYnJhdmVzdG9uZTkiLCJhIjoiY2tybHpxb2NvMGk0YTJwbm96eHFrZ3lhZCJ9.XC7Aw273nUmc9uzoKveEiA"

console.log(bounds)
console.log(src)

window.addEventListener('load', () => {

    document.getElementById('puzzleImage').src = src

})