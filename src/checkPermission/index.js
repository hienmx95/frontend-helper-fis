export default function checkPermission(authorization, resource, action) {
  if (!authorization) {
    return false;
  }
  const permissions = authorization.permissions;
  const resourcePermission = permissions.filter(item => item.resourceCode === resource);
  return resourcePermission.length > 0 && resourcePermission[0].action.some(item => item.code === action);
}
