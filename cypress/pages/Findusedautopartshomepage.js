export class FindUsedAutoPartsHomepage {

    TypeInSearch(searchKeyword) {
        cy.get('#search_key').type(searchKeyword);
    }
    ClickOnSearch() {
        cy.get("#ad-listings-search-btn").click();
    }

    ClickOnAddToCart(parts) {
        cy.get('.classified-listing').each(($el, index, $list) => {
            const cycars = cy.wrap(parts);
            const text = $el.find('.ad-detail-path > h3').text()
            cycars.each((partname) => {
                if (text.includes(partname)) {
                    cy.wrap($el.find('.add-cart-item')).click()
                    cy.wait(1000)
                }
            })
        })
        cy.wait(1000);
    }

    removeItem(partsToRemove) {
        const cyparts = cy.wrap(partsToRemove);
        cyparts.each((element) => {
            this.domfrom(element);
        });
    }

    domfrom(title){
        cy.get("table tbody tr div a").each(($element) => {
            const text = $element.text()
            if (title == text) {
                cy.wrap($element.parents('tr').find("a[class='generic-red']")).click()
                cy.wait(1000)
            }
        })
    }
    ClickOnCart() {
        cy.get('#cart-url > .fa').click({ force: true });
    }

    changingQuantity() {
        cy.get("table[class*='mb0'] tbody tr:last-child").find(".fa.fa-plus").click({ multiple: true })
        //cy.get("table[class*='mb0'] tbody tr:last-child").find(".fa.fa-minus").click({ multiple: true })

    }
    verifyShippingPrice() {
        let totalship = 0
        cy.get("table[class*='mb0'] tbody tr:last-child").find("span[class*='dealer_id']").each(($product, index, $list) => {
            const shippingPrice = $product.text();
            //let stringWithoutCommas = shippingPrice.replace(/,/g, '');
            totalship += Number(shippingPrice)
        }).then(() => {
            cy.get('#shipping_charges').then(function ($elem) {
                const itemsTotal = $elem.text();
                //var itemsTotalWithoutCommas = itemsTotal.replace(/,/g, '');
                expect(Number(itemsTotal)).to.equal(totalship)
                cy.wrap(totalship).as('totalShipment')
            })
        })
    }
    verifyTotalPrice() {
        let total = 0
        cy.get("td>input").each(($product, index, $list) => {
            const productPrice = $product.attr('value');
            cy.log(productPrice)
            let stringWithoutCommas = productPrice.replace(/,/g, '');
            total = total + Number(stringWithoutCommas)

        }).then(() => {
            cy.get('#item-net-total').then(function ($elem) {
                const itemsTotal = $elem.text();
                var itemsTotalWithoutCommas = itemsTotal.replace(/,/g, '');
                expect(Number(itemsTotalWithoutCommas)).to.equal(total)
                cy.wrap(total).as('totalAmount')
            })
        })
    }
    verifyGrandTotal() {
        cy.get('#net-total-with-shipping').then(function ($tag) {
            var grandTotal = $tag.text();
            var grandTotalWithoutComa = grandTotal.replace(/,/g, '')
            cy.log(grandTotalWithoutComa)
            cy.get('@totalShipment').then(totalShipmentCost => {
                cy.get('@totalAmount').then(totalAmount => {
                    var GrandTotalByF = totalShipmentCost + totalAmount;
                    expect(Number(grandTotalWithoutComa)).to.equal(GrandTotalByF)
                })
            })
        })
    }
    promoPercenatge(percentage) {
        cy.get("#discount_code").type("TEST20")
        cy.get("#apply-discount").click()
        cy.wait(2000)
        cy.get('#net-total-with-shipping').then(function ($tag) {
            var grandTotal = $tag.text();
            cy.log(grandTotal)
            cy.get('@totalShipment').then(totalShipmentCost => {
                cy.get('@totalAmount').then(totalAmount => {
                    var GrandTotalByF = totalShipmentCost + totalAmount; 4
                    var percentToGet = 20;
                    var percent = Math.round((percentage / 100) * GrandTotalByF);
                    cy.log(percent)
                    cy.log(percentage + "% of " + GrandTotalByF + " is " + percent);
                    var afterPercentage = GrandTotalByF - percent;
                    expect(Number(grandTotal)).to.equal(afterPercentage)
                })
            })
        })
    }

    ClickOnShippingButton() {
        cy.get("td[class='checkout-footer'] button[class='btn btn-primary pull-right']").click()
    }
    FillingShippingInfo() {
        cy.get('#order_name').clear()
        cy.get('#order_name').type('Test Order')
        cy.get('#order_phone').type('03915134567')
        cy.get('#order_comments').type('Testing order')
        cy.get('#recent-address > :nth-child(1)').click()
        cy.get('.well > .checkout-footer > .btn').click()
    }

}