var CalculatorPage = function(){

    this.FirstInput = element(by.model('first'));
    this.SecondInput = element(by.model('second'));
    this.Operator = element(by.model('operator'));
    this.Gobutton = element(by.id('gobutton'));
    this.ResultVal = element(by.binding('latest'));
   this.ResHistory = element.all(by.repeater('result in memory'));

    this.navigate = function() {
        browser.get(browser.baseUrl);
      };
    this.EnterFirst = function(Input1){
    this.FirstInput.sendKeys(Input1);
    };

    this.EnterSecond = function(Input2){
    this.SecondInput.sendKeys(Input2);
    };

    this.SelectOperator = function(operation){

        this.Operator.$('option[value="' + operation + '"]').click();
    };

    this.ClickGo = function(){
        this.Gobutton.click();
    };
    this.GetResult = function(){
        return this.ResultVal.getText();
    };
    this.GetHistory = function(indexval){
        return this.ResHistory.get(indexval).getText();
    };
};
module.exports = new CalculatorPage();
