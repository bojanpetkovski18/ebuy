import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITicket } from 'src/app/interfaces/ticket';

const HeaderOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private path: string = 'http://localhost:3000/Tickets';

  constructor(private http: HttpClient) {}

  public getTickets(): Observable<ITicket[]> {
    return this.http.get<ITicket[]>(this.path);
  }

  public getTicket(id: number): Observable<ITicket> {
    return this.http.get<ITicket>(this.path + '/' + id);
  }

  public updateTicket(ticket: ITicket): Observable<ITicket> {
    return this.http.put<ITicket>(
      this.path + '/' + ticket.id,
      ticket,
      HeaderOptions
    );
  }
}
