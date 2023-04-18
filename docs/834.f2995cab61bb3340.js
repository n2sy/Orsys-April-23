"use strict";(self.webpackChunkOrsys_April_23=self.webpackChunkOrsys_April_23||[]).push([[834],{834:(b,c,u)=>{u.r(c),u.d(c,{SubModule:()=>C});var l=u(895),s=u(773),e=u(256);let d=(()=>{class t{getAllServers(){return this.allServers}getServerById(r){return this.allServers.find(n=>n.id==r)}constructor(){this.allServers=[{id:1,nom:"Serveur d'Aurore",statut:"online"},{id:2,nom:"Serveur d'Alex",statut:"offline"},{id:3,nom:"Serveur de Cedric",statut:"online"}]}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var i=u(433);let p=(()=>{class t{constructor(r,n){this.actRoute=r,this.listServers=n}ngOnInit(){this.actRoute.paramMap.subscribe({next:r=>{this.editedServer=this.listServers.getServerById(r.get("id"))}})}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(s.gz),e.Y36(d))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-edit-server"]],decls:13,vars:2,consts:[[1,"container"],["for",""],["type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-control",3,"ngModel","ngModelChange"],["value","online"],["routerLink","/servers",1,"btn","btn-danger"]],template:function(r,n){1&r&&(e.TgZ(0,"div",0)(1,"label",1),e._uU(2,"Nom du serveur"),e.qZA(),e.TgZ(3,"input",2),e.NdJ("ngModelChange",function(a){return n.editedServer.nom=a}),e.qZA(),e.TgZ(4,"label",1),e._uU(5,"Statut du serveur"),e.qZA(),e.TgZ(6,"select",3),e.NdJ("ngModelChange",function(a){return n.editedServer.statut=a}),e.TgZ(7,"option",4),e._uU(8,"Online"),e.qZA(),e.TgZ(9,"option",4),e._uU(10,"Offline"),e.qZA()(),e.TgZ(11,"button",5),e._uU(12,"Back To List"),e.qZA()()),2&r&&(e.xp6(3),e.Q6J("ngModel",n.editedServer.nom),e.xp6(3),e.Q6J("ngModel",n.editedServer.statut))},dependencies:[s.rH,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.On]}),t})();const v=function(t){return["/servers",t]},m=function(t){return{allowEdit:t}};function S(t,o){if(1&t&&(e.TgZ(0,"li",6),e._uU(1),e.qZA()),2&t){const r=o.$implicit;e.Q6J("routerLink",e.VKq(3,v,r.id))("queryParams",e.VKq(5,m,3==r.id?"1":"0")),e.xp6(1),e.hij(" ",r.nom," ")}}function f(t,o){1&t&&(e.TgZ(0,"i"),e._uU(1,"Impossible d'editer ce serveur"),e.qZA())}const Z=s.Bz.forChild([{path:"",component:(()=>{class t{constructor(r){this.listServ=r}ngOnInit(){this.tabServers=this.listServ.getAllServers()}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(d))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home-servers"]],decls:7,vars:1,consts:[[1,"container"],[1,"row"],[1,"col-md-5"],[1,"list-group"],["class","list-group-item",3,"routerLink","queryParams",4,"ngFor","ngForOf"],[1,"col-md-7"],[1,"list-group-item",3,"routerLink","queryParams"]],template:function(r,n){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"ol",3),e.YNc(4,S,2,7,"li",4),e.qZA()(),e.TgZ(5,"div",5),e._UZ(6,"router-outlet"),e.qZA()()()),2&r&&(e.xp6(4),e.Q6J("ngForOf",n.tabServers))},dependencies:[l.sg,s.lC,s.rH]}),t})(),children:[{path:":id",component:(()=>{class t{constructor(r,n){this.actRoute=r,this.listServers=n}ngOnInit(){this.actRoute.paramMap.subscribe({next:r=>{this.oneServer=this.listServers.getServerById(r.get("id"))}}),this.actRoute.queryParamMap.subscribe({next:r=>{this.showBtn="1"!=r.get("allowEdit")}})}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(s.gz),e.Y36(d))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-info-server"]],decls:10,vars:4,consts:[[1,"container"],["routerLink","edit",1,"btn","btn-info",3,"disabled"],[4,"ngIf"]],template:function(r,n){1&r&&(e.TgZ(0,"div",0)(1,"h4"),e._uU(2),e.qZA(),e._UZ(3,"hr"),e.TgZ(4,"p"),e._uU(5),e.qZA(),e.TgZ(6,"button",1),e._uU(7,"Editer"),e.qZA(),e._UZ(8,"br"),e.YNc(9,f,2,0,"i",2),e.qZA()),2&r&&(e.xp6(2),e.hij(" ",n.oneServer.nom," "),e.xp6(3),e.hij("Le statut du serveur est ",n.oneServer.statut," "),e.xp6(1),e.Q6J("disabled",n.showBtn),e.xp6(3),e.Q6J("ngIf",n.showBtn))},dependencies:[l.O5,s.rH]}),t})()},{path:":id/edit",component:p}]}]);let C=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.ez,Z,i.u5]}),t})()}}]);