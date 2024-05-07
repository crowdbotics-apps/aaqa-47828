from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    W1333ViewSet,
    F33ViewSet,
    F33ViewSet,
    W1333ViewSet,
    F33ViewSet,
    W1333ViewSet,
    F33ViewSet,
    W1333ViewSet,
)

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register("w1333", W1333ViewSet)
router.register("f33", F33ViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
