import { binding, given, then, when} from 'cucumber-tsflow';
import { assert } from 'chai';
import { browser } from 'protractor';


@binding()
export class StepDefinition {
    constructor () { }

    ////////////////////////////////
    // Logic for GIVEN DECORATORS //
    ////////////////////////////////

    /**
     * Set url to browser
     * @param url URL from test application
     */
    @given(/I go on "([^"]*)"/)
    public iGoOn(url: string): void {
        console.log('Redirigiendo.....');
        browser.get(url);
    }

    ////////////////////////////////
    //  Logic for WHEN DECORATORS //
    ////////////////////////////////

    ////////////////////////////////
    //  Logic for THEN DECORATORS //
    ////////////////////////////////

    /**
     * 
     * @param value 
     */
    @then(/the title should equal "([^"]*)"/)
    public tittleShouldEqual(value: string) {
        assert(value);
    }
}
