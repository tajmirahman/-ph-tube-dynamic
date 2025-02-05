// Load Button start
const loadButton = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(err => console.log(err));
}

// Load Button end

// display button start
const displayCategories = (categories) => {
    const btnContainer = document.getElementById('btn-container');

    categories.forEach((item) => {
        // console.log();
        const div = document.createElement('div');
        div.innerHTML = `
        <button class="btn">${item.category}</button>
        `;
        btnContainer.appendChild(div)
    });

}
// display button end

// Load Videos start here
const loadVideos = async () => {
    const url = 'https://openapi.programming-hero.com/api/phero-tube/videos';
    const res= await fetch(url);
    const data= await res.json();
    displayVideos(data.videos);

}
// Load Videos ends here

// demo object

// {
//     "category_id": "1003",
//     "video_id": "aaak",
//     "thumbnail": "https://i.ibb.co/ZNggzdm/cake.jpg",
//     "title": "Beyond The Pale",
//     "authors": [
//       {
//         "profile_picture": "https://i.ibb.co/MZ2vbXR/jimm.jpg",
//         "profile_name": "Jim Gaffigan",
//         "verified": false
//       }
//     ],
//     "others": {
//       "views": "2.6K",
//       "posted_date": "15400"
//     },
//     "description": "'Beyond The Pale' by Jim Gaffigan, with 2.6K views, is a comedic gem that explores everyday observations and family life with a light-hearted and witty approach. Jim's humor is accessible and delightful, making this show perfect for anyone who enjoys clean, observational comedy."
//   }

// Display videos start here
const displayVideos=(videos)=>{
    const videosContainer=document.getElementById('videos-container');

    videos.forEach((video)=>{
        console.log(video)
        const card=document.createElement('div');
        card.innerHTML=`

        <div class="card card-compact">
            <figure class="h-[200px]">
                <img class="w-full h-full object-cover" src="${video.thumbnail}" />
            </figure>
            <div class="flex items-center gap-2">
                <div class="py-2">
                <img class="w-10 h-10 rounded-full object-cover"  src="${video.authors[0].profile_picture}" />
                </div>
                <div>
                    <h2 class="text-xl font-bold">${video.title}</h2>
                    <div class="flex items-center gap-3">
                    <p>${video.authors[0].profile_name}</p>
                    <img class="w-5 h-5" src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000" />
                </div>
                </div>
            </div>
        </div>
        
        `;
        videosContainer.append(card);
    });
    
}
// Display videos end here

loadButton();
loadVideos();