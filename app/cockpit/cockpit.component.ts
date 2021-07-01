import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() bluePrintCreated = new EventEmitter<{serverName: string , serverContent: string}>();
  @Output() serverCreated = new EventEmitter<{serverName: string , serverContent: string}>();
  
  //newServerName = '';
  newServerContent = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  public onAddServer(input: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: input.value,
      serverContent: this.newServerContent
    });
  }


  public onAddBlueprint(input: HTMLInputElement) {
   this.bluePrintCreated.emit({
     serverName: input.value,
     serverContent: this.newServerContent
   });
  }

}
