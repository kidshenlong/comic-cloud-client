/**
 * Created by Michael on 08/05/2016.
 */
import {Component, OnInit} from "@angular/core";
import {Title} from '@angular/platform-browser';
import {OnActivate, Router, RouteSegment} from "@angular/router";
import {HTTP_PROVIDERS} from "@angular/http";
import {Comic} from "./comic.model";
import {ComicService} from "./comic.service";

@Component({
    selector: 'comic',
    templateUrl: "/app/comic/comic.component.html",
    styleUrls: [`app/comic/comic.component.css`],
    providers: [Title, ComicService, HTTP_PROVIDERS]
})

export class ComicComponent implements OnActivate {

    comic: Comic;
    title: Title;

    constructor(private _comicsService: ComicService, title:Title) {
        this.title = title;
    }

    routerOnActivate(curr: RouteSegment): void {
        var comic_id = curr.getParam('id');
        this.comic = this.getComic(comic_id);
        this.title.setTitle("Comic Cloud - ");
    }

    getComic(comic_id: string){
        return new Comic("905B5C64-1560-11E6-A89C-564E36676F51", 1, null,["http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete");
    }


}
