(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{248:function(e,t,a){"use strict";(function(e){var n=a(15),o=a(16),r=a(17),s=a(18),i=a(19),c=a(0),l=a.n(c),h=a(249),u=a.n(h),p=a(250),d=a.n(p),m=function(t){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(i.a)(a,t),Object(o.a)(a,[{key:"obj_parse",value:function(e){for(var t=e.split("\n"),a={},n=0,o="",r="";n<t.length;){for(;n<t.length&&void 0!==t[n];){if(t[n].startsWith("mtllib")){o=t[n];break}n++}if(-1===o)break;for(;n<t.length&&void 0!==t[n];){if(t[n].startsWith("usemtl")){r=t[n];break}n++}return 0!==o.length&&0!==r.length?(a.mtllib_line=o,a.usemtl_line=r,a):a}return a}},{key:"handle_data",value:function(t,a,n,o){var r,s,i=a(t),c=0===Object.entries(i).length&&i.constructor===Object,l=o,h="",p="";if(l.endsWith(".obj")||(l+=".obj"),!c){h=i.mtllib_line.split("mtllib")[1].trim(),p=i.usemtl_line.split("usemtl")[1].trim();var m=new u.a,g=t;m.addFile(l,e.alloc(g.length,g),"");var f="";f+="newmtl ",f+=p,f+="\n",f+="Ns 225.000000\n",f+="Ka 1.000000 1.000000 1.000000\n",f+="Kd ";var b=(r=n.props.chosen_case_colour,(s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r))?{r:parseInt(s[1],16),g:parseInt(s[2],16),b:parseInt(s[3],16)}:null);f+=(""+b.r/255).substr(0,8),f+=" ",f+=(""+b.g/255).substr(0,8),f+=" ",f+=(""+b.b/255).substr(0,8),f+="\n",f+="Ks 0.500000 0.500000 0.500000\n",f+="Ke 0.0 0.0 0.0\n",f+="Ni 1.450000\n",f+="d 1.000000\n",f+="illum 2\n",m.addFile(h,e.alloc(f.length,f),"");var v=new File([m.toBuffer()],"inkerz_exported_3d_model.zip",{type:"text/plain;charset=utf-8"});d.a.saveAs(v)}}},{key:"clickHandler",value:function(){if("OBJ"===this.props.chosen_3d_format){var e="",t=this.handle_data,a=this.obj_parse,n=this;if(this.props.chosen_phone_case.indexOf("base64")>0){var o=this.props.chosen_phone_case.split("base64,")[1];e=atob(o),t(e,a,n,"model.obj")}else{var r=window.location.protocol+"//"+window.location.host+window.location.pathname+"/assets/"+this.props.chosen_phone_case+".obj";fetch(r).then(function(e){return e.text()}).then(function(e){t(e,a,n,n.props.chosen_phone_case)})}}else alert("Export format currently not supported!")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"export-control"},l.a.createElement("select",{className:"select-3d",onChange:this.props.on3DFormatSelect,value:this.props.chosen_3d_format,style:{backgroundImage:"url(images/select-arrow.png)",backgroundRepeat:"no-repeat"}},l.a.createElement("option",{value:""},"Export Format"),this.props.export_3d_formats.map(function(e){return l.a.createElement("option",{key:e,value:e},".",e)})),l.a.createElement("button",{ref:"download",className:"exportButton",onClick:function(){return e.clickHandler()}},"Export 3D Model"))}}]),a}(l.a.Component);t.a=m}).call(this,a(24).Buffer)},254:function(e,t,a){e.exports=a(634)},339:function(e,t,a){},353:function(e,t){},355:function(e,t){},634:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(246),s=a.n(r),i=(a(339),a(15)),c=a(16),l=a(17),h=a(18),u=a(19),p=a(10),d=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this))).state={showMenu:!1},e.showMenu=e.showMenu.bind(Object(p.a)(Object(p.a)(e))),e.closeMenu=e.closeMenu.bind(Object(p.a)(Object(p.a)(e))),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"showMenu",value:function(e){var t=this;e.preventDefault(),this.setState({showMenu:!0},function(){document.addEventListener("click",t.closeMenu)})}},{key:"closeMenu",value:function(e){var t=this;this.dropdownMenu.contains(e.target)||this.setState({showMenu:!1},function(){document.removeEventListener("click",t.closeMenu)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"logo"},o.a.createElement("img",{src:"images/logo_white.png",alt:"Inkerz Logo",className:"logoImage"})),o.a.createElement("div",{className:"nav-links"},o.a.createElement("a",{href:"index.html"},"3D MODELER"),o.a.createElement("a",{href:"https://inkerz.com"},"WHY INKERZ?"),o.a.createElement("a",{href:"https://inkerz.com/contact/"},"CONTACT")),o.a.createElement("div",{className:"menu-division"},o.a.createElement("img",{src:"images/logo_white.png",alt:"Inkerz Logo",className:"menuLogoImage"}),o.a.createElement("button",{className:"menu-button",onClick:this.showMenu,style:{backgroundImage:"url(images/menu-icon.png)",backgroundRepeat:"no-repeat"}}),this.state.showMenu?o.a.createElement("div",{className:"menu",ref:function(t){e.dropdownMenu=t}},o.a.createElement("a",{href:"index.html"},o.a.createElement("button",{className:"menuItem"},"3D MODELER")),o.a.createElement("a",{href:"https://inkerz.com"},o.a.createElement("button",{className:"menuItem"},"WHY INKERZ?")),o.a.createElement("a",{href:"https://inkerz.com/contact/"},o.a.createElement("button",{className:"menuItem"},"CONTACT"))):null))}}]),t}(o.a.Component),m=a(247),g=a.n(m),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={file:"",fileExtension:""},a.mtl_parse=function(e){for(var t=e.split("\n"),a={},n=0,o="",r="";n<t.length;){for(;n<t.length&&void 0!==t[n];){if(t[n].startsWith("newmtl")){o=t[n].substring(6).trim();break}n++}if(0!==o.length){for(;n<t.length&&void 0!==t[n];){if(t[n].startsWith("Kd")){r=t[n].substring(2).trim();break}n++}0===o.length||0===r.length?n++:(a[o]=r+"",o="",r="",n++)}else n++}return console.log(JSON.stringify(a)),a},a.on_obj_load=function(e){a.file="data:application/octet-stream;base64,"+btoa(a.obj_reader.result),a.fileExtension="obj",a.step=a.step+1,a.step>=2?a.props.on3DFileLoad(a.file,a.fileExtension,a.color):a.props.on3DFileLoad(a.file,a.fileExtension,a.props.app_states.chosen_case_colour)},a.on_mtl_load=function(e){var t=a.mtl_reader.result,n=a.mtl_parse(t),o="#";if(0===Object.entries(n).length&&n.constructor===Object)o="#000000";else for(var r=Object.entries(n)[0][1].split(" "),s=0;s<3;s++)o+=(Math.round(255*parseFloat(r[s].trim()))%256).toString(16);a.color=o,console.log("handleFiles: "+o),a.step=a.step+1,a.step>=2&&a.props.on3DFileLoad(a.file,a.fileExtension,a.color)},a.handleFiles=function(e){a.step=0,a.file="",a.fileExtension="",a.color="";var t=!1,n=!1,o=-1,r=-1;if(e.length<2){for(var s=0;s<e.length;s++)"obj"!==e[s].name.split(".").pop()||n?alert("Unsupported file detected"):(o=s,n=!0,alert(".mtl file has not been loaded, using default material"));a.obj_reader=new FileReader,a.obj_reader.onloadend=a.on_obj_load,a.obj_reader.readAsText(e[o])}else{for(var i=0;i<e.length;i++)"obj"!==e[i].name.split(".").pop()||n?"mtl"!==e[i].name.split(".").pop()||t||(r=i,t=!0):(o=i,n=!0);a.mtl_reader=new FileReader,a.obj_reader=new FileReader,a.mtl_reader.onloadend=a.on_mtl_load,a.obj_reader.onloadend=a.on_obj_load,a.mtl_reader.readAsText(e[r]),a.obj_reader.readAsText(e[o])}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"load-control"},o.a.createElement(g.a,{fileTypes:[".obj",".json",".mtl"],multipleFiles:!0,base64:!1,handleFiles:this.handleFiles},o.a.createElement("button",{className:"loadButton"},"Load 3D Model")))}}]),t}(n.Component),b=a(248);var v=function(e){return o.a.createElement("div",{className:"reset-control"},o.a.createElement("button",{className:"resetButton",onClick:e.onResetApp},"Reset"))},_=a(2),E=a(251),C=a.n(E),w=a(252),k=a.n(w),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={cameraPosition:new _.Vector3(0,300,750),groupRotation:new _.Euler(0,0,0),scene:{},width:500,height:400,RenderInfo:"",assets_path:"assets/"},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"objectLoadLogic",value:function(){return this.props.chosenPhoneCase.indexOf("base64")>0?this.props.chosenPhoneCase:this.state.assets_path+this.props.chosenPhoneCase+".obj"}},{key:"objectLabelDisplayLogic",value:function(){return this.props.chosenPhoneCase.indexOf("base64")>0?"Customer":this.props.chosenPhoneCase}},{key:"componentDidMount",value:function(){var e=this.refs.scene;this.setState({scene:e}),this.resize(),window.addEventListener("resize",this.resize.bind(this))}},{key:"resize",value:function(){window.innerWidth<640?(this.setState({width:.7*window.innerWidth}),this.setState({height:300})):(this.setState({width:window.innerWidth-350}),this.setState({height:400}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(C.a,{mainCamera:"camera",antialias:!0,shadowMapEnabled:!0,width:this.state.width,height:this.state.height,alpha:!0},o.a.createElement("scene",{ref:"scene"},o.a.createElement("perspectiveCamera",{key:"perspectiveCamera",name:"camera",fov:parseInt(this.props.chosenCaseSize,10),aspect:this.state.width/this.state.height,near:.1,far:1e3,position:this.state.cameraPosition,lookAt:new _.Vector3(0,0,0)}),o.a.createElement("group",null,o.a.createElement("spotLight",{key:"Light 1",color:this.props.chosenCaseColor,position:new _.Vector3(0,300,0),lookAt:new _.Vector3(0,0,0),castShadow:!0,penumbra:2,intensity:.2,shadowMapWidth:10240,shadowMapHeight:10240}),o.a.createElement("directionalLight",{key:"Light 2",color:this.props.chosenCaseColor,position:new _.Vector3(0,500,100),lookAt:new _.Vector3(0,0,0),intensity:.5}),o.a.createElement("spotLight",{key:"Light 3",color:this.props.chosenCaseColor,position:new _.Vector3(0,100,2e3),lookAt:new _.Vector3(0,0,0),intensity:.35}),o.a.createElement("spotLight",{key:"Light 4",color:this.props.chosenCaseColor,position:new _.Vector3(-500,0,500),lookAt:new _.Vector3(0,0,0),intensity:.1}),o.a.createElement("spotLight",{key:"Light 5",color:this.props.chosenCaseColor,position:new _.Vector3(500,0,500),lookAt:new _.Vector3(0,0,0),intensity:.1}),o.a.createElement("spotLight",{key:"Light 6",color:this.props.chosenCaseColor,position:new _.Vector3(-500,450,500),lookAt:new _.Vector3(0,0,0),intensity:.375}),o.a.createElement("spotLight",{key:"Light 7",color:this.props.chosenCaseColor,position:new _.Vector3(500,450,500),lookAt:new _.Vector3(0,0,0),intensity:.375})),o.a.createElement("group",{name:"objGroup",rotation:new _.Euler(this.props.chosenRotationX,this.props.chosenRotationY,0),key:this.props.chosenPhoneCase},o.a.createElement(k.a,{name:"exampleObject",model:this.objectLoadLogic(),scene:this.state.scene,group:"objGroup"})))),o.a.createElement("div",{className:"renderDescription"},o.a.createElement("p",null,"Rendering "+this.objectLabelDisplayLogic()+" Model")))}}]),t}(o.a.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={caseSize:20,rotationX:0,rotationY:0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"changeSize",value:function(){var e=document.getElementById("caseSizeRange").value;this.setState({caseSize:e})}},{key:"changeRotationX",value:function(){var e=document.getElementById("rotationXRange").value;this.setState({rotationX:e})}},{key:"changeRotationY",value:function(){var e=document.getElementById("rotationYRange").value;this.setState({rotationY:e})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"main3D"},o.a.createElement("br",null),o.a.createElement("div",{className:"fileViewerLine"},o.a.createElement("div",{className:"caseSize"},o.a.createElement("p",{className:"whiteText"},"Z",o.a.createElement("br",null),"O",o.a.createElement("br",null),"O",o.a.createElement("br",null),"M",o.a.createElement("br",null)),o.a.createElement("div",{className:"rangeDiv"},o.a.createElement("input",{type:"range",id:"caseSizeRange",min:"1",max:"50",step:"1",defaultValue:"20",onChange:function(){return e.changeSize()}}))),o.a.createElement("div",{className:"fileViewer",style:{backgroundImage:"url(images/model-background.png)",backgroundRepeat:"no-repeat"}},o.a.createElement(j,{chosenCaseColor:this.props.app_states.chosen_case_colour,chosenCaseSize:this.state.caseSize,chosenRotationX:this.state.rotationX,chosenRotationY:this.state.rotationY,chosenPhoneCase:this.props.app_states.chosen_phone_case})),o.a.createElement("div",{className:"rotationX"},o.a.createElement("div",{className:"rangeDiv"},o.a.createElement("input",{type:"range",id:"rotationXRange",min:"-3",max:"3",step:"0.1",defaultValue:"0",onChange:function(){return e.changeRotationX()}})),o.a.createElement("p",{className:"whiteText"},"R",o.a.createElement("br",null),"O",o.a.createElement("br",null),"T",o.a.createElement("br",null),"A",o.a.createElement("br",null),"T",o.a.createElement("br",null),"E",o.a.createElement("br",null)))),o.a.createElement("div",{className:"rotationY"},o.a.createElement("input",{type:"range",id:"rotationYRange",min:"-3",max:"3",step:"0.1",defaultValue:"0",onChange:function(){return e.changeRotationY()}}),o.a.createElement("p",{className:"whiteText"},"ROTATE")))}}]),t}(o.a.Component);var x=function(e){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"text-to-engrave"},o.a.createElement("p",{className:"whiteText"},"What to engrave into case?")),o.a.createElement("input",{id:"text-to-engrave",className:"engrave-3d",onChange:e.onEngraveTextChange,value:e.engraved,placeholder:"Text to Engrave..."})))},O=a(4),S=a.n(O),N=a(253),L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={displayColorPicker:!1,color:a.props.updated_case_colour},a.handleClick=function(){a.setState({displayColorPicker:!a.state.displayColorPicker})},a.handleClose=function(){a.setState({displayColorPicker:!1})},a.handleChange=function(e){a.setState({color:e})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=S()({default:{color:{width:"30px",height:"14px",borderRadius:"2px",background:this.props.updated_case_colour},swatch:{padding:"5px",background:"#fff",borderRadius:"1px",boxShadow:"0 0 0 1px rgba(0,0,0,.1)",display:"inline-block",cursor:"pointer"},popover:{position:"absolute",zIndex:"2"},cover:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}}});return o.a.createElement("div",null,o.a.createElement("p",{className:"whiteText"},"Select Case Colour:"),o.a.createElement("div",{style:e.swatch,onClick:this.handleClick},o.a.createElement("div",{style:e.color})),this.state.displayColorPicker?o.a.createElement("div",{style:e.popover},o.a.createElement("div",{style:e.cover,onClick:this.handleClose}),o.a.createElement(N.ChromePicker,{disableAlpha:!0,width:"190px",onChange:this.handleChange,color:this.props.updated_case_colour,onChangeComplete:this.props.onCaseColourSelect})):null)}}]),t}(o.a.Component),R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={caseList:a.props.case_list,searchString:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.props.case_list.filter(function(t){return t.toLowerCase().includes(e.props.searched.toLowerCase())}).map(function(t){return o.a.createElement("button",{className:"displayCaseButton",key:t,value:t,onClick:function(){e.props.onCaseSelect(t),e.props.onClear("")}},o.a.createElement("div",{className:"cardBox"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-front"},o.a.createElement("img",{src:"images/"+t+".png",alt:"",className:"displayCaseImage"})),o.a.createElement("div",{className:"card-back"},o.a.createElement("p",null,t)))))}))}}]),t}(n.Component);var T=function(e){return o.a.createElement("div",{className:"search-control"},o.a.createElement("input",{id:"text-to-search",className:"search-3d",onChange:e.onCaseSearch,value:e.searched,placeholder:"Search Case...",style:{backgroundImage:"url(images/search-icon.png)",backgroundRepeat:"no-repeat"}}),o.a.createElement("button",{className:"clearButton",onClick:function(){return e.onClear("")}},"X"))},D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={chosen_engraved_text:"",case_search_string:"",chosen_case_colour:"#44557E",chosen_phone_case:"iPhone-X",chosen_export_3d_format:"",chosen_3d_file_extension:"",available_export_3d_formats:["OBJ","GLB"],available_case_models:["iPhone-X","iPhone-8-Plus","iPhone-7","iPad-9.7","Galaxy-S10","Galaxy-S5","Pixel2XL"]},a.update3DExportFormat=a.update3DExportFormat.bind(Object(p.a)(Object(p.a)(a))),a.updateEngravingText=a.updateEngravingText.bind(Object(p.a)(Object(p.a)(a))),a.updateCaseColour=a.updateCaseColour.bind(Object(p.a)(Object(p.a)(a))),a.updateChosenCase=a.updateChosenCase.bind(Object(p.a)(Object(p.a)(a))),a.updateChosen3DFileToLoad=a.updateChosen3DFileToLoad.bind(Object(p.a)(Object(p.a)(a))),a.resetApp=a.resetApp.bind(Object(p.a)(Object(p.a)(a))),a.updateSearchString=a.updateSearchString.bind(Object(p.a)(Object(p.a)(a))),a.clearSearchString=a.clearSearchString.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"update3DExportFormat",value:function(e){this.setState({chosen_export_3d_format:e.target.value})}},{key:"resetApp",value:function(){this.setState({chosen_engraved_text:"",case_search_string:"",chosen_case_colour:"#44557E",chosen_export_3d_format:"",chosen_phone_case:"iPhone-X"})}},{key:"updateEngravingText",value:function(e){this.setState({chosen_engraved_text:e.target.value})}},{key:"updateCaseColour",value:function(e){this.setState({chosen_case_colour:e.hex})}},{key:"updateChosenCase",value:function(e){this.setState({chosen_phone_case:e})}},{key:"updateChosen3DFileToLoad",value:function(e,t,a){this.setState({chosen_phone_case:e}),this.setState({chosen_3d_file_extension:t}),"#GGGGGG"===a||this.setState({chosen_case_colour:a})}},{key:"updateSearchString",value:function(e){this.setState({case_search_string:e.target.value})}},{key:"clearSearchString",value:function(e){this.setState({case_search_string:e})}},{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(d,null),o.a.createElement("div",{className:"top-controls"},o.a.createElement(f,{on3DFileLoad:this.updateChosen3DFileToLoad,app_states:this.state}),o.a.createElement(b.a,{export_3d_formats:this.state.available_export_3d_formats,chosen_3d_format:this.state.chosen_export_3d_format,on3DFormatSelect:this.update3DExportFormat,chosen_phone_case:this.state.chosen_phone_case,chosen_case_colour:this.state.chosen_case_colour}),o.a.createElement(v,{onResetApp:this.resetApp}),o.a.createElement(T,{searched:this.state.case_search_string,onCaseSearch:this.updateSearchString,onClear:this.clearSearchString})),o.a.createElement("div",{className:"view3d"},o.a.createElement(R,{onCaseSelect:this.updateChosenCase,case_list:this.state.available_case_models,searched:this.state.case_search_string,onClear:this.clearSearchString}),o.a.createElement(y,{app_states:this.state})),o.a.createElement("div",{className:"edit-controls"},o.a.createElement(x,{engraved:this.state.chosen_engraved_text,onEngraveTextChange:this.updateEngravingText}),o.a.createElement(L,{onCaseColourSelect:this.updateCaseColour,updated_case_colour:this.state.chosen_case_colour})))}}]),t}(n.Component),F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(o.a.createElement(D,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Inkerz-ReactUI",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/Inkerz-ReactUI","/service-worker.js");F?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):I(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):I(e)})}}()}},[[254,2,1]]]);
//# sourceMappingURL=main.92f2e9f4.chunk.js.map