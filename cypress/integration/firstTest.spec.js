/// <reference types="Cypress"/>

// //  describe('Mobile phone replenshment', () => {
// //      it('Check min sum', () => {

// //      })
// //  })

// it('By id', () => {
//     cy.visit('https://facebook.com/')
//     cy.get('#email')
// });

// it('By class', () => {
//     cy.visit('https://docs.cypress.io/')
//     cy.get('.DocSearch-Button-Placeholder')
// });

// it('By tag', () => {
//     cy.visit('https://docs.cypress.io/')
//     cy.get('nav')
// });

// it('By different types', () => {
//     cy.visit('https://docs.cypress.io/guides/references/configuration#Folders-Files')
//     cy.get('button[type="button"]')
// });

// it('By Contains name', () => {
//     cy.visit('https://next.privat24.ua/')
//     cy.get('*[class^="card"]')
// });

it('Using get with find and eq', () => {
    cy.visit('https://next.privat24.ua/deposit')
    cy.get('tbody').find('td').find('div').find('button').eq(0)
});

it('Using get with find and eq', () => {
    cy.visit('https://docs.cypress.io/api/commands/eq#Syntax')
    cy.get('.main-content').find('div').find('nav').find('ul').find('li').find('a')
});

it.only('Using get with find and eq', () => {
    cy.viewport(1800, 700)
    cy.visit('https://docs.cypress.io/api/commands/eq#Syntax')
    cy.get('.main-content').find('div').find('nav').find('ul').find('li').find('a').eq(0)
}); 