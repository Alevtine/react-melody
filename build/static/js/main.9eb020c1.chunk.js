(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(32)},20:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(9),r=a.n(l),c=(a(20),a(1)),o=a(2),i=a(4),u=a(3),m=a(5),h=a(10),p=a.n(h),j=function(e){for(var t=[],a=1;a<=e.lives;a++)t.push(s.a.createElement("div",{key:a,className:"wrong"}));return s.a.createElement("div",{className:"game__mistakes"},t)},d=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={seconds:0,minutes:0},a.componentDidMount=function(){a.setState({seconds:59,minutes:5}),a.interval=setInterval(a.tick,1e3)},a.componentWillUnmount=function(){clearInterval(a.interval)},a.tick=function(){a.setState({seconds:a.state.seconds>0||0===a.state.minutes?a.state.seconds-1:a.state.seconds=59}),a.checkMinutes(),a.state.minutes<=0&&clearInterval(a.interval)},a.checkMinutes=function(){a.setState({minutes:0===a.state.seconds&&a.state.minutes>0?a.state.minutes-1:a.state.minutes})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.seconds,t=this.state.minutes,a=function(e){return(e=e.toString()).length<2?"0"+e:e};return s.a.createElement("div",{className:"timer__value",xmlns:"http://www.w3.org/1999/xhtml"},s.a.createElement("span",{className:"timer__mins"},a(t)),s.a.createElement("span",{className:"timer__dots"},":"),s.a.createElement("span",{className:"timer__secs"},a(e)))}}]),t}(s.a.Component),R=a(6),b=a.n(R),f=function(e){return s.a.createElement("a",{className:"game__back",onClick:e.showModal},s.a.createElement("span",{className:"visually-hidden"},"\u0421\u044b\u0433\u0440\u0430\u0442\u044c \u0435\u0449\u0451 \u0440\u0430\u0437"),s.a.createElement("img",{className:"game__logo",src:b.a,alt:"\u0423\u0433\u0430\u0434\u0430\u0439 \u043c\u0435\u043b\u043e\u0434\u0438\u044e"}))},v=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.lives,a=e.time;return s.a.createElement("header",{className:"game__header"},s.a.createElement(f,{showModal:this.props.showModal}),s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"timer",viewBox:"0 0 780 780"},s.a.createElement("circle",{className:"timer__line",cx:"390",cy:"390",r:"370",style:{filter:"url(.#blur)",transform:"rotate(-90deg) scaleY(-1)",transformOrigin:"center"}})),s.a.createElement(d,{time:a}),s.a.createElement(j,{lives:t}))}}]),t}(s.a.Component),D=function(){return s.a.createElement("footer",{className:"footer"},s.a.createElement("a",{rel:"license",href:"http://creativecommons.org/licenses/by-nc-nd/4.0/"},s.a.createElement("img",{src:"https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png",alt:"Creative Commons License",width:"88",height:"31",style:{borderWidth:0}})))},g=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).handleClick=function(){a.props.nextScreen()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"welcome"},s.a.createElement("div",{className:"welcome__logo"},s.a.createElement("img",{src:b.a,alt:"\u0423\u0433\u0430\u0434\u0430\u0439 \u043c\u0435\u043b\u043e\u0434\u0438\u044e",width:"186",height:"83"})),s.a.createElement("button",{className:"welcome__button",onClick:this.handleClick},s.a.createElement("span",{className:"visually-hidden"},"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443")),s.a.createElement("h2",{className:"welcome__rules-title"},"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0438\u0433\u0440\u044b"),s.a.createElement("p",{className:"welcome__text"},"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u043f\u0440\u043e\u0441\u0442\u044b:"),s.a.createElement("ul",{className:"welcome__rules-list"},s.a.createElement("li",null,"\u0417\u0430 5 \u043c\u0438\u043d\u0443\u0442 \u043d\u0443\u0436\u043d\u043e \u043e\u0442\u0432\u0435\u0442\u0438\u0442\u044c \u043d\u0430 \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b."),s.a.createElement("li",null,"\u041c\u043e\u0436\u043d\u043e \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c 3 \u043e\u0448\u0438\u0431\u043a\u0438.")),s.a.createElement("p",{className:"welcome__text"},"\u0423\u0434\u0430\u0447\u0438!"))}}]),t}(s.a.Component),y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).componentDidMount=function(){a.props.start()},a.handleSound=function(e){var t,a,n=document.querySelectorAll(".track__button"),s=document.querySelectorAll("audio"),l=e.target.dataset.number,r="track__button--play",c="track__button--pause";n.forEach(function(e,t){e!==document.activeElement&&function(e,t){e.classList.replace(c,r),t.pause()}(e,s[t])}),n[l].classList.contains(c)?(n[l].classList.replace(c,r),s[l].pause()):(t=n[l],a=s[l],t.classList.replace(r,c),a.play())},a.handleClick=function(e){var t=a.props,n=t.currentQuestion,s=n.genre,l=n.answers,r=t.calculateScore,c=t.takeLife,o=t.nextLevel,i=t.bonusTime,u=t.stop,m=l.filter(function(e){return e.genre===s}),h=document.querySelectorAll("input:checked"),p=(document.querySelector(".game__submit.button"),[]),j=1,d=!1;h.forEach(function(e){return p.push(e.dataset.genre)}),p.length===m.length&&!0===p.every(function(e){return e===s})?(i>0&&(j+=1,d=!0),r(j,d)):(r(-2),c()),u(),o()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){for(var e=this.props.currentQuestion,t=e.question,a=e.answers,n=[],l=0;l<a.length;l++){var r=0===l,c=0===l?"pause":"play",o=s.a.createElement("div",{className:"track",key:l},s.a.createElement("button",{className:"track__button track__button--".concat(c),"data-number":l,type:"button",onClick:this.handleSound}),s.a.createElement("div",{className:"track__status"},s.a.createElement("audio",{preload:"auto",autoPlay:r},a[l].mp3)),s.a.createElement("div",{className:"game__answer"},s.a.createElement("input",{className:"game__input visually-hidden",type:"checkbox",name:"answer","data-genre":a[l].genre,value:"answer-".concat(l),id:"answer-".concat(l)}),s.a.createElement("label",{className:"game__check",htmlFor:"answer-".concat(l)},"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c")));n.push(o)}return s.a.createElement("section",{className:"game game--genre"},s.a.createElement("section",{className:"game__screen"},s.a.createElement("h2",{className:"game__title"},t),s.a.createElement("form",{className:"game__tracks"},n,s.a.createElement("button",{className:"game__submit button",onClick:this.handleClick,type:"submit"},"\u041e\u0442\u0432\u0435\u0442\u0438\u0442\u044c"))))}}]),t}(s.a.Component),E=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).componentDidMount=function(){a.props.start()},a.handleSound=function(e){var t=document.querySelector("audio"),a=e.target,n="track__button--play";a.classList.contains(n)?a.classList.replace(n,"track__button--pause")&&t.play():a.classList.replace("track__button--pause",n)&&t.pause()},a.handleChange=function(e){var t=a.props,n=t.currentQuestion.answers,s=t.calculateScore,l=t.takeLife,r=t.nextLevel,c=t.bonusTime,o=t.stop,i=n.findIndex(function(e){return!0===e.isCorrect}),u=1,m=!1;+e.target.id.match(/\d+$/g)===i?(c>0&&(u+=1,m=!0),s(u,m)):(s(-2),l()),o(),r()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){for(var e=this.props.currentQuestion,t=e.question,a=e.answers,n=e.mp3,l=[],r=0;r<a.length;r++){var c=s.a.createElement("div",{className:"artist",key:r},s.a.createElement("input",{className:"artist__input visually-hidden",onChange:this.handleChange,type:"radio",name:"answer",value:"artist-".concat(r),id:"answer-".concat(r)}),s.a.createElement("label",{className:"artist__name",htmlFor:"answer-".concat(r)},s.a.createElement("img",{className:"artist__picture",src:a[r].image.url,alt:a[r].title}),a[r].title));l.push(c)}return s.a.createElement("section",{className:"game game--artist"},s.a.createElement("section",{className:"game__screen"},s.a.createElement("h2",{className:"game__title"},t),s.a.createElement("div",{className:"game__track"},s.a.createElement("button",{className:"track__button track__button--pause",onClick:this.handleSound,type:"button"}),s.a.createElement("audio",{preload:"auto",autoPlay:"autoplay"},n)),s.a.createElement("form",{className:"game__artist"},l)))}}]),t}(s.a.Component),S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={bonusTime:30},a.start=function(){a.interval=setInterval(a.tick,1e3)},a.stop=function(){clearInterval(a.interval),a.setState({bonusTime:30})},a.tick=function(){a.setState({bonusTime:a.state.bonusTime-1}),0===a.state.bonusTime&&setInterval(a.interval)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e={artist:s.a.createElement(E,Object.assign({key:this.props.currentLevel},this.props,{bonusTime:this.state.bonusTime,start:this.start,stop:this.stop})),genre:s.a.createElement(y,Object.assign({key:this.props.currentLevel},this.props,{bonusTime:this.state.bonusTime,start:this.start,stop:this.stop}))};return s.a.createElement("section",null,e[this.props.currentQuestion.type])}}]),t}(s.a.Component),A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).componentDidMount=function(){1===a.props.level&&a.props.startTimer()},a.componentWillUnmount=function(){a.props.stopTimer()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.questionsData[this.props.level-1],t=this.props.header();return s.a.createElement("section",null,t,s.a.createElement(S,{currentQuestion:e,nextLevel:this.props.nextLevel,currentLevel:this.props.level,scores:this.props.scores,lives:this.props.lives,calculateScore:this.props.calculateScore,takeLife:this.props.takeLife}))}}]),t}(s.a.Component),k=function(e){return s.a.createElement("button",{className:"result__replay",type:"button",onClick:e.startPlay},"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0435\u0449\u0451 \u0440\u0430\u0437")},w=a(7),N=a.n(w),O=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t={title:"\u041a\u0430\u043a\u0430\u044f \u0436\u0430\u043b\u043e\u0441\u0442\u044c!",resultPhraze:"\u0423 \u0432\u0430\u0441 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0438\u0441\u044c \u0432\u0441\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0438. \u041d\u0438\u0447\u0435\u0433\u043e, \u043f\u043e\u0432\u0435\u0437\u0451\u0442 \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0440\u0430\u0437!"},a={title:"\u0423\u0432\u044b \u0438 \u0430\u0445!",resultPhraze:"\u0412\u0440\u0435\u043c\u044f \u0432\u044b\u0448\u043b\u043e! \u0412\u044b \u043d\u0435 \u0443\u0441\u043f\u0435\u043b\u0438 \u043e\u0442\u0433\u0430\u0434\u0430\u0442\u044c \u0432\u0441\u0435 \u043c\u0435\u043b\u043e\u0434\u0438\u0438"};return 0===this.props.lives?e=t:0===this.props.time&&(e=a),s.a.createElement("section",{className:"result"},s.a.createElement("div",{className:"result__logo"},s.a.createElement("img",{src:N.a,alt:"\u0423\u0433\u0430\u0434\u0430\u0439 \u043c\u0435\u043b\u043e\u0434\u0438\u044e",width:"186",height:"83"})),s.a.createElement("h2",{className:"result__title"},e.title),s.a.createElement("p",{className:"result__total result__total--fail"},e.resultPhraze),s.a.createElement(k,{startPlay:this.props.startPlay}))}}]),t}(s.a.Component),I=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.playerScore,a=e.livesTotal,n=e.lives,l=e.startPlay,r=e.time,c=e.fastCounter,o=e.stats,i=o.playerPlace,u=o.playersQtty,m=o.rating,h=Math.floor(r/60),p=r%60;return s.a.createElement("section",{className:"result"},s.a.createElement("div",{className:"result__logo"},s.a.createElement("img",{src:N.a,alt:"\u0423\u0433\u0430\u0434\u0430\u0439 \u043c\u0435\u043b\u043e\u0434\u0438\u044e",width:"186",height:"83"})),s.a.createElement("h2",{className:"result__title"},"\u0412\u044b \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u043c\u0435\u043b\u043e\u043c\u0430\u043d!"),s.a.createElement("p",{className:"result__total"},"\u0417\u0430 ",h," \u043c\u0438\u043d ",p," \u0441\u0435\u043a \u0432\u044b \u043d\u0430\u0431\u0440\u0430\u043b\u0438 ",t," \u0431\u0430\u043b\u043b\u043e\u0432 (",c," \u0431\u044b\u0441\u0442\u0440\u044b\u0445), \u0441\u043e\u0432\u0435\u0440\u0448\u0438\u0432 ",a-n," \u043e\u0448\u0438\u0431\u043a\u0438"),s.a.createElement("p",{className:"result__text"},"\u0412\u044b \u0437\u0430\u043d\u044f\u043b\u0438 ",i," \u043c\u0435\u0441\u0442\u043e \u0438\u0437 ",u,". \u042d\u0442\u043e \u043b\u0443\u0447\u0448\u0435 \u0447\u0435\u043c \u0443 ",m,"% \u0438\u0433\u0440\u043e\u043a\u043e\u0432"),s.a.createElement(k,{startPlay:l}))}}]),t}(s.a.Component),L=function(e){return s.a.createElement("section",{className:"modal"},s.a.createElement("h2",{className:"modal__title"},"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430!"),s.a.createElement("p",{className:"modal__text"},"\u0421\u0442\u0430\u0442\u0443\u0441: ",e.errorInfo,". \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."))},C=[{type:"genre",question:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0434\u0436\u0430\u0437\u043e\u0432\u044b\u0435 \u043f\u0435\u0441\u043d\u0438",genre:"jazz",answers:[{src:"https://freemusicarchive.org/music/listen/d10182663330b3fadb944cbfc49a91b526cbd0a9",genre:"jazz"},{src:"https://freemusicarchive.org/music/listen/fef7bc36c8953c80e7f8561b873ebe5f35d27fa7",genre:"jazz"},{src:"https://freemusicarchive.org/music/listen/dfd277e04f2be3edb995bb618d0955ed6afa6c93",genre:"pop"},{src:"https://freemusicarchive.org/music/listen/0c0b75cc14bdbbb264ae7ac7d1cce0f1425c0e5d",genre:"pop"}]},{type:"genre",question:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043b\u0430\u0441\u0441\u0438\u043a\u0443",genre:"classical",answers:[{src:"https://freemusicarchive.org/music/listen/d10182663330b3fadb944cbfc49a91b526cbd0a9",genre:"jazz"},{src:"https://freemusicarchive.org/music/listen/ba2985df39aae1fdb987ac4532d7a5dfc0c002d0",genre:"classical"},{src:"https://freemusicarchive.org/music/listen/b9318f3d59cd32e3e0ad89ce3f5656168cafd444",genre:"country"},{src:"https://freemusicarchive.org/music/listen/0c0b75cc14bdbbb264ae7ac7d1cce0f1425c0e5d",genre:"pop"}]},{type:"artist",question:"\u041a\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u044d\u0442\u0443 \u043f\u0435\u0441\u043d\u044e?",src:"https://freemusicarchive.org/music/listen/22d02e2f14b69735db8dbb9a3324bf6c61e20228",answers:[{image:{url:"https://freemusicarchive.org/file/images/artists/Lobo_Loco_-_20160509152923470.jpg?width=300&height=300",width:300,height:300},title:"Loco Loco",isCorrect:!1},{image:{url:"https://freemusicarchive.org/file/images/artists/Kevin_MacLeod_-_20110715150335323.png?width=300&height=300",width:300,height:300},title:"Kevin MacLeod",isCorrect:!0},{image:{url:"https://freemusicarchive.org/file/images/artists/Quantum_Jazz_-_20120509113401114.jpg?width=300&height=300",width:300,height:300},title:"Quantum Jazz",isCorrect:!1}]}];p.a.setAppElement("body");var M={content:{background:"none",position:"absolute",border:"none"},overlay:{zIndex:2,position:"absolute"}},x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={actualScreen:"Welcome",questions:C,scores:0,level:1,lives:3,time:300,fastCounter:0,ratingData:null,errorInfo:null,isModalOpen:!1},a.beginState={livesTotal:3},a.loadTrack=function(e){return s.a.createElement("source",{src:e,type:"audio/mpeg"})},a.checkStatus=function(e){if(200===e.status)return e;throw new Error(e.status)},a.saveResult=function(){var e=a.state.scores;return fetch("https://es.dump.academy/guess-melody/stats/468130",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({scores:e})}).then(a.checkStatus).then(function(e){console.log(e),a.loadStats()}).catch(function(e){a.setState({actualScreen:"ErrorBlock",errorInfo:e.message})})},a.takeLife=function(){a.setState({lives:a.state.lives-1})},a.nextLevel=function(){a.isLast()||(a.nextScreen("GameScreen"),a.setState({level:a.state.level+1}))},a.nextScreen=function(e){a.setState({actualScreen:e})},a.startPlay=function(){a.setState({actualScreen:"Welcome",scores:0,level:1,lives:3,time:300,fastCounter:0}),a.stopTimer(),a.state.isModalOpen&&a.closeModal()},a.totalTimeTick=function(){a.setState({time:a.state.time-1}),a.isTimeOut()&&clearInterval(a.interval)},a.startTimer=function(){a.interval=setInterval(a.totalTimeTick,1e3)},a.stopTimer=function(){clearInterval(a.interval)},a.renderHeader=function(){return s.a.createElement(v,{lives:a.state.lives,livesTotal:a.beginState.livesTotal,showModal:a.openModal})},a.openModal=function(){a.setState({isModalOpen:!0})},a.closeModal=function(){a.setState({isModalOpen:!1})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://es.dump.academy/guess-melody/questions",{method:"GET"}).then(this.checkStatus).then(function(e){return e.json()}).then(function(t){t.forEach(function(t){"artist"===t.type?t.mp3=e.loadTrack(t.src):"genre"===t.type&&t.answers.forEach(function(t){return t.mp3=e.loadTrack(t.src)})}),e.setState({questions:t})}).catch(function(t){e.setState({actualScreen:"ErrorBlock",errorInfo:t.message})})}},{key:"loadStats",value:function(){var e=this;return fetch("https://es.dump.academy/guess-melody/stats/468130",{method:"GET"}).then(this.checkStatus).then(function(e){return e.json()}).then(function(t){return e.ratePlayer(t)}).catch(function(t){e.setState({actualScreen:"ErrorBlock",errorInfo:t.message})})}},{key:"ratePlayer",value:function(e){var t=this,a=e.map(function(e){return e.scores}).sort(function(e,t){return t-e}),n=a.findIndex(function(e){return e===t.state.scores})+1,s={playerPlace:n,rating:Math.floor(100-100*n/a.length),playersQtty:a.length};this.setState({actualScreen:"StatScreen",ratingData:s})}},{key:"calculateScore",value:function(e,t){this.setState({scores:this.state.scores+e,fastCounter:t?this.state.fastCounter+1:this.state.fastCounter})}},{key:"isAlive",value:function(){return this.state.lives>0}},{key:"isLast",value:function(){return this.state.level===this.state.questions.length+1}},{key:"isTimeOut",value:function(){return 0===this.state.time}},{key:"render",value:function(){var e,t={Welcome:s.a.createElement(g,{nextScreen:this.nextScreen.bind(this,"GameScreen")}),GameScreen:s.a.createElement(A,{header:this.renderHeader,level:this.state.level,levelsTotal:this.state.questions.length,nextScreen:this.nextScreen.bind(this,"GameScreen"),isAlive:this.isAlive,isLast:this.isLast,nextLevel:this.nextLevel.bind(this),questionsData:this.state.questions,scores:this.state.scores,calculateScore:this.calculateScore.bind(this),takeLife:this.takeLife,startTimer:this.startTimer,stopTimer:this.stopTimer,time:this.state.time,startPlay:this.startPlay}),ResultSuccess:s.a.createElement(I,{startPlay:this.startPlay,stats:this.state.ratingData,lives:this.state.lives,playerScore:this.state.scores,livesTotal:this.beginState.livesTotal,time:this.state.time,fastCounter:this.state.fastCounter}),ResultFail:s.a.createElement(O,{startPlay:this.startPlay,time:this.state.time,lives:this.state.lives}),ErrorBlock:s.a.createElement(L,{errorInfo:this.state.errorInfo})};switch(this.state.actualScreen){case"Welcome":e=t.Welcome;break;case"GameScreen":this.isAlive()&&!this.isLast()?e=t.GameScreen:this.isAlive()&&this.isLast()?this.saveResult():e=t.ResultFail;break;case"StatScreen":e=t.ResultSuccess;break;case"ErrorBlock":e=t.ErrorBlock;break;default:e=t.ErrorBlock}return s.a.createElement("section",null,s.a.createElement(p.a,{isOpen:this.state.isModalOpen,onRequestClose:this.closeModal,style:M},s.a.createElement("section",{className:"modal"},s.a.createElement("button",{className:"modal__close",type:"button",onClick:this.closeModal},s.a.createElement("span",{className:"visually-hidden"},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c")),s.a.createElement("h2",{className:"modal__title"},"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435"),s.a.createElement("p",{className:"modal__text"},"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443 \u0437\u0430\u043d\u043e\u0432\u043e?"),s.a.createElement("div",{className:"modal__buttons"},s.a.createElement("button",{className:"modal__button button",onClick:this.startPlay},"\u041e\u043a"),s.a.createElement("button",{className:"modal__button button",onClick:this.closeModal},"\u041e\u0442\u043c\u0435\u043d\u0430")))),e,s.a.createElement(D,null))}}]),t}(s.a.Component),T=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("section",null,s.a.createElement(x,null))}}]),t}(s.a.Component);r.a.render(s.a.createElement(T,null),document.getElementById("root"))},6:function(e,t){e.exports="data:image/png;base64,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"},7:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAABTCAMAAAAfm+2JAAABrVBMVEUAAAAjDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRojDRp4/R/iAAAAj3RSTlMAARU6If8F/eIHwhOiKhtyEoJOM3cWbcP+YhHuRGa9WkLKzA9euPt6Iley+ZoG+NV9k7rkmd2I2IMtVNoYnfAwNGH3KVWYpRpjXEt49jkD5ljWIA4lPji2BPwu+qC7luBsqjaUwG5MQAlW6o52rl8UzuxKxk0ML+9nLK3fUqeBHgp16XuK8YYIAigrQaipH7colqAAAAeuSURBVHgB7NiFm5zIFgXwEzlxp2IlT4gRN2Di7u5eeeGtu7u779+8X9+m+Bi2Zrvj+htrhQvUuVU9eOaZJ9u48RPwmJpI4jE1aTLH4TE1hVPxmJrG6XhMzeBMPA5mzZ6Djrmch0dDojCW+QsWLuIEdCzmXDxcGiIxFlFz3L8mk+S/0fEf/hcPUyjZmhQRS5YuW86+FejISDxUllQaiqnG36xctZqNNehYu+h+NXbrlFIJBtEpaUy0cqxjbf2GjdyErs1ci3svyQ1F4TBIScYrxwh7RrZsBbZxO0bZMXvnLs7BvVcWpQVgczLXGCBTClHLyKLcjZ49XD0OLXv3keR+3HsWtQOGOe7UQR5C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"}},[[15,2,1]]]);
//# sourceMappingURL=main.9eb020c1.chunk.js.map