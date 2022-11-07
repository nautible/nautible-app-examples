# coding: utf-8

from typing import Dict, List  # noqa: F401

from fastapi import (  # noqa: F401
    APIRouter,
    Body,
    Cookie,
    Depends,
    Form,
    Header,
    Path,
    Query,
    Response,
    Security,
    status,
)

from openapi_server.models.extra_models import TokenModel  # noqa: F401


router = APIRouter()


@router.get(
    "/healthz",
    responses={
        200: {"description": "successful operation"},
        503: {"description": "Service Unavailable"},
    },
    tags=["HealthCheckService"],
    summary="Service Health Check",
    response_model_by_alias=True,
)
async def healthz(
) -> None:
    """Returns a status code"""
    ...
    return Response(content="Health Check OK", media_type="text/plain", status_code=status.HTTP_200_OK)
