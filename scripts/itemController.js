//Create an Class called  PostsControler
//PostController will be responsible for managing  posts in the applications

class PostController{

//In the contructor make a property called items that is equal to an empty array
//In the PostController constructor add a paramater called currentId. Give it default value of 0

    constructor(currentId = 0){
        this.items = [];
        this.currentId = currentId;
    };

//Create a method called addItem
//addItem should accept all the info needed to create a post. (Ex. title, description, Img) 
//In addItem, increment the currentId by 1

    addItem(title, description, imageSrc, author, datePosted){

        const post = {
         id : this.currentId++,
         title : title,
         description: description,
         imageSrc: imageSrc,
         author: author,
         datePosted: datePosted,
        };

        this.items.push(post)

        //Saves item to local storage
        localStorage.setItem("items", JSON.stringify(this.items))
   }   

   //Gets every item in local storage and adds it to the items array
   loadItemsFromLocalStorage(){

    const storageItems = localStorage.getItem("items")
    if(storageItems){
        const items = JSON.parse(storageItems)
        for(let i = 0; i < items.length; i++)
        {
            const item = items[i];
            this.items.push(item)
        }
        //TODO load the items into the local items structure (this.items) 
    }
   }

   //save fnction 

    addPost(post) {
    // Retrieve existing posts from localStorage
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
  
    // Add the new post to the array
    posts.push(post);
  
    // Store the updated posts back in localStorage
    localStorage.setItem('posts', JSON.stringify(posts));
  
    // Call the save function
    save();
}



   //Task 10 implement a new function called save that will POST
   

   save(name, description, imageUrl){
    const data = { name,  description, imageUrl };

    fetch('http://localhost:8080/post', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
}

  }






