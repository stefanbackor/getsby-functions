import React from "react";
import PropTypes from "prop-types";
import HomeContainer from "./FWNTest";

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

        <script
          async
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          console.log('tag loaded');
          window.googletag = window.googletag || {cmd: []};
          googletag.cmd.push(function() {
            googletag.defineSlot('/87512933/gatsby-functions', [750, 300], 'div-gpt-ad-1582161433150-0').addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
          });
        `
          }}
        />
      </head>
      <body {...props.bodyAttributes}>
        <div id="div-gpt-ad-1582161433150-0">
          <script
            dangerouslySetInnerHTML={{
              __html: `
    console.log('display loaded');
    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1582161433150-0'); });
  `
            }}
          />
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

        <HomeContainer />

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
