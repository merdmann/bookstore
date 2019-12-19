'use strict'

document.addEventListener('DOMContentLoaded', function() {
        console.log('DOM Tree loaded')

        var filter = "";

        /**
         * Main Handler of App
         */
        function main() {
            fetchData("https://api.myjson.com/bins/udbm5")

            const _btnBookSearch_ = document.getElementById("btn-book-search");
            const _searchString_ = document.getElementById("search-string");

            _searchString_.value = filter;

            _btnBookSearch_.addEventListener("click", function(event) {
                const root = document.getElementById("shelf");
                root.innerHTML = "";

                console.log("Search click");

                filter = _searchString_.value;
                // reread all data and filter it. 
                fetchData("https://api.myjson.com/bins/udbm5");
            })
        }
        main();

        // place a card at the given location
        function placeCard(locationId, elem) {
            const root = document.getElementById(locationId);
            const title = elem.titulo;
            const tile =
                `<div class="card flip-card-inner" style="width: 100px; height: 200px; " id="${elem.titulo}" >
                 <img class="card-img-top book flip-card-front flip-card" src="${elem.portada}" id="${title}" alt=" cover ${title} not availale">
                 </div>
                </div>`
            root.innerHTML += tile;
        }

        /**
         * This function id beeing called when all the data has been received.
         * @param {*} data
         */
        function ProcessAndRender(data) {
            const books = data["books"]

            books.forEach(function(item) {
                console.log("filter=" + filter)
                if (item.titulo.includes(filter) == true) {
                    placeCard("shelf", item);
                }
            })
        }

        /**
         * this function is called to retrive the API data from the service provider.
         * @param {*} url
         */
        function fetchData(url) {
            const opts = { 'Content-Type': 'application/json' };

            fetch(url, opts).then(function(response) {
                    return response.json()
                })
                .then(function(myJson) {
                    //console.log(myJson);

                    ProcessAndRender(myJson)
                })
                .catch(err => console.log(err))
        }

    }) // DOMContentLoaded handler