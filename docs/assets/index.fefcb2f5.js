import{r as a,o as e,c as o,a as t,b as n,w as d,p as r,d as s,e as c,f as l,g as i,h as v,F as m,i as p,j as u,s as f,t as b,k,l as h,m as g,n as _}from"./vendor.350bd397.js";!function(a=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(o){const t=new URL(a,location),n=a=>{URL.revokeObjectURL(a.src),a.remove()};self[e]=a=>new Promise(((o,d)=>{const r=new URL(a,t);if(self[e].moduleMap[r])return o(self[e].moduleMap[r]);const s=new Blob([`import * as m from '${r}';`,`${e}.moduleMap['${r}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){d(new Error(`Failed to import: ${a}`)),n(c)},onload(){o(self[e].moduleMap[r]),n(c)}});document.head.appendChild(c)})),self[e].moduleMap={}}}("/assets/");const w={name:"Navlink",props:{code:String}},x=d("data-v-049b5119"),y=x(((d,r,s,c,l,i)=>{const v=a("router-link");return e(),o(v,{to:"/"+s.code,custom:""},{default:x((({isActive:a,isExactActive:e,navigate:o,href:r})=>[t("li",{class:[a&&"router-link-active",e&&"router-link-exact-active",s.code]},[t("a",{href:r,onClick:o},[n(d.$slots,"default")],8,["href","onClick"])],2)])),_:3},8,["to"])}));w.render=y,w.__scopeId="data-v-049b5119";const F={name:"MemberForm"},H=d("data-v-005c800f");r("data-v-005c800f");const M={class:"formWrapper"},B=c('<div class="formInputs" data-v-005c800f><label for="userid" data-v-005c800f>ID</label><input id="userid" class="tt" name="userid" type="text" data-v-005c800f><label for="password" data-v-005c800f>PW</label><input id="password" class="tt" name="password" type="password" data-v-005c800f></div>',1),I={class:"button"},L=t("input",{class:"submit",type:"submit",value:"로그인"},null,-1),C=l("가입안내");s();const R=H(((n,d,r,s,c,l)=>{const i=a("router-link");return e(),o("div",M,[t("form",null,[B,t("div",I,[L,t(i,{class:"icon icon-join",to:"/member"},{default:H((()=>[C])),_:1})])])])}));F.render=R,F.__scopeId="data-v-005c800f";var U=i({name:"App",components:{MemberForm:F,Navlink:w}});const S={class:"top"},j={id:"lnb"},A=l("서버 알림"),D=l("서버 규칙"),P=l("명령어"),W=l("컨텐츠 사전"),$=l("게시판"),E=l("디스코드"),N=l("월드맵");U.render=function(n,d,r,s,c,l){const i=a("router-link"),p=a("MemberForm"),u=a("Navlink"),f=a("router-view");return e(),o(m,null,[t("nav",null,[t("div",S,[t("h1",null,[t(i,{id:"maintop",to:"/home"})]),t(p)]),t("ul",j,[t(u,{code:"notice"},{default:v((()=>[A])),_:1}),t(u,{code:"rules"},{default:v((()=>[D])),_:1}),t(u,{code:"command"},{default:v((()=>[P])),_:1}),t(u,{code:"contents"},{default:v((()=>[W])),_:1}),t(u,{code:"board"},{default:v((()=>[$])),_:1}),t(u,{code:"discord"},{default:v((()=>[E])),_:1}),t(u,{code:"worldmap"},{default:v((()=>[N])),_:1})])]),t("main",null,[t(f)])],64)};const O={name:"HeaderBar"},z=d("data-v-83d8ee6a");r("data-v-83d8ee6a");const T={id:"h2"},G=l(":: "),q=l(" :: ");s();const Q=z(((a,d,r,s,c,l)=>(e(),o("div",T,[t("h2",null,[G,n(a.$slots,"default"),q])]))));O.render=Q,O.__scopeId="data-v-83d8ee6a";const X={name:"Footer"},Y=d("data-v-70e88464");r("data-v-70e88464");const Z=t("p",{title:"2014.April.Linkey."},"Copyright © 2016 wonderland-server.net",-1);s();const J=Y(((a,t,n,d,r,s)=>(e(),o("div",null,[Z]))));X.render=J,X.__scopeId="data-v-70e88464";const K={name:"Home",components:{Footer:X,HeaderBar:O}},V=l("Wonderland Server");K.render=function(n,d,r,s,c,l){const i=a("HeaderBar"),p=a("youtube-iframe"),u=a("Footer");return e(),o(m,null,[t(i,null,{default:v((()=>[V])),_:1}),t("article",null,[t(p,{"no-cookie":"","video-id":"PgIzZfS9RP0","player-parameters":{listType:"playlist",list:"PL-kUY2NcroAxDrAnUyEaeog7BX8Qj52uh"}})]),t(u)],64)};const aa={name:"Member",components:{Footer:X,HeaderBar:O}},ea=d("data-v-1bfd8b16");r("data-v-1bfd8b16");const oa=l("Wonderland Server"),ta=c('<article data-v-1bfd8b16><div class="box" data-v-1bfd8b16><h3 class="title" data-v-1bfd8b16>회원가입 안내</h3> 마인크래프트 클라이언트를 통해 <strong class="orange" data-v-1bfd8b16>wonderland-server.net</strong> 에 접속 도중에<br data-v-1bfd8b16><strong class="green" data-v-1bfd8b16>/register </strong><span class="green" data-v-1bfd8b16>암호 e-mail</span> 명령어를 이용해 가입 할 수 있습니다.<br data-v-1bfd8b16><br data-v-1bfd8b16> 만약 e-mail 을 기입하지 않았다면, 웹사이트에 로그인 하여<br data-v-1bfd8b16> 회원정보수정을 통해 e-mail 을 등록하시면 암호 분실 시 메일을 통해 찾으실 수 있습니다. </div></article>',1);s();const na=ea(((n,d,r,s,c,l)=>{const i=a("HeaderBar"),v=a("Footer");return e(),o(m,null,[t(i,null,{default:ea((()=>[oa])),_:1}),ta,t(v)],64)}));aa.render=na,aa.__scopeId="data-v-1bfd8b16";const da={name:"Rules",components:{Footer:X,HeaderBar:O}},ra=d("data-v-6ca82040");r("data-v-6ca82040");const sa=l("RULES"),ca=c('<article data-v-6ca82040><div class="box box-alert" data-v-6ca82040><div class="alert" data-v-6ca82040><p class="icon icon-alert" data-v-6ca82040>주의</p><p data-v-6ca82040>서버규칙을 어긴 경우 경고 조치 되며 1회 이상 경고 후에는 서버에서 추방될 수 있습니다.<br data-v-6ca82040><br data-v-6ca82040></p><p data-v-6ca82040></p><p data-v-6ca82040>단, PvP 구역 내에서의 캐릭터 싸움으로 인해 생긴 문제는 예외이며,</p><p data-v-6ca82040>Coma 내에서의 재산 훼손 / 절도는 처벌하지 않습니다.</p></div></div><div class="box rule1" data-v-6ca82040><div class="img" data-v-6ca82040></div><div class="text" data-v-6ca82040><h3 data-v-6ca82040>버그 제보</h3><strong data-v-6ca82040>버그를 악용하지 않고 운영자에게 제보했을 경우</strong><p data-v-6ca82040>버그 심각성에 따라 Good User 로 승급 및 버그제보 보상 제공</p><p class="red" data-v-6ca82040>악용하다 발각되면 추방</p></div></div><div class="box rule2" data-v-6ca82040><div class="img" data-v-6ca82040></div><div class="text" data-v-6ca82040><h3 data-v-6ca82040>불균형 조장</h3><strong data-v-6ca82040>엑스레이, 미니맵, 오토, 버그, 모드 등 부정한 이득을 취한 경우</strong><p data-v-6ca82040>추방</p></div></div><div class="box rule3" data-v-6ca82040><div class="img" data-v-6ca82040></div><div class="text" data-v-6ca82040><h3 data-v-6ca82040>서버 렉 유발</h3><strong data-v-6ca82040>너무 많은 가축, 탈것을 모아놓거나 레드스톤 무한회로를 만든 경우</strong><p data-v-6ca82040>투옥 및 재범시 추방</p><p class="red" data-v-6ca82040>무한반복되는 인서터를 설치한 것도 처벌</p></div></div><div class="box rule4" data-v-6ca82040><div class="img" data-v-6ca82040></div><div class="text" data-v-6ca82040><h3 data-v-6ca82040>용암, 물, 불 등을 사용한 테러</h3><strong data-v-6ca82040>타인에게 고의적인 피해를 끼치는 경우</strong><p data-v-6ca82040>투옥 및 재범시 추방</p></div></div><div class="box rule5" data-v-6ca82040><div class="img" data-v-6ca82040></div><div class="text" data-v-6ca82040><h3 data-v-6ca82040>재산 피해</h3><strong data-v-6ca82040>타인의 보호구역 내의 가축을 죽이거나 재산을 훼손 / 훔친 경우</strong><p data-v-6ca82040>의견 조율로 해결되지 않을 경우 투옥 및 재범시 추방</p><p class="red" data-v-6ca82040>Coma 내에서 일어난 재산 피해는 처벌하지 않습니다.</p></div></div><div class="box rule6" data-v-6ca82040><div class="img" data-v-6ca82040></div><div class="text" data-v-6ca82040><h3 data-v-6ca82040>괴롭힘</h3><strong data-v-6ca82040>특정 대상에게 내뱉은 욕설, 악의성 도배, 괴롭힘 등이 발생한 경우</strong><p data-v-6ca82040>관리자 판단 후 투옥 또는 추방</p><p class="red" data-v-6ca82040>재미로 장난을 친 것이라도, 상대방은 큰 스트레스를 받을 수 있습니다.</p></div></div><div class="box rule7" data-v-6ca82040><div class="img" data-v-6ca82040></div><div class="text" data-v-6ca82040><h3 data-v-6ca82040>기타 분쟁</h3><strong data-v-6ca82040>사람과 사람간의 다양한 문제들은 검토 후 조치</strong><p data-v-6ca82040>타인을 불쾌하게 하는 아이디, 인신공격성 발언 등 조항에 명시되어 있지 않더라도<br data-v-6ca82040>관리자가 판단하기에 문제가 있는 경우 경고 혹은 추방</p></div></div></article>',1);s();const la=ra(((n,d,r,s,c,l)=>{const i=a("HeaderBar"),v=a("Footer");return e(),o(m,null,[t(i,null,{default:ra((()=>[sa])),_:1}),ca,t(v)],64)}));da.render=la,da.__scopeId="data-v-6ca82040";var ia=[{title:"도움이 필요할 때",list:[{name:"/help",kor:"/도움",info:"도움말을 봅니다."},{name:"/sos",kor:"/호출",info:"운영자 긴급호출 서비스를 요청합니다."}]},{title:"기본 명령어",list:[{name:"/spawn",kor:"/스폰",info:"5초동안 움직이지 않는다면, 스폰 지역으로 순간이동합니다",bold:!0},{name:"/sethome",kor:"/셋홈",info:"현재 본인이 서있는 곳을 집으로 지정합니다.",bold:!0},{name:"/home",kor:"/홈",info:"5초동안 움직이지 않는다면, 본인의 집으로 순간이동합니다.",bold:!0},{name:"/register 암호",kor:"/등록 암호",info:"웹사이트 로그인에 사용할 비밀번호를 등록합니다."},{name:"/password 암호 바꿀암호",kor:"/암호 암호 바꿀암호",info:"비밀번호를 변경합니다.",wordwrap:!0},{name:"/tag",kor:"/칭호",info:"칭호를 설정합니다."},{name:"/stat (아이디)",kor:"/스텟 (아이디)",info:"본인 또는 타인의 정보를 봅니다."},{name:"/limitbreak",kor:"/돌파",info:"Lv.1 로 돌아가면서 능력의 제한을 끌어올립니다."},{name:"/money",kor:"/돈",info:"보유 재산을 확인합니다."},{name:"/item",kor:"/아이템",info:"서버에 존재하는 모든 아이템을 살펴봅니다."},{name:"/time",kor:"/시간",info:"던전, 필드보스, 이벤트 현황을 확인합니다."},{name:"/quest",kor:"/퀘스트",info:"진행중인 퀘스트를 확인합니다."},{name:"/guide x y z",kor:"/가이드 x y z",info:"해당 좌표로 향하는 방향을 안내받습니다."},{name:"/show",kor:"/보이기",info:"다른 플레이어들의 모습을 숨기거나 다시 표시합니다."}]},{title:"소통 명령어",list:[{name:"@아이디",kor:"",info:"아이디 에게 멘션을 보내고 알림소리를 듣게 합니다."},{name:"/1 할말",kor:"",info:"서버 <전체> 의 모든 사람들이 들을 수 있습니다."},{name:"/2 할말",kor:"",info:'현재 본인이 속해있는 <strong class="yellow">&lt;월드&gt;</strong> 내의 사람들만 들을 수 있습니다.'},{name:"/3 할말",kor:"",info:"내 주변 <지역> 150블록 안의 사람들만 들을 수 있습니다."},{name:"/p 할말",kor:"/ㅔ 할말",info:"내 <파티> 멤버들만 들을 수 있습니다."},{name:"/w 아이디 할말",kor:"/ㅈ 아이디 할말",info:"아이디 에게 <귓속말> 을 합니다."},{name:"/r 할말",kor:"/ㄱ 할말",info:"가장 최근에 받은 <귓속말> 에 대한 답장을 합니다."},{name:"/mute 아이디",kor:"/차단 아이디",info:"아이디 의 대화를 차단합니다."},{name:"/invite 아이디",kor:"/초대 아이디",info:"아이디 를 파티로 초대합니다."},{name:"/leader 아이디",kor:"/파티장 아이디",info:"아이디 를 파티장으로 임명합니다."},{name:"/banish 아이디",kor:"/추방 아이디",info:"아이디 를 파티에서 추방합니다."},{name:"/leave",kor:"/탈퇴",info:"파티를 탈퇴합니다."},{name:"/trade 아이디",kor:"/거래 아이디",info:"아이디 에게 거래를 요청합니다.."},{name:"/link",kor:"/링크",info:"현재 손에 들고있는 아이템을 채팅창에 출력합니다."},{name:"/dice",kor:"/주사위",info:"주사위 2개를 굴립니다."}]},{title:"토지 명령어",list:[{name:"F3 + G",kor:"",info:"토지의 범위를 표시합니다.",bold:!0},{name:"Space x 2",kor:"",info:"토지 내에서 비행 모드를 켜거나 끕니다. (초당 마나 5 소모)",bold:!0},{name:"Shift x 3",kor:"",info:"건설 모드를 켜거나 끕니다. (웅크리기를 빠르게 3번 누르세요)",bold:!0},{name:"/info",kor:"/정보",info:"현재 속해있는 토지의 상세 정보를 봅니다."},{name:"/purchase",kor:"/구매",info:"현재 속해있는 토지를 구매합니다. (1,000,000 мега 필요)"},{name:"/list",kor:"/목록",info:"본인이 소유한 토지 목록을 봅니다."},{name:"/check",kor:"/검사",info:"40m 내에 있는 토지정보를 눈으로 빠르게 확인합니다."},{name:"/add 아이디",kor:"/추가 아이디",info:"아이디 에게 해당구역의 권한을 줍니다."},{name:"/addall 아이디",kor:"/모두추가 아이디",info:"아이디 에게 본인 소유의 모든구역의 권한을 줍니다."},{name:"/remove 아이디",kor:"/제거 아이디",info:"아이디 의 권한을 해당구역에서 제거합니다.앱니다."},{name:"/removeall 아이디",kor:"/모두제거 아이디",info:"아이디 의 권한을 본인 소유의 모든구역에서 제거합니다."},{name:"/transfer 아이디",kor:"/양도 아이디",info:"토지 소유권을 아이디 에게 양도합니다."},{name:"/refund",kor:"/환불",info:"토지 소유권을 포기하고 토지금액의 90% 를 환불받습니다."}]}];const va={name:"Command",components:{Footer:X,HeaderBar:O},setup:()=>({commandlist:p(ia)})},ma=d("data-v-52095236");r("data-v-52095236");const pa=l("COMMANDS"),ua={class:"page-command"},fa={class:"box"};s();const ba=ma(((n,d,r,s,c,l)=>{const i=a("HeaderBar"),v=a("Footer");return e(),o(m,null,[t(i,null,{default:ma((()=>[pa])),_:1}),t("article",null,[t("div",ua,[d[1]||(f(-1),d[1]=(e(!0),o(m,null,u(s.commandlist,(a=>(e(),o("div",fa,[t("h3",null,b(a.title),1),(e(!0),o(m,null,u(a.list,(a=>(e(),o("dl",{class:{wordwrap:a.wordwrap}},[t("dt",{class:{bold:a.bold}},b(a.name),3),t("dt",{class:["kor",{bold:a.bold}]},b(a.kor),3),t("dd",{innerHTML:a.info},null,8,["innerHTML"])],2)))),256))])))),256)),f(1),d[1])])]),t(v)],64)}));va.render=ba,va.__scopeId="data-v-52095236";const ka={name:"Discord",components:{Footer:X,HeaderBar:O}},ha=d("data-v-cb2b54bc");r("data-v-cb2b54bc");const ga=l("DISCORD"),_a=t("article",null,[t("div",{class:"box"},[t("h3",null,"서버 디스코드에 참여하시려면 아래 Connect 버튼을 눌러주세요.")]),t("iframe",{allowtransparency:"true",height:"496",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",src:"https://discordapp.com/widget?id=326393541263753216&theme=dark",width:"350"})],-1);s();const wa=ha(((n,d,r,s,c,l)=>{const i=a("HeaderBar"),v=a("Footer");return e(),o(m,null,[t(i,null,{default:ha((()=>[ga])),_:1}),_a,t(v)],64)}));ka.render=wa,ka.__scopeId="data-v-cb2b54bc";const xa={name:"Worldmap"},ya=d("data-v-5075a230");r("data-v-5075a230");const Fa=t("iframe",{src:"http://wonderland-server.net:8124"},null,-1);s();const Ha=ya(((a,t,n,d,r,s)=>(e(),o("div",null,[Fa]))));xa.render=Ha,xa.__scopeId="data-v-5075a230";const Ma=[{name:"Home",alias:"/",component:K,path:"/home"},{name:"Member",component:aa,path:"/member"},{name:"Rules",component:da,path:"/rules"},{name:"Command",component:va,path:"/command"},{name:"Discord",component:ka,path:"/discord"},{name:"Worldmap",component:xa,path:"/worldmap"}],Ba=k({history:h(),routes:Ma}),Ia=g(U);Ia.use(Ba),Ia.use(_),Ia.mount("#app");
