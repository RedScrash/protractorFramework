import { ObjectProperties } from "../models/object-properties.model";
import { identifierType } from "../tools/enums";

export class locators {
    private _myLocators: Array<ObjectProperties>;
    constructor () {
        this._myLocators = [
            {
                name: 'TXT_USER_NAME',
                identifier: identifierType.xpath,
                property: '/html/body/app-root/app-login-form/app-single-card/dx-scroll-view/div[1]/div/div[1]/div[2]/div/div/dx-responsive-box/div/div/div/div[2]/dxi-item/dx-validation-group/div[2]/dx-text-box/div/div[1]/input',
            }, {
                name: 'TXT_PASSWORD',
                identifier: identifierType.xpath,
                property: '/html/body/app-root/app-login-form/app-single-card/dx-scroll-view/div[1]/div/div[1]/div[2]/div/div/dx-responsive-box/div/div/div/div[2]/dxi-item/dx-validation-group/div[3]/dx-text-box/div/div[1]/input',
            }, {
                name: 'BTN_LOGIN',
                identifier: identifierType.id,
                property: 'btnLogin',
            }, {
                name: 'LBL_PRIMESTONE',
                identifier: identifierType.xpath,
                property: '/html/body/app-root/app-login-form/app-single-card/dx-scroll-view/div[1]/div/div[1]/div[2]/div/div/dx-responsive-box/div/div/div/div[1]/dxi-item/div/dx-box/div[2]/dxi-item/a/strong',
            }
        ];
    }
    /**
     * Returns object properties asociate to object name
     * @param objectName Object name to search in to locators
     */
    public getLocator(objectName: string): ObjectProperties {
        if(this._myLocators.filter(item => item.name === objectName).length) {
            return this._myLocators.filter(item => item.name === objectName)[0];
        }
        return null;
    }
}