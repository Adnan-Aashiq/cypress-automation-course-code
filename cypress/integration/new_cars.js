import {NewCars} from '../pages/NewCars';
const newCar = new NewCars();


describe('New Car', function(){

    it.only('Verifies Make, model and version pages', function(){
        
        newCar.openNewcarLanding()

        newCar.scrollToMakeSection()

        newCar.selectMakeFromMakeSection()

        newCar.verifyMakePage()

        newCar.openModelPageFromMakePage()

        newCar.verifyModelPageH1()

        newCar.VerifyPictures()

        newCar.verifyModelColorSection()

        newCar.verifyModelPriceInPakSection()

        newCar.openVersionPageFromModel()

        newCar.VerifyPictures()

        newCar.verifySpecsAndFeatures()
    })

})