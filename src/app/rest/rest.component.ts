import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';

// Para consumir api
import { HttpClient } from '@angular/common/http';

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
  displayedColumns = ['id', 'name', 'email'];
  dataSource: MatTableDataSource<ComentariosData>;

  nuevosComentarios: any[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  get500comments() {
    const url = 'https://jsonplaceholder.typicode.com/comments';

    this.httpClient.get(`${url}`).subscribe((data: Array<object>) => {
      console.log(data);
      const comentarios: ComentariosData[] = [];

      data.forEach(element => {
        // console.log(element);
        const elementAny: any = element;
        comentarios.push(elementAny);
      });

      this.dataSource = new MatTableDataSource(comentarios);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


}

export interface ComentariosData {
  id: string;
  name: string;
  email: string;
}

