package login;
import org.junit.runner.RunWith; 
import cucumber.api.junit.Cucumber; 
import cucumber.api.CucumberOptions; 
@RunWith(Cucumber.class) 
@CucumberOptions(
		features="src/test/resources/features",
		monochrome=true,
		
		strict=true,
		format = { "pretty","html:target/cucumber"},
		glue={"StepDef"},
		tags=("@Regression,@Smoke")   //Will run when find either of annotation
		
		)
public class RunTest {

}
