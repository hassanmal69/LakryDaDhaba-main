const data = [
  {
    name: "Main Dish",
    amount: "(86 dishes)",
    imgFile: "/assets/images/Desi-Chicken-Haleem-.png",
  },
  {
    name: "Breakfast",
    amount: "(12 breakfast)",
    imgFile: "/assets/images/Murgh Cholay and Lahori Chanay-.png",
  },
  {
    name: "Dessert",
    amount: "(48 dessert)",
    imgFile: "/assets/images/—Pngtree—sweet jalebi_13021428.png",
  },
  {
    name: "Browse All",
    amount: "(255 items)",
    imgFile: "/assets/images/kisspng-hyderabadi-.jpg",
  },
];
const boxData=document.querySelector(".card-container")
data.forEach(e => {
 const itemContainer=document.createElement("div");
 itemContainer.classList.add('card')
    let menu = document.createElement("h2");
    menu.innerText=e.name;
    let size=document.createElement("p");
    size.innerText=e.amount;
    let image = document.createElement("img");
  image.src = e.imgFile; 
    itemContainer.appendChild(menu);
    itemContainer.appendChild(size);
    itemContainer.appendChild(image);
    boxData.appendChild(itemContainer);
});
