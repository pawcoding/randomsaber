import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DifficultyComponent } from './components/difficulty/difficulty.component';
import { ModeComponent } from './components/mode/mode.component';
import { ToPlayComponent } from './components/to-play/to-play.component';
import { MusicPacksComponent } from './components/music-packs/music-packs.component';
import { PackComponent } from './components/pack/pack.component';

@NgModule({
  declarations: [
    AppComponent,
    DifficultyComponent,
    ModeComponent,
    ToPlayComponent,
    MusicPacksComponent,
    PackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
