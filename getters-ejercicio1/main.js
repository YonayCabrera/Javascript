$.get('https://jsonplaceholder.typicode.com/photos')
    .then(callback => addImage(callback.slice(0, 10)))
    .catch(errorCallback => console.log(errorCallback))

function addImage(images) {
    images.forEach(image => {
        $("body").append(`<div class="card" style="width: 18rem;">
            <div class="card-body">
            <img src="${image.url}" alt="">
            </div>
        </div>` );
    });
}