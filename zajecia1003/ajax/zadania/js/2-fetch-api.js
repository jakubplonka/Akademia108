fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {
        json.forEach(element => {
            let singlePostDiv = document.createElement('div');
            singlePostDiv.classList.add('post');
            let postHeading = document.createElement('h2');
            postHeading.classList.add('post-heading')
            postHeading.innerText = element.title;
            let parContent = document.createElement('p');
            parContent.classList.add('body');
            parContent.innerText = element.body;
            singlePostDiv.appendChild(postHeading);
            singlePostDiv.appendChild(parContent);
            document.getElementById('posts').appendChild(singlePostDiv);
        });
    })