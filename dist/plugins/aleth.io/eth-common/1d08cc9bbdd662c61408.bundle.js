(window["webpackJsonp_aleth_io_ethCommon"]=window["webpackJsonp_aleth_io_ethCommon"]||[]).push([[1],{GgWP:function(e,t,o){"use strict";o.r(t);var a=o("cDcd");var n=o.n(a);var r=o("sedO");var i=o("lz6E");var l=o("JcW/");var s=o("GSsg");var c=o("uJLN");var u=o("OWBo");var m=o("F3RY");var h=o("t1xA");var d;const p=m["b"].div.withConfig({displayName:"LogoWrapper",componentId:"sc-11jdip8"})`
    flex: 0 0 auto;
    width: 112px;
    height: 112px;
    padding-top: 18px;
    padding-left: 9px;
`;const y=m["b"].div.withConfig({displayName:"LogoInner",componentId:"sc-m730u4"})`
    background-image: url(${o.n(h).a});
    background-color: transparent;
    height: 40px;
    width: 76px;
    color: ${e=>e.theme.colors.blockLogoText};
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    padding: 18px 0;
`;const f=({children:e})=>a["createElement"](p,null,a["createElement"](y,null,e));var g=o("bb6g");var w=o("ckoB");class E extends a["Component"]{constructor(){super(...arguments);this.divWidth=0;this.onResize=(()=>{this.props.onResize&&this.props.onResize(this.divWidth)});this.handleResize=(()=>{if(this.divElement){this.divWidth=this.divElement.clientWidth;this.onResize()}})}render(){return a["createElement"]("div",{className:this.props.className,ref:e=>{this.divElement=e}},this.props.children)}componentDidMount(){window.addEventListener("resize",this.handleResize);this.handleResize()}componentWillUnmount(){window.removeEventListener("resize",this.handleResize)}}const b=Object(w["b"])(E).withConfig({displayName:"LayoutRowWrapper",componentId:"sc-kwnwhl"})`
    display: ${({smallScreen:e})=>e?"block":"flex"};
    ${({centerContent:e})=>e?w["a"]`
        justify-content: center;
    `:""};
`;var v=o("VBo9");var k=o("sGQ9");let C=class e extends a["Component"]{constructor(){super(...arguments);this.smallScreen=!1;this.isFirstLabelIgnored=!1;this.onResize=(e=>{this.smallScreen=!!this.props.minWidth&&e<=this.props.minWidth;if(!this.props.responsive||!this.props.responsive.ignoreFirstLabel)return;this.isFirstLabelIgnored="forLowRes"===this.props.responsive.ignoreFirstLabel&&e<540||"forMobile"===this.props.responsive.ignoreFirstLabel&&e<460})}isLayoutRowItemInstance(e){let t=!1;try{const o=e.type;t="layoutRowItem"===o._brand}catch(e){}return t}render(){let e=0;return this.smallScreen?a["Children"].map(this.props.children,e=>{if(null===e||void 0===e)return e;const t=this.isLayoutRowItemInstance(e);return a["createElement"](b,{smallScreen:this.smallScreen,onResize:this.onResize,centerContent:this.isFirstLabelIgnored},t?a["cloneElement"](e,{isBeginningOfRow:!0,fullRow:!0,ignoreFirstLabel:this.isFirstLabelIgnored}):e)}):a["createElement"](b,{smallScreen:this.smallScreen,onResize:this.onResize,centerContent:this.isFirstLabelIgnored},a["Children"].map(this.props.children,t=>{if(null===t||void 0===t)return t;const o=this.isLayoutRowItemInstance(t);return o?a["cloneElement"](t,{isBeginningOfRow:!e++||this.smallScreen,ignoreFirstLabel:this.isFirstLabelIgnored}):t}))}};g["b"]([v["observable"]],C.prototype,"smallScreen",void 0);g["b"]([v["observable"]],C.prototype,"isFirstLabelIgnored",void 0);C=g["b"]([k["observer"]],C);var S=o("INKD");var W=o("C4qQ");var I=o("i22y");const L=({children:e})=>a["createElement"](I["a"],{colors:e=>({background:e.colors.privacyNameBg,text:e.colors.privacyNameText})},e);const P=m["b"].span.withConfig({displayName:"Bold",componentId:"sc-hgh12t"})`
    font-weight: 600;
`;const x=m["b"].div.withConfig({displayName:"Section",componentId:"sc-qjthf0"})`
    padding-right: 15%;
`;const T=m["b"].p.withConfig({displayName:"Paragraph",componentId:"sc-12pmhap"})``;const A=m["b"].h4.withConfig({displayName:"Head4",componentId:"sc-o88pup"})`
    font-weight: 600;
`;const R=m["b"].table.withConfig({displayName:"Table",componentId:"sc-zdjrhl"})`
    border: 1px solid ${({theme:e})=>e.colors.privacyPolicyTableBorder};
    border-collapse: collapse;

    th, td {
        border: 1px solid ${({theme:e})=>e.colors.privacyPolicyTableBorder};
        padding: 8px;
    }
`;class z extends n.a.Component{render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(C,null,n.a.createElement(S["a"],null,n.a.createElement(W["a"],null,"Privacy Policy"),n.a.createElement(L,null,"Consensys AG's Alethio")),n.a.createElement(S["a"],null,n.a.createElement(W["a"],null,"Last updated"),n.a.createElement(I["a"],null,"11.2018"))),n.a.createElement(C,null,n.a.createElement(S["a"],{autoHeight:!0,fullRow:!0},n.a.createElement(W["a"],null),n.a.createElement(x,null,n.a.createElement(T,null,'This privacy policy ("',n.a.createElement(P,null,"Policy"),'") describes how ConsenSys AG’s Alethio ("',n.a.createElement(P,null,"Alethio"),'", "',n.a.createElement(P,null,"Company"),'", "',n.a.createElement(P,null,"we"),'", "',n.a.createElement(P,null,"our"),'", or "',n.a.createElement(P,null,"us"),'") collects, uses, shares and stores personal information of users of this website, ',n.a.createElement("a",{href:"https://aleth.io/",target:"_blank",rel:"noopener noreferrer"},"https://aleth.io/"),'(the "',n.a.createElement(P,null,"Site"),'"). This Policy applies to the Site, applications, products and services (collectively, "',n.a.createElement(P,null,"Services"),'") on or in which it is posted, linked, or referenced.'),n.a.createElement(T,null,"Please note that this Policy does not apply to information collected through third-party websites or services that you may access through the Services or that you submit to us through email, text message or other electronic message or offline."),n.a.createElement(T,null,"If you are visiting this site from the European Union (EU), see our Notice to EU Data Subjects below for our legal bases for processing and transfer of your data.")))),n.a.createElement(C,null,n.a.createElement(S["a"],{autoHeight:!0,fullRow:!0},n.a.createElement(W["a"],null,"What we collect"),n.a.createElement(x,null,n.a.createElement(T,null,"We get information about you in a range of ways."),n.a.createElement(T,null,n.a.createElement(P,null,"Information You Give Us"),". Information we may collect from you includes:"),n.a.createElement("ul",null,n.a.createElement("li",null,"Contact information, such as your email address;"),n.a.createElement("li",null,"Feedback and correspondence, such as information you provide in order to report a problem with Service, receive customer support or otherwise correspond with us;"),n.a.createElement("li",null,"Technical information, such as your Ethereum wallet address;"),n.a.createElement("li",null,"Usage information, such as information about how you use the Service and interact with us;"),n.a.createElement("li",null,"Marketing information, such as your preferences for receiving marketing communications and details about how you engage with them.")),n.a.createElement(T,null,n.a.createElement(P,null,"Information We Get From Others.")," We may get information about you from other third party sources and we may add this to information we get from your use of the Services."),n.a.createElement(T,null,n.a.createElement(P,null,"Information Automatically Collected.")," We may automatically record certain information about how you use our Site (we refer to this information as “Log Data“). Log Data may include information such as a user’s Internet Protocol (IP) address, device and browser type, operating system, the pages or features of our Site to which a user browsed and the time spent on those pages or features, the frequency with which the Site is used by a user, search terms, the links on our Site that a user clicked on or used, the last page you visited before entering our Site, your language preferences, your city and country location, and other statistics. We use this information to administer the Service and we analyze (and may engage third parties to analyze) this information to improve and enhance the Service by expanding its features and functionality and tailoring it to our users’ needs and preferences."),n.a.createElement(T,null,"We may use cookies or similar technologies to analyze trends, administer the website, track users’ movements around the website, and to gather demographic information about our user base as a whole. Users can control the use of cookies at the individual browser level. For more information, please see the section entitled “Cookies Policy” below."),n.a.createElement(T,null,"We also use Google Analytics to help us offer you an optimized user experience. You can find more information about Google Analytics' use of your personal data ",n.a.createElement("a",{href:"https://www.google.com/analytics/terms/us.html",target:"_blank",rel:"noopener noreferrer"},"here"),"."),n.a.createElement(T,null,n.a.createElement(P,null,"Information we will never collect.")," We will never ask you to share your private keys or wallet seed. Never trust anyone or any site that asks you to enter your private keys or wallet seed.")))),n.a.createElement(C,null,n.a.createElement(S["a"],{autoHeight:!0,fullRow:!0},n.a.createElement(W["a"],null,"Use of personal information"),n.a.createElement(x,null,n.a.createElement(A,null,"To provide our service"),n.a.createElement(T,null,"We will use your personal information in the following ways:"),n.a.createElement("ul",null,n.a.createElement("li",null,"We use your email address to verify your identity when you access and use our Services and to identify which nodes are related to you."),n.a.createElement("li",null,"To identify, establish and maintain our relationship with you."),n.a.createElement("li",null,"To enable you to access and use the Services."),n.a.createElement("li",null,"To provide and deliver products and services that you may request."),n.a.createElement("li",null,"To send information, including confirmations, technical notices, updates, security alerts, and support and administrative messages.")),n.a.createElement(A,null,"To comply with law"),n.a.createElement(T,null,"We use your personal information as we believe necessary or appropriate to comply with applicable laws, lawful requests and legal process, such as to respond to subpoenas or requests from government authorities."),n.a.createElement(A,null,"To communicate with you"),n.a.createElement(T,null,"We use your personal information to communicate about promotions, upcoming events, and other news about products and services offered by us."),n.a.createElement(A,null,"To optimize our platform"),n.a.createElement(T,null,"In order to optimize your user experience, we may use your personal information to operate, maintain, and improve our Services. We may also use your information to respond to your comments and questions regarding the Services, and to provide you and other users with general customer service."),n.a.createElement(A,null,"With your consent"),n.a.createElement(T,null,"We may use or share your personal information with your consent, such as when you consent to let us post your testimonials or endorsements on our Site, you instruct us to take a specific action with respect to your personal information, or you opt into third party marketing communications."),n.a.createElement(A,null,"For compliance, fraud prevention, and safety"),n.a.createElement(T,null,"We may use your personal information to protect, investigate, and deter against fraudulent, unauthorized, or illegal activity.")))),n.a.createElement(C,null,n.a.createElement(S["a"],{autoHeight:!0,fullRow:!0},n.a.createElement(W["a"],null,"Sharing of personal information"),n.a.createElement(x,null,n.a.createElement(T,null,"We do not share or sell the personal information that you provide us with other organizations without your express consent, except as described in this Privacy Policy. We disclose personal information to third parties under the following circumstances:"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(P,null,"Affiliates.")," We may disclose your personal information to our subsidiaries and corporate affiliates for purposes consistent with this Privacy Policy."),n.a.createElement("li",null,n.a.createElement(P,null,"Business Transfers.")," We may share personal information when we do a business deal, or negotiate a business deal, involving the sale or transfer of all or a part of our business or assets. These deals can include any merger, financing, acquisition, or bankruptcy transaction or proceeding."),n.a.createElement("li",null,n.a.createElement(P,null,"Compliance with Laws and Law Enforcement; Protection and Safety.")," We may share personal information for legal, protection, and safety purposes.",n.a.createElement("ul",null,n.a.createElement("li",null,"We may share information to comply with laws."),n.a.createElement("li",null,"We may share information to respond to lawful request sand legal processes."),n.a.createElement("li",null,"We may share information to protect the rights and property of the Company, ouragents, customers, and others. This includes enforcing our agreements, policies, and terms of use."),n.a.createElement("li",null,"We may share information in an emergency. This includes protecting the safety of our employees and agents, our customers, or any person."))),n.a.createElement("li",null,n.a.createElement(P,null,"Professional Advisors and Service Providers.")," We may share information with those who need it to do work for us. These recipients may include third party companies and individuals to administer and provide the Service on our behalf (such as customer support, hosting, email delivery and database management services), as well as lawyers, bankers, auditors, and insurers."),n.a.createElement("li",null,n.a.createElement(P,null,"Other.")," You may permit us to share your personal information with other companies or entities of your choosing. Those uses will be subject to the privacy policies of the recipient entity or entities.")),"We may also share aggregated and/or anonymized data with others for their own uses."))),n.a.createElement(C,null,n.a.createElement(S["a"],{autoHeight:!0,fullRow:!0},n.a.createElement(W["a"],null,"International transfer"),n.a.createElement(x,null,n.a.createElement(T,null,"The Company has offices outside of the EU and has affiliates and service providers in the United States and in other countries. Your personal information may be transferred to or from the United States or other locations outside of your state, province, country or other governmental jurisdiction where privacy laws may not be as protective as those in your jurisdiction."),n.a.createElement(T,null,"EU users should read the important information provided below about transfer of personal information outside of the European Economic Area (EEA).")))),n.a.createElement(C,null,n.a.createElement(S["a"],{autoHeight:!0,fullRow:!0},n.a.createElement(W["a"],null,"How information is secured"),n.a.createElement(x,null,n.a.createElement(T,null,"We retain personal information we collect as long as it is necessary and relevant to fulfill the purposes outlined in this privacy policy. In addition, we retain personal information to comply with applicable law where required, prevent fraud, resolve disputes, troubleshoot problems, assist with any investigation, and other actions permitted by law. To determine the appropriate retention period for personal information, we consider the amount, nature, and sensitivity of the personal information, the potential risk of harm from unauthorized use or disclosure of your personal information, the purposes for which we process your personal information and whether we can achieve those purposes through other means, and the applicable legal requirements."),n.a.createElement(T,null,"In some circumstances we may anonymize your personal information (so that it can no longer be associated with you) in which case we may use this information indefinitely without further notice to you."),n.a.createElement(T,null,"We employ industry standard security measures designed to protect the security of all information submitted through the Services. However, the security of information transmitted through the internet can never be guaranteed. We are not responsible for any interception or interruption of any communications through the internet or for changes to or losses of data. Users of the Services are responsible for maintaining the security of any password, biometrics, user ID or other form of authentication involved in obtaining access to password protected or secure areas of any of our digital services. In order to protect you and your data, we may suspend your use of any of the Services, without notice, pending an investigation, if any breach of security is suspected.")))),n.a.createElement(C,null,n.a.createElement(S["a"],{autoHeight:!0,fullRow:!0},n.a.createElement(W["a"],null,"INFORMATION CHOICES AND CHANGES"),n.a.createElement(x,null,n.a.createElement(A,null,"Accessing, Updating, Correcting, and Deleting your Information"),n.a.createElement(T,null,"You may access information that you have voluntarily provided through your account on the Services, and to review, correct, or delete it by sending a request to privacy@aleth.io. You can request to change contact choices, opt-out of our sharing with others, and update your personal information and preferences."),n.a.createElement(A,null,"Tracking Technologies Generally"),n.a.createElement(T,null,'Regular cookies may generally be disabled or removed by tools available as part of most commercial browsers, and in some instances blocked in the future by selecting certain settings. For more information, please see the section entitled "Cookies Policy" below.'),n.a.createElement(A,null,"Google Analytics"),n.a.createElement(T,null,"You may exercise choices regarding the use of cookies from Google Analytics by going to ",n.a.createElement("a",{href:"https://tools.google.com/dlpage/gaoptout",target:"_blank",rel:"noopener noreferrer"},"https://tools.google.com/dlpage/gaoptout")," and downloading the Google Analytics Opt-out Browser Add-on."),n.a.createElement(T,null,n.a.createElement(P,null,"Contact information.")," We welcome your comments or questions about this Policy, and you may contact us at: privacy@aleth.io."),n.a.createElement(T,null,n.a.createElement(P,null,"Changes to this privacy policy.")," We may change this privacy policy at any time. We encourage you to periodically review this page for the latest information on our privacy practices. If we make any changes, we will change the Last Updated date above."),n.a.createElement(T,null,"Any modifications to this Privacy Policy will be effective upon our posting of the new terms and/or upon implementation of the changes to the Site (or as otherwise indicated at the time of posting).")))),n.a.createElement(C,null,n.a.createElement(S["a"],{autoHeight:!0,fullRow:!0},n.a.createElement(W["a"],null,"Eligibility"),n.a.createElement(x,null,n.a.createElement(T,null,"Our Services are intended for general audiences over the age of 13 years old (or over the age of 16 if you are resident in the EEA). We do not knowingly collect information from children under the age of 13 years old, or 16 in the EEA. Consistent with the requirements of the Children's Online Privacy Protection Act (COPPA), if we learn that we have received any information directly from a child under age 13 without first receiving his or her parent's verified consent, we will use that information only to respond directly to that child (or his or her parent or legal guardian) to inform the child that he or she cannot use the Site and subsequently we will delete that information.")))),n.a.createElement(C,null,n.a.createElement(S["a"],{autoHeight:!0,fullRow:!0},n.a.createElement(W["a"],null,"NOTICE TO CALIFORNIA RESIDENTS"),n.a.createElement(x,null,n.a.createElement(T,null,"Under California Civil Code Section 1789.3, California users are entitled to the following consumer rights notice: California residents may reach the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by mail at 1625 North Market Blvd., Sacramento, CA 95834, or by telephone at (916) 445-1254 or (800) 952-5210.")))),n.a.createElement(C,null,n.a.createElement(S["a"],{autoHeight:!0,fullRow:!0},n.a.createElement(W["a"],null,"NOTICE TO EU DATA SUBJECTS"),n.a.createElement(x,null,n.a.createElement(A,null,"Personal Information"),n.a.createElement(T,null,'With respect to EU data subjects, "personal information," as used in this Privacy Policy, is equivalent to "personal data" as defined in the ',n.a.createElement("a",{href:"https://gdpr-info.eu/art-4-gdpr/",target:"_blank",rel:"noopener noreferrer"},"European Union General Data Protection Regulation")," (GDPR)."),n.a.createElement(A,null,"Sensitive Data"),n.a.createElement(T,null,"Some of the information you provide us may constitute sensitive data as defined in the GDPR (also referred to as special categories of personal data)."),n.a.createElement(A,null,"Legal Bases for Processing"),n.a.createElement(T,null,"We only use your personal information as permitted by law. We are required to inform you of the legal bases of our processing of your personal information, which are described in the table below. If you have questions about the legal bases under which we process your personal information, contact us at privacy@aleth.io."),n.a.createElement(R,null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{style:{width:"50%"}},"Processing Purpose"),n.a.createElement("th",{style:{width:"50%"}},"Legal basis"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(T,null,"To communicate with you"),n.a.createElement(T,null,"To optimize our platform"),n.a.createElement(T,null,"For compliance, fraud prevention, and safety"),n.a.createElement(T,null,"To provide our service")),n.a.createElement("td",null,n.a.createElement(T,null,"These processing activities constitute our legitimate interests. We make sure we consider and balance any potential impacts on you (both positive and negative) and your rights before we process your personal information for our legitimate interests. We do not use your personal information for activities where our interests are overridden by any adverse impact on you (unless we have your consent or are otherwise required or permitted to by law)."))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(T,null,"To comply with law")),n.a.createElement("td",null,n.a.createElement(T,null,"We use your personal information to comply with applicable laws and our legal obligations."))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(T,null,"With your consent")),n.a.createElement("td",null,n.a.createElement(T,null,"Where our use of your personal information is based upon your consent, you have the right to withdraw it anytime in the manner indicated in the Service or by contacting us at privacy@aleth.io."))))),n.a.createElement(A,null,"Use for New Purposes"),n.a.createElement(T,null,"We may use your personal information for reasons not described in this Privacy Policy, where we are permitted by law to do so and where the reason is compatible with the purpose for which we collected it. If we need to use your personal information for an unrelated purpose, we will notify you and explain the applicable legal basis for that use. If we have relied upon your consent for a particular use of your personal information, we will seek your consent for any unrelated purpose."),n.a.createElement(A,null,"Your rights"),n.a.createElement(T,null,"Under the GDPR, you have certain rights regarding your personal information. You may ask us to take the following actions in relation to your personal information that we hold:"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(P,null,"Opt-out.")," Stop sending you direct marketing communications which you have previously consented to receive. We may continue to send you Service-related and other non-marketing communications."),n.a.createElement("li",null,n.a.createElement(P,null,"Access.")," Provide you with information about our processing of your personal information and give you access to your personal information."),n.a.createElement("li",null,n.a.createElement(P,null,"Correct.")," Update or correct inaccuracies in your personal information."),n.a.createElement("li",null,n.a.createElement(P,null,"Delete.")," Delete your personal information."),n.a.createElement("li",null,n.a.createElement(P,null,"Transfer.")," Transfer a machine-readable copy of your personal information to you or a third party of your choice."),n.a.createElement("li",null,n.a.createElement(P,null,"Restrict.")," Restrict the processing of your personal information."),n.a.createElement("li",null,n.a.createElement(P,null,"Object.")," Object to our reliance on our legitimate interests as the basis of our processing of your personal information that impacts your rights.")),n.a.createElement(T,null,"You can submit these requests by email to privacy@aleth.io. We may request specific information from you to help us confirm your identity and process your request. Applicable law may require or permit us to decline your request. If we decline your request, we will tell you why, subject to legal restrictions. If you would like to submit a complaint about our use of your personal information or response to your requests regarding your personal information, you may contact us at privacy@aleth.io or submit a complaint to the data protection regulator in your jurisdiction. You can find your data protection regulator ",n.a.createElement("a",{href:"http://ec.europa.eu/justice/article-29/structure/data-protection-authorities/index_en.htm",target:"_blank",rel:"noopener noreferrer"},"here"),"."),n.a.createElement(A,null,"Cross-Border data transfer"),n.a.createElement(T,null,"Please be aware that your personal data will be transferred to, processed, and stored in the United States. Data protection laws in the U.S. may be different from those in your country of residence. Whenever we transfer your personal information out of the EEA to the U.S. or countries not deemed by the European Commission to provide an adequate level of personal information protection, the transfer will be based on a data transfer mechanism recognized by the European Commission as providing adequate protection for personal information."),n.a.createElement(T,null,"Please contact us if you want further information on the specific mechanism used by us when transferring your personal information out of the EEA.")))),n.a.createElement(C,null,n.a.createElement(S["a"],{autoHeight:!0,fullRow:!0},n.a.createElement(W["a"],null,n.a.createElement("a",{id:"cookies"},"COOKIES POLICY")),n.a.createElement(x,null,n.a.createElement(T,null,"We understand that your privacy is important to you and are committed to being transparent about the technologies we use. In the spirit of transparency, this policy provides detailed information about how and when we use cookies on our Site."),n.a.createElement(A,null,"Do we use Cookies?"),n.a.createElement(T,null,"Yes. We and our marketing partners, affiliates, and analytics or service providers use cookies, web beacons, or pixels and other technologies to ensure everyone who uses the Site has the best possible experience."),n.a.createElement(A,null,"What is a Cookie?"),n.a.createElement(T,null,'A cookie ("Cookie") is a small text file that is placed on your hard drive by a web page server. Cookies contain information that can later be read by a web server in the domain that issued the cookie to you. Some of the cookies will only be used if you use certain features or select certain preferences, and some cookies will always be used. You can find out more about each cookie by viewing our current cookie list below. We update this list periodically, so there may be additional cookies that are not yet listed. Web beacons, tags and scripts may be used in the Site or in emails to help us to deliver cookies, count visits, understand usage and campaign effectiveness and determine whether an email has been opened and acted upon. We may receive reports based on the use of these technologies by our service/analytics providers on an individual and aggregated basis.'),n.a.createElement(A,null,"Why do we use Cookies?"),n.a.createElement(T,null,"We generally use Cookies for the following purposes:"),n.a.createElement("ul",null,n.a.createElement("li",null,"To recognize new or past customers."),n.a.createElement("li",null,"To store your password if you are registered on our Site."),n.a.createElement("li",null,"To improve our Site and to better understand your visits on our platforms and Site."),n.a.createElement("li",null,"To serve you with interest-based or targeted advertising."),n.a.createElement("li",null,"To observe your behaviors and browsing activities over time across multiple websites or other platforms."),n.a.createElement("li",null,"To better understand the interests of our customers and our website visitors.")),n.a.createElement(T,null,"Some Cookies are necessary for certain uses of the Site, and without such Cookies, we would not be able to provide many services that you need to properly use the Site. These Cookies, for example, allow us to operate our Site so you may access it as you have requested and let us recognize that you have created an account and have logged into that account to access Site content. They also include Cookies that enable us to remember your previous actions within the same browsing session and secure our Sites."),n.a.createElement(T,null,"We also use functional Cookies and Cookies from third parties for analysis and marketing purposes. Functional Cookies enable certain parts of the site to work properly and your user preferences to remain known. Analysis Cookies, among other things, collect information on how visitors use our Site, the content and products that users view most frequently, and the effectiveness of our third party advertising. Advertising Cookies assist in delivering ads to relevant audiences and having our ads appear at the top of search results. Cookies are either “session” Cookies which are deleted when you end your browser session, or “persistent,” which remain until their deletion by you (discussed below) or the party who served the cookie. Full details on all of the Cookies used on the Site are available at our Cookie Disclosure table below."),n.a.createElement(A,null,"How to disable Cookies"),n.a.createElement(T,null,"You can generally activate or later deactivate the use of cookies through a functionality built into your web browser. To learn more about how to control cookie settings through your browser:"),n.a.createElement(T,null,"Click ",n.a.createElement("a",{href:"https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences",target:"_blank",rel:"noopener noreferrer"},"here")," to learn more about the “Private Browsing” setting and managing cookie settings in Firefox;"),n.a.createElement(T,null,"Click ",n.a.createElement("a",{href:"https://support.google.com/chrome/answer/95647?hl=en",target:"_blank",rel:"noopener noreferrer"},"here")," to learn more about “Incognito” and managing cookie settings in Chrome;"),n.a.createElement(T,null,"Click ",n.a.createElement("a",{href:"https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies",target:"_blank",rel:"noopener noreferrer"},"here")," to learn more about “InPrivate” and managing cookie settings in Internet Explorer;"),n.a.createElement(T,null,"Click ",n.a.createElement("a",{href:"https://support.apple.com/en-us/HT201265",target:"_blank",rel:"noopener noreferrer"},"here")," to learn more about “Private Browsing” and managing cookie settings in Safari."),n.a.createElement(T,null,"If you want to learn more about cookies, or how to control, disable or delete them, please visit ",n.a.createElement("a",{href:"http://www.aboutcookies.org",target:"_blank",rel:"noopener noreferrer"},"http://www.aboutcookies.org")," for detailed guidance. In addition, certain third party advertising networks, including Google, permit users to opt out of or customize preferences associated with your internet browsing. To learn more about this feature from Google, click ",n.a.createElement("a",{href:"https://adssettings.google.com/u/0/authenticated?hl=en",target:"_blank",rel:"noopener noreferrer"},"here"),"."),n.a.createElement(T,null,"To control flash cookies, which we may use on our Site from time to time, you can go to this ",n.a.createElement("a",{href:"http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html",target:"_blank",rel:"noopener noreferrer"},"link")," because Flash cookies cannot be controlled through your browser settings. Please note that if you decline the use of Cookies, some functions of the website may be unavailable and we will not be able to present personally tailored content and advertisements to you."),n.a.createElement(T,null,'We may link the information collected by Cookies with other information we collect from you pursuant to this Privacy Policy and use the combined information as set forth herein. Similarly, the third parties who serve cookies on our Site may link your name or email address to other information they collect, which may include past purchases made offline or online, or your online usage information. If you are located in the European Economic Area, you have certain rights that are described above under the header "Notice to EU Data Subjects", including the right to inspect and correct or delete the data that we have about you.'),n.a.createElement(A,null,"Cookies Disclosure"),n.a.createElement(R,null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Name of Cookie/Identifier"),n.a.createElement("td",null,"What does the cookie generally do (e.g., website function and administration, analytics, marketing)?"),n.a.createElement("td",null,"Is it a 1st or 3rd party cookie and what is the name of the party providing it?"),n.a.createElement("td",null,"What type of cookie is it (persistent or session)?"),n.a.createElement("td",null,"What is the duration of the cookie on the website (if not cleared by the user)?"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Google Analytics (_ga)"),n.a.createElement("td",null,"Analytics"),n.a.createElement("td",null,"3rd - Google"),n.a.createElement("td",null,"Persistent"),n.a.createElement("td",null,"[2 years]")),n.a.createElement("tr",null,n.a.createElement("td",null,"(_gid)"),n.a.createElement("td",null,"Analytics"),n.a.createElement("td",null,"3rd - Google"),n.a.createElement("td",null,"Persistent"),n.a.createElement("td",null,"[1 day]"))))))))}}o.d(t,"PrivacyPolicyTemplate",function(){return D});class D extends a["Component"]{render(){return a["createElement"](r["a"],null,a["createElement"](l["a"],{sticky:!0,mobileVisible:this.props.sidebarVisible},a["createElement"](u["a"],null,"Privacy Policy"),a["createElement"](s["a"],null,a["createElement"](f,null,"Pp")),a["createElement"](c["a"],{height:"64px"})),a["createElement"](i["a"],null,a["createElement"](z,null)))}}},t1xA:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3MiA3MiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMyMGQ4YTQ7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5Qcml2YWN5IFBvbGljeSBDb29raWUgZ3JlZW4gYmc8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTM1Ljg4LDBsLS43MiwwYTExLjE2LDExLjE2LDAsMCwxLC4yLDIuMUExMS44NiwxMS44NiwwLDAsMSwyMy41LDE0Yy0uMzcsMC0uNzQsMC0xLjEtLjA2YTEyLjEzLDEyLjEzLDAsMCwxLC4yMSwyLjE5QTExLjg1LDExLjg1LDAsMCwxLDExLjUyLDI4YTEzLjM5LDEzLjM5LDAsMCwxLC4wOSwxLjQzQTExLjg1LDExLjg1LDAsMCwxLC4yNiw0MS4yMSwzNiwzNiwwLDEsMCwzNS44OCwwWiIvPjwvc3ZnPg=="}}]);
//# sourceMappingURL=1d08cc9bbdd662c61408.bundle.js.map