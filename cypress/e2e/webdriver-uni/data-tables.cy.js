/// <reference types="Cypress" />
describe("Handling data via webdriveruni", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
    it("Calculate AND Assert total age of all users", () => {
        //My Code
        let numb=0
        cy.get('#thumbnail-1 tr td:last-child').each(($el,index,$list)=>{
            let i = $el.text()
            numb = numb + Number(i)
        }).then(()=>{
            expect(numb).to.be.eq(322)
        })
    });
    it("Calculate and assert the total age of all users", () => {
        //instructor code
        var userDetails = [];
        let numb = 0;
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            userDetails[index] = $el.text();
        }).then(() => {
            var i;
            for(i = 0; i < userDetails.length; i++) {
                if(Number(userDetails[i])) {
                    numb += Number(userDetails[i])
                }
                //cy.log(userDetails[i])
            }
            cy.log("Found total age: " + numb)
            expect(numb).to.eq(322)
        })
    });
    it("Calculate and assert the age of a given user based on last name",()=>{
        cy.get('#thumbnail-1 td:nth-child(2)').each(($el,index,$list)=>{
            const name = $el.text()
            if(name.includes("Woods")){
                cy.get('#thumbnail-1 td:nth-child(2)').eq(index).next().then((age)=>{
                    const Userage = Number(age.text())
                    expect(Userage).to.be.eq(80)
                })
            }
        })
    })
  });
  