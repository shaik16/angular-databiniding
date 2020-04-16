import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('addServer') serverCreated=new EventEmitter<{serverName:string,serverContent:string}>()
  @Output('addBlueprint')  blueprintCreated=new EventEmitter<{serverName:string,serverContent:string}>()  
  // newServerName = '';
  // newServerContent = '';
  constructor() { }

  ngOnInit() {
  }
  onAddServer(serverNameInput:HTMLInputElement,serverContentInput:HTMLInputElement) {
    this.serverCreated.emit({serverName:serverNameInput.value,serverContent:serverContentInput.value});
  }

  onAddBlueprint(serverNameInput:HTMLInputElement,serverContentInput:HTMLInputElement) {
    this.blueprintCreated.emit({serverName:serverNameInput.value,serverContent:serverContentInput.value});
  }

}