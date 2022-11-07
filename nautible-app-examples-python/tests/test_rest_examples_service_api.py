# coding: utf-8

from fastapi.testclient import TestClient




def test_hello(client: TestClient):
    """Test case for hello

    Call Hello
    """

    headers = {
    }
    response = client.request(
        "GET",
        "/examples/hello",
        headers=headers,
    )

    # uncomment below to assert the status code of the HTTP response
    assert response.status_code == 200
    assert response.content == "hello".encode()

