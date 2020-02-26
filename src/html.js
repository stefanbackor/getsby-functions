import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}

        <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
        <script dangerouslySetInnerHTML={{
            __html: `
          console.log('tag loaded');
          window.googletag = window.googletag || {cmd: []};
          googletag.cmd.push(function() {
            googletag.defineSlot('/87512933/gatsby-functions', [750, 300], 'div-gpt-ad-1582161433150-0').addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
          });
        `}} />

      </head>
      <body {...props.bodyAttributes}>

      <div id='div-gpt-ad-1582161433150-0'>
  <script dangerouslySetInnerHTML={{__html: `
    console.log('display loaded');
    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1582161433150-0'); });
  `}} />
</div>


        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />

        <div id="fwn_videos" />

        <script dangerouslySetInnerHTML={{ __html: `
            !function(e,t,c,a){if(!e.fwn&&(a="fwn_script",n=e.fwn=function(){
            n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)
            },e._fwn||(e._fwn=n),n.queue=[],!t.getElementById(a))){var d=document.createElement("script");
            d.async=1,d.src=c,d.id=a,t.getElementsByTagName("head")[0].appendChild(d)}
            }(window,document,"//asset.fireworktv.com/js/fwn.js");
          
            fwn('app_id', 'uGA2KiPBAhy2r6-gvBoHco8vvxrgh2e4');
          
            fwn('autoplay', true);
            fwn('open_in', '_iframe');
            fwn('placement', 'middle');
            fwn('page_type', 'article');
            fwn('target', document.getElementById('fwn_videos'));
        ` }} />


        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
};
