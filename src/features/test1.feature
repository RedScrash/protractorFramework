Feature: Running Cucumber with Protractor
  As a user of Protractor
  I should be able to use Cucumber
  to run my E2E tests

  @dev @sourceLocation @justThisOne
  Scenario: Wrapping WebDriver
    Given I go on "http://192.168.1.42:4200/login-form"
    When User got to "TXT_USER_NAME" and settext "wikipedia"
    When User got to "TXT_PASSWORD" and settext "wikipedia"
    When User click "BTN_LOGIN"
    Then User validate title "LBL_PRIMESTONE" should equal "www.primestone.com"


