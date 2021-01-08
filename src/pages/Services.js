// import React, { useState, useEffect, Component } from "react";
// import Service from "../components/Services";
// import "./serve.css";
// import Diagram from "../styles/images/ourprocess.png";
// import Diagram2 from "../styles/images/new_junt.jpg";
// import ReactGA from 'react-ga'
// import HeaderNav from "../components/HeaderNav";
// class Services extends Component {

//   render() {
//     const page = this.props.match.url;
//     switch (page) {
//       case "/Services/our_process":
//         return (
//           <div className="mar-t">
//             <Service
//               url={page}
//               img="https://wishdesk.com/sites/default/files/inline-images/Traditional%20Web%20Development%20Process.jpg"
//               title="Our Process"
//               diagram={Diagram}
//               h1="From your initial conversations with our business development team, through detailed requirements discussions with Banyan’s Labs product and project management, to regular demonstrations of working product iterations where your feedback is integrated, the client’s voice, YOUR voice, is paramount."
//               h2="We want to thoroughly understand and deliver your value proposition. The problem Banyan Labs hopes to solve is whatever problem you are solving for your customers. Our questions will include:
//               "
//               ul
//               h3="Talk with us about how Banyan Labs can affordably and expertly partner with you in your success."
//             />
//             <br />
//           </div>
//         );
//       case "/Services/web_apps":
//         return (
//           <div className="mar-t">
//             <Service
//             url={page}
//               img="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/121002887/original/9f2174ec1236e128859a8ad2ff98a5a21a0230b7/sdwdwdwwqwfhijwwfwefh-eif-wehfiwehf-i-hwei.jpg"
//               title="Web Applications"
//               h1="Front end, back end, and design. Let us help you make your best impression online."
//               diagram2={Diagram2}
//               h3="A high-level architecture diagram of some technologies we can use to implement your website."
//             />

//             <br />
//           </div>
//         );
//       case "/Services/mobile_apps":
//         return (
//           <div className="mar-t">
//             <Service
//             url={page}
//               img="https://www.ipraxa.com/blog/wp-content/uploads/2018/09/mobile-app-development-technologies.png"
//               title="Mobile Applications"
//               mobile
//               h2="We work with popular mobile application frameworks to efficiently make your mobile app ideas happen."
//             />

//             <br />
//           </div>
//         );
//       case "/Services/quality_assurance":
//         return (
//           <div className="mar-t">
//             <Service
//             url={page}
//               img="https://i0.wp.com/opensourceforu.com/wp-content/uploads/2019/04/Testing-mobile-and-apps.jpg?fit=900%2C535&ssl=1"
//               title="Quality Assurance"
//               h1="Say what you do. Do what you say. Prove it. Improve it."
//               h2="Minimizing your risks is part of our process whether it’s manual performance testing or automated functional testing."
//             />

//             <br />
//           </div>
//         );
//     }
//   }
// }
// export default Services;