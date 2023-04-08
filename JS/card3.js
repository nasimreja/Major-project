function likeButton(){
     let heart = document.querySelector('.heart');
     let likes = document.querySelector('.likes');
     if(heart.src.match("../ICON/love.svg")){
         heart.src = "../ICON/red_love.svg";
         likes.innerHTML = "5,490 likes";
     } else {
         heart.src = "../ICON/love.svg";
         likes.innerHTML = "5,489 likes"
     }
 }