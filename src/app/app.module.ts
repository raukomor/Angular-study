import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { PostPageComponent } from "./pages/post-page/post-page.component";
import { ErrorNotfoundPageComponent } from "./pages/error-notfound-page/error-notfound-page.component";
import { RoutingModule } from "./app.router";
import { BlogService } from "./providers/blog.service";
import { HeaderComponent } from "./components/header/header.component";
import { PostCardComponent } from "./components/post-card/post-card.component";
import { PostsComponent } from "./components/posts/posts.component";
import { FooterComponent } from './components/footer/footer.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PostPageComponent,
    ErrorNotfoundPageComponent,
    HeaderComponent,
    PostCardComponent,
    PostsComponent,
    FooterComponent,
    PostComponent
  ],
  imports: [BrowserModule, RoutingModule, HttpModule],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule {}
