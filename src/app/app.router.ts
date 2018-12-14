import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { PostPageComponent } from "./pages/post-page/post-page.component";
import { ErrorNotfoundPageComponent } from "./pages/error-notfound-page/error-notfound-page.component";

const routes: Routes = [
  // home
  {
    path: "",
    component: HomePageComponent
  },
  // blog post
  {
    path: ":slug/:id",
    component: PostPageComponent
  },
  // handling 404
  {
    path: "**",
    component: ErrorNotfoundPageComponent
  }
];

export const RoutingModule = RouterModule.forRoot(routes);
