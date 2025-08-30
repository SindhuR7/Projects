const likes = document.querySelector(".likes")

likes.addEventListener("click", () =>{
    likes.style.color = "red";
})

const clickVideo = document.querySelector(".first-video")
const showVideo = document.querySelector(".video-section")
const close = document.querySelector(".close")

clickVideo.addEventListener("click", () =>{
    showVideo.style.display = "flex";
})

close.addEventListener("click", () =>{
    showVideo.style.display = "none";
})

const video = document.querySelector(".cr")
const mute = document.querySelector(".mute")
const unmute = document.querySelector(".unmute")
video.play();

mute.addEventListener("click", () =>{
    unmute.style.display = "block";
    mute.style.display = "none";
    video.muted = false;
})
unmute.addEventListener("click", () =>{
    unmute.style.display = "none";
    mute.style.display = "block";
    video.muted = true;
})

const comment = document.querySelector(".comment")
const commentBar = document.querySelector(".comment-section")

comment.addEventListener("click", () => {
    if(commentBar.style.visibility === "hidden"){
        commentBar.style.top = "76%";
        commentBar.style.visibility = "visible";
    }else{
        commentBar.style.visibility = "hidden";
        commentBar.style.top = "90";
    }
})

let count = 0;
const post = document.querySelector(".submit")


post.addEventListener("click", () =>{

const input = document.querySelector(".CommentInput")
const section = document.querySelector(".addcomment-section")
const increment = document.querySelector(".commentCount")
let comments = input.value.trim();

    if(comments !== ""){

    let newComment = document.createElement("p")
    newComment.textContent = comments;
    section.appendChild(newComment);

    count++;
    increment.textContent = count;
    
    input.value = "";
}else{
    alert("Please type something Before posting.")
}
})

let heartCount = 0
const heart = document.querySelector(".heart")
const countHeart = document.querySelector(".heart-count")

heart.addEventListener("click", () =>{
    heart.style.color = "red";
    heartCount++;

    countHeart.innerText = heartCount;
})