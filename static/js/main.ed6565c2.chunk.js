(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},80:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),s=c(20),a=c.n(s),l=(c(64),c(65),c(66),c(67),c(68),c(69),c(56)),r=c(45),o=c(46),d=c(25),b=c(57),j=c(55),h=c(33),u=c.n(h),x=c(0),m=function(e){Object(b.a)(c,e);var t=Object(j.a)(c);function c(){var e;return Object(r.a)(this,c),(e=t.call(this)).select=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e=e.trim(),t?Object(l.a)(document.querySelectorAll(e)):document.querySelector(e)},e.on=function(t,c,i){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=e.select(c,n);s&&(n?s.forEach((function(e){return e.addEventListener(t,i)})):s.addEventListener(t,i))},e.onscroll=function(e,t){e.addEventListener("scroll",t)},e.navbarlinksActive=function(){var e=document.querySelectorAll("#navbar .scrollto"),t=window.scrollY+200;e.forEach((function(e){if(e.hash){var c=document.querySelector(e.hash);c&&(t>=c.offsetTop&&t<=c.offsetTop+c.offsetHeight?e.classList.add("active"):e.classList.remove("active"))}}))},e.scrollto.bind(Object(d.a)(e)),e.select.bind(Object(d.a)(e)),e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){window.addEventListener("load",this.navbarlinksActive),this.onscroll(document,this.navbarlinksActive),this.on("click",".mobile-nav-toggle",(function(e){document.querySelector("body").classList.toggle("mobile-nav-active"),this.classList.toggle("bi-list"),this.classList.toggle("bi-x")})),this.on("click",".scrollto",(function(e){if(document.querySelector(this.hash)){e.preventDefault();var t=document.querySelector("body");if(t.classList.contains("mobile-nav-active")){t.classList.remove("mobile-nav-active");var c=document.querySelector(".mobile-nav-toggle");c.classList.toggle("bi-list"),c.classList.toggle("bi-x")}var i=document.querySelector(this.hash).offsetTop;window.scrollTo({top:i,behavior:"smooth"})}}),!0)}},{key:"scrollto",value:function(e){var t=document.querySelector(e).offsetTop;window.scrollTo({top:t,behavior:"smooth"})}},{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("i",{class:"bi bi-list mobile-nav-toggle d-xl-none",style:{color:"rgb(114, 131, 148)"}}),Object(x.jsx)("header",{id:"header",className:"header d-flex flex-column justify-content-center",children:Object(x.jsx)("nav",{id:"navbar",className:"navbar nav-menu navbar-expand-sm",children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsxs)("a",{href:"#hero",className:"nav-link scrollto active d-flex justify-content-center",children:[Object(x.jsx)("i",{class:"bx bx-home"}),Object(x.jsx)("span",{children:"Home"})]})}),Object(x.jsx)("li",{children:Object(x.jsxs)("a",{href:"#about",className:"nav-link scrollto d-flex justify-content-center",children:[Object(x.jsx)("i",{class:"bx bx-user"}),Object(x.jsx)("span",{children:"About"})]})}),Object(x.jsx)("li",{children:Object(x.jsxs)("a",{href:"#experience",class:"nav-link scrollto d-flex justify-content-center",children:[Object(x.jsx)("i",{class:"bx bx-briefcase"}),Object(x.jsx)("span",{children:"Experience"})]})}),Object(x.jsx)("li",{children:Object(x.jsxs)("a",{href:"#projects",class:"nav-link scrollto d-flex justify-content-center",children:[Object(x.jsx)("i",{className:"bx bx-code"}),Object(x.jsx)("span",{children:"Projects"})]})}),Object(x.jsx)("li",{children:Object(x.jsxs)("a",{href:"#achievements",class:"nav-link scrollto d-flex justify-content-center",children:[Object(x.jsx)("i",{class:"bx bx-award"}),Object(x.jsx)("span",{children:"Achievements"})]})}),Object(x.jsx)("li",{children:Object(x.jsxs)("a",{href:"#education",class:"nav-link scrollto d-flex justify-content-center",children:[Object(x.jsx)(u.a,{}),Object(x.jsx)("span",{children:"Education"})]})})]})})})]})}}]),c}(n.a.Component),g=c.p+"static/media/bhushan6.02b8b269.jpeg",O=c(48),f=c.n(O),p=c(35),v=c(28),y=c(16),S=c(97),T=c(49),k=c.n(T);function w(){return Object(x.jsx)("section",{id:"hero",class:"d-flex flex-column justify-content-center",children:Object(x.jsx)(p.a,{"data-aos":"zoom-in","data-aos-delay":"500",children:Object(x.jsxs)(v.a,{children:[Object(x.jsxs)(y.a,{lg:6,className:"item-center",children:[Object(x.jsx)("h1",{children:"Bhushan Borole"}),Object(x.jsx)("br",{}),Object(x.jsxs)("p",{children:["I'm a\xa0",Object(x.jsx)("span",{class:"typed","data-typed-items":"Developer, Tabla Player, Gamer",children:Object(x.jsx)(f.a,{strings:["Developer","Tabla Player","Gamer"],loop:!0,typeSpeed:90,backSpeed:60,smartBackspace:!0,shuffle:!1,backDelay:500,fadeOut:!0,fadeOutDelay:200,loopCount:0,showCursor:!0,cursorChar:"|"})})]}),Object(x.jsxs)("div",{class:"social-links",children:[Object(x.jsx)("a",{href:"https://www.youtube.com/channel/UC8TXgNmZW2hMis074yGOTUQ",children:Object(x.jsx)("i",{class:"bx bxl-youtube"})}),Object(x.jsx)("a",{href:"https://www.instagram.com/bhushan_2698/",children:Object(x.jsx)("i",{class:"bx bxl-instagram"})}),Object(x.jsx)("a",{href:"https://github.com/bhushan-borole",children:Object(x.jsx)("i",{class:"bx bxl-github"})}),Object(x.jsx)("a",{href:"https://www.linkedin.com/in/bhushan-borole/",children:Object(x.jsx)("i",{class:"bx bxl-linkedin"})}),Object(x.jsx)("a",{href:"mailto:borolebhushan8@gmail.com",children:Object(x.jsx)("i",{class:"bx bx-envelope"})})]}),Object(x.jsx)("br",{}),Object(x.jsx)(S.a,{variant:"outlined",target:"_blank",href:"https://drive.google.com/file/d/1XVfSZNcC6P9QlmEgA3s1Ebi23kydQGYj/view?usp=sharing",startIcon:Object(x.jsx)(k.a,{}),style:{color:"rgb(116, 128, 138)",borderColor:"rgb(116, 128, 138)"},children:"Download Resume"})]}),Object(x.jsx)(y.a,{lg:6,style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"15px"},children:Object(x.jsx)("img",{src:g,height:"100%",width:"65%",style:{borderRadius:"30px"}})})]})})})}var D=c.p+"static/media/bhushan_2.72ec3b24.jpeg";function A(){return Object(x.jsx)("section",{id:"about",class:"about background-alt",children:Object(x.jsxs)(p.a,{"data-aos":"fade-up",children:[Object(x.jsx)("div",{class:"section-title",children:Object(x.jsx)("h2",{children:"About"})}),Object(x.jsxs)(v.a,{children:[Object(x.jsx)(y.a,{lg:4,className:"d-flex justify-content-center",children:Object(x.jsx)("img",{src:D,height:"100%",width:"50%",style:{borderRadius:"50%"}})}),Object(x.jsxs)(y.a,{lg:8,pt:4,className:"content",children:[Object(x.jsx)("br",{}),Object(x.jsx)("h3",{children:"Software Developer."}),Object(x.jsx)("br",{}),Object(x.jsx)("p",{style:{color:"#728394"},children:"A passionate Full Stack Developer, Competitive Programmer, ML enthusiast and Tabla player."}),Object(x.jsx)("br",{}),Object(x.jsx)("p",{style:{color:"#728394"},children:"Always seeking challenging position in and Organization where my skills find ample of oppurtunities for upgradation and growth of the company."}),Object(x.jsx)("br",{}),Object(x.jsxs)(v.a,{children:[Object(x.jsx)(y.a,{lg:4,children:Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:[Object(x.jsx)("i",{class:"bi bi-chevron-right"})," ",Object(x.jsx)("strong",{children:"Phone:"})," ",Object(x.jsx)("span",{children:"+353 0894010329"})]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("i",{class:"bi bi-chevron-right"})," ",Object(x.jsx)("strong",{children:"City:"})," ",Object(x.jsx)("span",{children:"Dublin, Ireland"})]})]})}),Object(x.jsx)(y.a,{lg:7,children:Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:[Object(x.jsx)("i",{class:"bi bi-chevron-right"})," ",Object(x.jsx)("strong",{children:"Degree:"})," ",Object(x.jsx)("span",{children:"MSc - Intelligent Systems @ TCD (2021-2022)"})]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("i",{class:"bi bi-chevron-right"})," ",Object(x.jsx)("strong",{children:"Email:"})," ",Object(x.jsx)("span",{children:Object(x.jsx)("a",{href:"mailto:boroleb@tcd.ie",children:"boroleb@tcd.ie"})})]})]})})]})]})]})]})})}var C=function(){return Object(x.jsx)("section",{id:"skills",class:"skills section-bg",children:Object(x.jsxs)("div",{class:"container","data-aos":"fade-up",children:[Object(x.jsx)("div",{class:"section-title",children:Object(x.jsx)("h2",{children:"Skills"})}),Object(x.jsx)("div",{children:Object(x.jsx)("ul",{children:["JavaScript","Python","Flask","React","Java","SpringBoot","JPA","Hibernate","Machine Learning","MySQL","Oracle DB"].map((function(e,t){return Object(x.jsx)("li",{children:e},t)}))})})]})})},N=c(13),P=(c(41),c(50)),I=c.n(P);function E(){var e=[{date:"November 2020 \u2013 February 2021",cardTitle:"Mobisy Technologies",cardSubtitle:"Research & Development Intern",cardDetailedText:["Collected JSON data by web-scraping, using open API end points and storing it in a RDBMS.","Responsible for building SKU Classification system using the collected data."].map((function(e){return Object(x.jsx)("li",{children:e})}))},{date:"September 2019 \u2013 October 2019",cardTitle:"Techskills IT Consultants",cardSubtitle:"Backend Developer",cardDetailedText:["Developed applications using Spring Framework for Backend Restful API\u2019s.","Wrote SQL/JPQL queries for Data persistence using Spring Data JPA."].map((function(e){return Object(x.jsx)("li",{children:e})}))},{date:"June 2019 \u2013 July 2019",cardTitle:"Fox Domotics Private Limited",cardSubtitle:"Machine Learning Intern",cardDetailedText:"Worked on Google play apps analytics. Applied Knowledge Data Discovery on the dataset and provided the company with various insights."},{date:"August 2018 \u2013 January 2019",cardTitle:"TechSkills IT Consultants",cardSubtitle:"Fullstack Developer Intern",cardDetailedText:"Developed a Meeting App website which handles all the data that happens in a meeting. In this project I developed several REST API's using Spring Boot and used the MVC architecture. These API's are being consumed in the frontend."}];return Object(x.jsx)("section",{id:"experience",class:"about background-alt",children:Object(x.jsxs)("div",{class:"container","data-aos":"fade-up",children:[Object(x.jsx)("div",{class:"section-title",children:Object(x.jsx)("h2",{children:"Experience"})}),Object(x.jsx)("div",{class:"row",children:Object(x.jsx)("div",{class:"col-lg-12 d-flex justify-content-center",children:Object(x.jsx)(N.VerticalTimeline,{className:"custom-line",children:e.map((function(e,t){return Object(x.jsxs)(N.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"#343a40"},date:e.date,dateClassName:"timeline-date",contentArrowStyle:{borderRight:"7px solid  rgb(33, 150, 243)"},iconStyle:{background:"#0563bb",color:"#fff"},icon:Object(x.jsx)(I.a,{}),children:[Object(x.jsx)("h3",{className:"vertical-timeline-element-title",style:{fontSize:"14",color:"rgba(255, 255, 255, 0.8)"},children:e.cardTitle}),Object(x.jsx)("h4",{className:"vertical-timeline-element-subtitle",style:{fontSize:"1.2em",fontWeight:"350",color:"#7e8890"},children:e.cardSubtitle}),Object(x.jsx)("p",{style:{fontSize:"1em",fontWeight:"350",color:"#74808a"},children:e.cardDetailedText})]},t)}))})})})]})})}c(36);var L=c(37),R=c(100),M=(c(98),c(42)),F=c.n(M),V=c(51),B=c.n(V),J=c(99),z=c(52),_=c.n(z),W=function(){var e=[{cardTitle:"Nuharc - Smart City Disaster Report App",cardDetailedText:["App to simulate disasters in Dublin.","Realtime traffic reporting upto 300ms latency.","Combines different velocity data streams to give a 99.9% accurate data.","Real time changes of disasters and re-routing of current users using sockets implementation.","All Emergency services directed towards the disaster as soon as someone reports.","Entire application is running in a dockerized container and hosted in Azure VM.","From scratch implementation of Load Balancing Algorithm (Weighted Round Robin) with Healthchecks.","All data is stored in NoSQL MongoDB."].map((function(e){return Object(x.jsx)("li",{children:e})})),technologies:["MongoDB","Express JS","React JS","Node JS"],links:[{url:"https://github.com/TCD-ASE-6/Nuharc",text:"View Source Code"}]},{cardTitle:"Woyse - A Multilingual Entity Recognition System",cardDetailedText:["Build an end-to-end intent and entity recognition microservice in Django.","Built using Python as a main stack, and used Tornado for socket connection."].map((function(e){return Object(x.jsx)("li",{children:e})})),technologies:["Python","Django","Rasa"],links:[]},{cardTitle:"Limitless File Sharing App",cardDetailedText:["App that allows you to share ANY amount of data from one system to another.","The file is encoded using base64, then it is split into chunks and uploaded to Google Sheets. While downloading the serial order is maintained and it is decoded at client\u2019s end."].map((function(e){return Object(x.jsx)("li",{children:e})})),technologies:["Python","Flask","API"],links:[{url:"https://github.com/vinay-deshmukh/Limitless-Client",text:"View Source Code"}]},{cardTitle:"Finance Assistant Chatbot",cardDetailedText:["Created a chatbot for Fin-tech companies for helping students regarding finances.","Tech stack comprises of Django, Rasa NLU and Postgresql."].map((function(e){return Object(x.jsx)("li",{children:e})})),technologies:["Python","Django","Rasa"],links:[{url:"https://github.com/Sitanshuk/HackPython",text:"View Source Code"}]},{cardTitle:"Text Summarization",cardDetailedText:["It summarizes the given text into number of sentences or words in English and Punjabi.","Created in Flask and deployed on Google App Engine."].map((function(e){return Object(x.jsx)("li",{children:e})})),technologies:["Python","GCP"],links:[{url:"https://github.com/bhushan-borole/text-summarization",text:"View Source Code"}]},{cardTitle:"Meeting App",cardDetailedText:"This project was created while I was working as a Full Stack Developer Intern. Created API's using Spring Boot and used the MVC architecture, and consumed these API's in the frontend.",technologies:["HTML","CSS","JS","PHP"],links:[{url:"https://github.com/bhushan-borole/meeting-app",text:"View Source Code"}]},{cardTitle:"Justalk",cardDetailedText:"A chat application made using React and Firebase Auth",technologies:["React JS","Firebase"],links:[{url:"https://github.com/bhushan-borole/justalk",text:"View Source Code"},{url:"https://bhushan-borole.github.io/justalk/",text:"View Demo"}]}],t=Object(i.useState)(3),c=Object(L.a)(t,2),n=c[0],s=c[1],a=Object(i.useState)(!0),l=Object(L.a)(a,2),r=l[0],o=l[1],d=Object(i.useState)(!1),b=Object(L.a)(d,2),j=b[0],h=b[1];return Object(x.jsx)("section",{id:"projects",class:"about background-alt",children:Object(x.jsxs)("div",{class:"container","data-aos":"fade-up",children:[Object(x.jsx)("div",{class:"section-title",children:Object(x.jsx)("h2",{children:"Projects"})}),Object(x.jsx)("div",{class:"row",children:Object(x.jsx)("div",{class:"col-lg-12 d-flex justify-content-center",children:Object(x.jsxs)(N.VerticalTimeline,{className:"custom-line",children:[e.slice(0,n).map((function(e,t){return Object(x.jsxs)(N.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"#343a40"},dateClassName:"timeline-date",contentArrowStyle:{borderRight:"7px solid  rgb(33, 150, 243)"},icon:Object(x.jsx)(B.a,{}),iconStyle:{background:"#0563bb",color:"#fff"},children:[Object(x.jsx)("div",{className:"projects-technologies",children:e.technologies.map((function(e,t){return Object(x.jsx)(R.a,{label:e},t)}))}),Object(x.jsx)("h3",{className:"vertical-timeline-element-title",style:{fontSize:"12",color:"rgba(255, 255, 255, 0.8)"},children:e.cardTitle}),Object(x.jsx)("p",{style:{fontSize:"1em",fontWeight:"350",color:"#74808a"},children:e.cardDetailedText}),Object(x.jsx)("div",{className:"project-links",children:e.links.map((function(e,t){return Object(x.jsxs)("div",{children:[Object(x.jsx)("br",{}),Object(x.jsx)(S.a,{variant:"contained",color:"default",target:"_blank",href:e.url,children:e.text},t)]})}))})]},t)})),r&&Object(x.jsx)(N.VerticalTimelineElement,{iconOnClick:function(){s(6),o(!1),h(!0)},iconClassName:"d-flex justify-content-center",icon:Object(x.jsx)(J.a,{"aria-label":"add",children:Object(x.jsx)(F.a,{style:{color:"#fff",marginTop:"0.1px"}})}),iconStyle:{background:"#0563bb",color:"#fff"}}),j&&Object(x.jsx)(N.VerticalTimelineElement,{iconOnClick:function(){s(3),o(!0),h(!1)},iconClassName:"d-flex justify-content-center",icon:Object(x.jsx)(J.a,{"aria-label":"add",children:Object(x.jsx)(_.a,{style:{color:"#fff",marginTop:"0.1px"}})}),iconStyle:{background:"#0563bb",color:"#fff"}})]})})})]})})},q=c(53),G=c.n(q),H=function(){var e=[{cardTitle:"Trinity College Dublin",cardSubtitle:"MSc - Intelligent Systems",coursesHead:"Courses: ",cardDetailedText:["Machine Learning","Information Retrieval and Web Search","Data Analytics","Knowledge and Data Engineering","Advanced Software Engineering","Artificial Intelligence","Text Analytics"].map((function(e){return Object(x.jsx)("li",{children:e})})),date:"2021 - present"},{cardTitle:"St. Francis Institute Of Technology",cardSubtitle:"BE in Computer Engineering",cardDetailedText:"CGPA: 8.72 (First class with Distinction)",date:"2016 - 2020"}];return Object(x.jsx)("section",{id:"education",class:"about background-alt",children:Object(x.jsxs)("div",{class:"container","data-aos":"fade-up",children:[Object(x.jsx)("div",{class:"section-title",children:Object(x.jsx)("h2",{children:"Education"})}),Object(x.jsx)("div",{class:"row",children:Object(x.jsx)("div",{class:"col-lg-12 d-flex justify-content-center",children:Object(x.jsxs)(N.VerticalTimeline,{className:"custom-line",children:[e.map((function(e,t){return Object(x.jsxs)(N.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"#343a40"},date:e.date,dateClassName:"timeline-date",contentArrowStyle:{borderRight:"7px solid  rgb(33, 150, 243)"},iconStyle:{background:"#0563bb",color:"#fff"},icon:Object(x.jsx)(u.a,{}),children:[Object(x.jsx)("h3",{className:"vertical-timeline-element-title",style:{fontSize:"14",color:"rgba(255, 255, 255, 0.8)"},children:e.cardTitle}),Object(x.jsx)("h4",{className:"vertical-timeline-element-subtitle",style:{fontSize:"1.2em",fontWeight:"350",color:"#7e8890",marginTop:"5px"},children:e.cardSubtitle}),Object(x.jsx)("h5",{className:"vertical-timeline-element-subtitle",style:{fontSize:"1em",fontWeight:"250",color:"#7e8890",marginTop:"5px"},children:e.coursesHead}),Object(x.jsx)("p",{style:{fontSize:"1em",fontWeight:"350",color:"#74808a"},children:e.cardDetailedText})]},t)})),Object(x.jsx)(N.VerticalTimelineElement,{iconStyle:{background:"#0563bb",color:"#fff"},icon:Object(x.jsx)(G.a,{})})]})})})]})})},U=c.p+"static/media/tf_badge.cc02cb13.png",Q=c.p+"static/media/mta.971f28dc.png",K=c.p+"static/media/ocajp.e53c4306.png",Y=c.p+"static/media/google_assistant.5421e7b9.png",X=c(22),Z=function(){var e=[{img:U,cardTitle:"Tensorflow Developer Certificate",cardText:"Issued on: <br/> April 18, 2020",btnText:"See Credential",btnUrl:"https://www.credential.net/bef2570d-7d63-4f07-be28-57ec4da87373"},{img:Q,cardTitle:"Microsoft Technical Associate",cardText:"Issued on: <br/> June 14, 2019",btnText:"See Credential",btnUrl:"https://www.youracclaim.com/badges/a5e09eea-6e4e-4934-bc2e-1f68679c1bb3/linked_in_profile"},{img:K,cardTitle:"Oracle Certified Programmer",cardText:"Issued on: <br/> July 20, 2018",btnText:"See Credential",btnUrl:"https://www.youracclaim.com/badges/caf3f573-a61d-4e0e-8560-5353a6a83693/linked_in_profile"},{img:Y,cardTitle:"Google Assistant Developer",cardText:"Developed a game called Amazing Riddles."}];return Object(x.jsx)("section",{id:"achievements",class:"about background-alt",children:Object(x.jsxs)("div",{class:"container","data-aos":"fade-up",children:[Object(x.jsx)("div",{class:"section-title",children:Object(x.jsx)("h2",{children:"Achievements"})}),Object(x.jsx)("div",{class:"row",children:e.map((function(e,t){return Object(x.jsxs)("div",{class:"col-sm-3 d-flex justify-content-center",children:[Object(x.jsxs)(X.a,{style:{width:"16rem",background:"#343a40",padding:"20px"},className:"text-center",children:[Object(x.jsx)(X.a.Img,{variant:"top",src:e.img}),Object(x.jsxs)(X.a.Body,{children:[Object(x.jsx)(X.a.Title,{style:{color:"rgba(255, 255, 255, 0.7)",fontSize:"18px"},children:e.cardTitle}),Object(x.jsx)("br",{}),Object(x.jsx)(X.a.Text,{style:{color:"#74808a"},children:Object(x.jsx)("div",{dangerouslySetInnerHTML:{__html:e.cardText}})}),e.btnText&&Object(x.jsx)(S.a,{variant:"contained",color:"default",target:"_blank",href:e.btnUrl,children:e.btnText})]})]}),Object(x.jsx)("br",{})]},t)}))})]})})},$=function(){return Object(x.jsx)("footer",{id:"footer",children:Object(x.jsxs)("div",{class:"container",children:[Object(x.jsxs)("div",{class:"social-links",children:[Object(x.jsx)("a",{href:"https://twitter.com/bhushanborole26",class:"twitter",children:Object(x.jsx)("i",{class:"bx bxl-twitter"})}),Object(x.jsx)("a",{href:"https://www.instagram.com/bhushan_2698/",class:"instagram",children:Object(x.jsx)("i",{class:"bx bxl-instagram"})}),Object(x.jsx)("a",{href:"https://github.com/bhushan-borole",class:"google-plus",children:Object(x.jsx)("i",{class:"bx bxl-github"})}),Object(x.jsx)("a",{href:"https://www.linkedin.com/in/bhushan-borole/",class:"linkedin",children:Object(x.jsx)("i",{class:"bx bxl-linkedin"})}),Object(x.jsx)("a",{href:"mailto:boroleb@tcd.ie",children:Object(x.jsx)("i",{class:"bx bx-envelope"})})]}),Object(x.jsxs)("div",{class:"credits",style:{color:"#74808a"},children:["Made with ",Object(x.jsx)("span",{style:{color:"#e25555"},children:"\u2665"})," ","using React"]})]})})},ee=function(){return Object(x.jsxs)("main",{id:"main",children:[Object(x.jsx)(A,{}),Object(x.jsx)(E,{}),Object(x.jsx)(W,{}),Object(x.jsx)(C,{}),Object(x.jsx)(Z,{}),Object(x.jsx)(H,{}),Object(x.jsx)("hr",{}),Object(x.jsx)($,{})]})},te=c(54),ce=c.n(te);c(79);ce.a.init();var ie=function(){return Object(x.jsxs)("div",{className:"App",style:{background:"rgba(46, 45, 43, 1)"},children:[Object(x.jsx)(m,{}),Object(x.jsx)(w,{}),Object(x.jsx)(ee,{})]})},ne=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,101)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),i(e),n(e),s(e),a(e)}))};a.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(ie,{})}),document.getElementById("root")),ne()}},[[80,1,2]]]);
//# sourceMappingURL=main.ed6565c2.chunk.js.map