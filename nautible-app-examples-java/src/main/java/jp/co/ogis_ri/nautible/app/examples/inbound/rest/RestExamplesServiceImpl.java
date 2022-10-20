package jp.co.ogis_ri.nautible.app.examples.inbound.rest;

import jp.co.ogis_ri.nautible.app.examples.api.rest.*;
import jp.co.ogis_ri.nautible.app.examples.common.annotation.RestService;

import javax.ws.rs.core.Response;

@RestService
public class RestExamplesServiceImpl implements RestExamplesService {

    public Response hello() {
        return Response.ok("hello").build();
    }
}
