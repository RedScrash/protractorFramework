import { browser, By, WebElement } from "protractor";
import { Observable, from } from 'rxjs';
import { ObjectProperties } from "../models/object-properties.model";
import { identifierType, objectAction } from "../tools/enums";


export class ActionObject {
    constructor () {}

    /**
     * 
     * @param object 
     */
    public async waitForElement(object: string): Promise<WebElement> {
        const identifier = 'xpath';
        switch (identifier) {
            case 'xpath':
                return await browser.wait(browser.findElement(By.xpath(object)), 5000, `Element not found ${object}`);
            default:
                return await browser.wait(browser.findElement(By.id(object)), 5000, `Element not found ${object}`);
        }
    }

    /**
     * 
     * @param objecProperties 
     */
    public findElement(objecProperties: ObjectProperties): WebElement {
        if (!objecProperties) {
            return null;
        }
        switch (objecProperties.identifier) {
            case identifierType.id:
                return browser.findElement(By.id(objecProperties.property));
            case identifierType.name:
                return browser.findElement(By.name(objecProperties.property));
            case identifierType.class:
                return browser.findElement(By.class(objecProperties.property));
            case identifierType.xpath:
                return browser.findElement(By.xpath(objecProperties.property));
            default:
                return null;
        }
    }

    public action(object: WebElement, action: objectAction, param?: string): boolean {
        if (!object) {
            return false;
        }
        switch (action) {
            case objectAction.click:
                object.click();
                return true;
            case objectAction.settext:
                if (param) {
                    object.sendKeys(param);
                    return true;
                }
                return false;
            case objectAction.equals:
                if (param) {
                    object.getText().then (
                        text => {
                            return text === param;
                        }
                    );
                }
            default:
                return false;
        }
    }
}