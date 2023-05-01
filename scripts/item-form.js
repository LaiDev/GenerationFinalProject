// Initialize a new post Controller
let itemController = new PostController();

let imgPreview = document.getElementById("image-to-post")
let uploadedImg = document.getElementById("uploadedImg")

/* uploadedImg.onchange = function(){
    imgPreview.src = URL.createObjectURL(uploadedImg.files[0]);
} */

const createPostImage = document.getElementById("uploadedImg");
createPostImage.addEventListener("change", () => {
  const fileReader = new FileReader();

  fileReader.onload = () => {
    const base64Image = fileReader.result;
    imgPreview.src = base64Image;
  };

  fileReader.readAsDataURL(createPostImage.files[0]);
});

//Add an event listener to the New Item form that listents for the submit event
const addPostForm = document.getElementById("create-post");
addPostForm.addEventListener("submit", (e) => {
    //Prevent default action
    e.preventDefault();

    //When the event fires get the input values from the form and called the postController addItem method

    const newPostTitle = document.getElementById("createPostTitle").value
    const newPostDescription = document.getElementById("createPostDescription").value
    const newPostImage =  imgPreview.src
    const newPostDate = `${new Date().getUTCMonth() + 1}/${new Date().getUTCDay()}/${new Date().getFullYear()}`
  
    //Adds the post to the postController
    itemController.addItem(newPostTitle,newPostDescription,newPostImage, "John Reed", newPostDate )
    

    //Clear the form
    addPostForm.reset();
    addPostForm.innerHTML += "The form has been submitted successfully!"

    //Directs the user back to the connect page after clicking the submit button
    window.location.href = "./posts.html"

});



