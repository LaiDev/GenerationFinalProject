// Initialize a new post Controller
const postController = new PostController()

//Create a function called addItemCard() with a paramater called item
function addItemCard(item) {
 

    const postContainer = document.getElementById("list-items")

    let card = document.createElement("div");
    card.classList.add("card")
    postContainer.appendChild(card)

    //Create Card img and add it to the card 
    //Set img src to item.imageSrc

    let cardImg = document.createElement("img")
    card.appendChild(cardImg)
    cardImg.src = item.imageSrc;

    //Create Card title and add it to the card 
    //Set title innerhtml to item.title

    let cardTitle = document.createElement("h5")
    cardTitle.innerHTML = item.title;
    card.appendChild(cardTitle)

    //Create Card description and add it to the card 
    //Set description innerhtml to item.description
    let cardDescription = document.createElement("p")
    cardDescription.innerHTML = item.description;
    card.appendChild(cardDescription)
    //Create Card author and add it to the card 
    //Set author innerhtml to item.author
    let cardAuthor = document.createElement("p")
    cardAuthor.innerHTML = item.author;
    card.appendChild(cardAuthor)

    //Create Card posted date and add it to the card 
    //Set posted date innerhtml to item.postedDate
    let cardDatePosted = document.createElement("p")
    cardDatePosted.innerHTML = item.datePosted;
    card.appendChild(cardDatePosted)

}


/* //Adds the items to local storage
function loadStorageSampleData(){
    if(localStorage.getItem("items"))
    {
        const testItems = [{
            title: "Test Post",
            description: "This is a description",
            imageSrc: "https://plchldr.co/i/500x250",
            author : "Aalaizha",
            datePosted: new Date()
        },
        {
            title: "Test Post2",
            description: "This is another description",
            imageSrc: "https://plchldr.co/i/500x250",
            author : "Person",
            datePosted: new Date()
        },
        {
            title: "Test Post3",
            description: "This is a third description",
            imageSrc: "https://plchldr.co/i/500x250",
            author : "Person",
            datePosted: new Date()
        },
        {
            title: "Test Post3",
            description: "This is a third description",
            imageSrc: "https://plchldr.co/i/500x250",
            author : "Person",
            datePosted: new Date()
        }]

        //Adds items to the local storage. Stores the items as the value of a key called "items"
        localStorage.setItem("items", JSON.stringify(testItems));
        
    
    }
    
} */



//Loops through the items array (in itemController.js), and for each item it creates a itemCard
function loadCardsListFromItemsController(){
    for(let i = 0; i < postController.items.length; i++)
    {
        const item = postController.items[i]
        addItemCard(item)
    }
}




//loadStorageSampleData()
postController.loadItemsFromLocalStorage();
loadCardsListFromItemsController();