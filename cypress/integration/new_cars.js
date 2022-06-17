import {NewCars} from '../pages/NewCars';

const newCar = new NewCars();

const newCarData = require("../fixtures/newCar.json")

describe('New Car', function(){
    newCarData.forEach((data)=>{
        it('Verifies Make, model and version pages', function(){
            newCar.openNewcarLanding()
            newCar.scrollToMakeSection()
            newCar.selectMakeFromMakeSection(data.make)
            newCar.verifyMakePage(data.make)
            newCar.openModelPageFromMakePage(data.make, data.model)
            newCar.verifyModelPageH1(data.make, data.model)
            newCar.VerifyPictures()
            newCar.verifyModelColorSection(data.make, data.model)
            newCar.verifyModelPriceInPakSection(data.make, data.model, data.version, data.price)
            newCar.openVersionPageFromModel(data.make, data.model, data.version)
            newCar.VerifyPictures()
            newCar.verifySpecsAndFeatures()
        })
    })
})