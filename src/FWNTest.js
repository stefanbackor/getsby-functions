import React from "react";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.renderAds = this.renderAds.bind(this);
  }
  
  componentDidMount() {
    window && window.eval && window.eval(`
      !function(e,t,c,a){if(!e.fwn&&(a="fwn_script",n=e.fwn=function(){
      n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)
      },e._fwn||(e._fwn=n),n.queue=[],!t.getElementById(a))){var d=document.createElement("script");
      d.async=1,d.src=c,d.id=a,t.getElementsByTagName("head")[0].appendChild(d)}
      }(window,document,"//asset.fireworktv.com/js/fwn.js");

      fwn('app_id', 'Hv4b8ZJ3VjxHMg2H9zBEQyYn79CZZ3Zp');
      fwn('mode', 'row'); // 'grid' or 'row'
      fwn('placement', 'middle'); // 'top', 'middle', 'bottom', or 'fullscreen'
      fwn('max_videos', '12'); // set 0 for infinite scroll
      fwn('page_type', 'feed');
      fwn('target', document.getElementById('fwn_videos'));
    `)
  }

  renderAds() {
    return (
      <div className="firework-ads" style={{ width: 700, height: 300 }}>
        <div id="fwn_videos" style={{ width: 700, height: 300 }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log("yoyo here");
              !function(e,t,c,a){if(!e.fwn&&(a="fwn_script",n=e.fwn=function(){
              n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)
              },e._fwn||(e._fwn=n),n.queue=[],!t.getElementById(a))){var d=document.createElement("script");
              d.async=1,d.src=c,d.id=a,t.getElementsByTagName("head")[0].appendChild(d)}
              }(window,document,"//asset.fireworktv.com/js/fwn.js");
                console.log("loaded here");
  
              fwn('app_id', 'Hv4b8ZJ3VjxHMg2H9zBEQyYn79CZZ3Zp');
              fwn('mode', 'row'); // 'grid' or 'row'
              fwn('placement', 'middle'); // 'top', 'middle', 'bottom', or 'fullscreen'
              fwn('max_videos', '12'); // set 0 for infinite scroll
              fwn('page_type', 'feed');
              fwn('target', document.getElementById('fwn_videos'));`
          }}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="home-container page-container">
        <div className="center-container">
      
          <div id="fwn_videos" />
      
          {/* this.renderAds() */}
          {/* {this.renderTrendingGames()} */}
        </div>
      </div>
    );
  }
}

export default HomeContainer;
