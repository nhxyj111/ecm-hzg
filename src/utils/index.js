const hiddenTabbarRoutes = [
  "ExhibitionDetail",
  "StoreFilterModal",
  "StoreItemCard",
  "Shopcart",
  "ProductFilterModal",
  "ExhibitionList",
  "Exhibiter",
  "ExhibitionSearchResults",
  "Shop",
  "ShopSearch",
  "ShopCard",
  "ShopGood"
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
