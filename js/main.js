'use strict'

document.addEventListener('DOMContentLoaded', function() {
        console.log('DOM Tree loaded')

        var searchableContents = new Map;

        function main() {
            fetchData("https://api.myjson.com/bins/udbm5")

            console.log("Setting up search");
            const btnBookSearch = document.getElementById("btn-book-search");
            const searchString = document.getElementById("search-string");

            searchString.addEventListener("keyup", function(event) {
                // Number 13 is the "Enter" key on the keyboard
                console.log("do search:" + searchString.value);
                event.preventDefault();
                const result = search(searchString.value);
                result.forEach(function(book) {
                    Show('card', book)
                })
            })
        }

        main();

        //
        // find a key which contains the value and return the objet data
        // lets hope that map handles laege keys better then i could
        //
        function search(value) {
            let result = [];

            console.log("search for " + value);

            searchableContents.forEach(function(item, book) {
                const key = Array.from(SearchKey(item));

                if (key.indexOf(value) > 0)
                    result.push(book)
            });

            console.log(result);
            return result;
        }


        // flip the page with the given titel
        function flipCard(o) {
            console.log("Flipping " + o);
            const _elem_ = document.getElementById(o)
            _elem_.className = "flip-card";
        }

        // place a card newr the given location
        function placeCard(locationId, elem) {
            const root = document.getElementById(locationId);
            const title = elem.titulo;
            const tile =
                `<div class="card text-center" style="width: 100px;"  id="${elem.titulo}" >
                <img class="card-img-top book" src="${elem.portada}" id="${title}" alt=" cover ${title} not availale">
                <div class="card-img-overlay text-right text-light">
                <h4 class="card-title">${elem.titulo}</div>
                <p class="card-text">${elem.titulo}</p>
                </div>
                <div class="card-body" style="width: 100px">
                </div>
                </div>`
            root.innerHTML += tile;
            const img = document.getElementById(title);
            img.addEventListener("click", function() {
                flipCard(this.id)
            })
        }

        function SearchKey(elem) {
            return elem.descripcion & elem.titulo;
        }

        function Show(location, elem) {
            const frontCover = elem.portada;
            const moreInfo = elem.detallee;
            const title = elem.titolo;

            console.log(elem)
            console.log("Show:" + elem.titulo);
            searchableContents.set(SearchKey(elem), elem);

            placeCard(location, elem);
        };

        /**
         * This function id beeing cslled when all the data has been received.
         * @param {*} data 
         */
        function ProcessAndRender(data) {
            const books = data["books"]

            books.forEach(function(item) {
                Show("shelf", item);
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