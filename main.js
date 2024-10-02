// for menu
const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => showCategory(data.categories)
    )
}
// show data API
const catagoryShowing = (id) => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res => res.json())
    .then(data => showVideos(data.category))
}

const showCategory = (data) => {
    const showMenu = document.getElementById('category')
    data.forEach(item => {
        const div = document.createElement('div');
        div.classList = 'lg:mx-5 mx-1 bg-sky-500 p-3 text-white rounded-xl cursor-pointer'
        div.innerHTML = `
            <button onclick="catagoryShowing(${item.category_id})">
            ${item.category}
            </button>
        `
        showMenu.append(div)
    });
}
loadCategory()

// for videos section
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => showVideos(data.videos)
    )
}

const showVideos = (video) => {
    const videoContainer = document.getElementById("videos");
    videoContainer.innerHTML = " "
    if(video.length == ""){
        videoContainer.innerHTML = `
        <div class="w-[80%] mx-auto">
        <img src="https://srec.ac.in/themes/frontend/images/no_data.jpg" alt="">
        </div>
        `
        videoContainer.classList.remove('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-4', 'gap-5');
    }
    else{
        videoContainer.classList.add('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-4', 'gap-5');
    }
    video.forEach(item => {
        const videoCard = document.createElement('div')
        videoCard.innerHTML = `
        <div class="card bg-base-100 mb-5">
        <figure class="h-[200px]">
            <img class="h-full w-full"
            src=${item.thumbnail}
            alt="Shoes" />
        </figure>
        <div class="flex items-center">
        <div>
            <img class="w-12 h-12 rounded-full object-cover"
            src=${item.authors[0].profile_picture}
            alt="Shoes" />
        </div>
            <div class="space-y-1 mt-3 ml-3">
            <h2 class="card-title">${item.title}</h2>
            <div class="flex items-center">
            <p class="text-gray-500">${item.authors[0].profile_name}</p>
            <span>${item.authors[0].verified == true ? `<i class="fas fa-check-circle w-5 ml-3" style="color: #1DA1F2;"></i>`: " "}</span>
            </div>
            <p>${item.others.views} views</p>
        </div>
        </div>
        </div>
        `
        videoContainer.append(videoCard)
    })
}
loadVideos()