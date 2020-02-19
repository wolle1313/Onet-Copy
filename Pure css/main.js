const header = document.querySelector(".header");
const headerRest = document.querySelector(".headerRest");
const yellowdot = document.querySelector(".yellowdot");
const createNew = document.querySelector(".createNew");
const btnExit = document.querySelector(".exit");
const shade = document.querySelector(".shade");
const btnNew = document.querySelector(".new");
const title = document.querySelector(".titleArt");
const source = document.querySelector(".imgSource");
const desc = document.querySelector(".descArt");
const artMain = document.querySelector(".artMain");
const btnDo = document.querySelector(".do");

const headerSmall = function() {
    if (window.scrollY > 200) {
    header.style.height = "60px";
    headerRest.style.height = "60px";
    header.innerHTML = `<div class="logo">
    <span class="yellowdot"></span>
    <span>onet</span>
</div>
<div class="searcher">
    <div class="searchbar">
<input class="szukaj" placeholder="Szukaj!">
        </div>
    <button class="searchbutton">
    <span class="szukaj2">Szukaj</span>
</button>
</div>
<div class="sympatia">
    <i class="far fa-heart"></i>

</div>
<div class="zakupy">
    <i class="fas fa-shopping-bag"></i>
    </div>
<div class="gry">
    <i class="fas fa-chess-knight"></i>
    </div>
<div class="vod">
    <i class="far fa-play-circle"></i>
    </div>
<div class="praca">
    <i class="far fa-address-card"></i>
    </div>
<div class="email">
    <i class="far fa-envelope"></i>
   
</div>`;
    yellowdot.style.height = "45px";
    yellowdot.style.width = "45px";
    }
    else if (window.scrollY < 150) {
        header.style.height = "100px";
        headerRest.style.height = "100px";
        header.innerHTML = `<div class="logo">
        <span class="yellowdot"></span>
        <span>onet</span>
    </div>
    <div class="searcher">
        <div class="searchbar">
    <input class="szukaj" placeholder="Szukaj!">
            </div>
        <button class="searchbutton">
        <span class="szukaj2">Szukaj</span>
    </button>
    </div>
    <div class="sympatia">
            <i class="far fa-heart"></i>
            Lof
        </div>
        <div class="zakupy">
            <i class="fas fa-shopping-bag"></i>
            shop</div>
        <div class="gry">
            <i class="fas fa-chess-knight"></i>
            playstore</div>
        <div class="vod">
            <i class="far fa-play-circle"></i>
            viołdi</div>
        <div class="praca">
            <i class="far fa-address-card"></i>
            jobs</div>
        <div class="email">
            <i class="far fa-envelope"></i>
            e-mail
        </div>`;
    yellowdot.style.height = "6vh";
    yellowdot.style.width = "6vh";
    }
}

const create = function () {
    document.querySelector("body").style.overflowY = "hidden";
    createNew.style.display = "flex";
    shade.style.filter = "blur(2px)";


}
const exit = () => {
    createNew.style.display = "none";
    shade.style.filter = "blur(0px)";
    document.querySelector("body").style.overflowY = "visible";
    title.value = "" ;
  source.value = "";
  desc.value = "";
}

const createArticle = () => {
    
    const tit = title.value;
    const sour = source.value;
    const des = desc.value;
  const div =  document.createElement("div");
  div.classList.add("article");
  artMain.appendChild(div);
  const img =  document.createElement("img");
  const span1 =  document.createElement("span");
  const span2 =  document.createElement("span");
   span1.textContent = tit;
   span2.textContent = des;
   img.src = sour;
  div.appendChild(img);
  div.appendChild(span1);
  div.appendChild(span2);
  title.value = "" ;
  source.value = "";
  desc.value = "";
  createNew.style.display = "none";
  shade.style.filter = "blur(0px)";
    document.querySelector("body").style.overflowY = "visible";
}

btnDo.addEventListener('click', createArticle);
btnExit.addEventListener('click', exit);
btnNew.addEventListener('click', create);
window.addEventListener('scroll', headerSmall);


