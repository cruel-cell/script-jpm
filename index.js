const _0xe31757=_0x2236;function _0x2236(_0x54add8,_0x3ae958){const _0x9a7ad3=_0x9a7a();return _0x2236=function(_0x223620,_0x42c911){_0x223620=_0x223620-0xff;let _0x3af1fe=_0x9a7ad3[_0x223620];return _0x3af1fe;},_0x2236(_0x54add8,_0x3ae958);}(function(_0x1e814d,_0x359015){const _0x274d64=_0x2236,_0x564a9b=_0x1e814d();while(!![]){try{const _0x22074e=parseInt(_0x274d64(0x12b))/0x1*(parseInt(_0x274d64(0x143))/0x2)+-parseInt(_0x274d64(0x121))/0x3*(parseInt(_0x274d64(0x119))/0x4)+parseInt(_0x274d64(0x136))/0x5*(-parseInt(_0x274d64(0x103))/0x6)+-parseInt(_0x274d64(0x146))/0x7+-parseInt(_0x274d64(0x142))/0x8+parseInt(_0x274d64(0x130))/0x9+parseInt(_0x274d64(0x127))/0xa;if(_0x22074e===_0x359015)break;else _0x564a9b['push'](_0x564a9b['shift']());}catch(_0x824b92){_0x564a9b['push'](_0x564a9b['shift']());}}}(_0x9a7a,0xbfab9));function _0x9a7a(){const _0x4d1cca=['generate','Connection\x20Closed','8221520URPgpA','red','cli-color','key','6igNvmL','closed','bold','toLowerCase','append','13374225uAEJHy','Metode\x20koneksi\x20tidak\x20valid.\x20Pilih\x20\x22qr\x22\x20atau\x20\x22pairing\x22.','write','Please\x20scan\x20the\x20QR\x20code\x20displayed\x20above.','green','toString','5575ZJoctm','type','Pilih\x20metode\x20koneksi\x20(qr/pairing):\x20','status','question','./config','output','connection.update','stdout','creds','connected','pairing','7778384TiFFPY','389968KpeDHB','qrcode-terminal','conversation','9738701RlEdsi','fromMe','close',']\x20Nomor\x20','messages','sessions','Message\x20is\x20undefined\x20or\x20empty','1122jgKrHd','creds.update','text','path','\x0d\x20Pairing\x20Code\x20:\x20','messages.upsert','authState','unknown','@s.whatsapp.net','trim','/sessions/','@whiskeysockets/baileys','error','participant','loggedOut','includes','stdin','extendedTextMessage','log','statusCode','connecting\x20...','Connection\x20Success','24bpdnSe','Masukkan\x20nomor\x20telepon:\x20','silent','split','Failed\x20to\x20connect\x20to\x20WhatsApp:','pino','./lib/utils','message','60477AYPXJj','\x20tidak\x20diizinkan\x20untuk\x20chat\x20ke\x20bot.','yellow','readline'];_0x9a7a=function(){return _0x4d1cca;};return _0x9a7a();}const fs=require('fs'),path=require(_0xe31757(0x106)),{default:makeWASocket,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion}=require(_0xe31757(0x10e)),{Boom}=require('@hapi/boom'),P=require(_0xe31757(0x11e)),qrcode=require(_0xe31757(0x144)),readline=require(_0xe31757(0x124)),clc=require(_0xe31757(0x129)),{numberAllowed}=require(_0xe31757(0x13b)),{deleteFolderRecursive,ChangeStatus,getStatus,handleCommand,displayTime}=require(_0xe31757(0x11f)),basePath=__dirname,status=getStatus(basePath+'/sessions/');async function connectToWhatsApp(_0x23d3a6=null){const _0x21d907=_0xe31757;try{const {state:_0x329120,saveCreds:_0x120c26}=await useMultiFileAuthState('sessions'),{version:_0x5d7e2d}=await fetchLatestBaileysVersion(),_0x4f8762=makeWASocket({'version':_0x5d7e2d,'auth':_0x329120,'logger':P({'level':_0x21d907(0x11b)})});_0x4f8762['ev']['on'](_0x21d907(0x104),_0x120c26),_0x4f8762['ev']['on'](_0x21d907(0x13d),_0x2e32fa=>handleConnectionUpdate(_0x4f8762,_0x2e32fa,_0x23d3a6)),_0x4f8762['ev']['on'](_0x21d907(0x108),_0x24eb56=>handleIncomingMessages(_0x4f8762,_0x24eb56));}catch(_0x2361fd){console[_0x21d907(0x10f)](_0x21d907(0x11d),_0x2361fd);}}async function handleConnectionUpdate(_0x38be44,_0x1abba1,_0x2ec11e){const _0x144dc9=_0xe31757,{connection:_0x2d9c3d,lastDisconnect:_0x8c4e2e,qr:_0x2cc883}=_0x1abba1;let _0xab41b4=![];if(pairingMethod==='qr'&&_0x2cc883)qrcode[_0x144dc9(0x125)](_0x2cc883,{'small':!![]}),console['log'](clc[_0x144dc9(0x128)]['bold'](_0x144dc9(0x133)));else{if(pairingMethod===_0x144dc9(0x141)&&_0x2ec11e&&!_0x38be44[_0x144dc9(0x109)][_0x144dc9(0x13f)]['registered']&&!_0xab41b4){const _0x15cc25=_0x2ec11e[_0x144dc9(0x135)](),_0x28e995=_0x15f97f=>new Promise(_0x51b633=>setTimeout(_0x51b633,_0x15f97f));await _0x28e995(0xbb8),_0xab41b4=!![];const _0x33c3a6=await _0x38be44['requestPairingCode'](_0x15cc25[_0x144dc9(0x10c)]());process[_0x144dc9(0x13e)][_0x144dc9(0x132)](_0x144dc9(0x107)+_0x33c3a6);}}if(_0x2d9c3d===_0x144dc9(0x148)){const _0x3f585c=_0x8c4e2e?.[_0x144dc9(0x10f)]?.[_0x144dc9(0x13c)]?.[_0x144dc9(0x116)]!==DisconnectReason[_0x144dc9(0x111)];console[_0x144dc9(0x115)](clc[_0x144dc9(0x128)][_0x144dc9(0x12d)](_0x144dc9(0x126))),ChangeStatus(basePath+_0x144dc9(0x10d),_0x144dc9(0x12c)),_0x3f585c&&connectToWhatsApp();}else _0x2d9c3d==='open'&&(console['log'](clc[_0x144dc9(0x134)](_0x144dc9(0x118))),ChangeStatus(basePath+_0x144dc9(0x10d),'connected'));}async function handleIncomingMessages(_0x18f3fc,_0x53d9b1){const _0x54b905=_0xe31757;try{const _0x134731=_0x53d9b1[_0x54b905(0x100)]?.[0x0];if(!_0x134731)throw new Error(_0x54b905(0x102));const _0x3507b1=_0x53d9b1?.[_0x54b905(0x137)]??![];if(_0x3507b1&&_0x3507b1==_0x54b905(0x12f))return![];const _0x4b83be=Boolean(_0x134731[_0x54b905(0x12a)]?.[_0x54b905(0x110)]),_0x261773=_0x134731['key']?.['remoteJid'],_0x1f0d7d=_0x134731?.[_0x54b905(0x12a)],_0x1b99e3=_0x4b83be?_0x134731[_0x54b905(0x12a)]?.[_0x54b905(0x110)]?.[_0x54b905(0x11c)](_0x54b905(0x10b))[0x0]??_0x54b905(0x10a):_0x261773?.[_0x54b905(0x11c)](_0x54b905(0x10b))[0x0]??_0x54b905(0x10a),_0x587869=_0x134731['key']?.[_0x54b905(0x147)]??![],_0x22b8f7=_0x134731?.[_0x54b905(0x139)]??![],_0x3dc3dc=_0x134731[_0x54b905(0x120)]?.[_0x54b905(0x114)]?.[_0x54b905(0x105)]??_0x134731[_0x54b905(0x120)]?.[_0x54b905(0x145)]??'';if(!numberAllowed[_0x54b905(0x112)](_0x1b99e3)&&!_0x587869)return console[_0x54b905(0x115)](clc[_0x54b905(0x128)]('['+displayTime()+_0x54b905(0xff)+_0x1b99e3+_0x54b905(0x122))),![];_0x3dc3dc&&await handleCommand(_0x18f3fc,_0x261773,_0x3dc3dc[_0x54b905(0x10c)]()[_0x54b905(0x12e)](),_0x1f0d7d,_0x1b99e3);}catch(_0x911906){console[_0x54b905(0x115)](clc[_0x54b905(0x123)]['underline']('['+displayTime()+']\x20Failed\x20to\x20handle\x20incoming\x20message!')),console[_0x54b905(0x115)](_0x911906);}}let pairingMethod='';if(status&&status==_0xe31757(0x140))console[_0xe31757(0x115)](clc['green'](_0xe31757(0x117))),connectToWhatsApp();else{const rl=readline['createInterface']({'input':process[_0xe31757(0x113)],'output':process[_0xe31757(0x13e)]});deleteFolderRecursive(basePath,_0xe31757(0x101)),rl[_0xe31757(0x13a)](_0xe31757(0x138),_0x2fe97b=>{const _0x38dfa1=_0xe31757;_0x2fe97b==='qr'||_0x2fe97b==='pairing'?(pairingMethod=_0x2fe97b,_0x2fe97b===_0x38dfa1(0x141)?rl[_0x38dfa1(0x13a)](_0x38dfa1(0x11a),_0x2832d0=>{const _0x38d290=_0x38dfa1;connectToWhatsApp(_0x2832d0[_0x38d290(0x10c)]()),rl[_0x38d290(0x148)]();}):(connectToWhatsApp(),rl[_0x38dfa1(0x148)]())):(console[_0x38dfa1(0x115)](clc[_0x38dfa1(0x128)][_0x38dfa1(0x12d)](_0x38dfa1(0x131))),rl['close']());});}