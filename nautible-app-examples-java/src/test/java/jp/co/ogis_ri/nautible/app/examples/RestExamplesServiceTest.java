package jp.co.ogis_ri.nautible.app.examples;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

@QuarkusTest
public class RestExamplesServiceTest {

    @Test
    public void testHelloEndpoint() {
        given()
          .when().get("/examples/hello")
          .then()
             .statusCode(200)
             .body(is("hello"));
    }

}