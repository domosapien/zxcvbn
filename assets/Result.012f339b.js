import{o as n,c as l,a as t,t as s,b as o,F as c,r as u,d as a}from"./app.3007fb9e.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const _={name:"ZxcvbnResult",props:{result:{type:Object,default(){return{}}}},computed:{hasSuggestions(){return this.result.feedback.suggestions.length>0}}},h={class:"result"},g=t("td",null,"password:",-1),f={colspan:"2"},m=t("td",null,"guessesLog10:",-1),k={colspan:"2"},y=t("td",null,"score:",-1),b=t("td",null,"function runtime (ms):",-1),T={colspan:"2"},w=t("tr",null,[t("td",{colspan:"3"},"guess times:")],-1),S=t("td",null,"100 / hour:",-1),x=t("td",null,"(throttled online attack)",-1),D=t("td",null,"10\xA0 / second:",-1),B=t("td",null,"(unthrottled online attack)",-1),N=t("td",null,"10k / second:",-1),P=t("td",null,"(offline attack, slow hash, many cores)",-1),v=t("td",null,"10B / second:",-1),F=t("td",null,"(offline attack, fast hash, many cores)",-1),H={key:0},L=t("td",null,"warning:",-1),V={colspan:"2"},p={key:1},R=t("td",{style:{"vertical-align":"top"}},"suggestions:",-1),j={key:0,colspan:"2"};function C(E,O,e,Z,q,d){return n(),l("table",h,[t("tr",null,[g,t("td",f,[t("strong",null,s(e.result.password),1)])]),t("tr",null,[m,t("td",k,s(e.result.guessesLog10),1)]),t("tr",null,[y,t("td",null,s(e.result.score)+" / 4",1)]),t("tr",null,[b,t("td",T,s(e.result.calcTime),1)]),w,t("tr",null,[S,t("td",null,s(e.result.crackTimesDisplay.onlineThrottling100PerHour),1),x]),t("tr",null,[D,t("td",null,s(e.result.crackTimesDisplay.onlineNoThrottling10PerSecond),1),B]),t("tr",null,[N,t("td",null,s(e.result.crackTimesDisplay.offlineSlowHashing1e4PerSecond),1),P]),t("tr",null,[v,t("td",null,s(e.result.crackTimesDisplay.offlineFastHashing1e10PerSecond),1),F]),e.result.feedback.warning?(n(),l("tr",H,[L,t("td",V,s(e.result.feedback.warning),1)])):o("",!0),d.hasSuggestions?(n(),l("tr",p,[R,e.result.feedback.suggestions?(n(),l("td",j,[(n(!0),l(c,null,u(e.result.feedback.suggestions,r=>(n(),l(c,null,[a(" - "+s(r),1)],64))),256))])):o("",!0)])):o("",!0)])}var G=i(_,[["render",C]]);export{G as default};
