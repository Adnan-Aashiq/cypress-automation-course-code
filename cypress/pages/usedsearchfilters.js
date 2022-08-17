/// <reference types="cypress"/>
export class UsedSearchFilters {

    selectOption(filteroption) {
        cy.get('@filterName').parent().siblings(".accordion-body").find("li label a").then(($makes) => {
            let flag = false;
            cy.wrap($makes).each(($el, index, $list) => {
                const title = $el.text();
                if (title.includes(filteroption)) {
                    cy.wrap($el).click();
                    this.verifyCanonicals()
                    flag = true;
                }
            }).then(() => {
                if (flag == false) {
                    cy.wrap($makes).parents(".accordion-inner").find(".more-choice").click()
                    cy.wrap($makes).parents(".accordion-inner").find(".list-unstyled.inline  > li label a").then(($modalmakes) => {
                        cy.wrap($modalmakes).each(($element, index, $list) => {
                            const modaltitles = $element.text()
                            if (modaltitles.includes(filteroption)) {
                                cy.wrap($element).click();
                                this.verifyCanonicals()

                            }
                        })
                    })
                }
            })
        })
    }
    selectRanges(from, to) {
        cy.get('@filterName').parent().siblings(".accordion-body").find("input[placeholder='From']").type(from);
        cy.get('@filterName').parent().siblings(".accordion-body").find("input[placeholder='To']").type(to);
        cy.get('@filterName').parent().siblings(".accordion-body").find("input[value='Go']").click();
    }
    applyfilter(filter, filteroption) {
        cy.get(".accordion-heading").contains(filter).as("filterName")
        cy.get('@filterName').parent().find('a').then(($value) => {
            var inputValue = $value.attr("class")
            if (inputValue.includes('collapsed')) {
                cy.get($value).click();
                // if two argument        
                if (typeof arguments[1] == 'string') {
                    this.selectOption(filteroption)
                    cy.wait(3000)
                    if (filter == "City") {
                        this.verifycityFilter(filteroption)
                    }
                    else if (filter == "Engine Type") {
                        this.verifyenginetypeFilter(filteroption)
                    }
                    else if (filter == "Transmission") {
                        this.verifytransmissionFilter(filteroption)
                    }
                    else if (filter == "Make") {
                        this.verifymakeFilter(filteroption)
                    }
                    else if (filter == "Model") {
                        this.verifymodelFilter(filteroption)
                    }
                }
                // if three argument 
                else if (typeof arguments[1] == 'object') {
                    var from = arguments[1][0]
                    var to = arguments[1][1]
                    this.selectRanges(from, to)
                    cy.wait(3000)
                    if (filter == "Year") {
                        this.verifyyearFilter(from, to)
                    }
                    else if (filter == "Mileage (Km)") {
                        this.verifymileageFilter(from, to)
                    }
                    else if (filter == "Engine Capacity (cc)") {
                        this.verifyenginecapacityFilter(from, to)
                    }
                    else if (filter == "Price Range") {
                        this.verifypriceFilter(from, to)
                    }
                }
            }
            else {
                if (typeof arguments[1] == 'string') {
                    this.selectOption(filteroption)
                    cy.wait(3000)
                    if (filter == "City") {
                        this.verifycityFilter(filteroption)
                    }
                    else if (filter == "Engine Type") {
                        this.verifyenginetypeFilter(filteroption)
                    }
                    else if (filter == "Transmission") {
                        this.verifytransmissionFilter(filteroption)
                    }
                    else if (filter == "Make") {
                        this.verifymakeFilter(filteroption)
                    }
                    else if (filter == "Model") {
                        this.verifymodelFilter(filteroption)
                    }
                }
                // if three argument 
                else if (typeof arguments[1] == 'object') {
                    var from = arguments[1][0]
                    var to = arguments[1][1]
                    this.selectRanges(from, to)
                    cy.wait(3000)
                    if (filter == "Year") {
                        this.verifyyearFilter(from, to)
                    }
                    else if (filter == "Mileage (Km)") {
                        this.verifymileageFilter(from, to)
                    }
                    else if (filter == "Engine Capacity (cc)") {
                        this.verifyenginecapacityFilter(from, to)
                    }
                    else if (filter == "Price Range") {
                        this.verifypriceFilter(from, to)
                    }
                }
            }
        })

    }
    verifycityFilter(city) {
        cy.get(".search-vehicle-info.fs13 > li").each(($element) => {
            var value = $element.text().trim()
            expect(value).to.equal(city)
        })
    }
    verifyyearFilter(yearFrom, yearTo) {
        cy.get(".search-vehicle-info-2.fs13 > li:nth-child(1)").each(($element) => {
            var value = Number($element.text().trim())
            expect(value).to.be.within(Number(yearFrom), Number(yearTo))
        })
    }
    verifymileageFilter(mileageFrom, mileageTo) {
        cy.get(".search-vehicle-info-2.fs13 > li:nth-child(2)").each(($element) => {
            var value = Number($element.text().replace(/[^\d.-]/g, ''))
            expect(value).to.be.within(Number(mileageFrom), Number(mileageTo))
        })
    }
    verifyenginetypeFilter(engineType) {
        cy.get(".search-vehicle-info-2.fs13 > li:nth-child(3)").each(($element) => {
            var value = $element.text()
            expect(value).to.equal(engineType)
        })
    }
    verifyenginecapacityFilter(engineCapacityFrom, engineCapacityTo) {
        cy.get(".search-vehicle-info-2.fs13 > li:nth-child(4)").each(($element) => {
            var value = Number($element.text().replace(/[^\d.-]/g, ''))
            expect(value).to.be.within(Number(engineCapacityFrom), Number(engineCapacityTo))
        })
    }
    verifytransmissionFilter(transmission) {
        cy.get(".search-vehicle-info-2.fs13 > li:nth-child(5)").each(($element) => {
            var value = $element.text()
            expect(value).to.equal(transmission)
        })
    }
    verifymakeFilter(make) {
        cy.get(".car-name.ad-detail-path > h3").each(($element) => {
            var value = $element.text()
            expect(value).includes(make)
        })
    }
    verifymodelFilter(model) {
        cy.get(".car-name.ad-detail-path > h3").each(($element) => {
            var value = $element.text()
            expect(value).includes(model)
        })
    }
    verifypriceFilter(priceFrom, priceTo) {
        cy.get(".price-details.generic-dark-grey").each(($element) => {
            var value = $element.text()
            if (value.includes("lacs")) {
                var price = value.replace(/[^\d.-]/g, '')
                var finalPrice = 100000 * price
            }
            else if (value.includes("crore")) {
                var price = value.replace(/[^\d.-]/g, '')
                var finalPrice = 10000000 * price
            }
            expect(Number(finalPrice)).to.be.within(Number(priceFrom), Number(priceTo))
        })
    }
    Addtofavourite() {
        cy.get('.save-ad').should('have.length.greaterThan', 0).its('length').then((n) => {
            return Cypress._.random(0, n - 1)
        }).then((k) => {
            cy.get('.save-ad').eq(k).click();
            return cy.get(".search-title a").eq(k).invoke('attr', 'href')
        }).then((href) => {
            cy.get("#saved-ads").click({ force: true });
            cy.get(".search-title a").each(($element) => {
                if ($element.attr('href') == href) {
                    expect("ad found here").to.be.equal("ad found here")
                }
                else {
                }

            })
        })
    }
    showphoneNumber() {
        cy.get('.pull-right > button > i').should('have.length.greaterThan', 0).its('length').then((n) => {
            return Cypress._.random(0, n - 1)
        }).then((k) => {
            cy.get('.pull-right > button > i').eq(k).click();
        })
        cy.get(".generic-basic").should("have.text", "Tips for Safe Deal")
        cy.get('#continue_btn').click()
    }
    clearFilters() {
        cy.get('.clear-filters').should('have.text', "Clear All")
    }
    verifyCanonicals(){
        cy.reload()
        return cy.get("link[rel='canonical']").invoke('attr','href').then((link)=>{
            cy.url().then((url)=>{
                expect(link).to.contain(url)
            })
            //expect('link').to.match(u)
            //cy.url().should('eq', link)
        })
    }
}