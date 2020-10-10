onload = function(){

    const addOrderBtn = document.querySelector("#addOrderBtn");
    const addShopingList = document.querySelector(".modal-body-order");
    const menuName = document.querySelectorAll(".food-content a");
    const price = document.querySelector(".price");
    console.log(menuName)
    let menu = [];

    function addMenu () {
        // e.preventDefault();
       let newMenu = {
           menu:menuName,
           price:price
       }
       //add this object to array
       menu.push(newMenu);
    }

    addOrderBtn.addEventListener("click", ()=>{

    })
}