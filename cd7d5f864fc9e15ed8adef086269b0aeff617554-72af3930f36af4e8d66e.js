(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"6Gk8":function(e,t,a){"use strict";var i=a("q54Q"),r=a("q1tI"),d=a.n(r),n=a("Wbzz"),s=a("9eSz"),o=a.n(s),l=a("p3AD");var u="734670849";t.a=function(){return d.a.createElement(n.StaticQuery,{query:u,render:function(e){var t=e.site.siteMetadata,a=t.author,i=t.social;return d.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.5)}},d.a.createElement(o.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),d.a.createElement("p",null,"Yeah, I write. Catch up with me on"," ",d.a.createElement("a",{href:"https://twitter.com/"+i.twitter},"twitter.")))},data:i})}},"9eSz":function(e,t,a){"use strict";var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,d=i(a("PJYZ")),n=i(a("VbXa")),s=i(a("8OQS")),o=i(a("pVnL")),l=i(a("q1tI")),u=i(a("17x9")),c=function(e){var t=(0,o.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(S&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(S&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),m=function(e){var t=c(e),a=p(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,S="undefined"!=typeof window,y=S&&window.IntersectionObserver,v=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,d=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:d}),l.default.createElement("source",{media:r,srcSet:a,sizes:d}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function R(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function I(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,d=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(d?'sizes="'+d+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},V=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",d=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+l+n+s+a+i+t+d+r+o+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=l.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,d=e.spreadProps,n=e.ariaHidden,s=l.default.createElement(A,(0,o.default)({ref:t,src:a},d,{ariaHidden:n}));return i.length>1?l.default.createElement("picture",null,r(i),s):s})),A=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,d=e.style,n=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,o.default)({"aria-hidden":p,sizes:a,srcSet:i,src:r},g,{onLoad:n,onError:u,ref:t,loading:c,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},d)}))}));A.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=S&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||S&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,d.default)(a)),a.handleRef=a.handleRef.bind((0,d.default)(a)),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=p(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,d=void 0===r?{}:r,n=e.imgStyle,s=void 0===n?{}:n,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,S=e.durationFadeIn,y=e.Tag,v=e.itemProp,E=e.loading,I=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,o.default)({opacity:L?1:0,transition:k?"opacity "+S+"ms":"none"},s),H="boolean"==typeof b?"lightgray":b,z={transitionDelay:S+"ms"},W=(0,o.default)({opacity:this.state.imgLoaded?0:1},k&&z,s,f),P={title:t,alt:this.state.isVisible?"":a,style:W,className:p,itemProp:v};if(h){var G=h,N=g(h);return l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:N.maxWidth?N.maxWidth+"px":null,maxHeight:N.maxHeight?N.maxHeight+"px":null},d),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),H&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&z)}),N.base64&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:N.base64,spreadProps:P,imageVariants:G,generateSources:x}),N.tracedSVG&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:N.tracedSVG,spreadProps:P,imageVariants:G,generateSources:R}),this.state.isVisible&&l.default.createElement("picture",null,w(G),l.default.createElement(A,{alt:a,title:t,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:V((0,o.default)({alt:a,title:t,loading:E},N,{imageVariants:G}))}}))}if(m){var q=m,K=g(m),C=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:K.width,height:K.height},d);return"inherit"===d.display&&delete C.display,l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(K.srcSet)},H&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:H,width:K.width,opacity:this.state.imgLoaded?0:1,height:K.height},k&&z)}),K.base64&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:K.base64,spreadProps:P,imageVariants:q,generateSources:x}),K.tracedSVG&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:K.tracedSVG,spreadProps:P,imageVariants:q,generateSources:R}),this.state.isVisible&&l.default.createElement("picture",null,w(q),l.default.createElement(A,{alt:a,title:t,width:K.width,height:K.height,sizes:K.sizes,src:K.src,crossOrigin:this.props.crossOrigin,srcSet:K.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:V((0,o.default)({alt:a,title:t,loading:E},K,{imageVariants:q}))}}))}return null},t}(l.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),H=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});k.propTypes={resolutions:T,sizes:H,fixed:u.default.oneOfType([T,u.default.arrayOf(T)]),fluid:u.default.oneOfType([H,u.default.arrayOf(H)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var z=k;t.default=z},q54Q:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAFFElEQVQ4y12SCUxUVxSGX61LU9G2oraKWvdobNoqlaDFpbFVW9AqioDbIFrFheICQW2rKAHFXQFxhIiARVAQBJG1giASWZRFB2dgdsBotagtRpkZvt4BU5K+5H/n3pdzvvuf865ksViwymwxYzGLtdmMuaNL1r01mjraMdPB/x+TyYRZ5HfWv62VuoHdUGs0d5i6YGZTV3F7G7XV5aRcvkxBQR7NTYbO75aOjm6oxQo0d8P+D223tHcW1d4rxXftYhynTqLvIDsGjxjO5Cn2yOVRIs/UWWeydBmQOiHWNq2yvNV/e+HA9ILAdfOw/eB9JowZit3IIXw8dDD9BwzgEzs7iopudB76xtze5bDTrvlt2+ZumMnU5e7xw2uE+00mJmA+se6DiHB5j7POPfGf3Q+bAbbs2bu3q3WLdTRvkDrEsNsF+Y31J4i1paPzLRK6gA2lEegK1tJWvI86HxsafPpQ5tmT3JU2OI61wU3mzV/tr3nS9pKnr18gqV61UfnkKeVPnnH/HzH4561Ut7ZS0/qc6jYzJaUXKD27jADPr/Ga0o9dTn1xGv0hPtP7s33eYGSbfMnRP+aq0kiGkJTf1EK2voksoSs6I+l6IY2RS2oDSZpH3Ms/SVnoTNy+HIjL5OEEOA7C4VMbZPa9SfToT9ZmexLK7nCq1kBElRop16ClwKghr0lLhl5DtlFLtkFDuk5Nqt6AqjQGqo5T6D2E8o12aH6yIXGuRJWsF4+29aF0x1SiKqs5WaNEXq1CytbUk6dTUdiiI9egFg5VXNEruahVkKBVka+uhNuBlHv1oHSdLdV+tlz36Ilis8TLfb3Iit/NKY2ByIcK5AolUppOSY6hkfxmrXCpIdPQQKKunkRtPUkiphn0PKkKpmKDRKXPMHT+w7i5tjd3N0o8ODyeOHFH47WNnG9UEqsSDvOaG/mjWUOugKUJWKpwmKx7SKpRRabQNTGOMl0xrzK/4fHOvtQtl6j3kygRB5xx+4iwpIvk/KkjWV0rgHVWYD03WuopaFaJ2EhW0wPSjLVktdwnw1hDdnOdGEEdTTV7eB4+kJxVEnFuPYhwlvB0sGW+ywp8D0RwXHGLI9qbSFcMVSQZykg03OSi8RZx+hJiDCVE626R3FJN+rP7hF6K5dweR/6OH0HUQomTP0j4OL7LmLETGDVuGk5OP7LtQCZbkpORQlTxhDRcJkh1kf2qFI425hKuvoHceJvjhSmkFqUTEXmcpdNsqdrVm2xviX3f92XiuNHMmuPGatlW/P0PsnDxbj6fvhXpmCqdqMYsTjfkEK++xVXDXa41VZBXlce2rT8T6LeFQN91OEwcSdDsdzgom8ScGfaMn2CPq6uMwJ1h+GwRQNf1ODo5IyVpisnU3RGXu5LrovV0YzFlQpcT5Jw4cYQ1stWE/roB2Wo3XGd+hvuyhfhv34TrkkW4uCxgqbsXXt5+eHiuZdTYiUhZ+lLh6gYp2lzOq1KJVidy/U4yJ46GERoaxNzv5pGRFkd0dDhfTHHAbclS/Pz8me+8iJmz5jNt+ixksvWsWu3NlK+mIp1SHiVMGcSB+mCOKSKR18RyNvow0WfCCQ3ZxxovLyoqiijIT8HDYzl7fjtI0P5DrPfZjvMCTxwcZ3AoLJzg4IMsX+mNFKkIJ0pxmhjFOS4oU0ivyyQu5iS/x8s5eiREKJTKikJiYo4R4B/AhYQ4URzM7t2/MGPmt7h7rEB+Jha/bTuYM3ce/wKTBZuIYuEaoAAAAABJRU5ErkJggg==","width":50,"height":50,"src":"/blog/static/e1a3d4d4f6d7471bf2ca4174167807df/8ba1e/profile-pic.png","srcSet":"/blog/static/e1a3d4d4f6d7471bf2ca4174167807df/8ba1e/profile-pic.png 1x,\\n/blog/static/e1a3d4d4f6d7471bf2ca4174167807df/f937a/profile-pic.png 1.5x,\\n/blog/static/e1a3d4d4f6d7471bf2ca4174167807df/71eb7/profile-pic.png 2x"}}},"site":{"siteMetadata":{"author":"Mohamed Shadab","social":{"twitter":"statebait"}}}}}')}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-72af3930f36af4e8d66e.js.map