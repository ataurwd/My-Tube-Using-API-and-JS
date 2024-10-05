// for menu
const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => showCategory(data.categories)
    )
}

// manage active menu style
const activeMenuStyle = () => {
    const button = document.getElementsByClassName('category-btn');
    for (const btn of button) {
        btn.classList.remove('bg-red-400')
    }
    return button;
}
// show data API
const catagoryShowing = (id) => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res => res.json())
    .then(data => {
        activeMenuStyle()
        const activeBtn = document.getElementById(`btn-${id}`);
        activeBtn.classList.add('bg-red-400')
        showVideos(data.category)
    })
}

const showCategory = (data) => {
    const showMenu = document.getElementById('category')
    data.forEach(item => {
        const div = document.createElement('div');
        div.classList = 'lg:mx-5 mx-1 text-white rounded-xl cursor-pointer'
        div.innerHTML = `
            <button id="btn-${item.category_id}" onclick="catagoryShowing(${item.category_id})" class="category-btn bg-sky-500 px-2 py-1 rounded-xl">
            ${item.category}
            </button>
        `
        showMenu.append(div)
    });
}
loadCategory()
//load video details 

const loadVideoDetails = async(id) => {
    const url = (`https://openapi.programming-hero.com/api/phero-tube/video/${id}`)
    const res = await fetch(url);
    const data = await res.json()
    modalData(data.video)
}
const modalData = (data) => {
    const modalID = document.getElementById('showData')
        modalID.innerHTML = `
        <img class="w-full" src="${data.thumbnail}"/>
        <p class="py-4">${data.description}</p>
        `
        document.getElementById('modal').showModal()
}
// for videos section
const loadVideos = (searchText = " ") => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
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
            <p class="absolute right-2 top-40 text-[16px]">12345</p>
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
            <button onclick="loadVideoDetails('${item.video_id}')" class="btn btn-primary">Details</button>
        </div>
        `
        videoContainer.append(videoCard)
    })
}


//search system

document.getElementById('search-input').addEventListener('keyup', (e) => {
    loadVideos(e.target.value);
})
loadVideos()
