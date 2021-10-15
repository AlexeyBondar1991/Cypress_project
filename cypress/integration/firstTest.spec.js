/// <reference types="Cypress"/>

const { get } = require("cypress/types/lodash")

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

it('submit', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('form[method="post"]')
    .submit()

})

it('click', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-value="manual"]')
    .click()

})


it('rightclick', ()=> {
    cy.visit('https://example.cypress.io/commands/actions')
    .contains('Right click to edit')
    .rightclick()

})

it('doubleclick', ()=> {
    cy.visit('https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/dblclick_event/_sample_.Examples.html')
    .contains('My Card')
    .dblclick()

})

it('check', ()=> {
    cy.visit('https://www.facebook.com/reg/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjM0MjgyNzc0LCJjYWxsc2l0ZV9pZCI6MzYzOTY5MDQ0ODc4OTI4fQ%3D%3D')
    .get('input[value=2]')
    .check()

})

it('uncheck', ()=> {
    cy.visit('https://en.privatbank.ua/')
    .get('#switch-input')
    .check({force:true})
    .wait(2000)
    .uncheck({force:true})

})

it.only('select', ()=> {
    cy.visit('https://www.facebook.com/r.php?locale=en_US')
    .get('#month')
    .select('Feb')
    .get('#day')
    .select('12')
    .get('#year')
    .select('1991')
})

it('select', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-node="lang"]')
    .scrollIntoView()
})