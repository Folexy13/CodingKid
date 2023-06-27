import { lazy } from "react";

// ** Document title
const TemplateTitle: string = "%s -Coding Kids";

// ** Default Route
const DefaultRoute: string = "/home" ;

// ** Merge Routes
const Routes: any = [
  {
    path: "/",
    component: lazy(() => import("../Layout/Public/Homepage/Homepage")),
  },
  {
    path: "/search",
    layout: "BlankLayout",
    meta: {
      authRoute: true,
    },
    component: lazy(() => import("../Layout/Public/Searchpage/Searchpage")),
  },
  //   {
  //     path: "/second-page",
  //     component: lazy(() => import("../../La/SecondPage")),
  //   },
  {
    path: "/login",
    component: lazy(() => import("../Layout/Public/Auth/Login/Login")),
    layout: "BlankLayout",
    meta: {
      authRoute: true,
    },
  },
  //   {
  //     path: "/error",
  //     component: lazy(() => import("../../views/Error")),
  //     layout: "BlankLayout",
  //   },
];

// export { DefaultRoute, TemplateTitle, Routes };
export { DefaultRoute, TemplateTitle, Routes };
