/// <reference types="Cypress"/>

it('Type', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-node="phone-number"]')
    .type(1123123123123)
})

it('Focus', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-node="amount"]')
    .focus()
})

it('blur', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-node="amount"]')
    .focus()
    .blur()
})

it('clear', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-node="amount"]')
    .type(999)
    .wait(2000)
    .clear()
})

it.only('blur', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-node="amount"]')
    .
})
