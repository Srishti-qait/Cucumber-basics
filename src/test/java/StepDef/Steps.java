package StepDef;

import org.openqa.selenium.By; 
import org.openqa.selenium.WebDriver; 
import org.openqa.selenium.chrome.*;

import cucumber.api.java.After;
import cucumber.api.java.Before;

import cucumber.api.java.en.Given; 
import cucumber.api.java.en.Then; 
import cucumber.api.java.en.When; 
public class Steps  {
	protected WebDriver driver = null;
	 @Before("@Regression,@Smoke") public void setUp(){ 
			System.setProperty("webdriver.chrome.driver","C:\\Users\\srishtiagarwal\\Downloads\\chromedriver_win32\\chromedriver.exe");
		    driver = new ChromeDriver(); 
			 }
	   @Given("^I am on Gmail login page$") 
		
	   public void goToGmail() { 
			
	      driver.navigate().to("https://www.gmail.com/"); 
	   }
		
	   @When("^I enter username as (.*)$") 
	   public void enterUsername(String arg1) {   
	      driver.findElement(By.cssSelector("input[type='email']")).sendKeys(arg1);
	      driver.findElement(By.cssSelector("div#identifierNext")).click();
	   }
		
	   @When ("^I enter password as (.*)$") 
	   public void enterPassword(String arg1) throws InterruptedException {
		   Thread.sleep(3000);
	      driver.findElement(By.cssSelector("input[type='password']")).sendKeys(arg1);
	      driver.findElement(By.cssSelector("div#passwordNext")).click(); 
	   } 
		
	   @Then("^Login should be successful$") 
	   public void checkPass() throws InterruptedException {  
		   Thread.sleep(4000);
	      if(driver.getCurrentUrl().equalsIgnoreCase(
	         "https://mail.google.com/mail/u/0/#inbox")){ 
	            System.out.println("Test1 Pass"); 
	      } else { 
	         System.out.println("Test1 Failed"); 
	      } 
	      driver.close(); 
	   }
	   @Then("^Login should be Fail$") 
	   public void checkFail() throws InterruptedException {  
		   Thread.sleep(4000);
	      if(driver.findElement(By.cssSelector("div.LXRPh")).isDisplayed()){ 
	            System.out.println("Test2 pass"); 
	      } else { 
	         System.out.println("Test2 Fail"); 
	      } 
	   }
	      @After("@Smoke")
	      public void cleanUp(){ 
		      driver.close(); 
	   }
//	
	} 