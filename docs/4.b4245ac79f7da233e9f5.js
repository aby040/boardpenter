(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"w/zP":function(t,n,e){"use strict";e.r(n),e.d(n,"BuildersModule",(function(){return v}));var i=e("PCNd"),a=e("tyNb"),o=e("LvDl"),b=e("fXoL");let l=(()=>{class t{constructor(){}buildCupboard(t){const{title:n,layout:e,height:i,width:a,depth:o,thickness:b,edgeBand:l,backPanel:c,backPanelMaterial:d,skirting:r,skirtingHeight:u,dummy:g,dummyWidth:m,material:s,laminationInner:h="white",laminationOuter:f,division:p,shelves:P}=t,M=[1^e[0],1^e[1],1^e[2],1^e[3]],Q=h===f?"BSL "+h:`Os ${f} Os ${h}`,v={label:"Top",quantity:1,note:"Grooving",materialLabel:`${s} ${Q}`,dimensions:{length:Math.round(a-(b*e[0]+b*e[1])),width:Math.round(o)},edgeband:{left:l,right:l,top:e[0]?"":l,bottom:e[1]?"":l}},y={label:"Bottom",quantity:1,note:"Grooving",materialLabel:`${s} ${Q}`,dimensions:{length:Math.round(a-(b*e[2]+b*e[3])),width:Math.round(o)},edgeband:{left:l,right:l,top:e[3]?"":l,bottom:e[2]?"":l}},C={label:"Side - Left",quantity:1,note:"Grooving",materialLabel:`${s} ${Q}`,dimensions:{length:Math.round(i-(b*M[0]+b*M[3])),width:Math.round(o)},edgeband:{left:l,right:l,top:e[0]?l:"",bottom:e[3]?l:""}},w=[{label:"Side - Right",quantity:1,note:"Grooving",materialLabel:`${s} ${Q}`,dimensions:{length:Math.round(i-(b*M[1]+b*M[2])),width:Math.round(o)},edgeband:{left:l,right:l,top:e[1]?l:"",bottom:e[2]?l:""}},C,v,y];w.push({label:"Division",quantity:p-1,materialLabel:`${s} BSL ${h}`,edgeband:{left:l,right:"",top:"",bottom:""},dimensions:{length:Math.round(i-2*b),width:Math.round(o-25)}});const k=a-b*(p+1),A=Math.floor(k/p);let x=0;for(let L=0;L<p-1;L++){const t=Math.round(A);x+=t,w.push({label:"Shelf",quantity:P[L],materialLabel:`${s} BSL ${h}`,edgeband:{left:l,right:"",top:"",bottom:""},dimensions:{length:t,width:Math.round(o-25)}})}return w.push({label:"Shelf",quantity:P[P.length-1],materialLabel:`${s} BSL ${h}`,edgeband:{left:l,right:"",top:"",bottom:""},dimensions:{length:Math.round(k-x),width:Math.round(o-25)}}),c&&w.push({label:"Back Cover",quantity:1,materialLabel:`${d} ${"white"===h?"BSL white":`Os ${h} Os white`}`,dimensions:{length:Math.round(a-b),width:Math.round(i-b)}}),r&&(w.push({label:"Skirting",quantity:2,materialLabel:`${s} ${h}`,dimensions:{length:Math.round(a),width:Math.round(u)}}),w.push({label:"Skirting",quantity:2,materialLabel:`${s} ${h}`,dimensions:{length:Math.round(o-2*b),width:Math.round(u)}})),g&&(w.push({label:"Outer Dummy",quantity:1,materialLabel:`${s} ${Q}`,dimensions:{length:Math.round(i),width:Math.round(m)}}),w.push({label:"Inner Dummy",quantity:1,materialLabel:`${s} BSL ${h}`,dimensions:{length:Math.round(i-2*b),width:Math.round(m)}})),{title:n,panels:w}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=b.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var c=e("4J96"),d=e("3Pt+"),r=e("kmnG"),u=e("qFsG"),g=e("ofXK"),m=e("bSwM"),s=e("jaxi"),h=e("NFeN"),f=e("bTqV");function p(t,n){if(1&t){const t=b.Rb();b.Qb(0,"mat-form-field"),b.Qb(1,"mat-label"),b.tc(2,"Shelf"),b.Pb(),b.Qb(3,"input",35),b.Xb("ngModelChange",(function(e){b.jc(t);const i=n.index;return b.bc().specification.shelves[i]=e})),b.Pb(),b.Qb(4,"mat-hint",8),b.tc(5),b.Pb(),b.Pb()}if(2&t){const t=n.index,e=b.bc();b.Ab(3),b.fc("name","shelf-",t,""),b.ec("ngModel",e.specification.shelves[t]),b.Ab(2),b.vc("Number of shelves in division ",t+1,"")}}const P=function(){return["/"]};let M=(()=>{class t{constructor(t,n,e,i){this.builder=t,this.state=n,this.route=e,this.router=i}ngOnInit(){const t=this.route.snapshot.params.id;if(t){const{data:n}=Object(o.find)(this.state.getItems(),n=>n.id=+t);this.specification=n.specs}else this.specification={laminationInner:"white",backPanelMaterial:"6mm PLY",division:2,shelves:[0,0],layout:[0,0,0,0],backPanel:!0,skirting:!1}}onDivisionCountChange(){this.specification.shelves=new Array(this.specification.division).fill(0)}save(){const t=this.builder.buildCupboard(this.specification);this.state.addItem(t.title,"CUPBOARD",{specs:this.specification,measurements:t}),this.router.navigate(["../../"])}}return t.\u0275fac=function(n){return new(n||t)(b.Kb(l),b.Kb(c.a),b.Kb(a.a),b.Kb(a.b))},t.\u0275cmp=b.Eb({type:t,selectors:[["ng-component"]],decls:130,vars:34,consts:[[1,"cupboard"],[1,"row-container"],[1,"full-width-field"],["matInput","","name","title",3,"ngModel","ngModelChange"],["matInput","","name","material",3,"ngModel","ngModelChange"],["matInput","","name","laminationOuter",3,"ngModel","ngModelChange"],["matInput","","name","laminationInner",3,"ngModel","ngModelChange"],["matInput","","name","height","type","number",3,"ngModel","ngModelChange"],["align","end"],["matInput","","name","width","type","number",3,"ngModel","ngModelChange"],["matInput","","name","depth","type","number",3,"ngModel","ngModelChange"],["matInput","","name","division","type","number",3,"ngModel","ngModelChange"],["matInput","","name","thickness","type","number",3,"ngModel","ngModelChange"],["matInput","","name","edgeBand","type","number",3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],[1,"layout-column"],[1,"checkbox-container"],["name","dummy",3,"ngModel","ngModelChange"],["matInput","","name","dummyWidth","type","number",3,"disabled","ngModel","ngModelChange"],["name","skirting",3,"ngModel","ngModelChange"],["matInput","","name","skirtingHeight","type","number",3,"disabled","ngModel","ngModelChange"],["name","backPanel",3,"ngModel","ngModelChange"],[1,"layout-container"],[3,"value","valueChange"],["group","matButtonToggleGroup"],["aria-label","Top Panel",3,"value"],["aria-label","Side Panel",3,"value"],["bottomLeft","matButtonToggleGroup"],["aria-label","Bottom Panel",3,"value"],["bottomRight","matButtonToggleGroup"],["matInput","","name","backPanelMaterial",3,"disabled","ngModel","ngModelChange"],[1,"button-container"],[1,"buttons-holder"],["mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"click"],["matInput","","type","number",3,"ngModel","name","ngModelChange"]],template:function(t,n){1&t&&(b.Qb(0,"form",0),b.Qb(1,"div",1),b.Qb(2,"mat-form-field",2),b.Qb(3,"mat-label"),b.tc(4,"Title"),b.Pb(),b.Qb(5,"input",3),b.Xb("ngModelChange",(function(t){return n.specification.title=t})),b.Pb(),b.Pb(),b.Pb(),b.Qb(6,"div",1),b.Qb(7,"mat-form-field",2),b.Qb(8,"mat-label"),b.tc(9,"Material"),b.Pb(),b.Qb(10,"input",4),b.Xb("ngModelChange",(function(t){return n.specification.material=t})),b.Pb(),b.Pb(),b.Pb(),b.Qb(11,"div",1),b.Qb(12,"mat-form-field",2),b.Qb(13,"mat-label"),b.tc(14,"Lamination (Outer)"),b.Pb(),b.Qb(15,"input",5),b.Xb("ngModelChange",(function(t){return n.specification.laminationOuter=t})),b.Pb(),b.Pb(),b.Pb(),b.Qb(16,"div",1),b.Qb(17,"mat-form-field",2),b.Qb(18,"mat-label"),b.tc(19,"Lamination (Inner)"),b.Pb(),b.Qb(20,"input",6),b.Xb("ngModelChange",(function(t){return n.specification.laminationInner=t})),b.Pb(),b.Pb(),b.Pb(),b.Qb(21,"div",1),b.Qb(22,"mat-form-field"),b.Qb(23,"mat-label"),b.tc(24,"Height"),b.Pb(),b.Qb(25,"input",7),b.Xb("ngModelChange",(function(t){return n.specification.height=t})),b.Pb(),b.Qb(26,"mat-hint",8),b.tc(27,"Heigth in mm"),b.Pb(),b.Pb(),b.Qb(28,"mat-form-field"),b.Qb(29,"mat-label"),b.tc(30,"Width"),b.Pb(),b.Qb(31,"input",9),b.Xb("ngModelChange",(function(t){return n.specification.width=t})),b.Pb(),b.Qb(32,"mat-hint",8),b.tc(33,"Width in mm"),b.Pb(),b.Pb(),b.Qb(34,"mat-form-field"),b.Qb(35,"mat-label"),b.tc(36,"Depth"),b.Pb(),b.Qb(37,"input",10),b.Xb("ngModelChange",(function(t){return n.specification.depth=t})),b.Pb(),b.Qb(38,"mat-hint",8),b.tc(39,"Depth in mm"),b.Pb(),b.Pb(),b.Pb(),b.Qb(40,"div",1),b.Qb(41,"mat-form-field"),b.Qb(42,"mat-label"),b.tc(43,"Division"),b.Pb(),b.Qb(44,"input",11),b.Xb("ngModelChange",(function(t){return n.specification.division=t}))("ngModelChange",(function(){return n.onDivisionCountChange()})),b.Pb(),b.Qb(45,"mat-hint",8),b.tc(46,"Number of Divisions"),b.Pb(),b.Pb(),b.Qb(47,"mat-form-field"),b.Qb(48,"mat-label"),b.tc(49,"Thickness"),b.Pb(),b.Qb(50,"input",12),b.Xb("ngModelChange",(function(t){return n.specification.thickness=t})),b.Pb(),b.Qb(51,"mat-hint",8),b.tc(52,"Thickness in mm"),b.Pb(),b.Pb(),b.Qb(53,"mat-form-field"),b.Qb(54,"mat-label"),b.tc(55,"Edge Band"),b.Pb(),b.Qb(56,"input",13),b.Xb("ngModelChange",(function(t){return n.specification.edgeBand=t})),b.Pb(),b.Qb(57,"mat-hint",8),b.tc(58,"Edgeband Code"),b.Pb(),b.Pb(),b.Pb(),b.Qb(59,"div",1),b.rc(60,p,6,3,"mat-form-field",14),b.Pb(),b.Qb(61,"div",1),b.Qb(62,"div",15),b.Qb(63,"div",16),b.Qb(64,"mat-checkbox",17),b.Xb("ngModelChange",(function(t){return n.specification.dummy=t}))("ngModelChange",(function(){return n.specification.dummyWidth=void 0})),b.tc(65," Dummy "),b.Pb(),b.Qb(66,"mat-form-field"),b.Qb(67,"mat-label"),b.tc(68,"Dummy Width"),b.Pb(),b.Qb(69,"input",18),b.Xb("ngModelChange",(function(t){return n.specification.dummyWidth=t})),b.Pb(),b.Qb(70,"mat-hint",8),b.tc(71,"Dummy width in mm"),b.Pb(),b.Pb(),b.Pb(),b.Qb(72,"div",16),b.Qb(73,"mat-checkbox",19),b.Xb("ngModelChange",(function(t){return n.specification.skirting=t}))("ngModelChange",(function(){return n.specification.skirtingHeight=void 0})),b.tc(74," Skirting "),b.Pb(),b.Qb(75,"mat-form-field"),b.Qb(76,"mat-label"),b.tc(77,"Skirting Height"),b.Pb(),b.Qb(78,"input",20),b.Xb("ngModelChange",(function(t){return n.specification.skirtingHeight=t})),b.Pb(),b.Qb(79,"mat-hint",8),b.tc(80,"Height of skirting in mm"),b.Pb(),b.Pb(),b.Pb(),b.Qb(81,"div",16),b.Qb(82,"mat-checkbox",21),b.Xb("ngModelChange",(function(t){return n.specification.backPanel=t}))("ngModelChange",(function(){return n.specification.backPanelMaterial=void 0})),b.tc(83,"Back Panel"),b.Pb(),b.Pb(),b.Pb(),b.Qb(84,"div",15),b.Qb(85,"div",22),b.Qb(86,"mat-button-toggle-group",23,24),b.Xb("valueChange",(function(t){return n.specification.layout[0]=t})),b.Qb(88,"mat-button-toggle",25),b.Qb(89,"mat-icon"),b.tc(90,"format_align_left"),b.Pb(),b.Pb(),b.Qb(91,"mat-button-toggle",26),b.Qb(92,"mat-icon"),b.tc(93,"format_align_center"),b.Pb(),b.Pb(),b.Pb(),b.Qb(94,"mat-button-toggle-group",23,24),b.Xb("valueChange",(function(t){return n.specification.layout[1]=t})),b.Qb(96,"mat-button-toggle",25),b.Qb(97,"mat-icon"),b.tc(98,"format_align_left"),b.Pb(),b.Pb(),b.Qb(99,"mat-button-toggle",26),b.Qb(100,"mat-icon"),b.tc(101,"format_align_center"),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Qb(102,"div",22),b.Qb(103,"mat-button-toggle-group",23,27),b.Xb("valueChange",(function(t){return n.specification.layout[2]=t})),b.Qb(105,"mat-button-toggle",28),b.Qb(106,"mat-icon"),b.tc(107,"format_align_left"),b.Pb(),b.Pb(),b.Qb(108,"mat-button-toggle",26),b.Qb(109,"mat-icon"),b.tc(110,"format_align_center"),b.Pb(),b.Pb(),b.Pb(),b.Qb(111,"mat-button-toggle-group",23,29),b.Xb("valueChange",(function(t){return n.specification.layout[3]=t})),b.Qb(113,"mat-button-toggle",28),b.Qb(114,"mat-icon"),b.tc(115,"format_align_left"),b.Pb(),b.Pb(),b.Qb(116,"mat-button-toggle",26),b.Qb(117,"mat-icon"),b.tc(118,"format_align_center"),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Qb(119,"div",1),b.Qb(120,"mat-form-field",2),b.Qb(121,"mat-label"),b.tc(122,"Back Panel Material"),b.Pb(),b.Qb(123,"input",30),b.Xb("ngModelChange",(function(t){return n.specification.backPanelMaterial=t})),b.Pb(),b.Pb(),b.Pb(),b.Qb(124,"section",31),b.Qb(125,"div",32),b.Qb(126,"button",33),b.tc(127,"Cancel"),b.Pb(),b.Qb(128,"button",34),b.Xb("click",(function(){return n.save()})),b.tc(129,"Save"),b.Pb(),b.Pb(),b.Pb(),b.Pb()),2&t&&(b.Ab(5),b.ec("ngModel",n.specification.title),b.Ab(5),b.ec("ngModel",n.specification.material),b.Ab(5),b.ec("ngModel",n.specification.laminationOuter),b.Ab(5),b.ec("ngModel",n.specification.laminationInner),b.Ab(5),b.ec("ngModel",n.specification.height),b.Ab(6),b.ec("ngModel",n.specification.width),b.Ab(6),b.ec("ngModel",n.specification.depth),b.Ab(7),b.ec("ngModel",n.specification.division),b.Ab(6),b.ec("ngModel",n.specification.thickness),b.Ab(6),b.ec("ngModel",n.specification.edgeBand),b.Ab(4),b.ec("ngForOf",n.specification.shelves),b.Ab(4),b.ec("ngModel",n.specification.dummy),b.Ab(5),b.ec("disabled",!n.specification.dummy)("ngModel",n.specification.dummyWidth),b.Ab(4),b.ec("ngModel",n.specification.skirting),b.Ab(5),b.ec("disabled",!n.specification.skirting)("ngModel",n.specification.skirtingHeight),b.Ab(4),b.ec("ngModel",n.specification.backPanel),b.Ab(4),b.ec("value",n.specification.layout[0]),b.Ab(2),b.ec("value",0),b.Ab(3),b.ec("value",1),b.Ab(3),b.ec("value",n.specification.layout[1]),b.Ab(2),b.ec("value",0),b.Ab(3),b.ec("value",1),b.Ab(4),b.ec("value",n.specification.layout[2]),b.Ab(2),b.ec("value",0),b.Ab(3),b.ec("value",1),b.Ab(3),b.ec("value",n.specification.layout[3]),b.Ab(2),b.ec("value",0),b.Ab(3),b.ec("value",1),b.Ab(7),b.ec("disabled",!n.specification.backPanel)("ngModel",n.specification.backPanelMaterial),b.Ab(3),b.ec("routerLink",b.gc(33,P)))},directives:[d.m,d.i,d.j,r.a,r.e,u.a,d.b,d.h,d.k,d.l,r.d,g.i,m.a,s.b,s.a,h.a,f.a,a.c],styles:[".table-container[_ngcontent-%COMP%]{width:75%}.cupboard[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.row-container[_ngcontent-%COMP%]{padding-top:10px;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;width:40%}.layout-column[_ngcontent-%COMP%]{width:50%;flex-direction:column;align-items:center;align-content:space-between}.layout-container[_ngcontent-%COMP%]{justify-content:space-around}.checkbox-container[_ngcontent-%COMP%], .layout-container[_ngcontent-%COMP%]{padding-top:10px;display:flex;flex-direction:row;flex-wrap:wrap;width:100%;align-items:center}.checkbox-container[_ngcontent-%COMP%]{justify-content:space-between}.button-container[_ngcontent-%COMP%]{padding-top:10px;padding-bottom:15px;display:flex;flex-direction:row;justify-content:flex-end;width:40%}.buttons-holder[_ngcontent-%COMP%]{width:25%;display:flex;flex-direction:row;justify-content:space-between}.full-width-field[_ngcontent-%COMP%]{width:100%}"]}),t})();const Q=a.d.forChild([{path:"cupboard",component:M},{path:"cupboard/:id",component:M}]);let v=(()=>{class t{}return t.\u0275mod=b.Ib({type:t}),t.\u0275inj=b.Hb({factory:function(n){return new(n||t)},imports:[[i.a,Q]]}),t})()}}]);