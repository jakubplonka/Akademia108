
function display(x, paginator){    
    fetch('https://jsonplaceholder.typicode.com/photos/'+x)
    .then(response => response.json())
    .then(json => {
        let divFigureHolder = document.getElementById('image-holder');
        let figureElement = document.createElement('figure');
        let imgElement = document.createElement('img');
        let caption = document.createElement('figcaption');
        caption.innerText = json.id + ' ' + json.title;
        figureElement.setAttribute('class', 'single-post');
        imgElement.setAttribute('src', json.url);
        imgElement.setAttribute('alt', json.title);
        figureElement.appendChild(imgElement);
        figureElement.appendChild(caption);
        divFigureHolder.appendChild(figureElement);
        console.log(json);
        if(x >= (paginator+10))return;
        display(++x, paginator)
    })
}
display(1, 0);
let button = document.getElementsByTagName('button')[0];
button.addEventListener('click', function(){
    let y = document.getElementsByClassName('single-post').length;
    display(y+1, y);
});
