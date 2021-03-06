from django.urls import path

from test.users.views import (
    user_detail_view,
    user_redirect_view,
    user_update_view,
    user_list_view
)

app_name = "users"
urlpatterns = [
    path("~redirect/", view=user_redirect_view, name="redirect"),
    path("~update/", view=user_update_view, name="update"),
    path("all/", view=user_list_view, name="all"),
    path("<str:username>/", view=user_detail_view, name="detail"),
]
