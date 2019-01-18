(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(48)},29:function(e,t,a){},42:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(4),o=a.n(l),i=(a(29),a(7)),r=a(8),h=a(11),s=a(9),m=a(12),d=a(3),u=a(22),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(s.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.value;return c.a.createElement("form",{className:"k-form"},c.a.createElement(u.a,{name:"symbol",label:"Company's symbol",pattern:"[A-Z]{1,4}",minLength:1,required:!0,value:e,onChange:this.handleChange}))}},{key:"handleChange",value:function(e){(0,this.props.onChange)(e.target.value)}}]),t}(n.Component),p=a(6),k=(a(41),"https://stock-chart-proxy.herokuapp.com/");function g(e){return{Date:"/Date(".concat(new Date(e.date).getTime(),")/"),Close:e.close,Volume:e.volume,Open:e.open,High:e.high,Low:e.low}}var f=function(e){var t=e.stockData,a=t.map(g),n=new Date(t[0].date),l=new Date(t[t.length-1].date);return c.a.createElement(p.h,null,c.a.createElement(p.g,{text:"".concat(e.company," - ").concat(e.symbol)}),c.a.createElement(p.e,null,c.a.createElement(p.f,{data:a,type:"candlestick",openField:"Open",closeField:"Close",lowField:"Low",highField:"High",categoryField:"Date"})),c.a.createElement(p.a,null,c.a.createElement(p.b,{from:n,to:l}),c.a.createElement(p.c,null,c.a.createElement(p.d,{data:a,type:"area",field:"Close",categoryField:"Date"}))))},C=a(13),v=(a(42),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(s.a)(t).call(this,e))).handleClickOneMonth=a.handleClick.bind(Object(d.a)(Object(d.a)(a)),"1m"),a.handleClickSixMonths=a.handleClick.bind(Object(d.a)(Object(d.a)(a)),"6m"),a.handleClickOneYear=a.handleClick.bind(Object(d.a)(Object(d.a)(a)),"1y"),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.value;return c.a.createElement("div",{className:"RangeButtons"},c.a.createElement(C.b,null,c.a.createElement(C.a,{togglable:!0,selected:"1m"===e,onClick:this.handleClickOneMonth},"1 month"),c.a.createElement(C.a,{togglable:!0,selected:"6m"===e,onClick:this.handleClickSixMonths},"6 months"),c.a.createElement(C.a,{togglable:!0,selected:"1y"===e,onClick:this.handleClickOneYear},"1 year")))}},{key:"handleClick",value:function(e){(0,this.props.onClick)(e)}}]),t}(n.Component)),y=(a(44),a(46),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(s.a)(t).call(this,e))).state={stocksData:{},symbol:"",range:"1m"},a.handleChangeSymbol=a.handleChangeSymbol.bind(Object(d.a)(Object(d.a)(a))),a.handleClickRange=a.handleClickRange.bind(Object(d.a)(Object(d.a)(a))),a.updateStockData=a.updateStockData.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"handleChangeSymbol",value:function(e){this.setState({symbol:e},this.updateStockData)}},{key:"handleClickRange",value:function(e){this.setState({range:e},this.updateStockData)}},{key:"render",value:function(){var e=this.state,t=e.symbol,a=e.range,n=e.stocksData,l=n[t]?n[t].quote.companyName:void 0,o=n[t]?n[t].chart:void 0;return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement(b,{value:t,onChange:this.handleChangeSymbol,onSubmit:this.handleSubmitSymbol}),c.a.createElement(v,{value:a,onClick:this.handleClickRange})),t&&l&&o&&c.a.createElement("div",{className:"App-chart"},c.a.createElement(f,{symbol:t,company:l,stockData:o}),c.a.createElement("p",null,"Data provided for free by ",c.a.createElement("a",{href:"https://iextrading.com/developer/"},"IEX"),". View ",c.a.createElement("a",{href:"https://iextrading.com/api-exhibit-a/"},"IEX\u2019s Terms of Use"),".")))}},{key:"updateStockData",value:function(){var e=this,t=this.state;(function(e,t){var a="".concat(k,"?companyName=").concat(e,"&range=").concat(t);return fetch(a).then(function(e){return e.json()}).catch(function(e){console.error("Could not fetch stock data",e)})})(t.symbol,t.range).then(function(t){e.setState({stocksData:t})})}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.af1bb05e.chunk.js.map