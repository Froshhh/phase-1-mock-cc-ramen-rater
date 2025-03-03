fetch("http://localhost:3000/ramens")
  .then((resp) => resp.json())
  .then((ramens) => renderRamens(ramens));

const newRamenForm = document.querySelector("#new-ramen");
newRamenForm.addEventListener("submit", handleNewRamen);

const renderRamens = (ramens) => {
  ramens.forEach((ramen) => {
    const image = document.createElement("img");
    image.src = ramen.image;
    const ramenMenu = document.querySelector("#ramen-menu");
    ramenMenu.appendChild(image);
    image.addEventListener("click", () => renderDetails(ramen));
  });
};

const renderDetails = (ramen) => {
  const ramenImage = document.querySelector(".detail-image");
  ramenImage.src = ramen.image;
  const ramenName = document.querySelector(".name");
  ramenName.innerText = ramen.name;
  const ramenRestaurant = document.querySelector(".restaurant");
  ramenRestaurant.innerText = ramen.restaurant;
  const ramenRating = document.querySelector("#rating-display");
  ramenRating.innerText = ramen.ramenRating;
  const ramenComment = document.querySelector("#comment-display");
  ramenComment.innerText = ramen.comment;
};

function handleNewRamen(e) {
  e.preventDefault();
  const newName = document.querySelector("#new-name").value;
  const newRestaurant = document.querySelector("#new-restaurant").value;
  const newImage = document.querySelector("#new-image").value;
  const newRating = document.querySelector("#new-rating").value;
  const newComment = document.querySelector("#new-comment").value;

  let newRamen = {
    name: newName,
    restaurant: newRestaurant,
    image: newImage,
    rating: newRating,
    comment: newComment,
  };
  renderRamens([newRamen]);
}
