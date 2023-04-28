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
        
   }   
}

//Creates a new instance of the PostController class
const myInstance = new PostController();

//Test Items being added to the items array
myInstance.addItem("Test Post", "This is a description", "https://placehold.co/600x400/png","Aalaizha B", new Date())
myInstance.addItem("Test Post2", "This is a description2", "https://placehold.co/600x400/png","Person", new Date())

console.log(myInstance.items)






