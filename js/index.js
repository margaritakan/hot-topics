const container = document.getElementById('output');
const links = document.querySelectorAll(".navLinks");

function loadContent(url) {
    fetch(url)
        .then(function (response) {
            if (response.ok) {
                return response.text();
            }
            else {
                throw new Error(response.statusText);
            }
        })
        .then(function (html) {
            container.innerHTML = html;
            
        })
        .catch(function (err) {
            console.log(err.message);
        });
}

function selectContent(event) {
    event.preventDefault();
    let url = event.target.getAttribute('href');
    loadContent(url);
}

for (let i = 0; i < links.length; i++) {
    links[i].onclick = selectContent;
}

if (links.length > 0) {
    let url = links[0].getAttribute('href');
    loadContent(url);
}
