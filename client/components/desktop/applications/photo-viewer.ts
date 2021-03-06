import { Component, ElementRef, Input, OnDestroy } from '@angular/core'
import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser'
import { ShortcutCmp } from '../shortcut/shortcut'
import { Dialog } from '../../../directives/dialog'
import { getUid } from '../tools/util'
declare var $, Terminal, io

@Component({
    selector: 'photo-viewer',
    template: `
        <div dialog class="" title="{{title}}" style="width:986px;height:500px">
            <div class="dialog-body" style="text-align: center;background: rgb(222,222,222)" >
                <img [src]="url" style="height:100%" >
            </div>
        </div>
    `,
    styleUrls: [],
    directives: [ Dialog ]
})

export class PhotoViewer 
{
    constructor(private sanitizer: DomSanitizationService){

    }
    
    setUrl(url){
        this.url = url //this.sanitizer.bypassSecurityTrustResourceUrl(url)
    }

    title = 'photo viewer'
    url
    dockbar_icon = 'icon-photo'
}
