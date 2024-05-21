//cards
const data = [
  {
    name: "Main Dish",
    amount: "(86 dishes)",
    imgFile: "./assets/images/Desi-Chicken-Haleem-.png",
  },
  {
    name: "Breakfast",
    amount: "(12 breakfast)",
    imgFile: "./assets/images/Murgh Cholay and Lahori Chanay-.png",
  },
  {
    name: "Dessert",
    amount: "(48 dessert)",
    imgFile: "./assets/images/—Pngtree—sweet jalebi_13021428.png",
  },
  {
    name: "Browse All",
    amount: "(255 items)",
    imgFile: "./assets/images/kisspng-hyderabadi-.jpg",
  },
];

const boxData = document.querySelector(".card-container");


data.forEach((e) => {
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("card");
  let menu = document.createElement("h2");
  menu.innerText = e.name;
  let size = document.createElement("p");
  size.innerText = e.amount;
  let image = document.createElement("img");
  image.src = e.imgFile;
  itemContainer.appendChild(size);
  itemContainer.appendChild(menu);
  itemContainer.appendChild(image);
  boxData.appendChild(itemContainer);
});
//slider
const carocelData = [
  {
    dishname: "Chicken Haleem",
    description:
      "Savor the soulful symphony of spices in our poetic Haleem.",
    price: "2000 pkr",
    imgFile: "./assets/images/Desi-Chicken-Haleem-.png",
    rating: "9.2",
    ratingimg: "./assets/images/fi-sr-star.png",
    borderimg: "./assets/images/right-border.png",
    heartimg: "./assets/images/filledheart.png",
  },

  {
    dishname: "Hyderabadi Biryani",
    description:
      "Savor our royal Hyderabadi Biryani at our Desi restaurant!",
    price: "1800 pkr",
    imgFile: "./assets/images/kisspng-hyderabadi-.jpg",
    rating: "8.6",
    ratingimg: "./assets/images/fi-sr-star.png",
    borderimg: "./assets/images/right-border.png",
    heartimg: "./assets/images/fi-br-heart.png",
  },
  {
    dishname: "Chicken Karahi",
    description:
      "Savor our Chicken Karahi with traditional spices at our Desi restaurant!",
    price: "2400 pkr",
    imgFile: "./assets/images/karahiii.png",
    rating: "9.7",
    ratingimg: "./assets/images/fi-sr-star.png",
    borderimg: "./assets/images/right-border.png",
    heartimg: "./assets/images/fi-br-heart.png",
  },
  {
    dishname: "Chapali Kabab",
    description:
      "Flames caress each spice-kissed fold,A taste to remember.",
    price: "1000 pkr",
    imgFile: "./assets/images/kabab-removebg-preview.png",
    rating: "9.9",
    ratingimg: "./assets/images/fi-sr-star.png",
    borderimg: "./assets/images/right-border.png",
    heartimg: "./assets/images/filledheart.png",
  },
  {
    dishname: "Lahori Channay",
    description:
      "In the heart of Lahore's culinary artistry, Channay Hits like her.",
    price: "300 pkr",
    imgFile: "./assets/images/Lahore-Makhni-Chanay-.png",
    rating: "8.6",
    ratingimg: "./assets/images/fi-sr-star.png",
    borderimg: "./assets/images/right-border.png",
    heartimg: "./assets/images/fi-br-heart.png",
  },
  {
    dishname: "Kheer",
    description:
      "Silken whispers of rice dance in creamy embrace, Kheer's sweet symphony.",
    price: "500 pkr",
    imgFile: "./assets/images/khher-removebg-preview.png",
    rating: "8.9",
    ratingimg: "./assets/images/fi-sr-star.png",
    borderimg: "./assets/images/right-border.png",
    heartimg: "./assets/images/fi-br-heart.png",
  },
];
const container = document.querySelector(".carocel");
carocelData.forEach((c) => {
  let itemContainer = document.createElement("div");
  itemContainer.classList.add("caro");

  let dish = document.createElement("h2");
  dish.innerText = c.dishname;

  let description = document.createElement("p");
  description.innerText = c.description;

  let pricediv = document.createElement("div");
  pricediv.classList.add("pricediv");

  let price = document.createElement("h2");
  price.innerText = c.price;

  let rating = document.createElement("h5");
  rating.innerText = c.rating;

  let textcaro = document.createElement("div");
  textcaro.classList.add("textcaro");
  textcaro.appendChild(dish);
  textcaro.appendChild(description);

  pricediv.appendChild(price);
  let images = document.createElement("div");
  images.classList.add("images");
  let img = document.createElement("img");
  img.classList.add("image");
  img.src = c.imgFile;
  let heart = document.createElement("img");
  heart.classList.add("heart");
  heart.src = c.heartimg;
  let border = document.createElement("img");
  border.classList.add("border");
  border.src = c.borderimg;
  images.appendChild(img);
  images.appendChild(border);
  images.appendChild(heart);

  let ratingimg = document.createElement("img");
  ratingimg.classList.add("ratingimage");
  ratingimg.src = c.ratingimg;

  let ratingtext = document.createElement("div");
  ratingtext.classList.add("ratingtext");
  ratingtext.appendChild(ratingimg);
  ratingtext.appendChild(rating);

  itemContainer.appendChild(images);
  itemContainer.appendChild(textcaro);
  itemContainer.appendChild(pricediv);
  itemContainer.appendChild(ratingtext);
  container.appendChild(itemContainer);
});
let currentIndex = 0;
const items = document.querySelectorAll(".caro");
const itemsToShow = 3;
function showSlide(index) {
  items.forEach((items) => {
    items.style.display = "none";
  });

  for (let i = index; i < index + itemsToShow; i++) {
    if (items[i]) {
      items[i].style.display = "block";
    }
  }
}
function moveToNextSlide() {
  currentIndex += itemsToShow;
  if (currentIndex >= items.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function moveToPrevSlide() {
  currentIndex -= itemsToShow;
  if (currentIndex < 0) {
    currentIndex = items.length - 3;
  }
  showSlide(currentIndex);
}

const leftButton = document.querySelector("#previous");
const rightButton = document.querySelector("#next");

leftButton.addEventListener("click", moveToPrevSlide);
rightButton.addEventListener("click", moveToNextSlide);
showSlide(currentIndex);
//lists
const footerdata = [
  {
    logo: "./assets/images/logonew.png",
    heading: "Savor the artistry where every dish is a culinary masterpiece",
    icon1: "./assets/Icons/facebook.png",
    icon2: "./assets/Icons/instagram.svg",
    icon3: "./assets/Icons/twitter.png",
    icon4: "./assets/icons/youtube.png",
    copy: "Copyright © 2023 Dscode | All rights reserved",
},
  {
    heading: "Useful links",
    link1: "About us",
    link2: "Events",
    link3: "Blogs",
    link4: "FAQ",
  },
  {
    heading: "Main Menu",
    list1: "Home",
    list2: "Offers",
    list3: "Menus",
    list4: "Reservation",
  },
  {
    heading: "Contact Us",
    c1: "larka@gmail.com",
    c2: "+92 333 4303018",
    c3: "",
    c4: "",
  },
];

const footer = document.querySelector(".footer");
const lists = document.createElement("li");
const mainList = document.createElement("div");
const allLists = document.createElement("div");
const secList=document.createElement("div");
footerdata.forEach((data) => {
  if (data.logo) {
    const list1 = document.createElement("div");
    list1.classList.add("list1");
    const logo = document.createElement("img");
    logo.src = data.logo;
    logo.id = "logo";
    list1.appendChild(logo);
    const heading = document.createElement("p");
    heading.innerText = data.heading;
    const texticon=document.createElement("div");
    texticon.classList.add("texticon");
    texticon.appendChild(heading);
    footer.appendChild(list1);
    const icons = document.createElement("div");
    icons.classList.add("icons");
    for (let i = 1; i <= 4; i++) {
      const iconLinks = document.createElement("a");
      const icon = document.createElement("img");
      icon.src = data[`icon${i}`];
      icons.appendChild(icon);
      iconLinks.appendChild(icon);
      icons.appendChild(iconLinks);
      texticon.appendChild(icons);
      list1.appendChild(texticon);
      if (i === 1) {
        icon.id = "fb";
        iconLinks.href = "https://www.facebook.com";
        iconLinks.target = "_blank";
      } else if (i === 2) {
        iconLinks.href = "https://www.instagram.com/hassantahir688/";
        iconLinks.target = "_blank";
        icon.id = "fang";
      } else if (i === 3) {
        iconLinks.href = "https://www.twitter.com";
        iconLinks.target = "_blank";
        icon.id = "fang";
      } else if (i === 4) {
        iconLinks.href = "https://www.youtube.com/@unitedproductions8062";
        iconLinks.target = "_blank";
        icon.id = "fang";
      }
  }
  if (data.copy) {
    const para = document.createElement("p");
    para.innerText = data.copy;
    icons.appendChild(para);
    texticon.appendChild(icons);
    list1.appendChild(texticon);
  }
  }
 else if (data.link1) {
    for (let j = 0; j < 1; j++) {
      const heading = document.createElement("h5");
      heading.innerText = data.heading;
      mainList.appendChild(heading);
      allLists.appendChild(mainList);
      heading.id = "links_Heading";
    }
    for (let k = 1; k < 5; k++) {
      const ul = document.createElement("ul");
      const lists = document.createElement("li");
      const links = document.createElement("a");
      links.innerText = data[`link${k}`];
      links.href = "./index.html";
      if (k==4) {
        links.href="./FAQ 2/index.html"
      }
      lists.appendChild(links);
      mainList.appendChild(lists);
      allLists.appendChild(mainList);
    }
    footer.appendChild(allLists);
  }else if (data.list1) {
    for (let j = 0; j < 1; j++) {
      const heading = document.createElement("h5");
      heading.innerText = data.heading;
      secList.appendChild(heading);
allLists.appendChild(secList);
    }
    for (let k = 1; k < 5; k++) {
      const ul = document.createElement("ul");
      const lists = document.createElement("li");
      const links = document.createElement("a");
      links.innerText = data[`list${k}`];
      links.href = "./Home.html";
      lists.appendChild(links);
      secList.appendChild(lists);
      allLists.appendChild(secList);
      secList.id="seclist";
    }
    footer.appendChild(allLists);
  }
   else {
    const lastlist=document.createElement("div");
    const heading = document.createElement("h5");
    heading.innerText = data.heading;
    heading.id = "links_Heading";
    lastlist.appendChild(heading);
    allLists.appendChild(lastlist);
    const ul = document.createElement("ul");
    const lists = document.createElement("li");
    const links = document.createElement("a");
    links.innerText = data.c1;
    links.href = "mailto:example@example.com";
    lists.innerText = data.c2;
    lastlist.appendChild(links);
    lastlist.appendChild(lists);
    allLists.appendChild(lastlist);
    footer.appendChild(allLists);
    allLists.id = "lists";
    lists.id='allLinks';
    lastlist.id='last';
  }
  mainList.id = "mainlist";
});
//navbar
const body=document.querySelectorAll('section')
const navBar = document.querySelectorAll('nav ul li a')
window.onscroll= () => {
body.forEach(e => {
 let id = e.getAttribute('id');
  navBar.forEach(f => {
    f.addEventListener('click', () => {
      navBar.forEach(link => {
        link.classList.remove('active');
      });
      f.classList.add('active');
    });
  });
});
}