class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    // this.element;

    // Get the custom data attribute on the Link
    // this.data;

    // Using the custom data attribute get the associated Item element
    // this.itemElement;

    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;

    // Add a click event listener on this instance, calling the select method on click

  };

  select() {
    // Get all of the elements with the tabs-link class
    // const links;

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();

    // Add a class named "tabs-link-selected" to this link
    // this.element;

    // Call the select method on the item associated with this link

  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // this.element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items;

    // Remove the class "tabs-item-selected" from each element

    // Add a class named "tabs-item-selected" to this element
    //this.element;
  }
}
// setting links equal to a node list of .tabs-link and iterating through to create a new set of objects
let links = document.querySelectorAll('.tabs-link').forEach(tablink => {
  new TabLink(tablink)
});