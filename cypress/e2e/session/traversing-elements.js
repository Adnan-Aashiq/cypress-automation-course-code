/// <reference types="Cypress" />
describe("Traversing DOM elements in Cypress", () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  })

  it("children() to get the children of DOM elements", () => {
    cy.get('.breadcrumb.traversal-breadcrumb').children('.active').should('contain','Contact Us')
  });

  it("closest() to validate the closest ancestor DOM element", () => {
    cy.get('.badge.traversal-badge').closest('ul').should('have.class','list-group')
  });

  it("eq() to retrieve a specific element based on index", () => {
    cy.get('.traversal-drinks-list > *').eq(2).should('have.id','milk')
    cy.get('.traversal-drinks-list > *').eq(4).should('contain','Sugar')
  });

  it("filter() to retrieve DOM elements that match a specific selector", () => {
    cy.get('.btn-group-toggle > *').filter('.active').should('contain','Button-1')
  });

  it("find() to retrieve DOM elements of a given selector", () => {
    cy.get('.traversal-pagination >  *').find('a').should('have.length',7)
    cy.get('.traversal-pagination >  *').find('a').should('have.length.above',5)
    cy.get('.traversal-pagination >  *').find('a').should('have.length.below',10)
  });

  it("first() to retrieve the first DOM element within elements ", () => {
    cy.get('.traversal-table > tbody > tr > td').first().should('contain','Andy')
  });

  it("last() to retrieve the last DOM element within elements", () => {
    cy.get('.traversal-table > tbody > tr > td').last().should('contain','Scott')
  });

  it("nextAll() to get all of the next sibling DOM elements within elements", () => {
    cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length',3)
    cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length.above',2)
    cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length.below',5)
  });

  it("nextUntil() to get all of the next sibling DOM elements within elements until another element", () => {
    cy.get('#coffee').nextUntil('#milk')
  });

  it("not() to remove DOM element(s) from the set of elements", () => {
    cy.get('.traversal-button-states > *').not('.disabled').should('not.have.class','disabled')
  });

  it("parent() To get parent DOM element of elements", () => {
    cy.get('.traversal-mark').parent('p').should('contain','Lorem ipsum dolor sit amet, consectetur adipiscing elit, ')
  });

  it("parents() to get parents DOM element of elements", () => {

    cy.get('.traversal-mark').parents('.thumbnail').should('contain','Random Text')
  });

  it("prev() to get the previous sibling DOM element within elements", () => {
    cy.get('#milk').prev().should('contain','Tea')
  });

  it("prevAll() to get all previous sibling DOM elements within elements", () => {
    cy.get('.sales').prevAll().should('have.length',2)
    cy.get('.sales').prevAll().should('have.length.above',1)
    cy.get('.sales').prevAll().should('have.length.below',4)
  });

  it("prevUntil() to get all previous sibling DOM elements within elements until other element", () => {
    cy.get('#veggie').prevUntil('#fruits').should('have.length',5)
  });

  it.only("siblings() To get all sibling DOM elements of elements", () => {
    cy.get('.btn.btn-primary.active').siblings().should('have.length',3)
  });
});
