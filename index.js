const apiKey = "c12a370e3ccc4509bf286ced0315e87b";
let main = '';

window.addEventListener('load', (e) => {
    main = document.getElementById('main');
    updateNews();
})

async function updateNews() {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
    const json = await res.json();

    main.innerHTML = json.articles.map((res) => {
        return `
            <div class="ui link cards">
                <div class="card">
                    <div class="image">
                        <img src="${res.urlToImage}" />
                    </div>
                    <div class="content">
                        <div class="header">${res.title}</div>
                        <div class="meta">
                            <a href = "${res.url}" target = "_blank">${res.url}</a>
                        </div>
                        <div class="description">
                            ${res.description}
                        </div>
                    </div>
                    <div class="extra content">
                        <span class="right floated">
                            ${res.publishedAt}
                        </span>
                        <span>
                            <i class="user icon"></i>
                            ${res.source.name}
                        </span>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}