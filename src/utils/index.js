const hiddenTabbarRoutes = [
  "ExhibitionDetail",
  "StoreFilterModal",
  "StoreItemCard",
  "Shopcart",
  "ProductFilterModal",
  "ExhibitionList"
];

export const isHiddenTabbarRoute = routes => {
  if (routes && routes.length > 1) {
    const routeNames = routes.map(r => r.routeName);
    // console.log(routeNames);
    for (let i = 0; i < hiddenTabbarRoutes.length; i++) {
      if (routeNames.indexOf(hiddenTabbarRoutes[i]) > -1) return true;
    }
  }
  return false;
};

// routes &&
//   routes.length === 2 &&
//   (routes[1].routeName === "ExhibitionDetail" ||
//     routes[1].routeName === "StoreFilterModal" ||
//     routes[1].routeName === "StoreItemCard");
