/// <reference types="cypress" />
import { Homepage } from "../pages/Homepage"
import { CarInspectionHome, CarInspectionLeadForm } from "../pages/CarInspection";
import { LoginPage } from "../pages/Login";
import { AuctionSheetVerification } from "../pages/Auctionsheetverification";
import { SIFMPage, SIFMLeadForm } from "../pages/SIFM"
import { NewCarLoanCalculator, UsedCarLoanCalculator, Banks, FinanceForm, InsuranceForm } from "../pages/Carfinanceand_insurance";


const Homepageobj = new Homepage();
const Carinspectionhomeobj = new CarInspectionHome();
const Carinspectionleadformobj = new CarInspectionLeadForm();
const Loginpageobj = new LoginPage();
const Auctionsheetverificationobj = new AuctionSheetVerification();
const SIFMPageobj = new SIFMPage();
const SIFMLeadFormobj = new SIFMLeadForm();
const Newcarloancalculatorobj = new NewCarLoanCalculator();
const Usedcarloancalculatorobj = new UsedCarLoanCalculator();
const Banksobj = new Banks();
const Financeformobj = new FinanceForm();
const Insuranceformobj = new InsuranceForm();


const sifmTestData = require("../fixtures/leadForms.json")

describe('Automating lead forms', function () {
    // sifmTestData.InspectionRequest.forEach((data) => {
    //     it('Placing PakWheels Car Inspection lead', function () {
    //         Homepageobj.openHomePage();
    //         Homepageobj.closeBanner();
    //         Homepageobj.ClickOnSignIn();
    //         Loginpageobj.loginWithEmail('sprint168@mailinator.com', '1234567')
    //         Homepageobj.clickOnCarInspection();
    //         Carinspectionhomeobj.clickOnScheduleInspection();
    //         Carinspectionleadformobj.SelectModelYear(data.year);
    //         Carinspectionleadformobj.SelectCarInfo(data.make, data.model);
    //         Carinspectionleadformobj.InputName(data.name);
    //         Carinspectionleadformobj.InputPhoneNumber(data.phoneNumber);
    //         //for already logged in user this lower function is not required
    //         //Carinspectionleadformobj.clickIfExist(data.email)
    //         //Carinspectionleadformobj.InputEmail(data.email);
    //         Carinspectionleadformobj.SelectCity(data.city);
    //         Carinspectionleadformobj.SelectCityArea(data.cityArea);
    //         Carinspectionleadformobj.CheckBox();
    //         Carinspectionleadformobj.ClickOnSubmit();
    //         Carinspectionleadformobj.VerifyLead();

    //     })
    // })
    sifmTestData.AuctionSheet_loggedinUser.forEach((data) => {
        it('Auction Sheet verification when user is logged in', function () {
            Homepageobj.openHomePage();
            Homepageobj.closeBanner();
            Homepageobj.ClickOnSignIn();
            Loginpageobj.loginWithEmail('sprint173@mailinator.com', '1234567')
            Homepageobj.clickAuctionSheetVerfication();
            Auctionsheetverificationobj.inputChassisNumber(data.chassisNumber);
            Auctionsheetverificationobj.verifyAuctionSheet();
            Auctionsheetverificationobj.clickOnBuyNow();
        })
    })
    sifmTestData.AuctionSheet_loggedOutUser.forEach((data) => {
        it('Auction Sheet verification when user is not logged in', function () {
            Homepageobj.openHomePage();
            Homepageobj.closeBanner();
            Homepageobj.clickAuctionSheetVerfication();
            Auctionsheetverificationobj.inputChassisNumber(data.chassisNumber);
            Auctionsheetverificationobj.verifyAuctionSheet();
            Auctionsheetverificationobj.filling_Form(data.name, data.email, data.phoneNumber);
            Auctionsheetverificationobj.clickOnBuyNow();

        })
    })
    sifmTestData.SellItForMe_loggedinUser.forEach((data) => {
        it('Placing PakWheels Sell it for me lead when user is logged in', function () {
            Homepageobj.openHomePage();
            Homepageobj.closeBanner();
            Homepageobj.ClickOnSignIn();
            Loginpageobj.loginWithEmail('sprint173@mailinator.com', '1234567')
            Homepageobj.clickSIFM();
            SIFMPageobj.clickOnGetStarted();
            SIFMLeadFormobj.SelectModelYear(data.year);
            SIFMLeadFormobj.SelectCarInfo(data.make, data.model);
            SIFMLeadFormobj.SelectCity(data.city);
            SIFMLeadFormobj.InputName(data.name);
            SIFMLeadFormobj.InputPhoneNumber(data.phoneNumber);
            SIFMLeadFormobj.ClickOnSubmit();
        })
    })
    sifmTestData.SellItForMe_loggedOutUser.forEach((data) => {

        it('Placing PakWheels Sell it for me lead when user is not logged in', function () {
            Homepageobj.openHomePage();
            Homepageobj.closeBanner();
            Homepageobj.clickSIFM();
            SIFMPageobj.clickOnGetStarted();
            SIFMLeadFormobj.SelectModelYear(data.year);
            SIFMLeadFormobj.SelectCarInfo(data.make, data.model);
            SIFMLeadFormobj.SelectCity(data.city);
            SIFMLeadFormobj.InputName(data.name);
            SIFMLeadFormobj.InputPhoneNumber(data.phoneNumber);
            SIFMLeadFormobj.ClickOnSubmit();
        })
    })
    sifmTestData.Newcarfinance.forEach((data) => {
        it('Placing New Car finance lead', function () {
            Homepageobj.openHomePage();
            Homepageobj.closeBanner();
            Homepageobj.clickOnCarFinance();
            Newcarloancalculatorobj.SelectCity(data.city1);
            Newcarloancalculatorobj.SelectMakeModelVersion(data.year, data.make, data.model, data.version);
            Newcarloancalculatorobj.SelectTenure(data.tenure);
            Newcarloancalculatorobj.SelectDownPayment(data.downPayment);
            Newcarloancalculatorobj.ClickOnShowPlans();
            Banksobj.ClickOnFinanceBank(data.bankName);
            Financeformobj.InputName(data.name);
            Financeformobj.InputEmail(data.email)
            Financeformobj.InputPhoneNUmber(data.phoneNumber)
            Financeformobj.InputAge(data.age);
            Financeformobj.InputCNIC(data.cnic);
            Financeformobj.SelectCity(data.city2);
            Financeformobj.SelectCityArea(data.cityArea);
            Financeformobj.InputAddress(data.address);
            Financeformobj.SelectBestTimeToCall(data.bestTimeToCall);
            Financeformobj.FilFinancialInformation(data.sourceOfIncome, data.monthlyIncome, data.bank, data.taxFilerStatus, data.creditCardLoan, data.intendToUseVehicle, data.acquire);
            Financeformobj.clickOnApplyNow();
        })
    })
    sifmTestData.Usedcarfinance.forEach((data) => {
        it('Placing Used Car finance lead', function () {
            Homepageobj.openHomePage();
            Homepageobj.closeBanner();
            Homepageobj.clickOnCarFinance();
            Usedcarloancalculatorobj.ClickOnUsedCars();
            Newcarloancalculatorobj.SelectCity(data.city1);
            Usedcarloancalculatorobj.InputCarPrice(data.priceLocator, data.price);
            Newcarloancalculatorobj.SelectMakeModelVersion(data.year, data.make, data.model, data.version);
            Newcarloancalculatorobj.SelectTenure(data.tenure);
            Newcarloancalculatorobj.SelectDownPayment(data.downPayment);
            Newcarloancalculatorobj.ClickOnShowPlans();
            Banksobj.ClickOnFinanceBank(data.bankName);
            Financeformobj.InputName(data.name);
            Financeformobj.InputEmail(data.email)
            Financeformobj.InputPhoneNUmber(data.phoneNumber)
            Financeformobj.InputAge(data.age);
            Financeformobj.InputCNIC(data.cnic);
            Financeformobj.SelectCity(data.city2);
            Financeformobj.SelectCityArea(data.cityArea);
            Financeformobj.InputAddress(data.address);
            Financeformobj.SelectBestTimeToCall(data.bestTimeToCall);
            Financeformobj.FilFinancialInformation(data.sourceOfIncome, data.monthlyIncome, data.bank, data.taxFilerStatus, data.creditCardLoan, data.intendToUseVehicle, data.acquire);
            Financeformobj.clickOnApplyNow();
        })
    })
    sifmTestData.Insurance.forEach((data) => {
        it('Placing Car insurance lead', function () {
            Homepageobj.openHomePage();
            Homepageobj.closeBanner();
            Homepageobj.clickOnCarInsurance();
            Newcarloancalculatorobj.SelectMakeModelVersion(data.year, data.make, data.model, data.version);
            Usedcarloancalculatorobj.InputCarPrice(data.priceLocator, data.price);
            Newcarloancalculatorobj.ClickOnShowPlans();
            Banksobj.ClickOnInsuranceBank(data.insuranceBankName);
            Insuranceformobj.addTracker();
            Insuranceformobj.inputName(data.name);
            Insuranceformobj.inputEmail(data.email)
            Insuranceformobj.inputPhoneNumber(data.phoneNumber)
            Insuranceformobj.selectCity(data.city);
            Financeformobj.clickOnApplyNow();

        })
    })
})