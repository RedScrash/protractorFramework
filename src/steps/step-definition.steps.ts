import { binding, given, then, when} from 'cucumber-tsflow';
import { setDefaultTimeout } from 'cucumber'
import { assert } from 'chai';
import { browser, WebDriver, By, WebElement } from 'protractor';
import { ActionObject } from '../core/action-object';
import { from } from 'rxjs';
import { ObjectProperties } from '../models/object-properties.model';
import { locators } from '../locators/locators.class';
import { objectAction } from '../tools/enums';

var $;


@binding()
export class StepDefinition {
    private _myTestBrowser: WebDriver;
    private _actionObject: ActionObject;
    private _locators: locators;
    constructor () {
        this._actionObject = new ActionObject();
        this._locators = new locators();
    }

    ////////////////////////////////
    // Logic for GIVEN DECORATORS //
    ////////////////////////////////

    /**
     * Set url to browser
     * @param url URL from test application
     */
    @given(/I go on "([^"]*)"/, null , 100 * 1000)
    public async iGoOn(url: string): Promise<void> {
        browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;
        // await browser.navigate().to(url);
        await browser.get(url);
    }

    ////////////////////////////////
    //  Logic for WHEN DECORATORS //
    ////////////////////////////////

    /**
     * 
     * @param element 
     * @param param 
     */
    @when(/User got to "([^"]*)" and settext "([^"]*)"/)
    public userGoToSettext(element: string, param: string): void {
        let objectProperties: ObjectProperties;
        let myElement: WebElement;
        // this._actionObject.waitForElement('/html/body/app-root/app-login-form/app-single-card/dx-scroll-view/div[1]/div/div[1]/div[2]/div/div/dx-responsive-box/div/div/div/div[2]/dxi-item/dx-validation-group/div[2]/dx-text-box/div/div[1]/input')
        // .then(
        //     webElment => {
        //         webElment.sendKeys(param);
        //     }
        // ).catch(err => {
        //     console.log(err);
        // });
        objectProperties = this._locators.getLocator(element);
        if (objectProperties?.identifier) {
            myElement = this._actionObject.findElement(objectProperties);
            this._actionObject.action(myElement, objectAction.settext, param);
        }
        // browser.findElement(By.xpath('/html/body/app-root/app-login-form/app-single-card/dx-scroll-view/div[1]/div/div[1]/div[2]/div/div/dx-responsive-box/div/div/div/div[2]/dxi-item/dx-validation-group/div[2]/dx-text-box/div/div[1]/input')).sendKeys(param);
    }

    @when(/User click "([^"]*)"/)
    public userClick(element: string): void {
        let objectProperties: ObjectProperties;
        let myElement: WebElement;
        objectProperties = this._locators.getLocator(element);
        if (objectProperties?.identifier) {
            myElement = this._actionObject.findElement(objectProperties);
            this._actionObject.action(myElement, objectAction.click);
        }
    }

    ////////////////////////////////
    //  Logic for THEN DECORATORS //
    ////////////////////////////////

    /**
     * 
     * @param value 
     */
    @then(/User validate title "([^"]*)" should equal "([^"]*)"/)
    public tittleShouldEqual(element: string, value: string) {
        let objectProperties: ObjectProperties;
        let myElement: WebElement;
        objectProperties = this._locators.getLocator(element);
        if (objectProperties?.identifier) {
            myElement = this._actionObject.findElement(objectProperties);
            assert(this._actionObject.action(myElement, objectAction.equals, value));
        }
        assert(false);
    }
}
