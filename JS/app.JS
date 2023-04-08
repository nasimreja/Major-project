// story slider
const allStories = [
     {
       thumbUrl: "../IMAGE_VIDEO/1-thumb.png",
       imageUrl: "../IMAGE_VIDEO/1.png",
       title: "Title No. 1",
     },
   
     {
       thumbUrl: "../IMAGE_VIDEO/2-thumb.png",
       imageUrl: "../IMAGE_VIDEO/2.png",
       title: "Title No. 2",
     },
   
     {
       thumbUrl: "../IMAGE_VIDEO/3-thumb.png",
       imageUrl: "../IMAGE_VIDEO/3.png",
       title: "Title No. 3",
     },
   
     {
       thumbUrl: "../IMAGE_VIDEO/4-thumb.png",
       imageUrl: "../IMAGE_VIDEO/4.png",
       title: "Title No. 4",
     },
   
     {
       thumbUrl: "../IMAGE_VIDEO/5-thumb.png",
       imageUrl: "../IMAGE_VIDEO/5.png",
       title: "Title No. 5",
     },
   
     {
       thumbUrl: "../IMAGE_VIDEO/6-thumb.png",
       imageUrl: "../IMAGE_VIDEO/6.png",
       title: "Title No. 6",
     },
   
     {
       thumbUrl: "../IMAGE_VIDEO/7-thumb.png",
       imageUrl: "../IMAGE_VIDEO/7.png",
       title: "Title No. 7",
     },
   
     {
       thumbUrl: "../IMAGE_VIDEO/8-thumb.png",
       imageUrl: "../IMAGE_VIDEO/8.png",
       title: "Title No. 8",
     },
   ];
   
   const storiesContainer = document.querySelector(".stories-container");
   const storyFull = document.querySelector(".story-full");
   const storyFullImage = document.querySelector(".story-full img");
   const storyFullTitle = document.querySelector(".story-full .title");
   const closeBtn = document.querySelector(".story-full .close-btn");
   const leftArrow = document.querySelector(".story-full .left-arrow");
   const rightArrow = document.querySelector(".story-full .right-arrow");
   
   let currentIndex = 0;
   let timer;
   
   allStories.forEach((s, i) => {
     const content = document.createElement("div");
     content.classList.add("content");
   
     const img = document.createElement("img");
     img.setAttribute("src", s.thumbUrl);
   
     storiesContainer.appendChild(content);
     content.appendChild(img);
   
     content.addEventListener("click", () => {
       currentIndex = i;
       storyFull.classList.add("active");
       storyFullImage.setAttribute("src", s.imageUrl);
   
       if (!s.title) {
         storyFullTitle.style.display = "none";
       } else {
         storyFullTitle.style.display = "block";
         storyFullTitle.innerHTML = s.title;
       }
   
       clearInterval(timer);
       timer = setInterval(nextStory, 5000);
     });
   });
   
   closeBtn.addEventListener("click", () => {
     storyFull.classList.remove("active");
   });
   
   leftArrow.addEventListener("click", () => {
     if (currentIndex > 0) {
       currentIndex -= 1;
   
       storyFullImage.setAttribute("src", allStories[currentIndex].imageUrl);
   
       if (!allStories[currentIndex].title) {
         storyFullTitle.style.display = "none";
       } else {
         storyFullTitle.style.display = "block";
         storyFullTitle.innerHTML = allStories[currentIndex].title;
       }
   
       clearInterval(timer);
       timer = setInterval(nextStory, 5000);
     }
   });
   
   const nextStory = () => {
     if (currentIndex < allStories.length - 1) {
       currentIndex += 1;
   
       storyFullImage.setAttribute("src", allStories[currentIndex].imageUrl);
   
       if (!allStories[currentIndex].title) {
         storyFullTitle.style.display = "none";
       } else {
         storyFullTitle.style.display = "block";
         storyFullTitle.innerHTML = allStories[currentIndex].title;
       }
     }
   };
   
   rightArrow.addEventListener("click", () => {
     nextStory();
     clearInterval(timer);
     timer = setInterval(nextStory, 5000);
   });
   


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

function markButton(){
  let book = document.querySelector('.book');
  if(book.src.match("../ICON/bookmark.svg")){
    book.src = "../ICON/bookmark5.0.svg";
  } else {
    book.src = "../ICON/bookmark.svg";
  }
}



// $(document).ready(function(){				

//   $("#follow-button").click(function(){
//     if ($("#follow-button").text() == "Follow"){
//       // *** State Change: To Following ***      
//       // We want the button to squish (or shrink) by 10px as a reaction to the click and for it to last 100ms    
//       $("#follow-button").animate({ width: '-=10px' }, 100, 'easeInCubic', function () {});
      
//       // then now we want the button to expand out to it's full state
//       // The left translation is to keep the button centred with it's longer width
//       $("#follow-button").animate({ width: '+=45px', left: '-=15px' }, 600, 'easeInOutBack', function () { 
//         $("#follow-button").css("color", "#fff");
//         $("#follow-button").text("Following");

//         // Animate the background transition from white to green. Using JQuery Color
//         $("#follow-button").animate({
//           backgroundColor: "#2EB82E",
//           borderColor: "#2EB82E"
//         }, 1000 );
//       });
//     }else{
      
//       // *** State Change: Unfollow ***     
//       // Change the button back to it's original state
//       $("").animate({ width: '-=25px', left: '+=15px' }, 600, 'easeInOutBack', function () { 
//         $("#follow-button").text("Follow");
//         $("#follow-button").css("color", "#3399FF");
//         $("#follow-button").css("background-color", "#ffffff");
//         $("#follow-button").css("border-color", "#3399FF");
//       });
//     }
//   }); 
// });

            // /* This assigns the element with id 'buttonId' to 'btn' */
            // var btn = document.getElementById("follow-button");
            
            // /* This sets the action to perform on a click event */
            // btn.addEventListener("click", function() {
            //     /* This changes the button's label */
            //     btn.innerHTML = 'Following';
            // });

// document.querySelectorAll("#follow-button").forEach(button =>{
//   button.addEventListener('click',event =>{
//     if(event.target.classList.contains('Following')){
//       event.target.innerText = 'Following';
//       event.target.classList.remove('Following');
//     }else{
//       event.target.innerHTML = 'Follow';
//       event.target.classList.add('Following')
//     }
//   })
// })


$('button').click(function(){
  var $bbt = $(bbt);
  $bbt.toggleClass('following')
  if($bbt.is('.following')){
    $bbt.addClass('wait');
  }
}).on('mouseleave',function(){
  $(bbt).removeClass('wait');
});



// Get all elements with class="close"
var closet = document.getElementsByClassName("Cross_sign");
var i;

// Loop through the elements, and hide the parent, when clicked on
for (i = 0; i < closet.length; i++) {
  closet[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}


// var btn = $('#back_to_top_btn');

// $(window).scroll(function() {
//   if ($(window).scrollTop() > 300) {
//     btn.addClass('show');
//   } else {
//     btn.removeClass('show');
//   }
// });

// btn.on('click', function(e) {
//   e.preventDefault();
//   $('html, body').animate({scrollTop:0}, '300');
// });
