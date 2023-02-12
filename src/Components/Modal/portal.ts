function createPortalElement(id: string) {
  const portal = document.createElement("div");
  portal.id = id;
  return portal;
}

export function getPortalElement(id = "tt-portal") {
  let portal = document.getElementById(id);
  if (!portal) {
    portal = createPortalElement(id);
    document.body.append(portal);
  }
  return portal;
}
