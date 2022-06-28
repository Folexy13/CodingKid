import { lazy } from "react";

// ** Document title
const TemplateTitle: string = "%s -Coding Kids";

// ** Default Route
const DefaultRoute: string = "/home";

// ** Merge Routes
// const Routes:string | Object() = [
//   {
//     path: "/home",
//     component: lazy(() => import("../../views/Home")),
//   },
//   {
//     path: "/second-page",
//     component: lazy(() => import("../../views/SecondPage")),
//   },
//   {
//     path: "/login",
//     component: lazy(() => import("../../views/Login")),
//     layout: "BlankLayout",
//     meta: {
//       authRoute: true,
//     },
//   },
//   {
//     path: "/error",
//     component: lazy(() => import("../../views/Error")),
//     layout: "BlankLayout",
//   },
// ];

// export { DefaultRoute, TemplateTitle, Routes };
export { DefaultRoute, TemplateTitle };
