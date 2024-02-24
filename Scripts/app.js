"use strict";
function fetchNews() {
    let apiKey = '3bb9d2ddcb064382b70b5495ba20a488';
    let url = `https://newsapi.org/v2/top-headlines/sources?country=ca&apiKey=${apiKey}`;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            let response = JSON.parse(xhr.responseText);
            if (response.status === "ok") {
                displayNews(response);
            } else {
                console.error("The request failed");
                $("#news-container").html(`<p>Failed to retrieve news data: ${response.message}</p>`);
            }
        } else {
            console.error("The request failed");
            $("#news-container").html(`<p>Failed to retrieve data</p>`);
        }
    };
    xhr.send();
}

function displayNews(data) {
    let newsContainer = $("#news-container");
    let htmlContent = `<h2>News Sources</h2>`;
    data.sources.forEach(source => {
        htmlContent += `<p><a href="${source.url}" target="_blank">${source.name}</a>: ${source.description}</p>`;
    });
    newsContainer.html(htmlContent);
}
