/*
Bones Scripts File
Author: Eddie Machado

This file should contain any js scripts you want to add to the site.
Instead of calling it in the header or throwing it inside wp_head()
this file will be called automatically in the footer so as not to
slow the page load.

*/

// HERO FULL HEIGHT NAV //

jQuery(document).ready(function($){
 // Defining a function to set size for #hero 
    function fullscreen(){
        jQuery('.hero').css({
            width: jQuery(window).width(),
            height: jQuery(window).height()
        });
    }
  
    fullscreen();

  // Run the function in case of window resize
  jQuery(window).resize(function() {
       fullscreen();         
    });

});

// SMOOTH SCROLL // 

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// IE8 ployfill for GetComputed Style (for Responsive Script below)
if (!window.getComputedStyle) {
    window.getComputedStyle = function(el, pseudo) {
        this.el = el;
        this.getPropertyValue = function(prop) {
            var re = /(\-([a-z]){1})/g;
            if (prop == 'float') prop = 'styleFloat';
            if (re.test(prop)) {
                prop = prop.replace(re, function () {
                    return arguments[2].toUpperCase();
                });
            }
            return el.currentStyle[prop] ? el.currentStyle[prop] : null;
        }
        return this;
    }
}

// as the page loads, call these scripts
jQuery(document).ready(function($) {

    /*
    Responsive jQuery is a tricky thing.
    There's a bunch of different ways to handle
    it, so be sure to research and find the one
    that works for you best.
    */

    
    /* getting viewport width */
    var responsive_viewport = $(window).width();
    
    /* if is below 481px */
    if (responsive_viewport < 481) {
    
    } /* end smallest screen */
    
    /* if is larger than 481px */
    if (responsive_viewport > 481) {
        
    } /* end larger than 481px */
    
    /* if is above or equal to 768px */
    if (responsive_viewport >= 768) {
    
        /* load gravatars */
        $('.comment img[data-gravatar]').each(function(){
            $(this).attr('src',$(this).attr('data-gravatar'));
        });
        
    }
    
    /* off the bat large screen actions */
    if (responsive_viewport > 1030) {
        
    }
    
	
	// add all your scripts here
	
 
}); /* end of as page load scripts */


/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT License.
*/
(function(w){
	// This fix addresses an iOS bug, so return early if the UA claims it's something else.
	if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1 ) ){ return; }
    var doc = w.document;
    if( !doc.querySelector ){ return; }
    var meta = doc.querySelector( "meta[name=viewport]" ),
        initialContent = meta && meta.getAttribute( "content" ),
        disabledZoom = initialContent + ",maximum-scale=1",
        enabledZoom = initialContent + ",maximum-scale=10",
        enabled = true,
		x, y, z, aig;
    if( !meta ){ return; }
    function restoreZoom(){
        meta.setAttribute( "content", enabledZoom );
        enabled = true; }
    function disableZoom(){
        meta.setAttribute( "content", disabledZoom );
        enabled = false; }
    function checkTilt( e ){
		aig = e.accelerationIncludingGravity;
		x = Math.abs( aig.x );
		y = Math.abs( aig.y );
		z = Math.abs( aig.z );
		// If portrait orientation and in one of the danger zones
        if( !w.orientation && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
			if( enabled ){ disableZoom(); } }
		else if( !enabled ){ restoreZoom(); } }
	w.addEventListener( "orientationchange", restoreZoom, false );
	w.addEventListener( "devicemotion", checkTilt, false );
})( this );

(function(){!function(a){return a.bigfoot=function(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;return e=void 0,k={actionOriginalFN:"hide",activateCallback:function(){},activateOnHover:!1,allowMultipleFN:!1,anchorPattern:/(fn|footnote|note)[:\-_\d]/gi,anchorParentTagname:"sup",breakpoints:{},deleteOnUnhover:!1,footnoteParentClass:"footnote",footnoteTagname:"li",hoverDelay:250,numberResetSelector:void 0,popoverDeleteDelay:300,popoverCreateDelay:100,positionContent:!0,preventPageScroll:!0,scope:!1,useFootnoteOnlyOnce:!0,contentMarkup:'<aside class="bigfoot-footnote is-positioned-bottom" data-footnote-number="{{FOOTNOTENUM}}" data-footnote-identifier="{{FOOTNOTEID}}" alt="Footnote {{FOOTNOTENUM}}"> <div class="bigfoot-footnote__wrapper"> <div class="bigfoot-footnote__content"> {{FOOTNOTECONTENT}} </div></div> <div class="bigfoot-footnote__tooltip"></div> </aside>',buttonMarkup:'<div class=\'bigfoot-footnote__container\'> <button class="bigfoot-footnote__button" id="{{SUP:data-footnote-backlink-ref}}" data-footnote-number="{{FOOTNOTENUM}}" data-footnote-identifier="{{FOOTNOTEID}}" alt="See Footnote {{FOOTNOTENUM}}" rel="footnote" data-bigfoot-footnote="{{FOOTNOTECONTENT}}"> <svg class="bigfoot-footnote__button__circle" viewbox="0 0 6 6" preserveAspectRatio="xMinYMin"><circle r="3" cx="3" cy="3" fill="white"></circle></svg> <svg class="bigfoot-footnote__button__circle" viewbox="0 0 6 6" preserveAspectRatio="xMinYMin"><circle r="3" cx="3" cy="3" fill="white"></circle></svg> <svg class="bigfoot-footnote__button__circle" viewbox="0 0 6 6" preserveAspectRatio="xMinYMin"><circle r="3" cx="3" cy="3" fill="white"></circle></svg> </button></div>'},y=a.extend(k,b),q={},n=function(){var b,c,d,e,f,g,i,j,k,m,n,o,p,q,r,t,u,w,x,z;for(n=y.scope?""+y.scope+' a[href*="#"]':'a[href*="#"]',d=a(n).filter(function(){var b,c;return b=a(this),c=b.attr("rel"),("null"===c||null==c)&&(c=""),(""+b.attr("href")+c).match(y.anchorPattern)&&b.closest("[class*="+y.footnoteParentClass+"]:not(a):not("+y.anchorParentTagname+")").length<1}),t=[],q=[],k=[],h(d,q),a(q).each(function(){var b,c;return c=a(this).data("footnote-ref").replace(/[:.+~*\]\[]/g,"\\$&"),y.useFootnoteOnlyOnce&&(c=""+c+":not(.footnote-processed)"),b=a(c).closest(y.footnoteTagname),b.length>0?(t.push(b.first().addClass("footnote-processed")),k.push(this)):void 0}),c=a("[data-footnote-identifier]:last"),p=c.length<1?0:+c.data("footnote-identifier"),z=[],u=w=0,x=t.length;x>=0?x>w:w>x;u=x>=0?++w:--w)switch(o=s(a(t[u]).html().trim(),a(k[u]).data("footnote-backlink-ref")),o=o.replace(/"/g,"&quot;").replace(/&lt;/g,"&ltsym;").replace(/&gt;/g,"&gtsym;"),p+=1,m="",i=a(k[u]),j=a(t[u]),null!=y.numberResetSelector?(b=i.closest(y.numberResetSelector),b.is(f)?r+=1:r=1,f=b):r=p,0!==o.indexOf("<")&&(o="<p>"+o+"</p>"),m=y.buttonMarkup.replace(/\{\{FOOTNOTENUM\}\}/g,r).replace(/\{\{FOOTNOTEID\}\}/g,p).replace(/\{\{FOOTNOTECONTENT\}\}/g,o),m=v(m,"SUP",i),m=v(m,"FN",j),e=a(m).insertBefore(i),g=j.parent(),y.actionOriginalFN.toLowerCase()){case"hide":i.addClass("footnote-print-only"),j.addClass("footnote-print-only"),z.push(l(g));break;case"delete":i.remove(),j.remove(),z.push(l(g));break;default:z.push(i.addClass("footnote-print-only"))}return z},h=function(b,c){var d,e,f,g;null==c&&(c=[]),d=void 0,e=void 0,f=void 0,g=void 0,b.each(function(){var b,e;return e=a(this),f="#"+e.attr("href").split("#")[1],d=e.closest(y.anchorParentTagname),b=e.find(y.anchorParentTagname),d.length>0?(g=(d.attr("id")||"")+(e.attr("id")||""),c.push(d.attr({"data-footnote-backlink-ref":g,"data-footnote-ref":f}))):b.length>0?(g=(b.attr("id")||"")+(e.attr("id")||""),c.push(e.attr({"data-footnote-backlink-ref":g,"data-footnote-ref":f}))):(g=e.attr("id")||"",c.push(e.attr({"data-footnote-backlink-ref":g,"data-footnote-ref":f})))})},l=function(a){var b;return b=void 0,a.is(":empty")||0===a.children(":not(.footnote-print-only)").length?(b=a.parent(),"delete"===y.actionOriginalFN.toLowerCase()?a.remove():a.addClass("footnote-print-only"),l(b)):a.children(":not(.footnote-print-only)").length===a.children("hr:not(.footnote-print-only)").length?(b=a.parent(),"delete"===y.actionOriginalFN.toLowerCase()?a.remove():(a.children("hr").addClass("footnote-print-only"),a.addClass("footnote-print-only")),l(b)):void 0},s=function(a,b){var c;return b.indexOf(" ")>=0&&(b=b.trim().replace(/\s+/g,"|").replace(/(.*)/g,"($1)")),c=new RegExp("(\\s|&nbsp;)*<\\s*a[^#<]*#"+b+"[^>]*>(.*?)<\\s*/\\s*a>","g"),a.replace(c,"").replace("[]","")},v=function(a,b,c){var d,e,f,g;for(e=new RegExp("\\{\\{"+b+":([^\\}]*)\\}\\}","g"),d=void 0,g=void 0,f=void 0,d=e.exec(a);d;)d[1]&&(g=c.attr(d[1])||"",a=a.replace("{{"+b+":"+d[1]+"}}",g)),d=e.exec(a);return a},f=function(b){var c,d,e;if(y.activateOnHover){if(c=a(b.target).closest(".bigfoot-footnote__button"),d='[data-footnote-identifier="'+c.attr("data-footnote-identifier")+'"]',c.hasClass("is-active"))return;c.addClass("is-hover-instantiated"),y.allowMultipleFN||(e=".bigfoot-footnote:not("+d+")",u(e)),j(".bigfoot-footnote__button"+d).addClass("is-hover-instantiated")}},z=function(b){var c,d,e;e=a(b.target),c=e.closest(".bigfoot-footnote__button"),d=e.closest(".bigfoot-footnote"),c.length>0?(b.preventDefault(),i(c)):d.length<1&&a(".bigfoot-footnote").length>0&&u()},i=function(a){var b;a.blur(),b='data-footnote-identifier="'+a.attr("data-footnote-identifier")+'"',a.hasClass("changing")||(a.hasClass("is-active")?y.allowMultipleFN?u(".bigfoot-footnote["+b+"]"):u():(a.addClass("changing"),setTimeout(function(){return a.removeClass("changing")},y.popoverCreateDelay),j(".bigfoot-footnote__button["+b+"]"),a.addClass("is-click-instantiated"),y.allowMultipleFN||u(".bigfoot-footnote:not(["+b+"])")))},j=function(b){var c,d;return c=void 0,c="string"!=typeof b&&y.allowMultipleFN?b:"string"!=typeof b?b.first():y.allowMultipleFN?a(b).closest(".bigfoot-footnote__button"):a(b+":first").closest(".bigfoot-footnote__button"),d=a(),c.each(function(){var b,e,f,h;f=a(this),h=void 0;try{return h=y.contentMarkup.replace(/\{\{FOOTNOTENUM\}\}/g,f.attr("data-footnote-number")).replace(/\{\{FOOTNOTEID\}\}/g,f.attr("data-footnote-identifier")).replace(/\{\{FOOTNOTECONTENT\}\}/g,f.attr("data-bigfoot-footnote")).replace(/\&gtsym\;/g,"&gt;").replace(/\&ltsym\;/g,"&lt;"),h=v(h,"BUTTON",f)}finally{b=a(h);try{y.activateCallback(b,f)}catch(i){}b.insertAfter(c),q[f.attr("data-footnote-identifier")]="init",b.attr("bigfoot-max-width",g(b.css("max-width"),b)),b.css("max-width",1e4),e=b.find(".bigfoot-footnote__content"),b.attr("data-bigfoot-max-height",g(e.css("max-height"),e)),w(),f.addClass("is-active"),b.find(".bigfoot-footnote__content").bindScrollHandler(),d=d.add(b)}}),setTimeout(function(){return d.addClass("is-active")},y.popoverCreateDelay),d},d=function(){var a,b;return a=document.createElement("div"),a.style.cssText="display:inline-block;padding:0;line-height:1;position:absolute;visibility:hidden;font-size:1em;",a.appendChild(document.createElement("M")),document.body.appendChild(a),b=a.offsetHeight,document.body.removeChild(a),b},g=function(a,b){return"none"===a?a=1e4:a.indexOf("rem")>=0?a=parseFloat(a)*d():a.indexOf("em")>=0?a=parseFloat(a)*parseFloat(b.css("font-size")):a.indexOf("px")>=0?(a=parseFloat(a),60>=a&&(a/=parseFloat(b.parent().css("width")))):a.indexOf("%")>=0&&(a=parseFloat(a)/100),a},a.fn.bindScrollHandler=function(){return y.preventPageScroll?(a(this).on("DOMMouseScroll mousewheel",function(b){var c,d,e,f,g,h,i,j;return d=a(this),i=d.scrollTop(),h=d[0].scrollHeight,f=parseInt(d.css("height")),c=d.closest(".bigfoot-footnote"),d.scrollTop()>0&&d.scrollTop()<10&&c.addClass("is-scrollable"),c.hasClass("is-scrollable")?(e="DOMMouseScroll"===b.type?-40*b.originalEvent.detail:b.originalEvent.wheelDelta,j=e>0,g=function(){return b.stopPropagation(),b.preventDefault(),b.returnValue=!1,!1},!j&&-e>h-f-i?(d.scrollTop(h),c.addClass("is-fully-scrolled"),g()):j&&e>i?(d.scrollTop(0),c.removeClass("is-fully-scrolled"),g()):c.removeClass("is-fully-scrolled")):void 0}),a(this)):a(this)},A=function(b){return y.deleteOnUnhover&&y.activateOnHover?setTimeout(function(){var c;return c=a(b.target).closest(".bigfoot-footnote, .bigfoot-footnote__button"),a(".bigfoot-footnote__button:hover, .bigfoot-footnote:hover").length<1?u():void 0},y.hoverDelay):void 0},m=function(a){return 27===a.keyCode?u():void 0},u=function(b,c){var d,e,f,g;return null==b&&(b=".bigfoot-footnote"),null==c&&(c=y.popoverDeleteDelay),d=a(),g=void 0,e=void 0,f=void 0,a(b).each(function(){return f=a(this),g=f.attr("data-footnote-identifier"),e=a('.bigfoot-footnote__button[data-footnote-identifier="'+g+'"]'),e.hasClass("changing")?void 0:(d=d.add(e),e.removeClass("is-active is-hover-instantiated is-click-instantiated").addClass("changing"),f.removeClass("is-active").addClass("disapearing"),setTimeout(function(){return f.remove(),delete q[g],e.removeClass("changing")},c))}),d},w=function(b){var c;y.positionContent&&(c=b?b.type:"resize",a(".bigfoot-footnote").each(function(){var b,d,e,f,g,h,i,j,k,l,m,n,o,p,s,t;return f=a(this),h=f.attr("data-footnote-identifier"),g='data-footnote-identifier="'+h+'"',d=f.find(".bigfoot-footnote__content"),b=f.siblings(".bigfoot-footnote__button"),s=x(b),j=parseFloat(f.css("margin-top")),k=+f.attr("data-bigfoot-max-height"),t=2*j+f.outerHeight(),l=1e4,o=s.bottomRoom<t&&s.topRoom>s.bottomRoom,i=q[h],o?("top"!==i&&(q[h]="top",f.addClass("is-positioned-top").removeClass("is-positioned-bottom"),f.css("transform-origin",100*s.leftRelative+"% 100%")),l=s.topRoom-j-15):(("bottom"!==i||"init"===i)&&(q[h]="bottom",f.removeClass("is-positioned-top").addClass("is-positioned-bottom"),f.css("transform-origin",100*s.leftRelative+"% 0%")),l=s.bottomRoom-j-15),f.find(".bigfoot-footnote__content").css({"max-height":Math.min(l,k)+"px"}),"resize"===c&&(n=parseFloat(f.attr("bigfoot-max-width")),e=f.find(".bigfoot-footnote__wrapper"),m=n,1>=n&&(p=function(){var b,c;return c=1e4,y.maxWidthRelativeTo&&(b=a(y.maxWidthRelativeTo),b.length>0&&(c=b.outerWidth())),Math.min(window.innerWidth,c)}(),m=p*n),m=Math.min(m,f.find(".bigfoot-footnote__content").outerWidth()+1),e.css("max-width",m+"px"),f.css({left:-s.leftRelative*m+parseFloat(b.css("margin-left"))+b.outerWidth()/2+"px"}),r(f,s.leftRelative)),parseInt(f.outerHeight())<f.find(".bigfoot-footnote__content")[0].scrollHeight?f.addClass("is-scrollable"):void 0}))},r=function(a,b){var c;null==b&&(b=.5),c=a.find(".bigfoot-footnote__tooltip"),c.length>0&&c.css("left",""+100*b+"%")},x=function(a){var b,c,d,e,f,g;return c=parseFloat(a.css("margin-left")),d=parseFloat(a.outerWidth())-c,b=parseFloat(a.outerHeight()),g=C(),f=a.offset().top-g.scrollY+b/2,e=a.offset().left-g.scrollX+d/2,{topRoom:f,bottomRoom:g.height-f,leftRoom:e,rightRoom:g.width-e,leftRelative:e/g.width,topRelative:f/g.height}},C=function(){var b;return b=a(window),{width:window.innerWidth,height:window.innerHeight,scrollX:b.scrollLeft(),scrollY:b.scrollTop()}},c=function(a,b,c,d,f){var g,h,i,j,k,l,m;return null==d&&(d=y.popoverDeleteDelay),null==f&&(f=!0),j=void 0,h=void 0,l=void 0,"string"==typeof a?(l="iphone"===a.toLowerCase()?"<320px":"ipad"===a.toLowerCase()?"<768px":a,h=">"===l.charAt(0)?"min":"<"===l.charAt(0)?"max":null,k=h?"("+h+"-width: "+l.substring(1)+")":l,j=window.matchMedia(k)):j=a,j.media&&"invalid"===j.media?{added:!1,mq:j,listener:null}:(m="min"===h,g="max"===h,b=b||p(f,d,m,function(a){return a.addClass("is-bottom-fixed")}),c=c||p(f,d,g,function(){}),i=function(a){a.matches?b(f,e):c(f,e)},j.addListener(i),i(j),y.breakpoints[a]={added:!0,mq:j,listener:i},y.breakpoints[a])},p=function(a,b,c,d){return function(a,e){var f;return f=void 0,a&&(f=e.close(),e.updateSetting("activateCallback",d)),setTimeout(function(){return e.updateSetting("positionContent",c),a?e.activate(f):void 0},b)}},t=function(a,b){var c,d,e,f;if(e=null,c=void 0,f=!1,"string"==typeof a)f=void 0!==y.breakpoints[a];else for(c in y.breakpoints)y.breakpoints.hasOwnProperty(c)&&y.breakpoints[c].mq===a&&(f=!0);return f&&(d=y.breakpoints[c||a],b?b({matches:!1}):d.listener({matches:!1}),d.mq.removeListener(d.listener),delete y.breakpoints[c||a]),f},B=function(a,b){var c,d;if(c=void 0,"string"==typeof a)c=y[a],y[a]=b;else{c={};for(d in a)a.hasOwnProperty(d)&&(c[d]=y[d],y[d]=a[d])}return c},o=function(a){return y[a]},a(document).ready(function(){return n(),a(document).on("mouseenter",".bigfoot-footnote__button",f),a(document).on("touchend click",z),a(document).on("mouseout",".is-hover-instantiated",A),a(document).on("keyup",m),a(window).on("scroll resize",w),a(document).on("gestureend",function(){return w()})}),e={removePopovers:u,close:u,createPopover:j,activate:j,repositionFeet:w,reposition:w,addBreakpoint:c,removeBreakpoint:t,getSetting:o,updateSetting:B}}}(jQuery)}).call(this);