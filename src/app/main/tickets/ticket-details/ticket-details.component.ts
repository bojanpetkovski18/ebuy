import { Location } from '@angular/common';
import { identifierModuleUrl } from '@angular/compiler';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITicket } from 'src/app/interfaces/ticket';
import { CommService } from 'src/services/comm.service';
import { TicketService } from 'src/services/ticket.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss'],
})
export class TicketDetailsComponent implements OnInit {
  public currentTicket: ITicket;
  constructor(
    private router: ActivatedRoute,
    private ticketService: TicketService,
    private location: Location
  ) {}

  ngOnInit() {
    this.ticketService
      .getTicket(+this.router.snapshot.params['id'])
      .subscribe((res: ITicket) => {
        this.currentTicket = res;
      });
  }

  public onBack() {
    this.location.back();
  }

  buyTicket(ticket: ITicket) {
    if (this.currentTicket.quantity > 0) {
      ticket.quantity = +this.currentTicket.quantity - 1;
      this.ticketService.updateTicket(ticket).subscribe(() => {});
    }
  }
}
