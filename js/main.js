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



        // create a unique id for a css object
        function uniqId(item, id) {
            return item + "-" + id;
        }

        // place a card newr the given location
        function placeCard(locationId, elem) {
            const root = document.getElementById(locationId);
            const tile = `<div class="card text-center" style="width: 100px">
                <img class="card-img-top imgs" src="${elem.portada}" alt=" cover ${elem.titulo} not availale">
                <div class="card-img-overlay text-right text-light">
                <h4 class="card-title">${elem.titulo}</div>
                <p class="card-text">${elem.titulo}</p>
                </div>
                <div class="card-body">
                   ${elem.titulo}
                </div>
                </div>`
            root.innerHTML += tile;
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

        function ProcessAndRender(data) {
            const books = data["books"]

            books.forEach(function(item) {
                Show("card", item);
            })
        }

        // Needs to be refctored since it hides intention bhind a boolean,
        function fetchData(url) {
            fetch(url, {
                    headers: {
                        'Content-Type': 'application/json'
                            /* "X-API-Key": "wqmgqOHo1JMAkYIfh3sJr4FlUN3PCokyojEziJBK" */
                    }
                    /* mode: "cors" */
                })
                .then(function(response) {
                    document.body.style.cursor = 'wait'
                    return response.json()
                })
                .then(function(myJson) {
                    //console.log(myJson);
                    document.body.style.cursor = 'auto'

                    ProcessAndRender(myJson)
                })
                .catch(err => console.log(err))
        }

    }) // DOMContentLoaded handler