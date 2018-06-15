webpackJsonp([4],{"./src/components/DimButton.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o("./node_modules/react/react.js"),c=n(l),u=o("./node_modules/semantic-ui-react/dist/commonjs/index.js"),d=function(e){function t(){var e,o,n,s;r(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return o=n=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.state={},n.handleShow=function(){return n.setState({active:!0})},n.handleHide=function(){return n.setState({active:!1})},s=o,a(n,s)}return s(t,e),i(t,[{key:"render",value:function(){var e=this.state.active;return c.default.createElement("div",{style:{display:"flex",flex:"auto"}},c.default.createElement(u.Dimmer.Dimmable,{as:"div",className:"vertical-center-container",style:{backgroundColor:this.props.color,flex:"auto",margin:0},dimmed:e,onMouseEnter:this.handleShow,onMouseLeave:this.handleHide},c.default.createElement(u.Dimmer,{active:e,as:"a",href:this.props.to},c.default.createElement(u.Header,{as:"h3",style:{flex:"none",color:"white",margin:20}},this.props.message)),c.default.createElement("div",{className:"vertical-center-container",style:{width:200,textAlign:"center"}},c.default.createElement(u.Header,{as:"h1",style:{fontSize:"calc(20px + 0.6vw)",margin:"auto 0 0 0",paddingBottom:"calc(14px + 4vw)",textAlign:"center",color:"white"}},this.props.name),c.default.createElement(u.Icon,{inverted:!0,fitted:!0,name:this.props.icon,style:{marginBottom:"auto",fontSize:"calc(30px + 8vw)"}}))))}}]),t}(l.Component);t.default=d,e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/Derek/Documents/React Projects/personal-site/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/Derek/Documents/React Projects/personal-site/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/Derek/Documents/React Projects/personal-site/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/Derek/Documents/React Projects/personal-site/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/Derek/Documents/React Projects/personal-site/node_modules/babel-preset-env/lib/index.js","/Users/Derek/Documents/React Projects/personal-site/node_modules/babel-preset-stage-0/lib/index.js","/Users/Derek/Documents/React Projects/personal-site/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/about.js':function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o("./node_modules/react/react.js"),c=n(l),u=o("./node_modules/gatsby-link/index.js"),d=(n(u),o("./node_modules/react-helmet/lib/Helmet.js")),m=(n(d),o("./node_modules/semantic-ui-react/dist/commonjs/index.js"),o("./src/components/DimButton.js")),f=n(m),p=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),i(t,[{key:"render",value:function(){return c.default.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",fontSize:"calc(16px + 1vw)",background:"linear-gradient(to bottom right, #4267b2, #92a2dd)",width:"100%",minHeight:"100%",paddingTop:40}},c.default.createElement("div",{className:"textbox",style:{color:"#ededed",flex:"auto",maxWidth:700}},c.default.createElement("p",null," I'm an 18 year old currently studying Software Engineering at the University of Waterloo. I grew up in Ottawa, Ontario and completed the IB Diploma Programme at Colonel By SS. "),c.default.createElement("p",null," I love programming! I currently like working with React and C++ the most. I also love doing competitve programming contests. I am ranked in the top 20% of users on CSAcademy and in the top 100 users on the Don Mills Online Judge. "),c.default.createElement("p",null," Outside of technology, I've got two other major hobbies. I have always loved music! I can play several instruments but I sing and play guitar most frequently. I also love to yoyo. It may sound outdated but yoyoing has changed a lot since the '90s! Yoyoing requires technical skill, creativity and determination, it's so much fun! ")),c.default.createElement("div",{className:"stackable",style:{flex:"auto",width:"100%"}},c.default.createElement(f.default,{name:"Music",icon:"youtube",color:"#cc181e",message:"Click here to visit my music channel",to:"https://www.youtube.com/derekxumusic"}),c.default.createElement(f.default,{name:"Yoyoing",icon:"instagram",color:"#8a3ab9",message:"Click here to see my yoyo videos on Instagram",to:"https://www.instagram.com/yoderekyo/"}),c.default.createElement(f.default,{name:"Competitive Programming",icon:"winner",color:"#4875B4",message:"Click here to view my DMOJ profile",to:"https://dmoj.ca/user/plumsauc3/"})))}}]),t}(c.default.Component);t.default=p,e.exports=t.default}});
//# sourceMappingURL=page-component---src-pages-about-js-dbda1ce23a3ced338e23.js.map