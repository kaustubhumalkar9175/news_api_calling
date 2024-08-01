// const API_KEY = "a1c76f625cd64d16b40158543bb83b29";
// const url = "https://newsapi.org/v2/everything?q=";

// window.addEventListener("load", () => fetchNews("India"));

// async function fetchNews(query) {
//     try {
//         const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
//         const data = await res.json();
//         bindData(data.articles);
//     } catch (error) {
//         console.error('Error fetching the news:', error);
//     }
// }

// function bindData(articles) {
//     const cardsContainer = document.getElementById('cards-container');
//     const newsCardTemplate = document.getElementById('template-news-card');

//     // Clear the container
//     cardsContainer.innerHTML = '';

//     articles.forEach(article => {
//         // Skip if there is no image
//         if (!article.urlToImage) return;

//         // Clone the template content
//         const cardClone = newsCardTemplate.content.cloneNode(true);

//         // Update the card with article data
//         cardClone.querySelector('#news-image').src = article.urlToImage;
//         cardClone.querySelector('#news-title').innerText = article.title;
//         cardClone.querySelector('#news-source').innerText = `${article.source.name} ${new Date(article.publishedAt).toLocaleDateString()}`;
//         cardClone.querySelector('#news-desc').innerText = article.description;

//         // Append the card to the container
//         cardsContainer.appendChild(cardClone);
//     });
// }



// const API_KEY = "a1c76f625cd64d16b40158543bb83b29";
// const url = "https://newsapi.org/v2/everything?q=";

// window.addEventListener("load", () => fetchNews("India"));

// async function fetchNews(query) {
//     const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
//     const data = await res.json();
//     // console.log(data)
//     bindData(data.articles);
// }

// function bindData(articles) {
//     const cardsContainer = document.getElementById('cards-container');
//     const newsCardTemplate = document.getElementById('template-news-card');

//     cardsContainer.innerHTML = '';

//     articles.forEach(article => {
//         if (!article.urlToImage) return;
//         const cardClone = newsCardTemplate.contentEditable.cloneNode(true);
//         fillDataInCard(cardClone, article);
//         cardsContainer.appendChild();
//     })
// }

// function fillDataInCard(cardClone, article) {
//     const newsImg = cardClone.querySelector('#news-img');
//     const newsTitle = cardClone.querySelector('#news-title');
//     const newsSource = cardClone.querySelector('#news-source');
//     const newsDesc = cardClone.querySelector('#news-desc');

//     newsImg.src = article.urlToImage;
//     newsTitle.innerHTML = article.title;
//     newsDesc.innerHTML = article.desc;
//     const date = new Date(article.publishedAt.toLocalString("en-US", {
//         timeZone: "Asia/Jakarta"
//     }));

//     newsSource.innerHTML = `${artcile.source.name} . ${date}`;
//     cardClone.firstElementChild.addEventListener('click', () => {
//         window.open(article.url, "_blank")
//     })
// }



const API_KEY = "a1c76f625cd64d16b40158543bb83b29";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("India"));

function reload(){
    window.location.reload();
}

async function fetchNews(query) {
    try {
        const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
        const data = await res.json();
        bindData(data.articles);
    } catch (error) {
        console.error('Error fetching the news:', error);
    }
}

function bindData(articles) {
    const cardsContainer = document.getElementById('cards-container');
    const newsCardTemplate = document.getElementById('template-news-card');

    cardsContainer.innerHTML = '';

    articles.forEach(article => {
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector('#news-image');
    const newsTitle = cardClone.querySelector('#news-title');
    const newsSource = cardClone.querySelector('#news-source');
    const newsDesc = cardClone.querySelector('#news-desc');

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    });

    newsSource.innerHTML = `${article.source.name} . ${date}`;
    cardClone.firstElementChild.addEventListener('click', () => {
        window.open(article.url, "_blank");
    });
}

let curSelectedNav = null;
function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove('active');
    curSelectedNav = navItem;
    curSelectedNav.classList.add('active');
}

const searchButton = document.getElementById('search-button');
const searchText  = document.getElementById('search-text');

searchButton.addEventListener('click', () => {
    const query = searchText.value;
    if(!query) return;
    fetchNews(query);
    curSelectedNav?.classList.remove('active');
    curSelectedNav = null;

})