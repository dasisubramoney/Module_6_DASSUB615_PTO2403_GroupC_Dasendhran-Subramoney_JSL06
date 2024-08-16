// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menucontainer = document.getElementById('menu');
    menucontainer.innerHTML = '';

    // Loop through each category and its items in the menu object
    for (const category in menu) {
        
        const coursesTitle = document.createElement('h2'); // Create an element to represent the category
        coursesTitle.textContent = category;  // Set the text content of the category element to the category name

        // Append the category name to the menu container
        menucontainer.appendChild(coursesTitle); // Append the category element to the menu container

        const itemList = document.createElement('ul');// Create an element to represent a list of items

        // Loop through the items in the category and create list items
        menu[category].forEach(item => {
            // Create a list item for each dish
            const listItem = document.createElement('li');// Create a list item element
            listItem.textContent = item;  // Set the text content of the list item element to the item name
            listItem.addEventListener('click', addToOrder)// Attach a click event listener to the list item to add it to the order

            // Append the dish to the list
            itemList.appendChild(listItem);
        });

       // Append the list item to the list of items
        menucontainer.appendChild(itemList);

       // Attach a click event listener to the list item to add it to the order
    }

            
}

// Callback function for adding an item to the order
function addToOrder(listItem) {
    // Get the order items list and the order total element from the HTML
    const orderitems = document.getElementById('order-items');
    const ordertotal = document.getElementById('order-total');

    // Create a list item for the order

    // Set the text content of the list item to the item name
    const listOrder = document.createElement('li');// Create a list item element
    const Item = listItem.target.textContent ;
    listOrder.textContent = Item;  // Set the text content of the list item element to the item name

    orderitems.appendChild(listOrder);// Append the list item to the order items list

    // Calculate and update the total price
    const oldtotal = parseInt(ordertotal.textContent, 10);

    const newtotal = oldtotal  + 60; 

    ordertotal.textContent = newtotal;

    ordertotal.appendChild(newtotal);

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);