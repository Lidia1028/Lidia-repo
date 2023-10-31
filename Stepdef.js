import { Given,When,Then } from "cucumber"
import { browser } from "protractor"
import { element ,by} from "protractor"

Given ('launch the url', {timeout: 60 * 1000},async function () {  
await browser.get("http://way2automation.com/angularjs-protractor/banking/#/login").then(async function () {  
    await browser.sleep(15000)
}) 
}) 
When ('click the home button', {timeout: 60 * 1000},async function () {  
    await  element(by.xpath("//button[1]")).click();  
        await browser.sleep(10000)
    });
    
