typescript
import { Component } from '@angular/core';
import * as Tesseract from 'tesseract.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Electron OCR App';
  ocrResult = '';

  captureAndProcessImage() {
    // Code to capture the image from the window titled 'ss_demo.png' goes here
    // This is a placeholder as capturing a window image is outside the scope of Angular
    const imagePath = 'path/to/ss_demo.png';

    Tesseract.recognize(
      imagePath,
      'eng',
      { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
      this.ocrResult = text;
    });
  }
}
