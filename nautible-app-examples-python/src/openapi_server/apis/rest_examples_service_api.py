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
    "/examples/hello",
    responses={
        200: {"model": str, "description": "Successful Operation"},
    },
    tags=["RestExamplesService"],
    summary="Call Hello",
    response_model_by_alias=True,
)
async def hello(
) -> str:
    """Return Hello"""
    ...
    return Response(content="hello", media_type="text/plain", status_code=status.HTTP_200_OK)
