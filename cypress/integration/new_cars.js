import {NewCars} from '../pages/NewCars';
const newCar = new NewCars();


describe('New Car', function(){

    var make = "Toyota"
    var model = "Corolla"
    var version = "XLi Automatic"
    var price = "PKR 2,119,000"
    it.only('Verifies Make, model and version pages', function(){
        
        newCar.openNewcarLanding()
        newCar.scrollToMakeSection()

        newCar.selectMakeFromMakeSection(make)

        newCar.verifyMakePage(make)

        newCar.openModelPageFromMakePage(make, model)

        newCar.verifyModelPageH1(make, model)

        newCar.VerifyPictures()

        newCar.verifyModelColorSection(make, model)

        newCar.verifyModelPriceInPakSection(make, model, version, price)

        newCar.openVersionPageFromModel(make, model, version)

        newCar.VerifyPictures()

        newCar.verifySpecsAndFeatures()
    })

})