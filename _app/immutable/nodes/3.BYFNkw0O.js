import{b as Le,d as Ee,f as Q,a as V,c as je}from"../chunks/CdJyBmu9.js";import"../chunks/BQAg3byn.js";import{y as le,h as N,v as ae,p as me,V as ge,q as Te,f as h,a4 as Ne,X as Me,Y as De,Z as qe,x as pe,z as se,C as ke,aI as Ie,at as Fe,O as Be,S as he,U as Ve,aG as xe,aO as He,m as H,aj as ye,aP as Je,aQ as Ue,aR as Ye,P as Pe,R as Xe,aS as ve,w as ze,aT as $e,aU as Ke,aF as Qe,Q as We,F as te,a2 as Ze,aV as en,aJ as nn,aD as sn,D as Se,G as Re,I as M,K as G,J as w,s as P,aW as ne,aX as tn,E as be,k as x,b as W,aN as an,aY as rn,M as on,$ as ln}from"../chunks/i9H2C1ok.js";import{h as un}from"../chunks/CnoINY0m.js";import{e as u,s as cn}from"../chunks/WKNN4nrM.js";import{i as Ae}from"../chunks/CkAPHX_N.js";import{p as Z,i as ie}from"../chunks/DBV2b9bi.js";import{s as oe}from"../chunks/BLytLSnA.js";function dn(s,a){return a}function pn(s,a,t){for(var l=[],d=a.length,r=0;r<d;r++)$e(a[r].e,l,!0);Ke(l,()=>{var e=l.length===0&&t!==null;if(e){var n=t,p=n.parentNode;Qe(p),p.append(n),s.items.clear(),F(s,a[0].prev,a[d-1].next)}for(var c=0;c<d;c++){var i=a[c];e||(s.items.delete(i.k),F(s,i.prev,i.next)),We(i.e,!e)}s.first===a[0]&&(s.first=a[0].prev)})}function vn(s,a,t,l,d,r=null){var e=s,n=new Map,p=null;{var c=s;e=N?le(ae(c)):c.appendChild(me())}N&&ge();var i=null,f=Ne(()=>{var v=t();return He(v)?v:v==null?[]:xe(v)}),b,L=!0;function m(){fn(z,b,e,a,l),i!==null&&(b.length===0?(i.fragment?(e.before(i.fragment),i.fragment=null):Pe(i.effect),k.first=i.effect):Xe(i.effect,()=>{i=null}))}var k=Te(()=>{b=h(f);var v=b.length;let g=!1;if(N){var O=Me(e)===De;O!==(v===0)&&(e=qe(),le(e),pe(!1),g=!0)}for(var S=new Set,q=Be,y=null,R=Ve(),j=0;j<v;j+=1){N&&se.nodeType===ke&&se.data===Ie&&(e=se,g=!0,pe(!1));var E=b[j],A=l(E,j),C=L?null:n.get(A);C?(Fe(C.v,E),C.i=j,R&&q.skipped_effects.delete(C.e)):(C=mn(L?e:null,y,E,A,j,d,a,t),L&&(C.o=!0,y===null?p=C:y.next=C,y=C),n.set(A,C)),S.add(A)}if(v===0&&r&&!i)if(L)i={fragment:null,effect:he(()=>r(e))};else{var _=document.createDocumentFragment(),J=me();_.append(J),i={fragment:_,effect:he(()=>r(J))}}if(N&&v>0&&le(qe()),!L)if(R){for(const[ee,B]of n)S.has(ee)||q.skipped_effects.add(B.e);q.oncommit(m),q.ondiscard(()=>{})}else m();g&&pe(!0),h(f)}),z={effect:k,items:n,first:p};L=!1,N&&(e=se)}function fn(s,a,t,l,d){var r=a.length,e=s.items,n=s.first,p,c=null,i=[],f=[],b,L,m,k;for(k=0;k<r;k+=1){if(b=a[k],L=d(b,k),m=e.get(L),s.first??=m,!m.o){m.o=!0;var z=c?c.next:n;F(s,c,m),F(s,m,z),fe(m,z,t),c=m,i=[],f=[],n=c.next;continue}if((m.e.f&ve)!==0&&Pe(m.e),m!==n){if(p!==void 0&&p.has(m)){if(i.length<f.length){var v=f[0],g;c=v.prev;var O=i[0],S=i[i.length-1];for(g=0;g<i.length;g+=1)fe(i[g],v,t);for(g=0;g<f.length;g+=1)p.delete(f[g]);F(s,O.prev,S.next),F(s,c,O),F(s,S,v),n=v,c=S,k-=1,i=[],f=[]}else p.delete(m),fe(m,n,t),F(s,m.prev,m.next),F(s,m,c===null?s.first:c.next),F(s,c,m),c=m;continue}for(i=[],f=[];n!==null&&n.k!==L;)(n.e.f&ve)===0&&(p??=new Set).add(n),f.push(n),n=n.next;if(n===null)continue;m=n}i.push(m),c=m,n=m.next}let q=e.size>r;if(n!==null||p!==void 0){for(var y=p===void 0?[]:xe(p);n!==null;)(n.e.f&ve)===0&&y.push(n),n=n.next;var R=y.length;if(q=e.size-R>r,R>0){var j=r===0?t:null;pn(s,y,j)}}if(q)for(const E of e.values())E.o||(F(s,c,E),c=E);s.effect.last=c&&c.e}function mn(s,a,t,l,d,r,e,n){var p=(e&Ue)!==0,c=(e&Ye)===0,i=p?c?H(t,!1,!1):ye(t):t,f=(e&Je)===0?d:ye(d),b={i:f,v:i,k:l,a:null,e:null,o:!1,prev:a,next:null};try{if(s===null){var L=document.createDocumentFragment();L.append(s=me())}return b.e=he(()=>r(s,i,f,n)),a!==null&&(a.next=b),b}finally{}}function fe(s,a,t){for(var l=s.next?s.next.e.nodes_start:t,d=a?a.e.nodes_start:t,r=s.e.nodes_start;r!==null&&r!==l;){var e=ze(r);d.before(r),r=e}}function F(s,a,t){a===null?(s.first=t,s.effect.first=t&&t.e):(a.e.next&&(a.e.next.prev=null),a.next=t,a.e.next=t&&t.e),t!==null&&(t.e.prev&&(t.e.prev.next=null),t.prev=a,t.e.prev=a&&a.e)}function gn(s,a,t=!1,l=!1,d=!1){var r=s,e="";te(()=>{var n=Ze;if(e===(e=a()??"")){N&&ge();return}if(n.nodes_start!==null&&(en(n.nodes_start,n.nodes_end),n.nodes_start=n.nodes_end=null),e!==""){if(N){se.data;for(var p=ge(),c=p;p!==null&&(p.nodeType!==ke||p.data!=="");)c=p,p=ze(p);if(p===null)throw nn(),sn;Le(se,c),r=le(p);return}var i=e+"";t?i=`<svg>${i}</svg>`:l&&(i=`<math>${i}</math>`);var f=Ee(i);if((t||l)&&(f=ae(f)),Le(ae(f),f.lastChild),t||l)for(;ae(f);)r.before(ae(f));else r.before(f)}})}const Ce=[...` 	
\r\f \v\uFEFF`];function hn(s,a,t){var l=s==null?"":""+s;if(t){for(var d in t)if(t[d])l=l?l+" "+d:d;else if(l.length)for(var r=d.length,e=0;(e=l.indexOf(d,e))>=0;){var n=e+r;(e===0||Ce.includes(l[e-1]))&&(n===l.length||Ce.includes(l[n]))?l=(e===0?"":l.substring(0,e))+l.substring(n+1):e=n}}return l===""?null:l}function bn(s,a){return s==null?null:String(s)}function I(s,a,t,l,d,r){var e=s.__className;if(N||e!==t||e===void 0){var n=hn(t,l,r);(!N||n!==s.getAttribute("class"))&&(n==null?s.removeAttribute("class"):s.className=n),s.__className=t}else if(r&&d!==r)for(var p in r){var c=!!r[p];(d==null||c!==!!d[p])&&s.classList.toggle(p,c)}return r}function Ge(s,a,t,l){var d=s.__style;if(N||d!==a){var r=bn(a);(!N||r!==s.getAttribute("style"))&&(r==null?s.removeAttribute("style"):s.style.cssText=r),s.__style=a}return l}var _n=Q('<div class="wrapper svelte-12fzu5d" role="application"><div class="card svelte-12fzu5d"><div class="card-top svelte-12fzu5d"><div role="button" tabindex="0"></div> <div role="button" tabindex="0"></div> <div role="button" tabindex="0"></div></div> <div class="card-mid svelte-12fzu5d"><div role="button" tabindex="0"></div> <div class="middle-space svelte-12fzu5d"><div role="button" tabindex="0"></div> <div role="button" tabindex="0"></div></div> <div role="button" tabindex="0"></div></div> <div class="card-top inverted svelte-12fzu5d"><div role="button" tabindex="0"></div> <div role="button" tabindex="0"></div> <div role="button" tabindex="0"></div></div></div></div>');function Ln(s,a){Se(a,!1);let t=Z(a,"hoveredGame",8),l=Z(a,"onGameHover",8),d=Z(a,"onGameLeave",8),r=Z(a,"onShowRules",8),e=H(0),n=H(0);function p(o){const $=o.currentTarget.getBoundingClientRect(),ue=o.clientX-$.left,ce=o.clientY-$.top,Y=$.width/2,K=$.height/2;P(n,(ue-Y)/Y*15),P(e,(K-ce)/K*15)}function c(){P(e,0),P(n,0)}function i(o,$){(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),r()($))}Ae();var f=_n(),b=M(f),L=M(b),m=M(L);let k;var z=G(m,2);let v;var g=G(z,2);let O;w(L);var S=G(L,2),q=M(S);let y;var R=G(q,2),j=M(R);let E;var A=G(j,2);let C;w(R);var _=G(R,2);let J;w(S);var ee=G(S,2),B=M(ee);let re;var U=G(B,2);let X;var T=G(U,2);let D;w(ee),w(b),w(f),te(()=>{Ge(b,`transform: perspective(800px) rotateX(${h(e)??""}deg) rotateY(${h(n)??""}deg)`),k=I(m,1,"tarot svelte-12fzu5d",null,k,{hovered:t()==="tarot"}),v=I(z,1,"sixqp svelte-12fzu5d",null,v,{hovered:t()==="sixqp"}),O=I(g,1,"skyjo svelte-12fzu5d",null,O,{hovered:t()==="skyjo"}),y=I(q,1,"codenames-words svelte-12fzu5d",null,y,{hovered:t()==="codeNames"}),E=I(j,1,"ori-lg svelte-12fzu5d",null,E,{hovered:t()==="oriLg"}),C=I(A,1,"codenames-map svelte-12fzu5d",null,C,{hovered:t()==="codeNames"}),J=I(_,1,"codenames-words svelte-12fzu5d",null,J,{hovered:t()==="codeNames"}),re=I(B,1,"tarot svelte-12fzu5d",null,re,{hovered:t()==="tarot"}),X=I(U,1,"sixqp svelte-12fzu5d",null,X,{hovered:t()==="sixqp"}),D=I(T,1,"skyjo svelte-12fzu5d",null,D,{hovered:t()==="skyjo"})}),u("click",m,()=>r()("tarot")),u("keydown",m,o=>i(o,"tarot")),u("mouseenter",m,()=>l()("tarot")),u("mouseleave",m,function(...o){d()?.apply(this,o)}),u("click",z,()=>r()("sixqp")),u("keydown",z,o=>i(o,"sixqp")),u("mouseenter",z,()=>l()("sixqp")),u("mouseleave",z,function(...o){d()?.apply(this,o)}),u("click",g,()=>r()("skyjo")),u("keydown",g,o=>i(o,"skyjo")),u("mouseenter",g,()=>l()("skyjo")),u("mouseleave",g,function(...o){d()?.apply(this,o)}),u("click",q,()=>r()("codeNames")),u("keydown",q,o=>i(o,"codeNames")),u("mouseenter",q,()=>l()("codeNames")),u("mouseleave",q,function(...o){d()?.apply(this,o)}),u("click",j,()=>r()("oriLg")),u("keydown",j,o=>i(o,"oriLg")),u("mouseenter",j,()=>l()("oriLg")),u("mouseleave",j,function(...o){d()?.apply(this,o)}),u("click",A,()=>r()("codeNames")),u("keydown",A,o=>i(o,"codeNames")),u("mouseenter",A,()=>l()("codeNames")),u("mouseleave",A,function(...o){d()?.apply(this,o)}),u("click",_,()=>r()("codeNames")),u("keydown",_,o=>i(o,"codeNames")),u("mouseenter",_,()=>l()("codeNames")),u("mouseleave",_,function(...o){d()?.apply(this,o)}),u("click",B,()=>r()("tarot")),u("keydown",B,o=>i(o,"tarot")),u("mouseenter",B,()=>l()("tarot")),u("mouseleave",B,function(...o){d()?.apply(this,o)}),u("click",U,()=>r()("sixqp")),u("keydown",U,o=>i(o,"sixqp")),u("mouseenter",U,()=>l()("sixqp")),u("mouseleave",U,function(...o){d()?.apply(this,o)}),u("click",T,()=>r()("skyjo")),u("keydown",T,o=>i(o,"skyjo")),u("mouseenter",T,()=>l()("skyjo")),u("mouseleave",T,function(...o){d()?.apply(this,o)}),u("mousemove",f,p),u("mouseleave",f,c),V(s,f),Re()}var jn=Q('<img src="/ori.svg" class="bookmark-icon svelte-afcg7t"/>'),qn=Q('<img src="/lg.svg" class="bookmark-icon svelte-afcg7t"/>'),yn=Q("<button><!></button>"),Cn=Q('<div class="subgame-bookmarks svelte-afcg7t"></div>'),kn=Q('<div class="popup-overlay svelte-afcg7t" role="button" tabindex="0"><div class="popup-rules svelte-afcg7t" role="dialog" tabindex="-1"><!> <div class="popup-header svelte-afcg7t"><h2 class="svelte-afcg7t"> </h2> <button class="close-btn svelte-afcg7t">×</button></div> <div class="popup-content svelte-afcg7t"><!></div></div></div>');function xn(s,a){Se(a,!1);const t=H(),l=H(),d=H(),r=H();let e=Z(a,"selectedGame",8),n=Z(a,"popupRules",8),p=Z(a,"onClose",8),c=H(null);function i(v){v.key==="Escape"&&(v.preventDefault(),p()())}function f(v){const g=v.match(/^#\s+(.+?)$/m);return g?g[1]:""}function b(v){return v.replace(/^#\s+.+?\n\n/m,"")}function L(v){return v.replace(/^## (.*?)$/gm,"<h2>$1</h2>").replace(/^### (.*?)$/gm,"<h3>$1</h3>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>").replace(/`(.*?)`/g,"<code>$1</code>").replace(/^\- (.*?)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>)/s,"<ul>$1</ul>").replace(/\n\n/g,"</p><p>").replace(/^(?!<[hu]|<[ul]|<p)(.+)$/gm,"<p>$1</p>")}ne(()=>(x(e()),x(n())),()=>{if(e()&&n()[e()]?.subgames){const v=Object.keys(n()[e()].subgames);P(c,v[0]||null)}}),ne(()=>(x(e()),x(n()),h(c)),()=>{e()&&n()[e()]&&n()[e()].subgames&&h(c)}),ne(()=>(x(e()),x(n()),h(c)),()=>{P(t,(()=>{if(!e()||!n()[e()])return"";const v=n()[e()];return v.subgames&&h(c)&&v.subgames[h(c)]?v.subgames[h(c)].rules:v.rules||""})())}),ne(()=>h(t),()=>{P(l,f(h(t)))}),ne(()=>h(t),()=>{P(d,b(h(t)))}),ne(()=>(x(e()),x(n())),()=>{P(r,e()&&n()[e()]?.subgames!==void 0)}),tn(),Ae();var m=je(),k=be(m);{var z=v=>{var g=kn(),O=M(g),S=M(O);{var q=_=>{var J=Cn();vn(J,5,()=>(x(n()),x(e()),W(()=>Object.entries(n()[e()].subgames))),dn,(ee,B,re)=>{var U=an(()=>rn(h(B),2));let X=()=>h(U)[0],T=()=>h(U)[1];var D=yn();let o;Ge(D,`--bookmark-index: ${re}`);var $=M(D);{var ue=Y=>{var K=jn();te(()=>oe(K,"alt",(T(),W(()=>T().name)))),V(Y,K)},ce=Y=>{var K=je(),we=be(K);{var Oe=de=>{var _e=qn();te(()=>oe(_e,"alt",(T(),W(()=>T().name)))),V(de,_e)};ie(we,de=>{X()==="loupGarou"&&de(Oe)},!0)}V(Y,K)};ie($,Y=>{X()==="oriFlame"?Y(ue):Y(ce,!1)})}w(D),te(()=>{o=I(D,1,"subgame-bookmark svelte-afcg7t",null,o,{active:h(c)===X()}),oe(D,"data-color",X()),oe(D,"title",(T(),W(()=>T().name)))}),u("click",D,()=>P(c,X())),V(ee,D)}),w(J),V(_,J)};ie(S,_=>{h(r),x(n()),x(e()),W(()=>h(r)&&n()[e()]?.subgames)&&_(q)})}var y=G(S,2),R=M(y),j=M(R,!0);w(R);var E=G(R,2);w(y);var A=G(y,2),C=M(A);gn(C,()=>(h(d),W(()=>L(h(d))))),w(A),w(O),w(g),te(()=>cn(j,h(l))),u("click",E,function(..._){p()?.apply(this,_)}),u("click",O,_=>_.stopPropagation()),u("keydown",O,_=>_.stopPropagation()),u("click",g,function(..._){p()?.apply(this,_)}),u("keydown",g,i),V(v,g)};ie(k,v=>{x(e()),x(n()),W(()=>e()&&n()[e()])&&v(z)})}V(s,m),Re()}const Pn=`# Tarot

## 1. Le Matériel et l'Objectif

**Le jeu :** 78 cartes, dont 4 couleurs classiques (14 cartes par couleur), 21 Atouts et l'Excuse.

**Les Bouts (Oudlers) :** Ce sont les cartes clés : le 21, le 1 (Petit) et l'Excuse.

**Objectif :** Le "Preneur" doit réaliser un certain nombre de points selon le nombre de Bouts qu'il possède à la fin de la partie :
- 3 Bouts : 36 points nécessaires
- 2 Bouts : 41 points nécessaires
- 1 Bout : 51 points nécessaires
- 0 Bout : 56 points nécessaires

## 2. La Distribution et les Enchères

**Distribution :** Les cartes sont données 3 par 3. Un "Chien" de 6 cartes est constitué carte par carte pendant la distribution.

**Enchères :** Chaque joueur peut parler une seule fois pour annoncer un contrat de plus en plus fort :
- **Prise :** Jeu moyen
- **Garde :** Jeu solide (double les points)
- **Garde Sans (le Chien) :** Le Chien n'est pas utilisé mais appartient au preneur (points multipliés par 4)
- **Garde Contre (le Chien) :** Le Chien appartient à la Défense (points multipliés par 6)

**L'Écart :** Sur une Prise ou une Garde, le preneur prend le Chien, le montre, et écarte 6 cartes de son choix (interdiction d'écarter des Rois ou des Bouts).

## 3. Le Jeu de la Carte

- L'entame est faite par le joueur à droite du donneur.
- **À la couleur :** Obligation de fournir la couleur demandée.
  - Si on n'en a pas, on doit couper (jouer Atout).
  - Si un joueur a déjà coupé, on doit surcouper (jouer un Atout supérieur).
- **À l'Atout :** Obligation de monter sur le plus fort Atout déjà en jeu.
- **L'Excuse :** Elle sert de joker. Elle peut être jouée à n'importe quel moment pour éviter de fournir une couleur ou un Atout, mais elle ne gagne jamais le pli (sauf exception rare du Chelem). Elle reste la propriété de celui qui la joue.

## 4. Primes et Annonces Spéciales

**La Poignée :** Si un joueur possède beaucoup d'Atouts (10, 13 ou 15), il peut l'annoncer avant de jouer sa première carte pour obtenir une prime.

**Le Petit au Bout :** Si le Petit (l'Atout 1) est joué lors du tout dernier pli, le camp qui remporte ce pli gagne une prime de 10 points (multipliée selon le contrat).

**Le Chelem :** Réussir à faire tous les plis de la donne.

## 5. Calcul des Points

À la fin de la donne, on compte les points des cartes du preneur :
- Bout / Roi : 4,5 points
- Dame : 3,5 points
- Cavalier : 2,5 points
- Valet : 1,5 point
- Petite carte : 0,5 point

*(Astuce : Comptez les cartes 2 par 2 pour simplifier, par exemple 1 Roi + 1 petite carte = 5 points)*

**Calcul final du score :**
Score = (25 + Points de gain ou de perte) × Coefficient du contrat + Primes éventuelles

Ce score est payé par chaque défenseur au preneur s'il gagne, ou l'inverse s'il perd.
`,zn=`# Six qui prend

## 1. Matériel et Objectif

**Matériel :** 104 cartes numérotées de 1 à 104. Chaque carte porte un nombre de "têtes de bœuf" (pénalités) de 1 à 7.

**Objectif :** Avoir le moins de points (têtes de bœuf) possibles à la fin de la partie. Évitez de prendre des cartes avec beaucoup de têtes de bœuf !

## 2. Mise en Place

- Chaque joueur reçoit 10 cartes en main.
- 4 cartes sont placées face visible au centre de la table (début des 4 rangées).
- Les cartes restantes forment la pioche.

## 3. Déroulement d'un Tour

**Simultanément** (au même moment), chaque joueur choisit une carte de sa main et la place face cachée devant lui.

Une fois que tous les joueurs ont joué leur carte, celles-ci sont révélées **dans l'ordre croissant** et placées selon ces règles :

- La carte est placée à la fin d'une des 4 rangées, à côté de la dernière carte de cette rangée.
- Si la carte ne peut pas suivre aucune rangée (elle est plus petite que les 4 dernières cartes), le joueur doit prendre **toute une rangée** (celle qui se termine par la carte la plus proche).

## 4. Les Cartes "Tête de Bœuf"

Chaque carte possède un nombre de têtes de bœuf qui représente des points de pénalité :

- Cartes numérotées : 1 tête de bœuf (sauf exceptions spéciales)
- Cartes multiples de 5 : 2 têtes de bœuf
- Cartes multiples de 10 : 3 têtes de bœuf
- Cartes multiples de 55 : 7 têtes de bœuf (carte très pénalisante !)

## 5. Fin de la Partie

Après 10 tours (quand plus personne n'a de cartes), on compte les points de chaque joueur. Le joueur avec le moins de points gagne !

On peut faire plusieurs manches pour un tournoi complet.

## 6. Stratégie

- Essayez de jouer des cartes qui prolongent les rangées existantes.
- Anticipez les cartes des autres joueurs.
- Ne tombez pas dans le piège des cartes à fortes pénalités !
- Adapter votre stratégie selon les cartes que vous voyez sortir.
`,Sn=`# Skyjo

## 1. Matériel et Objectif

**Matériel :** 150 cartes avec des valeurs allant de -2 à 12 (plusieurs exemplaires de chaque).

**Objectif :** Avoir le score le plus bas possible à la fin de la partie. Retournez et remplacez vos cartes pour minimiser votre total !

## 2. Mise en Place

- Chaque joueur reçoit 12 cartes disposées face cachée en grille de 3x4.
- 2 cartes sont retournées face visible (au choix du joueur).
- Une carte est placée face visible comme début de la pile de défausse.
- Les cartes restantes forment la pioche.

## 3. Le Tour d'un Joueur

À votre tour, vous avez **2 options** :

### Option A : Piocher une carte de la pioche
1. Prenez la première carte de la pioche.
2. Vous pouvez soit :
   - La placer face visible devant vous et ajouter ses points à votre score final.
   - L'échanger avec une de vos cartes face cachée (la carte retirée va à la défausse).
3. Si vous ne voulez pas de cette carte, la défaussez (elle devient la nouvelle carte visible).

### Option B : Prendre la carte de défausse visible
1. Prenez la carte visible au sommet de la pile de défausse.
2. Vous devez l'échanger avec l'une de vos cartes et mettre votre ancienne carte face visible.

## 4. Les Cartes Skyjo

**Cartes spéciales :**
- **Skyjo (-2)** : Très utile ! Remplace les mauvaises cartes.
- **Cartes négatives (-1, -2)** : Diminuent votre score.
- **Cartes positives (0-12)** : Augmentent votre score.

## 5. Fin d'un Tour et Fin de Partie

Après 3 tours, les joueurs comparent leur score. Celui avec le score le plus bas gagne la manche.

**Fin du jeu :** Première personne à atteindre 100 points perd (ou meilleur score après X manches).

## 6. Stratégie

- Les cartes face cachée au début sont mystérieuses : essayez d'en retourner de bonnes !
- Bloquez les bons scores de vos adversaires en prenant les bonnes cartes de défausse.
- Prenez des risques calculés : parfois, il faut défausser juste pour voir une carte cachée.
- Gardez trace des cartes révélées pour anticiper les meilleures stratégies.
`,Rn=`# Oriflamme

## 1. But du Jeu et Mise en Place

**Objectif :** Accumuler le plus de points d'Influence après 6 tours de jeu.

**Matériel :** 50 cartes Influence (10 par couleur), des jetons Point d'Influence, une tuile Premier joueur et une tuile Sens de résolution.

**Mise en place :** Chaque joueur reçoit les 10 cartes de sa couleur, en écarte 3 au hasard (face cachée) et garde les 7 restantes en main. Tout le monde commence avec 1 point d'Influence.

## 2. Déroulement d'un Tour (2 Phases)

La partie se joue sur une ligne centrale appelée la File d'Influence.

### Phase 1 : Le Placement

- Chaque joueur pose une carte face cachée dans la File.
- On peut la placer uniquement à l'extrémité gauche ou droite de la ligne (jamais entre deux cartes).
- **Option Pile :** Il est possible de poser sa carte sur une de ses propres cartes déjà en jeu pour former une pile ; la carte du dessous devient alors inactive.

### Phase 2 : La Résolution

On parcourt la File dans le sens indiqué par la tuile. Pour chaque carte face cachée de sa couleur, le joueur choisit :

- **Laisser face cachée :** On place 1 point d'Influence de la réserve sur la carte.
- **Révéler la carte :** Le joueur récupère tous les points sur la carte et doit appliquer sa capacité.
- **Si la carte est déjà révélée :** On applique obligatoirement sa capacité à chaque tour.

## 3. Guide des Personnages et Capacités

### Personnages d'Attaque

- **Archer :** Élimine la première ou la dernière carte de la File (révélée ou non).
- **Soldat :** Élimine une carte adjacente (révélée ou non).
- **Assassinat :** Élimine une carte n'importe où dans la File, puis l'Assassinat est défaussé.
- **Note sur l'attaque :** Si vous n'avez pas d'autre choix, vous devez éliminer votre propre famille, mais vous gagnez tout de même le point d'élimination.

### Personnages de Gain d'Influence

- **Seigneur :** Gagne 1 point, plus 1 point supplémentaire par carte de votre famille adjacente (qu'elle soit cachée, révélée ou recouverte).
- **Héritier :** Gagne 2 points s'il n'y a pas d'autre Héritier révélé et non recouvert dans la File.
- **Complot :** Lors de sa révélation, gagne le double des points posés dessus, puis est défaussé.

### Personnages Tactiques et Pièges

- **Embuscade :**
  - Si éliminée par un adversaire : L'attaquant adverse est défaussé et vous gagnez 4 points.
  - Si révélée volontairement : Vous gagnez 1 point et elle est défaussée.
  - **Note :** Les points accumulés sur l'Embuscade sont toujours perdus lors de sa défausse.

- **Espion :** Vole 1 point à un joueur possédant une carte adjacente. Le point est pris dans la réserve du joueur.

- **Changeforme :** Copie la capacité d'une carte révélée et non recouverte adjacente. Il garde son nom de "Changeforme".

- **Décret Royal :** Déplace une carte où vous voulez dans la File, puis le Décret est défaussé.

## 4. Fin de la Partie

- **Score :** Après 6 tours, on calcule le total des points devant soi.
- **Attention :** Les points restés sur des cartes dans la File sont perdus.
- **Égalité :** Le joueur ayant le plus de cartes de sa famille encore dans la File l'emporte.
`,An=`# Loup Garou

## 1. Matériel et Objectif

**Matériel :** Cartes de rôles (Loup Garou, Villageois, Voyante, Chasseur, etc.). Un meneur de jeu.

**Objectif :** Les Loups Garou doivent éliminer tous les Villageois, ou les Villageois doivent identifier et éliminer tous les Loups Garou.

## 2. Mise en Place

- Un joueur est désigné **Meneur de Jeu** (neutre).
- Tous les autres reçoivent une carte rôle (secrètement).
- Les joueurs apprennent leur rôle mais le gardent secret.

## 3. Les Rôles

- **Villageois** : Rôle basique, pas de pouvoir spécial.
- **Loup Garou** : Élimine un Villageois chaque nuit.
- **Voyante** : Peut voir le rôle d'un joueur chaque nuit.
- **Chasseur** : Peut tirer sur quelqu'un avant de mourir.
- **Idiot du village** : Peut se protéger une fois.

## 4. Déroulement du Jeu

### Phase de Nuit

1. Le Meneur ferme les yeux.
2. Les **Loups Garou se réveillent** et choisissent une victime par consensus.
3. Les rôles spéciaux utilisent leurs pouvoirs (Voyante regarde, Chasseur se protège).

### Phase de Jour

1. Tous les yeux s'ouvrent.
2. Annoncez la victime de la nuit.
3. **Discussion et vote** pour éliminer un joueur suspect.
4. Le joueur avec le plus de votes est éliminé.

## 5. Fin du Jeu

- **Les Loups Garou gagnent** si tous les Villageois sont morts.
- **Les Villageois gagnent** si tous les Loups Garou sont morts.

## 6. Stratégie et Astuces

- **Bluffez** sur votre rôle pour semer le doute.
- **Les Loups doivent rester unis** mais pas trop évidents.
- **Écoutez les discours** pour détecter les mensonges.
- **Les rôles spéciaux doivent se cacher** ou utiliser leurs pouvoirs stratégiquement.

Le succès dépend de la psychologie et de la déduction !
`,Gn=`# Codenames

## 1. Matériel et Objectif

**Matériel :** 400 cartes mots (en deux langues), 25 cartes de grille spéciales, des jetons d'équipe rouge et bleu.

**Objectif :** Identifier tous les mots de votre couleur avant l'équipe adverse. Chaque équipe doit deviner ses 9 mots en se basant sur les indices d'un seul mot donné par le "Spymaster".

## 2. Mise en Place

- Divisez les joueurs en deux équipes : **Rouges** vs **Bleus**.
- Chaque équipe désigne un **Spymaster** (celui qui donne les indices).
- Placez 25 cartes mots face visible en grille 5×5.
- Une équipe commence (généralement les Rouges avec 9 mots, Bleus en ont 8).

## 3. Le Rôle du Spymaster

Le Spymaster **ne peut voir que la grille secrète** indiquant :
- Les 9 mots de sa couleur
- Les 8 mots de l'autre couleur
- 1 mot neutre (gris)
- 1 mot assassin (noir - perte automatique)

## 4. Déroulement du Jeu

À chaque tour :

1. **Le Spymaster donne UN indice** : Un mot unique (non visible sur la grille) et un nombre.
   - Exemple : "Paris **2**" = deux cartes concernées par ce mot.
   - L'indice doit être une **association logique** : similitude, rhyme, catégorie, etc.

2. **L'équipe discute et désigne les cartes** : Les coéquipiers pointent les cartes qu'ils croient correspondre.

3. **Révélation** : La carte est retournée.
   - ✅ Bonne couleur = Point pour l'équipe
   - ❌ Mauvaise couleur = Tour passe à l'autre équipe
   - ⚫ Assassin = Perte instantanée de la partie

## 5. Règles des Indices

- L'indice doit être **un seul mot** (en deux mots seulement si justifié).
- L'indice **ne doit contenir aucune lettre commune** avec les mots cibles.
- L'indice **ne doit pas être visible sur la grille**.
- Vous pouvez utiliser le **nombre "0"** pour indiquer "aucune carte".

## 6. Stratégie et Astuces

- **Créez des liens** : Les meilleurs indices connectent plusieurs mots.
- **Bluffez intelligemment** : Un indice peut désarçonner l'équipe adverse.
- **Attention à l'assassin** : Choisissez des indices clairs pour ne pas le déclencher.
- **Communication** : Écoutez vos coéquipiers et explorez les connexions ensemble.

**La victoire** : Première équipe à identifier tous ses mots remporte la partie !
`;var wn=Q('<meta name="description" content="Règles page"/>'),On=Q("<!> <!>",1);function Vn(s){let a=H(null),t=H(null);const l={tarot:{name:"Tarot",rules:Pn},sixqp:{name:"Six qui prend",rules:zn},skyjo:{name:"Skyjo",rules:Sn},oriLg:{name:"Origine Large",subgames:{oriFlame:{name:"Oriflamme",rules:Rn},loupGarou:{name:"Loup Garou",rules:An}}},codeNames:{name:"Codenames",rules:Gn}};function d(f){P(t,f)}function r(){P(t,null)}function e(f){P(a,f)}function n(){P(a,null)}var p=On();un("d1ev8x",f=>{var b=wn();on(()=>{ln.title="Règles"}),V(f,b)});var c=be(p);Ln(c,{get hoveredGame(){return h(t)},onGameHover:d,onGameLeave:r,onShowRules:e});var i=G(c,2);xn(i,{get selectedGame(){return h(a)},get popupRules(){return l},onClose:n}),V(s,p)}export{Vn as component};
