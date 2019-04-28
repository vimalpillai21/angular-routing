import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
    private router:ActivatedRoute,
    private route:Router) { }
 
  ngOnInit() {
    const id = +this.router.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.router.params.subscribe(
      (params: Params) =>{
        this.server = this.serversService.getServer(+params['id']);
      }
    )
  }
  onEdit(){
    // this.route.navigate(['/servers',this.server.id,'edit']);
    this.route.navigate(['edit'],{relativeTo:this.router,queryParamsHandling:'preserve'});
  }

}
