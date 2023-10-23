// array
// addevenlister
// getElementById
// createElement
// shoppingList

// empty array
let shoppingList = [];

// call the add to cart button
const btnAddToCart = document.getElementById("addItemBtn");

// addeventlistener on the add the cart button
btnAddToCart.addEventListener("click", function () {
  const itemInput = document.getElementById("itemInput").value;

  // how do we push the itemInput in the shoppingList
  if (itemInput !== "") {
    shoppingList.push(itemInput);
    displayShoppingList();
  } else {
    alert("Maglagay ng laman ");
  }
});

// function to get the the display of shoppings
function displayShoppingList() {
  // call the ul
  const shopList = document.getElementById("shoppingList");

  shopList.innerHTML = "";

  shoppingList.forEach((item) => {
    // create li
    // createElement()
    const listItem = document.createElement("li");
    listItem.textContent = item;
    listItem.classList.add("list-group-item");
    shopList.append(listItem);
  });
}
// for upgrade

/**
 * - add a remove icon or link text
 * - if the item is in the cart already
 *   display a message item is in the cart or shoppinglist
 *   already.
 * - total if how many items are in the shoppings
 */