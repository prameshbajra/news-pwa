const apiKey = "c12a370e3ccc4509bf286ced0315e87b";
const defaultSource = "the-washington-post";
let selectSource = "";
let main = '';

window.addEventListener('load', async (e) => {
    main = document.getElementById('main');
    selectSource = document.getElementById('selectSource');
    updateNews();
    await updateNewsSources();
    selectSource.value = defaultSource;

    // Updating based on the selected news ...
    selectSource.addEventListener("change", (e) => {
        updateNews(e.target.value);
    })
})

async function updateNews(source = defaultSource) {
    const res = await fetch(`https://newsapi.org/v1/articles?source=${source}&apiKey=${apiKey}`);
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
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

async function updateNewsSources() {
    const res = await fetch(`https://newsapi.org/v2/sources?apiKey=${apiKey}`);
    const jsonSource = await res.json();
    selectSource.innerHTML = jsonSource.sources.map((result) => {
        return `<option value="${result.id}">${result.name} -> Language : ${result.language}></option>`;
    })
}