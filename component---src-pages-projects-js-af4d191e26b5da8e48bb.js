(self.webpackChunkyordevs_site=self.webpackChunkyordevs_site||[]).push([[853],{1496:function(e,t,a){"use strict";var r=a(5318);t.Z=void 0;var i,n=r(a(1506)),o=r(a(5354)),d=r(a(7316)),s=r(a(7154)),l=r(a(7294)),c=r(a(5697)),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=m(t||a||[]);return r&&r.src},m=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=p(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,w=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function k(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+l+o+d+a+r+t+n+i+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,o=e.ariaHidden,d=l.default.createElement(P,(0,s.default)({ref:t,src:a},n,{ariaHidden:o}));return r.length>1?l.default.createElement("picture",null,i(r),d):d})),P=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},m,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));P.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=p(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,d=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,w=e.itemProp,E=e.loading,I=e.draggable,L=g||h;if(!L)return null;var O=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,s.default)({opacity:O?1:0,transition:N?"opacity "+y+"ms":"none"},d),V="boolean"==typeof b?"lightgray":b,_={transitionDelay:y+"ms"},j=(0,s.default)({opacity:this.state.imgLoaded?0:1},N&&_,d,f),H={title:t,alt:this.state.isVisible?"":a,style:j,className:p,itemProp:w},Z=this.state.isHydrated?m(L):L[0];if(g)return l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:Z.maxWidth?Z.maxWidth+"px":null,maxHeight:Z.maxHeight?Z.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(Z.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/Z.aspectRatio+"%"}}),V&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&_)}),Z.base64&&l.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:Z.base64,spreadProps:H,imageVariants:L,generateSources:k}),Z.tracedSVG&&l.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:Z.tracedSVG,spreadProps:H,imageVariants:L,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,S(L),l.default.createElement(P,{alt:a,title:t,sizes:Z.sizes,src:Z.src,crossOrigin:this.props.crossOrigin,srcSet:Z.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,s.default)({alt:a,title:t,loading:E},Z,{imageVariants:L}))}}));if(h){var T=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:Z.width,height:Z.height},n);return"inherit"===n.display&&delete T.display,l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(Z.srcSet)},V&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:V,width:Z.width,opacity:this.state.imgLoaded?0:1,height:Z.height},N&&_)}),Z.base64&&l.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:Z.base64,spreadProps:H,imageVariants:L,generateSources:k}),Z.tracedSVG&&l.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:Z.tracedSVG,spreadProps:H,imageVariants:L,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,S(L),l.default.createElement(P,{alt:a,title:t,width:Z.width,height:Z.height,sizes:Z.sizes,src:Z.src,crossOrigin:this.props.crossOrigin,srcSet:Z.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,s.default)({alt:a,title:t,loading:E},Z,{imageVariants:L}))}}))}return null},t}(l.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),z=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function V(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}O.propTypes={resolutions:N,sizes:z,fixed:V(c.default.oneOfType([N,c.default.arrayOf(N)])),fluid:V(c.default.oneOfType([z,c.default.arrayOf(z)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var _=O;t.Z=_},7004:function(e,t,a){"use strict";var r=a(7294),i=a(9),n=a(5444),o=a(5825),d=o.Z.color,s=o.Z.font,l=o.Z.transition,c=o.Z.breakpoint,u=(0,i.ZP)(n.Link).withConfig({displayName:"Button__StyledButton",componentId:"uqfqte-0"})(["display:inline-block;text-decoration:none;text-align:center;font-weight:",";background-color:",";color:",";text-align:center;border:2px solid ",";border-radius:25rem;padding:0.3em 2em;margin:0.5em 0;width:100%;@media (","){width:fit-content;}transition:all ",";&:hover,&:focus,&:active{background-color:",";color:",";}@media (","){width:fit-content;}"],s.weight.semibold,(function(e){return e.primary?d.accent:d.background}),(function(e){return e.primary?d.background:d.accent}),d.accent,c.md,l.standard,(function(e){return e.primary?d.background:d.accent}),(function(e){return e.primary?d.accent:d.background}),c.md);t.Z=function(e){var t=e.to,a=e.children,i=e.className,n=e.primary,o=void 0!==n&&n;return/^\/(?!\/)/.test(t)?r.createElement(u,{to:t,className:i,primary:o},a):r.createElement(u,{as:"a",href:t,target:"_blank",rel:"noopener noreferrer",className:i,primary:o},a)}},3086:function(e,t,a){"use strict";var r=a(7294),i=a(9),n=a(5444),o=a(5825),d=o.Z.color,s=o.Z.font,l=(0,i.ZP)(n.Link).withConfig({displayName:"TextLink__StyledTextLink",componentId:"ueorkm-0"})(["text-decoration:none;color:",";transition:all 0.15s ease;font-weight:",";border-radius:2px;&:hover,&:focus,&:active{background:",";color:",";}"],d.accent,s.weight.semibold,d.accent,d.background);t.Z=function(e){var t=e.to,a=e.className,i=e.children;return/^\/(?!\/)/.test(t)?r.createElement(l,{to:t,className:a},i):r.createElement(l,{as:"a",href:t,target:"_blank",rel:"noopener noreferrer",className:a},i)}},7856:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var r=a(7294),i=a(455),n=a(9),o=a(3086),d=a(1496),s=a(7004),l=n.ZP.div.withConfig({displayName:"ProjectCard__Card",componentId:"xwndo1-0"})(["display:flex;align-items:center;flex-direction:column;text-align:center;padding:20px;margin:0 0.5em;margin-bottom:1em;"]),c=n.ZP.p.withConfig({displayName:"ProjectCard__ProjectDescription",componentId:"xwndo1-1"})(["text-align:center;font-style:italic;"]),u=(0,n.ZP)(d.Z).withConfig({displayName:"ProjectCard__ProjectPreview",componentId:"xwndo1-2"})(["border:5px solid #555;"]),f=n.ZP.div.withConfig({displayName:"ProjectCard__NoImage",componentId:"xwndo1-3"})(["width:250px;height:130px;border:5px solid #555;background-color:#aaa;padding-top:30px;font-size:40px;"]),p=function(e){var t=e.project.frontmatter,a=t.title,i=t.client,n=t.description,o=t.preview,d=t.slug;return r.createElement(l,null,o?r.createElement(u,{fixed:o.childImageSharp.fixed}):r.createElement(f,null,"?"),r.createElement("h2",null,a),r.createElement("h3",null,i),r.createElement(c,null,n),r.createElement(s.Z,{to:d},"Find Out More"))},m=n.ZP.div.withConfig({displayName:"projects__ProjectHolder",componentId:"tx69if-0"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));grid-auto-rows:auto;gap:1rem;column-gap:1rem;"]),g=function(e){var t=e.data.allMarkdownRemark.edges.filter((function(e){return!!e.node.frontmatter.date})).map((function(e){return r.createElement(p,{key:e.node.id,project:e.node})}));return r.createElement(i.Z,{title:"Our Work"},r.createElement("h1",null,"Our Work"),r.createElement("p",null,"Here are some examples of work we've completed, if you like them and want us to do something similar for you, ",r.createElement(o.Z,{to:"/contact"},"Contact Us")),r.createElement(m,null,t))}}}]);
//# sourceMappingURL=component---src-pages-projects-js-af4d191e26b5da8e48bb.js.map