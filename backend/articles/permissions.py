from rest_framework import permissions

class CheckIfAdminView(permissions.BasePermission):
    def has_object_permission(self, request, view,obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method =="GET" or request.method =="OPTIONS":
            return True
        return request.user.is_superuser

        # Write permissions are only allowed to the owner of the snippet.