(()=>{"use strict";var e,a,c,d,f,b={},r={};function t(e){var a=r[e];if(void 0!==a)return a.exports;var c=r[e]={id:e,loaded:!1,exports:{}};return b[e].call(c.exports,c,c.exports,t),c.loaded=!0,c.exports}t.m=b,e=[],t.O=(a,c,d,f)=>{if(!c){var b=1/0;for(i=0;i<e.length;i++){c=e[i][0],d=e[i][1],f=e[i][2];for(var r=!0,o=0;o<c.length;o++)(!1&f||b>=f)&&Object.keys(t.O).every((e=>t.O[e](c[o])))?c.splice(o--,1):(r=!1,f<b&&(b=f));if(r){e.splice(i--,1);var n=d();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[c,d,f]},t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,t.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var f=Object.create(null);t.r(f);var b={};a=a||[null,c({}),c([]),c(c)];for(var r=2&d&&e;"object"==typeof r&&!~a.indexOf(r);r=c(r))Object.getOwnPropertyNames(r).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,t.d(f,b),f},t.d=(e,a)=>{for(var c in a)t.o(a,c)&&!t.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((a,c)=>(t.f[c](e,a),a)),[])),t.u=e=>"assets/js/"+({53:"935f2afb",238:"eab217cf",257:"6990fd21",265:"87c4c920",521:"97140aee",569:"78aaed86",792:"124a5e3d",1105:"9c4cd4c4",1176:"116d061d",1217:"a09a1188",1233:"1bd78af1",1246:"a8eadec8",1429:"33b74eba",1544:"5dfc8d6a",1637:"7f7d033b",1794:"4204f988",2052:"15369573",2288:"30d9c7f8",2354:"5ccffc9c",2386:"bb879dcd",2450:"acf022e4",2452:"63b646c1",2522:"9b914286",2535:"814f3328",2623:"487f279c",2744:"3827dd5a",2991:"3759cf4b",3077:"6786195a",3089:"a6aa9e1f",3133:"e072f248",3151:"cb8ccc1a",3207:"3d83e150",3237:"1df93b7f",3325:"da16da38",3416:"e23d3c5f",3608:"9e4087bc",3666:"18eda3ee",4013:"01a85c17",4368:"a94703ab",4374:"30325ba4",4454:"33eec91e",4461:"e4a0c232",4464:"f5ba7293",4706:"78431c72",4752:"3652cf2a",4765:"63be8f5d",4886:"87a4c587",5019:"4c2069ba",5069:"65966a7a",5263:"c0e854c3",5289:"028b1cc5",5362:"d3d4dca1",5400:"5352c875",5691:"3a456eb6",5721:"0938166f",5863:"34a3e208",5963:"a33f8907",6055:"76c18be1",6075:"3a191a7b",6103:"ccc49370",6248:"a2ab5d86",6359:"bd85ffac",6403:"7bbc0b76",6418:"1bbc0b1c",6743:"7284575f",6853:"3fcc87c9",6901:"4427aa46",7077:"1959be70",7205:"8f6a9129",7226:"e260e0bb",7287:"ed2f6563",7459:"439d46c1",7464:"9578a8cf",7647:"4337ba13",7830:"baa3bf50",7852:"6a4b619d",7918:"17896441",7920:"1a4e3797",8018:"a36c58ef",8128:"882ec15a",8242:"db2cdc18",8256:"caf99389",8353:"8573b819",8371:"b2fd7883",8425:"b89f0a14",8518:"a7bd4aaa",8592:"common",8610:"6875c492",8705:"3aada504",8722:"87171524",8858:"18e2b0e6",8883:"4a075682",9054:"71589d69",9062:"7742897f",9211:"3ff744e5",9302:"73db2c80",9322:"6b31a8a6",9323:"03f1273c",9661:"5e95c892",9858:"2f791d74",9904:"4920f1c1"}[e]||e)+"."+{53:"01309a56",238:"79c51a33",257:"29f0a76d",265:"813ca6d8",521:"4da916aa",569:"fb55e916",792:"2eed1b9f",1105:"d5f9ca1c",1176:"06dfba62",1217:"51fb7ae4",1233:"e17904a9",1246:"717f6ab1",1429:"a80c8f3a",1544:"98b45421",1637:"e8e0fc46",1794:"e2a257fc",2052:"e6dfac3e",2288:"05502399",2354:"f796350f",2386:"6535b08f",2450:"57eee4a6",2452:"eda2b695",2522:"d503a690",2535:"72888ceb",2623:"20be53ae",2744:"0dcd4caf",2991:"f445aa54",3077:"ec211b6c",3089:"12d955b9",3133:"e25e8b17",3151:"abe60f61",3207:"4fbe6e1a",3237:"ddfb409c",3325:"991b933e",3416:"68639e3a",3604:"02b33958",3608:"232b6e1e",3666:"47ca112a",4013:"cb7b74b9",4368:"128bf18f",4374:"034a45c2",4454:"c03e5688",4461:"f2d9c338",4464:"4cda9ff8",4706:"14ddc0cf",4752:"18270ee9",4765:"8497b9e5",4886:"c7118e88",5019:"c6b3874f",5069:"2114efe5",5263:"fe91f323",5289:"e5472747",5362:"4214b336",5400:"fc9e2d0e",5525:"7c7e6e95",5691:"3b703be7",5721:"dfd88c83",5821:"dadc252f",5863:"2eb7f002",5963:"95b404f2",6055:"d0f650da",6075:"2b2c293c",6103:"24051080",6248:"2d6dac43",6359:"258dbedd",6403:"eff6cef3",6418:"3cbf31e7",6483:"8cfdbf0a",6743:"1ac6645a",6853:"66d976e3",6901:"ff74a020",7077:"c9000d48",7205:"3827bcbe",7226:"f74f94f3",7287:"4c6ce198",7459:"72fa70ef",7464:"b35c0405",7647:"b3c2b65b",7830:"1d826914",7852:"bc0801a7",7918:"709566f5",7920:"239539f2",8018:"27097d61",8128:"aebee9ab",8242:"c66149a6",8256:"073c9d26",8353:"4db709ba",8371:"3ca98b55",8425:"fb13e7eb",8443:"8491f7a7",8518:"4c3f5583",8592:"003b386d",8610:"0cc727b1",8705:"6f8c9447",8722:"7140f9a0",8858:"4d8911e7",8883:"2894b75e",9054:"15698dae",9062:"a0b90690",9211:"c2da2da1",9302:"5e1bbeab",9322:"3d253da7",9323:"dee61db6",9661:"eb5b4ff8",9677:"5cadf8fe",9858:"be14426b",9904:"ec58b76c"}[e]+".js",t.miniCssF=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},f="openfga.dev:",t.l=(e,a,c,b)=>{if(d[e])d[e].push(a);else{var r,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==f+c){r=l;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",f+c),r.src=e),d[e]=[a];var u=(a,c)=>{r.onerror=r.onload=null,clearTimeout(s);var f=d[e];if(delete d[e],r.parentNode&&r.parentNode.removeChild(r),f&&f.forEach((e=>e(c))),a)return a(c)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),o&&document.head.appendChild(r)}},t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),t.p="/pr-preview/pr-673/",t.gca=function(e){return e={15369573:"2052",17896441:"7918",87171524:"8722","935f2afb":"53",eab217cf:"238","6990fd21":"257","87c4c920":"265","97140aee":"521","78aaed86":"569","124a5e3d":"792","9c4cd4c4":"1105","116d061d":"1176",a09a1188:"1217","1bd78af1":"1233",a8eadec8:"1246","33b74eba":"1429","5dfc8d6a":"1544","7f7d033b":"1637","4204f988":"1794","30d9c7f8":"2288","5ccffc9c":"2354",bb879dcd:"2386",acf022e4:"2450","63b646c1":"2452","9b914286":"2522","814f3328":"2535","487f279c":"2623","3827dd5a":"2744","3759cf4b":"2991","6786195a":"3077",a6aa9e1f:"3089",e072f248:"3133",cb8ccc1a:"3151","3d83e150":"3207","1df93b7f":"3237",da16da38:"3325",e23d3c5f:"3416","9e4087bc":"3608","18eda3ee":"3666","01a85c17":"4013",a94703ab:"4368","30325ba4":"4374","33eec91e":"4454",e4a0c232:"4461",f5ba7293:"4464","78431c72":"4706","3652cf2a":"4752","63be8f5d":"4765","87a4c587":"4886","4c2069ba":"5019","65966a7a":"5069",c0e854c3:"5263","028b1cc5":"5289",d3d4dca1:"5362","5352c875":"5400","3a456eb6":"5691","0938166f":"5721","34a3e208":"5863",a33f8907:"5963","76c18be1":"6055","3a191a7b":"6075",ccc49370:"6103",a2ab5d86:"6248",bd85ffac:"6359","7bbc0b76":"6403","1bbc0b1c":"6418","7284575f":"6743","3fcc87c9":"6853","4427aa46":"6901","1959be70":"7077","8f6a9129":"7205",e260e0bb:"7226",ed2f6563:"7287","439d46c1":"7459","9578a8cf":"7464","4337ba13":"7647",baa3bf50:"7830","6a4b619d":"7852","1a4e3797":"7920",a36c58ef:"8018","882ec15a":"8128",db2cdc18:"8242",caf99389:"8256","8573b819":"8353",b2fd7883:"8371",b89f0a14:"8425",a7bd4aaa:"8518",common:"8592","6875c492":"8610","3aada504":"8705","18e2b0e6":"8858","4a075682":"8883","71589d69":"9054","7742897f":"9062","3ff744e5":"9211","73db2c80":"9302","6b31a8a6":"9322","03f1273c":"9323","5e95c892":"9661","2f791d74":"9858","4920f1c1":"9904"}[e]||e,t.p+t.u(e)},(()=>{var e={1303:0,532:0};t.f.j=(a,c)=>{var d=t.o(e,a)?e[a]:void 0;if(0!==d)if(d)c.push(d[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((c,f)=>d=e[a]=[c,f]));c.push(d[2]=f);var b=t.p+t.u(a),r=new Error;t.l(b,(c=>{if(t.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var f=c&&("load"===c.type?"missing":c.type),b=c&&c.target&&c.target.src;r.message="Loading chunk "+a+" failed.\n("+f+": "+b+")",r.name="ChunkLoadError",r.type=f,r.request=b,d[1](r)}}),"chunk-"+a,a)}},t.O.j=a=>0===e[a];var a=(a,c)=>{var d,f,b=c[0],r=c[1],o=c[2],n=0;if(b.some((a=>0!==e[a]))){for(d in r)t.o(r,d)&&(t.m[d]=r[d]);if(o)var i=o(t)}for(a&&a(c);n<b.length;n++)f=b[n],t.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return t.O(i)},c=self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();