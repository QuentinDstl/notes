import{b as ve,d as Re,f as Q,a as J,c as Se}from"../chunks/D63pR7oK.js";import"../chunks/Dt_Szh9E.js";import{w as te,o as T,p as se,j as le,R as oe,k as Ae,g as h,a0 as Ge,T as we,U as Oe,V as fe,v as re,x as K,C as _e,aE as Ee,ap as Te,K as Ne,O as ce,Q as Me,aC as Le,aO as De,m as F,af as me,aP as Ie,aQ as Be,aR as Fe,L as je,N as Ve,aS as ie,q as qe,aT as He,aU as Je,aB as Ue,M as $e,D as ae,Z as Ye,aV as Xe,aF as Ke,az as Qe,A as ye,E as Ce,F as N,I as G,G as w,s as P,aW as X,aX as We,B as xe,h as z,b as ne,aJ as Ze,aY as en,J as nn,$ as sn}from"../chunks/DTMw8plr.js";import{h as tn}from"../chunks/C7Evfw2f.js";import{e as o,s as ge}from"../chunks/BfkiYj5o.js";import{i as ze}from"../chunks/CcScNmhj.js";import{p as U,i as he}from"../chunks/DY3k0Nkv.js";function an(s,a){return a}function rn(s,a,t){for(var u=[],d=a.length,r=0;r<d;r++)He(a[r].e,u,!0);Je(u,()=>{var e=u.length===0&&t!==null;if(e){var n=t,p=n.parentNode;Ue(p),p.append(n),s.items.clear(),I(s,a[0].prev,a[d-1].next)}for(var c=0;c<d;c++){var i=a[c];e||(s.items.delete(i.k),I(s,i.prev,i.next)),$e(i.e,!e)}s.first===a[0]&&(s.first=a[0].prev)})}function un(s,a,t,u,d,r=null){var e=s,n=new Map,p=null;{var c=s;e=T?te(se(c)):c.appendChild(le())}T&&oe();var i=null,f=Ge(()=>{var v=t();return De(v)?v:v==null?[]:Le(v)}),b,L=!0;function m(){ln(k,b,e,a,u),i!==null&&(b.length===0?(i.fragment?(e.before(i.fragment),i.fragment=null):je(i.effect),x.first=i.effect):Ve(i.effect,()=>{i=null}))}var x=Ae(()=>{b=h(f);var v=b.length;let g=!1;if(T){var O=we(e)===Oe;O!==(v===0)&&(e=fe(),te(e),re(!1),g=!0)}for(var R=new Set,q=Ne,y=null,S=Me(),j=0;j<v;j+=1){T&&K.nodeType===_e&&K.data===Ee&&(e=K,g=!0,re(!1));var E=b[j],A=u(E,j),C=L?null:n.get(A);C?(Te(C.v,E),C.i=j,S&&q.skipped_effects.delete(C.e)):(C=on(L?e:null,y,E,A,j,d,a,t),L&&(C.o=!0,y===null?p=C:y.next=C,y=C),n.set(A,C)),R.add(A)}if(v===0&&r&&!i)if(L)i={fragment:null,effect:ce(()=>r(e))};else{var _=document.createDocumentFragment(),V=le();_.append(V),i={fragment:_,effect:ce(()=>r(V))}}if(T&&v>0&&te(fe()),!L)if(S){for(const[$,B]of n)R.has($)||q.skipped_effects.add(B.e);q.oncommit(m),q.ondiscard(()=>{})}else m();g&&re(!0),h(f)}),k={effect:x,items:n,first:p};L=!1,T&&(e=K)}function ln(s,a,t,u,d){var r=a.length,e=s.items,n=s.first,p,c=null,i=[],f=[],b,L,m,x;for(x=0;x<r;x+=1){if(b=a[x],L=d(b,x),m=e.get(L),s.first??=m,!m.o){m.o=!0;var k=c?c.next:n;I(s,c,m),I(s,m,k),ue(m,k,t),c=m,i=[],f=[],n=c.next;continue}if((m.e.f&ie)!==0&&je(m.e),m!==n){if(p!==void 0&&p.has(m)){if(i.length<f.length){var v=f[0],g;c=v.prev;var O=i[0],R=i[i.length-1];for(g=0;g<i.length;g+=1)ue(i[g],v,t);for(g=0;g<f.length;g+=1)p.delete(f[g]);I(s,O.prev,R.next),I(s,c,O),I(s,R,v),n=v,c=R,x-=1,i=[],f=[]}else p.delete(m),ue(m,n,t),I(s,m.prev,m.next),I(s,m,c===null?s.first:c.next),I(s,c,m),c=m;continue}for(i=[],f=[];n!==null&&n.k!==L;)(n.e.f&ie)===0&&(p??=new Set).add(n),f.push(n),n=n.next;if(n===null)continue;m=n}i.push(m),c=m,n=m.next}let q=e.size>r;if(n!==null||p!==void 0){for(var y=p===void 0?[]:Le(p);n!==null;)(n.e.f&ie)===0&&y.push(n),n=n.next;var S=y.length;if(q=e.size-S>r,S>0){var j=r===0?t:null;rn(s,y,j)}}if(q)for(const E of e.values())E.o||(I(s,c,E),c=E);s.effect.last=c&&c.e}function on(s,a,t,u,d,r,e,n){var p=(e&Be)!==0,c=(e&Fe)===0,i=p?c?F(t,!1,!1):me(t):t,f=(e&Ie)===0?d:me(d),b={i:f,v:i,k:u,a:null,e:null,o:!1,prev:a,next:null};try{if(s===null){var L=document.createDocumentFragment();L.append(s=le())}return b.e=ce(()=>r(s,i,f,n)),a!==null&&(a.next=b),b}finally{}}function ue(s,a,t){for(var u=s.next?s.next.e.nodes_start:t,d=a?a.e.nodes_start:t,r=s.e.nodes_start;r!==null&&r!==u;){var e=qe(r);d.before(r),r=e}}function I(s,a,t){a===null?(s.first=t,s.effect.first=t&&t.e):(a.e.next&&(a.e.next.prev=null),a.next=t,a.e.next=t&&t.e),t!==null&&(t.e.prev&&(t.e.prev.next=null),t.prev=a,t.e.prev=a&&a.e)}function cn(s,a,t=!1,u=!1,d=!1){var r=s,e="";ae(()=>{var n=Ye;if(e===(e=a()??"")){T&&oe();return}if(n.nodes_start!==null&&(Xe(n.nodes_start,n.nodes_end),n.nodes_start=n.nodes_end=null),e!==""){if(T){K.data;for(var p=oe(),c=p;p!==null&&(p.nodeType!==_e||p.data!=="");)c=p,p=qe(p);if(p===null)throw Ke(),Qe;ve(K,c),r=te(p);return}var i=e+"";t?i=`<svg>${i}</svg>`:u&&(i=`<math>${i}</math>`);var f=Re(i);if((t||u)&&(f=se(f)),ve(se(f),f.lastChild),t||u)for(;se(f);)r.before(se(f));else r.before(f)}})}const be=[...` 	
\r\f \v\uFEFF`];function dn(s,a,t){var u=s==null?"":""+s;if(t){for(var d in t)if(t[d])u=u?u+" "+d:d;else if(u.length)for(var r=d.length,e=0;(e=u.indexOf(d,e))>=0;){var n=e+r;(e===0||be.includes(u[e-1]))&&(n===u.length||be.includes(u[n]))?u=(e===0?"":u.substring(0,e))+u.substring(n+1):e=n}}return u===""?null:u}function pn(s,a){return s==null?null:String(s)}function D(s,a,t,u,d,r){var e=s.__className;if(T||e!==t||e===void 0){var n=dn(t,u,r);(!T||n!==s.getAttribute("class"))&&(n==null?s.removeAttribute("class"):s.className=n),s.__className=t}else if(r&&d!==r)for(var p in r){var c=!!r[p];(d==null||c!==!!d[p])&&s.classList.toggle(p,c)}return r}function vn(s,a,t,u){var d=s.__style;if(T||d!==a){var r=pn(a);(!T||r!==s.getAttribute("style"))&&(r==null?s.removeAttribute("style"):s.style.cssText=r),s.__style=a}return u}var fn=Q('<div class="wrapper svelte-12fzu5d" role="application"><div class="card svelte-12fzu5d"><div class="card-top svelte-12fzu5d"><div role="button" tabindex="0"></div> <div role="button" tabindex="0"></div> <div role="button" tabindex="0"></div></div> <div class="card-mid svelte-12fzu5d"><div role="button" tabindex="0"></div> <div class="middle-space svelte-12fzu5d"><div role="button" tabindex="0"></div> <div role="button" tabindex="0"></div></div> <div role="button" tabindex="0"></div></div> <div class="card-top inverted svelte-12fzu5d"><div role="button" tabindex="0"></div> <div role="button" tabindex="0"></div> <div role="button" tabindex="0"></div></div></div></div>');function mn(s,a){ye(a,!1);let t=U(a,"hoveredGame",8),u=U(a,"onGameHover",8),d=U(a,"onGameLeave",8),r=U(a,"onShowRules",8),e=F(0),n=F(0);function p(l){const Y=l.currentTarget.getBoundingClientRect(),Pe=l.clientX-Y.left,ke=l.clientY-Y.top,de=Y.width/2,pe=Y.height/2;P(n,(Pe-de)/de*15),P(e,(pe-ke)/pe*15)}function c(){P(e,0),P(n,0)}function i(l,Y){(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),r()(Y))}ze();var f=fn(),b=N(f),L=N(b),m=N(L);let x;var k=G(m,2);let v;var g=G(k,2);let O;w(L);var R=G(L,2),q=N(R);let y;var S=G(q,2),j=N(S);let E;var A=G(j,2);let C;w(S);var _=G(S,2);let V;w(R);var $=G(R,2),B=N($);let W;var H=G(B,2);let Z;var M=G(H,2);let ee;w($),w(b),w(f),ae(()=>{vn(b,`transform: perspective(800px) rotateX(${h(e)??""}deg) rotateY(${h(n)??""}deg)`),x=D(m,1,"tarot svelte-12fzu5d",null,x,{hovered:t()==="tarot"}),v=D(k,1,"sixqp svelte-12fzu5d",null,v,{hovered:t()==="sixqp"}),O=D(g,1,"skyjo svelte-12fzu5d",null,O,{hovered:t()==="skyjo"}),y=D(q,1,"codenames-words svelte-12fzu5d",null,y,{hovered:t()==="codeNames"}),E=D(j,1,"ori-lg svelte-12fzu5d",null,E,{hovered:t()==="oriLg"}),C=D(A,1,"codenames-map svelte-12fzu5d",null,C,{hovered:t()==="codeNames"}),V=D(_,1,"codenames-words svelte-12fzu5d",null,V,{hovered:t()==="codeNames"}),W=D(B,1,"tarot svelte-12fzu5d",null,W,{hovered:t()==="tarot"}),Z=D(H,1,"sixqp svelte-12fzu5d",null,Z,{hovered:t()==="sixqp"}),ee=D(M,1,"skyjo svelte-12fzu5d",null,ee,{hovered:t()==="skyjo"})}),o("click",m,()=>r()("tarot")),o("keydown",m,l=>i(l,"tarot")),o("mouseenter",m,()=>u()("tarot")),o("mouseleave",m,function(...l){d()?.apply(this,l)}),o("click",k,()=>r()("sixqp")),o("keydown",k,l=>i(l,"sixqp")),o("mouseenter",k,()=>u()("sixqp")),o("mouseleave",k,function(...l){d()?.apply(this,l)}),o("click",g,()=>r()("skyjo")),o("keydown",g,l=>i(l,"skyjo")),o("mouseenter",g,()=>u()("skyjo")),o("mouseleave",g,function(...l){d()?.apply(this,l)}),o("click",q,()=>r()("codeNames")),o("keydown",q,l=>i(l,"codeNames")),o("mouseenter",q,()=>u()("codeNames")),o("mouseleave",q,function(...l){d()?.apply(this,l)}),o("click",j,()=>r()("oriLg")),o("keydown",j,l=>i(l,"oriLg")),o("mouseenter",j,()=>u()("oriLg")),o("mouseleave",j,function(...l){d()?.apply(this,l)}),o("click",A,()=>r()("codeNames")),o("keydown",A,l=>i(l,"codeNames")),o("mouseenter",A,()=>u()("codeNames")),o("mouseleave",A,function(...l){d()?.apply(this,l)}),o("click",_,()=>r()("codeNames")),o("keydown",_,l=>i(l,"codeNames")),o("mouseenter",_,()=>u()("codeNames")),o("mouseleave",_,function(...l){d()?.apply(this,l)}),o("click",B,()=>r()("tarot")),o("keydown",B,l=>i(l,"tarot")),o("mouseenter",B,()=>u()("tarot")),o("mouseleave",B,function(...l){d()?.apply(this,l)}),o("click",H,()=>r()("sixqp")),o("keydown",H,l=>i(l,"sixqp")),o("mouseenter",H,()=>u()("sixqp")),o("mouseleave",H,function(...l){d()?.apply(this,l)}),o("click",M,()=>r()("skyjo")),o("keydown",M,l=>i(l,"skyjo")),o("mouseenter",M,()=>u()("skyjo")),o("mouseleave",M,function(...l){d()?.apply(this,l)}),o("mousemove",f,p),o("mouseleave",f,c),J(s,f),Ce()}var gn=Q("<button> </button>"),hn=Q('<div class="subgame-menu svelte-afcg7t"></div>'),bn=Q('<div class="popup-overlay svelte-afcg7t" role="button" tabindex="0"><div class="popup-rules svelte-afcg7t" role="dialog" tabindex="-1"><!> <div class="popup-header svelte-afcg7t"><h2 class="svelte-afcg7t"> </h2> <button class="close-btn svelte-afcg7t">×</button></div> <div class="popup-content svelte-afcg7t"><!></div></div></div>');function _n(s,a){ye(a,!1);const t=F(),u=F(),d=F(),r=F();let e=U(a,"selectedGame",8),n=U(a,"popupRules",8),p=U(a,"onClose",8),c=F(null);function i(v){v.key==="Escape"&&(v.preventDefault(),p()())}function f(v){const g=v.match(/^#\s+(.+?)$/m);return g?g[1]:""}function b(v){return v.replace(/^#\s+.+?\n\n/m,"")}function L(v){return v.replace(/^## (.*?)$/gm,"<h2>$1</h2>").replace(/^### (.*?)$/gm,"<h3>$1</h3>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>").replace(/`(.*?)`/g,"<code>$1</code>").replace(/^\- (.*?)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>)/s,"<ul>$1</ul>").replace(/\n\n/g,"</p><p>").replace(/^(?!<[hu]|<[ul]|<p)(.+)$/gm,"<p>$1</p>")}X(()=>(z(e()),z(n())),()=>{if(e()&&n()[e()]?.subgames){const v=Object.keys(n()[e()].subgames);P(c,v[0]||null)}}),X(()=>(z(e()),z(n()),h(c)),()=>{e()&&n()[e()]&&n()[e()].subgames&&h(c)}),X(()=>(z(e()),z(n()),h(c)),()=>{P(t,(()=>{if(!e()||!n()[e()])return"";const v=n()[e()];return v.subgames&&h(c)&&v.subgames[h(c)]?v.subgames[h(c)].rules:v.rules||""})())}),X(()=>h(t),()=>{P(u,f(h(t)))}),X(()=>h(t),()=>{P(d,b(h(t)))}),X(()=>(z(e()),z(n())),()=>{P(r,e()&&n()[e()]?.subgames!==void 0)}),We(),ze();var m=Se(),x=xe(m);{var k=v=>{var g=bn(),O=N(g),R=N(O);{var q=_=>{var V=hn();un(V,5,()=>(z(n()),z(e()),ne(()=>Object.entries(n()[e()].subgames))),an,($,B)=>{var W=Ze(()=>en(h(B),2));let H=()=>h(W)[0],Z=()=>h(W)[1];var M=gn();let ee;var l=N(M,!0);w(M),ae(()=>{ee=D(M,1,"subgame-btn svelte-afcg7t",null,ee,{active:h(c)===H()}),ge(l,(Z(),ne(()=>Z().name)))}),o("click",M,()=>P(c,H())),J($,M)}),w(V),J(_,V)};he(R,_=>{h(r),z(n()),z(e()),ne(()=>h(r)&&n()[e()]?.subgames)&&_(q)})}var y=G(R,2),S=N(y),j=N(S,!0);w(S);var E=G(S,2);w(y);var A=G(y,2),C=N(A);cn(C,()=>(h(d),ne(()=>L(h(d))))),w(A),w(O),w(g),ae(()=>ge(j,h(u))),o("click",E,function(..._){p()?.apply(this,_)}),o("click",O,_=>_.stopPropagation()),o("keydown",O,_=>_.stopPropagation()),o("click",g,function(..._){p()?.apply(this,_)}),o("keydown",g,i),J(v,g)};he(x,v=>{z(e()),z(n()),ne(()=>e()&&n()[e()])&&v(k)})}J(s,m),Ce()}const Ln=`# Tarot

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
`,jn=`# Six qui prend

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
`,qn=`# Skyjo

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
`,yn=`# Oriflamme

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
`,Cn=`# Loup Garou

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
`,xn=`# Codenames

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
`;var zn=Q('<meta name="description" content="Règles page"/>'),Pn=Q("<!> <!>",1);function En(s){let a=F(null),t=F(null);const u={tarot:{name:"Tarot",rules:Ln},sixqp:{name:"Six qui prend",rules:jn},skyjo:{name:"Skyjo",rules:qn},oriLg:{name:"Origine Large",subgames:{oriFlame:{name:"Oriflamme",rules:yn},loupGarou:{name:"Loup Garou",rules:Cn}}},codeNames:{name:"Codenames",rules:xn}};function d(f){P(t,f)}function r(){P(t,null)}function e(f){P(a,f)}function n(){P(a,null)}var p=Pn();tn("d1ev8x",f=>{var b=zn();nn(()=>{sn.title="Règles"}),J(f,b)});var c=xe(p);mn(c,{get hoveredGame(){return h(t)},onGameHover:d,onGameLeave:r,onShowRules:e});var i=G(c,2);_n(i,{get selectedGame(){return h(a)},get popupRules(){return u},onClose:n}),J(s,p)}export{En as component};
