import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safehtml'
})
export class SafehtmlPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){
    
  }

  transform(style): unknown {
    return this.sanitizer.bypassSecurityTrustHtml(style);
  }

}
