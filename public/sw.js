if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),d={module:{uri:n},exports:t,require:r};s[n]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/557-4f69323764f6a953.js",revision:"4f69323764f6a953"},{url:"/_next/static/chunks/66-386732f84d5bfc7d.js",revision:"386732f84d5bfc7d"},{url:"/_next/static/chunks/802-d0a6d843dde699ab.js",revision:"d0a6d843dde699ab"},{url:"/_next/static/chunks/framework-0f8b31729833af61.js",revision:"0f8b31729833af61"},{url:"/_next/static/chunks/main-ef24da7775c42111.js",revision:"ef24da7775c42111"},{url:"/_next/static/chunks/pages/404-a568e6ca643327ad.js",revision:"a568e6ca643327ad"},{url:"/_next/static/chunks/pages/_app-385cb2565b46c736.js",revision:"385cb2565b46c736"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"2280fa386d040b66"},{url:"/_next/static/chunks/pages/beer-06ec82a061c7944b.js",revision:"06ec82a061c7944b"},{url:"/_next/static/chunks/pages/delivery-000e84349dde4c55.js",revision:"000e84349dde4c55"},{url:"/_next/static/chunks/pages/error-7f6ba98d6489843d.js",revision:"7f6ba98d6489843d"},{url:"/_next/static/chunks/pages/index-f15c7424b6ebee9f.js",revision:"f15c7424b6ebee9f"},{url:"/_next/static/chunks/pages/snack-d5c600b136dc86b8.js",revision:"d5c600b136dc86b8"},{url:"/_next/static/chunks/pages/thanks-bb792318d93eb821.js",revision:"bb792318d93eb821"},{url:"/_next/static/chunks/pages/wine-0adde478355c4e74.js",revision:"0adde478355c4e74"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-49b6f2937c9ce9f4.js",revision:"49b6f2937c9ce9f4"},{url:"/_next/static/css/1107288ec7e22c6e.css",revision:"1107288ec7e22c6e"},{url:"/_next/static/css/1149554c76220da6.css",revision:"1149554c76220da6"},{url:"/_next/static/css/3f1ef91e388f43b1.css",revision:"3f1ef91e388f43b1"},{url:"/_next/static/css/6e30f07e2d445346.css",revision:"6e30f07e2d445346"},{url:"/_next/static/css/e1404a31362cb6da.css",revision:"e1404a31362cb6da"},{url:"/_next/static/css/fc56b27a1689e48d.css",revision:"fc56b27a1689e48d"},{url:"/_next/static/iYlAnvj0B-jrTZneyE3A3/_buildManifest.js",revision:"c114f515dee729206726f784664d8627"},{url:"/_next/static/iYlAnvj0B-jrTZneyE3A3/_middlewareManifest.js",revision:"60ed9523f510025b6e688aada2df4cec"},{url:"/_next/static/iYlAnvj0B-jrTZneyE3A3/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/basket.30bae20d.svg",revision:"6ac615c4c6c425c12d937d2a3227f33e"},{url:"/_next/static/media/category-background.fe305539.png",revision:"fe305539"},{url:"/_next/static/media/fire.3bd4389d.png",revision:"3bd4389d"},{url:"/_next/static/media/instagram.c48e33f9.png",revision:"49e83ae3c6bf20e8ccf6f124acf2d550"},{url:"/_next/static/media/location.efd7cd7f.svg",revision:"a87417365b63c983a0dd92da26aa51ba"},{url:"/_next/static/media/main-background.85146289.png",revision:"85146289"},{url:"/_next/static/media/main-logo.cdc403ab.png",revision:"08b5e99acd5f5619ea0aeec8a19a105e"},{url:"/_next/static/media/phone.68025a0f.svg",revision:"ef15e8486c34e2635b250bde31a1ed16"},{url:"/_next/static/media/sale.be0784f0.png",revision:"be0784f0"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/_next/static/media/top-navigation.3993df52.svg",revision:"79b7041df48c47619b248f34766f968c"},{url:"/admin/config.yml",revision:"f0243bcf9a41eab0f31dc4918857669a"},{url:"/admin/index.html",revision:"79d88a137e82916237ac11b18e0774de"},{url:"/beer.json",revision:"391b3616c83b4107986eded81117dbfc"},{url:"/discount.json",revision:"4c3df5878a8afed3943bb7121ad5ba58"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icons/icon-192x192.png",revision:"6035d3aeaa49fcffb676d568f8dfc40a"},{url:"/icons/icon-256x256.png",revision:"5dcb39dcb340f19d6ba6429a3e41c067"},{url:"/icons/icon-384x384.png",revision:"c66fc747c56fa0279e037a14ad4d1546"},{url:"/icons/icon-512x512.png",revision:"e0cc88d04a7c9282dd1cd95b5138ac5c"},{url:"/images/basket.svg",revision:"6ac615c4c6c425c12d937d2a3227f33e"},{url:"/images/beer.png",revision:"1e5f9d7924c0f07e9faa36aab7ec8617"},{url:"/images/category-background.png",revision:"019fad2a2c834d7c5f43b6beca23d3ec"},{url:"/images/delivery.svg",revision:"dbcf87cf73e13e794328a827a0e592c4"},{url:"/images/i-icon.png",revision:"860c9981a017aaf329640a3cdd7402f6"},{url:"/images/instagram.png",revision:"49e83ae3c6bf20e8ccf6f124acf2d550"},{url:"/images/location.svg",revision:"a87417365b63c983a0dd92da26aa51ba"},{url:"/images/lviv.png",revision:"c92929e08cafec107c9cdf6778813d33"},{url:"/images/main-background.png",revision:"0802892caf132f049abcbf48c86f5d91"},{url:"/images/main-logo.png",revision:"08b5e99acd5f5619ea0aeec8a19a105e"},{url:"/images/minus-icon.svg",revision:"6131e8283aa63c28acd3c37c70a356bb"},{url:"/images/phone.svg",revision:"ef15e8486c34e2635b250bde31a1ed16"},{url:"/images/plus-icon.svg",revision:"d0b16200a7a893e6c7d9a81125d3d32a"},{url:"/images/price.svg",revision:"75ecb402c0e47e65004c601e136eb01c"},{url:"/images/red-wine.png",revision:"381a68bc80f75682b27cea72042d1aeb"},{url:"/images/snack.png",revision:"7becb38b32bb8dc616cd6724f84c8c40"},{url:"/images/time.svg",revision:"ab1796ecd0b44cccbda9cfdc041b0d10"},{url:"/images/top-navigation.svg",revision:"79b7041df48c47619b248f34766f968c"},{url:"/images/white-wine.png",revision:"d7904f063b63ed8aace3ed8675f1d682"},{url:"/images/wine-photo.png",revision:"6ce5d35bfb3a4e02f36bad1448822ffc"},{url:"/images/wine.png",revision:"525d2266e842ffca23a503c24debb151"},{url:"/manifest.webmanifest",revision:"d5f39ec8d9e740fe664e9dce08dcd1f1"},{url:"/snack.json",revision:"91abcf8c1a4929e7b1df78cad0c8542c"},{url:"/vercel.svg",revision:"0277e415b4bba9361a057a607884c295"},{url:"/wine.json",revision:"54c45de6647967427ae7279a56eb2044"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
