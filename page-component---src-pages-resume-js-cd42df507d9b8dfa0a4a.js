webpackJsonp([3],{"./src/components/DimButton.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n("./node_modules/react/react.js"),c=o(i),u=n("./node_modules/semantic-ui-react/dist/commonjs/index.js"),d=function(e){function t(){var e,n,o,l;r(this,t);for(var s=arguments.length,i=Array(s),c=0;c<s;c++)i[c]=arguments[c];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.state={},o.handleShow=function(){return o.setState({active:!0})},o.handleHide=function(){return o.setState({active:!1})},l=n,a(o,l)}return l(t,e),s(t,[{key:"render",value:function(){var e=this.state.active;return c.default.createElement("div",{style:{display:"flex",flex:"auto"}},c.default.createElement(u.Dimmer.Dimmable,{as:"div",className:"vertical-center-container",style:{backgroundColor:this.props.color,flex:"auto",margin:0},dimmed:e,onMouseEnter:this.handleShow,onMouseLeave:this.handleHide},c.default.createElement(u.Dimmer,{active:e,as:"a",href:this.props.to},c.default.createElement(u.Header,{as:"h3",style:{flex:"none",color:"white",margin:20}},this.props.message)),c.default.createElement("div",{className:"vertical-center-container",style:{width:200,textAlign:"center"}},c.default.createElement(u.Header,{as:"h1",style:{fontSize:"calc(20px + 0.6vw)",margin:"auto 0 0 0",paddingBottom:"calc(14px + 4vw)",textAlign:"center",color:"white"}},this.props.name),c.default.createElement(u.Icon,{inverted:!0,fitted:!0,name:this.props.icon,style:{marginBottom:"auto",fontSize:"calc(30px + 8vw)"}}))))}}]),t}(i.Component);t.default=d,e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/Derek/Documents/React Projects/personal-site/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/Derek/Documents/React Projects/personal-site/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/Derek/Documents/React Projects/personal-site/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/Derek/Documents/React Projects/personal-site/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/Derek/Documents/React Projects/personal-site/node_modules/babel-preset-env/lib/index.js","/Users/Derek/Documents/React Projects/personal-site/node_modules/babel-preset-stage-0/lib/index.js","/Users/Derek/Documents/React Projects/personal-site/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/resume.js':function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n("./node_modules/react/react.js"),c=o(i),u=n("./node_modules/gatsby-link/index.js"),d=(o(u),n("./src/components/DimButton.js")),f=o(d),p=n("./node_modules/react-helmet/lib/Helmet.js"),m=(o(p),function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),s(t,[{key:"render",value:function(){return c.default.createElement("div",{style:{background:"linear-gradient(to right, #4267b2, #92a2dd)",display:"flex",flexDirection:"column",paddingTop:40,fontSize:"calc(22px + 0.6vw)",height:"100%",width:"100%"}},c.default.createElement("div",{className:"textbox",style:{flex:"auto",maxWidth:800}},c.default.createElement("div",{style:{flex:"none"}},c.default.createElement("p",{style:{fontSize:"1em",color:"#ededed"}}," Through school assignments, Hackathons and fun personal projects I have developed skills with numerous modern technologies."),c.default.createElement("p",{style:{fontSize:"1em",color:"#ededed"}}," My greatest strengths are currently in front-end development with HTML/CSS/JavaScript (React+Redux), and application development using C++, Python and React Native. ")),c.default.createElement("h2",{style:{paddingTop:20,textAlign:"center",color:"white"}}," Learn more about my qualifications below! ")),c.default.createElement("div",{className:"stackable",style:{flex:"auto",width:"100%"}},c.default.createElement(f.default,{name:"Resume",icon:"file",color:"orange",message:"Click here to view a PDF version of my resume",to:"/resume.pdf"}),c.default.createElement(f.default,{name:"Github",icon:"github",color:"#6e5494",message:"Click here to view my Github profile",to:"https://github.com/PlumSauc3"}),c.default.createElement(f.default,{name:"LinkedIn",icon:"linkedin",color:"#4875B4",message:"Click here to view my LinkedIn",to:"https://www.linkedin.com/in/derek-xu-06814177/"})))}}]),t}(c.default.Component));t.default=m,e.exports=t.default}});
//# sourceMappingURL=page-component---src-pages-resume-js-cd42df507d9b8dfa0a4a.js.map