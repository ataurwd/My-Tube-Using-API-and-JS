

const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${categories} ? ${categories} : ''`)






const loadBtnData = async() => {
    const res = await fetch()
    const data = await res.json()
    showCategoryMenu(data)
}

const showCategoryMenu = (data) => {
    const div = document.getElementById('divIDHere')
    data.forEach( item => {
        const container = document.createElement('div');
        container.innerHTML = `
            <button id="btn-${item.category_id}" onclick="catagoryShowing(${item.category_id})" class="category-btn bg-sky-500 px-2 py-1 rounded-xl">
            ${item.category}
            </button>
        `
        div.append(container)
    })
}


const showVideosFunction = async() => {
    const res = await fetch()
    const data = await res.json()
    showVideos(video)
}

const showVideos = (videos) => {
    const videosDiv = document.getElementById('divID');
    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.innerHTML = " "
        if(video.length == ''){
            videoCard.innerHTML `
            <div class="w-[80%] mx-auto">
            <img src="https://srec.ac.in/themes/frontend/images/no_data.jpg" alt="">
            </div>
            `
        videoCard.classList.remove('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-4', 'gap-5')
        }
        else{
            videoCard.classList.add('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-4', 'gap-5')
        }
        videoCard.innerHTML = `
                    <div class="card bg-base-100 mb-5">
        <figure class="h-[200px]">
            <img class="h-full w-full"
            src=${video.thumbnail}
            alt="Shoes" />
            <p class="absolute right-2 top-40 text-[16px]">12345</p>
        </figure>
        <div class="flex items-center">
        <div>
            <img class="w-12 h-12 rounded-full object-cover"
            src=${video.authors[0].profile_picture}
            alt="Shoes" />
        </div>
            <div class="space-y-1 mt-3 ml-3">
            <h2 class="card-title">${video.title}</h2>
            <div class="flex items-center">
            <p class="text-gray-500">${video.authors[0].profile_name}</p>
            <span>${video.authors[0].verified == true ? `<i class="fas fa-check-circle w-5 ml-3" style="color: #1DA1F2;"></i>`: " "}</span>
            </div>
            <p>${video.others.views} views</p>
        </div>
        </div>
            <button onclick="categories('${video.video_id}')" class="btn btn-primary">Details</button>
        </div>
        `
        videosDiv.append(videoCard)
    })
}

//category 

const categories = async(id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    const data = await res.json();
    
}