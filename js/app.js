document.addEventListener('DOMContentLoaded', () => {

        // Listen for the form submit button being pressed
        const newItemForm = document.querySelector('#create-list-item');
        newItemForm.addEventListener('submit', handleNewItemFormSubmit);

        


})


// Will create a new list item when form is submitted
const handleNewItemFormSubmit = function (event) {
    event.preventDefault(); //Prevent page refreshing when data is submitted

    const conservationListItem = createConservationListItem(event.target);
    const conservationList = document.querySelector('#extinct-list');
    conservationList.appendChild(conservationListItem);

    event.target.reset();
}

const createConservationListItem = function (form) {
    const conservationListItem  = document.createElement('li'); // Make new list item
    conservationListItem.classList.add('conservation-list-item'); // Add class to h2

    // Add species to new list item common name as a h2 title
    const commonName = document.createElement('h2');
    commonName.textContent = form.commonName.value;
    conservationListItem.appendChild(commonName);

    // Add new species to new list item with scientific name as a h3 header
    const scientificName = document.createElement('h3');
    scientificName.textContent = form.scientificName.value;
    conservationListItem.appendChild(scientificName);

    return conservationListItem;

}