
var OGVDemuxerOggW = (() => {
  var _scriptDir = typeof document != 'undefined' ? document.currentScript?.src : undefined;
  if (typeof __filename != 'undefined') _scriptDir ||= __filename;
  return (
function(moduleArg = {}) {

var a=moduleArg,g,h,readyPromise=new Promise((b,c)=>{g=b;h=c}),l=Object.assign({},a),m="object"==typeof window,n="function"==typeof importScripts,p="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,q="",r,t,u;
if(p){var fs=require("fs"),v=require("path");q=n?v.dirname(q)+"/":__dirname+"/";r=(b,c)=>{b=w(b)?new URL(b):v.normalize(b);return fs.readFileSync(b,c?void 0:"utf8")};u=b=>{b=r(b,!0);b.buffer||(b=new Uint8Array(b));return b};t=(b,c,d,e=!0)=>{b=w(b)?new URL(b):v.normalize(b);fs.readFile(b,e?void 0:"utf8",(f,k)=>{f?d(f):c(e?k.buffer:k)})};process.argv.slice(2)}else if(m||n)n?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),_scriptDir&&(q=_scriptDir),
q.startsWith("blob:")?q="":q=q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1),r=b=>{var c=new XMLHttpRequest;c.open("GET",b,!1);c.send(null);return c.responseText},n&&(u=b=>{var c=new XMLHttpRequest;c.open("GET",b,!1);c.responseType="arraybuffer";c.send(null);return new Uint8Array(c.response)}),t=(b,c,d)=>{var e=new XMLHttpRequest;e.open("GET",b,!0);e.responseType="arraybuffer";e.onload=()=>{200==e.status||0==e.status&&e.response?c(e.response):d()};e.onerror=d;e.send(null)};a.print||console.log.bind(console);
var x=a.printErr||console.error.bind(console);Object.assign(a,l);l=null;var y;a.wasmBinary&&(y=a.wasmBinary);var z,A=!1,B;function C(){var b=z.buffer;a.HEAP8=new Int8Array(b);a.HEAP16=new Int16Array(b);a.HEAPU8=B=new Uint8Array(b);a.HEAPU16=new Uint16Array(b);a.HEAP32=new Int32Array(b);a.HEAPU32=new Uint32Array(b);a.HEAPF32=new Float32Array(b);a.HEAPF64=new Float64Array(b)}var D=[],E=[],F=[];function G(){var b=a.preRun.shift();D.unshift(b)}
var H=0,I=null,J=null,K=b=>b.startsWith("data:application/octet-stream;base64,"),w=b=>b.startsWith("file://"),L;L="ogv-demuxer-ogg-wasm.wasm";if(!K(L)){var M=L;L=a.locateFile?a.locateFile(M,q):q+M}function N(b){if(b==L&&y)return new Uint8Array(y);if(u)return u(b);throw"both async and sync fetching of the wasm failed";}
function O(b){if(!y&&(m||n)){if("function"==typeof fetch&&!w(b))return fetch(b,{credentials:"same-origin"}).then(c=>{if(!c.ok)throw`failed to load wasm binary file at '${b}'`;return c.arrayBuffer()}).catch(()=>N(b));if(t)return new Promise((c,d)=>{t(b,e=>c(new Uint8Array(e)),d)})}return Promise.resolve().then(()=>N(b))}
function P(b,c,d){return O(b).then(e=>WebAssembly.instantiate(e,c)).then(d,e=>{x(`failed to asynchronously prepare wasm: ${e}`);a.onAbort?.(e);e="Aborted("+e+")";x(e);A=!0;e=new WebAssembly.RuntimeError(e+". Build with -sASSERTIONS for more info.");h(e);throw e;})}
function Q(b,c){var d=L;return y||"function"!=typeof WebAssembly.instantiateStreaming||K(d)||w(d)||p||"function"!=typeof fetch?P(d,b,c):fetch(d,{credentials:"same-origin"}).then(e=>WebAssembly.instantiateStreaming(e,b).then(c,function(f){x(`wasm streaming compile failed: ${f}`);x("falling back to ArrayBuffer instantiation");return P(d,b,c)}))}
var R=b=>{for(;0<b.length;)b.shift()(a)},S={f:(b,c,d)=>B.copyWithin(b,c,c+d),d:b=>{var c=B.length;b>>>=0;if(2147483648<b)return!1;for(var d=1;4>=d;d*=2){var e=c*(1+.2/d);e=Math.min(e,b+100663296);var f=Math;e=Math.max(b,e);a:{f=(f.min.call(f,2147483648,e+(65536-e%65536)%65536)-z.buffer.byteLength+65535)/65536;try{z.grow(f);C();var k=1;break a}catch(ba){}k=void 0}if(k)return!0}return!1},e:()=>52,a:function(b,c,d,e){var f=z.buffer;a.audioPackets.push({data:f.slice?f.slice(b,b+c):(new Uint8Array(new Uint8Array(f,
b,c))).buffer,timestamp:d,discardPadding:e})},c:function(b,c){function d(e){for(var f="",k=new Uint8Array(z.buffer);0!=k[e];e++)f+=String.fromCharCode(k[e]);return f}b&&(a.videoCodec=d(b));c&&(a.audioCodec=d(c));b=a._ogv_demuxer_media_duration();a.duration=0<=b?b:NaN;a.loadedMetadata=!0},b:function(b,c,d,e,f){var k=z.buffer;a.videoPackets.push({data:k.slice?k.slice(b,b+c):(new Uint8Array(new Uint8Array(k,b,c))).buffer,timestamp:d,keyframeTimestamp:e,isKeyframe:!!f})}},T=function(){function b(d){T=
d.exports;z=T.g;C();E.unshift(T.h);H--;a.monitorRunDependencies?.(H);0==H&&(null!==I&&(clearInterval(I),I=null),J&&(d=J,J=null,d()));return T}var c={a:S};H++;a.monitorRunDependencies?.(H);if(a.instantiateWasm)try{return a.instantiateWasm(c,b)}catch(d){x(`Module.instantiateWasm callback failed with error: ${d}`),h(d)}Q(c,function(d){b(d.instance)}).catch(h);return{}}();a._ogv_demuxer_init=()=>(a._ogv_demuxer_init=T.i)();a._ogv_demuxer_receive_input=(b,c)=>(a._ogv_demuxer_receive_input=T.j)(b,c);
a._ogv_demuxer_process=()=>(a._ogv_demuxer_process=T.k)();a._ogv_demuxer_destroy=()=>(a._ogv_demuxer_destroy=T.l)();a._ogv_demuxer_media_length=()=>(a._ogv_demuxer_media_length=T.m)();a._ogv_demuxer_media_duration=()=>(a._ogv_demuxer_media_duration=T.n)();a._ogv_demuxer_seekable=()=>(a._ogv_demuxer_seekable=T.o)();a._ogv_demuxer_keypoint_offset=b=>(a._ogv_demuxer_keypoint_offset=T.p)(b);a._ogv_demuxer_seek_to_keypoint=b=>(a._ogv_demuxer_seek_to_keypoint=T.q)(b);
a._ogv_demuxer_flush=()=>(a._ogv_demuxer_flush=T.r)();a._malloc=b=>(a._malloc=T.t)(b);a._free=b=>(a._free=T.u)(b);var U;J=function aa(){U||V();U||(J=aa)};
function V(){function b(){if(!U&&(U=!0,a.calledRun=!0,!A)){R(E);g(a);if(a.onRuntimeInitialized)a.onRuntimeInitialized();if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;){var c=a.postRun.shift();F.unshift(c)}R(F)}}if(!(0<H)){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)G();R(D);0<H||(a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},1);b()},1)):b())}}
if(a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);0<a.preInit.length;)a.preInit.pop()();V();var W,X,Y;Y="undefined"===typeof performance||"undefined"===typeof performance.now?Date.now:performance.now.bind(performance);function Z(b){var c=Y();b=b();c=Y()-c;a.cpuTime+=c;return b}a.loadedMetadata=!1;a.videoCodec=null;a.audioCodec=null;a.duration=NaN;a.onseek=null;a.cpuTime=0;a.audioPackets=[];Object.defineProperty(a,"hasAudio",{get:function(){return a.loadedMetadata&&a.audioCodec}});
Object.defineProperty(a,"audioReady",{get:function(){return 0<a.audioPackets.length}});Object.defineProperty(a,"audioTimestamp",{get:function(){return 0<a.audioPackets.length?a.audioPackets[0].timestamp:-1}});a.videoPackets=[];Object.defineProperty(a,"hasVideo",{get:function(){return a.loadedMetadata&&a.videoCodec}});Object.defineProperty(a,"frameReady",{get:function(){return 0<a.videoPackets.length}});
Object.defineProperty(a,"frameTimestamp",{get:function(){return 0<a.videoPackets.length?a.videoPackets[0].timestamp:-1}});Object.defineProperty(a,"keyframeTimestamp",{get:function(){return 0<a.videoPackets.length?a.videoPackets[0].keyframeTimestamp:-1}});Object.defineProperty(a,"nextKeyframeTimestamp",{get:function(){for(var b=0;b<a.videoPackets.length;b++){var c=a.videoPackets[b];if(c.isKeyframe)return c.timestamp}return-1}});Object.defineProperty(a,"processing",{get:function(){return!1}});
Object.defineProperty(a,"seekable",{get:function(){return!!a._ogv_demuxer_seekable()}});a.init=function(b){Z(function(){a._ogv_demuxer_init()});b()};a.receiveInput=function(b,c){Z(function(){var d=b.byteLength;W&&X>=d||(W&&a._free(W),X=d,W=a._malloc(X));var e=W;(new Uint8Array(z.buffer,e,d)).set(new Uint8Array(b));a._ogv_demuxer_receive_input(e,d)});c()};a.process=function(b){var c=Z(function(){return a._ogv_demuxer_process()});b(!!c)};
a.dequeueVideoPacket=function(b){if(a.videoPackets.length){var c=a.videoPackets.shift().data;b(c)}else b(null)};a.dequeueAudioPacket=function(b){if(a.audioPackets.length){var c=a.audioPackets.shift();b(c.data,c.discardPadding)}else b(null)};a.getKeypointOffset=function(b,c){var d=Z(function(){return a._ogv_demuxer_keypoint_offset(1E3*b)});c(d)};
a.seekToKeypoint=function(b,c){var d=Z(function(){return a._ogv_demuxer_seek_to_keypoint(1E3*b)});d&&(a.audioPackets.splice(0,a.audioPackets.length),a.videoPackets.splice(0,a.videoPackets.length));c(!!d)};a.flush=function(b){Z(function(){a.audioPackets.splice(0,a.audioPackets.length);a.videoPackets.splice(0,a.videoPackets.length);a._ogv_demuxer_flush()});b()};a.close=function(){};


  return readyPromise
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = OGVDemuxerOggW;
else if (typeof define === 'function' && define['amd'])
  define([], () => OGVDemuxerOggW);
