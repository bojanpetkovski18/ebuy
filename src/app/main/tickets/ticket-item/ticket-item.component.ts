import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ITicket } from 'src/app/interfaces/ticket';
import { CommService } from 'src/services/comm.service';
import { TicketService } from 'src/services/ticket.service';

@Component({
  selector: 'app-ticket-item',
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.scss'],
})
export class TicketItemComponent implements OnInit {
  @Input() public ticket: ITicket;
  public currentTicket: ITicket;

  constructor(
    private ticketService: TicketService,
    private commService: CommService
  ) {}

  ngOnInit() {}

  addToFaveourites(ticket: ITicket) {
    ticket.isFavourite = !this.ticket.isFavourite;
    this.ticketService.updateTicket(ticket).subscribe(() => {});
  }

  buyTicket(ticket: ITicket) {
    if (this.ticket.quantity > 0) {
      ticket.quantity = +this.ticket.quantity - 1;
      this.ticketService.updateTicket(ticket).subscribe(() => {});
    }
  }
}
