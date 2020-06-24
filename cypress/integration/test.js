describe('Search for a specific book', function() {
    context('basic', function() {
        it('it opens', function() {
            cy.visit('https://relaxed-einstein-f83244.netlify.com');
            cy.title().should('eq', "Bookstore Main");
        })

        it('can show one specific book', function() {
            cy.get("input").type("Guru");
            cy.get('[id="btn-book-search"]').click();
        });

        it('shows the contents information', function() {
            cy.wait(1000);
            let book = cy.get('.flip-card').first();
            book.trigger('mouseover');
            let info = cy.get('.flip-card-back')
            info.invoke('show');
            info.contains("h2", "The Javascript Guru")
        })
    })
})