const form = document.querySelector('#new-blog-form')
const blogSection = document.querySelector('#blogPosts')

form.addEventListener('submit', submitBlog)

let blogData;

function submitBlog(e){
    e.preventDefault();
    let blogData = {
        title: e.target.title.value,
        pseudonym: e.target.pseudonym.value,
        blogBody: e.target.blogBody.value
    };

    const optionsPost = {
        method: 'POST',
        body: JSON.stringify(blogData),
        headers: {"Content-Type": "application/json"}
    };

    fetch('http://localhost:3000/posts', optionsPost)
        .then(r => r.json())
        // .then(appendPost)
        .then(hideForm)
        .catch(console.warn);

    // const optionsGet = {
    //     method: 'GET',
    //     headers: {"Content-Type": "application/json"}
    // };

    // fetch('http://localhost:3000/posts', optionsGet)
    // .then(r => console.log(r.json()))
    // .then(appendPost)
    // .catch(console.warn);
    
    const newTitle = document.createElement('h1')
    newTitle.append(blogData.title)
    const newName = document.createElement('h2')
    newName.append(blogData.pseudonym)
    const newPost = document.createElement('p')
    newPost.append(blogData.blogBody)
    blogSection.append(newTitle, newName, newPost)
    console.log('appended')
};

// function appendPost(blogData) {
//     const newPara = document.createElement('p')
//     newPara.textContent = JSON.stringify(blogData)
//     blogSection.append(newPara)
//     console.log('appended')
// }


// function to hide form 
function hideForm() {
}