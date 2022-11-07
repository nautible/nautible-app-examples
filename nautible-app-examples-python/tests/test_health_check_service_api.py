# coding: utf-8

from fastapi.testclient import TestClient




def test_healthz(client: TestClient):
    """Test case for healthz

    Service Health Check
    """

    headers = {
    }
    response = client.request(
        "GET",
        "/healthz",
        headers=headers,
    )

    # uncomment below to assert the status code of the HTTP response
    assert response.status_code == 200
    assert response.content == "Health Check OK".encode()

