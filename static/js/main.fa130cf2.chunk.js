(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"winner",image:"https://media.istockphoto.com/photos/winner-picture-id615524918"},{id:2,name:"happy-team",image:"https://media.istockphoto.com/photos/silhouette-of-happy-business-team-making-high-hands-in-sunset-sky-picture-id696209402"},{id:3,name:"hand-unity",image:"https://media.istockphoto.com/photos/stack-of-hands-showing-unity-picture-id625736338"},{id:4,name:"success-celebration",image:"https://media.istockphoto.com/photos/young-man-success-celebration-at-office-picture-id888751614"},{id:5,name:"gold-cup",image:"https://media.istockphoto.com/photos/gold-cup-winner-picture-id627253912"},{id:6,name:"future-concept",image:"https://media.istockphoto.com/photos/business-development-to-success-and-growing-growth-concept-pointing-picture-id884650780"},{id:7,name:"team",image:"https://media.istockphoto.com/photos/silhouettes-of-a-team-picture-id517128288"},{id:8,name:"clapping",image:"https://media.istockphoto.com/photos/celebrating-our-achievements-together-picture-id621827458"},{id:9,name:"pointer",image:"https://media.istockphoto.com/photos/winning-success-man-happy-ecstatic-celebrating-being-a-winner-dynamic-picture-id941370476"},{id:10,name:"hiker",image:"https://media.istockphoto.com/photos/businessman-hike-on-the-peak-of-rocks-mountain-at-sunset-picture-id512151814"},{id:11,name:"darts",image:"https://media.istockphoto.com/photos/darts-board-picture-id601133062"},{id:12,name:"mtn-success",image:"https://media.istockphoto.com/photos/success-picture-id912928582"}]},,,,,,,,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/react.389ad7d6.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(3),i=a.n(o),r=a(4),s=a(5),m=a(7),l=a(6),u=a(8);a(15);var p=function(e){return c.a.createElement("div",{role:"img","aria-label":"click item",className:"click-item",onClick:function(){return e.clickImage(e.id)}},c.a.createElement("img",{alt:e.name,src:e.image}))};a(16);var d=function(e){return c.a.createElement("div",{className:"wrapper"},e.children)};var h=function(e){return c.a.createElement("div",{className:"container col-md-10"},e.children)};a(17);var g=function(e){return c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",{className:"container col-md-10"},c.a.createElement("div",{className:"brand text-left"},c.a.createElement("a",{href:"/"},"Clicky Game")),c.a.createElement("div",{className:"banner text-center"},"Click an image to begin!"),c.a.createElement("div",{className:"score text-right"},"Score: ",e.score," | Top Score: ",e.topScore)))};a(18);var f=function(e){return c.a.createElement("div",{className:"title-container col-md-10 text-center"},c.a.createElement("h1",{className:"title"},"Clicky Game!"),c.a.createElement("h2",{className:"instructions"},"Click on an image to earn points, but don't click on any more than once!"))};a(19);var k=function(e){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"bottom"},"Clicky Game! ",c.a.createElement("img",{alt:"react",src:a(20)})))},v=a(1),E=[],b=0,y=0,w=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={images:v,score:b,topScore:y},a.clickImage=function(e){E.find(function(t){return t===e})?(console.log("You guessed incorrectly."),b>y&&(y=b),b=0,E.length=0,a.setState({score:b,topScore:y})):(console.log("You guessed correctly."),b++,E.push(e)),console.log("clickedImages: ".concat(E," score: ").concat(b)),N(v),a.setState({images:v})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(d,null,c.a.createElement(g,{score:b,topScore:y}),c.a.createElement(f,null),c.a.createElement(h,null,this.state.images.map(function(t){return c.a.createElement(p,{clickImage:e.clickImage,id:t.id,key:t.id,name:t.name,image:t.image})})),c.a.createElement(k,null))}}]),t}(n.Component),N=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e},S=w;a(21);i.a.render(c.a.createElement(S,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.fa130cf2.chunk.js.map