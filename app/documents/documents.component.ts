import {Component} from '@angular/core';
import {Document} from './document'

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Documents Dashboard";
  documents : Document[] =[
    {
      title: "My first doc",
      description: "vbzdfbnjfkzlbv;ksfpov;",
      file_url: "http://google.com",
      updated_at: '1/11/17',
      image_url: "http://google.com",
    },
    {
      title: "My second doc",
      description: "vbzdfbnjfkzlbv;ksfpov;",
      file_url: "http://google.com",
      updated_at: '1/11/17',
      image_url: "http://google.com",
    },
    {
      title: "My third doc",
      description: "vbzdfbnjfkzlbv;ksfpov;",
      file_url: "http://google.com",
      updated_at: '1/11/17',
      image_url: "http://google.com",
    }
  ]

}
