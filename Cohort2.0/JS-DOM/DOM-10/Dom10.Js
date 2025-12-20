const reelsData = [
  {
    username: "pranav.codes",
    likecount: 1240,
    isliked: false,
    commentcount: 132,
    caption: "Late nights, clean code, real progress 💻🔥",
    sharecount: 78,
    video: "./assets/1.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/11.jpg",
    isFollowed: true
  },
  {
    username: "dev.diaries",
    likecount: 982,
    isliked: true,
    commentcount: 89,
    caption: "One bug at a time, getting better every day 🐛➡️✨",
    sharecount: 54,
    video: "./assets/2.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/21.jpg",
    isFollowed: false
  },
  {
    username: "ui.vibes",
    likecount: 2150,
    isliked: false,
    commentcount: 210,
    caption: "Good UI speaks louder than words 🎨✨",
    sharecount: 143,
    video: "./assets/3.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/34.jpg",
    isFollowed: true
  },
  {
    username: "codewithsam",
    likecount: 1765,
    isliked: false,
    commentcount: 164,
    caption: "Frontend feels easy until CSS enters 😅",
    sharecount: 96,
    video: "./assets/4.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/45.jpg",
    isFollowed: false
  },
  {
    username: "react.rider",
    likecount: 2890,
    isliked: true,
    commentcount: 301,
    caption: "Components, hooks, and endless rerenders ⚛️",
    sharecount: 210,
    video: "./assets/5.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/56.jpg",
    isFollowed: true
  },
  {
    username: "daily.js",
    likecount: 1345,
    isliked: false,
    commentcount: 118,
    caption: "JavaScript: confusing but powerful 💛",
    sharecount: 67,
    video: "./assets/6.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/61.jpg",
    isFollowed: false
  },
  {
    username: "creative.codes",
    likecount: 1987,
    isliked: true,
    commentcount: 190,
    caption: "Turning ideas into interfaces 🚀",
    sharecount: 129,
    video: "./assets/7.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/72.jpg",
    isFollowed: true
  },
  {
    username: "bug.hunter",
    likecount: 870,
    isliked: false,
    commentcount: 76,
    caption: "Found the bug after 3 hours… it was a semicolon 😐",
    sharecount: 42,
    video: "./assets/8.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/83.jpg",
    isFollowed: false
  },
  {
    username: "web.journey",
    likecount: 1560,
    isliked: true,
    commentcount: 145,
    caption: "From HTML to full-stack, step by step 🌱",
    sharecount: 88,
    video: "./assets/9.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/94.jpg",
    isFollowed: true
  },
  {
    username: "design.to.dev",
    likecount: 2234,
    isliked: false,
    commentcount: 198,
    caption: "Design it. Build it. Improve it. Repeat 🔁",
    sharecount: 156,
    video: "./assets/10.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/99.jpg",
    isFollowed: false
  }
];

let sum = ''
reelsData.forEach(function(elem){
    sum = sum + `<div class="reel">
            <img
              class="main-img"
              src="https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8fDB8fHww"
              alt=""
            />

            <div class="bottom">
              <div class="user">
                <img
                  src="https://plus.unsplash.com/premium_photo-1682095757120-c9abb908ed60?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D"
                  alt=""
                />
                <h4>Nancy_54</h4>
                <button>Follow</button>
              </div>
              <h3>“Eyes up. Mind focused.”</h3>
            </div>

            <div class="right">
              <div class="like">
                <h4 class="like-ic icon"><i class="ri-heart-3-line"></i></h4>
                <h6>200</h6>
              </div>

              <div class="comm">
                <h4 class="comm-ic icon"><i class="ri-chat-3-line"></i></h4>
                <h6>200</h6>
              </div>

              <div class="shr">
                <h4 class="shr-ic icon"><i class="ri-telegram-2-line"></i></h4>
                <h6>200</h6>
              </div>

              <div class="sav">
                <h4 class="sav-ic icon"><i class="ri-bookmark-line"></i></h4>
                <h6>200</h6>
              </div>

              <div class="rep">
                <h4 class="rep-ic icon"><i class="ri-refresh-line"></i></h4>
                <h6>200</h6>
              </div>

              <div class="dot">
                <h4 class="dot-ic icon"><i class="ri-more-2-fill"></i></h4>
                <!-- <h6>200</h6> -->
              </div>
            </div>
          </div>`
})

console.log(sum);
