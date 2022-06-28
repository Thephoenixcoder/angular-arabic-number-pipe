import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arabicNumTrans'
})
export class ArabicNumTransPipe implements PipeTransform {

  transform(value: string) {
    var arabicPattern = /[\u0600-\u06FF]/;
    var arabicNumbers = '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
    var stringChecked = arabicPattern.test(value);

    if (stringChecked) {
      return new String(value).replace(/[0123456789]/g, (d) => { return arabicNumbers[d as any] });
    } else {
      return value
    }


  }

}
