/// <reference types="cypress" />
import {Homepage} from "../pages/Homepage"
import { CarInspectionHome,CarInspectionLeadForm } from "../pages/CarInspection";
import { LoginPage } from "../pages/Login";
import { AuctionSheetVerification } from "../pages/Auctionsheetverification";
import {SIFMPage,SIFMLeadForm} from "../pages/SIFM"
import { NewCarLoanCalculator,UsedCarLoanCalculator,Banks,FinanceForm,InsuranceForm } from "../pages/Carfinanceand_insurance";

const Homepageobj = new Homepage();
const Carinspectionhomeobj = new CarInspectionHome();
const Carinspectionleadformobj = new CarInspectionLeadForm();
const Loginpageobj = new LoginPage();
const Auctionsheetverificationobj = new AuctionSheetVerification();
const SIFMPageobj = new SIFMPage();
const SIFMLeadFormobj = new SIFMLeadForm();
const Newcarloancalculatorobj =  new NewCarLoanCalculator();
const Usedcarloancalculatorobj = new UsedCarLoanCalculator();
const Banksobj =  new Banks();
const Financeformobj = new FinanceForm();
const Insuranceformobj = new InsuranceForm();

describe('Automating lead forms',function(){
    it('Placing PakWheels Car Inspection lead',function(){
        Homepageobj.openHomePage();
        Homepageobj.closeBanner();
        cy.contains('Sign In').click();
        Loginpageobj.loginWithEmail('sprint168@mailinator.com','1234567')
        Homepageobj.clickOnCarInspection();
        Carinspectionhomeobj.clickOnScheduleInspection();
        Carinspectionleadformobj.SelectModelYear();
        Carinspectionleadformobj.SelectCarInfo();
        Carinspectionleadformobj.InputName(Carinspectionleadformobj.Name);
        Carinspectionleadformobj.InputPhoneNumber(Carinspectionleadformobj.Phonenumber);
        //for already logged in user this lower function is not required
        //Carinspectionleadformobj.InputEmail(Carinspectionleadformobj.Email);
        Carinspectionleadformobj.SelectCity();
        Carinspectionleadformobj.SelectCityArea();
        Carinspectionleadformobj.CheckBox();
        Carinspectionleadformobj.ClickOnSubmit();
        Carinspectionleadformobj.VerifyLead();

    })


    it('Auction Sheet verification when user is logged in',function(){
        Homepageobj.openHomePage();
        Homepageobj.closeBanner();
        cy.contains('Sign In').click();
        Loginpageobj.loginWithEmail('sprint168@mailinator.com','1234567')
        Homepageobj.clickAuctionSheetVerfication();
        Auctionsheetverificationobj.inputChassisNumber(Auctionsheetverificationobj.ChassisNumber);
        Auctionsheetverificationobj.verifyAuctionSheet();
        Auctionsheetverificationobj.clickOnBuyNow();
    })

    it('Auction Sheet verification when user is not logged in',function(){
        Homepageobj.openHomePage();
        Homepageobj.closeBanner();
        Homepageobj.clickAuctionSheetVerfication();
        Auctionsheetverificationobj.inputChassisNumber(Auctionsheetverificationobj.ChassisNumber);
        Auctionsheetverificationobj.verifyAuctionSheet();
        Auctionsheetverificationobj.filling_Form();
        Auctionsheetverificationobj.clickOnBuyNow();
        
    })
    it.only('Placing PakWheels Sell it for me lead when user is logged in',function(){
        Homepageobj.openHomePage();
        Homepageobj.closeBanner();
        cy.contains('Sign In').click();
        Loginpageobj.loginWithEmail('sprint168@mailinator.com','1234567')
        Homepageobj.clickSIFM();
        SIFMPageobj.clickOnGetStarted();
        SIFMLeadFormobj.SelectModelYear();
        SIFMLeadFormobj.SelectCarInfo();
        SIFMLeadFormobj.SelectCity();
        SIFMLeadFormobj.InputName(SIFMLeadFormobj.Name);
        SIFMLeadFormobj.InputPhoneNumber(SIFMLeadFormobj.Phonenumber);
        SIFMLeadFormobj.ClickOnSubmit();
        SIFMLeadFormobj.VerifyLead();
    })
    it.only('Placing PakWheels Sell it for me lead when user is not logged in',function(){
        Homepageobj.openHomePage();
        Homepageobj.closeBanner();
        Homepageobj.clickSIFM();
        SIFMPageobj.clickOnGetStarted();
        SIFMLeadFormobj.SelectModelYear();
        SIFMLeadFormobj.SelectCarInfo();
        SIFMLeadFormobj.SelectCity();
        SIFMLeadFormobj.InputName(SIFMLeadFormobj.Name);
        SIFMLeadFormobj.InputPhoneNumber(SIFMLeadFormobj.Phonenumber);
        SIFMLeadFormobj.ClickOnSubmit();
    })
    it('Placing New Car finance lead',function(){
        Homepageobj.openHomePage();
        Homepageobj.closeBanner();
        Homepageobj.clickOnCarFinance();
        Newcarloancalculatorobj.SelectCity(Newcarloancalculatorobj.City);
        Newcarloancalculatorobj.SelectMakeModelVersion(Newcarloancalculatorobj.Year,Newcarloancalculatorobj.Make,Newcarloancalculatorobj.Model_locator,Newcarloancalculatorobj.Model,Newcarloancalculatorobj.Version);
        Newcarloancalculatorobj.SelectTenure(Newcarloancalculatorobj.Tenure);
        Newcarloancalculatorobj.SelectDownPayment(Newcarloancalculatorobj.DownPayment);
        Newcarloancalculatorobj.ClickOnShowPlans();
        Banksobj.ClickOnFinanceBank('HBL CarLoan ');
        Financeformobj.InputName('Saliha');
        Financeformobj.InputEmail('test@pakwheels.com')
        Financeformobj.InputPhoneNUmber('03225689741')
        Financeformobj.InputAge('22');
        Financeformobj.InputCNIC('36303-5869875-7');
        Financeformobj.SelectCity('Lahore');
        Financeformobj.SelectCityArea('Gulberg');
        Financeformobj.InputAddress('xyz');
        Financeformobj.SelectBestTimeToCall('Before Mid-day');
        Financeformobj.FilFinancialInformation('Self-Employed','21,000 - 35,000','Faysal Bank Limited','Non-Filer','No','Business','Next 2 weeks');
        Financeformobj.ClickOnApplyNow();


    })
    it('Placing Used Car finance lead',function(){
        Homepageobj.openHomePage();
        Homepageobj.closeBanner();
        Homepageobj.clickOnCarFinance();
        Usedcarloancalculatorobj.ClickOnUsedCars();
        Newcarloancalculatorobj.SelectCity(Usedcarloancalculatorobj.City);
        Usedcarloancalculatorobj.InputCarPrice(Usedcarloancalculatorobj.Price_locator,Usedcarloancalculatorobj.Price);
        Newcarloancalculatorobj.SelectMakeModelVersion(Usedcarloancalculatorobj.Year,Usedcarloancalculatorobj.Make,Usedcarloancalculatorobj.Model_locator,Usedcarloancalculatorobj.Model,Usedcarloancalculatorobj.Version);
        Newcarloancalculatorobj.SelectTenure(Usedcarloancalculatorobj.Tenure);
        Newcarloancalculatorobj.SelectDownPayment(Usedcarloancalculatorobj.DownPayment);
        Newcarloancalculatorobj.ClickOnShowPlans();
        Banksobj.ClickOnFinanceBank('Faysal Car Finance');
        Financeformobj.InputName('Saliha');
        Financeformobj.InputEmail('test@pakwheels.com')
        Financeformobj.InputPhoneNUmber('03225689741')
        Financeformobj.InputAge('22');
        Financeformobj.InputCNIC('36303-5869875-7');
        Financeformobj.SelectCity('Lahore');
        Financeformobj.SelectCityArea('Gulberg');
        Financeformobj.InputAddress('xyz');
        Financeformobj.SelectBestTimeToCall('Before Mid-day');
        Financeformobj.FilFinancialInformation('Self-Employed','21,000 - 35,000','Faysal Bank Limited','Non-Filer','No','Business','Next 2 weeks');
        Financeformobj.ClickOnApplyNow();

    })
    it('Placing Car insurance lead',function(){
        Homepageobj.openHomePage();
        Homepageobj.closeBanner();
        Homepageobj.clickOnCarInsurance();
        Newcarloancalculatorobj.SelectMakeModelVersion(Usedcarloancalculatorobj.Year,Usedcarloancalculatorobj.Make,Usedcarloancalculatorobj.Model_locator,Usedcarloancalculatorobj.Model,Usedcarloancalculatorobj.Version);
        Usedcarloancalculatorobj.InputCarPrice(Insuranceformobj.Price_locator,Usedcarloancalculatorobj.Price);
        Newcarloancalculatorobj.ClickOnShowPlans();
        Banksobj.ClickOnInsuranceBank("IGI Insurance");
        Insuranceformobj.AddTracker();
        Insuranceformobj.InputName('Saliha');
        Insuranceformobj.InputEmail('test@pakwheels.com')
        Insuranceformobj.InputPhoneNUmber('03225689741')
        Insuranceformobj.SelectCity('Lahore');
        Financeformobj.ClickOnApplyNow();

    })
})