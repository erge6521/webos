import { Component, ElementRef, Input, OnDestroy } from '@angular/core'
import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser'
import { ShortcutCmp } from '../shortcut/shortcut'
import { Dialog } from '../../../directives/dialog'
import { getUid } from '../tools/util'
declare var $, Terminal, io

@Component({
    selector: 'pdf-app',
    template: `
        <div dialog class="" title="{{title}}" style="width:986px;height:500px">
            <div *ngIf="url">
            <iframe target='_top' target='_parent' class="dialog-body" [src]="url" style="width:100%;height:100%;border:none;"></iframe>
            </div>
        </div>
    `,
    styleUrls: [],
    directives: [ Dialog ]
})

export class PdfCmp 
{
    constructor(private sanitizer: DomSanitizationService){

    }

    setUrl(url){
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url)
    }
    title = 'pdf'
    url
    dockbar_icon = 'icon-pdf'
}
