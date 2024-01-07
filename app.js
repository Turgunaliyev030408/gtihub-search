const body = document.querySelector("body");
const dark = document.getElementById("dark");
const light = document.getElementById("light");
const form = document.getElementById("form");
const button = document.getElementById("search");
const input = document.getElementById("search_inp");

let API = "https://api.github.com/users/";

const modeLocal = localStorage.getItem("mode");

if (modeLocal) {
  body.classList.add("dark");
  dark.classList.toggle("hidden");
  light.classList.toggle("hidden");
}

const toggleModeBtn = () => {
  dark.classList.toggle("hidden");
  light.classList.toggle("hidden");
  body.classList.toggle("dark");
};

dark.addEventListener("click", () => {
  toggleModeBtn();
  localStorage.setItem("mode", "dark");
});

light.addEventListener("click", () => {
  toggleModeBtn();
  localStorage.setItem("mode", "");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValue = input.value;
  let api1 = `https://api.github.com/users/` + inputValue;
  let api = api1;
  mes(api);
});
async function mes(api) {
  const request = await fetch(api);
  const data = await request.json();
  updateUI(data);
}
function updateUI(data) {
  const xato = document.querySelector(".xato3");
  if (data.login) {
    xato.classList.add("hidden");
  } else {
    xato.classList.remove("hidden");
  }
  const userName = document.getElementById("user_name");
  const userLog = document.getElementById("user_username");
  const userImg = document.getElementById("img_user");
  const userA = document.getElementById("user_link");
  const userAbout = document.getElementById("user_bio");
  const userRepos = document.getElementById("user_repos");
  const userFollowers = document.getElementById("user_followers");
  const userFollowing = document.getElementById("user_following");
  const userLoc = document.getElementById("user_loc");
  const userTwitter = document.getElementById("user_twitter");
  const userBlog = document.getElementById("user_blog");
  const userCompany = document.getElementById("user_company");
  const userDay = document.getElementById("user_day");
  if (data.login) {
    userName.textContent = data.login;
  } else {
    userName.textContent = "user login none";
  }
  if (data.login) {
    userLog.textContent = data.login;
  } else {
    userLog.textContent = "user login none";
  }
  if (data.avatar_url) {
    userImg.src = data.avatar_url;
  } else {
    userImg.src = "../img/user.svg";
  }
  if (data.html_url) {
    userA.href = data.html_url;
  } else {
    userA.href = "#";
  }
  if (data.bio) {
    userAbout.textContent = data.bio;
  } else {
    userAbout.textContent = "user bio none";
  }
  if (data.public_repos) {
    userRepos.textContent = data.public_repos;
  } else {
    userRepos.textContent = "0";
  }
  if (data.followers) {
    userFollowers.textContent = data.followers;
  } else {
    userFollowers.textContent = "0";
  }
  if (data.following) {
    userFollowing.textContent = data.following;
  } else {
    userFollowing.textContent = "0";
  }
  if (data.location) {
    userLoc.textContent = data.location;
  } else {
    userLoc.textContent = "user no location";
  }
  if (data.twitter_username) {
    userTwitter.textContent = data.twitter_username;
  } else {
    userTwitter.textContent = "user no twitter username";
  }
  if (data.blog) {
    userBlog.textContent = data.blog;
  } else {
    userBlog.textContent = "user blog none";
  }
  if (data.company) {
    userCompany.textContent = data.company;
  } else {
    userCompany.textContent = "user company none";
  }
  if (data.created_at) {
    userDay.textContent = data.created_at;
  } else {
    userDay.textContent = "joined none";
  }
}
