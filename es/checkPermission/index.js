export default function checkPermission(authorization, resource, action) {
  if (!authorization) {
    return false;
  }

  var permissions = authorization.permissions;
  var resourcePermission = permissions.filter(function (item) {
    return item.resourceCode === resource;
  });
  return resourcePermission.length > 0 && resourcePermission[0].action.some(function (item) {
    return item.code === action;
  });
}