// fetch방식
const $img = document.getElementById("cat");
const $getCat = document.getElementById("getCat");
function getCatImg() {
  fetch("https://api.thecatapi.com/v1/images/search?size=full").then(
    (response) => {
      response.json().then((res) => {
        $img.src = res[0].url;
      });
    }
  );
}
$getCat.addEventListener("click", getCatImg);

// axios방식
const $imgAxios = document.getElementById("catAxios");
const $getCatAxios = document.getElementById("getCatAxios");

async function getCat() {
    await axios.get(
      "https://api.thecatapi.com/v1/images/search?size=full"
    ).then((response)=>{
      let res = response.data[0].url;
      $imgAxios.src = res;
    });
}

$getCatAxios.addEventListener("click", getCat);
