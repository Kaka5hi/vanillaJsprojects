const btn = document.querySelector('button');
const imagePlaceholder = document.querySelector('.image-placeholder')

// creating a image element
let placeholderImage = document.createElement('img');


btn.addEventListener('click',() => {
    fetch('https://picsum.photos/200/300')
    .then((res) => { 
        let resImage = res.url;
        placeholderImage.src = resImage
        imagePlaceholder.append(placeholderImage)
    })
})