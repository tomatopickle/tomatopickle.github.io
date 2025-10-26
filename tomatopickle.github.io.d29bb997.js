// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"7SvX3":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "ae5be248d29bb997";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"kyksZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _typedJs = require("typed.js");
var _typedJsDefault = parcelHelpers.interopDefault(_typedJs);
var _alpinejs = require("alpinejs");
var _alpinejsDefault = parcelHelpers.interopDefault(_alpinejs);
var _languageColorsJson = require("./data/language_colors.json");
var _languageColorsJsonDefault = parcelHelpers.interopDefault(_languageColorsJson);
window.Alpine = (0, _alpinejsDefault.default);
(0, _alpinejsDefault.default).store('languages', []);
(0, _alpinejsDefault.default).store('pinnedRepos', []);
(0, _alpinejsDefault.default).start();
var generateStars = function() {
    var $galaxy = document.querySelector(".galaxy");
    var iterator = 0;
    while(iterator <= 100){
        var xposition = Math.random();
        var yposition = Math.random();
        var star_type = Math.floor(Math.random() * 3 + 1);
        var position = {
            "x": parseFloat(getComputedStyle($galaxy, null).width.replace("px", "")) * xposition + 'px',
            "y": parseFloat(getComputedStyle($galaxy, null).height.replace("px", "")) * yposition + 'px'
        };
        let star = document.createElement("div");
        $galaxy.appendChild(star);
        star.outerHTML = '<div class="star star-type' + star_type + '" style=top:' + position.y + ';left:' + position.x + '></div>';
        iterator++;
    }
};
async function getPinnedRepos() {
    let response = await fetch("https://gh-pinned-repos-tsj7ta5xfhep.deno.dev/?username=tomatopickle");
    if (response.ok) {
        let json = await response.json();
        (0, _alpinejsDefault.default).store('pinnedRepos', json);
    } else alert("HTTP-Error: " + response.status);
}
async function getMostUsedLanguages() {
    let response = await fetch("https://api.github.com/users/tomatopickle/repos");
    let languages = {};
    let repoNo = 0;
    let percentages = [];
    if (response.ok) {
        let json = await response.json();
        for(var index in json){
            const repo = json[index];
            if (repo.language != null) {
                if (!languages[repo.language]) languages[repo.language] = 0;
                languages[repo.language]++;
                repoNo++;
            }
        }
        for(var i in languages){
            for(var color in 0, _languageColorsJsonDefault.default)if (color.toLowerCase() == i.toLowerCase()) percentages.push({
                name: i,
                percentage: Math.round(languages[i] / repoNo * 100),
                color: (0, _languageColorsJsonDefault.default)[color].color
            });
        }
        (0, _alpinejsDefault.default).store('languages', percentages);
    } else alert("HTTP-Error: " + response.status);
}
generateStars();
getMostUsedLanguages();
getPinnedRepos();
new (0, _typedJsDefault.default)('#about_brief', {
    strings: [
        "Full stack web developer",
        "Loves Vue and Stylus",
        "let backend_experience = 'nodejs';",
        "Currently a student"
    ],
    typeSpeed: 75,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
}); // window.addEventListener("scroll", function () {
 //     console.log("scrolled");
 //     scrollFunction()
 // }, false);
 // let scrollUpButton = document.getElementById("scroll_up_button");
 // function scrollFunction() {
 //     console.log("scrolled")
 //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
 //         scrollUpButton.classList.add("open")
 //     } else {
 //         scrollUpButton.classList.remove("open")
 //     }
 // }

},{"typed.js":"bqw1l","alpinejs":"144A4","./data/language_colors.json":"ftm0y","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bqw1l":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>i);
function t() {
    return t = Object.assign ? Object.assign.bind() : function(t) {
        for(var s = 1; s < arguments.length; s++){
            var e = arguments[s];
            for(var n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        }
        return t;
    }, t.apply(this, arguments);
}
var s = {
    strings: [
        "These are the default values...",
        "You know what you should do?",
        "Use your own!",
        "Have a great day!"
    ],
    stringsElement: null,
    typeSpeed: 0,
    startDelay: 0,
    backSpeed: 0,
    smartBackspace: !0,
    shuffle: !1,
    backDelay: 700,
    fadeOut: !1,
    fadeOutClass: "typed-fade-out",
    fadeOutDelay: 500,
    loop: !1,
    loopCount: Infinity,
    showCursor: !0,
    cursorChar: "|",
    autoInsertCss: !0,
    attr: null,
    bindInputFocusEvents: !1,
    contentType: "html",
    onBegin: function(t) {},
    onComplete: function(t) {},
    preStringTyped: function(t, s) {},
    onStringTyped: function(t, s) {},
    onLastStringBackspaced: function(t) {},
    onTypingPaused: function(t, s) {},
    onTypingResumed: function(t, s) {},
    onReset: function(t) {},
    onStop: function(t, s) {},
    onStart: function(t, s) {},
    onDestroy: function(t) {}
}, e = new /*#__PURE__*/ (function() {
    function e() {}
    var n = e.prototype;
    return n.load = function(e, n, i) {
        if (e.el = "string" == typeof i ? document.querySelector(i) : i, e.options = t({}, s, n), e.isInput = "input" === e.el.tagName.toLowerCase(), e.attr = e.options.attr, e.bindInputFocusEvents = e.options.bindInputFocusEvents, e.showCursor = !e.isInput && e.options.showCursor, e.cursorChar = e.options.cursorChar, e.cursorBlinking = !0, e.elContent = e.attr ? e.el.getAttribute(e.attr) : e.el.textContent, e.contentType = e.options.contentType, e.typeSpeed = e.options.typeSpeed, e.startDelay = e.options.startDelay, e.backSpeed = e.options.backSpeed, e.smartBackspace = e.options.smartBackspace, e.backDelay = e.options.backDelay, e.fadeOut = e.options.fadeOut, e.fadeOutClass = e.options.fadeOutClass, e.fadeOutDelay = e.options.fadeOutDelay, e.isPaused = !1, e.strings = e.options.strings.map(function(t) {
            return t.trim();
        }), e.stringsElement = "string" == typeof e.options.stringsElement ? document.querySelector(e.options.stringsElement) : e.options.stringsElement, e.stringsElement) {
            e.strings = [], e.stringsElement.style.cssText = "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";
            var r = Array.prototype.slice.apply(e.stringsElement.children), o = r.length;
            if (o) for(var a = 0; a < o; a += 1)e.strings.push(r[a].innerHTML.trim());
        }
        for(var u in e.strPos = 0, e.currentElContent = this.getCurrentElContent(e), e.currentElContent && e.currentElContent.length > 0 && (e.strPos = e.currentElContent.length - 1, e.strings.unshift(e.currentElContent)), e.sequence = [], e.strings)e.sequence[u] = u;
        e.arrayPos = 0, e.stopNum = 0, e.loop = e.options.loop, e.loopCount = e.options.loopCount, e.curLoop = 0, e.shuffle = e.options.shuffle, e.pause = {
            status: !1,
            typewrite: !0,
            curString: "",
            curStrPos: 0
        }, e.typingComplete = !1, e.autoInsertCss = e.options.autoInsertCss, e.autoInsertCss && (this.appendCursorAnimationCss(e), this.appendFadeOutAnimationCss(e));
    }, n.getCurrentElContent = function(t) {
        return t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent;
    }, n.appendCursorAnimationCss = function(t) {
        var s = "data-typed-js-cursor-css";
        if (t.showCursor && !document.querySelector("[" + s + "]")) {
            var e = document.createElement("style");
            e.setAttribute(s, "true"), e.innerHTML = "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ", document.body.appendChild(e);
        }
    }, n.appendFadeOutAnimationCss = function(t) {
        var s = "data-typed-fadeout-js-css";
        if (t.fadeOut && !document.querySelector("[" + s + "]")) {
            var e = document.createElement("style");
            e.setAttribute(s, "true"), e.innerHTML = "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ", document.body.appendChild(e);
        }
    }, e;
}()), n = new /*#__PURE__*/ (function() {
    function t() {}
    var s = t.prototype;
    return s.typeHtmlChars = function(t, s, e) {
        if ("html" !== e.contentType) return s;
        var n = t.substring(s).charAt(0);
        if ("<" === n || "&" === n) {
            var i;
            for(i = "<" === n ? ">" : ";"; t.substring(s + 1).charAt(0) !== i && !(1 + ++s > t.length););
            s++;
        }
        return s;
    }, s.backSpaceHtmlChars = function(t, s, e) {
        if ("html" !== e.contentType) return s;
        var n = t.substring(s).charAt(0);
        if (">" === n || ";" === n) {
            var i;
            for(i = ">" === n ? "<" : "&"; t.substring(s - 1).charAt(0) !== i && !(--s < 0););
            s--;
        }
        return s;
    }, t;
}()), i = /*#__PURE__*/ function() {
    function t(t, s) {
        e.load(this, s, t), this.begin();
    }
    var s = t.prototype;
    return s.toggle = function() {
        this.pause.status ? this.start() : this.stop();
    }, s.stop = function() {
        this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this));
    }, s.start = function() {
        this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this));
    }, s.destroy = function() {
        this.reset(!1), this.options.onDestroy(this);
    }, s.reset = function(t) {
        void 0 === t && (t = !0), clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin());
    }, s.begin = function() {
        var t = this;
        this.options.onBegin(this), this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function() {
            0 === t.strPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos) : t.backspace(t.strings[t.sequence[t.arrayPos]], t.strPos);
        }, this.startDelay);
    }, s.typewrite = function(t, s) {
        var e = this;
        this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
        var i = this.humanizer(this.typeSpeed), r = 1;
        !0 !== this.pause.status ? this.timeout = setTimeout(function() {
            s = n.typeHtmlChars(t, s, e);
            var i = 0, o = t.substring(s);
            if ("^" === o.charAt(0) && /^\^\d+/.test(o)) {
                var a = 1;
                a += (o = /\d+/.exec(o)[0]).length, i = parseInt(o), e.temporaryPause = !0, e.options.onTypingPaused(e.arrayPos, e), t = t.substring(0, s) + t.substring(s + a), e.toggleBlinking(!0);
            }
            if ("`" === o.charAt(0)) {
                for(; "`" !== t.substring(s + r).charAt(0) && (r++, !(s + r > t.length)););
                var u = t.substring(0, s), p = t.substring(u.length + 1, s + r), c = t.substring(s + r + 1);
                t = u + p + c, r--;
            }
            e.timeout = setTimeout(function() {
                e.toggleBlinking(!1), s >= t.length ? e.doneTyping(t, s) : e.keepTyping(t, s, r), e.temporaryPause && (e.temporaryPause = !1, e.options.onTypingResumed(e.arrayPos, e));
            }, i);
        }, i) : this.setPauseStatus(t, s, !0);
    }, s.keepTyping = function(t, s, e) {
        0 === s && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this));
        var n = t.substring(0, s += e);
        this.replaceText(n), this.typewrite(t, s);
    }, s.doneTyping = function(t, s) {
        var e = this;
        this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
            e.backspace(t, s);
        }, this.backDelay));
    }, s.backspace = function(t, s) {
        var e = this;
        if (!0 !== this.pause.status) {
            if (this.fadeOut) return this.initFadeOut();
            this.toggleBlinking(!1);
            var i = this.humanizer(this.backSpeed);
            this.timeout = setTimeout(function() {
                s = n.backSpaceHtmlChars(t, s, e);
                var i = t.substring(0, s);
                if (e.replaceText(i), e.smartBackspace) {
                    var r = e.strings[e.arrayPos + 1];
                    e.stopNum = r && i === r.substring(0, s) ? s : 0;
                }
                s > e.stopNum ? (s--, e.backspace(t, s)) : s <= e.stopNum && (e.arrayPos++, e.arrayPos === e.strings.length ? (e.arrayPos = 0, e.options.onLastStringBackspaced(), e.shuffleStringsIfNeeded(), e.begin()) : e.typewrite(e.strings[e.sequence[e.arrayPos]], s));
            }, i);
        } else this.setPauseStatus(t, s, !1);
    }, s.complete = function() {
        this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0;
    }, s.setPauseStatus = function(t, s, e) {
        this.pause.typewrite = e, this.pause.curString = t, this.pause.curStrPos = s;
    }, s.toggleBlinking = function(t) {
        this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t, t ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")));
    }, s.humanizer = function(t) {
        return Math.round(Math.random() * t / 2) + t;
    }, s.shuffleStringsIfNeeded = function() {
        this.shuffle && (this.sequence = this.sequence.sort(function() {
            return Math.random() - .5;
        }));
    }, s.initFadeOut = function() {
        var t = this;
        return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function() {
            t.arrayPos++, t.replaceText(""), t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0);
        }, this.fadeOutDelay);
    }, s.replaceText = function(t) {
        this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t;
    }, s.bindFocusEvents = function() {
        var t = this;
        this.isInput && (this.el.addEventListener("focus", function(s) {
            t.stop();
        }), this.el.addEventListener("blur", function(s) {
            t.el.value && 0 !== t.el.value.length || t.start();
        }));
    }, s.insertCursor = function() {
        this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", !0), this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
    }, t;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"144A4":[function(require,module,exports,__globalThis) {
// packages/alpinejs/src/scheduler.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Alpine", ()=>src_default);
parcelHelpers.export(exports, "default", ()=>module_default);
var flushPending = false;
var flushing = false;
var queue = [];
var lastFlushedIndex = -1;
function scheduler(callback) {
    queueJob(callback);
}
function queueJob(job) {
    if (!queue.includes(job)) queue.push(job);
    queueFlush();
}
function dequeueJob(job) {
    let index = queue.indexOf(job);
    if (index !== -1 && index > lastFlushedIndex) queue.splice(index, 1);
}
function queueFlush() {
    if (!flushing && !flushPending) {
        flushPending = true;
        queueMicrotask(flushJobs);
    }
}
function flushJobs() {
    flushPending = false;
    flushing = true;
    for(let i = 0; i < queue.length; i++){
        queue[i]();
        lastFlushedIndex = i;
    }
    queue.length = 0;
    lastFlushedIndex = -1;
    flushing = false;
}
// packages/alpinejs/src/reactivity.js
var reactive;
var effect;
var release;
var raw;
var shouldSchedule = true;
function disableEffectScheduling(callback) {
    shouldSchedule = false;
    callback();
    shouldSchedule = true;
}
function setReactivityEngine(engine) {
    reactive = engine.reactive;
    release = engine.release;
    effect = (callback)=>engine.effect(callback, {
            scheduler: (task)=>{
                if (shouldSchedule) scheduler(task);
                else task();
            }
        });
    raw = engine.raw;
}
function overrideEffect(override) {
    effect = override;
}
function elementBoundEffect(el) {
    let cleanup2 = ()=>{};
    let wrappedEffect = (callback)=>{
        let effectReference = effect(callback);
        if (!el._x_effects) {
            el._x_effects = /* @__PURE__ */ new Set();
            el._x_runEffects = ()=>{
                el._x_effects.forEach((i)=>i());
            };
        }
        el._x_effects.add(effectReference);
        cleanup2 = ()=>{
            if (effectReference === void 0) return;
            el._x_effects.delete(effectReference);
            release(effectReference);
        };
        return effectReference;
    };
    return [
        wrappedEffect,
        ()=>{
            cleanup2();
        }
    ];
}
function watch(getter, callback) {
    let firstTime = true;
    let oldValue;
    let effectReference = effect(()=>{
        let value = getter();
        JSON.stringify(value);
        if (!firstTime) queueMicrotask(()=>{
            callback(value, oldValue);
            oldValue = value;
        });
        else oldValue = value;
        firstTime = false;
    });
    return ()=>release(effectReference);
}
// packages/alpinejs/src/mutation.js
var onAttributeAddeds = [];
var onElRemoveds = [];
var onElAddeds = [];
function onElAdded(callback) {
    onElAddeds.push(callback);
}
function onElRemoved(el, callback) {
    if (typeof callback === "function") {
        if (!el._x_cleanups) el._x_cleanups = [];
        el._x_cleanups.push(callback);
    } else {
        callback = el;
        onElRemoveds.push(callback);
    }
}
function onAttributesAdded(callback) {
    onAttributeAddeds.push(callback);
}
function onAttributeRemoved(el, name, callback) {
    if (!el._x_attributeCleanups) el._x_attributeCleanups = {};
    if (!el._x_attributeCleanups[name]) el._x_attributeCleanups[name] = [];
    el._x_attributeCleanups[name].push(callback);
}
function cleanupAttributes(el, names) {
    if (!el._x_attributeCleanups) return;
    Object.entries(el._x_attributeCleanups).forEach(([name, value])=>{
        if (names === void 0 || names.includes(name)) {
            value.forEach((i)=>i());
            delete el._x_attributeCleanups[name];
        }
    });
}
function cleanupElement(el) {
    el._x_effects?.forEach(dequeueJob);
    while(el._x_cleanups?.length)el._x_cleanups.pop()();
}
var observer = new MutationObserver(onMutate);
var currentlyObserving = false;
function startObservingMutations() {
    observer.observe(document, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeOldValue: true
    });
    currentlyObserving = true;
}
function stopObservingMutations() {
    flushObserver();
    observer.disconnect();
    currentlyObserving = false;
}
var queuedMutations = [];
function flushObserver() {
    let records = observer.takeRecords();
    queuedMutations.push(()=>records.length > 0 && onMutate(records));
    let queueLengthWhenTriggered = queuedMutations.length;
    queueMicrotask(()=>{
        if (queuedMutations.length === queueLengthWhenTriggered) while(queuedMutations.length > 0)queuedMutations.shift()();
    });
}
function mutateDom(callback) {
    if (!currentlyObserving) return callback();
    stopObservingMutations();
    let result = callback();
    startObservingMutations();
    return result;
}
var isCollecting = false;
var deferredMutations = [];
function deferMutations() {
    isCollecting = true;
}
function flushAndStopDeferringMutations() {
    isCollecting = false;
    onMutate(deferredMutations);
    deferredMutations = [];
}
function onMutate(mutations) {
    if (isCollecting) {
        deferredMutations = deferredMutations.concat(mutations);
        return;
    }
    let addedNodes = [];
    let removedNodes = /* @__PURE__ */ new Set();
    let addedAttributes = /* @__PURE__ */ new Map();
    let removedAttributes = /* @__PURE__ */ new Map();
    for(let i = 0; i < mutations.length; i++){
        if (mutations[i].target._x_ignoreMutationObserver) continue;
        if (mutations[i].type === "childList") {
            mutations[i].removedNodes.forEach((node)=>{
                if (node.nodeType !== 1) return;
                if (!node._x_marker) return;
                removedNodes.add(node);
            });
            mutations[i].addedNodes.forEach((node)=>{
                if (node.nodeType !== 1) return;
                if (removedNodes.has(node)) {
                    removedNodes.delete(node);
                    return;
                }
                if (node._x_marker) return;
                addedNodes.push(node);
            });
        }
        if (mutations[i].type === "attributes") {
            let el = mutations[i].target;
            let name = mutations[i].attributeName;
            let oldValue = mutations[i].oldValue;
            let add2 = ()=>{
                if (!addedAttributes.has(el)) addedAttributes.set(el, []);
                addedAttributes.get(el).push({
                    name,
                    value: el.getAttribute(name)
                });
            };
            let remove = ()=>{
                if (!removedAttributes.has(el)) removedAttributes.set(el, []);
                removedAttributes.get(el).push(name);
            };
            if (el.hasAttribute(name) && oldValue === null) add2();
            else if (el.hasAttribute(name)) {
                remove();
                add2();
            } else remove();
        }
    }
    removedAttributes.forEach((attrs, el)=>{
        cleanupAttributes(el, attrs);
    });
    addedAttributes.forEach((attrs, el)=>{
        onAttributeAddeds.forEach((i)=>i(el, attrs));
    });
    for (let node of removedNodes){
        if (addedNodes.some((i)=>i.contains(node))) continue;
        onElRemoveds.forEach((i)=>i(node));
    }
    for (let node of addedNodes){
        if (!node.isConnected) continue;
        onElAddeds.forEach((i)=>i(node));
    }
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
}
// packages/alpinejs/src/scope.js
function scope(node) {
    return mergeProxies(closestDataStack(node));
}
function addScopeToNode(node, data2, referenceNode) {
    node._x_dataStack = [
        data2,
        ...closestDataStack(referenceNode || node)
    ];
    return ()=>{
        node._x_dataStack = node._x_dataStack.filter((i)=>i !== data2);
    };
}
function closestDataStack(node) {
    if (node._x_dataStack) return node._x_dataStack;
    if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) return closestDataStack(node.host);
    if (!node.parentNode) return [];
    return closestDataStack(node.parentNode);
}
function mergeProxies(objects) {
    return new Proxy({
        objects
    }, mergeProxyTrap);
}
var mergeProxyTrap = {
    ownKeys ({ objects }) {
        return Array.from(new Set(objects.flatMap((i)=>Object.keys(i))));
    },
    has ({ objects }, name) {
        if (name == Symbol.unscopables) return false;
        return objects.some((obj)=>Object.prototype.hasOwnProperty.call(obj, name) || Reflect.has(obj, name));
    },
    get ({ objects }, name, thisProxy) {
        if (name == "toJSON") return collapseProxies;
        return Reflect.get(objects.find((obj)=>Reflect.has(obj, name)) || {}, name, thisProxy);
    },
    set ({ objects }, name, value, thisProxy) {
        const target = objects.find((obj)=>Object.prototype.hasOwnProperty.call(obj, name)) || objects[objects.length - 1];
        const descriptor = Object.getOwnPropertyDescriptor(target, name);
        if (descriptor?.set && descriptor?.get) return descriptor.set.call(thisProxy, value) || true;
        return Reflect.set(target, name, value);
    }
};
function collapseProxies() {
    let keys = Reflect.ownKeys(this);
    return keys.reduce((acc, key)=>{
        acc[key] = Reflect.get(this, key);
        return acc;
    }, {});
}
// packages/alpinejs/src/interceptor.js
function initInterceptors(data2) {
    let isObject2 = (val)=>typeof val === "object" && !Array.isArray(val) && val !== null;
    let recurse = (obj, basePath = "")=>{
        Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }])=>{
            if (enumerable === false || value === void 0) return;
            if (typeof value === "object" && value !== null && value.__v_skip) return;
            let path = basePath === "" ? key : `${basePath}.${key}`;
            if (typeof value === "object" && value !== null && value._x_interceptor) obj[key] = value.initialize(data2, path, key);
            else if (isObject2(value) && value !== obj && !(value instanceof Element)) recurse(value, path);
        });
    };
    return recurse(data2);
}
function interceptor(callback, mutateObj = ()=>{}) {
    let obj = {
        initialValue: void 0,
        _x_interceptor: true,
        initialize (data2, path, key) {
            return callback(this.initialValue, ()=>get(data2, path), (value)=>set(data2, path, value), path, key);
        }
    };
    mutateObj(obj);
    return (initialValue)=>{
        if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
            let initialize = obj.initialize.bind(obj);
            obj.initialize = (data2, path, key)=>{
                let innerValue = initialValue.initialize(data2, path, key);
                obj.initialValue = innerValue;
                return initialize(data2, path, key);
            };
        } else obj.initialValue = initialValue;
        return obj;
    };
}
function get(obj, path) {
    return path.split(".").reduce((carry, segment)=>carry[segment], obj);
}
function set(obj, path, value) {
    if (typeof path === "string") path = path.split(".");
    if (path.length === 1) obj[path[0]] = value;
    else if (path.length === 0) throw error;
    else {
        if (obj[path[0]]) return set(obj[path[0]], path.slice(1), value);
        else {
            obj[path[0]] = {};
            return set(obj[path[0]], path.slice(1), value);
        }
    }
}
// packages/alpinejs/src/magics.js
var magics = {};
function magic(name, callback) {
    magics[name] = callback;
}
function injectMagics(obj, el) {
    let memoizedUtilities = getUtilities(el);
    Object.entries(magics).forEach(([name, callback])=>{
        Object.defineProperty(obj, `$${name}`, {
            get () {
                return callback(el, memoizedUtilities);
            },
            enumerable: false
        });
    });
    return obj;
}
function getUtilities(el) {
    let [utilities, cleanup2] = getElementBoundUtilities(el);
    let utils = {
        interceptor,
        ...utilities
    };
    onElRemoved(el, cleanup2);
    return utils;
}
// packages/alpinejs/src/utils/error.js
function tryCatch(el, expression, callback, ...args) {
    try {
        return callback(...args);
    } catch (e) {
        handleError(e, el, expression);
    }
}
function handleError(error2, el, expression) {
    error2 = Object.assign(error2 ?? {
        message: "No error message given."
    }, {
        el,
        expression
    });
    console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
    setTimeout(()=>{
        throw error2;
    }, 0);
}
// packages/alpinejs/src/evaluator.js
var shouldAutoEvaluateFunctions = true;
function dontAutoEvaluateFunctions(callback) {
    let cache = shouldAutoEvaluateFunctions;
    shouldAutoEvaluateFunctions = false;
    let result = callback();
    shouldAutoEvaluateFunctions = cache;
    return result;
}
function evaluate(el, expression, extras = {}) {
    let result;
    evaluateLater(el, expression)((value)=>result = value, extras);
    return result;
}
function evaluateLater(...args) {
    return theEvaluatorFunction(...args);
}
var theEvaluatorFunction = normalEvaluator;
function setEvaluator(newEvaluator) {
    theEvaluatorFunction = newEvaluator;
}
function normalEvaluator(el, expression) {
    let overriddenMagics = {};
    injectMagics(overriddenMagics, el);
    let dataStack = [
        overriddenMagics,
        ...closestDataStack(el)
    ];
    let evaluator = typeof expression === "function" ? generateEvaluatorFromFunction(dataStack, expression) : generateEvaluatorFromString(dataStack, expression, el);
    return tryCatch.bind(null, el, expression, evaluator);
}
function generateEvaluatorFromFunction(dataStack, func) {
    return (receiver = ()=>{}, { scope: scope2 = {}, params = [], context } = {})=>{
        let result = func.apply(mergeProxies([
            scope2,
            ...dataStack
        ]), params);
        runIfTypeOfFunction(receiver, result);
    };
}
var evaluatorMemo = {};
function generateFunctionFromString(expression, el) {
    if (evaluatorMemo[expression]) return evaluatorMemo[expression];
    let AsyncFunction = Object.getPrototypeOf(async function() {}).constructor;
    let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression.trim()) || /^(let|const)\s/.test(expression.trim()) ? `(async()=>{ ${expression} })()` : expression;
    const safeAsyncFunction = ()=>{
        try {
            let func2 = new AsyncFunction([
                "__self",
                "scope"
            ], `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`);
            Object.defineProperty(func2, "name", {
                value: `[Alpine] ${expression}`
            });
            return func2;
        } catch (error2) {
            handleError(error2, el, expression);
            return Promise.resolve();
        }
    };
    let func = safeAsyncFunction();
    evaluatorMemo[expression] = func;
    return func;
}
function generateEvaluatorFromString(dataStack, expression, el) {
    let func = generateFunctionFromString(expression, el);
    return (receiver = ()=>{}, { scope: scope2 = {}, params = [], context } = {})=>{
        func.result = void 0;
        func.finished = false;
        let completeScope = mergeProxies([
            scope2,
            ...dataStack
        ]);
        if (typeof func === "function") {
            let promise = func.call(context, func, completeScope).catch((error2)=>handleError(error2, el, expression));
            if (func.finished) {
                runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
                func.result = void 0;
            } else promise.then((result)=>{
                runIfTypeOfFunction(receiver, result, completeScope, params, el);
            }).catch((error2)=>handleError(error2, el, expression)).finally(()=>func.result = void 0);
        }
    };
}
function runIfTypeOfFunction(receiver, value, scope2, params, el) {
    if (shouldAutoEvaluateFunctions && typeof value === "function") {
        let result = value.apply(scope2, params);
        if (result instanceof Promise) result.then((i)=>runIfTypeOfFunction(receiver, i, scope2, params)).catch((error2)=>handleError(error2, el, value));
        else receiver(result);
    } else if (typeof value === "object" && value instanceof Promise) value.then((i)=>receiver(i));
    else receiver(value);
}
// packages/alpinejs/src/directives.js
var prefixAsString = "x-";
function prefix(subject = "") {
    return prefixAsString + subject;
}
function setPrefix(newPrefix) {
    prefixAsString = newPrefix;
}
var directiveHandlers = {};
function directive(name, callback) {
    directiveHandlers[name] = callback;
    return {
        before (directive2) {
            if (!directiveHandlers[directive2]) {
                console.warn(String.raw`Cannot find directive \`${directive2}\`. \`${name}\` will use the default order of execution`);
                return;
            }
            const pos = directiveOrder.indexOf(directive2);
            directiveOrder.splice(pos >= 0 ? pos : directiveOrder.indexOf("DEFAULT"), 0, name);
        }
    };
}
function directiveExists(name) {
    return Object.keys(directiveHandlers).includes(name);
}
function directives(el, attributes, originalAttributeOverride) {
    attributes = Array.from(attributes);
    if (el._x_virtualDirectives) {
        let vAttributes = Object.entries(el._x_virtualDirectives).map(([name, value])=>({
                name,
                value
            }));
        let staticAttributes = attributesOnly(vAttributes);
        vAttributes = vAttributes.map((attribute)=>{
            if (staticAttributes.find((attr)=>attr.name === attribute.name)) return {
                name: `x-bind:${attribute.name}`,
                value: `"${attribute.value}"`
            };
            return attribute;
        });
        attributes = attributes.concat(vAttributes);
    }
    let transformedAttributeMap = {};
    let directives2 = attributes.map(toTransformedAttributes((newName, oldName)=>transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
    return directives2.map((directive2)=>{
        return getDirectiveHandler(el, directive2);
    });
}
function attributesOnly(attributes) {
    return Array.from(attributes).map(toTransformedAttributes()).filter((attr)=>!outNonAlpineAttributes(attr));
}
var isDeferringHandlers = false;
var directiveHandlerStacks = /* @__PURE__ */ new Map();
var currentHandlerStackKey = Symbol();
function deferHandlingDirectives(callback) {
    isDeferringHandlers = true;
    let key = Symbol();
    currentHandlerStackKey = key;
    directiveHandlerStacks.set(key, []);
    let flushHandlers = ()=>{
        while(directiveHandlerStacks.get(key).length)directiveHandlerStacks.get(key).shift()();
        directiveHandlerStacks.delete(key);
    };
    let stopDeferring = ()=>{
        isDeferringHandlers = false;
        flushHandlers();
    };
    callback(flushHandlers);
    stopDeferring();
}
function getElementBoundUtilities(el) {
    let cleanups = [];
    let cleanup2 = (callback)=>cleanups.push(callback);
    let [effect3, cleanupEffect] = elementBoundEffect(el);
    cleanups.push(cleanupEffect);
    let utilities = {
        Alpine: alpine_default,
        effect: effect3,
        cleanup: cleanup2,
        evaluateLater: evaluateLater.bind(evaluateLater, el),
        evaluate: evaluate.bind(evaluate, el)
    };
    let doCleanup = ()=>cleanups.forEach((i)=>i());
    return [
        utilities,
        doCleanup
    ];
}
function getDirectiveHandler(el, directive2) {
    let noop = ()=>{};
    let handler4 = directiveHandlers[directive2.type] || noop;
    let [utilities, cleanup2] = getElementBoundUtilities(el);
    onAttributeRemoved(el, directive2.original, cleanup2);
    let fullHandler = ()=>{
        if (el._x_ignore || el._x_ignoreSelf) return;
        handler4.inline && handler4.inline(el, directive2, utilities);
        handler4 = handler4.bind(handler4, el, directive2, utilities);
        isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler4) : handler4();
    };
    fullHandler.runCleanups = cleanup2;
    return fullHandler;
}
var startingWith = (subject, replacement)=>({ name, value })=>{
        if (name.startsWith(subject)) name = name.replace(subject, replacement);
        return {
            name,
            value
        };
    };
var into = (i)=>i;
function toTransformedAttributes(callback = ()=>{}) {
    return ({ name, value })=>{
        let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform)=>{
            return transform(carry);
        }, {
            name,
            value
        });
        if (newName !== name) callback(newName, name);
        return {
            name: newName,
            value: newValue
        };
    };
}
var attributeTransformers = [];
function mapAttributes(callback) {
    attributeTransformers.push(callback);
}
function outNonAlpineAttributes({ name }) {
    return alpineAttributeRegex().test(name);
}
var alpineAttributeRegex = ()=>new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
    return ({ name, value })=>{
        let typeMatch = name.match(alpineAttributeRegex());
        let valueMatch = name.match(/:([a-zA-Z0-9\-_:]+)/);
        let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
        let original = originalAttributeOverride || transformedAttributeMap[name] || name;
        return {
            type: typeMatch ? typeMatch[1] : null,
            value: valueMatch ? valueMatch[1] : null,
            modifiers: modifiers.map((i)=>i.replace(".", "")),
            expression: value,
            original
        };
    };
}
var DEFAULT = "DEFAULT";
var directiveOrder = [
    "ignore",
    "ref",
    "data",
    "id",
    "anchor",
    "bind",
    "init",
    "for",
    "model",
    "modelable",
    "transition",
    "show",
    "if",
    DEFAULT,
    "teleport"
];
function byPriority(a, b) {
    let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
    let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
    return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
}
// packages/alpinejs/src/utils/dispatch.js
function dispatch(el, name, detail = {}) {
    el.dispatchEvent(new CustomEvent(name, {
        detail,
        bubbles: true,
        // Allows events to pass the shadow DOM barrier.
        composed: true,
        cancelable: true
    }));
}
// packages/alpinejs/src/utils/walk.js
function walk(el, callback) {
    if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
        Array.from(el.children).forEach((el2)=>walk(el2, callback));
        return;
    }
    let skip = false;
    callback(el, ()=>skip = true);
    if (skip) return;
    let node = el.firstElementChild;
    while(node){
        walk(node, callback, false);
        node = node.nextElementSibling;
    }
}
// packages/alpinejs/src/utils/warn.js
function warn(message, ...args) {
    console.warn(`Alpine Warning: ${message}`, ...args);
}
// packages/alpinejs/src/lifecycle.js
var started = false;
function start() {
    if (started) warn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems.");
    started = true;
    if (!document.body) warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
    dispatch(document, "alpine:init");
    dispatch(document, "alpine:initializing");
    startObservingMutations();
    onElAdded((el)=>initTree(el, walk));
    onElRemoved((el)=>destroyTree(el));
    onAttributesAdded((el, attrs)=>{
        directives(el, attrs).forEach((handle)=>handle());
    });
    let outNestedComponents = (el)=>!closestRoot(el.parentElement, true);
    Array.from(document.querySelectorAll(allSelectors().join(","))).filter(outNestedComponents).forEach((el)=>{
        initTree(el);
    });
    dispatch(document, "alpine:initialized");
    setTimeout(()=>{
        warnAboutMissingPlugins();
    });
}
var rootSelectorCallbacks = [];
var initSelectorCallbacks = [];
function rootSelectors() {
    return rootSelectorCallbacks.map((fn)=>fn());
}
function allSelectors() {
    return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn)=>fn());
}
function addRootSelector(selectorCallback) {
    rootSelectorCallbacks.push(selectorCallback);
}
function addInitSelector(selectorCallback) {
    initSelectorCallbacks.push(selectorCallback);
}
function closestRoot(el, includeInitSelectors = false) {
    return findClosest(el, (element)=>{
        const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
        if (selectors.some((selector)=>element.matches(selector))) return true;
    });
}
function findClosest(el, callback) {
    if (!el) return;
    if (callback(el)) return el;
    if (el._x_teleportBack) el = el._x_teleportBack;
    if (!el.parentElement) return;
    return findClosest(el.parentElement, callback);
}
function isRoot(el) {
    return rootSelectors().some((selector)=>el.matches(selector));
}
var initInterceptors2 = [];
function interceptInit(callback) {
    initInterceptors2.push(callback);
}
var markerDispenser = 1;
function initTree(el, walker = walk, intercept = ()=>{}) {
    if (findClosest(el, (i)=>i._x_ignore)) return;
    deferHandlingDirectives(()=>{
        walker(el, (el2, skip)=>{
            if (el2._x_marker) return;
            intercept(el2, skip);
            initInterceptors2.forEach((i)=>i(el2, skip));
            directives(el2, el2.attributes).forEach((handle)=>handle());
            if (!el2._x_ignore) el2._x_marker = markerDispenser++;
            el2._x_ignore && skip();
        });
    });
}
function destroyTree(root, walker = walk) {
    walker(root, (el)=>{
        cleanupElement(el);
        cleanupAttributes(el);
        delete el._x_marker;
    });
}
function warnAboutMissingPlugins() {
    let pluginDirectives = [
        [
            "ui",
            "dialog",
            [
                "[x-dialog], [x-popover]"
            ]
        ],
        [
            "anchor",
            "anchor",
            [
                "[x-anchor]"
            ]
        ],
        [
            "sort",
            "sort",
            [
                "[x-sort]"
            ]
        ]
    ];
    pluginDirectives.forEach(([plugin2, directive2, selectors])=>{
        if (directiveExists(directive2)) return;
        selectors.some((selector)=>{
            if (document.querySelector(selector)) {
                warn(`found "${selector}", but missing ${plugin2} plugin`);
                return true;
            }
        });
    });
}
// packages/alpinejs/src/nextTick.js
var tickStack = [];
var isHolding = false;
function nextTick(callback = ()=>{}) {
    queueMicrotask(()=>{
        isHolding || setTimeout(()=>{
            releaseNextTicks();
        });
    });
    return new Promise((res)=>{
        tickStack.push(()=>{
            callback();
            res();
        });
    });
}
function releaseNextTicks() {
    isHolding = false;
    while(tickStack.length)tickStack.shift()();
}
function holdNextTicks() {
    isHolding = true;
}
// packages/alpinejs/src/utils/classes.js
function setClasses(el, value) {
    if (Array.isArray(value)) return setClassesFromString(el, value.join(" "));
    else if (typeof value === "object" && value !== null) return setClassesFromObject(el, value);
    else if (typeof value === "function") return setClasses(el, value());
    return setClassesFromString(el, value);
}
function setClassesFromString(el, classString) {
    let split = (classString2)=>classString2.split(" ").filter(Boolean);
    let missingClasses = (classString2)=>classString2.split(" ").filter((i)=>!el.classList.contains(i)).filter(Boolean);
    let addClassesAndReturnUndo = (classes)=>{
        el.classList.add(...classes);
        return ()=>{
            el.classList.remove(...classes);
        };
    };
    classString = classString === true ? classString = "" : classString || "";
    return addClassesAndReturnUndo(missingClasses(classString));
}
function setClassesFromObject(el, classObject) {
    let split = (classString)=>classString.split(" ").filter(Boolean);
    let forAdd = Object.entries(classObject).flatMap(([classString, bool])=>bool ? split(classString) : false).filter(Boolean);
    let forRemove = Object.entries(classObject).flatMap(([classString, bool])=>!bool ? split(classString) : false).filter(Boolean);
    let added = [];
    let removed = [];
    forRemove.forEach((i)=>{
        if (el.classList.contains(i)) {
            el.classList.remove(i);
            removed.push(i);
        }
    });
    forAdd.forEach((i)=>{
        if (!el.classList.contains(i)) {
            el.classList.add(i);
            added.push(i);
        }
    });
    return ()=>{
        removed.forEach((i)=>el.classList.add(i));
        added.forEach((i)=>el.classList.remove(i));
    };
}
// packages/alpinejs/src/utils/styles.js
function setStyles(el, value) {
    if (typeof value === "object" && value !== null) return setStylesFromObject(el, value);
    return setStylesFromString(el, value);
}
function setStylesFromObject(el, value) {
    let previousStyles = {};
    Object.entries(value).forEach(([key, value2])=>{
        previousStyles[key] = el.style[key];
        if (!key.startsWith("--")) key = kebabCase(key);
        el.style.setProperty(key, value2);
    });
    setTimeout(()=>{
        if (el.style.length === 0) el.removeAttribute("style");
    });
    return ()=>{
        setStyles(el, previousStyles);
    };
}
function setStylesFromString(el, value) {
    let cache = el.getAttribute("style", value);
    el.setAttribute("style", value);
    return ()=>{
        el.setAttribute("style", cache || "");
    };
}
function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
// packages/alpinejs/src/utils/once.js
function once(callback, fallback = ()=>{}) {
    let called = false;
    return function() {
        if (!called) {
            called = true;
            callback.apply(this, arguments);
        } else fallback.apply(this, arguments);
    };
}
// packages/alpinejs/src/directives/x-transition.js
directive("transition", (el, { value, modifiers, expression }, { evaluate: evaluate2 })=>{
    if (typeof expression === "function") expression = evaluate2(expression);
    if (expression === false) return;
    if (!expression || typeof expression === "boolean") registerTransitionsFromHelper(el, modifiers, value);
    else registerTransitionsFromClassString(el, expression, value);
});
function registerTransitionsFromClassString(el, classString, stage) {
    registerTransitionObject(el, setClasses, "");
    let directiveStorageMap = {
        "enter": (classes)=>{
            el._x_transition.enter.during = classes;
        },
        "enter-start": (classes)=>{
            el._x_transition.enter.start = classes;
        },
        "enter-end": (classes)=>{
            el._x_transition.enter.end = classes;
        },
        "leave": (classes)=>{
            el._x_transition.leave.during = classes;
        },
        "leave-start": (classes)=>{
            el._x_transition.leave.start = classes;
        },
        "leave-end": (classes)=>{
            el._x_transition.leave.end = classes;
        }
    };
    directiveStorageMap[stage](classString);
}
function registerTransitionsFromHelper(el, modifiers, stage) {
    registerTransitionObject(el, setStyles);
    let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
    let transitioningIn = doesntSpecify || modifiers.includes("in") || [
        "enter"
    ].includes(stage);
    let transitioningOut = doesntSpecify || modifiers.includes("out") || [
        "leave"
    ].includes(stage);
    if (modifiers.includes("in") && !doesntSpecify) modifiers = modifiers.filter((i, index)=>index < modifiers.indexOf("out"));
    if (modifiers.includes("out") && !doesntSpecify) modifiers = modifiers.filter((i, index)=>index > modifiers.indexOf("out"));
    let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
    let wantsOpacity = wantsAll || modifiers.includes("opacity");
    let wantsScale = wantsAll || modifiers.includes("scale");
    let opacityValue = wantsOpacity ? 0 : 1;
    let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
    let delay = modifierValue(modifiers, "delay", 0) / 1e3;
    let origin = modifierValue(modifiers, "origin", "center");
    let property = "opacity, transform";
    let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
    let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
    let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
    if (transitioningIn) {
        el._x_transition.enter.during = {
            transformOrigin: origin,
            transitionDelay: `${delay}s`,
            transitionProperty: property,
            transitionDuration: `${durationIn}s`,
            transitionTimingFunction: easing
        };
        el._x_transition.enter.start = {
            opacity: opacityValue,
            transform: `scale(${scaleValue})`
        };
        el._x_transition.enter.end = {
            opacity: 1,
            transform: `scale(1)`
        };
    }
    if (transitioningOut) {
        el._x_transition.leave.during = {
            transformOrigin: origin,
            transitionDelay: `${delay}s`,
            transitionProperty: property,
            transitionDuration: `${durationOut}s`,
            transitionTimingFunction: easing
        };
        el._x_transition.leave.start = {
            opacity: 1,
            transform: `scale(1)`
        };
        el._x_transition.leave.end = {
            opacity: opacityValue,
            transform: `scale(${scaleValue})`
        };
    }
}
function registerTransitionObject(el, setFunction, defaultValue = {}) {
    if (!el._x_transition) el._x_transition = {
        enter: {
            during: defaultValue,
            start: defaultValue,
            end: defaultValue
        },
        leave: {
            during: defaultValue,
            start: defaultValue,
            end: defaultValue
        },
        in (before = ()=>{}, after = ()=>{}) {
            transition(el, setFunction, {
                during: this.enter.during,
                start: this.enter.start,
                end: this.enter.end
            }, before, after);
        },
        out (before = ()=>{}, after = ()=>{}) {
            transition(el, setFunction, {
                during: this.leave.during,
                start: this.leave.start,
                end: this.leave.end
            }, before, after);
        }
    };
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
    const nextTick2 = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
    let clickAwayCompatibleShow = ()=>nextTick2(show);
    if (value) {
        if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
        else el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
        return;
    }
    el._x_hidePromise = el._x_transition ? new Promise((resolve, reject)=>{
        el._x_transition.out(()=>{}, ()=>resolve(hide));
        el._x_transitioning && el._x_transitioning.beforeCancel(()=>reject({
                isFromCancelledTransition: true
            }));
    }) : Promise.resolve(hide);
    queueMicrotask(()=>{
        let closest = closestHide(el);
        if (closest) {
            if (!closest._x_hideChildren) closest._x_hideChildren = [];
            closest._x_hideChildren.push(el);
        } else nextTick2(()=>{
            let hideAfterChildren = (el2)=>{
                let carry = Promise.all([
                    el2._x_hidePromise,
                    ...(el2._x_hideChildren || []).map(hideAfterChildren)
                ]).then(([i])=>i?.());
                delete el2._x_hidePromise;
                delete el2._x_hideChildren;
                return carry;
            };
            hideAfterChildren(el).catch((e)=>{
                if (!e.isFromCancelledTransition) throw e;
            });
        });
    });
};
function closestHide(el) {
    let parent = el.parentNode;
    if (!parent) return;
    return parent._x_hidePromise ? parent : closestHide(parent);
}
function transition(el, setFunction, { during, start: start2, end } = {}, before = ()=>{}, after = ()=>{}) {
    if (el._x_transitioning) el._x_transitioning.cancel();
    if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
        before();
        after();
        return;
    }
    let undoStart, undoDuring, undoEnd;
    performTransition(el, {
        start () {
            undoStart = setFunction(el, start2);
        },
        during () {
            undoDuring = setFunction(el, during);
        },
        before,
        end () {
            undoStart();
            undoEnd = setFunction(el, end);
        },
        after,
        cleanup () {
            undoDuring();
            undoEnd();
        }
    });
}
function performTransition(el, stages) {
    let interrupted, reachedBefore, reachedEnd;
    let finish = once(()=>{
        mutateDom(()=>{
            interrupted = true;
            if (!reachedBefore) stages.before();
            if (!reachedEnd) {
                stages.end();
                releaseNextTicks();
            }
            stages.after();
            if (el.isConnected) stages.cleanup();
            delete el._x_transitioning;
        });
    });
    el._x_transitioning = {
        beforeCancels: [],
        beforeCancel (callback) {
            this.beforeCancels.push(callback);
        },
        cancel: once(function() {
            while(this.beforeCancels.length)this.beforeCancels.shift()();
            finish();
        }),
        finish
    };
    mutateDom(()=>{
        stages.start();
        stages.during();
    });
    holdNextTicks();
    requestAnimationFrame(()=>{
        if (interrupted) return;
        let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
        let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
        if (duration === 0) duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
        mutateDom(()=>{
            stages.before();
        });
        reachedBefore = true;
        requestAnimationFrame(()=>{
            if (interrupted) return;
            mutateDom(()=>{
                stages.end();
            });
            releaseNextTicks();
            setTimeout(el._x_transitioning.finish, duration + delay);
            reachedEnd = true;
        });
    });
}
function modifierValue(modifiers, key, fallback) {
    if (modifiers.indexOf(key) === -1) return fallback;
    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue) return fallback;
    if (key === "scale") {
        if (isNaN(rawValue)) return fallback;
    }
    if (key === "duration" || key === "delay") {
        let match = rawValue.match(/([0-9]+)ms/);
        if (match) return match[1];
    }
    if (key === "origin") {
        if ([
            "top",
            "right",
            "left",
            "center",
            "bottom"
        ].includes(modifiers[modifiers.indexOf(key) + 2])) return [
            rawValue,
            modifiers[modifiers.indexOf(key) + 2]
        ].join(" ");
    }
    return rawValue;
}
// packages/alpinejs/src/clone.js
var isCloning = false;
function skipDuringClone(callback, fallback = ()=>{}) {
    return (...args)=>isCloning ? fallback(...args) : callback(...args);
}
function onlyDuringClone(callback) {
    return (...args)=>isCloning && callback(...args);
}
var interceptors = [];
function interceptClone(callback) {
    interceptors.push(callback);
}
function cloneNode(from, to) {
    interceptors.forEach((i)=>i(from, to));
    isCloning = true;
    dontRegisterReactiveSideEffects(()=>{
        initTree(to, (el, callback)=>{
            callback(el, ()=>{});
        });
    });
    isCloning = false;
}
var isCloningLegacy = false;
function clone(oldEl, newEl) {
    if (!newEl._x_dataStack) newEl._x_dataStack = oldEl._x_dataStack;
    isCloning = true;
    isCloningLegacy = true;
    dontRegisterReactiveSideEffects(()=>{
        cloneTree(newEl);
    });
    isCloning = false;
    isCloningLegacy = false;
}
function cloneTree(el) {
    let hasRunThroughFirstEl = false;
    let shallowWalker = (el2, callback)=>{
        walk(el2, (el3, skip)=>{
            if (hasRunThroughFirstEl && isRoot(el3)) return skip();
            hasRunThroughFirstEl = true;
            callback(el3, skip);
        });
    };
    initTree(el, shallowWalker);
}
function dontRegisterReactiveSideEffects(callback) {
    let cache = effect;
    overrideEffect((callback2, el)=>{
        let storedEffect = cache(callback2);
        release(storedEffect);
        return ()=>{};
    });
    callback();
    overrideEffect(cache);
}
// packages/alpinejs/src/utils/bind.js
function bind(el, name, value, modifiers = []) {
    if (!el._x_bindings) el._x_bindings = reactive({});
    el._x_bindings[name] = value;
    name = modifiers.includes("camel") ? camelCase(name) : name;
    switch(name){
        case "value":
            bindInputValue(el, value);
            break;
        case "style":
            bindStyles(el, value);
            break;
        case "class":
            bindClasses(el, value);
            break;
        case "selected":
        case "checked":
            bindAttributeAndProperty(el, name, value);
            break;
        default:
            bindAttribute(el, name, value);
            break;
    }
}
function bindInputValue(el, value) {
    if (isRadio(el)) {
        if (el.attributes.value === void 0) el.value = value;
        if (window.fromModel) {
            if (typeof value === "boolean") el.checked = safeParseBoolean(el.value) === value;
            else el.checked = checkedAttrLooseCompare(el.value, value);
        }
    } else if (isCheckbox(el)) {
        if (Number.isInteger(value)) el.value = value;
        else if (!Array.isArray(value) && typeof value !== "boolean" && ![
            null,
            void 0
        ].includes(value)) el.value = String(value);
        else if (Array.isArray(value)) el.checked = value.some((val)=>checkedAttrLooseCompare(val, el.value));
        else el.checked = !!value;
    } else if (el.tagName === "SELECT") updateSelect(el, value);
    else {
        if (el.value === value) return;
        el.value = value === void 0 ? "" : value;
    }
}
function bindClasses(el, value) {
    if (el._x_undoAddedClasses) el._x_undoAddedClasses();
    el._x_undoAddedClasses = setClasses(el, value);
}
function bindStyles(el, value) {
    if (el._x_undoAddedStyles) el._x_undoAddedStyles();
    el._x_undoAddedStyles = setStyles(el, value);
}
function bindAttributeAndProperty(el, name, value) {
    bindAttribute(el, name, value);
    setPropertyIfChanged(el, name, value);
}
function bindAttribute(el, name, value) {
    if ([
        null,
        void 0,
        false
    ].includes(value) && attributeShouldntBePreservedIfFalsy(name)) el.removeAttribute(name);
    else {
        if (isBooleanAttr(name)) value = name;
        setIfChanged(el, name, value);
    }
}
function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) el.setAttribute(attrName, value);
}
function setPropertyIfChanged(el, propName, value) {
    if (el[propName] !== value) el[propName] = value;
}
function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map((value2)=>{
        return value2 + "";
    });
    Array.from(el.options).forEach((option)=>{
        option.selected = arrayWrappedValue.includes(option.value);
    });
}
function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char)=>char.toUpperCase());
}
function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
}
function safeParseBoolean(rawValue) {
    if ([
        1,
        "1",
        "true",
        "on",
        "yes",
        true
    ].includes(rawValue)) return true;
    if ([
        0,
        "0",
        "false",
        "off",
        "no",
        false
    ].includes(rawValue)) return false;
    return rawValue ? Boolean(rawValue) : null;
}
var booleanAttributes = /* @__PURE__ */ new Set([
    "allowfullscreen",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "inert",
    "ismap",
    "itemscope",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected",
    "shadowrootclonable",
    "shadowrootdelegatesfocus",
    "shadowrootserializable"
]);
function isBooleanAttr(attrName) {
    return booleanAttributes.has(attrName);
}
function attributeShouldntBePreservedIfFalsy(name) {
    return ![
        "aria-pressed",
        "aria-checked",
        "aria-expanded",
        "aria-selected"
    ].includes(name);
}
function getBinding(el, name, fallback) {
    if (el._x_bindings && el._x_bindings[name] !== void 0) return el._x_bindings[name];
    return getAttributeBinding(el, name, fallback);
}
function extractProp(el, name, fallback, extract = true) {
    if (el._x_bindings && el._x_bindings[name] !== void 0) return el._x_bindings[name];
    if (el._x_inlineBindings && el._x_inlineBindings[name] !== void 0) {
        let binding = el._x_inlineBindings[name];
        binding.extract = extract;
        return dontAutoEvaluateFunctions(()=>{
            return evaluate(el, binding.expression);
        });
    }
    return getAttributeBinding(el, name, fallback);
}
function getAttributeBinding(el, name, fallback) {
    let attr = el.getAttribute(name);
    if (attr === null) return typeof fallback === "function" ? fallback() : fallback;
    if (attr === "") return true;
    if (isBooleanAttr(name)) return !![
        name,
        "true"
    ].includes(attr);
    return attr;
}
function isCheckbox(el) {
    return el.type === "checkbox" || el.localName === "ui-checkbox" || el.localName === "ui-switch";
}
function isRadio(el) {
    return el.type === "radio" || el.localName === "ui-radio";
}
// packages/alpinejs/src/utils/debounce.js
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
// packages/alpinejs/src/utils/throttle.js
function throttle(func, limit) {
    let inThrottle;
    return function() {
        let context = this, args = arguments;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(()=>inThrottle = false, limit);
        }
    };
}
// packages/alpinejs/src/entangle.js
function entangle({ get: outerGet, set: outerSet }, { get: innerGet, set: innerSet }) {
    let firstRun = true;
    let outerHash;
    let innerHash;
    let reference = effect(()=>{
        let outer = outerGet();
        let inner = innerGet();
        if (firstRun) {
            innerSet(cloneIfObject(outer));
            firstRun = false;
        } else {
            let outerHashLatest = JSON.stringify(outer);
            let innerHashLatest = JSON.stringify(inner);
            if (outerHashLatest !== outerHash) innerSet(cloneIfObject(outer));
            else if (outerHashLatest !== innerHashLatest) outerSet(cloneIfObject(inner));
        }
        outerHash = JSON.stringify(outerGet());
        innerHash = JSON.stringify(innerGet());
    });
    return ()=>{
        release(reference);
    };
}
function cloneIfObject(value) {
    return typeof value === "object" ? JSON.parse(JSON.stringify(value)) : value;
}
// packages/alpinejs/src/plugin.js
function plugin(callback) {
    let callbacks = Array.isArray(callback) ? callback : [
        callback
    ];
    callbacks.forEach((i)=>i(alpine_default));
}
// packages/alpinejs/src/store.js
var stores = {};
var isReactive = false;
function store(name, value) {
    if (!isReactive) {
        stores = reactive(stores);
        isReactive = true;
    }
    if (value === void 0) return stores[name];
    stores[name] = value;
    initInterceptors(stores[name]);
    if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") stores[name].init();
}
function getStores() {
    return stores;
}
// packages/alpinejs/src/binds.js
var binds = {};
function bind2(name, bindings) {
    let getBindings = typeof bindings !== "function" ? ()=>bindings : bindings;
    if (name instanceof Element) return applyBindingsObject(name, getBindings());
    else binds[name] = getBindings;
    return ()=>{};
}
function injectBindingProviders(obj) {
    Object.entries(binds).forEach(([name, callback])=>{
        Object.defineProperty(obj, name, {
            get () {
                return (...args)=>{
                    return callback(...args);
                };
            }
        });
    });
    return obj;
}
function applyBindingsObject(el, obj, original) {
    let cleanupRunners = [];
    while(cleanupRunners.length)cleanupRunners.pop()();
    let attributes = Object.entries(obj).map(([name, value])=>({
            name,
            value
        }));
    let staticAttributes = attributesOnly(attributes);
    attributes = attributes.map((attribute)=>{
        if (staticAttributes.find((attr)=>attr.name === attribute.name)) return {
            name: `x-bind:${attribute.name}`,
            value: `"${attribute.value}"`
        };
        return attribute;
    });
    directives(el, attributes, original).map((handle)=>{
        cleanupRunners.push(handle.runCleanups);
        handle();
    });
    return ()=>{
        while(cleanupRunners.length)cleanupRunners.pop()();
    };
}
// packages/alpinejs/src/datas.js
var datas = {};
function data(name, callback) {
    datas[name] = callback;
}
function injectDataProviders(obj, context) {
    Object.entries(datas).forEach(([name, callback])=>{
        Object.defineProperty(obj, name, {
            get () {
                return (...args)=>{
                    return callback.bind(context)(...args);
                };
            },
            enumerable: false
        });
    });
    return obj;
}
// packages/alpinejs/src/alpine.js
var Alpine = {
    get reactive () {
        return reactive;
    },
    get release () {
        return release;
    },
    get effect () {
        return effect;
    },
    get raw () {
        return raw;
    },
    version: "3.15.0",
    flushAndStopDeferringMutations,
    dontAutoEvaluateFunctions,
    disableEffectScheduling,
    startObservingMutations,
    stopObservingMutations,
    setReactivityEngine,
    onAttributeRemoved,
    onAttributesAdded,
    closestDataStack,
    skipDuringClone,
    onlyDuringClone,
    addRootSelector,
    addInitSelector,
    interceptClone,
    addScopeToNode,
    deferMutations,
    mapAttributes,
    evaluateLater,
    interceptInit,
    setEvaluator,
    mergeProxies,
    extractProp,
    findClosest,
    onElRemoved,
    closestRoot,
    destroyTree,
    interceptor,
    // INTERNAL: not public API and is subject to change without major release.
    transition,
    // INTERNAL
    setStyles,
    // INTERNAL
    mutateDom,
    directive,
    entangle,
    throttle,
    debounce,
    evaluate,
    initTree,
    nextTick,
    prefixed: prefix,
    prefix: setPrefix,
    plugin,
    magic,
    store,
    start,
    clone,
    // INTERNAL
    cloneNode,
    // INTERNAL
    bound: getBinding,
    $data: scope,
    watch,
    walk,
    data,
    bind: bind2
};
var alpine_default = Alpine;
// node_modules/@vue/shared/dist/shared.esm-bundler.js
function makeMap(str, expectsLowerCase) {
    const map = /* @__PURE__ */ Object.create(null);
    const list = str.split(",");
    for(let i = 0; i < list.length; i++)map[list[i]] = true;
    return expectsLowerCase ? (val)=>!!map[val.toLowerCase()] : (val)=>!!map[val];
}
var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
var EMPTY_OBJ = Object.freeze({});
var EMPTY_ARR = Object.freeze([]);
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = (val, key)=>hasOwnProperty.call(val, key);
var isArray = Array.isArray;
var isMap = (val)=>toTypeString(val) === "[object Map]";
var isString = (val)=>typeof val === "string";
var isSymbol = (val)=>typeof val === "symbol";
var isObject = (val)=>val !== null && typeof val === "object";
var objectToString = Object.prototype.toString;
var toTypeString = (value)=>objectToString.call(value);
var toRawType = (value)=>{
    return toTypeString(value).slice(8, -1);
};
var isIntegerKey = (key)=>isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
var cacheStringFunction = (fn)=>{
    const cache = /* @__PURE__ */ Object.create(null);
    return (str)=>{
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
};
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction((str)=>{
    return str.replace(camelizeRE, (_, c)=>c ? c.toUpperCase() : "");
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction((str)=>str.replace(hyphenateRE, "-$1").toLowerCase());
var capitalize = cacheStringFunction((str)=>str.charAt(0).toUpperCase() + str.slice(1));
var toHandlerKey = cacheStringFunction((str)=>str ? `on${capitalize(str)}` : ``);
var hasChanged = (value, oldValue)=>value !== oldValue && (value === value || oldValue === oldValue);
// node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var targetMap = /* @__PURE__ */ new WeakMap();
var effectStack = [];
var activeEffect;
var ITERATE_KEY = Symbol("iterate");
var MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
function isEffect(fn) {
    return fn && fn._isEffect === true;
}
function effect2(fn, options = EMPTY_OBJ) {
    if (isEffect(fn)) fn = fn.raw;
    const effect3 = createReactiveEffect(fn, options);
    if (!options.lazy) effect3();
    return effect3;
}
function stop(effect3) {
    if (effect3.active) {
        cleanup(effect3);
        if (effect3.options.onStop) effect3.options.onStop();
        effect3.active = false;
    }
}
var uid = 0;
function createReactiveEffect(fn, options) {
    const effect3 = function reactiveEffect() {
        if (!effect3.active) return fn();
        if (!effectStack.includes(effect3)) {
            cleanup(effect3);
            try {
                enableTracking();
                effectStack.push(effect3);
                activeEffect = effect3;
                return fn();
            } finally{
                effectStack.pop();
                resetTracking();
                activeEffect = effectStack[effectStack.length - 1];
            }
        }
    };
    effect3.id = uid++;
    effect3.allowRecurse = !!options.allowRecurse;
    effect3._isEffect = true;
    effect3.active = true;
    effect3.raw = fn;
    effect3.deps = [];
    effect3.options = options;
    return effect3;
}
function cleanup(effect3) {
    const { deps } = effect3;
    if (deps.length) {
        for(let i = 0; i < deps.length; i++)deps[i].delete(effect3);
        deps.length = 0;
    }
}
var shouldTrack = true;
var trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
    if (!shouldTrack || activeEffect === void 0) return;
    let depsMap = targetMap.get(target);
    if (!depsMap) targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    let dep = depsMap.get(key);
    if (!dep) depsMap.set(key, dep = /* @__PURE__ */ new Set());
    if (!dep.has(activeEffect)) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
        if (activeEffect.options.onTrack) activeEffect.options.onTrack({
            effect: activeEffect,
            target,
            type,
            key
        });
    }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) return;
    const effects = /* @__PURE__ */ new Set();
    const add2 = (effectsToAdd)=>{
        if (effectsToAdd) effectsToAdd.forEach((effect3)=>{
            if (effect3 !== activeEffect || effect3.allowRecurse) effects.add(effect3);
        });
    };
    if (type === "clear") depsMap.forEach(add2);
    else if (key === "length" && isArray(target)) depsMap.forEach((dep, key2)=>{
        if (key2 === "length" || key2 >= newValue) add2(dep);
    });
    else {
        if (key !== void 0) add2(depsMap.get(key));
        switch(type){
            case "add":
                if (!isArray(target)) {
                    add2(depsMap.get(ITERATE_KEY));
                    if (isMap(target)) add2(depsMap.get(MAP_KEY_ITERATE_KEY));
                } else if (isIntegerKey(key)) add2(depsMap.get("length"));
                break;
            case "delete":
                if (!isArray(target)) {
                    add2(depsMap.get(ITERATE_KEY));
                    if (isMap(target)) add2(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
                break;
            case "set":
                if (isMap(target)) add2(depsMap.get(ITERATE_KEY));
                break;
        }
    }
    const run = (effect3)=>{
        if (effect3.options.onTrigger) effect3.options.onTrigger({
            effect: effect3,
            target,
            key,
            type,
            newValue,
            oldValue,
            oldTarget
        });
        if (effect3.options.scheduler) effect3.options.scheduler(effect3);
        else effect3();
    };
    effects.forEach(run);
}
var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key)=>Symbol[key]).filter(isSymbol));
var get2 = /* @__PURE__ */ createGetter();
var readonlyGet = /* @__PURE__ */ createGetter(true);
var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
    const instrumentations = {};
    [
        "includes",
        "indexOf",
        "lastIndexOf"
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            const arr = toRaw(this);
            for(let i = 0, l = this.length; i < l; i++)track(arr, "get", i + "");
            const res = arr[key](...args);
            if (res === -1 || res === false) return arr[key](...args.map(toRaw));
            else return res;
        };
    });
    [
        "push",
        "pop",
        "shift",
        "unshift",
        "splice"
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            pauseTracking();
            const res = toRaw(this)[key].apply(this, args);
            resetTracking();
            return res;
        };
    });
    return instrumentations;
}
function createGetter(isReadonly = false, shallow = false) {
    return function get3(target, key, receiver) {
        if (key === "__v_isReactive") return !isReadonly;
        else if (key === "__v_isReadonly") return isReadonly;
        else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) return target;
        const targetIsArray = isArray(target);
        if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) return Reflect.get(arrayInstrumentations, key, receiver);
        const res = Reflect.get(target, key, receiver);
        if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) return res;
        if (!isReadonly) track(target, "get", key);
        if (shallow) return res;
        if (isRef(res)) {
            const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
            return shouldUnwrap ? res.value : res;
        }
        if (isObject(res)) return isReadonly ? readonly(res) : reactive2(res);
        return res;
    };
}
var set2 = /* @__PURE__ */ createSetter();
function createSetter(shallow = false) {
    return function set3(target, key, value, receiver) {
        let oldValue = target[key];
        if (!shallow) {
            value = toRaw(value);
            oldValue = toRaw(oldValue);
            if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
                return true;
            }
        }
        const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
        const result = Reflect.set(target, key, value, receiver);
        if (target === toRaw(receiver)) {
            if (!hadKey) trigger(target, "add", key, value);
            else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
        }
        return result;
    };
}
function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) trigger(target, "delete", key, void 0, oldValue);
    return result;
}
function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) track(target, "has", key);
    return result;
}
function ownKeys(target) {
    track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
}
var mutableHandlers = {
    get: get2,
    set: set2,
    deleteProperty,
    has,
    ownKeys
};
var readonlyHandlers = {
    get: readonlyGet,
    set (target, key) {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    },
    deleteProperty (target, key) {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    }
};
var toReactive = (value)=>isObject(value) ? reactive2(value) : value;
var toReadonly = (value)=>isObject(value) ? readonly(value) : value;
var toShallow = (value)=>value;
var getProto = (v)=>Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly = false, isShallow = false) {
    target = target["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) !isReadonly && track(rawTarget, "get", key);
    !isReadonly && track(rawTarget, "get", rawKey);
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) return wrap(target.get(key));
    else if (has2.call(rawTarget, rawKey)) return wrap(target.get(rawKey));
    else if (target !== rawTarget) target.get(key);
}
function has$1(key, isReadonly = false) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) !isReadonly && track(rawTarget, "has", key);
    !isReadonly && track(rawTarget, "has", rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
    target = target["__v_raw"];
    !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
}
function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
        target.add(value);
        trigger(target, "add", value, value);
    }
    return this;
}
function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
    } else checkIdentityKeys(target, has2, key);
    const oldValue = get3.call(target, key);
    target.set(key, value);
    if (!hadKey) trigger(target, "add", key, value);
    else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
    return this;
}
function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
    } else checkIdentityKeys(target, has2, key);
    const oldValue = get3 ? get3.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) trigger(target, "delete", key, void 0, oldValue);
    return result;
}
function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = isMap(target) ? new Map(target) : new Set(target);
    const result = target.clear();
    if (hadItems) trigger(target, "clear", void 0, void 0, oldTarget);
    return result;
}
function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw"];
        const rawTarget = toRaw(target);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
        return target.forEach((value, key)=>{
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
        const target = this["__v_raw"];
        const rawTarget = toRaw(target);
        const targetIsMap = isMap(rawTarget);
        const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === "keys" && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        return {
            // iterator protocol
            next () {
                const { value, done } = innerIterator.next();
                return done ? {
                    value,
                    done
                } : {
                    value: isPair ? [
                        wrap(value[0]),
                        wrap(value[1])
                    ] : wrap(value),
                    done
                };
            },
            // iterable protocol
            [Symbol.iterator] () {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function(...args) {
        {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
        }
        return type === "delete" ? false : this;
    };
}
function createInstrumentations() {
    const mutableInstrumentations2 = {
        get (key) {
            return get$1(this, key);
        },
        get size () {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, false)
    };
    const shallowInstrumentations2 = {
        get (key) {
            return get$1(this, key, false, true);
        },
        get size () {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, true)
    };
    const readonlyInstrumentations2 = {
        get (key) {
            return get$1(this, key, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations2 = {
        get (key) {
            return get$1(this, key, true, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(true, true)
    };
    const iteratorMethods = [
        "keys",
        "values",
        "entries",
        Symbol.iterator
    ];
    iteratorMethods.forEach((method)=>{
        mutableInstrumentations2[method] = createIterableMethod(method, false, false);
        readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
        shallowInstrumentations2[method] = createIterableMethod(method, false, true);
        shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
    });
    return [
        mutableInstrumentations2,
        readonlyInstrumentations2,
        shallowInstrumentations2,
        shallowReadonlyInstrumentations2
    ];
}
var [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver)=>{
        if (key === "__v_isReactive") return !isReadonly;
        else if (key === "__v_isReadonly") return isReadonly;
        else if (key === "__v_raw") return target;
        return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
}
var mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
var readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
        const type = toRawType(target);
        console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
}
var reactiveMap = /* @__PURE__ */ new WeakMap();
var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
var readonlyMap = /* @__PURE__ */ new WeakMap();
var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
    switch(rawType){
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0;
    }
}
function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive2(target) {
    if (target && target["__v_isReadonly"]) return target;
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
        return target;
    }
    if (target["__v_raw"] && !(isReadonly && target["__v_isReactive"])) return target;
    const existingProxy = proxyMap.get(target);
    if (existingProxy) return existingProxy;
    const targetType = getTargetType(target);
    if (targetType === 0) return target;
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function toRaw(observed) {
    return observed && toRaw(observed["__v_raw"]) || observed;
}
function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
}
// packages/alpinejs/src/magics/$nextTick.js
magic("nextTick", ()=>nextTick);
// packages/alpinejs/src/magics/$dispatch.js
magic("dispatch", (el)=>dispatch.bind(dispatch, el));
// packages/alpinejs/src/magics/$watch.js
magic("watch", (el, { evaluateLater: evaluateLater2, cleanup: cleanup2 })=>(key, callback)=>{
        let evaluate2 = evaluateLater2(key);
        let getter = ()=>{
            let value;
            evaluate2((i)=>value = i);
            return value;
        };
        let unwatch = watch(getter, callback);
        cleanup2(unwatch);
    });
// packages/alpinejs/src/magics/$store.js
magic("store", getStores);
// packages/alpinejs/src/magics/$data.js
magic("data", (el)=>scope(el));
// packages/alpinejs/src/magics/$root.js
magic("root", (el)=>closestRoot(el));
// packages/alpinejs/src/magics/$refs.js
magic("refs", (el)=>{
    if (el._x_refs_proxy) return el._x_refs_proxy;
    el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
    return el._x_refs_proxy;
});
function getArrayOfRefObject(el) {
    let refObjects = [];
    findClosest(el, (i)=>{
        if (i._x_refs) refObjects.push(i._x_refs);
    });
    return refObjects;
}
// packages/alpinejs/src/ids.js
var globalIdMemo = {};
function findAndIncrementId(name) {
    if (!globalIdMemo[name]) globalIdMemo[name] = 0;
    return ++globalIdMemo[name];
}
function closestIdRoot(el, name) {
    return findClosest(el, (element)=>{
        if (element._x_ids && element._x_ids[name]) return true;
    });
}
function setIdRoot(el, name) {
    if (!el._x_ids) el._x_ids = {};
    if (!el._x_ids[name]) el._x_ids[name] = findAndIncrementId(name);
}
// packages/alpinejs/src/magics/$id.js
magic("id", (el, { cleanup: cleanup2 })=>(name, key = null)=>{
        let cacheKey = `${name}${key ? `-${key}` : ""}`;
        return cacheIdByNameOnElement(el, cacheKey, cleanup2, ()=>{
            let root = closestIdRoot(el, name);
            let id = root ? root._x_ids[name] : findAndIncrementId(name);
            return key ? `${name}-${id}-${key}` : `${name}-${id}`;
        });
    });
interceptClone((from, to)=>{
    if (from._x_id) to._x_id = from._x_id;
});
function cacheIdByNameOnElement(el, cacheKey, cleanup2, callback) {
    if (!el._x_id) el._x_id = {};
    if (el._x_id[cacheKey]) return el._x_id[cacheKey];
    let output = callback();
    el._x_id[cacheKey] = output;
    cleanup2(()=>{
        delete el._x_id[cacheKey];
    });
    return output;
}
// packages/alpinejs/src/magics/$el.js
magic("el", (el)=>el);
// packages/alpinejs/src/magics/index.js
warnMissingPluginMagic("Focus", "focus", "focus");
warnMissingPluginMagic("Persist", "persist", "persist");
function warnMissingPluginMagic(name, magicName, slug) {
    magic(magicName, (el)=>warn(`You can't use [$${magicName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}
// packages/alpinejs/src/directives/x-modelable.js
directive("modelable", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2, cleanup: cleanup2 })=>{
    let func = evaluateLater2(expression);
    let innerGet = ()=>{
        let result;
        func((i)=>result = i);
        return result;
    };
    let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
    let innerSet = (val)=>evaluateInnerSet(()=>{}, {
            scope: {
                "__placeholder": val
            }
        });
    let initialValue = innerGet();
    innerSet(initialValue);
    queueMicrotask(()=>{
        if (!el._x_model) return;
        el._x_removeModelListeners["default"]();
        let outerGet = el._x_model.get;
        let outerSet = el._x_model.set;
        let releaseEntanglement = entangle({
            get () {
                return outerGet();
            },
            set (value) {
                outerSet(value);
            }
        }, {
            get () {
                return innerGet();
            },
            set (value) {
                innerSet(value);
            }
        });
        cleanup2(releaseEntanglement);
    });
});
// packages/alpinejs/src/directives/x-teleport.js
directive("teleport", (el, { modifiers, expression }, { cleanup: cleanup2 })=>{
    if (el.tagName.toLowerCase() !== "template") warn("x-teleport can only be used on a <template> tag", el);
    let target = getTarget(expression);
    let clone2 = el.content.cloneNode(true).firstElementChild;
    el._x_teleport = clone2;
    clone2._x_teleportBack = el;
    el.setAttribute("data-teleport-template", true);
    clone2.setAttribute("data-teleport-target", true);
    if (el._x_forwardEvents) el._x_forwardEvents.forEach((eventName)=>{
        clone2.addEventListener(eventName, (e)=>{
            e.stopPropagation();
            el.dispatchEvent(new e.constructor(e.type, e));
        });
    });
    addScopeToNode(clone2, {}, el);
    let placeInDom = (clone3, target2, modifiers2)=>{
        if (modifiers2.includes("prepend")) target2.parentNode.insertBefore(clone3, target2);
        else if (modifiers2.includes("append")) target2.parentNode.insertBefore(clone3, target2.nextSibling);
        else target2.appendChild(clone3);
    };
    mutateDom(()=>{
        placeInDom(clone2, target, modifiers);
        skipDuringClone(()=>{
            initTree(clone2);
        })();
    });
    el._x_teleportPutBack = ()=>{
        let target2 = getTarget(expression);
        mutateDom(()=>{
            placeInDom(el._x_teleport, target2, modifiers);
        });
    };
    cleanup2(()=>mutateDom(()=>{
            clone2.remove();
            destroyTree(clone2);
        }));
});
var teleportContainerDuringClone = document.createElement("div");
function getTarget(expression) {
    let target = skipDuringClone(()=>{
        return document.querySelector(expression);
    }, ()=>{
        return teleportContainerDuringClone;
    })();
    if (!target) warn(`Cannot find x-teleport element for selector: "${expression}"`);
    return target;
}
// packages/alpinejs/src/directives/x-ignore.js
var handler = ()=>{};
handler.inline = (el, { modifiers }, { cleanup: cleanup2 })=>{
    modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
    cleanup2(()=>{
        modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
    });
};
directive("ignore", handler);
// packages/alpinejs/src/directives/x-effect.js
directive("effect", skipDuringClone((el, { expression }, { effect: effect3 })=>{
    effect3(evaluateLater(el, expression));
}));
// packages/alpinejs/src/utils/on.js
function on(el, event, modifiers, callback) {
    let listenerTarget = el;
    let handler4 = (e)=>callback(e);
    let options = {};
    let wrapHandler = (callback2, wrapper)=>(e)=>wrapper(callback2, e);
    if (modifiers.includes("dot")) event = dotSyntax(event);
    if (modifiers.includes("camel")) event = camelCase2(event);
    if (modifiers.includes("passive")) options.passive = true;
    if (modifiers.includes("capture")) options.capture = true;
    if (modifiers.includes("window")) listenerTarget = window;
    if (modifiers.includes("document")) listenerTarget = document;
    if (modifiers.includes("debounce")) {
        let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
        let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
        handler4 = debounce(handler4, wait);
    }
    if (modifiers.includes("throttle")) {
        let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
        let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
        handler4 = throttle(handler4, wait);
    }
    if (modifiers.includes("prevent")) handler4 = wrapHandler(handler4, (next, e)=>{
        e.preventDefault();
        next(e);
    });
    if (modifiers.includes("stop")) handler4 = wrapHandler(handler4, (next, e)=>{
        e.stopPropagation();
        next(e);
    });
    if (modifiers.includes("once")) handler4 = wrapHandler(handler4, (next, e)=>{
        next(e);
        listenerTarget.removeEventListener(event, handler4, options);
    });
    if (modifiers.includes("away") || modifiers.includes("outside")) {
        listenerTarget = document;
        handler4 = wrapHandler(handler4, (next, e)=>{
            if (el.contains(e.target)) return;
            if (e.target.isConnected === false) return;
            if (el.offsetWidth < 1 && el.offsetHeight < 1) return;
            if (el._x_isShown === false) return;
            next(e);
        });
    }
    if (modifiers.includes("self")) handler4 = wrapHandler(handler4, (next, e)=>{
        e.target === el && next(e);
    });
    if (isKeyEvent(event) || isClickEvent(event)) handler4 = wrapHandler(handler4, (next, e)=>{
        if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) return;
        next(e);
    });
    listenerTarget.addEventListener(event, handler4, options);
    return ()=>{
        listenerTarget.removeEventListener(event, handler4, options);
    };
}
function dotSyntax(subject) {
    return subject.replace(/-/g, ".");
}
function camelCase2(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char)=>char.toUpperCase());
}
function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
}
function kebabCase2(subject) {
    if ([
        " ",
        "_"
    ].includes(subject)) return subject;
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
}
function isKeyEvent(event) {
    return [
        "keydown",
        "keyup"
    ].includes(event);
}
function isClickEvent(event) {
    return [
        "contextmenu",
        "click",
        "mouse"
    ].some((i)=>event.includes(i));
}
function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter((i)=>{
        return ![
            "window",
            "document",
            "prevent",
            "stop",
            "once",
            "capture",
            "self",
            "away",
            "outside",
            "passive",
            "preserve-scroll"
        ].includes(i);
    });
    if (keyModifiers.includes("debounce")) {
        let debounceIndex = keyModifiers.indexOf("debounce");
        keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.includes("throttle")) {
        let debounceIndex = keyModifiers.indexOf("throttle");
        keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.length === 0) return false;
    if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0])) return false;
    const systemKeyModifiers = [
        "ctrl",
        "shift",
        "alt",
        "meta",
        "cmd",
        "super"
    ];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier)=>keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter((i)=>!selectedSystemKeyModifiers.includes(i));
    if (selectedSystemKeyModifiers.length > 0) {
        const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier)=>{
            if (modifier === "cmd" || modifier === "super") modifier = "meta";
            return e[`${modifier}Key`];
        });
        if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
            if (isClickEvent(e.type)) return false;
            if (keyToModifiers(e.key).includes(keyModifiers[0])) return false;
        }
    }
    return true;
}
function keyToModifiers(key) {
    if (!key) return [];
    key = kebabCase2(key);
    let modifierToKeyMap = {
        "ctrl": "control",
        "slash": "/",
        "space": " ",
        "spacebar": " ",
        "cmd": "meta",
        "esc": "escape",
        "up": "arrow-up",
        "down": "arrow-down",
        "left": "arrow-left",
        "right": "arrow-right",
        "period": ".",
        "comma": ",",
        "equal": "=",
        "minus": "-",
        "underscore": "_"
    };
    modifierToKeyMap[key] = key;
    return Object.keys(modifierToKeyMap).map((modifier)=>{
        if (modifierToKeyMap[modifier] === key) return modifier;
    }).filter((modifier)=>modifier);
}
// packages/alpinejs/src/directives/x-model.js
directive("model", (el, { modifiers, expression }, { effect: effect3, cleanup: cleanup2 })=>{
    let scopeTarget = el;
    if (modifiers.includes("parent")) scopeTarget = el.parentNode;
    let evaluateGet = evaluateLater(scopeTarget, expression);
    let evaluateSet;
    if (typeof expression === "string") evaluateSet = evaluateLater(scopeTarget, `${expression} = __placeholder`);
    else if (typeof expression === "function" && typeof expression() === "string") evaluateSet = evaluateLater(scopeTarget, `${expression()} = __placeholder`);
    else evaluateSet = ()=>{};
    let getValue = ()=>{
        let result;
        evaluateGet((value)=>result = value);
        return isGetterSetter(result) ? result.get() : result;
    };
    let setValue = (value)=>{
        let result;
        evaluateGet((value2)=>result = value2);
        if (isGetterSetter(result)) result.set(value);
        else evaluateSet(()=>{}, {
            scope: {
                "__placeholder": value
            }
        });
    };
    if (typeof expression === "string" && el.type === "radio") mutateDom(()=>{
        if (!el.hasAttribute("name")) el.setAttribute("name", expression);
    });
    let event = el.tagName.toLowerCase() === "select" || [
        "checkbox",
        "radio"
    ].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
    let removeListener = isCloning ? ()=>{} : on(el, event, modifiers, (e)=>{
        setValue(getInputValue(el, modifiers, e, getValue()));
    });
    if (modifiers.includes("fill")) {
        if ([
            void 0,
            null,
            ""
        ].includes(getValue()) || isCheckbox(el) && Array.isArray(getValue()) || el.tagName.toLowerCase() === "select" && el.multiple) setValue(getInputValue(el, modifiers, {
            target: el
        }, getValue()));
    }
    if (!el._x_removeModelListeners) el._x_removeModelListeners = {};
    el._x_removeModelListeners["default"] = removeListener;
    cleanup2(()=>el._x_removeModelListeners["default"]());
    if (el.form) {
        let removeResetListener = on(el.form, "reset", [], (e)=>{
            nextTick(()=>el._x_model && el._x_model.set(getInputValue(el, modifiers, {
                    target: el
                }, getValue())));
        });
        cleanup2(()=>removeResetListener());
    }
    el._x_model = {
        get () {
            return getValue();
        },
        set (value) {
            setValue(value);
        }
    };
    el._x_forceModelUpdate = (value)=>{
        if (value === void 0 && typeof expression === "string" && expression.match(/\./)) value = "";
        window.fromModel = true;
        mutateDom(()=>bind(el, "value", value));
        delete window.fromModel;
    };
    effect3(()=>{
        let value = getValue();
        if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el)) return;
        el._x_forceModelUpdate(value);
    });
});
function getInputValue(el, modifiers, event, currentValue) {
    return mutateDom(()=>{
        if (event instanceof CustomEvent && event.detail !== void 0) return event.detail !== null && event.detail !== void 0 ? event.detail : event.target.value;
        else if (isCheckbox(el)) {
            if (Array.isArray(currentValue)) {
                let newValue = null;
                if (modifiers.includes("number")) newValue = safeParseNumber(event.target.value);
                else if (modifiers.includes("boolean")) newValue = safeParseBoolean(event.target.value);
                else newValue = event.target.value;
                return event.target.checked ? currentValue.includes(newValue) ? currentValue : currentValue.concat([
                    newValue
                ]) : currentValue.filter((el2)=>!checkedAttrLooseCompare2(el2, newValue));
            } else return event.target.checked;
        } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
            if (modifiers.includes("number")) return Array.from(event.target.selectedOptions).map((option)=>{
                let rawValue = option.value || option.text;
                return safeParseNumber(rawValue);
            });
            else if (modifiers.includes("boolean")) return Array.from(event.target.selectedOptions).map((option)=>{
                let rawValue = option.value || option.text;
                return safeParseBoolean(rawValue);
            });
            return Array.from(event.target.selectedOptions).map((option)=>{
                return option.value || option.text;
            });
        } else {
            let newValue;
            if (isRadio(el)) {
                if (event.target.checked) newValue = event.target.value;
                else newValue = currentValue;
            } else newValue = event.target.value;
            if (modifiers.includes("number")) return safeParseNumber(newValue);
            else if (modifiers.includes("boolean")) return safeParseBoolean(newValue);
            else if (modifiers.includes("trim")) return newValue.trim();
            else return newValue;
        }
    });
}
function safeParseNumber(rawValue) {
    let number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric2(number) ? number : rawValue;
}
function checkedAttrLooseCompare2(valueA, valueB) {
    return valueA == valueB;
}
function isNumeric2(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
}
function isGetterSetter(value) {
    return value !== null && typeof value === "object" && typeof value.get === "function" && typeof value.set === "function";
}
// packages/alpinejs/src/directives/x-cloak.js
directive("cloak", (el)=>queueMicrotask(()=>mutateDom(()=>el.removeAttribute(prefix("cloak")))));
// packages/alpinejs/src/directives/x-init.js
addInitSelector(()=>`[${prefix("init")}]`);
directive("init", skipDuringClone((el, { expression }, { evaluate: evaluate2 })=>{
    if (typeof expression === "string") return !!expression.trim() && evaluate2(expression, {}, false);
    return evaluate2(expression, {}, false);
}));
// packages/alpinejs/src/directives/x-text.js
directive("text", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 })=>{
    let evaluate2 = evaluateLater2(expression);
    effect3(()=>{
        evaluate2((value)=>{
            mutateDom(()=>{
                el.textContent = value;
            });
        });
    });
});
// packages/alpinejs/src/directives/x-html.js
directive("html", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 })=>{
    let evaluate2 = evaluateLater2(expression);
    effect3(()=>{
        evaluate2((value)=>{
            mutateDom(()=>{
                el.innerHTML = value;
                el._x_ignoreSelf = true;
                initTree(el);
                delete el._x_ignoreSelf;
            });
        });
    });
});
// packages/alpinejs/src/directives/x-bind.js
mapAttributes(startingWith(":", into(prefix("bind:"))));
var handler2 = (el, { value, modifiers, expression, original }, { effect: effect3, cleanup: cleanup2 })=>{
    if (!value) {
        let bindingProviders = {};
        injectBindingProviders(bindingProviders);
        let getBindings = evaluateLater(el, expression);
        getBindings((bindings)=>{
            applyBindingsObject(el, bindings, original);
        }, {
            scope: bindingProviders
        });
        return;
    }
    if (value === "key") return storeKeyForXFor(el, expression);
    if (el._x_inlineBindings && el._x_inlineBindings[value] && el._x_inlineBindings[value].extract) return;
    let evaluate2 = evaluateLater(el, expression);
    effect3(()=>evaluate2((result)=>{
            if (result === void 0 && typeof expression === "string" && expression.match(/\./)) result = "";
            mutateDom(()=>bind(el, value, result, modifiers));
        }));
    cleanup2(()=>{
        el._x_undoAddedClasses && el._x_undoAddedClasses();
        el._x_undoAddedStyles && el._x_undoAddedStyles();
    });
};
handler2.inline = (el, { value, modifiers, expression })=>{
    if (!value) return;
    if (!el._x_inlineBindings) el._x_inlineBindings = {};
    el._x_inlineBindings[value] = {
        expression,
        extract: false
    };
};
directive("bind", handler2);
function storeKeyForXFor(el, expression) {
    el._x_keyExpression = expression;
}
// packages/alpinejs/src/directives/x-data.js
addRootSelector(()=>`[${prefix("data")}]`);
directive("data", (el, { expression }, { cleanup: cleanup2 })=>{
    if (shouldSkipRegisteringDataDuringClone(el)) return;
    expression = expression === "" ? "{}" : expression;
    let magicContext = {};
    injectMagics(magicContext, el);
    let dataProviderContext = {};
    injectDataProviders(dataProviderContext, magicContext);
    let data2 = evaluate(el, expression, {
        scope: dataProviderContext
    });
    if (data2 === void 0 || data2 === true) data2 = {};
    injectMagics(data2, el);
    let reactiveData = reactive(data2);
    initInterceptors(reactiveData);
    let undo = addScopeToNode(el, reactiveData);
    reactiveData["init"] && evaluate(el, reactiveData["init"]);
    cleanup2(()=>{
        reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
        undo();
    });
});
interceptClone((from, to)=>{
    if (from._x_dataStack) {
        to._x_dataStack = from._x_dataStack;
        to.setAttribute("data-has-alpine-state", true);
    }
});
function shouldSkipRegisteringDataDuringClone(el) {
    if (!isCloning) return false;
    if (isCloningLegacy) return true;
    return el.hasAttribute("data-has-alpine-state");
}
// packages/alpinejs/src/directives/x-show.js
directive("show", (el, { modifiers, expression }, { effect: effect3 })=>{
    let evaluate2 = evaluateLater(el, expression);
    if (!el._x_doHide) el._x_doHide = ()=>{
        mutateDom(()=>{
            el.style.setProperty("display", "none", modifiers.includes("important") ? "important" : void 0);
        });
    };
    if (!el._x_doShow) el._x_doShow = ()=>{
        mutateDom(()=>{
            if (el.style.length === 1 && el.style.display === "none") el.removeAttribute("style");
            else el.style.removeProperty("display");
        });
    };
    let hide = ()=>{
        el._x_doHide();
        el._x_isShown = false;
    };
    let show = ()=>{
        el._x_doShow();
        el._x_isShown = true;
    };
    let clickAwayCompatibleShow = ()=>setTimeout(show);
    let toggle = once((value)=>value ? show() : hide(), (value)=>{
        if (typeof el._x_toggleAndCascadeWithTransitions === "function") el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
        else value ? clickAwayCompatibleShow() : hide();
    });
    let oldValue;
    let firstTime = true;
    effect3(()=>evaluate2((value)=>{
            if (!firstTime && value === oldValue) return;
            if (modifiers.includes("immediate")) value ? clickAwayCompatibleShow() : hide();
            toggle(value);
            oldValue = value;
            firstTime = false;
        }));
});
// packages/alpinejs/src/directives/x-for.js
directive("for", (el, { expression }, { effect: effect3, cleanup: cleanup2 })=>{
    let iteratorNames = parseForExpression(expression);
    let evaluateItems = evaluateLater(el, iteratorNames.items);
    let evaluateKey = evaluateLater(el, // the x-bind:key expression is stored for our use instead of evaluated.
    el._x_keyExpression || "index");
    el._x_prevKeys = [];
    el._x_lookup = {};
    effect3(()=>loop(el, iteratorNames, evaluateItems, evaluateKey));
    cleanup2(()=>{
        Object.values(el._x_lookup).forEach((el2)=>mutateDom(()=>{
                destroyTree(el2);
                el2.remove();
            }));
        delete el._x_prevKeys;
        delete el._x_lookup;
    });
});
function loop(el, iteratorNames, evaluateItems, evaluateKey) {
    let isObject2 = (i)=>typeof i === "object" && !Array.isArray(i);
    let templateEl = el;
    evaluateItems((items)=>{
        if (isNumeric3(items) && items >= 0) items = Array.from(Array(items).keys(), (i)=>i + 1);
        if (items === void 0) items = [];
        let lookup = el._x_lookup;
        let prevKeys = el._x_prevKeys;
        let scopes = [];
        let keys = [];
        if (isObject2(items)) items = Object.entries(items).map(([key, value])=>{
            let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
            evaluateKey((value2)=>{
                if (keys.includes(value2)) warn("Duplicate key on x-for", el);
                keys.push(value2);
            }, {
                scope: {
                    index: key,
                    ...scope2
                }
            });
            scopes.push(scope2);
        });
        else for(let i = 0; i < items.length; i++){
            let scope2 = getIterationScopeVariables(iteratorNames, items[i], i, items);
            evaluateKey((value)=>{
                if (keys.includes(value)) warn("Duplicate key on x-for", el);
                keys.push(value);
            }, {
                scope: {
                    index: i,
                    ...scope2
                }
            });
            scopes.push(scope2);
        }
        let adds = [];
        let moves = [];
        let removes = [];
        let sames = [];
        for(let i = 0; i < prevKeys.length; i++){
            let key = prevKeys[i];
            if (keys.indexOf(key) === -1) removes.push(key);
        }
        prevKeys = prevKeys.filter((key)=>!removes.includes(key));
        let lastKey = "template";
        for(let i = 0; i < keys.length; i++){
            let key = keys[i];
            let prevIndex = prevKeys.indexOf(key);
            if (prevIndex === -1) {
                prevKeys.splice(i, 0, key);
                adds.push([
                    lastKey,
                    i
                ]);
            } else if (prevIndex !== i) {
                let keyInSpot = prevKeys.splice(i, 1)[0];
                let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
                prevKeys.splice(i, 0, keyForSpot);
                prevKeys.splice(prevIndex, 0, keyInSpot);
                moves.push([
                    keyInSpot,
                    keyForSpot
                ]);
            } else sames.push(key);
            lastKey = key;
        }
        for(let i = 0; i < removes.length; i++){
            let key = removes[i];
            if (!(key in lookup)) continue;
            mutateDom(()=>{
                destroyTree(lookup[key]);
                lookup[key].remove();
            });
            delete lookup[key];
        }
        for(let i = 0; i < moves.length; i++){
            let [keyInSpot, keyForSpot] = moves[i];
            let elInSpot = lookup[keyInSpot];
            let elForSpot = lookup[keyForSpot];
            let marker = document.createElement("div");
            mutateDom(()=>{
                if (!elForSpot) warn(`x-for ":key" is undefined or invalid`, templateEl, keyForSpot, lookup);
                elForSpot.after(marker);
                elInSpot.after(elForSpot);
                elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
                marker.before(elInSpot);
                elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
                marker.remove();
            });
            elForSpot._x_refreshXForScope(scopes[keys.indexOf(keyForSpot)]);
        }
        for(let i = 0; i < adds.length; i++){
            let [lastKey2, index] = adds[i];
            let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
            if (lastEl._x_currentIfEl) lastEl = lastEl._x_currentIfEl;
            let scope2 = scopes[index];
            let key = keys[index];
            let clone2 = document.importNode(templateEl.content, true).firstElementChild;
            let reactiveScope = reactive(scope2);
            addScopeToNode(clone2, reactiveScope, templateEl);
            clone2._x_refreshXForScope = (newScope)=>{
                Object.entries(newScope).forEach(([key2, value])=>{
                    reactiveScope[key2] = value;
                });
            };
            mutateDom(()=>{
                lastEl.after(clone2);
                skipDuringClone(()=>initTree(clone2))();
            });
            if (typeof key === "object") warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
            lookup[key] = clone2;
        }
        for(let i = 0; i < sames.length; i++)lookup[sames[i]]._x_refreshXForScope(scopes[keys.indexOf(sames[i])]);
        templateEl._x_prevKeys = keys;
    });
}
function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\s*\(|\)\s*$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch) return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].replace(stripParensRE, "").trim();
    let iteratorMatch = item.match(forIteratorRE);
    if (iteratorMatch) {
        res.item = item.replace(forIteratorRE, "").trim();
        res.index = iteratorMatch[1].trim();
        if (iteratorMatch[2]) res.collection = iteratorMatch[2].trim();
    } else res.item = item;
    return res;
}
function getIterationScopeVariables(iteratorNames, item, index, items) {
    let scopeVariables = {};
    if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
        let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i)=>i.trim());
        names.forEach((name, i)=>{
            scopeVariables[name] = item[i];
        });
    } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
        let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i)=>i.trim());
        names.forEach((name)=>{
            scopeVariables[name] = item[name];
        });
    } else scopeVariables[iteratorNames.item] = item;
    if (iteratorNames.index) scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection) scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
}
function isNumeric3(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
}
// packages/alpinejs/src/directives/x-ref.js
function handler3() {}
handler3.inline = (el, { expression }, { cleanup: cleanup2 })=>{
    let root = closestRoot(el);
    if (!root._x_refs) root._x_refs = {};
    root._x_refs[expression] = el;
    cleanup2(()=>delete root._x_refs[expression]);
};
directive("ref", handler3);
// packages/alpinejs/src/directives/x-if.js
directive("if", (el, { expression }, { effect: effect3, cleanup: cleanup2 })=>{
    if (el.tagName.toLowerCase() !== "template") warn("x-if can only be used on a <template> tag", el);
    let evaluate2 = evaluateLater(el, expression);
    let show = ()=>{
        if (el._x_currentIfEl) return el._x_currentIfEl;
        let clone2 = el.content.cloneNode(true).firstElementChild;
        addScopeToNode(clone2, {}, el);
        mutateDom(()=>{
            el.after(clone2);
            skipDuringClone(()=>initTree(clone2))();
        });
        el._x_currentIfEl = clone2;
        el._x_undoIf = ()=>{
            mutateDom(()=>{
                destroyTree(clone2);
                clone2.remove();
            });
            delete el._x_currentIfEl;
        };
        return clone2;
    };
    let hide = ()=>{
        if (!el._x_undoIf) return;
        el._x_undoIf();
        delete el._x_undoIf;
    };
    effect3(()=>evaluate2((value)=>{
            value ? show() : hide();
        }));
    cleanup2(()=>el._x_undoIf && el._x_undoIf());
});
// packages/alpinejs/src/directives/x-id.js
directive("id", (el, { expression }, { evaluate: evaluate2 })=>{
    let names = evaluate2(expression);
    names.forEach((name)=>setIdRoot(el, name));
});
interceptClone((from, to)=>{
    if (from._x_ids) to._x_ids = from._x_ids;
});
// packages/alpinejs/src/directives/x-on.js
mapAttributes(startingWith("@", into(prefix("on:"))));
directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup: cleanup2 })=>{
    let evaluate2 = expression ? evaluateLater(el, expression) : ()=>{};
    if (el.tagName.toLowerCase() === "template") {
        if (!el._x_forwardEvents) el._x_forwardEvents = [];
        if (!el._x_forwardEvents.includes(value)) el._x_forwardEvents.push(value);
    }
    let removeListener = on(el, value, modifiers, (e)=>{
        evaluate2(()=>{}, {
            scope: {
                "$event": e
            },
            params: [
                e
            ]
        });
    });
    cleanup2(()=>removeListener());
}));
// packages/alpinejs/src/directives/index.js
warnMissingPluginDirective("Collapse", "collapse", "collapse");
warnMissingPluginDirective("Intersect", "intersect", "intersect");
warnMissingPluginDirective("Focus", "trap", "focus");
warnMissingPluginDirective("Mask", "mask", "mask");
function warnMissingPluginDirective(name, directiveName, slug) {
    directive(directiveName, (el)=>warn(`You can't use [x-${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}
// packages/alpinejs/src/index.js
alpine_default.setEvaluator(normalEvaluator);
alpine_default.setReactivityEngine({
    reactive: reactive2,
    effect: effect2,
    release: stop,
    raw: toRaw
});
var src_default = alpine_default;
// packages/alpinejs/builds/module.js
var module_default = src_default;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ftm0y":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse("{\"1C Enterprise\":{\"type\":\"programming\",\"color\":\"#814CCC\",\"extensions\":[\".bsl\",\".os\"],\"tm_scope\":\"source.bsl\",\"ace_mode\":\"text\",\"language_id\":0},\"2-Dimensional Array\":{\"type\":\"data\",\"color\":\"#38761D\",\"extensions\":[\".2da\"],\"tm_scope\":\"source.2da\",\"ace_mode\":\"text\",\"language_id\":387204628},\"4D\":{\"type\":\"programming\",\"color\":\"#004289\",\"extensions\":[\".4dm\"],\"tm_scope\":\"source.4dm\",\"ace_mode\":\"text\",\"language_id\":577529595},\"ABAP\":{\"type\":\"programming\",\"color\":\"#E8274B\",\"extensions\":[\".abap\"],\"tm_scope\":\"source.abap\",\"ace_mode\":\"abap\",\"language_id\":1},\"ABAP CDS\":{\"type\":\"programming\",\"color\":\"#555e25\",\"extensions\":[\".asddls\"],\"tm_scope\":\"source.abapcds\",\"language_id\":452681853,\"ace_mode\":\"text\"},\"ABNF\":{\"type\":\"data\",\"ace_mode\":\"text\",\"extensions\":[\".abnf\"],\"tm_scope\":\"source.abnf\",\"language_id\":429},\"AGS Script\":{\"type\":\"programming\",\"color\":\"#B9D9FF\",\"aliases\":[\"ags\"],\"extensions\":[\".asc\",\".ash\"],\"tm_scope\":\"source.c++\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-c++src\",\"language_id\":2},\"AIDL\":{\"type\":\"programming\",\"color\":\"#34EB6B\",\"tm_scope\":\"source.aidl\",\"extensions\":[\".aidl\"],\"ace_mode\":\"text\",\"interpreters\":[\"aidl\"],\"language_id\":451700185},\"AL\":{\"type\":\"programming\",\"color\":\"#3AA2B5\",\"extensions\":[\".al\"],\"tm_scope\":\"source.al\",\"ace_mode\":\"text\",\"language_id\":658971832},\"AMPL\":{\"type\":\"programming\",\"color\":\"#E6EFBB\",\"extensions\":[\".ampl\",\".mod\"],\"tm_scope\":\"source.ampl\",\"ace_mode\":\"text\",\"language_id\":3},\"ANTLR\":{\"type\":\"programming\",\"color\":\"#9DC3FF\",\"extensions\":[\".g4\"],\"tm_scope\":\"source.antlr\",\"ace_mode\":\"text\",\"language_id\":4},\"API Blueprint\":{\"type\":\"markup\",\"color\":\"#2ACCA8\",\"ace_mode\":\"markdown\",\"extensions\":[\".apib\"],\"tm_scope\":\"text.html.markdown.source.gfm.apib\",\"language_id\":5},\"APL\":{\"type\":\"programming\",\"color\":\"#5A8164\",\"extensions\":[\".apl\",\".dyalog\"],\"interpreters\":[\"apl\",\"aplx\",\"dyalog\"],\"tm_scope\":\"source.apl\",\"ace_mode\":\"text\",\"codemirror_mode\":\"apl\",\"codemirror_mime_type\":\"text/apl\",\"language_id\":6},\"ASL\":{\"type\":\"programming\",\"ace_mode\":\"text\",\"extensions\":[\".asl\",\".dsl\"],\"tm_scope\":\"source.asl\",\"language_id\":124996147},\"ASN.1\":{\"type\":\"data\",\"extensions\":[\".asn\",\".asn1\"],\"tm_scope\":\"source.asn\",\"ace_mode\":\"text\",\"codemirror_mode\":\"asn.1\",\"codemirror_mime_type\":\"text/x-ttcn-asn\",\"language_id\":7},\"ASP.NET\":{\"type\":\"programming\",\"tm_scope\":\"text.html.asp\",\"color\":\"#9400ff\",\"aliases\":[\"aspx\",\"aspx-vb\"],\"extensions\":[\".asax\",\".ascx\",\".ashx\",\".asmx\",\".aspx\",\".axd\"],\"ace_mode\":\"text\",\"codemirror_mode\":\"htmlembedded\",\"codemirror_mime_type\":\"application/x-aspx\",\"language_id\":564186416},\"ATS\":{\"type\":\"programming\",\"color\":\"#1ac620\",\"aliases\":[\"ats2\"],\"extensions\":[\".dats\",\".hats\",\".sats\"],\"tm_scope\":\"source.ats\",\"ace_mode\":\"ocaml\",\"language_id\":9},\"ActionScript\":{\"type\":\"programming\",\"tm_scope\":\"source.actionscript.3\",\"color\":\"#882B0F\",\"aliases\":[\"actionscript 3\",\"actionscript3\",\"as3\"],\"extensions\":[\".as\"],\"ace_mode\":\"actionscript\",\"language_id\":10},\"Ada\":{\"type\":\"programming\",\"color\":\"#02f88c\",\"extensions\":[\".adb\",\".ada\",\".ads\"],\"aliases\":[\"ada95\",\"ada2005\"],\"tm_scope\":\"source.ada\",\"ace_mode\":\"ada\",\"language_id\":11},\"Adobe Font Metrics\":{\"type\":\"data\",\"color\":\"#fa0f00\",\"tm_scope\":\"source.afm\",\"extensions\":[\".afm\"],\"aliases\":[\"acfm\",\"adobe composite font metrics\",\"adobe multiple font metrics\",\"amfm\"],\"ace_mode\":\"text\",\"language_id\":147198098},\"Agda\":{\"type\":\"programming\",\"color\":\"#315665\",\"extensions\":[\".agda\"],\"tm_scope\":\"source.agda\",\"ace_mode\":\"text\",\"language_id\":12},\"Alloy\":{\"type\":\"programming\",\"color\":\"#64C800\",\"extensions\":[\".als\"],\"tm_scope\":\"source.alloy\",\"ace_mode\":\"text\",\"language_id\":13},\"Alpine Abuild\":{\"type\":\"programming\",\"color\":\"#0D597F\",\"group\":\"Shell\",\"aliases\":[\"abuild\",\"apkbuild\"],\"filenames\":[\"APKBUILD\"],\"tm_scope\":\"source.shell\",\"ace_mode\":\"sh\",\"codemirror_mode\":\"shell\",\"codemirror_mime_type\":\"text/x-sh\",\"language_id\":14},\"Altium Designer\":{\"type\":\"data\",\"color\":\"#A89663\",\"aliases\":[\"altium\"],\"extensions\":[\".OutJob\",\".PcbDoc\",\".PrjPCB\",\".SchDoc\"],\"tm_scope\":\"source.ini\",\"ace_mode\":\"ini\",\"language_id\":187772328},\"AngelScript\":{\"type\":\"programming\",\"color\":\"#C7D7DC\",\"extensions\":[\".as\",\".angelscript\"],\"tm_scope\":\"source.angelscript\",\"ace_mode\":\"text\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-c++src\",\"language_id\":389477596},\"Ant Build System\":{\"type\":\"data\",\"color\":\"#A9157E\",\"tm_scope\":\"text.xml.ant\",\"filenames\":[\"ant.xml\",\"build.xml\"],\"ace_mode\":\"xml\",\"codemirror_mode\":\"xml\",\"codemirror_mime_type\":\"application/xml\",\"language_id\":15},\"ApacheConf\":{\"type\":\"data\",\"color\":\"#d12127\",\"aliases\":[\"aconf\",\"apache\"],\"extensions\":[\".apacheconf\",\".vhost\"],\"filenames\":[\".htaccess\",\"apache2.conf\",\"httpd.conf\"],\"tm_scope\":\"source.apache-config\",\"ace_mode\":\"apache_conf\",\"language_id\":16},\"Apex\":{\"type\":\"programming\",\"color\":\"#1797c0\",\"extensions\":[\".cls\"],\"tm_scope\":\"source.java\",\"ace_mode\":\"java\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-java\",\"language_id\":17},\"Apollo Guidance Computer\":{\"type\":\"programming\",\"color\":\"#0B3D91\",\"group\":\"Assembly\",\"extensions\":[\".agc\"],\"tm_scope\":\"source.agc\",\"ace_mode\":\"assembly_x86\",\"language_id\":18},\"AppleScript\":{\"type\":\"programming\",\"aliases\":[\"osascript\"],\"extensions\":[\".applescript\",\".scpt\"],\"interpreters\":[\"osascript\"],\"tm_scope\":\"source.applescript\",\"ace_mode\":\"applescript\",\"color\":\"#101F1F\",\"language_id\":19},\"Arc\":{\"type\":\"programming\",\"color\":\"#aa2afe\",\"extensions\":[\".arc\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":20},\"AsciiDoc\":{\"type\":\"prose\",\"color\":\"#73a0c5\",\"ace_mode\":\"asciidoc\",\"wrap\":true,\"extensions\":[\".asciidoc\",\".adoc\",\".asc\"],\"tm_scope\":\"text.html.asciidoc\",\"language_id\":22},\"AspectJ\":{\"type\":\"programming\",\"color\":\"#a957b0\",\"extensions\":[\".aj\"],\"tm_scope\":\"source.aspectj\",\"ace_mode\":\"text\",\"language_id\":23},\"Assembly\":{\"type\":\"programming\",\"color\":\"#6E4C13\",\"aliases\":[\"asm\",\"nasm\"],\"extensions\":[\".asm\",\".a51\",\".i\",\".inc\",\".nasm\"],\"tm_scope\":\"source.assembly\",\"ace_mode\":\"assembly_x86\",\"language_id\":24},\"Astro\":{\"type\":\"markup\",\"color\":\"#ff5a03\",\"extensions\":[\".astro\"],\"tm_scope\":\"source.astro\",\"ace_mode\":\"html\",\"codemirror_mode\":\"jsx\",\"codemirror_mime_type\":\"text/jsx\",\"language_id\":578209015},\"Asymptote\":{\"type\":\"programming\",\"color\":\"#ff0000\",\"extensions\":[\".asy\"],\"interpreters\":[\"asy\"],\"tm_scope\":\"source.c++\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-kotlin\",\"language_id\":591605007},\"Augeas\":{\"type\":\"programming\",\"color\":\"#9CC134\",\"extensions\":[\".aug\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":25},\"AutoHotkey\":{\"type\":\"programming\",\"color\":\"#6594b9\",\"aliases\":[\"ahk\"],\"extensions\":[\".ahk\",\".ahkl\"],\"tm_scope\":\"source.ahk\",\"ace_mode\":\"autohotkey\",\"language_id\":26},\"AutoIt\":{\"type\":\"programming\",\"color\":\"#1C3552\",\"aliases\":[\"au3\",\"AutoIt3\",\"AutoItScript\"],\"extensions\":[\".au3\"],\"tm_scope\":\"source.autoit\",\"ace_mode\":\"autohotkey\",\"language_id\":27},\"Avro IDL\":{\"type\":\"data\",\"color\":\"#0040FF\",\"extensions\":[\".avdl\"],\"tm_scope\":\"source.avro\",\"ace_mode\":\"text\",\"language_id\":785497837},\"Awk\":{\"type\":\"programming\",\"color\":\"#c30e9b\",\"extensions\":[\".awk\",\".auk\",\".gawk\",\".mawk\",\".nawk\"],\"interpreters\":[\"awk\",\"gawk\",\"mawk\",\"nawk\"],\"tm_scope\":\"source.awk\",\"ace_mode\":\"text\",\"language_id\":28},\"BASIC\":{\"type\":\"programming\",\"extensions\":[\".bas\"],\"tm_scope\":\"source.basic\",\"ace_mode\":\"text\",\"color\":\"#ff0000\",\"language_id\":28923963},\"Ballerina\":{\"type\":\"programming\",\"extensions\":[\".bal\"],\"tm_scope\":\"source.ballerina\",\"ace_mode\":\"text\",\"color\":\"#FF5000\",\"language_id\":720859680},\"Batchfile\":{\"type\":\"programming\",\"aliases\":[\"bat\",\"batch\",\"dosbatch\",\"winbatch\"],\"extensions\":[\".bat\",\".cmd\"],\"tm_scope\":\"source.batchfile\",\"ace_mode\":\"batchfile\",\"color\":\"#C1F12E\",\"language_id\":29},\"Beef\":{\"type\":\"programming\",\"color\":\"#a52f4e\",\"extensions\":[\".bf\"],\"tm_scope\":\"source.cs\",\"ace_mode\":\"csharp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csharp\",\"language_id\":545626333},\"Befunge\":{\"type\":\"programming\",\"extensions\":[\".befunge\"],\"tm_scope\":\"source.befunge\",\"ace_mode\":\"text\",\"language_id\":30},\"Berry\":{\"type\":\"programming\",\"extensions\":[\".be\"],\"tm_scope\":\"source.berry\",\"ace_mode\":\"text\",\"color\":\"#15A13C\",\"aliases\":[\"be\"],\"language_id\":121855308},\"BibTeX\":{\"type\":\"markup\",\"color\":\"#778899\",\"group\":\"TeX\",\"extensions\":[\".bib\",\".bibtex\"],\"tm_scope\":\"text.bibtex\",\"ace_mode\":\"tex\",\"codemirror_mode\":\"stex\",\"codemirror_mime_type\":\"text/x-stex\",\"language_id\":982188347},\"Bicep\":{\"type\":\"programming\",\"color\":\"#519aba\",\"extensions\":[\".bicep\"],\"tm_scope\":\"source.bicep\",\"ace_mode\":\"text\",\"language_id\":321200902},\"Bison\":{\"type\":\"programming\",\"color\":\"#6A463F\",\"group\":\"Yacc\",\"tm_scope\":\"source.yacc\",\"extensions\":[\".bison\"],\"ace_mode\":\"text\",\"language_id\":31},\"BitBake\":{\"type\":\"programming\",\"color\":\"#00bce4\",\"tm_scope\":\"none\",\"extensions\":[\".bb\"],\"ace_mode\":\"text\",\"language_id\":32},\"Blade\":{\"type\":\"markup\",\"color\":\"#f7523f\",\"extensions\":[\".blade\",\".blade.php\"],\"tm_scope\":\"text.html.php.blade\",\"ace_mode\":\"text\",\"language_id\":33},\"BlitzBasic\":{\"type\":\"programming\",\"color\":\"#00FFAE\",\"aliases\":[\"b3d\",\"blitz3d\",\"blitzplus\",\"bplus\"],\"extensions\":[\".bb\",\".decls\"],\"tm_scope\":\"source.blitzmax\",\"ace_mode\":\"text\",\"language_id\":34},\"BlitzMax\":{\"type\":\"programming\",\"color\":\"#cd6400\",\"extensions\":[\".bmx\"],\"aliases\":[\"bmax\"],\"tm_scope\":\"source.blitzmax\",\"ace_mode\":\"text\",\"language_id\":35},\"Bluespec\":{\"type\":\"programming\",\"color\":\"#12223c\",\"extensions\":[\".bsv\"],\"tm_scope\":\"source.bsv\",\"ace_mode\":\"verilog\",\"language_id\":36},\"Boo\":{\"type\":\"programming\",\"color\":\"#d4bec1\",\"extensions\":[\".boo\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.boo\",\"language_id\":37},\"Boogie\":{\"type\":\"programming\",\"color\":\"#c80fa0\",\"extensions\":[\".bpl\"],\"interpreters\":[\"boogie\"],\"tm_scope\":\"source.boogie\",\"ace_mode\":\"text\",\"language_id\":955017407},\"Brainfuck\":{\"type\":\"programming\",\"color\":\"#2F2530\",\"extensions\":[\".b\",\".bf\"],\"tm_scope\":\"source.bf\",\"ace_mode\":\"text\",\"codemirror_mode\":\"brainfuck\",\"codemirror_mime_type\":\"text/x-brainfuck\",\"language_id\":38},\"Brightscript\":{\"type\":\"programming\",\"color\":\"#662D91\",\"extensions\":[\".brs\"],\"tm_scope\":\"source.brightscript\",\"ace_mode\":\"text\",\"language_id\":39},\"Browserslist\":{\"type\":\"data\",\"color\":\"#ffd539\",\"filenames\":[\".browserslistrc\",\"browserslist\"],\"tm_scope\":\"text.browserslist\",\"ace_mode\":\"text\",\"language_id\":153503348},\"C\":{\"type\":\"programming\",\"color\":\"#555555\",\"extensions\":[\".c\",\".cats\",\".h\",\".idc\"],\"interpreters\":[\"tcc\"],\"tm_scope\":\"source.c\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csrc\",\"language_id\":41},\"C#\":{\"type\":\"programming\",\"ace_mode\":\"csharp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csharp\",\"tm_scope\":\"source.cs\",\"color\":\"#178600\",\"aliases\":[\"csharp\",\"cake\",\"cakescript\"],\"extensions\":[\".cs\",\".cake\",\".csx\",\".linq\"],\"language_id\":42},\"C++\":{\"type\":\"programming\",\"tm_scope\":\"source.c++\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-c++src\",\"color\":\"#f34b7d\",\"aliases\":[\"cpp\"],\"extensions\":[\".cpp\",\".c++\",\".cc\",\".cp\",\".cxx\",\".h\",\".h++\",\".hh\",\".hpp\",\".hxx\",\".inc\",\".inl\",\".ino\",\".ipp\",\".ixx\",\".re\",\".tcc\",\".tpp\"],\"language_id\":43},\"C-ObjDump\":{\"type\":\"data\",\"extensions\":[\".c-objdump\"],\"tm_scope\":\"objdump.x86asm\",\"ace_mode\":\"assembly_x86\",\"language_id\":44},\"C2hs Haskell\":{\"type\":\"programming\",\"group\":\"Haskell\",\"aliases\":[\"c2hs\"],\"extensions\":[\".chs\"],\"tm_scope\":\"source.haskell\",\"ace_mode\":\"haskell\",\"codemirror_mode\":\"haskell\",\"codemirror_mime_type\":\"text/x-haskell\",\"language_id\":45},\"CAP CDS\":{\"type\":\"programming\",\"tm_scope\":\"source.cds\",\"color\":\"#0092d1\",\"aliases\":[\"cds\"],\"extensions\":[\".cds\"],\"ace_mode\":\"text\",\"language_id\":390788699},\"CIL\":{\"type\":\"data\",\"tm_scope\":\"source.cil\",\"extensions\":[\".cil\"],\"ace_mode\":\"text\",\"language_id\":29176339},\"CLIPS\":{\"type\":\"programming\",\"color\":\"#00A300\",\"extensions\":[\".clp\"],\"tm_scope\":\"source.clips\",\"ace_mode\":\"text\",\"language_id\":46},\"CMake\":{\"type\":\"programming\",\"color\":\"#DA3434\",\"extensions\":[\".cmake\",\".cmake.in\"],\"filenames\":[\"CMakeLists.txt\"],\"tm_scope\":\"source.cmake\",\"ace_mode\":\"text\",\"codemirror_mode\":\"cmake\",\"codemirror_mime_type\":\"text/x-cmake\",\"language_id\":47},\"COBOL\":{\"type\":\"programming\",\"extensions\":[\".cob\",\".cbl\",\".ccp\",\".cobol\",\".cpy\"],\"tm_scope\":\"source.cobol\",\"ace_mode\":\"cobol\",\"codemirror_mode\":\"cobol\",\"codemirror_mime_type\":\"text/x-cobol\",\"language_id\":48},\"CODEOWNERS\":{\"type\":\"data\",\"filenames\":[\"CODEOWNERS\"],\"tm_scope\":\"text.codeowners\",\"ace_mode\":\"gitignore\",\"language_id\":321684729},\"COLLADA\":{\"type\":\"data\",\"color\":\"#F1A42B\",\"extensions\":[\".dae\"],\"tm_scope\":\"text.xml\",\"ace_mode\":\"xml\",\"codemirror_mode\":\"xml\",\"codemirror_mime_type\":\"text/xml\",\"language_id\":49},\"CSON\":{\"type\":\"data\",\"color\":\"#244776\",\"tm_scope\":\"source.coffee\",\"ace_mode\":\"coffee\",\"codemirror_mode\":\"coffeescript\",\"codemirror_mime_type\":\"text/x-coffeescript\",\"extensions\":[\".cson\"],\"language_id\":424},\"CSS\":{\"type\":\"markup\",\"tm_scope\":\"source.css\",\"ace_mode\":\"css\",\"codemirror_mode\":\"css\",\"codemirror_mime_type\":\"text/css\",\"color\":\"#563d7c\",\"extensions\":[\".css\"],\"language_id\":50},\"CSV\":{\"type\":\"data\",\"color\":\"#237346\",\"ace_mode\":\"text\",\"tm_scope\":\"none\",\"extensions\":[\".csv\"],\"language_id\":51},\"CUE\":{\"type\":\"programming\",\"extensions\":[\".cue\"],\"tm_scope\":\"source.cue\",\"ace_mode\":\"text\",\"color\":\"#5886E1\",\"language_id\":356063509},\"CWeb\":{\"type\":\"programming\",\"color\":\"#00007a\",\"extensions\":[\".w\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":657332628},\"Cabal Config\":{\"type\":\"data\",\"color\":\"#483465\",\"aliases\":[\"Cabal\"],\"extensions\":[\".cabal\"],\"filenames\":[\"cabal.config\",\"cabal.project\"],\"ace_mode\":\"haskell\",\"codemirror_mode\":\"haskell\",\"codemirror_mime_type\":\"text/x-haskell\",\"tm_scope\":\"source.cabal\",\"language_id\":677095381},\"Cadence\":{\"type\":\"programming\",\"color\":\"#00ef8b\",\"ace_mode\":\"text\",\"tm_scope\":\"source.cadence\",\"extensions\":[\".cdc\"],\"language_id\":270184138},\"Cairo\":{\"type\":\"programming\",\"color\":\"#ff4a48\",\"ace_mode\":\"text\",\"tm_scope\":\"source.cairo\",\"extensions\":[\".cairo\"],\"language_id\":620599567},\"CameLIGO\":{\"type\":\"programming\",\"color\":\"#3be133\",\"extensions\":[\".mligo\"],\"tm_scope\":\"source.mligo\",\"ace_mode\":\"ocaml\",\"codemirror_mode\":\"mllike\",\"codemirror_mime_type\":\"text/x-ocaml\",\"group\":\"LigoLANG\",\"language_id\":829207807},\"Cap'n Proto\":{\"type\":\"programming\",\"color\":\"#c42727\",\"tm_scope\":\"source.capnp\",\"extensions\":[\".capnp\"],\"ace_mode\":\"text\",\"language_id\":52},\"CartoCSS\":{\"type\":\"programming\",\"aliases\":[\"Carto\"],\"extensions\":[\".mss\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.css.mss\",\"language_id\":53},\"Ceylon\":{\"type\":\"programming\",\"color\":\"#dfa535\",\"extensions\":[\".ceylon\"],\"tm_scope\":\"source.ceylon\",\"ace_mode\":\"text\",\"language_id\":54},\"Chapel\":{\"type\":\"programming\",\"color\":\"#8dc63f\",\"aliases\":[\"chpl\"],\"extensions\":[\".chpl\"],\"tm_scope\":\"source.chapel\",\"ace_mode\":\"text\",\"language_id\":55},\"Charity\":{\"type\":\"programming\",\"extensions\":[\".ch\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":56},\"ChucK\":{\"type\":\"programming\",\"color\":\"#3f8000\",\"extensions\":[\".ck\"],\"tm_scope\":\"source.java\",\"ace_mode\":\"java\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-java\",\"language_id\":57},\"Cirru\":{\"type\":\"programming\",\"color\":\"#ccccff\",\"tm_scope\":\"source.cirru\",\"ace_mode\":\"cirru\",\"extensions\":[\".cirru\"],\"language_id\":58},\"Clarion\":{\"type\":\"programming\",\"color\":\"#db901e\",\"ace_mode\":\"text\",\"extensions\":[\".clw\"],\"tm_scope\":\"source.clarion\",\"language_id\":59},\"Clarity\":{\"type\":\"programming\",\"color\":\"#5546ff\",\"ace_mode\":\"lisp\",\"extensions\":[\".clar\"],\"tm_scope\":\"source.clar\",\"language_id\":91493841},\"Classic ASP\":{\"type\":\"programming\",\"color\":\"#6a40fd\",\"tm_scope\":\"text.html.asp\",\"aliases\":[\"asp\"],\"extensions\":[\".asp\"],\"ace_mode\":\"text\",\"language_id\":8},\"Clean\":{\"type\":\"programming\",\"color\":\"#3F85AF\",\"extensions\":[\".icl\",\".dcl\"],\"tm_scope\":\"source.clean\",\"ace_mode\":\"text\",\"language_id\":60},\"Click\":{\"type\":\"programming\",\"color\":\"#E4E6F3\",\"extensions\":[\".click\"],\"tm_scope\":\"source.click\",\"ace_mode\":\"text\",\"language_id\":61},\"Clojure\":{\"type\":\"programming\",\"tm_scope\":\"source.clojure\",\"ace_mode\":\"clojure\",\"codemirror_mode\":\"clojure\",\"codemirror_mime_type\":\"text/x-clojure\",\"color\":\"#db5855\",\"extensions\":[\".clj\",\".boot\",\".cl2\",\".cljc\",\".cljs\",\".cljs.hl\",\".cljscm\",\".cljx\",\".hic\"],\"filenames\":[\"riemann.config\"],\"language_id\":62},\"Closure Templates\":{\"type\":\"markup\",\"color\":\"#0d948f\",\"ace_mode\":\"soy_template\",\"codemirror_mode\":\"soy\",\"codemirror_mime_type\":\"text/x-soy\",\"aliases\":[\"soy\"],\"extensions\":[\".soy\"],\"tm_scope\":\"text.html.soy\",\"language_id\":357046146},\"Cloud Firestore Security Rules\":{\"type\":\"data\",\"color\":\"#FFA000\",\"ace_mode\":\"less\",\"codemirror_mode\":\"css\",\"codemirror_mime_type\":\"text/css\",\"tm_scope\":\"source.firestore\",\"filenames\":[\"firestore.rules\"],\"language_id\":407996372},\"CoNLL-U\":{\"type\":\"data\",\"extensions\":[\".conllu\",\".conll\"],\"tm_scope\":\"text.conllu\",\"ace_mode\":\"text\",\"aliases\":[\"CoNLL\",\"CoNLL-X\"],\"language_id\":421026389},\"CodeQL\":{\"type\":\"programming\",\"color\":\"#140f46\",\"extensions\":[\".ql\",\".qll\"],\"tm_scope\":\"source.ql\",\"ace_mode\":\"text\",\"language_id\":424259634,\"aliases\":[\"ql\"]},\"CoffeeScript\":{\"type\":\"programming\",\"tm_scope\":\"source.coffee\",\"ace_mode\":\"coffee\",\"codemirror_mode\":\"coffeescript\",\"codemirror_mime_type\":\"text/x-coffeescript\",\"color\":\"#244776\",\"aliases\":[\"coffee\",\"coffee-script\"],\"extensions\":[\".coffee\",\"._coffee\",\".cake\",\".cjsx\",\".iced\"],\"filenames\":[\"Cakefile\"],\"interpreters\":[\"coffee\"],\"language_id\":63},\"ColdFusion\":{\"type\":\"programming\",\"ace_mode\":\"coldfusion\",\"color\":\"#ed2cd6\",\"aliases\":[\"cfm\",\"cfml\",\"coldfusion html\"],\"extensions\":[\".cfm\",\".cfml\"],\"tm_scope\":\"text.html.cfm\",\"language_id\":64},\"ColdFusion CFC\":{\"type\":\"programming\",\"color\":\"#ed2cd6\",\"group\":\"ColdFusion\",\"ace_mode\":\"coldfusion\",\"aliases\":[\"cfc\"],\"extensions\":[\".cfc\"],\"tm_scope\":\"source.cfscript\",\"language_id\":65},\"Common Lisp\":{\"type\":\"programming\",\"tm_scope\":\"source.lisp\",\"color\":\"#3fb68b\",\"aliases\":[\"lisp\"],\"extensions\":[\".lisp\",\".asd\",\".cl\",\".l\",\".lsp\",\".ny\",\".podsl\",\".sexp\"],\"interpreters\":[\"lisp\",\"sbcl\",\"ccl\",\"clisp\",\"ecl\"],\"ace_mode\":\"lisp\",\"codemirror_mode\":\"commonlisp\",\"codemirror_mime_type\":\"text/x-common-lisp\",\"language_id\":66},\"Common Workflow Language\":{\"aliases\":[\"cwl\"],\"type\":\"programming\",\"ace_mode\":\"yaml\",\"codemirror_mode\":\"yaml\",\"codemirror_mime_type\":\"text/x-yaml\",\"extensions\":[\".cwl\"],\"interpreters\":[\"cwl-runner\"],\"color\":\"#B5314C\",\"tm_scope\":\"source.cwl\",\"language_id\":988547172},\"Component Pascal\":{\"type\":\"programming\",\"color\":\"#B0CE4E\",\"extensions\":[\".cp\",\".cps\"],\"tm_scope\":\"source.pascal\",\"ace_mode\":\"pascal\",\"codemirror_mode\":\"pascal\",\"codemirror_mime_type\":\"text/x-pascal\",\"language_id\":67},\"Cool\":{\"type\":\"programming\",\"extensions\":[\".cl\"],\"tm_scope\":\"source.cool\",\"ace_mode\":\"text\",\"language_id\":68},\"Coq\":{\"type\":\"programming\",\"color\":\"#d0b68c\",\"extensions\":[\".coq\",\".v\"],\"tm_scope\":\"source.coq\",\"ace_mode\":\"text\",\"language_id\":69},\"Cpp-ObjDump\":{\"type\":\"data\",\"extensions\":[\".cppobjdump\",\".c++-objdump\",\".c++objdump\",\".cpp-objdump\",\".cxx-objdump\"],\"tm_scope\":\"objdump.x86asm\",\"aliases\":[\"c++-objdump\"],\"ace_mode\":\"assembly_x86\",\"language_id\":70},\"Creole\":{\"type\":\"prose\",\"wrap\":true,\"extensions\":[\".creole\"],\"tm_scope\":\"text.html.creole\",\"ace_mode\":\"text\",\"language_id\":71},\"Crystal\":{\"type\":\"programming\",\"color\":\"#000100\",\"extensions\":[\".cr\"],\"ace_mode\":\"ruby\",\"codemirror_mode\":\"crystal\",\"codemirror_mime_type\":\"text/x-crystal\",\"tm_scope\":\"source.crystal\",\"interpreters\":[\"crystal\"],\"language_id\":72},\"Csound\":{\"type\":\"programming\",\"color\":\"#1a1a1a\",\"aliases\":[\"csound-orc\"],\"extensions\":[\".orc\",\".udo\"],\"tm_scope\":\"source.csound\",\"ace_mode\":\"csound_orchestra\",\"language_id\":73},\"Csound Document\":{\"type\":\"programming\",\"color\":\"#1a1a1a\",\"aliases\":[\"csound-csd\"],\"extensions\":[\".csd\"],\"tm_scope\":\"source.csound-document\",\"ace_mode\":\"csound_document\",\"language_id\":74},\"Csound Score\":{\"type\":\"programming\",\"color\":\"#1a1a1a\",\"aliases\":[\"csound-sco\"],\"extensions\":[\".sco\"],\"tm_scope\":\"source.csound-score\",\"ace_mode\":\"csound_score\",\"language_id\":75},\"Cuda\":{\"type\":\"programming\",\"extensions\":[\".cu\",\".cuh\"],\"tm_scope\":\"source.cuda-c++\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-c++src\",\"color\":\"#3A4E3A\",\"language_id\":77},\"Cue Sheet\":{\"type\":\"data\",\"extensions\":[\".cue\"],\"tm_scope\":\"source.cuesheet\",\"ace_mode\":\"text\",\"language_id\":942714150},\"Curry\":{\"type\":\"programming\",\"color\":\"#531242\",\"extensions\":[\".curry\"],\"tm_scope\":\"source.curry\",\"ace_mode\":\"haskell\",\"language_id\":439829048},\"Cycript\":{\"type\":\"programming\",\"extensions\":[\".cy\"],\"tm_scope\":\"source.js\",\"ace_mode\":\"javascript\",\"codemirror_mode\":\"javascript\",\"codemirror_mime_type\":\"text/javascript\",\"language_id\":78},\"Cython\":{\"type\":\"programming\",\"color\":\"#fedf5b\",\"extensions\":[\".pyx\",\".pxd\",\".pxi\"],\"aliases\":[\"pyrex\"],\"tm_scope\":\"source.cython\",\"ace_mode\":\"text\",\"codemirror_mode\":\"python\",\"codemirror_mime_type\":\"text/x-cython\",\"language_id\":79},\"D\":{\"type\":\"programming\",\"color\":\"#ba595e\",\"aliases\":[\"Dlang\"],\"extensions\":[\".d\",\".di\"],\"tm_scope\":\"source.d\",\"ace_mode\":\"d\",\"codemirror_mode\":\"d\",\"codemirror_mime_type\":\"text/x-d\",\"language_id\":80},\"D-ObjDump\":{\"type\":\"data\",\"extensions\":[\".d-objdump\"],\"tm_scope\":\"objdump.x86asm\",\"ace_mode\":\"assembly_x86\",\"language_id\":81},\"DIGITAL Command Language\":{\"type\":\"programming\",\"aliases\":[\"dcl\"],\"extensions\":[\".com\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":82},\"DM\":{\"type\":\"programming\",\"color\":\"#447265\",\"extensions\":[\".dm\"],\"aliases\":[\"byond\"],\"tm_scope\":\"source.dm\",\"ace_mode\":\"c_cpp\",\"language_id\":83},\"DNS Zone\":{\"type\":\"data\",\"extensions\":[\".zone\",\".arpa\"],\"tm_scope\":\"text.zone_file\",\"ace_mode\":\"text\",\"language_id\":84},\"DTrace\":{\"type\":\"programming\",\"aliases\":[\"dtrace-script\"],\"extensions\":[\".d\"],\"interpreters\":[\"dtrace\"],\"tm_scope\":\"source.c\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csrc\",\"language_id\":85},\"Dafny\":{\"type\":\"programming\",\"color\":\"#FFEC25\",\"extensions\":[\".dfy\"],\"interpreters\":[\"dafny\"],\"tm_scope\":\"text.dfy.dafny\",\"ace_mode\":\"text\",\"language_id\":969323346},\"Darcs Patch\":{\"type\":\"data\",\"color\":\"#8eff23\",\"aliases\":[\"dpatch\"],\"extensions\":[\".darcspatch\",\".dpatch\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":86},\"Dart\":{\"type\":\"programming\",\"color\":\"#00B4AB\",\"extensions\":[\".dart\"],\"interpreters\":[\"dart\"],\"tm_scope\":\"source.dart\",\"ace_mode\":\"dart\",\"codemirror_mode\":\"dart\",\"codemirror_mime_type\":\"application/dart\",\"language_id\":87},\"DataWeave\":{\"type\":\"programming\",\"color\":\"#003a52\",\"extensions\":[\".dwl\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.data-weave\",\"language_id\":974514097},\"Debian Package Control File\":{\"type\":\"data\",\"color\":\"#D70751\",\"extensions\":[\".dsc\"],\"tm_scope\":\"source.deb-control\",\"ace_mode\":\"text\",\"language_id\":527438264},\"DenizenScript\":{\"type\":\"programming\",\"color\":\"#FBEE96\",\"ace_mode\":\"yaml\",\"codemirror_mode\":\"yaml\",\"codemirror_mime_type\":\"text/x-yaml\",\"extensions\":[\".dsc\"],\"tm_scope\":\"source.denizenscript\",\"language_id\":435000929},\"Dhall\":{\"type\":\"programming\",\"color\":\"#dfafff\",\"extensions\":[\".dhall\"],\"tm_scope\":\"source.haskell\",\"ace_mode\":\"haskell\",\"codemirror_mode\":\"haskell\",\"codemirror_mime_type\":\"text/x-haskell\",\"language_id\":793969321},\"Diff\":{\"type\":\"data\",\"extensions\":[\".diff\",\".patch\"],\"aliases\":[\"udiff\"],\"tm_scope\":\"source.diff\",\"ace_mode\":\"diff\",\"codemirror_mode\":\"diff\",\"codemirror_mime_type\":\"text/x-diff\",\"language_id\":88},\"DirectX 3D File\":{\"type\":\"data\",\"color\":\"#aace60\",\"extensions\":[\".x\"],\"ace_mode\":\"text\",\"tm_scope\":\"none\",\"language_id\":201049282},\"Dockerfile\":{\"type\":\"programming\",\"aliases\":[\"Containerfile\"],\"color\":\"#384d54\",\"tm_scope\":\"source.dockerfile\",\"extensions\":[\".dockerfile\"],\"filenames\":[\"Containerfile\",\"Dockerfile\"],\"ace_mode\":\"dockerfile\",\"codemirror_mode\":\"dockerfile\",\"codemirror_mime_type\":\"text/x-dockerfile\",\"language_id\":89},\"Dogescript\":{\"type\":\"programming\",\"color\":\"#cca760\",\"extensions\":[\".djs\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":90},\"Dylan\":{\"type\":\"programming\",\"color\":\"#6c616e\",\"extensions\":[\".dylan\",\".dyl\",\".intr\",\".lid\"],\"tm_scope\":\"source.dylan\",\"ace_mode\":\"text\",\"codemirror_mode\":\"dylan\",\"codemirror_mime_type\":\"text/x-dylan\",\"language_id\":91},\"E\":{\"type\":\"programming\",\"color\":\"#ccce35\",\"extensions\":[\".e\"],\"interpreters\":[\"rune\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":92},\"E-mail\":{\"type\":\"data\",\"aliases\":[\"email\",\"eml\",\"mail\",\"mbox\"],\"extensions\":[\".eml\",\".mbox\"],\"tm_scope\":\"text.eml.basic\",\"ace_mode\":\"text\",\"codemirror_mode\":\"mbox\",\"codemirror_mime_type\":\"application/mbox\",\"language_id\":529653389},\"EBNF\":{\"type\":\"data\",\"extensions\":[\".ebnf\"],\"tm_scope\":\"source.ebnf\",\"ace_mode\":\"text\",\"codemirror_mode\":\"ebnf\",\"codemirror_mime_type\":\"text/x-ebnf\",\"language_id\":430},\"ECL\":{\"type\":\"programming\",\"color\":\"#8a1267\",\"extensions\":[\".ecl\",\".eclxml\"],\"tm_scope\":\"source.ecl\",\"ace_mode\":\"text\",\"codemirror_mode\":\"ecl\",\"codemirror_mime_type\":\"text/x-ecl\",\"language_id\":93},\"ECLiPSe\":{\"type\":\"programming\",\"color\":\"#001d9d\",\"group\":\"prolog\",\"extensions\":[\".ecl\"],\"tm_scope\":\"source.prolog.eclipse\",\"ace_mode\":\"prolog\",\"language_id\":94},\"EJS\":{\"type\":\"markup\",\"color\":\"#a91e50\",\"extensions\":[\".ejs\",\".ect\",\".ejs.t\",\".jst\"],\"tm_scope\":\"text.html.js\",\"ace_mode\":\"ejs\",\"language_id\":95},\"EQ\":{\"type\":\"programming\",\"color\":\"#a78649\",\"extensions\":[\".eq\"],\"tm_scope\":\"source.cs\",\"ace_mode\":\"csharp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csharp\",\"language_id\":96},\"Eagle\":{\"type\":\"data\",\"extensions\":[\".sch\",\".brd\"],\"tm_scope\":\"text.xml\",\"ace_mode\":\"xml\",\"codemirror_mode\":\"xml\",\"codemirror_mime_type\":\"text/xml\",\"language_id\":97},\"Earthly\":{\"type\":\"programming\",\"aliases\":[\"Earthfile\"],\"color\":\"#2af0ff\",\"tm_scope\":\"source.earthfile\",\"ace_mode\":\"text\",\"filenames\":[\"Earthfile\"],\"language_id\":963512632},\"Easybuild\":{\"type\":\"data\",\"color\":\"#069406\",\"group\":\"Python\",\"ace_mode\":\"python\",\"codemirror_mode\":\"python\",\"codemirror_mime_type\":\"text/x-python\",\"tm_scope\":\"source.python\",\"extensions\":[\".eb\"],\"language_id\":342840477},\"Ecere Projects\":{\"type\":\"data\",\"color\":\"#913960\",\"group\":\"JavaScript\",\"extensions\":[\".epj\"],\"tm_scope\":\"source.json\",\"ace_mode\":\"json\",\"codemirror_mode\":\"javascript\",\"codemirror_mime_type\":\"application/json\",\"language_id\":98},\"EditorConfig\":{\"type\":\"data\",\"color\":\"#fff1f2\",\"group\":\"INI\",\"filenames\":[\".editorconfig\"],\"aliases\":[\"editor-config\"],\"ace_mode\":\"ini\",\"codemirror_mode\":\"properties\",\"codemirror_mime_type\":\"text/x-properties\",\"tm_scope\":\"source.editorconfig\",\"language_id\":96139566},\"Edje Data Collection\":{\"type\":\"data\",\"extensions\":[\".edc\"],\"tm_scope\":\"source.c++\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-c++src\",\"language_id\":342840478},\"Eiffel\":{\"type\":\"programming\",\"color\":\"#4d6977\",\"extensions\":[\".e\"],\"tm_scope\":\"source.eiffel\",\"ace_mode\":\"eiffel\",\"codemirror_mode\":\"eiffel\",\"codemirror_mime_type\":\"text/x-eiffel\",\"language_id\":99},\"Elixir\":{\"type\":\"programming\",\"color\":\"#6e4a7e\",\"extensions\":[\".ex\",\".exs\"],\"tm_scope\":\"source.elixir\",\"ace_mode\":\"elixir\",\"filenames\":[\"mix.lock\"],\"interpreters\":[\"elixir\"],\"language_id\":100},\"Elm\":{\"type\":\"programming\",\"color\":\"#60B5CC\",\"extensions\":[\".elm\"],\"tm_scope\":\"source.elm\",\"ace_mode\":\"elm\",\"codemirror_mode\":\"elm\",\"codemirror_mime_type\":\"text/x-elm\",\"language_id\":101},\"Emacs Lisp\":{\"type\":\"programming\",\"tm_scope\":\"source.emacs.lisp\",\"color\":\"#c065db\",\"aliases\":[\"elisp\",\"emacs\"],\"filenames\":[\".abbrev_defs\",\".emacs\",\".emacs.desktop\",\".gnus\",\".spacemacs\",\".viper\",\"Cask\",\"Project.ede\",\"_emacs\",\"abbrev_defs\"],\"extensions\":[\".el\",\".emacs\",\".emacs.desktop\"],\"ace_mode\":\"lisp\",\"codemirror_mode\":\"commonlisp\",\"codemirror_mime_type\":\"text/x-common-lisp\",\"language_id\":102},\"EmberScript\":{\"type\":\"programming\",\"color\":\"#FFF4F3\",\"extensions\":[\".em\",\".emberscript\"],\"tm_scope\":\"source.coffee\",\"ace_mode\":\"coffee\",\"codemirror_mode\":\"coffeescript\",\"codemirror_mime_type\":\"text/x-coffeescript\",\"language_id\":103},\"Erlang\":{\"type\":\"programming\",\"color\":\"#B83998\",\"extensions\":[\".erl\",\".app.src\",\".es\",\".escript\",\".hrl\",\".xrl\",\".yrl\"],\"filenames\":[\"Emakefile\",\"rebar.config\",\"rebar.config.lock\",\"rebar.lock\"],\"tm_scope\":\"source.erlang\",\"ace_mode\":\"erlang\",\"codemirror_mode\":\"erlang\",\"codemirror_mime_type\":\"text/x-erlang\",\"interpreters\":[\"escript\"],\"language_id\":104},\"Euphoria\":{\"type\":\"programming\",\"color\":\"#FF790B\",\"extensions\":[\".e\",\".ex\"],\"interpreters\":[\"eui\",\"euiw\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.euphoria\",\"language_id\":880693982},\"F#\":{\"type\":\"programming\",\"color\":\"#b845fc\",\"aliases\":[\"fsharp\"],\"extensions\":[\".fs\",\".fsi\",\".fsx\"],\"tm_scope\":\"source.fsharp\",\"ace_mode\":\"text\",\"codemirror_mode\":\"mllike\",\"codemirror_mime_type\":\"text/x-fsharp\",\"language_id\":105},\"F*\":{\"fs_name\":\"Fstar\",\"type\":\"programming\",\"color\":\"#572e30\",\"aliases\":[\"fstar\"],\"extensions\":[\".fst\",\".fsti\"],\"tm_scope\":\"source.fstar\",\"ace_mode\":\"text\",\"language_id\":336943375},\"FIGlet Font\":{\"type\":\"data\",\"color\":\"#FFDDBB\",\"aliases\":[\"FIGfont\"],\"extensions\":[\".flf\"],\"tm_scope\":\"source.figfont\",\"ace_mode\":\"text\",\"language_id\":686129783},\"FLUX\":{\"type\":\"programming\",\"color\":\"#88ccff\",\"extensions\":[\".fx\",\".flux\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":106},\"Factor\":{\"type\":\"programming\",\"color\":\"#636746\",\"extensions\":[\".factor\"],\"filenames\":[\".factor-boot-rc\",\".factor-rc\"],\"tm_scope\":\"source.factor\",\"ace_mode\":\"text\",\"codemirror_mode\":\"factor\",\"codemirror_mime_type\":\"text/x-factor\",\"language_id\":108},\"Fancy\":{\"type\":\"programming\",\"color\":\"#7b9db4\",\"extensions\":[\".fy\",\".fancypack\"],\"filenames\":[\"Fakefile\"],\"tm_scope\":\"source.fancy\",\"ace_mode\":\"text\",\"language_id\":109},\"Fantom\":{\"type\":\"programming\",\"color\":\"#14253c\",\"extensions\":[\".fan\"],\"tm_scope\":\"source.fan\",\"ace_mode\":\"text\",\"language_id\":110},\"Faust\":{\"type\":\"programming\",\"color\":\"#c37240\",\"extensions\":[\".dsp\"],\"tm_scope\":\"source.faust\",\"ace_mode\":\"text\",\"language_id\":622529198},\"Fennel\":{\"type\":\"programming\",\"tm_scope\":\"source.fnl\",\"ace_mode\":\"text\",\"color\":\"#fff3d7\",\"interpreters\":[\"fennel\"],\"extensions\":[\".fnl\"],\"language_id\":239946126},\"Filebench WML\":{\"type\":\"programming\",\"color\":\"#F6B900\",\"extensions\":[\".f\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":111},\"Filterscript\":{\"type\":\"programming\",\"group\":\"RenderScript\",\"extensions\":[\".fs\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":112},\"Fluent\":{\"type\":\"programming\",\"color\":\"#ffcc33\",\"extensions\":[\".ftl\"],\"tm_scope\":\"source.ftl\",\"ace_mode\":\"text\",\"language_id\":206353404},\"Formatted\":{\"type\":\"data\",\"extensions\":[\".for\",\".eam.fs\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":113},\"Forth\":{\"type\":\"programming\",\"color\":\"#341708\",\"extensions\":[\".fth\",\".4th\",\".f\",\".for\",\".forth\",\".fr\",\".frt\",\".fs\"],\"tm_scope\":\"source.forth\",\"ace_mode\":\"forth\",\"codemirror_mode\":\"forth\",\"codemirror_mime_type\":\"text/x-forth\",\"language_id\":114},\"Fortran\":{\"group\":\"Fortran\",\"type\":\"programming\",\"color\":\"#4d41b1\",\"extensions\":[\".f\",\".f77\",\".for\",\".fpp\"],\"tm_scope\":\"source.fortran\",\"ace_mode\":\"text\",\"codemirror_mode\":\"fortran\",\"codemirror_mime_type\":\"text/x-fortran\",\"language_id\":107},\"Fortran Free Form\":{\"group\":\"Fortran\",\"color\":\"#4d41b1\",\"type\":\"programming\",\"extensions\":[\".f90\",\".f03\",\".f08\",\".f95\"],\"tm_scope\":\"source.fortran.modern\",\"ace_mode\":\"text\",\"codemirror_mode\":\"fortran\",\"codemirror_mime_type\":\"text/x-fortran\",\"language_id\":761352333},\"FreeBasic\":{\"type\":\"programming\",\"color\":\"#867db1\",\"extensions\":[\".bi\",\".bas\"],\"tm_scope\":\"source.vbnet\",\"aliases\":[\"fb\"],\"ace_mode\":\"text\",\"codemirror_mode\":\"vb\",\"codemirror_mime_type\":\"text/x-vb\",\"language_id\":472896659},\"FreeMarker\":{\"type\":\"programming\",\"color\":\"#0050b2\",\"aliases\":[\"ftl\"],\"extensions\":[\".ftl\"],\"tm_scope\":\"text.html.ftl\",\"ace_mode\":\"ftl\",\"language_id\":115},\"Frege\":{\"type\":\"programming\",\"color\":\"#00cafe\",\"extensions\":[\".fr\"],\"tm_scope\":\"source.haskell\",\"ace_mode\":\"haskell\",\"language_id\":116},\"Futhark\":{\"type\":\"programming\",\"color\":\"#5f021f\",\"extensions\":[\".fut\"],\"tm_scope\":\"source.futhark\",\"ace_mode\":\"text\",\"language_id\":97358117},\"G-code\":{\"type\":\"programming\",\"color\":\"#D08CF2\",\"extensions\":[\".g\",\".cnc\",\".gco\",\".gcode\"],\"tm_scope\":\"source.gcode\",\"ace_mode\":\"gcode\",\"language_id\":117},\"GAML\":{\"type\":\"programming\",\"color\":\"#FFC766\",\"extensions\":[\".gaml\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":290345951},\"GAMS\":{\"type\":\"programming\",\"color\":\"#f49a22\",\"extensions\":[\".gms\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":118},\"GAP\":{\"type\":\"programming\",\"color\":\"#0000cc\",\"extensions\":[\".g\",\".gap\",\".gd\",\".gi\",\".tst\"],\"tm_scope\":\"source.gap\",\"ace_mode\":\"text\",\"language_id\":119},\"GCC Machine Description\":{\"type\":\"programming\",\"color\":\"#FFCFAB\",\"extensions\":[\".md\"],\"tm_scope\":\"source.lisp\",\"ace_mode\":\"lisp\",\"codemirror_mode\":\"commonlisp\",\"codemirror_mime_type\":\"text/x-common-lisp\",\"language_id\":121},\"GDB\":{\"type\":\"programming\",\"extensions\":[\".gdb\",\".gdbinit\"],\"tm_scope\":\"source.gdb\",\"ace_mode\":\"text\",\"language_id\":122},\"GDScript\":{\"type\":\"programming\",\"color\":\"#355570\",\"extensions\":[\".gd\"],\"tm_scope\":\"source.gdscript\",\"ace_mode\":\"text\",\"language_id\":123},\"GEDCOM\":{\"type\":\"data\",\"color\":\"#003058\",\"ace_mode\":\"text\",\"extensions\":[\".ged\"],\"tm_scope\":\"source.gedcom\",\"language_id\":459577965},\"GLSL\":{\"type\":\"programming\",\"color\":\"#5686a5\",\"extensions\":[\".glsl\",\".fp\",\".frag\",\".frg\",\".fs\",\".fsh\",\".fshader\",\".geo\",\".geom\",\".glslf\",\".glslv\",\".gs\",\".gshader\",\".rchit\",\".rmiss\",\".shader\",\".tesc\",\".tese\",\".vert\",\".vrx\",\".vsh\",\".vshader\"],\"tm_scope\":\"source.glsl\",\"ace_mode\":\"glsl\",\"language_id\":124},\"GN\":{\"type\":\"data\",\"extensions\":[\".gn\",\".gni\"],\"interpreters\":[\"gn\"],\"filenames\":[\".gn\"],\"tm_scope\":\"source.gn\",\"ace_mode\":\"python\",\"codemirror_mode\":\"python\",\"codemirror_mime_type\":\"text/x-python\",\"language_id\":302957008},\"GSC\":{\"type\":\"programming\",\"color\":\"#FF6800\",\"extensions\":[\".gsc\",\".csc\",\".gsh\"],\"tm_scope\":\"source.gsc\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csrc\",\"language_id\":257856279},\"Game Maker Language\":{\"type\":\"programming\",\"color\":\"#71b417\",\"extensions\":[\".gml\"],\"tm_scope\":\"source.c++\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-c++src\",\"language_id\":125},\"Gemfile.lock\":{\"type\":\"data\",\"color\":\"#701516\",\"searchable\":false,\"tm_scope\":\"source.gemfile-lock\",\"ace_mode\":\"text\",\"filenames\":[\"Gemfile.lock\"],\"language_id\":907065713},\"Genero\":{\"type\":\"programming\",\"color\":\"#63408e\",\"extensions\":[\".4gl\"],\"tm_scope\":\"source.genero\",\"ace_mode\":\"text\",\"language_id\":986054050},\"Genero Forms\":{\"type\":\"markup\",\"color\":\"#d8df39\",\"extensions\":[\".per\"],\"tm_scope\":\"source.genero-forms\",\"ace_mode\":\"text\",\"language_id\":902995658},\"Genie\":{\"type\":\"programming\",\"ace_mode\":\"text\",\"extensions\":[\".gs\"],\"color\":\"#fb855d\",\"tm_scope\":\"none\",\"language_id\":792408528},\"Genshi\":{\"type\":\"programming\",\"color\":\"#951531\",\"extensions\":[\".kid\"],\"tm_scope\":\"text.xml.genshi\",\"aliases\":[\"xml+genshi\",\"xml+kid\"],\"ace_mode\":\"xml\",\"codemirror_mode\":\"xml\",\"codemirror_mime_type\":\"text/xml\",\"language_id\":126},\"Gentoo Ebuild\":{\"type\":\"programming\",\"color\":\"#9400ff\",\"group\":\"Shell\",\"extensions\":[\".ebuild\"],\"tm_scope\":\"source.shell\",\"ace_mode\":\"sh\",\"codemirror_mode\":\"shell\",\"codemirror_mime_type\":\"text/x-sh\",\"language_id\":127},\"Gentoo Eclass\":{\"type\":\"programming\",\"color\":\"#9400ff\",\"group\":\"Shell\",\"extensions\":[\".eclass\"],\"tm_scope\":\"source.shell\",\"ace_mode\":\"sh\",\"codemirror_mode\":\"shell\",\"codemirror_mime_type\":\"text/x-sh\",\"language_id\":128},\"Gerber Image\":{\"type\":\"data\",\"color\":\"#d20b00\",\"aliases\":[\"rs-274x\"],\"extensions\":[\".gbr\",\".cmp\",\".gbl\",\".gbo\",\".gbp\",\".gbs\",\".gko\",\".gml\",\".gpb\",\".gpt\",\".gtl\",\".gto\",\".gtp\",\".gts\",\".ncl\",\".sol\"],\"interpreters\":[\"gerbv\",\"gerbview\"],\"tm_scope\":\"source.gerber\",\"ace_mode\":\"text\",\"language_id\":404627610},\"Gettext Catalog\":{\"type\":\"prose\",\"aliases\":[\"pot\"],\"extensions\":[\".po\",\".pot\"],\"tm_scope\":\"source.po\",\"ace_mode\":\"text\",\"language_id\":129},\"Gherkin\":{\"type\":\"programming\",\"extensions\":[\".feature\",\".story\"],\"tm_scope\":\"text.gherkin.feature\",\"aliases\":[\"cucumber\"],\"ace_mode\":\"text\",\"color\":\"#5B2063\",\"language_id\":76},\"Git Attributes\":{\"type\":\"data\",\"color\":\"#F44D27\",\"group\":\"INI\",\"aliases\":[\"gitattributes\"],\"filenames\":[\".gitattributes\"],\"tm_scope\":\"source.gitattributes\",\"ace_mode\":\"gitignore\",\"codemirror_mode\":\"shell\",\"codemirror_mime_type\":\"text/x-sh\",\"language_id\":956324166},\"Git Config\":{\"type\":\"data\",\"color\":\"#F44D27\",\"group\":\"INI\",\"aliases\":[\"gitconfig\",\"gitmodules\"],\"extensions\":[\".gitconfig\"],\"filenames\":[\".gitconfig\",\".gitmodules\"],\"ace_mode\":\"ini\",\"codemirror_mode\":\"properties\",\"codemirror_mime_type\":\"text/x-properties\",\"tm_scope\":\"source.gitconfig\",\"language_id\":807968997},\"Gleam\":{\"type\":\"programming\",\"color\":\"#ffaff3\",\"ace_mode\":\"text\",\"extensions\":[\".gleam\"],\"tm_scope\":\"source.gleam\",\"language_id\":1054258749},\"Glyph\":{\"type\":\"programming\",\"color\":\"#c1ac7f\",\"extensions\":[\".glf\"],\"tm_scope\":\"source.tcl\",\"ace_mode\":\"tcl\",\"codemirror_mode\":\"tcl\",\"codemirror_mime_type\":\"text/x-tcl\",\"language_id\":130},\"Glyph Bitmap Distribution Format\":{\"type\":\"data\",\"extensions\":[\".bdf\"],\"tm_scope\":\"source.bdf\",\"ace_mode\":\"text\",\"language_id\":997665271},\"Gnuplot\":{\"type\":\"programming\",\"color\":\"#f0a9f0\",\"extensions\":[\".gp\",\".gnu\",\".gnuplot\",\".p\",\".plot\",\".plt\"],\"interpreters\":[\"gnuplot\"],\"tm_scope\":\"source.gnuplot\",\"ace_mode\":\"text\",\"language_id\":131},\"Go\":{\"type\":\"programming\",\"color\":\"#00ADD8\",\"aliases\":[\"golang\"],\"extensions\":[\".go\"],\"tm_scope\":\"source.go\",\"ace_mode\":\"golang\",\"codemirror_mode\":\"go\",\"codemirror_mime_type\":\"text/x-go\",\"language_id\":132},\"Go Checksums\":{\"type\":\"data\",\"color\":\"#00ADD8\",\"aliases\":[\"go.sum\",\"go sum\"],\"filenames\":[\"go.sum\"],\"tm_scope\":\"go.sum\",\"ace_mode\":\"text\",\"language_id\":1054391671},\"Go Module\":{\"type\":\"data\",\"color\":\"#00ADD8\",\"aliases\":[\"go.mod\",\"go mod\"],\"filenames\":[\"go.mod\"],\"tm_scope\":\"go.mod\",\"ace_mode\":\"text\",\"language_id\":947461016},\"Golo\":{\"type\":\"programming\",\"color\":\"#88562A\",\"extensions\":[\".golo\"],\"tm_scope\":\"source.golo\",\"ace_mode\":\"text\",\"language_id\":133},\"Gosu\":{\"type\":\"programming\",\"color\":\"#82937f\",\"extensions\":[\".gs\",\".gst\",\".gsx\",\".vark\"],\"tm_scope\":\"source.gosu.2\",\"ace_mode\":\"text\",\"language_id\":134},\"Grace\":{\"type\":\"programming\",\"color\":\"#615f8b\",\"extensions\":[\".grace\"],\"tm_scope\":\"source.grace\",\"ace_mode\":\"text\",\"language_id\":135},\"Gradle\":{\"type\":\"data\",\"color\":\"#02303a\",\"extensions\":[\".gradle\"],\"tm_scope\":\"source.groovy.gradle\",\"ace_mode\":\"text\",\"language_id\":136},\"Grammatical Framework\":{\"type\":\"programming\",\"aliases\":[\"gf\"],\"extensions\":[\".gf\"],\"color\":\"#ff0000\",\"tm_scope\":\"source.gf\",\"ace_mode\":\"haskell\",\"codemirror_mode\":\"haskell\",\"codemirror_mime_type\":\"text/x-haskell\",\"language_id\":137},\"Graph Modeling Language\":{\"type\":\"data\",\"extensions\":[\".gml\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":138},\"GraphQL\":{\"type\":\"data\",\"color\":\"#e10098\",\"extensions\":[\".graphql\",\".gql\",\".graphqls\"],\"tm_scope\":\"source.graphql\",\"ace_mode\":\"text\",\"language_id\":139},\"Graphviz (DOT)\":{\"type\":\"data\",\"color\":\"#2596be\",\"tm_scope\":\"source.dot\",\"extensions\":[\".dot\",\".gv\"],\"ace_mode\":\"text\",\"language_id\":140},\"Groovy\":{\"type\":\"programming\",\"tm_scope\":\"source.groovy\",\"ace_mode\":\"groovy\",\"codemirror_mode\":\"groovy\",\"codemirror_mime_type\":\"text/x-groovy\",\"color\":\"#4298b8\",\"extensions\":[\".groovy\",\".grt\",\".gtpl\",\".gvy\"],\"interpreters\":[\"groovy\"],\"filenames\":[\"Jenkinsfile\"],\"language_id\":142},\"Groovy Server Pages\":{\"type\":\"programming\",\"color\":\"#4298b8\",\"group\":\"Groovy\",\"aliases\":[\"gsp\",\"java server page\"],\"extensions\":[\".gsp\"],\"tm_scope\":\"text.html.jsp\",\"ace_mode\":\"jsp\",\"codemirror_mode\":\"htmlembedded\",\"codemirror_mime_type\":\"application/x-jsp\",\"language_id\":143},\"HAProxy\":{\"type\":\"data\",\"color\":\"#106da9\",\"extensions\":[\".cfg\"],\"filenames\":[\"haproxy.cfg\"],\"tm_scope\":\"source.haproxy-config\",\"ace_mode\":\"text\",\"language_id\":366607477},\"HCL\":{\"type\":\"programming\",\"extensions\":[\".hcl\",\".nomad\",\".tf\",\".tfvars\",\".workflow\"],\"aliases\":[\"HashiCorp Configuration Language\",\"terraform\"],\"ace_mode\":\"ruby\",\"codemirror_mode\":\"ruby\",\"codemirror_mime_type\":\"text/x-ruby\",\"tm_scope\":\"source.terraform\",\"language_id\":144},\"HLSL\":{\"type\":\"programming\",\"color\":\"#aace60\",\"extensions\":[\".hlsl\",\".cginc\",\".fx\",\".fxh\",\".hlsli\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.hlsl\",\"language_id\":145},\"HTML\":{\"type\":\"markup\",\"tm_scope\":\"text.html.basic\",\"ace_mode\":\"html\",\"codemirror_mode\":\"htmlmixed\",\"codemirror_mime_type\":\"text/html\",\"color\":\"#e34c26\",\"aliases\":[\"xhtml\"],\"extensions\":[\".html\",\".hta\",\".htm\",\".html.hl\",\".inc\",\".xht\",\".xhtml\"],\"language_id\":146},\"HTML+ECR\":{\"type\":\"markup\",\"color\":\"#2e1052\",\"tm_scope\":\"text.html.ecr\",\"group\":\"HTML\",\"aliases\":[\"ecr\"],\"extensions\":[\".ecr\"],\"ace_mode\":\"text\",\"codemirror_mode\":\"htmlmixed\",\"codemirror_mime_type\":\"text/html\",\"language_id\":148},\"HTML+EEX\":{\"type\":\"markup\",\"color\":\"#6e4a7e\",\"tm_scope\":\"text.html.elixir\",\"group\":\"HTML\",\"aliases\":[\"eex\",\"heex\",\"leex\"],\"extensions\":[\".eex\",\".html.heex\",\".html.leex\"],\"ace_mode\":\"text\",\"codemirror_mode\":\"htmlmixed\",\"codemirror_mime_type\":\"text/html\",\"language_id\":149},\"HTML+ERB\":{\"type\":\"markup\",\"color\":\"#701516\",\"tm_scope\":\"text.html.erb\",\"group\":\"HTML\",\"aliases\":[\"erb\",\"rhtml\",\"html+ruby\"],\"extensions\":[\".erb\",\".erb.deface\",\".rhtml\"],\"ace_mode\":\"text\",\"codemirror_mode\":\"htmlembedded\",\"codemirror_mime_type\":\"application/x-erb\",\"language_id\":150},\"HTML+PHP\":{\"type\":\"markup\",\"color\":\"#4f5d95\",\"tm_scope\":\"text.html.php\",\"group\":\"HTML\",\"extensions\":[\".phtml\"],\"ace_mode\":\"php\",\"codemirror_mode\":\"php\",\"codemirror_mime_type\":\"application/x-httpd-php\",\"language_id\":151},\"HTML+Razor\":{\"type\":\"markup\",\"color\":\"#512be4\",\"tm_scope\":\"text.html.cshtml\",\"group\":\"HTML\",\"aliases\":[\"razor\"],\"extensions\":[\".cshtml\",\".razor\"],\"ace_mode\":\"razor\",\"codemirror_mode\":\"htmlmixed\",\"codemirror_mime_type\":\"text/html\",\"language_id\":479039817},\"HTTP\":{\"type\":\"data\",\"color\":\"#005C9C\",\"extensions\":[\".http\"],\"tm_scope\":\"source.httpspec\",\"ace_mode\":\"text\",\"codemirror_mode\":\"http\",\"codemirror_mime_type\":\"message/http\",\"language_id\":152},\"HXML\":{\"type\":\"data\",\"color\":\"#f68712\",\"ace_mode\":\"text\",\"extensions\":[\".hxml\"],\"tm_scope\":\"source.hxml\",\"language_id\":786683730},\"Hack\":{\"type\":\"programming\",\"ace_mode\":\"php\",\"codemirror_mode\":\"php\",\"codemirror_mime_type\":\"application/x-httpd-php\",\"extensions\":[\".hack\",\".hh\",\".hhi\",\".php\"],\"tm_scope\":\"source.hack\",\"color\":\"#878787\",\"language_id\":153},\"Haml\":{\"type\":\"markup\",\"color\":\"#ece2a9\",\"extensions\":[\".haml\",\".haml.deface\"],\"tm_scope\":\"text.haml\",\"ace_mode\":\"haml\",\"codemirror_mode\":\"haml\",\"codemirror_mime_type\":\"text/x-haml\",\"language_id\":154},\"Handlebars\":{\"type\":\"markup\",\"color\":\"#f7931e\",\"aliases\":[\"hbs\",\"htmlbars\"],\"extensions\":[\".handlebars\",\".hbs\"],\"tm_scope\":\"text.html.handlebars\",\"ace_mode\":\"handlebars\",\"language_id\":155},\"Harbour\":{\"type\":\"programming\",\"color\":\"#0e60e3\",\"extensions\":[\".hb\"],\"tm_scope\":\"source.harbour\",\"ace_mode\":\"text\",\"language_id\":156},\"Haskell\":{\"type\":\"programming\",\"color\":\"#5e5086\",\"extensions\":[\".hs\",\".hs-boot\",\".hsc\"],\"interpreters\":[\"runghc\",\"runhaskell\",\"runhugs\"],\"tm_scope\":\"source.haskell\",\"ace_mode\":\"haskell\",\"codemirror_mode\":\"haskell\",\"codemirror_mime_type\":\"text/x-haskell\",\"language_id\":157},\"Haxe\":{\"type\":\"programming\",\"ace_mode\":\"haxe\",\"codemirror_mode\":\"haxe\",\"codemirror_mime_type\":\"text/x-haxe\",\"color\":\"#df7900\",\"extensions\":[\".hx\",\".hxsl\"],\"tm_scope\":\"source.hx\",\"language_id\":158},\"HiveQL\":{\"type\":\"programming\",\"extensions\":[\".q\",\".hql\"],\"color\":\"#dce200\",\"tm_scope\":\"source.hql\",\"ace_mode\":\"sql\",\"language_id\":931814087},\"HolyC\":{\"type\":\"programming\",\"color\":\"#ffefaf\",\"extensions\":[\".hc\"],\"tm_scope\":\"source.hc\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csrc\",\"language_id\":928121743},\"Hy\":{\"type\":\"programming\",\"ace_mode\":\"text\",\"color\":\"#7790B2\",\"extensions\":[\".hy\"],\"interpreters\":[\"hy\"],\"aliases\":[\"hylang\"],\"tm_scope\":\"source.hy\",\"language_id\":159},\"HyPhy\":{\"type\":\"programming\",\"ace_mode\":\"text\",\"extensions\":[\".bf\"],\"tm_scope\":\"none\",\"language_id\":160},\"IDL\":{\"type\":\"programming\",\"color\":\"#a3522f\",\"extensions\":[\".pro\",\".dlm\"],\"tm_scope\":\"source.idl\",\"ace_mode\":\"text\",\"codemirror_mode\":\"idl\",\"codemirror_mime_type\":\"text/x-idl\",\"language_id\":161},\"IGOR Pro\":{\"type\":\"programming\",\"color\":\"#0000cc\",\"extensions\":[\".ipf\"],\"aliases\":[\"igor\",\"igorpro\"],\"tm_scope\":\"source.igor\",\"ace_mode\":\"text\",\"language_id\":162},\"INI\":{\"type\":\"data\",\"color\":\"#d1dbe0\",\"extensions\":[\".ini\",\".cfg\",\".dof\",\".lektorproject\",\".prefs\",\".pro\",\".properties\",\".url\"],\"filenames\":[\".coveragerc\",\".flake8\",\".pylintrc\",\"buildozer.spec\",\"pylintrc\"],\"tm_scope\":\"source.ini\",\"aliases\":[\"dosini\"],\"ace_mode\":\"ini\",\"codemirror_mode\":\"properties\",\"codemirror_mime_type\":\"text/x-properties\",\"language_id\":163},\"IRC log\":{\"type\":\"data\",\"aliases\":[\"irc\",\"irc logs\"],\"extensions\":[\".irclog\",\".weechatlog\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"codemirror_mode\":\"mirc\",\"codemirror_mime_type\":\"text/mirc\",\"language_id\":164},\"Idris\":{\"type\":\"programming\",\"color\":\"#b30000\",\"extensions\":[\".idr\",\".lidr\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.idris\",\"language_id\":165},\"Ignore List\":{\"type\":\"data\",\"color\":\"#000000\",\"group\":\"INI\",\"aliases\":[\"ignore\",\"gitignore\",\"git-ignore\"],\"extensions\":[\".gitignore\"],\"filenames\":[\".atomignore\",\".babelignore\",\".bzrignore\",\".coffeelintignore\",\".cvsignore\",\".dockerignore\",\".eleventyignore\",\".eslintignore\",\".gitignore\",\".markdownlintignore\",\".nodemonignore\",\".npmignore\",\".prettierignore\",\".stylelintignore\",\".vercelignore\",\".vscodeignore\",\"gitignore-global\",\"gitignore_global\"],\"ace_mode\":\"gitignore\",\"tm_scope\":\"source.gitignore\",\"codemirror_mode\":\"shell\",\"codemirror_mime_type\":\"text/x-sh\",\"language_id\":74444240},\"ImageJ Macro\":{\"type\":\"programming\",\"color\":\"#99AAFF\",\"aliases\":[\"ijm\"],\"extensions\":[\".ijm\"],\"ace_mode\":\"text\",\"tm_scope\":\"none\",\"language_id\":575143428},\"Inform 7\":{\"type\":\"programming\",\"wrap\":true,\"extensions\":[\".ni\",\".i7x\"],\"tm_scope\":\"source.inform7\",\"aliases\":[\"i7\",\"inform7\"],\"ace_mode\":\"text\",\"language_id\":166},\"Inno Setup\":{\"type\":\"programming\",\"color\":\"#264b99\",\"extensions\":[\".iss\",\".isl\"],\"tm_scope\":\"source.inno\",\"ace_mode\":\"text\",\"language_id\":167},\"Io\":{\"type\":\"programming\",\"color\":\"#a9188d\",\"extensions\":[\".io\"],\"interpreters\":[\"io\"],\"tm_scope\":\"source.io\",\"ace_mode\":\"io\",\"language_id\":168},\"Ioke\":{\"type\":\"programming\",\"color\":\"#078193\",\"extensions\":[\".ik\"],\"interpreters\":[\"ioke\"],\"tm_scope\":\"source.ioke\",\"ace_mode\":\"text\",\"language_id\":169},\"Isabelle\":{\"type\":\"programming\",\"color\":\"#FEFE00\",\"extensions\":[\".thy\"],\"tm_scope\":\"source.isabelle.theory\",\"ace_mode\":\"text\",\"language_id\":170},\"Isabelle ROOT\":{\"type\":\"programming\",\"color\":\"#FEFE00\",\"group\":\"Isabelle\",\"filenames\":[\"ROOT\"],\"tm_scope\":\"source.isabelle.root\",\"ace_mode\":\"text\",\"language_id\":171},\"J\":{\"type\":\"programming\",\"color\":\"#9EEDFF\",\"extensions\":[\".ijs\"],\"interpreters\":[\"jconsole\"],\"tm_scope\":\"source.j\",\"ace_mode\":\"text\",\"language_id\":172},\"JAR Manifest\":{\"type\":\"data\",\"color\":\"#b07219\",\"filenames\":[\"MANIFEST.MF\"],\"tm_scope\":\"source.yaml\",\"ace_mode\":\"text\",\"language_id\":447261135},\"JFlex\":{\"type\":\"programming\",\"color\":\"#DBCA00\",\"group\":\"Lex\",\"extensions\":[\".flex\",\".jflex\"],\"tm_scope\":\"source.jflex\",\"ace_mode\":\"text\",\"language_id\":173},\"JSON\":{\"type\":\"data\",\"color\":\"#292929\",\"tm_scope\":\"source.json\",\"ace_mode\":\"json\",\"codemirror_mode\":\"javascript\",\"codemirror_mime_type\":\"application/json\",\"extensions\":[\".json\",\".avsc\",\".geojson\",\".gltf\",\".har\",\".ice\",\".JSON-tmLanguage\",\".jsonl\",\".mcmeta\",\".tfstate\",\".tfstate.backup\",\".topojson\",\".webapp\",\".webmanifest\",\".yy\",\".yyp\"],\"filenames\":[\".arcconfig\",\".auto-changelog\",\".c8rc\",\".htmlhintrc\",\".imgbotconfig\",\".nycrc\",\".tern-config\",\".tern-project\",\".watchmanconfig\",\"Pipfile.lock\",\"composer.lock\",\"mcmod.info\"],\"language_id\":174},\"JSON with Comments\":{\"type\":\"data\",\"color\":\"#292929\",\"group\":\"JSON\",\"tm_scope\":\"source.js\",\"ace_mode\":\"javascript\",\"codemirror_mode\":\"javascript\",\"codemirror_mime_type\":\"text/javascript\",\"aliases\":[\"jsonc\"],\"extensions\":[\".jsonc\",\".code-snippets\",\".sublime-build\",\".sublime-commands\",\".sublime-completions\",\".sublime-keymap\",\".sublime-macro\",\".sublime-menu\",\".sublime-mousemap\",\".sublime-project\",\".sublime-settings\",\".sublime-theme\",\".sublime-workspace\",\".sublime_metrics\",\".sublime_session\"],\"filenames\":[\".babelrc\",\".devcontainer.json\",\".eslintrc.json\",\".jscsrc\",\".jshintrc\",\".jslintrc\",\"api-extractor.json\",\"devcontainer.json\",\"jsconfig.json\",\"language-configuration.json\",\"tsconfig.json\",\"tslint.json\"],\"language_id\":423},\"JSON5\":{\"type\":\"data\",\"color\":\"#267CB9\",\"extensions\":[\".json5\"],\"tm_scope\":\"source.js\",\"ace_mode\":\"javascript\",\"codemirror_mode\":\"javascript\",\"codemirror_mime_type\":\"application/json\",\"language_id\":175},\"JSONLD\":{\"type\":\"data\",\"color\":\"#0c479c\",\"extensions\":[\".jsonld\"],\"tm_scope\":\"source.js\",\"ace_mode\":\"javascript\",\"codemirror_mode\":\"javascript\",\"codemirror_mime_type\":\"application/json\",\"language_id\":176},\"JSONiq\":{\"color\":\"#40d47e\",\"type\":\"programming\",\"ace_mode\":\"jsoniq\",\"codemirror_mode\":\"javascript\",\"codemirror_mime_type\":\"application/json\",\"extensions\":[\".jq\"],\"tm_scope\":\"source.jsoniq\",\"language_id\":177},\"Janet\":{\"type\":\"programming\",\"color\":\"#0886a5\",\"extensions\":[\".janet\"],\"tm_scope\":\"source.janet\",\"ace_mode\":\"scheme\",\"codemirror_mode\":\"scheme\",\"codemirror_mime_type\":\"text/x-scheme\",\"interpreters\":[\"janet\"],\"language_id\":1028705371},\"Jasmin\":{\"type\":\"programming\",\"color\":\"#d03600\",\"ace_mode\":\"java\",\"extensions\":[\".j\"],\"tm_scope\":\"source.jasmin\",\"language_id\":180},\"Java\":{\"type\":\"programming\",\"tm_scope\":\"source.java\",\"ace_mode\":\"java\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-java\",\"color\":\"#b07219\",\"extensions\":[\".java\",\".jav\"],\"language_id\":181},\"Java Properties\":{\"type\":\"data\",\"color\":\"#2A6277\",\"extensions\":[\".properties\"],\"tm_scope\":\"source.java-properties\",\"ace_mode\":\"properties\",\"codemirror_mode\":\"properties\",\"codemirror_mime_type\":\"text/x-properties\",\"language_id\":519377561},\"Java Server Pages\":{\"type\":\"programming\",\"color\":\"#2A6277\",\"group\":\"Java\",\"aliases\":[\"jsp\"],\"extensions\":[\".jsp\"],\"tm_scope\":\"text.html.jsp\",\"ace_mode\":\"jsp\",\"codemirror_mode\":\"htmlembedded\",\"codemirror_mime_type\":\"application/x-jsp\",\"language_id\":182},\"JavaScript\":{\"type\":\"programming\",\"tm_scope\":\"source.js\",\"ace_mode\":\"javascript\",\"codemirror_mode\":\"javascript\",\"codemirror_mime_type\":\"text/javascript\",\"color\":\"#f1e05a\",\"aliases\":[\"js\",\"node\"],\"extensions\":[\".js\",\"._js\",\".bones\",\".cjs\",\".es\",\".es6\",\".frag\",\".gs\",\".jake\",\".javascript\",\".jsb\",\".jscad\",\".jsfl\",\".jslib\",\".jsm\",\".jspre\",\".jss\",\".jsx\",\".mjs\",\".njs\",\".pac\",\".sjs\",\".ssjs\",\".xsjs\",\".xsjslib\"],\"filenames\":[\"Jakefile\"],\"interpreters\":[\"chakra\",\"d8\",\"gjs\",\"js\",\"node\",\"nodejs\",\"qjs\",\"rhino\",\"v8\",\"v8-shell\"],\"language_id\":183},\"JavaScript+ERB\":{\"type\":\"programming\",\"color\":\"#f1e05a\",\"tm_scope\":\"source.js\",\"group\":\"JavaScript\",\"extensions\":[\".js.erb\"],\"ace_mode\":\"javascript\",\"codemirror_mode\":\"javascript\",\"codemirror_mime_type\":\"application/javascript\",\"language_id\":914318960},\"Jest Snapshot\":{\"type\":\"data\",\"color\":\"#15c213\",\"tm_scope\":\"source.jest.snap\",\"extensions\":[\".snap\"],\"ace_mode\":\"javascript\",\"codemirror_mode\":\"javascript\",\"codemirror_mime_type\":\"application/javascript\",\"language_id\":774635084},\"JetBrains MPS\":{\"type\":\"programming\",\"aliases\":[\"mps\"],\"color\":\"#21D789\",\"extensions\":[\".mps\",\".mpl\",\".msd\"],\"ace_mode\":\"xml\",\"codemirror_mode\":\"xml\",\"codemirror_mime_type\":\"text/xml\",\"tm_scope\":\"none\",\"language_id\":465165328},\"Jinja\":{\"type\":\"markup\",\"color\":\"#a52a22\",\"aliases\":[\"django\",\"html+django\",\"html+jinja\",\"htmldjango\"],\"extensions\":[\".jinja\",\".j2\",\".jinja2\"],\"tm_scope\":\"text.html.django\",\"ace_mode\":\"django\",\"codemirror_mode\":\"django\",\"codemirror_mime_type\":\"text/x-django\",\"language_id\":147},\"Jison\":{\"type\":\"programming\",\"color\":\"#56b3cb\",\"group\":\"Yacc\",\"extensions\":[\".jison\"],\"tm_scope\":\"source.jison\",\"ace_mode\":\"text\",\"language_id\":284531423},\"Jison Lex\":{\"type\":\"programming\",\"color\":\"#56b3cb\",\"group\":\"Lex\",\"extensions\":[\".jisonlex\"],\"tm_scope\":\"source.jisonlex\",\"ace_mode\":\"text\",\"language_id\":406395330},\"Jolie\":{\"type\":\"programming\",\"extensions\":[\".ol\",\".iol\"],\"interpreters\":[\"jolie\"],\"color\":\"#843179\",\"ace_mode\":\"text\",\"tm_scope\":\"source.jolie\",\"language_id\":998078858},\"Jsonnet\":{\"color\":\"#0064bd\",\"type\":\"programming\",\"ace_mode\":\"text\",\"extensions\":[\".jsonnet\",\".libsonnet\"],\"tm_scope\":\"source.jsonnet\",\"language_id\":664885656},\"Julia\":{\"type\":\"programming\",\"extensions\":[\".jl\"],\"interpreters\":[\"julia\"],\"color\":\"#a270ba\",\"tm_scope\":\"source.julia\",\"ace_mode\":\"julia\",\"codemirror_mode\":\"julia\",\"codemirror_mime_type\":\"text/x-julia\",\"language_id\":184},\"Jupyter Notebook\":{\"type\":\"markup\",\"ace_mode\":\"json\",\"codemirror_mode\":\"javascript\",\"codemirror_mime_type\":\"application/json\",\"tm_scope\":\"source.json\",\"color\":\"#DA5B0B\",\"extensions\":[\".ipynb\"],\"filenames\":[\"Notebook\"],\"aliases\":[\"IPython Notebook\"],\"language_id\":185},\"KRL\":{\"type\":\"programming\",\"color\":\"#28430A\",\"extensions\":[\".krl\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":186},\"Kaitai Struct\":{\"type\":\"programming\",\"aliases\":[\"ksy\"],\"ace_mode\":\"yaml\",\"codemirror_mode\":\"yaml\",\"codemirror_mime_type\":\"text/x-yaml\",\"color\":\"#773b37\",\"extensions\":[\".ksy\"],\"tm_scope\":\"source.yaml\",\"language_id\":818804755},\"KakouneScript\":{\"type\":\"programming\",\"color\":\"#6f8042\",\"tm_scope\":\"source.kakscript\",\"aliases\":[\"kak\",\"kakscript\"],\"extensions\":[\".kak\"],\"filenames\":[\"kakrc\"],\"ace_mode\":\"text\",\"language_id\":603336474},\"KiCad Layout\":{\"type\":\"data\",\"color\":\"#2f4aab\",\"aliases\":[\"pcbnew\"],\"extensions\":[\".kicad_pcb\",\".kicad_mod\",\".kicad_wks\"],\"filenames\":[\"fp-lib-table\"],\"tm_scope\":\"source.pcb.sexp\",\"ace_mode\":\"lisp\",\"codemirror_mode\":\"commonlisp\",\"codemirror_mime_type\":\"text/x-common-lisp\",\"language_id\":187},\"KiCad Legacy Layout\":{\"type\":\"data\",\"color\":\"#2f4aab\",\"extensions\":[\".brd\"],\"tm_scope\":\"source.pcb.board\",\"ace_mode\":\"text\",\"language_id\":140848857},\"KiCad Schematic\":{\"type\":\"data\",\"color\":\"#2f4aab\",\"aliases\":[\"eeschema schematic\"],\"extensions\":[\".kicad_sch\",\".sch\"],\"tm_scope\":\"source.pcb.schematic\",\"ace_mode\":\"text\",\"language_id\":622447435},\"Kit\":{\"type\":\"markup\",\"ace_mode\":\"html\",\"codemirror_mode\":\"htmlmixed\",\"codemirror_mime_type\":\"text/html\",\"extensions\":[\".kit\"],\"tm_scope\":\"text.html.basic\",\"language_id\":188},\"Kotlin\":{\"type\":\"programming\",\"color\":\"#A97BFF\",\"extensions\":[\".kt\",\".ktm\",\".kts\"],\"tm_scope\":\"source.kotlin\",\"ace_mode\":\"text\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-kotlin\",\"language_id\":189},\"Kusto\":{\"type\":\"data\",\"extensions\":[\".csl\"],\"tm_scope\":\"source.kusto\",\"ace_mode\":\"text\",\"language_id\":225697190},\"LFE\":{\"type\":\"programming\",\"color\":\"#4C3023\",\"extensions\":[\".lfe\"],\"tm_scope\":\"source.lisp\",\"ace_mode\":\"lisp\",\"codemirror_mode\":\"commonlisp\",\"codemirror_mime_type\":\"text/x-common-lisp\",\"language_id\":190},\"LLVM\":{\"type\":\"programming\",\"extensions\":[\".ll\"],\"tm_scope\":\"source.llvm\",\"ace_mode\":\"text\",\"color\":\"#185619\",\"language_id\":191},\"LOLCODE\":{\"type\":\"programming\",\"extensions\":[\".lol\"],\"color\":\"#cc9900\",\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":192},\"LSL\":{\"type\":\"programming\",\"tm_scope\":\"source.lsl\",\"ace_mode\":\"lsl\",\"extensions\":[\".lsl\",\".lslp\"],\"interpreters\":[\"lsl\"],\"color\":\"#3d9970\",\"language_id\":193},\"LTspice Symbol\":{\"type\":\"data\",\"extensions\":[\".asy\"],\"tm_scope\":\"source.ltspice.symbol\",\"ace_mode\":\"text\",\"codemirror_mode\":\"spreadsheet\",\"codemirror_mime_type\":\"text/x-spreadsheet\",\"language_id\":1013566805},\"LabVIEW\":{\"type\":\"programming\",\"color\":\"#fede06\",\"extensions\":[\".lvproj\",\".lvclass\",\".lvlib\"],\"tm_scope\":\"text.xml\",\"ace_mode\":\"xml\",\"codemirror_mode\":\"xml\",\"codemirror_mime_type\":\"text/xml\",\"language_id\":194},\"Lark\":{\"type\":\"data\",\"color\":\"#2980B9\",\"extensions\":[\".lark\"],\"tm_scope\":\"source.lark\",\"ace_mode\":\"text\",\"codemirror_mode\":\"ebnf\",\"codemirror_mime_type\":\"text/x-ebnf\",\"language_id\":758480799},\"Lasso\":{\"type\":\"programming\",\"color\":\"#999999\",\"extensions\":[\".lasso\",\".las\",\".lasso8\",\".lasso9\"],\"tm_scope\":\"file.lasso\",\"aliases\":[\"lassoscript\"],\"ace_mode\":\"text\",\"language_id\":195},\"Latte\":{\"type\":\"markup\",\"color\":\"#f2a542\",\"extensions\":[\".latte\"],\"tm_scope\":\"text.html.smarty\",\"ace_mode\":\"smarty\",\"codemirror_mode\":\"smarty\",\"codemirror_mime_type\":\"text/x-smarty\",\"language_id\":196},\"Lean\":{\"type\":\"programming\",\"extensions\":[\".lean\",\".hlean\"],\"tm_scope\":\"source.lean\",\"ace_mode\":\"text\",\"language_id\":197},\"Less\":{\"type\":\"markup\",\"color\":\"#1d365d\",\"aliases\":[\"less-css\"],\"extensions\":[\".less\"],\"tm_scope\":\"source.css.less\",\"ace_mode\":\"less\",\"codemirror_mode\":\"css\",\"codemirror_mime_type\":\"text/css\",\"language_id\":198},\"Lex\":{\"type\":\"programming\",\"color\":\"#DBCA00\",\"aliases\":[\"flex\"],\"extensions\":[\".l\",\".lex\"],\"filenames\":[\"Lexer.x\",\"lexer.x\"],\"tm_scope\":\"source.lex\",\"ace_mode\":\"text\",\"language_id\":199},\"LigoLANG\":{\"type\":\"programming\",\"color\":\"#0e74ff\",\"extensions\":[\".ligo\"],\"tm_scope\":\"source.ligo\",\"ace_mode\":\"pascal\",\"codemirror_mode\":\"pascal\",\"codemirror_mime_type\":\"text/x-pascal\",\"group\":\"LigoLANG\",\"language_id\":1040646257},\"LilyPond\":{\"type\":\"programming\",\"color\":\"#9ccc7c\",\"extensions\":[\".ly\",\".ily\"],\"tm_scope\":\"source.lilypond\",\"ace_mode\":\"text\",\"language_id\":200},\"Limbo\":{\"type\":\"programming\",\"extensions\":[\".b\",\".m\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":201},\"Linker Script\":{\"type\":\"data\",\"extensions\":[\".ld\",\".lds\",\".x\"],\"filenames\":[\"ld.script\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":202},\"Linux Kernel Module\":{\"type\":\"data\",\"extensions\":[\".mod\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":203},\"Liquid\":{\"type\":\"markup\",\"color\":\"#67b8de\",\"extensions\":[\".liquid\"],\"tm_scope\":\"text.html.liquid\",\"ace_mode\":\"liquid\",\"language_id\":204},\"Literate Agda\":{\"type\":\"programming\",\"color\":\"#315665\",\"group\":\"Agda\",\"extensions\":[\".lagda\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":205},\"Literate CoffeeScript\":{\"type\":\"programming\",\"color\":\"#244776\",\"tm_scope\":\"source.litcoffee\",\"group\":\"CoffeeScript\",\"ace_mode\":\"text\",\"wrap\":true,\"aliases\":[\"litcoffee\"],\"extensions\":[\".litcoffee\",\".coffee.md\"],\"language_id\":206},\"Literate Haskell\":{\"type\":\"programming\",\"color\":\"#5e5086\",\"group\":\"Haskell\",\"aliases\":[\"lhaskell\",\"lhs\"],\"extensions\":[\".lhs\"],\"tm_scope\":\"text.tex.latex.haskell\",\"ace_mode\":\"text\",\"codemirror_mode\":\"haskell-literate\",\"codemirror_mime_type\":\"text/x-literate-haskell\",\"language_id\":207},\"LiveScript\":{\"type\":\"programming\",\"color\":\"#499886\",\"aliases\":[\"live-script\",\"ls\"],\"extensions\":[\".ls\",\"._ls\"],\"filenames\":[\"Slakefile\"],\"tm_scope\":\"source.livescript\",\"ace_mode\":\"livescript\",\"codemirror_mode\":\"livescript\",\"codemirror_mime_type\":\"text/x-livescript\",\"language_id\":208},\"Logos\":{\"type\":\"programming\",\"extensions\":[\".xm\",\".x\",\".xi\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.logos\",\"language_id\":209},\"Logtalk\":{\"type\":\"programming\",\"color\":\"#295b9a\",\"extensions\":[\".lgt\",\".logtalk\"],\"tm_scope\":\"source.logtalk\",\"ace_mode\":\"text\",\"language_id\":210},\"LookML\":{\"type\":\"programming\",\"ace_mode\":\"yaml\",\"codemirror_mode\":\"yaml\",\"codemirror_mime_type\":\"text/x-yaml\",\"color\":\"#652B81\",\"extensions\":[\".lookml\",\".model.lkml\",\".view.lkml\"],\"tm_scope\":\"source.yaml\",\"language_id\":211},\"LoomScript\":{\"type\":\"programming\",\"extensions\":[\".ls\"],\"tm_scope\":\"source.loomscript\",\"ace_mode\":\"text\",\"language_id\":212},\"Lua\":{\"type\":\"programming\",\"tm_scope\":\"source.lua\",\"ace_mode\":\"lua\",\"codemirror_mode\":\"lua\",\"codemirror_mime_type\":\"text/x-lua\",\"color\":\"#000080\",\"extensions\":[\".lua\",\".fcgi\",\".nse\",\".p8\",\".pd_lua\",\".rbxs\",\".rockspec\",\".wlua\"],\"filenames\":[\".luacheckrc\"],\"interpreters\":[\"lua\"],\"language_id\":213},\"M\":{\"type\":\"programming\",\"aliases\":[\"mumps\"],\"extensions\":[\".mumps\",\".m\"],\"ace_mode\":\"text\",\"codemirror_mode\":\"mumps\",\"codemirror_mime_type\":\"text/x-mumps\",\"language_id\":214,\"tm_scope\":\"none\"},\"M4\":{\"type\":\"programming\",\"extensions\":[\".m4\",\".mc\"],\"tm_scope\":\"source.m4\",\"ace_mode\":\"text\",\"language_id\":215},\"M4Sugar\":{\"type\":\"programming\",\"group\":\"M4\",\"aliases\":[\"autoconf\"],\"extensions\":[\".m4\"],\"filenames\":[\"configure.ac\"],\"tm_scope\":\"source.m4\",\"ace_mode\":\"text\",\"language_id\":216},\"MATLAB\":{\"type\":\"programming\",\"color\":\"#e16737\",\"aliases\":[\"octave\"],\"extensions\":[\".matlab\",\".m\"],\"tm_scope\":\"source.matlab\",\"ace_mode\":\"matlab\",\"codemirror_mode\":\"octave\",\"codemirror_mime_type\":\"text/x-octave\",\"language_id\":225},\"MAXScript\":{\"type\":\"programming\",\"color\":\"#00a6a6\",\"extensions\":[\".ms\",\".mcr\"],\"tm_scope\":\"source.maxscript\",\"ace_mode\":\"text\",\"language_id\":217},\"MLIR\":{\"type\":\"programming\",\"color\":\"#5EC8DB\",\"extensions\":[\".mlir\"],\"tm_scope\":\"source.mlir\",\"ace_mode\":\"text\",\"language_id\":448253929},\"MQL4\":{\"type\":\"programming\",\"color\":\"#62A8D6\",\"extensions\":[\".mq4\",\".mqh\"],\"tm_scope\":\"source.mql5\",\"ace_mode\":\"c_cpp\",\"language_id\":426},\"MQL5\":{\"type\":\"programming\",\"color\":\"#4A76B8\",\"extensions\":[\".mq5\",\".mqh\"],\"tm_scope\":\"source.mql5\",\"ace_mode\":\"c_cpp\",\"language_id\":427},\"MTML\":{\"type\":\"markup\",\"color\":\"#b7e1f4\",\"extensions\":[\".mtml\"],\"tm_scope\":\"text.html.basic\",\"ace_mode\":\"html\",\"codemirror_mode\":\"htmlmixed\",\"codemirror_mime_type\":\"text/html\",\"language_id\":218},\"MUF\":{\"type\":\"programming\",\"group\":\"Forth\",\"extensions\":[\".muf\",\".m\"],\"tm_scope\":\"none\",\"ace_mode\":\"forth\",\"codemirror_mode\":\"forth\",\"codemirror_mime_type\":\"text/x-forth\",\"language_id\":219},\"Macaulay2\":{\"type\":\"programming\",\"extensions\":[\".m2\"],\"aliases\":[\"m2\"],\"interpreters\":[\"M2\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.m2\",\"color\":\"#d8ffff\",\"language_id\":34167825},\"Makefile\":{\"type\":\"programming\",\"color\":\"#427819\",\"aliases\":[\"bsdmake\",\"make\",\"mf\"],\"extensions\":[\".mak\",\".d\",\".make\",\".makefile\",\".mk\",\".mkfile\"],\"filenames\":[\"BSDmakefile\",\"GNUmakefile\",\"Kbuild\",\"Makefile\",\"Makefile.am\",\"Makefile.boot\",\"Makefile.frag\",\"Makefile.in\",\"Makefile.inc\",\"Makefile.wat\",\"makefile\",\"makefile.sco\",\"mkfile\"],\"interpreters\":[\"make\"],\"tm_scope\":\"source.makefile\",\"ace_mode\":\"makefile\",\"codemirror_mode\":\"cmake\",\"codemirror_mime_type\":\"text/x-cmake\",\"language_id\":220},\"Mako\":{\"type\":\"programming\",\"color\":\"#7e858d\",\"extensions\":[\".mako\",\".mao\"],\"tm_scope\":\"text.html.mako\",\"ace_mode\":\"text\",\"language_id\":221},\"Markdown\":{\"type\":\"prose\",\"color\":\"#083fa1\",\"aliases\":[\"pandoc\"],\"ace_mode\":\"markdown\",\"codemirror_mode\":\"gfm\",\"codemirror_mime_type\":\"text/x-gfm\",\"wrap\":true,\"extensions\":[\".md\",\".livemd\",\".markdown\",\".mdown\",\".mdwn\",\".mdx\",\".mkd\",\".mkdn\",\".mkdown\",\".ronn\",\".scd\",\".workbook\"],\"filenames\":[\"contents.lr\"],\"tm_scope\":\"source.gfm\",\"language_id\":222},\"Marko\":{\"type\":\"markup\",\"color\":\"#42bff2\",\"tm_scope\":\"text.marko\",\"extensions\":[\".marko\"],\"aliases\":[\"markojs\"],\"ace_mode\":\"text\",\"codemirror_mode\":\"htmlmixed\",\"codemirror_mime_type\":\"text/html\",\"language_id\":932782397},\"Mask\":{\"type\":\"markup\",\"color\":\"#f97732\",\"ace_mode\":\"mask\",\"extensions\":[\".mask\"],\"tm_scope\":\"source.mask\",\"language_id\":223},\"Mathematica\":{\"type\":\"programming\",\"color\":\"#dd1100\",\"extensions\":[\".mathematica\",\".cdf\",\".m\",\".ma\",\".mt\",\".nb\",\".nbp\",\".wl\",\".wlt\"],\"aliases\":[\"mma\",\"wolfram\",\"wolfram language\",\"wolfram lang\",\"wl\"],\"tm_scope\":\"source.mathematica\",\"ace_mode\":\"text\",\"codemirror_mode\":\"mathematica\",\"codemirror_mime_type\":\"text/x-mathematica\",\"language_id\":224},\"Maven POM\":{\"type\":\"data\",\"group\":\"XML\",\"tm_scope\":\"text.xml.pom\",\"filenames\":[\"pom.xml\"],\"ace_mode\":\"xml\",\"codemirror_mode\":\"xml\",\"codemirror_mime_type\":\"text/xml\",\"language_id\":226},\"Max\":{\"type\":\"programming\",\"color\":\"#c4a79c\",\"aliases\":[\"max/msp\",\"maxmsp\"],\"extensions\":[\".maxpat\",\".maxhelp\",\".maxproj\",\".mxt\",\".pat\"],\"tm_scope\":\"source.json\",\"ace_mode\":\"json\",\"codemirror_mode\":\"javascript\",\"codemirror_mime_type\":\"application/json\",\"language_id\":227},\"Mercury\":{\"type\":\"programming\",\"color\":\"#ff2b2b\",\"ace_mode\":\"prolog\",\"interpreters\":[\"mmi\"],\"extensions\":[\".m\",\".moo\"],\"tm_scope\":\"source.mercury\",\"language_id\":229},\"Meson\":{\"type\":\"programming\",\"color\":\"#007800\",\"filenames\":[\"meson.build\",\"meson_options.txt\"],\"tm_scope\":\"source.meson\",\"ace_mode\":\"text\",\"language_id\":799141244},\"Metal\":{\"type\":\"programming\",\"color\":\"#8f14e9\",\"extensions\":[\".metal\"],\"tm_scope\":\"source.c++\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-c++src\",\"language_id\":230},\"Microsoft Developer Studio Project\":{\"type\":\"data\",\"extensions\":[\".dsp\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":800983837},\"Microsoft Visual Studio Solution\":{\"type\":\"data\",\"extensions\":[\".sln\"],\"tm_scope\":\"source.solution\",\"ace_mode\":\"text\",\"language_id\":849523096},\"MiniD\":{\"type\":\"programming\",\"extensions\":[\".minid\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":231},\"MiniYAML\":{\"type\":\"data\",\"color\":\"#ff1111\",\"tm_scope\":\"source.miniyaml\",\"extensions\":[\".yaml\"],\"ace_mode\":\"yaml\",\"codemirror_mode\":\"yaml\",\"codemirror_mime_type\":\"text/x-yaml\",\"language_id\":4896465},\"Mint\":{\"type\":\"programming\",\"extensions\":[\".mint\"],\"ace_mode\":\"text\",\"color\":\"#02b046\",\"tm_scope\":\"source.mint\",\"language_id\":968740319},\"Mirah\":{\"type\":\"programming\",\"color\":\"#c7a938\",\"extensions\":[\".druby\",\".duby\",\".mirah\"],\"tm_scope\":\"source.ruby\",\"ace_mode\":\"ruby\",\"codemirror_mode\":\"ruby\",\"codemirror_mime_type\":\"text/x-ruby\",\"language_id\":232},\"Modelica\":{\"type\":\"programming\",\"color\":\"#de1d31\",\"extensions\":[\".mo\"],\"tm_scope\":\"source.modelica\",\"ace_mode\":\"text\",\"codemirror_mode\":\"modelica\",\"codemirror_mime_type\":\"text/x-modelica\",\"language_id\":233},\"Modula-2\":{\"type\":\"programming\",\"color\":\"#10253f\",\"extensions\":[\".mod\"],\"tm_scope\":\"source.modula2\",\"ace_mode\":\"text\",\"language_id\":234},\"Modula-3\":{\"type\":\"programming\",\"extensions\":[\".i3\",\".ig\",\".m3\",\".mg\"],\"color\":\"#223388\",\"ace_mode\":\"text\",\"tm_scope\":\"source.modula-3\",\"language_id\":564743864},\"Module Management System\":{\"type\":\"programming\",\"extensions\":[\".mms\",\".mmk\"],\"filenames\":[\"descrip.mmk\",\"descrip.mms\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":235},\"Monkey\":{\"type\":\"programming\",\"extensions\":[\".monkey\",\".monkey2\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.monkey\",\"language_id\":236},\"Monkey C\":{\"type\":\"programming\",\"color\":\"#8D6747\",\"extensions\":[\".mc\"],\"tm_scope\":\"source.mc\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csrc\",\"language_id\":231751931},\"Moocode\":{\"type\":\"programming\",\"extensions\":[\".moo\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":237},\"MoonScript\":{\"type\":\"programming\",\"color\":\"#ff4585\",\"extensions\":[\".moon\"],\"interpreters\":[\"moon\"],\"tm_scope\":\"source.moonscript\",\"ace_mode\":\"text\",\"language_id\":238},\"Motoko\":{\"type\":\"programming\",\"color\":\"#fbb03b\",\"extensions\":[\".mo\"],\"tm_scope\":\"source.mo\",\"ace_mode\":\"text\",\"language_id\":202937027},\"Motorola 68K Assembly\":{\"type\":\"programming\",\"color\":\"#005daa\",\"group\":\"Assembly\",\"aliases\":[\"m68k\"],\"extensions\":[\".asm\",\".i\",\".inc\",\".s\",\".x68\"],\"tm_scope\":\"source.m68k\",\"ace_mode\":\"assembly_x86\",\"language_id\":477582706},\"Muse\":{\"type\":\"prose\",\"extensions\":[\".muse\"],\"tm_scope\":\"text.muse\",\"ace_mode\":\"text\",\"wrap\":true,\"language_id\":474864066,\"aliases\":[\"amusewiki\",\"emacs muse\"]},\"Mustache\":{\"type\":\"markup\",\"color\":\"#724b3b\",\"extensions\":[\".mustache\"],\"tm_scope\":\"text.html.smarty\",\"ace_mode\":\"smarty\",\"codemirror_mode\":\"smarty\",\"codemirror_mime_type\":\"text/x-smarty\",\"language_id\":638334590},\"Myghty\":{\"type\":\"programming\",\"extensions\":[\".myt\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":239},\"NASL\":{\"type\":\"programming\",\"extensions\":[\".nasl\",\".inc\"],\"tm_scope\":\"source.nasl\",\"ace_mode\":\"text\",\"language_id\":171666519},\"NCL\":{\"type\":\"programming\",\"color\":\"#28431f\",\"extensions\":[\".ncl\"],\"tm_scope\":\"source.ncl\",\"ace_mode\":\"text\",\"language_id\":240},\"NEON\":{\"type\":\"data\",\"extensions\":[\".neon\"],\"tm_scope\":\"source.neon\",\"ace_mode\":\"text\",\"aliases\":[\"nette object notation\",\"ne-on\"],\"language_id\":481192983},\"NL\":{\"type\":\"data\",\"extensions\":[\".nl\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":241},\"NPM Config\":{\"type\":\"data\",\"color\":\"#cb3837\",\"group\":\"INI\",\"aliases\":[\"npmrc\"],\"filenames\":[\".npmrc\"],\"tm_scope\":\"source.ini.npmrc\",\"ace_mode\":\"text\",\"language_id\":685022663},\"NSIS\":{\"type\":\"programming\",\"extensions\":[\".nsi\",\".nsh\"],\"tm_scope\":\"source.nsis\",\"ace_mode\":\"text\",\"codemirror_mode\":\"nsis\",\"codemirror_mime_type\":\"text/x-nsis\",\"language_id\":242},\"NWScript\":{\"type\":\"programming\",\"color\":\"#111522\",\"extensions\":[\".nss\"],\"tm_scope\":\"source.c.nwscript\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csrc\",\"language_id\":731233819},\"Nearley\":{\"type\":\"programming\",\"ace_mode\":\"text\",\"color\":\"#990000\",\"extensions\":[\".ne\",\".nearley\"],\"tm_scope\":\"source.ne\",\"language_id\":521429430},\"Nemerle\":{\"type\":\"programming\",\"color\":\"#3d3c6e\",\"extensions\":[\".n\"],\"tm_scope\":\"source.nemerle\",\"ace_mode\":\"text\",\"language_id\":243},\"NetLinx\":{\"type\":\"programming\",\"color\":\"#0aa0ff\",\"extensions\":[\".axs\",\".axi\"],\"tm_scope\":\"source.netlinx\",\"ace_mode\":\"text\",\"language_id\":244},\"NetLinx+ERB\":{\"type\":\"programming\",\"color\":\"#747faa\",\"extensions\":[\".axs.erb\",\".axi.erb\"],\"tm_scope\":\"source.netlinx.erb\",\"ace_mode\":\"text\",\"language_id\":245},\"NetLogo\":{\"type\":\"programming\",\"color\":\"#ff6375\",\"extensions\":[\".nlogo\"],\"tm_scope\":\"source.lisp\",\"ace_mode\":\"lisp\",\"codemirror_mode\":\"commonlisp\",\"codemirror_mime_type\":\"text/x-common-lisp\",\"language_id\":246},\"NewLisp\":{\"type\":\"programming\",\"color\":\"#87AED7\",\"extensions\":[\".nl\",\".lisp\",\".lsp\"],\"interpreters\":[\"newlisp\"],\"tm_scope\":\"source.lisp\",\"ace_mode\":\"lisp\",\"codemirror_mode\":\"commonlisp\",\"codemirror_mime_type\":\"text/x-common-lisp\",\"language_id\":247},\"Nextflow\":{\"type\":\"programming\",\"ace_mode\":\"groovy\",\"tm_scope\":\"source.nextflow\",\"color\":\"#3ac486\",\"extensions\":[\".nf\"],\"filenames\":[\"nextflow.config\"],\"interpreters\":[\"nextflow\"],\"language_id\":506780613},\"Nginx\":{\"type\":\"data\",\"color\":\"#009639\",\"extensions\":[\".nginx\",\".nginxconf\",\".vhost\"],\"filenames\":[\"nginx.conf\"],\"tm_scope\":\"source.nginx\",\"aliases\":[\"nginx configuration file\"],\"ace_mode\":\"text\",\"codemirror_mode\":\"nginx\",\"codemirror_mime_type\":\"text/x-nginx-conf\",\"language_id\":248},\"Nim\":{\"type\":\"programming\",\"color\":\"#ffc200\",\"extensions\":[\".nim\",\".nim.cfg\",\".nimble\",\".nimrod\",\".nims\"],\"filenames\":[\"nim.cfg\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.nim\",\"language_id\":249},\"Ninja\":{\"type\":\"data\",\"tm_scope\":\"source.ninja\",\"extensions\":[\".ninja\"],\"ace_mode\":\"text\",\"language_id\":250},\"Nit\":{\"type\":\"programming\",\"color\":\"#009917\",\"extensions\":[\".nit\"],\"tm_scope\":\"source.nit\",\"ace_mode\":\"text\",\"language_id\":251},\"Nix\":{\"type\":\"programming\",\"color\":\"#7e7eff\",\"extensions\":[\".nix\"],\"aliases\":[\"nixos\"],\"tm_scope\":\"source.nix\",\"ace_mode\":\"nix\",\"language_id\":252},\"Nu\":{\"type\":\"programming\",\"color\":\"#c9df40\",\"aliases\":[\"nush\"],\"extensions\":[\".nu\"],\"filenames\":[\"Nukefile\"],\"tm_scope\":\"source.nu\",\"ace_mode\":\"scheme\",\"codemirror_mode\":\"scheme\",\"codemirror_mime_type\":\"text/x-scheme\",\"interpreters\":[\"nush\"],\"language_id\":253},\"NumPy\":{\"type\":\"programming\",\"color\":\"#9C8AF9\",\"group\":\"Python\",\"extensions\":[\".numpy\",\".numpyw\",\".numsc\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"codemirror_mode\":\"python\",\"codemirror_mime_type\":\"text/x-python\",\"language_id\":254},\"Nunjucks\":{\"type\":\"markup\",\"color\":\"#3d8137\",\"extensions\":[\".njk\"],\"aliases\":[\"njk\"],\"tm_scope\":\"text.html.nunjucks\",\"ace_mode\":\"nunjucks\",\"language_id\":461856962},\"OCaml\":{\"type\":\"programming\",\"ace_mode\":\"ocaml\",\"codemirror_mode\":\"mllike\",\"codemirror_mime_type\":\"text/x-ocaml\",\"color\":\"#3be133\",\"extensions\":[\".ml\",\".eliom\",\".eliomi\",\".ml4\",\".mli\",\".mll\",\".mly\"],\"interpreters\":[\"ocaml\",\"ocamlrun\",\"ocamlscript\"],\"tm_scope\":\"source.ocaml\",\"language_id\":255},\"ObjDump\":{\"type\":\"data\",\"extensions\":[\".objdump\"],\"tm_scope\":\"objdump.x86asm\",\"ace_mode\":\"assembly_x86\",\"language_id\":256},\"Object Data Instance Notation\":{\"type\":\"data\",\"extensions\":[\".odin\"],\"tm_scope\":\"source.odin-ehr\",\"ace_mode\":\"text\",\"language_id\":985227236},\"ObjectScript\":{\"type\":\"programming\",\"extensions\":[\".cls\"],\"language_id\":202735509,\"tm_scope\":\"source.objectscript\",\"color\":\"#424893\",\"ace_mode\":\"text\"},\"Objective-C\":{\"type\":\"programming\",\"tm_scope\":\"source.objc\",\"color\":\"#438eff\",\"aliases\":[\"obj-c\",\"objc\",\"objectivec\"],\"extensions\":[\".m\",\".h\"],\"ace_mode\":\"objectivec\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-objectivec\",\"language_id\":257},\"Objective-C++\":{\"type\":\"programming\",\"tm_scope\":\"source.objc++\",\"color\":\"#6866fb\",\"aliases\":[\"obj-c++\",\"objc++\",\"objectivec++\"],\"extensions\":[\".mm\"],\"ace_mode\":\"objectivec\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-objectivec\",\"language_id\":258},\"Objective-J\":{\"type\":\"programming\",\"color\":\"#ff0c5a\",\"aliases\":[\"obj-j\",\"objectivej\",\"objj\"],\"extensions\":[\".j\",\".sj\"],\"tm_scope\":\"source.js.objj\",\"ace_mode\":\"text\",\"language_id\":259},\"Odin\":{\"type\":\"programming\",\"color\":\"#60AFFE\",\"aliases\":[\"odinlang\",\"odin-lang\"],\"extensions\":[\".odin\"],\"tm_scope\":\"source.odin\",\"ace_mode\":\"text\",\"language_id\":889244082},\"Omgrofl\":{\"type\":\"programming\",\"extensions\":[\".omgrofl\"],\"color\":\"#cabbff\",\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":260},\"Opa\":{\"type\":\"programming\",\"extensions\":[\".opa\"],\"tm_scope\":\"source.opa\",\"ace_mode\":\"text\",\"language_id\":261},\"Opal\":{\"type\":\"programming\",\"color\":\"#f7ede0\",\"extensions\":[\".opal\"],\"tm_scope\":\"source.opal\",\"ace_mode\":\"text\",\"language_id\":262},\"Open Policy Agent\":{\"type\":\"programming\",\"color\":\"#7d9199\",\"ace_mode\":\"text\",\"extensions\":[\".rego\"],\"language_id\":840483232,\"tm_scope\":\"source.rego\"},\"OpenCL\":{\"type\":\"programming\",\"color\":\"#ed2e2d\",\"group\":\"C\",\"extensions\":[\".cl\",\".opencl\"],\"tm_scope\":\"source.c\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csrc\",\"language_id\":263},\"OpenEdge ABL\":{\"type\":\"programming\",\"color\":\"#5ce600\",\"aliases\":[\"progress\",\"openedge\",\"abl\"],\"extensions\":[\".p\",\".cls\",\".w\"],\"tm_scope\":\"source.abl\",\"ace_mode\":\"text\",\"language_id\":264},\"OpenQASM\":{\"type\":\"programming\",\"extensions\":[\".qasm\"],\"color\":\"#AA70FF\",\"tm_scope\":\"source.qasm\",\"ace_mode\":\"text\",\"language_id\":153739399},\"OpenRC runscript\":{\"type\":\"programming\",\"group\":\"Shell\",\"aliases\":[\"openrc\"],\"interpreters\":[\"openrc-run\"],\"tm_scope\":\"source.shell\",\"ace_mode\":\"sh\",\"codemirror_mode\":\"shell\",\"codemirror_mime_type\":\"text/x-sh\",\"language_id\":265},\"OpenSCAD\":{\"type\":\"programming\",\"color\":\"#e5cd45\",\"extensions\":[\".scad\"],\"tm_scope\":\"source.scad\",\"ace_mode\":\"scad\",\"language_id\":266},\"OpenStep Property List\":{\"type\":\"data\",\"extensions\":[\".plist\",\".glyphs\"],\"tm_scope\":\"source.plist\",\"ace_mode\":\"text\",\"language_id\":598917541},\"OpenType Feature File\":{\"type\":\"data\",\"aliases\":[\"AFDKO\"],\"extensions\":[\".fea\"],\"tm_scope\":\"source.opentype\",\"ace_mode\":\"text\",\"language_id\":374317347},\"Org\":{\"type\":\"prose\",\"color\":\"#77aa99\",\"wrap\":true,\"extensions\":[\".org\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":267},\"Ox\":{\"type\":\"programming\",\"extensions\":[\".ox\",\".oxh\",\".oxo\"],\"tm_scope\":\"source.ox\",\"ace_mode\":\"text\",\"language_id\":268},\"Oxygene\":{\"type\":\"programming\",\"color\":\"#cdd0e3\",\"extensions\":[\".oxygene\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":269},\"Oz\":{\"type\":\"programming\",\"color\":\"#fab738\",\"extensions\":[\".oz\"],\"tm_scope\":\"source.oz\",\"ace_mode\":\"text\",\"codemirror_mode\":\"oz\",\"codemirror_mime_type\":\"text/x-oz\",\"language_id\":270},\"P4\":{\"type\":\"programming\",\"color\":\"#7055b5\",\"extensions\":[\".p4\"],\"tm_scope\":\"source.p4\",\"ace_mode\":\"text\",\"language_id\":348895984},\"PEG.js\":{\"type\":\"programming\",\"color\":\"#234d6b\",\"extensions\":[\".pegjs\"],\"tm_scope\":\"source.pegjs\",\"ace_mode\":\"javascript\",\"codemirror_mode\":\"javascript\",\"codemirror_mime_type\":\"text/javascript\",\"language_id\":81442128},\"PHP\":{\"type\":\"programming\",\"tm_scope\":\"text.html.php\",\"ace_mode\":\"php\",\"codemirror_mode\":\"php\",\"codemirror_mime_type\":\"application/x-httpd-php\",\"color\":\"#4F5D95\",\"extensions\":[\".php\",\".aw\",\".ctp\",\".fcgi\",\".inc\",\".php3\",\".php4\",\".php5\",\".phps\",\".phpt\"],\"filenames\":[\".php\",\".php_cs\",\".php_cs.dist\",\"Phakefile\"],\"interpreters\":[\"php\"],\"aliases\":[\"inc\"],\"language_id\":272},\"PLSQL\":{\"type\":\"programming\",\"ace_mode\":\"sql\",\"codemirror_mode\":\"sql\",\"codemirror_mime_type\":\"text/x-plsql\",\"tm_scope\":\"none\",\"color\":\"#dad8d8\",\"extensions\":[\".pls\",\".bdy\",\".ddl\",\".fnc\",\".pck\",\".pkb\",\".pks\",\".plb\",\".plsql\",\".prc\",\".spc\",\".sql\",\".tpb\",\".tps\",\".trg\",\".vw\"],\"language_id\":273},\"PLpgSQL\":{\"type\":\"programming\",\"color\":\"#336790\",\"ace_mode\":\"pgsql\",\"codemirror_mode\":\"sql\",\"codemirror_mime_type\":\"text/x-sql\",\"tm_scope\":\"source.sql\",\"extensions\":[\".pgsql\",\".sql\"],\"language_id\":274},\"POV-Ray SDL\":{\"type\":\"programming\",\"color\":\"#6bac65\",\"aliases\":[\"pov-ray\",\"povray\"],\"extensions\":[\".pov\",\".inc\"],\"tm_scope\":\"source.pov-ray sdl\",\"ace_mode\":\"text\",\"language_id\":275},\"Pan\":{\"type\":\"programming\",\"color\":\"#cc0000\",\"extensions\":[\".pan\"],\"tm_scope\":\"source.pan\",\"ace_mode\":\"text\",\"language_id\":276},\"Papyrus\":{\"type\":\"programming\",\"color\":\"#6600cc\",\"extensions\":[\".psc\"],\"tm_scope\":\"source.papyrus.skyrim\",\"ace_mode\":\"text\",\"language_id\":277},\"Parrot\":{\"type\":\"programming\",\"color\":\"#f3ca0a\",\"extensions\":[\".parrot\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":278},\"Parrot Assembly\":{\"group\":\"Parrot\",\"type\":\"programming\",\"aliases\":[\"pasm\"],\"extensions\":[\".pasm\"],\"interpreters\":[\"parrot\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":279},\"Parrot Internal Representation\":{\"group\":\"Parrot\",\"tm_scope\":\"source.parrot.pir\",\"type\":\"programming\",\"aliases\":[\"pir\"],\"extensions\":[\".pir\"],\"interpreters\":[\"parrot\"],\"ace_mode\":\"text\",\"language_id\":280},\"Pascal\":{\"type\":\"programming\",\"color\":\"#E3F171\",\"aliases\":[\"delphi\",\"objectpascal\"],\"extensions\":[\".pas\",\".dfm\",\".dpr\",\".inc\",\".lpr\",\".pascal\",\".pp\"],\"interpreters\":[\"instantfpc\"],\"tm_scope\":\"source.pascal\",\"ace_mode\":\"pascal\",\"codemirror_mode\":\"pascal\",\"codemirror_mime_type\":\"text/x-pascal\",\"language_id\":281},\"Pawn\":{\"type\":\"programming\",\"color\":\"#dbb284\",\"extensions\":[\".pwn\",\".inc\",\".sma\"],\"tm_scope\":\"source.pawn\",\"ace_mode\":\"text\",\"language_id\":271},\"Pep8\":{\"type\":\"programming\",\"color\":\"#C76F5B\",\"extensions\":[\".pep\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.pep8\",\"language_id\":840372442},\"Perl\":{\"type\":\"programming\",\"tm_scope\":\"source.perl\",\"ace_mode\":\"perl\",\"codemirror_mode\":\"perl\",\"codemirror_mime_type\":\"text/x-perl\",\"color\":\"#0298c3\",\"extensions\":[\".pl\",\".al\",\".cgi\",\".fcgi\",\".perl\",\".ph\",\".plx\",\".pm\",\".psgi\",\".t\"],\"filenames\":[\"Makefile.PL\",\"Rexfile\",\"ack\",\"cpanfile\"],\"interpreters\":[\"cperl\",\"perl\"],\"aliases\":[\"cperl\"],\"language_id\":282},\"Pic\":{\"type\":\"markup\",\"group\":\"Roff\",\"tm_scope\":\"source.pic\",\"extensions\":[\".pic\",\".chem\"],\"ace_mode\":\"text\",\"codemirror_mode\":\"troff\",\"codemirror_mime_type\":\"text/troff\",\"language_id\":425},\"Pickle\":{\"type\":\"data\",\"extensions\":[\".pkl\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":284},\"PicoLisp\":{\"type\":\"programming\",\"color\":\"#6067af\",\"extensions\":[\".l\"],\"interpreters\":[\"picolisp\",\"pil\"],\"tm_scope\":\"source.lisp\",\"ace_mode\":\"lisp\",\"language_id\":285},\"PigLatin\":{\"type\":\"programming\",\"color\":\"#fcd7de\",\"extensions\":[\".pig\"],\"tm_scope\":\"source.pig_latin\",\"ace_mode\":\"text\",\"language_id\":286},\"Pike\":{\"type\":\"programming\",\"color\":\"#005390\",\"extensions\":[\".pike\",\".pmod\"],\"interpreters\":[\"pike\"],\"tm_scope\":\"source.pike\",\"ace_mode\":\"text\",\"language_id\":287},\"PlantUML\":{\"type\":\"data\",\"extensions\":[\".puml\",\".iuml\",\".plantuml\"],\"tm_scope\":\"source.wsd\",\"ace_mode\":\"text\",\"language_id\":833504686},\"Pod\":{\"type\":\"prose\",\"ace_mode\":\"perl\",\"codemirror_mode\":\"perl\",\"codemirror_mime_type\":\"text/x-perl\",\"wrap\":true,\"extensions\":[\".pod\"],\"interpreters\":[\"perl\"],\"tm_scope\":\"none\",\"language_id\":288},\"Pod 6\":{\"type\":\"prose\",\"ace_mode\":\"perl\",\"tm_scope\":\"source.raku\",\"wrap\":true,\"extensions\":[\".pod\",\".pod6\"],\"interpreters\":[\"perl6\"],\"language_id\":155357471},\"PogoScript\":{\"type\":\"programming\",\"color\":\"#d80074\",\"extensions\":[\".pogo\"],\"tm_scope\":\"source.pogoscript\",\"ace_mode\":\"text\",\"language_id\":289},\"Pony\":{\"type\":\"programming\",\"extensions\":[\".pony\"],\"tm_scope\":\"source.pony\",\"ace_mode\":\"text\",\"language_id\":290},\"Portugol\":{\"type\":\"programming\",\"color\":\"#f8bd00\",\"extensions\":[\".por\"],\"tm_scope\":\"source.portugol\",\"ace_mode\":\"text\",\"language_id\":832391833},\"PostCSS\":{\"type\":\"markup\",\"color\":\"#dc3a0c\",\"tm_scope\":\"source.postcss\",\"group\":\"CSS\",\"extensions\":[\".pcss\",\".postcss\"],\"ace_mode\":\"text\",\"language_id\":262764437},\"PostScript\":{\"type\":\"markup\",\"color\":\"#da291c\",\"extensions\":[\".ps\",\".eps\",\".epsi\",\".pfa\"],\"tm_scope\":\"source.postscript\",\"aliases\":[\"postscr\"],\"ace_mode\":\"text\",\"language_id\":291},\"PowerBuilder\":{\"type\":\"programming\",\"color\":\"#8f0f8d\",\"extensions\":[\".pbt\",\".sra\",\".sru\",\".srw\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":292},\"PowerShell\":{\"type\":\"programming\",\"color\":\"#012456\",\"tm_scope\":\"source.powershell\",\"ace_mode\":\"powershell\",\"codemirror_mode\":\"powershell\",\"codemirror_mime_type\":\"application/x-powershell\",\"aliases\":[\"posh\",\"pwsh\"],\"extensions\":[\".ps1\",\".psd1\",\".psm1\"],\"interpreters\":[\"pwsh\"],\"language_id\":293},\"Prisma\":{\"type\":\"data\",\"color\":\"#0c344b\",\"extensions\":[\".prisma\"],\"tm_scope\":\"source.prisma\",\"ace_mode\":\"text\",\"language_id\":499933428},\"Processing\":{\"type\":\"programming\",\"color\":\"#0096D8\",\"extensions\":[\".pde\"],\"tm_scope\":\"source.processing\",\"ace_mode\":\"text\",\"language_id\":294},\"Procfile\":{\"type\":\"programming\",\"color\":\"#3B2F63\",\"filenames\":[\"Procfile\"],\"tm_scope\":\"source.procfile\",\"ace_mode\":\"batchfile\",\"language_id\":305313959},\"Proguard\":{\"type\":\"data\",\"extensions\":[\".pro\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":716513858},\"Prolog\":{\"type\":\"programming\",\"color\":\"#74283c\",\"extensions\":[\".pl\",\".pro\",\".prolog\",\".yap\"],\"interpreters\":[\"swipl\",\"yap\"],\"tm_scope\":\"source.prolog\",\"ace_mode\":\"prolog\",\"language_id\":295},\"Promela\":{\"type\":\"programming\",\"color\":\"#de0000\",\"tm_scope\":\"source.promela\",\"ace_mode\":\"text\",\"extensions\":[\".pml\"],\"language_id\":441858312},\"Propeller Spin\":{\"type\":\"programming\",\"color\":\"#7fa2a7\",\"extensions\":[\".spin\"],\"tm_scope\":\"source.spin\",\"ace_mode\":\"text\",\"language_id\":296},\"Protocol Buffer\":{\"type\":\"data\",\"aliases\":[\"protobuf\",\"Protocol Buffers\"],\"extensions\":[\".proto\"],\"tm_scope\":\"source.proto\",\"ace_mode\":\"protobuf\",\"codemirror_mode\":\"protobuf\",\"codemirror_mime_type\":\"text/x-protobuf\",\"language_id\":297},\"Protocol Buffer Text Format\":{\"type\":\"data\",\"aliases\":[\"text proto\",\"protobuf text format\"],\"extensions\":[\".textproto\",\".pbt\",\".pbtxt\"],\"tm_scope\":\"source.textproto\",\"ace_mode\":\"text\",\"language_id\":436568854},\"Public Key\":{\"type\":\"data\",\"extensions\":[\".asc\",\".pub\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"codemirror_mode\":\"asciiarmor\",\"codemirror_mime_type\":\"application/pgp\",\"language_id\":298},\"Pug\":{\"type\":\"markup\",\"color\":\"#a86454\",\"extensions\":[\".jade\",\".pug\"],\"tm_scope\":\"text.jade\",\"ace_mode\":\"jade\",\"codemirror_mode\":\"pug\",\"codemirror_mime_type\":\"text/x-pug\",\"language_id\":179},\"Puppet\":{\"type\":\"programming\",\"color\":\"#302B6D\",\"extensions\":[\".pp\"],\"filenames\":[\"Modulefile\"],\"ace_mode\":\"text\",\"codemirror_mode\":\"puppet\",\"codemirror_mime_type\":\"text/x-puppet\",\"tm_scope\":\"source.puppet\",\"language_id\":299},\"Pure Data\":{\"type\":\"data\",\"extensions\":[\".pd\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":300},\"PureBasic\":{\"type\":\"programming\",\"color\":\"#5a6986\",\"extensions\":[\".pb\",\".pbi\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":301},\"PureScript\":{\"type\":\"programming\",\"color\":\"#1D222D\",\"extensions\":[\".purs\"],\"tm_scope\":\"source.purescript\",\"ace_mode\":\"haskell\",\"codemirror_mode\":\"haskell\",\"codemirror_mime_type\":\"text/x-haskell\",\"language_id\":302},\"Python\":{\"type\":\"programming\",\"tm_scope\":\"source.python\",\"ace_mode\":\"python\",\"codemirror_mode\":\"python\",\"codemirror_mime_type\":\"text/x-python\",\"color\":\"#3572A5\",\"extensions\":[\".py\",\".cgi\",\".fcgi\",\".gyp\",\".gypi\",\".lmi\",\".py3\",\".pyde\",\".pyi\",\".pyp\",\".pyt\",\".pyw\",\".rpy\",\".smk\",\".spec\",\".tac\",\".wsgi\",\".xpy\"],\"filenames\":[\".gclient\",\"DEPS\",\"SConscript\",\"SConstruct\",\"Snakefile\",\"wscript\"],\"interpreters\":[\"python\",\"python2\",\"python3\"],\"aliases\":[\"python3\",\"rusthon\"],\"language_id\":303},\"Python console\":{\"type\":\"programming\",\"color\":\"#3572A5\",\"group\":\"Python\",\"aliases\":[\"pycon\"],\"tm_scope\":\"text.python.console\",\"ace_mode\":\"text\",\"language_id\":428},\"Python traceback\":{\"type\":\"data\",\"color\":\"#3572A5\",\"group\":\"Python\",\"extensions\":[\".pytb\"],\"tm_scope\":\"text.python.traceback\",\"ace_mode\":\"text\",\"language_id\":304},\"Q#\":{\"type\":\"programming\",\"extensions\":[\".qs\"],\"aliases\":[\"qsharp\"],\"color\":\"#fed659\",\"ace_mode\":\"text\",\"tm_scope\":\"source.qsharp\",\"language_id\":697448245},\"QML\":{\"type\":\"programming\",\"color\":\"#44a51c\",\"extensions\":[\".qml\",\".qbs\"],\"tm_scope\":\"source.qml\",\"ace_mode\":\"text\",\"language_id\":305},\"QMake\":{\"type\":\"programming\",\"extensions\":[\".pro\",\".pri\"],\"interpreters\":[\"qmake\"],\"tm_scope\":\"source.qmake\",\"ace_mode\":\"text\",\"language_id\":306},\"Qt Script\":{\"type\":\"programming\",\"ace_mode\":\"javascript\",\"codemirror_mode\":\"javascript\",\"codemirror_mime_type\":\"text/javascript\",\"extensions\":[\".qs\"],\"filenames\":[\"installscript.qs\",\"toolchain_installscript.qs\"],\"color\":\"#00b841\",\"tm_scope\":\"source.js\",\"language_id\":558193693},\"Quake\":{\"type\":\"programming\",\"filenames\":[\"m3makefile\",\"m3overrides\"],\"color\":\"#882233\",\"ace_mode\":\"text\",\"tm_scope\":\"source.quake\",\"language_id\":375265331},\"R\":{\"type\":\"programming\",\"color\":\"#198CE7\",\"aliases\":[\"R\",\"Rscript\",\"splus\"],\"extensions\":[\".r\",\".rd\",\".rsx\"],\"filenames\":[\".Rprofile\",\"expr-dist\"],\"interpreters\":[\"Rscript\"],\"tm_scope\":\"source.r\",\"ace_mode\":\"r\",\"codemirror_mode\":\"r\",\"codemirror_mime_type\":\"text/x-rsrc\",\"language_id\":307},\"RAML\":{\"type\":\"markup\",\"ace_mode\":\"yaml\",\"codemirror_mode\":\"yaml\",\"codemirror_mime_type\":\"text/x-yaml\",\"tm_scope\":\"source.yaml\",\"color\":\"#77d9fb\",\"extensions\":[\".raml\"],\"language_id\":308},\"RDoc\":{\"type\":\"prose\",\"color\":\"#701516\",\"ace_mode\":\"rdoc\",\"wrap\":true,\"extensions\":[\".rdoc\"],\"tm_scope\":\"text.rdoc\",\"language_id\":309},\"REALbasic\":{\"type\":\"programming\",\"extensions\":[\".rbbas\",\".rbfrm\",\".rbmnu\",\".rbres\",\".rbtbar\",\".rbuistate\"],\"tm_scope\":\"source.vbnet\",\"ace_mode\":\"text\",\"language_id\":310},\"REXX\":{\"type\":\"programming\",\"color\":\"#d90e09\",\"aliases\":[\"arexx\"],\"extensions\":[\".rexx\",\".pprx\",\".rex\"],\"interpreters\":[\"regina\",\"rexx\"],\"tm_scope\":\"source.rexx\",\"ace_mode\":\"text\",\"language_id\":311},\"RMarkdown\":{\"type\":\"prose\",\"color\":\"#198ce7\",\"wrap\":true,\"ace_mode\":\"markdown\",\"codemirror_mode\":\"gfm\",\"codemirror_mime_type\":\"text/x-gfm\",\"extensions\":[\".qmd\",\".rmd\"],\"tm_scope\":\"source.gfm\",\"language_id\":313},\"RPC\":{\"type\":\"programming\",\"aliases\":[\"rpcgen\",\"oncrpc\",\"xdr\"],\"ace_mode\":\"c_cpp\",\"extensions\":[\".x\"],\"tm_scope\":\"source.c\",\"language_id\":1031374237},\"RPGLE\":{\"type\":\"programming\",\"ace_mode\":\"text\",\"color\":\"#2BDE21\",\"aliases\":[\"ile rpg\",\"sqlrpgle\"],\"extensions\":[\".rpgle\",\".sqlrpgle\"],\"tm_scope\":\"source.rpgle\",\"language_id\":609977990},\"RPM Spec\":{\"type\":\"data\",\"tm_scope\":\"source.rpm-spec\",\"extensions\":[\".spec\"],\"aliases\":[\"specfile\"],\"ace_mode\":\"text\",\"codemirror_mode\":\"rpm\",\"codemirror_mime_type\":\"text/x-rpm-spec\",\"language_id\":314},\"RUNOFF\":{\"type\":\"markup\",\"color\":\"#665a4e\",\"extensions\":[\".rnh\",\".rno\"],\"wrap\":true,\"tm_scope\":\"text.runoff\",\"ace_mode\":\"text\",\"language_id\":315},\"Racket\":{\"type\":\"programming\",\"color\":\"#3c5caa\",\"extensions\":[\".rkt\",\".rktd\",\".rktl\",\".scrbl\"],\"interpreters\":[\"racket\"],\"tm_scope\":\"source.racket\",\"ace_mode\":\"lisp\",\"language_id\":316},\"Ragel\":{\"type\":\"programming\",\"color\":\"#9d5200\",\"extensions\":[\".rl\"],\"aliases\":[\"ragel-rb\",\"ragel-ruby\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":317},\"Raku\":{\"type\":\"programming\",\"color\":\"#0000fb\",\"extensions\":[\".6pl\",\".6pm\",\".nqp\",\".p6\",\".p6l\",\".p6m\",\".pl\",\".pl6\",\".pm\",\".pm6\",\".raku\",\".rakumod\",\".t\"],\"interpreters\":[\"perl6\",\"raku\",\"rakudo\"],\"aliases\":[\"perl6\",\"perl-6\"],\"tm_scope\":\"source.raku\",\"ace_mode\":\"perl\",\"codemirror_mode\":\"perl\",\"codemirror_mime_type\":\"text/x-perl\",\"language_id\":283},\"Rascal\":{\"type\":\"programming\",\"color\":\"#fffaa0\",\"extensions\":[\".rsc\"],\"tm_scope\":\"source.rascal\",\"ace_mode\":\"text\",\"language_id\":173616037},\"Raw token data\":{\"type\":\"data\",\"aliases\":[\"raw\"],\"extensions\":[\".raw\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":318},\"ReScript\":{\"type\":\"programming\",\"color\":\"#ed5051\",\"ace_mode\":\"rust\",\"codemirror_mode\":\"rust\",\"codemirror_mime_type\":\"text/x-rustsrc\",\"extensions\":[\".res\"],\"interpreters\":[\"ocaml\"],\"tm_scope\":\"source.rescript\",\"language_id\":501875647},\"Readline Config\":{\"type\":\"data\",\"group\":\"INI\",\"aliases\":[\"inputrc\",\"readline\"],\"filenames\":[\".inputrc\",\"inputrc\"],\"tm_scope\":\"source.inputrc\",\"ace_mode\":\"text\",\"language_id\":538732839},\"Reason\":{\"type\":\"programming\",\"color\":\"#ff5847\",\"ace_mode\":\"rust\",\"codemirror_mode\":\"rust\",\"codemirror_mime_type\":\"text/x-rustsrc\",\"extensions\":[\".re\",\".rei\"],\"tm_scope\":\"source.reason\",\"language_id\":869538413},\"ReasonLIGO\":{\"type\":\"programming\",\"color\":\"#ff5847\",\"ace_mode\":\"rust\",\"codemirror_mode\":\"rust\",\"codemirror_mime_type\":\"text/x-rustsrc\",\"group\":\"LigoLANG\",\"extensions\":[\".religo\"],\"tm_scope\":\"source.religo\",\"language_id\":319002153},\"Rebol\":{\"type\":\"programming\",\"color\":\"#358a5b\",\"extensions\":[\".reb\",\".r\",\".r2\",\".r3\",\".rebol\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.rebol\",\"language_id\":319},\"Record Jar\":{\"type\":\"data\",\"filenames\":[\"language-subtag-registry.txt\"],\"tm_scope\":\"source.record-jar\",\"codemirror_mode\":\"properties\",\"codemirror_mime_type\":\"text/x-properties\",\"ace_mode\":\"text\",\"color\":\"#0673ba\",\"language_id\":865765202},\"Red\":{\"type\":\"programming\",\"color\":\"#f50000\",\"extensions\":[\".red\",\".reds\"],\"aliases\":[\"red/system\"],\"tm_scope\":\"source.red\",\"ace_mode\":\"text\",\"language_id\":320},\"Redcode\":{\"type\":\"programming\",\"extensions\":[\".cw\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":321},\"Redirect Rules\":{\"type\":\"data\",\"aliases\":[\"redirects\"],\"filenames\":[\"_redirects\"],\"tm_scope\":\"source.redirects\",\"ace_mode\":\"text\",\"language_id\":1020148948},\"Regular Expression\":{\"type\":\"data\",\"color\":\"#009a00\",\"extensions\":[\".regexp\",\".regex\"],\"aliases\":[\"regexp\",\"regex\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.regexp\",\"language_id\":363378884},\"Ren'Py\":{\"type\":\"programming\",\"aliases\":[\"renpy\"],\"color\":\"#ff7f7f\",\"extensions\":[\".rpy\"],\"tm_scope\":\"source.renpy\",\"ace_mode\":\"python\",\"language_id\":322},\"RenderScript\":{\"type\":\"programming\",\"extensions\":[\".rs\",\".rsh\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":323},\"Rich Text Format\":{\"type\":\"markup\",\"extensions\":[\".rtf\"],\"tm_scope\":\"text.rtf\",\"ace_mode\":\"text\",\"language_id\":51601661},\"Ring\":{\"type\":\"programming\",\"color\":\"#2D54CB\",\"extensions\":[\".ring\"],\"tm_scope\":\"source.ring\",\"ace_mode\":\"text\",\"language_id\":431},\"Riot\":{\"type\":\"markup\",\"color\":\"#A71E49\",\"ace_mode\":\"html\",\"extensions\":[\".riot\"],\"tm_scope\":\"text.html.riot\",\"language_id\":878396783},\"RobotFramework\":{\"type\":\"programming\",\"color\":\"#00c0b5\",\"extensions\":[\".robot\"],\"tm_scope\":\"text.robot\",\"ace_mode\":\"text\",\"language_id\":324},\"Roff\":{\"type\":\"markup\",\"color\":\"#ecdebe\",\"extensions\":[\".roff\",\".1\",\".1in\",\".1m\",\".1x\",\".2\",\".3\",\".3in\",\".3m\",\".3p\",\".3pm\",\".3qt\",\".3x\",\".4\",\".5\",\".6\",\".7\",\".8\",\".9\",\".l\",\".man\",\".mdoc\",\".me\",\".ms\",\".n\",\".nr\",\".rno\",\".tmac\"],\"filenames\":[\"eqnrc\",\"mmn\",\"mmt\",\"troffrc\",\"troffrc-end\"],\"tm_scope\":\"text.roff\",\"aliases\":[\"groff\",\"man\",\"manpage\",\"man page\",\"man-page\",\"mdoc\",\"nroff\",\"troff\"],\"wrap\":true,\"ace_mode\":\"text\",\"codemirror_mode\":\"troff\",\"codemirror_mime_type\":\"text/troff\",\"language_id\":141},\"Roff Manpage\":{\"type\":\"markup\",\"color\":\"#ecdebe\",\"group\":\"Roff\",\"extensions\":[\".1\",\".1in\",\".1m\",\".1x\",\".2\",\".3\",\".3in\",\".3m\",\".3p\",\".3pm\",\".3qt\",\".3x\",\".4\",\".5\",\".6\",\".7\",\".8\",\".9\",\".man\",\".mdoc\"],\"wrap\":true,\"tm_scope\":\"text.roff\",\"ace_mode\":\"text\",\"codemirror_mode\":\"troff\",\"codemirror_mime_type\":\"text/troff\",\"language_id\":612669833},\"Rouge\":{\"type\":\"programming\",\"ace_mode\":\"clojure\",\"codemirror_mode\":\"clojure\",\"codemirror_mime_type\":\"text/x-clojure\",\"color\":\"#cc0088\",\"extensions\":[\".rg\"],\"tm_scope\":\"source.clojure\",\"language_id\":325},\"Ruby\":{\"type\":\"programming\",\"tm_scope\":\"source.ruby\",\"ace_mode\":\"ruby\",\"codemirror_mode\":\"ruby\",\"codemirror_mime_type\":\"text/x-ruby\",\"color\":\"#701516\",\"aliases\":[\"jruby\",\"macruby\",\"rake\",\"rb\",\"rbx\"],\"extensions\":[\".rb\",\".builder\",\".eye\",\".fcgi\",\".gemspec\",\".god\",\".jbuilder\",\".mspec\",\".pluginspec\",\".podspec\",\".prawn\",\".rabl\",\".rake\",\".rbi\",\".rbuild\",\".rbw\",\".rbx\",\".ru\",\".ruby\",\".spec\",\".thor\",\".watchr\"],\"interpreters\":[\"ruby\",\"macruby\",\"rake\",\"jruby\",\"rbx\"],\"filenames\":[\".irbrc\",\".pryrc\",\".simplecov\",\"Appraisals\",\"Berksfile\",\"Brewfile\",\"Buildfile\",\"Capfile\",\"Dangerfile\",\"Deliverfile\",\"Fastfile\",\"Gemfile\",\"Guardfile\",\"Jarfile\",\"Mavenfile\",\"Podfile\",\"Puppetfile\",\"Rakefile\",\"Snapfile\",\"Steepfile\",\"Thorfile\",\"Vagrantfile\",\"buildfile\"],\"language_id\":326},\"Rust\":{\"type\":\"programming\",\"aliases\":[\"rs\"],\"color\":\"#dea584\",\"extensions\":[\".rs\",\".rs.in\"],\"tm_scope\":\"source.rust\",\"ace_mode\":\"rust\",\"codemirror_mode\":\"rust\",\"codemirror_mime_type\":\"text/x-rustsrc\",\"language_id\":327},\"SAS\":{\"type\":\"programming\",\"color\":\"#B34936\",\"extensions\":[\".sas\"],\"tm_scope\":\"source.sas\",\"ace_mode\":\"text\",\"codemirror_mode\":\"sas\",\"codemirror_mime_type\":\"text/x-sas\",\"language_id\":328},\"SCSS\":{\"type\":\"markup\",\"color\":\"#c6538c\",\"tm_scope\":\"source.css.scss\",\"ace_mode\":\"scss\",\"codemirror_mode\":\"css\",\"codemirror_mime_type\":\"text/x-scss\",\"extensions\":[\".scss\"],\"language_id\":329},\"SELinux Policy\":{\"aliases\":[\"SELinux Kernel Policy Language\",\"sepolicy\"],\"type\":\"data\",\"tm_scope\":\"source.sepolicy\",\"extensions\":[\".te\"],\"filenames\":[\"file_contexts\",\"genfs_contexts\",\"initial_sids\",\"port_contexts\",\"security_classes\"],\"ace_mode\":\"text\",\"language_id\":880010326},\"SMT\":{\"type\":\"programming\",\"extensions\":[\".smt2\",\".smt\"],\"interpreters\":[\"boolector\",\"cvc4\",\"mathsat5\",\"opensmt\",\"smtinterpol\",\"smt-rat\",\"stp\",\"verit\",\"yices2\",\"z3\"],\"tm_scope\":\"source.smt\",\"ace_mode\":\"text\",\"language_id\":330},\"SPARQL\":{\"type\":\"data\",\"color\":\"#0C4597\",\"tm_scope\":\"source.sparql\",\"ace_mode\":\"text\",\"codemirror_mode\":\"sparql\",\"codemirror_mime_type\":\"application/sparql-query\",\"extensions\":[\".sparql\",\".rq\"],\"language_id\":331},\"SQF\":{\"type\":\"programming\",\"color\":\"#3F3F3F\",\"extensions\":[\".sqf\",\".hqf\"],\"tm_scope\":\"source.sqf\",\"ace_mode\":\"text\",\"language_id\":332},\"SQL\":{\"type\":\"data\",\"color\":\"#e38c00\",\"tm_scope\":\"source.sql\",\"ace_mode\":\"sql\",\"codemirror_mode\":\"sql\",\"codemirror_mime_type\":\"text/x-sql\",\"extensions\":[\".sql\",\".cql\",\".ddl\",\".inc\",\".mysql\",\".prc\",\".tab\",\".udf\",\".viw\"],\"language_id\":333},\"SQLPL\":{\"type\":\"programming\",\"color\":\"#e38c00\",\"ace_mode\":\"sql\",\"codemirror_mode\":\"sql\",\"codemirror_mime_type\":\"text/x-sql\",\"tm_scope\":\"source.sql\",\"extensions\":[\".sql\",\".db2\"],\"language_id\":334},\"SRecode Template\":{\"type\":\"markup\",\"color\":\"#348a34\",\"tm_scope\":\"source.lisp\",\"ace_mode\":\"lisp\",\"codemirror_mode\":\"commonlisp\",\"codemirror_mime_type\":\"text/x-common-lisp\",\"extensions\":[\".srt\"],\"language_id\":335},\"SSH Config\":{\"type\":\"data\",\"group\":\"INI\",\"filenames\":[\"ssh-config\",\"ssh_config\",\"sshconfig\",\"sshconfig.snip\",\"sshd-config\",\"sshd_config\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.ssh-config\",\"language_id\":554920715},\"STON\":{\"type\":\"data\",\"group\":\"Smalltalk\",\"extensions\":[\".ston\"],\"tm_scope\":\"source.smalltalk\",\"ace_mode\":\"text\",\"language_id\":336},\"SVG\":{\"type\":\"data\",\"color\":\"#ff9900\",\"extensions\":[\".svg\"],\"tm_scope\":\"text.xml.svg\",\"ace_mode\":\"xml\",\"codemirror_mode\":\"xml\",\"codemirror_mime_type\":\"text/xml\",\"language_id\":337},\"SWIG\":{\"type\":\"programming\",\"extensions\":[\".i\"],\"tm_scope\":\"source.c++\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-c++src\",\"language_id\":1066250075},\"Sage\":{\"type\":\"programming\",\"extensions\":[\".sage\",\".sagews\"],\"tm_scope\":\"source.python\",\"ace_mode\":\"python\",\"codemirror_mode\":\"python\",\"codemirror_mime_type\":\"text/x-python\",\"language_id\":338},\"SaltStack\":{\"type\":\"programming\",\"color\":\"#646464\",\"aliases\":[\"saltstate\",\"salt\"],\"extensions\":[\".sls\"],\"tm_scope\":\"source.yaml.salt\",\"ace_mode\":\"yaml\",\"codemirror_mode\":\"yaml\",\"codemirror_mime_type\":\"text/x-yaml\",\"language_id\":339},\"Sass\":{\"type\":\"markup\",\"color\":\"#a53b70\",\"tm_scope\":\"source.sass\",\"extensions\":[\".sass\"],\"ace_mode\":\"sass\",\"codemirror_mode\":\"sass\",\"codemirror_mime_type\":\"text/x-sass\",\"language_id\":340},\"Scala\":{\"type\":\"programming\",\"tm_scope\":\"source.scala\",\"ace_mode\":\"scala\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-scala\",\"color\":\"#c22d40\",\"extensions\":[\".scala\",\".kojo\",\".sbt\",\".sc\"],\"interpreters\":[\"scala\"],\"language_id\":341},\"Scaml\":{\"type\":\"markup\",\"color\":\"#bd181a\",\"extensions\":[\".scaml\"],\"tm_scope\":\"source.scaml\",\"ace_mode\":\"text\",\"language_id\":342},\"Scheme\":{\"type\":\"programming\",\"color\":\"#1e4aec\",\"extensions\":[\".scm\",\".sch\",\".sld\",\".sls\",\".sps\",\".ss\"],\"interpreters\":[\"scheme\",\"guile\",\"bigloo\",\"chicken\",\"csi\",\"gosh\",\"r6rs\"],\"tm_scope\":\"source.scheme\",\"ace_mode\":\"scheme\",\"codemirror_mode\":\"scheme\",\"codemirror_mime_type\":\"text/x-scheme\",\"language_id\":343},\"Scilab\":{\"type\":\"programming\",\"color\":\"#ca0f21\",\"extensions\":[\".sci\",\".sce\",\".tst\"],\"tm_scope\":\"source.scilab\",\"ace_mode\":\"text\",\"language_id\":344},\"Self\":{\"type\":\"programming\",\"color\":\"#0579aa\",\"extensions\":[\".self\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":345},\"ShaderLab\":{\"type\":\"programming\",\"color\":\"#222c37\",\"extensions\":[\".shader\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.shaderlab\",\"language_id\":664257356},\"Shell\":{\"type\":\"programming\",\"color\":\"#89e051\",\"aliases\":[\"sh\",\"shell-script\",\"bash\",\"zsh\"],\"extensions\":[\".sh\",\".bash\",\".bats\",\".cgi\",\".command\",\".env\",\".fcgi\",\".ksh\",\".sh.in\",\".tmux\",\".tool\",\".zsh\",\".zsh-theme\"],\"filenames\":[\".bash_aliases\",\".bash_history\",\".bash_logout\",\".bash_profile\",\".bashrc\",\".cshrc\",\".env\",\".env.example\",\".flaskenv\",\".kshrc\",\".login\",\".profile\",\".zlogin\",\".zlogout\",\".zprofile\",\".zshenv\",\".zshrc\",\"9fs\",\"PKGBUILD\",\"bash_aliases\",\"bash_logout\",\"bash_profile\",\"bashrc\",\"cshrc\",\"gradlew\",\"kshrc\",\"login\",\"man\",\"profile\",\"zlogin\",\"zlogout\",\"zprofile\",\"zshenv\",\"zshrc\"],\"interpreters\":[\"ash\",\"bash\",\"dash\",\"ksh\",\"mksh\",\"pdksh\",\"rc\",\"sh\",\"zsh\"],\"tm_scope\":\"source.shell\",\"ace_mode\":\"sh\",\"codemirror_mode\":\"shell\",\"codemirror_mime_type\":\"text/x-sh\",\"language_id\":346},\"ShellCheck Config\":{\"type\":\"data\",\"color\":\"#cecfcb\",\"filenames\":[\".shellcheckrc\"],\"aliases\":[\"shellcheckrc\"],\"tm_scope\":\"source.shellcheckrc\",\"ace_mode\":\"ini\",\"codemirror_mode\":\"properties\",\"codemirror_mime_type\":\"text/x-properties\",\"language_id\":687511714},\"ShellSession\":{\"type\":\"programming\",\"extensions\":[\".sh-session\"],\"aliases\":[\"bash session\",\"console\"],\"tm_scope\":\"text.shell-session\",\"ace_mode\":\"sh\",\"codemirror_mode\":\"shell\",\"codemirror_mime_type\":\"text/x-sh\",\"language_id\":347},\"Shen\":{\"type\":\"programming\",\"color\":\"#120F14\",\"extensions\":[\".shen\"],\"tm_scope\":\"source.shen\",\"ace_mode\":\"text\",\"language_id\":348},\"Sieve\":{\"type\":\"programming\",\"tm_scope\":\"source.sieve\",\"ace_mode\":\"text\",\"extensions\":[\".sieve\"],\"codemirror_mode\":\"sieve\",\"codemirror_mime_type\":\"application/sieve\",\"language_id\":208976687},\"Singularity\":{\"type\":\"programming\",\"color\":\"#64E6AD\",\"tm_scope\":\"source.singularity\",\"filenames\":[\"Singularity\"],\"ace_mode\":\"text\",\"language_id\":987024632},\"Slash\":{\"type\":\"programming\",\"color\":\"#007eff\",\"extensions\":[\".sl\"],\"tm_scope\":\"text.html.slash\",\"ace_mode\":\"text\",\"language_id\":349},\"Slice\":{\"type\":\"programming\",\"color\":\"#003fa2\",\"tm_scope\":\"source.slice\",\"ace_mode\":\"text\",\"extensions\":[\".ice\"],\"language_id\":894641667},\"Slim\":{\"type\":\"markup\",\"color\":\"#2b2b2b\",\"extensions\":[\".slim\"],\"tm_scope\":\"text.slim\",\"ace_mode\":\"text\",\"codemirror_mode\":\"slim\",\"codemirror_mime_type\":\"text/x-slim\",\"language_id\":350},\"SmPL\":{\"type\":\"programming\",\"extensions\":[\".cocci\"],\"aliases\":[\"coccinelle\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.smpl\",\"color\":\"#c94949\",\"language_id\":164123055},\"Smali\":{\"type\":\"programming\",\"extensions\":[\".smali\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.smali\",\"language_id\":351},\"Smalltalk\":{\"type\":\"programming\",\"color\":\"#596706\",\"extensions\":[\".st\",\".cs\"],\"aliases\":[\"squeak\"],\"tm_scope\":\"source.smalltalk\",\"ace_mode\":\"text\",\"codemirror_mode\":\"smalltalk\",\"codemirror_mime_type\":\"text/x-stsrc\",\"language_id\":352},\"Smarty\":{\"type\":\"programming\",\"color\":\"#f0c040\",\"extensions\":[\".tpl\"],\"ace_mode\":\"smarty\",\"codemirror_mode\":\"smarty\",\"codemirror_mime_type\":\"text/x-smarty\",\"tm_scope\":\"text.html.smarty\",\"language_id\":353},\"Solidity\":{\"type\":\"programming\",\"color\":\"#AA6746\",\"ace_mode\":\"text\",\"tm_scope\":\"source.solidity\",\"extensions\":[\".sol\"],\"language_id\":237469032},\"Soong\":{\"type\":\"data\",\"tm_scope\":\"source.bp\",\"ace_mode\":\"text\",\"filenames\":[\"Android.bp\"],\"language_id\":222900098},\"SourcePawn\":{\"type\":\"programming\",\"color\":\"#f69e1d\",\"aliases\":[\"sourcemod\"],\"extensions\":[\".sp\",\".inc\"],\"tm_scope\":\"source.sourcepawn\",\"ace_mode\":\"text\",\"language_id\":354},\"Spline Font Database\":{\"type\":\"data\",\"extensions\":[\".sfd\"],\"tm_scope\":\"text.sfd\",\"ace_mode\":\"yaml\",\"language_id\":767169629},\"Squirrel\":{\"type\":\"programming\",\"color\":\"#800000\",\"extensions\":[\".nut\"],\"tm_scope\":\"source.nut\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-c++src\",\"language_id\":355},\"Stan\":{\"type\":\"programming\",\"color\":\"#b2011d\",\"extensions\":[\".stan\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.stan\",\"language_id\":356},\"Standard ML\":{\"type\":\"programming\",\"color\":\"#dc566d\",\"aliases\":[\"sml\"],\"extensions\":[\".ml\",\".fun\",\".sig\",\".sml\"],\"tm_scope\":\"source.ml\",\"ace_mode\":\"text\",\"codemirror_mode\":\"mllike\",\"codemirror_mime_type\":\"text/x-ocaml\",\"language_id\":357},\"Starlark\":{\"type\":\"programming\",\"tm_scope\":\"source.python\",\"ace_mode\":\"python\",\"codemirror_mode\":\"python\",\"codemirror_mime_type\":\"text/x-python\",\"color\":\"#76d275\",\"extensions\":[\".bzl\"],\"filenames\":[\"BUCK\",\"BUILD\",\"BUILD.bazel\",\"Tiltfile\",\"WORKSPACE\"],\"aliases\":[\"bazel\",\"bzl\"],\"language_id\":960266174},\"Stata\":{\"type\":\"programming\",\"color\":\"#1a5f91\",\"extensions\":[\".do\",\".ado\",\".doh\",\".ihlp\",\".mata\",\".matah\",\".sthlp\"],\"tm_scope\":\"source.stata\",\"ace_mode\":\"text\",\"language_id\":358},\"StringTemplate\":{\"type\":\"markup\",\"color\":\"#3fb34f\",\"extensions\":[\".st\"],\"tm_scope\":\"source.string-template\",\"ace_mode\":\"html\",\"codemirror_mode\":\"htmlmixed\",\"codemirror_mime_type\":\"text/html\",\"language_id\":89855901},\"Stylus\":{\"type\":\"markup\",\"color\":\"#ff6347\",\"extensions\":[\".styl\"],\"tm_scope\":\"source.stylus\",\"ace_mode\":\"stylus\",\"language_id\":359},\"SubRip Text\":{\"type\":\"data\",\"color\":\"#9e0101\",\"extensions\":[\".srt\"],\"ace_mode\":\"text\",\"tm_scope\":\"text.srt\",\"language_id\":360},\"SugarSS\":{\"type\":\"markup\",\"color\":\"#2fcc9f\",\"tm_scope\":\"source.css.postcss.sugarss\",\"group\":\"CSS\",\"extensions\":[\".sss\"],\"ace_mode\":\"text\",\"language_id\":826404698},\"SuperCollider\":{\"type\":\"programming\",\"color\":\"#46390b\",\"extensions\":[\".sc\",\".scd\"],\"interpreters\":[\"sclang\",\"scsynth\"],\"tm_scope\":\"source.supercollider\",\"ace_mode\":\"text\",\"language_id\":361},\"Svelte\":{\"type\":\"markup\",\"color\":\"#ff3e00\",\"tm_scope\":\"source.svelte\",\"ace_mode\":\"html\",\"codemirror_mode\":\"htmlmixed\",\"codemirror_mime_type\":\"text/html\",\"extensions\":[\".svelte\"],\"language_id\":928734530},\"Swift\":{\"type\":\"programming\",\"color\":\"#F05138\",\"extensions\":[\".swift\"],\"tm_scope\":\"source.swift\",\"ace_mode\":\"text\",\"codemirror_mode\":\"swift\",\"codemirror_mime_type\":\"text/x-swift\",\"language_id\":362},\"SystemVerilog\":{\"type\":\"programming\",\"color\":\"#DAE1C2\",\"extensions\":[\".sv\",\".svh\",\".vh\"],\"tm_scope\":\"source.systemverilog\",\"ace_mode\":\"verilog\",\"codemirror_mode\":\"verilog\",\"codemirror_mime_type\":\"text/x-systemverilog\",\"language_id\":363},\"TI Program\":{\"type\":\"programming\",\"ace_mode\":\"text\",\"color\":\"#A0AA87\",\"extensions\":[\".8xp\",\".8xk\",\".8xk.txt\",\".8xp.txt\"],\"language_id\":422,\"tm_scope\":\"none\"},\"TLA\":{\"type\":\"programming\",\"color\":\"#4b0079\",\"extensions\":[\".tla\"],\"tm_scope\":\"source.tla\",\"ace_mode\":\"text\",\"language_id\":364},\"TOML\":{\"type\":\"data\",\"color\":\"#9c4221\",\"extensions\":[\".toml\"],\"filenames\":[\"Cargo.lock\",\"Gopkg.lock\",\"Pipfile\",\"poetry.lock\"],\"tm_scope\":\"source.toml\",\"ace_mode\":\"toml\",\"codemirror_mode\":\"toml\",\"codemirror_mime_type\":\"text/x-toml\",\"language_id\":365},\"TSQL\":{\"type\":\"programming\",\"color\":\"#e38c00\",\"extensions\":[\".sql\"],\"ace_mode\":\"sql\",\"tm_scope\":\"source.tsql\",\"language_id\":918334941},\"TSV\":{\"type\":\"data\",\"color\":\"#237346\",\"ace_mode\":\"text\",\"tm_scope\":\"source.generic-db\",\"extensions\":[\".tsv\"],\"language_id\":1035892117},\"TSX\":{\"type\":\"programming\",\"color\":\"#2b7489\",\"group\":\"TypeScript\",\"extensions\":[\".tsx\"],\"tm_scope\":\"source.tsx\",\"ace_mode\":\"javascript\",\"codemirror_mode\":\"jsx\",\"codemirror_mime_type\":\"text/jsx\",\"language_id\":94901924},\"TXL\":{\"type\":\"programming\",\"color\":\"#0178b8\",\"extensions\":[\".txl\"],\"tm_scope\":\"source.txl\",\"ace_mode\":\"text\",\"language_id\":366},\"Talon\":{\"type\":\"programming\",\"ace_mode\":\"text\",\"color\":\"#333333\",\"extensions\":[\".talon\"],\"tm_scope\":\"source.talon\",\"language_id\":959889508},\"Tcl\":{\"type\":\"programming\",\"color\":\"#e4cc98\",\"extensions\":[\".tcl\",\".adp\",\".tcl.in\",\".tm\"],\"filenames\":[\"owh\",\"starfield\"],\"interpreters\":[\"tclsh\",\"wish\"],\"tm_scope\":\"source.tcl\",\"ace_mode\":\"tcl\",\"codemirror_mode\":\"tcl\",\"codemirror_mime_type\":\"text/x-tcl\",\"language_id\":367},\"Tcsh\":{\"type\":\"programming\",\"group\":\"Shell\",\"extensions\":[\".tcsh\",\".csh\"],\"interpreters\":[\"tcsh\",\"csh\"],\"tm_scope\":\"source.shell\",\"ace_mode\":\"sh\",\"codemirror_mode\":\"shell\",\"codemirror_mime_type\":\"text/x-sh\",\"language_id\":368},\"TeX\":{\"type\":\"markup\",\"color\":\"#3D6117\",\"ace_mode\":\"tex\",\"codemirror_mode\":\"stex\",\"codemirror_mime_type\":\"text/x-stex\",\"tm_scope\":\"text.tex.latex\",\"wrap\":true,\"aliases\":[\"latex\"],\"extensions\":[\".tex\",\".aux\",\".bbx\",\".cbx\",\".cls\",\".dtx\",\".ins\",\".lbx\",\".ltx\",\".mkii\",\".mkiv\",\".mkvi\",\".sty\",\".toc\"],\"language_id\":369},\"Tea\":{\"type\":\"markup\",\"extensions\":[\".tea\"],\"tm_scope\":\"source.tea\",\"ace_mode\":\"text\",\"language_id\":370},\"Terra\":{\"type\":\"programming\",\"extensions\":[\".t\"],\"color\":\"#00004c\",\"tm_scope\":\"source.terra\",\"ace_mode\":\"lua\",\"codemirror_mode\":\"lua\",\"codemirror_mime_type\":\"text/x-lua\",\"interpreters\":[\"lua\"],\"language_id\":371},\"Texinfo\":{\"type\":\"prose\",\"wrap\":true,\"extensions\":[\".texinfo\",\".texi\",\".txi\"],\"ace_mode\":\"text\",\"tm_scope\":\"text.texinfo\",\"interpreters\":[\"makeinfo\"],\"language_id\":988020015},\"Text\":{\"type\":\"prose\",\"wrap\":true,\"aliases\":[\"fundamental\",\"plain text\"],\"extensions\":[\".txt\",\".fr\",\".nb\",\".ncl\",\".no\"],\"filenames\":[\"CITATION\",\"CITATIONS\",\"COPYING\",\"COPYING.regex\",\"COPYRIGHT.regex\",\"FONTLOG\",\"INSTALL\",\"INSTALL.mysql\",\"LICENSE\",\"LICENSE.mysql\",\"NEWS\",\"README.me\",\"README.mysql\",\"README.nss\",\"click.me\",\"delete.me\",\"keep.me\",\"package.mask\",\"package.use.mask\",\"package.use.stable.mask\",\"read.me\",\"readme.1st\",\"test.me\",\"use.mask\",\"use.stable.mask\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":372},\"TextMate Properties\":{\"type\":\"data\",\"color\":\"#df66e4\",\"aliases\":[\"tm-properties\"],\"filenames\":[\".tm_properties\"],\"ace_mode\":\"properties\",\"codemirror_mode\":\"properties\",\"codemirror_mime_type\":\"text/x-properties\",\"tm_scope\":\"source.tm-properties\",\"language_id\":981795023},\"Textile\":{\"type\":\"prose\",\"color\":\"#ffe7ac\",\"ace_mode\":\"textile\",\"codemirror_mode\":\"textile\",\"codemirror_mime_type\":\"text/x-textile\",\"wrap\":true,\"extensions\":[\".textile\"],\"tm_scope\":\"none\",\"language_id\":373},\"Thrift\":{\"type\":\"programming\",\"color\":\"#D12127\",\"tm_scope\":\"source.thrift\",\"extensions\":[\".thrift\"],\"ace_mode\":\"text\",\"language_id\":374},\"Turing\":{\"type\":\"programming\",\"color\":\"#cf142b\",\"extensions\":[\".t\",\".tu\"],\"tm_scope\":\"source.turing\",\"ace_mode\":\"text\",\"language_id\":375},\"Turtle\":{\"type\":\"data\",\"extensions\":[\".ttl\"],\"tm_scope\":\"source.turtle\",\"ace_mode\":\"text\",\"codemirror_mode\":\"turtle\",\"codemirror_mime_type\":\"text/turtle\",\"language_id\":376},\"Twig\":{\"type\":\"markup\",\"color\":\"#c1d026\",\"extensions\":[\".twig\"],\"tm_scope\":\"text.html.twig\",\"ace_mode\":\"twig\",\"codemirror_mode\":\"twig\",\"codemirror_mime_type\":\"text/x-twig\",\"language_id\":377},\"Type Language\":{\"type\":\"data\",\"aliases\":[\"tl\"],\"extensions\":[\".tl\"],\"tm_scope\":\"source.tl\",\"ace_mode\":\"text\",\"language_id\":632765617},\"TypeScript\":{\"type\":\"programming\",\"color\":\"#2b7489\",\"aliases\":[\"ts\"],\"interpreters\":[\"deno\",\"ts-node\"],\"extensions\":[\".ts\"],\"tm_scope\":\"source.ts\",\"ace_mode\":\"typescript\",\"codemirror_mode\":\"javascript\",\"codemirror_mime_type\":\"application/typescript\",\"language_id\":378},\"Unified Parallel C\":{\"type\":\"programming\",\"color\":\"#4e3617\",\"group\":\"C\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csrc\",\"extensions\":[\".upc\"],\"tm_scope\":\"source.c\",\"language_id\":379},\"Unity3D Asset\":{\"type\":\"data\",\"color\":\"#222c37\",\"ace_mode\":\"yaml\",\"codemirror_mode\":\"yaml\",\"codemirror_mime_type\":\"text/x-yaml\",\"extensions\":[\".anim\",\".asset\",\".mask\",\".mat\",\".meta\",\".prefab\",\".unity\"],\"tm_scope\":\"source.yaml\",\"language_id\":380},\"Unix Assembly\":{\"type\":\"programming\",\"group\":\"Assembly\",\"extensions\":[\".s\",\".ms\"],\"tm_scope\":\"source.x86\",\"ace_mode\":\"assembly_x86\",\"language_id\":120},\"Uno\":{\"type\":\"programming\",\"color\":\"#9933cc\",\"extensions\":[\".uno\"],\"ace_mode\":\"csharp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csharp\",\"tm_scope\":\"source.cs\",\"language_id\":381},\"UnrealScript\":{\"type\":\"programming\",\"color\":\"#a54c4d\",\"extensions\":[\".uc\"],\"tm_scope\":\"source.java\",\"ace_mode\":\"java\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-java\",\"language_id\":382},\"UrWeb\":{\"type\":\"programming\",\"color\":\"#ccccee\",\"aliases\":[\"Ur/Web\",\"Ur\"],\"extensions\":[\".ur\",\".urs\"],\"tm_scope\":\"source.ur\",\"ace_mode\":\"text\",\"language_id\":383},\"V\":{\"type\":\"programming\",\"color\":\"#4f87c4\",\"aliases\":[\"vlang\"],\"extensions\":[\".v\"],\"tm_scope\":\"source.v\",\"ace_mode\":\"golang\",\"codemirror_mode\":\"go\",\"codemirror_mime_type\":\"text/x-go\",\"language_id\":603371597},\"VBA\":{\"type\":\"programming\",\"color\":\"#867db1\",\"extensions\":[\".bas\",\".cls\",\".frm\",\".frx\",\".vba\"],\"tm_scope\":\"source.vbnet\",\"aliases\":[\"vb6\",\"visual basic 6\",\"visual basic for applications\"],\"ace_mode\":\"text\",\"codemirror_mode\":\"vb\",\"codemirror_mime_type\":\"text/x-vb\",\"language_id\":399230729},\"VBScript\":{\"type\":\"programming\",\"color\":\"#15dcdc\",\"extensions\":[\".vbs\"],\"tm_scope\":\"source.vbnet\",\"ace_mode\":\"text\",\"codemirror_mode\":\"vbscript\",\"codemirror_mime_type\":\"text/vbscript\",\"language_id\":408016005},\"VCL\":{\"type\":\"programming\",\"color\":\"#148AA8\",\"extensions\":[\".vcl\"],\"tm_scope\":\"source.varnish.vcl\",\"ace_mode\":\"text\",\"language_id\":384},\"VHDL\":{\"type\":\"programming\",\"color\":\"#adb2cb\",\"extensions\":[\".vhdl\",\".vhd\",\".vhf\",\".vhi\",\".vho\",\".vhs\",\".vht\",\".vhw\"],\"tm_scope\":\"source.vhdl\",\"ace_mode\":\"vhdl\",\"codemirror_mode\":\"vhdl\",\"codemirror_mime_type\":\"text/x-vhdl\",\"language_id\":385},\"Vala\":{\"type\":\"programming\",\"color\":\"#a56de2\",\"extensions\":[\".vala\",\".vapi\"],\"tm_scope\":\"source.vala\",\"ace_mode\":\"vala\",\"language_id\":386},\"Valve Data Format\":{\"type\":\"data\",\"color\":\"#f26025\",\"aliases\":[\"keyvalues\",\"vdf\"],\"extensions\":[\".vdf\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.keyvalues\",\"language_id\":544060961},\"Verilog\":{\"type\":\"programming\",\"color\":\"#b2b7f8\",\"extensions\":[\".v\",\".veo\"],\"tm_scope\":\"source.verilog\",\"ace_mode\":\"verilog\",\"codemirror_mode\":\"verilog\",\"codemirror_mime_type\":\"text/x-verilog\",\"language_id\":387},\"Vim Help File\":{\"type\":\"prose\",\"color\":\"#199f4b\",\"aliases\":[\"help\",\"vimhelp\"],\"extensions\":[\".txt\"],\"tm_scope\":\"text.vim-help\",\"ace_mode\":\"text\",\"language_id\":508563686},\"Vim Script\":{\"type\":\"programming\",\"color\":\"#199f4b\",\"tm_scope\":\"source.viml\",\"aliases\":[\"vim\",\"viml\",\"nvim\"],\"extensions\":[\".vim\",\".vba\",\".vimrc\",\".vmb\"],\"filenames\":[\".exrc\",\".gvimrc\",\".nvimrc\",\".vimrc\",\"_vimrc\",\"gvimrc\",\"nvimrc\",\"vimrc\"],\"ace_mode\":\"text\",\"language_id\":388},\"Vim Snippet\":{\"type\":\"markup\",\"color\":\"#199f4b\",\"aliases\":[\"SnipMate\",\"UltiSnip\",\"UltiSnips\",\"NeoSnippet\"],\"extensions\":[\".snip\",\".snippet\",\".snippets\"],\"tm_scope\":\"source.vim-snippet\",\"ace_mode\":\"text\",\"language_id\":81265970},\"Visual Basic .NET\":{\"type\":\"programming\",\"color\":\"#945db7\",\"extensions\":[\".vb\",\".vbhtml\"],\"aliases\":[\"visual basic\",\"vbnet\",\"vb .net\",\"vb.net\"],\"tm_scope\":\"source.vbnet\",\"ace_mode\":\"text\",\"codemirror_mode\":\"vb\",\"codemirror_mime_type\":\"text/x-vb\",\"language_id\":389},\"Volt\":{\"type\":\"programming\",\"color\":\"#1F1F1F\",\"extensions\":[\".volt\"],\"tm_scope\":\"source.d\",\"ace_mode\":\"d\",\"codemirror_mode\":\"d\",\"codemirror_mime_type\":\"text/x-d\",\"language_id\":390},\"Vue\":{\"type\":\"markup\",\"color\":\"#41b883\",\"extensions\":[\".vue\"],\"tm_scope\":\"text.html.vue\",\"ace_mode\":\"html\",\"language_id\":391},\"Vyper\":{\"type\":\"programming\",\"extensions\":[\".vy\"],\"color\":\"#2980b9\",\"ace_mode\":\"text\",\"tm_scope\":\"source.vyper\",\"language_id\":1055641948},\"Wavefront Material\":{\"type\":\"data\",\"extensions\":[\".mtl\"],\"tm_scope\":\"source.wavefront.mtl\",\"ace_mode\":\"text\",\"language_id\":392},\"Wavefront Object\":{\"type\":\"data\",\"extensions\":[\".obj\"],\"tm_scope\":\"source.wavefront.obj\",\"ace_mode\":\"text\",\"language_id\":393},\"Web Ontology Language\":{\"type\":\"data\",\"color\":\"#5b70bd\",\"extensions\":[\".owl\"],\"tm_scope\":\"text.xml\",\"ace_mode\":\"xml\",\"language_id\":394},\"WebAssembly\":{\"type\":\"programming\",\"color\":\"#04133b\",\"extensions\":[\".wast\",\".wat\"],\"aliases\":[\"wast\",\"wasm\"],\"tm_scope\":\"source.webassembly\",\"ace_mode\":\"lisp\",\"codemirror_mode\":\"commonlisp\",\"codemirror_mime_type\":\"text/x-common-lisp\",\"language_id\":956556503},\"WebIDL\":{\"type\":\"programming\",\"extensions\":[\".webidl\"],\"tm_scope\":\"source.webidl\",\"ace_mode\":\"text\",\"codemirror_mode\":\"webidl\",\"codemirror_mime_type\":\"text/x-webidl\",\"language_id\":395},\"WebVTT\":{\"type\":\"data\",\"wrap\":true,\"extensions\":[\".vtt\"],\"tm_scope\":\"source.vtt\",\"ace_mode\":\"text\",\"language_id\":658679714},\"Wget Config\":{\"type\":\"data\",\"group\":\"INI\",\"aliases\":[\"wgetrc\"],\"filenames\":[\".wgetrc\"],\"tm_scope\":\"source.wgetrc\",\"ace_mode\":\"text\",\"language_id\":668457123},\"Whiley\":{\"type\":\"programming\",\"color\":\"#d5c397\",\"extensions\":[\".whiley\"],\"tm_scope\":\"source.whiley\",\"ace_mode\":\"text\",\"language_id\":888779559},\"Wikitext\":{\"type\":\"prose\",\"color\":\"#fc5757\",\"wrap\":true,\"aliases\":[\"mediawiki\",\"wiki\"],\"extensions\":[\".mediawiki\",\".wiki\",\".wikitext\"],\"tm_scope\":\"text.html.mediawiki\",\"ace_mode\":\"text\",\"language_id\":228},\"Win32 Message File\":{\"type\":\"data\",\"extensions\":[\".mc\"],\"tm_scope\":\"source.win32-messages\",\"ace_mode\":\"ini\",\"codemirror_mode\":\"properties\",\"codemirror_mime_type\":\"text/x-properties\",\"language_id\":950967261},\"Windows Registry Entries\":{\"type\":\"data\",\"color\":\"#52d5ff\",\"extensions\":[\".reg\"],\"tm_scope\":\"source.reg\",\"ace_mode\":\"ini\",\"codemirror_mode\":\"properties\",\"codemirror_mime_type\":\"text/x-properties\",\"language_id\":969674868},\"Witcher Script\":{\"type\":\"programming\",\"color\":\"#ff0000\",\"extensions\":[\".ws\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.witcherscript\",\"language_id\":686821385},\"Wollok\":{\"type\":\"programming\",\"color\":\"#a23738\",\"extensions\":[\".wlk\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.wollok\",\"language_id\":632745969},\"World of Warcraft Addon Data\":{\"type\":\"data\",\"color\":\"#f7e43f\",\"extensions\":[\".toc\"],\"tm_scope\":\"source.toc\",\"ace_mode\":\"text\",\"language_id\":396},\"X BitMap\":{\"type\":\"data\",\"group\":\"C\",\"aliases\":[\"xbm\"],\"extensions\":[\".xbm\"],\"ace_mode\":\"c_cpp\",\"tm_scope\":\"source.c\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csrc\",\"language_id\":782911107},\"X Font Directory Index\":{\"type\":\"data\",\"filenames\":[\"encodings.dir\",\"fonts.alias\",\"fonts.dir\",\"fonts.scale\"],\"tm_scope\":\"source.fontdir\",\"ace_mode\":\"text\",\"language_id\":208700028},\"X PixMap\":{\"type\":\"data\",\"group\":\"C\",\"aliases\":[\"xpm\"],\"extensions\":[\".xpm\",\".pm\"],\"ace_mode\":\"c_cpp\",\"tm_scope\":\"source.c\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csrc\",\"language_id\":781846279},\"X10\":{\"type\":\"programming\",\"aliases\":[\"xten\"],\"ace_mode\":\"text\",\"extensions\":[\".x10\"],\"color\":\"#4B6BEF\",\"tm_scope\":\"source.x10\",\"language_id\":397},\"XC\":{\"type\":\"programming\",\"color\":\"#99DA07\",\"extensions\":[\".xc\"],\"tm_scope\":\"source.xc\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csrc\",\"language_id\":398},\"XCompose\":{\"type\":\"data\",\"filenames\":[\".XCompose\",\"XCompose\",\"xcompose\"],\"tm_scope\":\"config.xcompose\",\"ace_mode\":\"text\",\"language_id\":225167241},\"XML\":{\"type\":\"data\",\"color\":\"#0060ac\",\"tm_scope\":\"text.xml\",\"ace_mode\":\"xml\",\"codemirror_mode\":\"xml\",\"codemirror_mime_type\":\"text/xml\",\"aliases\":[\"rss\",\"xsd\",\"wsdl\"],\"extensions\":[\".xml\",\".adml\",\".admx\",\".ant\",\".axaml\",\".axml\",\".builds\",\".ccproj\",\".ccxml\",\".clixml\",\".cproject\",\".cscfg\",\".csdef\",\".csl\",\".csproj\",\".ct\",\".depproj\",\".dita\",\".ditamap\",\".ditaval\",\".dll.config\",\".dotsettings\",\".filters\",\".fsproj\",\".fxml\",\".glade\",\".gml\",\".gmx\",\".grxml\",\".gst\",\".hzp\",\".iml\",\".ivy\",\".jelly\",\".jsproj\",\".kml\",\".launch\",\".mdpolicy\",\".mjml\",\".mm\",\".mod\",\".mxml\",\".natvis\",\".ncl\",\".ndproj\",\".nproj\",\".nuspec\",\".odd\",\".osm\",\".pkgproj\",\".pluginspec\",\".proj\",\".props\",\".ps1xml\",\".psc1\",\".pt\",\".rdf\",\".res\",\".resx\",\".rs\",\".rss\",\".sch\",\".scxml\",\".sfproj\",\".shproj\",\".srdf\",\".storyboard\",\".sublime-snippet\",\".targets\",\".tml\",\".ts\",\".tsx\",\".ui\",\".urdf\",\".ux\",\".vbproj\",\".vcxproj\",\".vsixmanifest\",\".vssettings\",\".vstemplate\",\".vxml\",\".wixproj\",\".workflow\",\".wsdl\",\".wsf\",\".wxi\",\".wxl\",\".wxs\",\".x3d\",\".xacro\",\".xaml\",\".xib\",\".xlf\",\".xliff\",\".xmi\",\".xml.dist\",\".xmp\",\".xproj\",\".xsd\",\".xspec\",\".xul\",\".zcml\"],\"filenames\":[\".classpath\",\".cproject\",\".project\",\"App.config\",\"NuGet.config\",\"Settings.StyleCop\",\"Web.Debug.config\",\"Web.Release.config\",\"Web.config\",\"packages.config\"],\"language_id\":399},\"XML Property List\":{\"type\":\"data\",\"color\":\"#0060ac\",\"group\":\"XML\",\"extensions\":[\".plist\",\".stTheme\",\".tmCommand\",\".tmLanguage\",\".tmPreferences\",\".tmSnippet\",\".tmTheme\"],\"tm_scope\":\"text.xml.plist\",\"ace_mode\":\"xml\",\"codemirror_mode\":\"xml\",\"codemirror_mime_type\":\"text/xml\",\"language_id\":75622871},\"XPages\":{\"type\":\"data\",\"extensions\":[\".xsp-config\",\".xsp.metadata\"],\"tm_scope\":\"text.xml\",\"ace_mode\":\"xml\",\"codemirror_mode\":\"xml\",\"codemirror_mime_type\":\"text/xml\",\"language_id\":400},\"XProc\":{\"type\":\"programming\",\"extensions\":[\".xpl\",\".xproc\"],\"tm_scope\":\"text.xml\",\"ace_mode\":\"xml\",\"codemirror_mode\":\"xml\",\"codemirror_mime_type\":\"text/xml\",\"language_id\":401},\"XQuery\":{\"type\":\"programming\",\"color\":\"#5232e7\",\"extensions\":[\".xquery\",\".xq\",\".xql\",\".xqm\",\".xqy\"],\"ace_mode\":\"xquery\",\"codemirror_mode\":\"xquery\",\"codemirror_mime_type\":\"application/xquery\",\"tm_scope\":\"source.xq\",\"language_id\":402},\"XS\":{\"type\":\"programming\",\"extensions\":[\".xs\"],\"tm_scope\":\"source.c\",\"ace_mode\":\"c_cpp\",\"codemirror_mode\":\"clike\",\"codemirror_mime_type\":\"text/x-csrc\",\"language_id\":403},\"XSLT\":{\"type\":\"programming\",\"aliases\":[\"xsl\"],\"extensions\":[\".xslt\",\".xsl\"],\"tm_scope\":\"text.xml.xsl\",\"ace_mode\":\"xml\",\"codemirror_mode\":\"xml\",\"codemirror_mime_type\":\"text/xml\",\"color\":\"#EB8CEB\",\"language_id\":404},\"Xojo\":{\"type\":\"programming\",\"color\":\"#81bd41\",\"extensions\":[\".xojo_code\",\".xojo_menu\",\".xojo_report\",\".xojo_script\",\".xojo_toolbar\",\".xojo_window\"],\"tm_scope\":\"source.xojo\",\"ace_mode\":\"text\",\"language_id\":405},\"Xonsh\":{\"type\":\"programming\",\"color\":\"#285EEF\",\"extensions\":[\".xsh\"],\"tm_scope\":\"source.python\",\"ace_mode\":\"text\",\"codemirror_mode\":\"python\",\"codemirror_mime_type\":\"text/x-python\",\"language_id\":614078284},\"Xtend\":{\"type\":\"programming\",\"color\":\"#24255d\",\"extensions\":[\".xtend\"],\"tm_scope\":\"source.xtend\",\"ace_mode\":\"text\",\"language_id\":406},\"YAML\":{\"type\":\"data\",\"color\":\"#cb171e\",\"tm_scope\":\"source.yaml\",\"aliases\":[\"yml\"],\"extensions\":[\".yml\",\".mir\",\".reek\",\".rviz\",\".sublime-syntax\",\".syntax\",\".yaml\",\".yaml-tmlanguage\",\".yaml.sed\",\".yml.mysql\"],\"filenames\":[\".clang-format\",\".clang-tidy\",\".gemrc\",\"CITATION.cff\",\"glide.lock\",\"yarn.lock\"],\"ace_mode\":\"yaml\",\"codemirror_mode\":\"yaml\",\"codemirror_mime_type\":\"text/x-yaml\",\"language_id\":407},\"YANG\":{\"type\":\"data\",\"extensions\":[\".yang\"],\"tm_scope\":\"source.yang\",\"ace_mode\":\"text\",\"language_id\":408},\"YARA\":{\"type\":\"programming\",\"color\":\"#220000\",\"ace_mode\":\"text\",\"extensions\":[\".yar\",\".yara\"],\"tm_scope\":\"source.yara\",\"language_id\":805122868},\"YASnippet\":{\"type\":\"markup\",\"aliases\":[\"snippet\",\"yas\"],\"color\":\"#32AB90\",\"extensions\":[\".yasnippet\"],\"tm_scope\":\"source.yasnippet\",\"ace_mode\":\"text\",\"language_id\":378760102},\"Yacc\":{\"type\":\"programming\",\"extensions\":[\".y\",\".yacc\",\".yy\"],\"tm_scope\":\"source.yacc\",\"ace_mode\":\"text\",\"color\":\"#4B6C4B\",\"language_id\":409},\"Yul\":{\"type\":\"programming\",\"color\":\"#794932\",\"ace_mode\":\"text\",\"tm_scope\":\"source.yul\",\"extensions\":[\".yul\"],\"language_id\":237469033},\"ZAP\":{\"type\":\"programming\",\"color\":\"#0d665e\",\"extensions\":[\".zap\",\".xzap\"],\"tm_scope\":\"source.zap\",\"ace_mode\":\"text\",\"language_id\":952972794},\"ZIL\":{\"type\":\"programming\",\"color\":\"#dc75e5\",\"extensions\":[\".zil\",\".mud\"],\"tm_scope\":\"source.zil\",\"ace_mode\":\"text\",\"language_id\":973483626},\"Zeek\":{\"type\":\"programming\",\"aliases\":[\"bro\"],\"extensions\":[\".zeek\",\".bro\"],\"tm_scope\":\"source.zeek\",\"ace_mode\":\"text\",\"language_id\":40},\"ZenScript\":{\"type\":\"programming\",\"color\":\"#00BCD1\",\"extensions\":[\".zs\"],\"tm_scope\":\"source.zenscript\",\"ace_mode\":\"text\",\"language_id\":494938890},\"Zephir\":{\"type\":\"programming\",\"color\":\"#118f9e\",\"extensions\":[\".zep\"],\"tm_scope\":\"source.php.zephir\",\"ace_mode\":\"php\",\"language_id\":410},\"Zig\":{\"type\":\"programming\",\"color\":\"#ec915c\",\"extensions\":[\".zig\"],\"tm_scope\":\"source.zig\",\"ace_mode\":\"text\",\"language_id\":646424281},\"Zimpl\":{\"type\":\"programming\",\"color\":\"#d67711\",\"extensions\":[\".zimpl\",\".zmpl\",\".zpl\"],\"tm_scope\":\"none\",\"ace_mode\":\"text\",\"language_id\":411},\"cURL Config\":{\"type\":\"data\",\"group\":\"INI\",\"aliases\":[\"curlrc\"],\"filenames\":[\".curlrc\",\"_curlrc\"],\"tm_scope\":\"source.curlrc\",\"ace_mode\":\"text\",\"language_id\":992375436},\"desktop\":{\"type\":\"data\",\"extensions\":[\".desktop\",\".desktop.in\",\".service\"],\"tm_scope\":\"source.desktop\",\"ace_mode\":\"text\",\"language_id\":412},\"dircolors\":{\"type\":\"data\",\"extensions\":[\".dircolors\"],\"filenames\":[\".dir_colors\",\".dircolors\",\"DIR_COLORS\",\"_dir_colors\",\"_dircolors\",\"dir_colors\"],\"tm_scope\":\"source.dircolors\",\"ace_mode\":\"text\",\"language_id\":691605112},\"eC\":{\"type\":\"programming\",\"color\":\"#913960\",\"extensions\":[\".ec\",\".eh\"],\"tm_scope\":\"source.c.ec\",\"ace_mode\":\"text\",\"language_id\":413},\"edn\":{\"type\":\"data\",\"ace_mode\":\"clojure\",\"codemirror_mode\":\"clojure\",\"codemirror_mime_type\":\"text/x-clojure\",\"extensions\":[\".edn\"],\"tm_scope\":\"source.clojure\",\"language_id\":414},\"fish\":{\"type\":\"programming\",\"color\":\"#4aae47\",\"group\":\"Shell\",\"interpreters\":[\"fish\"],\"extensions\":[\".fish\"],\"tm_scope\":\"source.fish\",\"ace_mode\":\"text\",\"language_id\":415},\"hoon\":{\"type\":\"programming\",\"color\":\"#00b171\",\"tm_scope\":\"source.hoon\",\"ace_mode\":\"text\",\"extensions\":[\".hoon\"],\"language_id\":560883276},\"jq\":{\"color\":\"#c7254e\",\"ace_mode\":\"text\",\"type\":\"programming\",\"extensions\":[\".jq\"],\"tm_scope\":\"source.jq\",\"language_id\":905371884},\"kvlang\":{\"type\":\"markup\",\"ace_mode\":\"text\",\"extensions\":[\".kv\"],\"color\":\"#1da6e0\",\"tm_scope\":\"source.python.kivy\",\"language_id\":970675279},\"mIRC Script\":{\"type\":\"programming\",\"color\":\"#3d57c3\",\"extensions\":[\".mrc\"],\"tm_scope\":\"source.msl\",\"ace_mode\":\"text\",\"language_id\":517654727},\"mcfunction\":{\"type\":\"programming\",\"color\":\"#E22837\",\"extensions\":[\".mcfunction\"],\"tm_scope\":\"source.mcfunction\",\"ace_mode\":\"text\",\"language_id\":462488745},\"mupad\":{\"type\":\"programming\",\"color\":\"#244963\",\"extensions\":[\".mu\"],\"tm_scope\":\"source.mupad\",\"ace_mode\":\"text\",\"language_id\":416},\"nanorc\":{\"type\":\"data\",\"color\":\"#2d004d\",\"group\":\"INI\",\"extensions\":[\".nanorc\"],\"filenames\":[\".nanorc\",\"nanorc\"],\"tm_scope\":\"source.nanorc\",\"ace_mode\":\"text\",\"language_id\":775996197},\"nesC\":{\"type\":\"programming\",\"color\":\"#94B0C7\",\"extensions\":[\".nc\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.nesc\",\"language_id\":417},\"ooc\":{\"type\":\"programming\",\"color\":\"#b0b77e\",\"extensions\":[\".ooc\"],\"tm_scope\":\"source.ooc\",\"ace_mode\":\"text\",\"language_id\":418},\"q\":{\"type\":\"programming\",\"extensions\":[\".q\"],\"tm_scope\":\"source.q\",\"ace_mode\":\"text\",\"color\":\"#0040cd\",\"language_id\":970539067},\"reStructuredText\":{\"type\":\"prose\",\"color\":\"#141414\",\"wrap\":true,\"aliases\":[\"rst\"],\"extensions\":[\".rst\",\".rest\",\".rest.txt\",\".rst.txt\"],\"tm_scope\":\"text.restructuredtext\",\"ace_mode\":\"text\",\"codemirror_mode\":\"rst\",\"codemirror_mime_type\":\"text/x-rst\",\"language_id\":419},\"robots.txt\":{\"type\":\"data\",\"aliases\":[\"robots\",\"robots txt\"],\"filenames\":[\"robots.txt\"],\"ace_mode\":\"text\",\"tm_scope\":\"text.robots-txt\",\"language_id\":674736065},\"sed\":{\"type\":\"programming\",\"color\":\"#64b970\",\"extensions\":[\".sed\"],\"interpreters\":[\"gsed\",\"minised\",\"sed\",\"ssed\"],\"ace_mode\":\"text\",\"tm_scope\":\"source.sed\",\"language_id\":847830017},\"wdl\":{\"type\":\"programming\",\"color\":\"#42f1f4\",\"extensions\":[\".wdl\"],\"tm_scope\":\"source.wdl\",\"ace_mode\":\"text\",\"language_id\":374521672},\"wisp\":{\"type\":\"programming\",\"ace_mode\":\"clojure\",\"codemirror_mode\":\"clojure\",\"codemirror_mime_type\":\"text/x-clojure\",\"color\":\"#7582D1\",\"extensions\":[\".wisp\"],\"tm_scope\":\"source.clojure\",\"language_id\":420},\"xBase\":{\"type\":\"programming\",\"color\":\"#403a40\",\"aliases\":[\"advpl\",\"clipper\",\"foxpro\"],\"extensions\":[\".prg\",\".ch\",\".prw\"],\"tm_scope\":\"source.harbour\",\"ace_mode\":\"text\",\"language_id\":421}}");

},{}]},["7SvX3","kyksZ"], "kyksZ", "parcelRequire4e47", {})

//# sourceMappingURL=tomatopickle.github.io.d29bb997.js.map
