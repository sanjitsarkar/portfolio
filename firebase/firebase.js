import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  //...{
    apiKey: "AIzaSyCX1XcFsVZHjxDhIKwcM23DzQbBITBliKI",
    authDomain: "xanjitsarkar.firebaseapp.com",
    projectId: "xanjitsarkar",
    storageBucket: "xanjitsarkar.appspot.com",
    messagingSenderId: "518936243425",
    appId: "1:518936243425:web:8f05d436084bda538e5ba0",
    measurementId: "G-HRKZR75M3X"
  
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// console.log(app)
  
// var projects = 
// [               
//     {"title":"Xdraw",
//     "publishedDate":"September, 2021",
//     "projectDesc":"A vector graphics editor like Figma, AdobeXd and Sketch",
//     "img":"",
//     "source_url":"https://github.com/sanjitsarkar/xdraw",
//     "live_url":"https://xdraw.vercel.app/",
//     "tech_used":["next.js","paper.js","canvas"]
//     },
//     {"title":"Codezen",
//     "publishedDate":"July, 2021",
//     "projectDesc":"It's an online real-time compiler for competitive programming.",
//     "img":"",
//     "source_url":"https://github.com/sanjitsarkar/codezen",
//     "live_url":"https://codezzen.netlify.app/",
//     "tech_used":["MERN","mongodb","expressjs","react.js","node.js"]
//     },
//     {"title":"MovieRecom",
//     "publishedDate":"August, 2021",
//     "projectDesc":"It's a movie recommendation site made with react and themoviedb api",
//     "img":"",
//     "source_url":"https://github.com/sanjitsarkar/movierecom",
//     "live_url":"https://movierecom.netlify.app/",
//     "tech_used":["react.js","HTML","CSS"]
//     },
//     {"title":"GrowwTen",
//     "publishedDate":"September, 2021",
//     "projectDesc":"t's a digital marketing site made with Next.js and Firebase.It helps to promote and gain audience in your social media.",
//     "img":"",
//     "source_url":"https://github.com/sanjitsarkar/growwten",
//     "live_url":"https://www.growwten.com/",
//     "tech_used":["Javascript","HTML","CSS"]
//     },
//     {"title":"Social Hub - A Social Networking Site in PHP",
//     "publishedDate":"February, 2018",
//     "projectDesc":"It's an Social Networking Site Mainly Focused on People having Common Interest, where people with common interest can interact each other",
//     "img":"",
//     "source_url":"https://github.com/sanjitsarkar/socialhub",
//     "live_url":"https://sociohubs.herokuapp.com/",
//     "tech_used":["Javascript","HTML","CSS","php","mysql"]
//     },
//     {"title":"XCashManager",
//     "publishedDate":"August, 2021",
//     "projectDesc":"A cash register manager which helps the user by telling how can he/she return the change to the customer with minimum number of notes.",
//     "img":"",
//     "source_url":"https://github.com/sanjitsarkar/cash_manager",
//     "live_url":"https://xcashmanager.netlify.app/",
//     "tech_used":["react.js","Javascript"]
//     },
//     {"title":"Emoji World",
//     "publishedDate":"August, 2021",
//     "projectDesc":" struggle with understanding the emojis. Do you too? If yes, then see this library of emojis with meaning.",
//     "img":"",
//     "source_url":"https://github.com/sanjitsarkar/emojiworld",
//     "live_url":"https://xemoji.netlify.app/",
//     "tech_used":["react.js","Javascript"]
//     },
//     {"title":"Banana Talk",
//     "publishedDate":"August, 2021",
//     "projectDesc":"Convert from English to Minion language.",
//     "img":"",
//     "source_url":"https://github.com/sanjitsarkar/banana_talk",
//     "live_url":"https://xminiontalk.netlify.app/",
//     "tech_used":["Javascript"]
//     },
//     {"title":"Dothraki Talk",
//     "publishedDate":"August, 2021",
//     "projectDesc":"Are you a fan of GOT ? Did you know that the gibberish Dothrakian say is an actual language. Use the translator to convert your text from English to Dothraki language.",
//     "img":"",
//     "source_url":"https://github.com/sanjitsarkar/dothraki_talk",
//     "live_url":"https://xdothrakitalk.netlify.app/",
//     "tech_used":["Javascript"]
//     },
//     {"title":"Marvel CLI Quiz App",
//     "publishedDate":"August, 2021",
//     "projectDesc":"It's a cli based app for marvel quiz built using javscript.",
//     "img":"",
//     "source_url":"https://github.com/sanjitsarkar/FANDOM_QUIZ_CLI",
//     "live_url":"https://replit.com/@sanjitsarkar/CLIQUIZAPP2?embed=true#index.js",
//     "tech_used":["nodejs","Javascript"]
//     },
//     {"title":"Know about me - a Quiz CLI app",
//     "publishedDate":"August, 2021",
//     "projectDesc":"I's a cli based app for KnowAboutMe quiz built using javascript.",
//     "img":"",
//     "source_url":"https://github.com/sanjitsarkar/KnowAboutMeQuizCLI",
//     "live_url":"https://replit.com/@sanjitsarkar/CLIQUIZAPP1?embed=true#quiz_app_1",
//     "tech_used":["nodejs.js","Javascript"]
//     }

// ]
// var blogs = [               
//     {"title":"Minion Speak: A fun API based Translator",
//     "publishedDate":"August, 2021",
//     "blogDesc":"Minionese appears to be a polyglot language, which borrows words and - such as they are - grammatical rules from many different languages. Minionese contains some elements of English, with words like 'Banana'., 'Bapple' (apple, basically 'Apple' with 'B'), and 'Potato'. (Minions are, as has been shown many times, particularly obsessed with food.) In addition, Minionese also contains words from other languages such as Spanish, Italian, Chinese, Filipino (Tagalog), French and Russian, including Spanish-sounding words like 'para tú' (roughly 'for you') and 'la bōda' ('the wedding'), French (poulet tikka masala, et pis c'est tout, roughly 'chicken tikka masala, and that's all'), Russian words such as 'да' (Dä, 'yes'), Chinese (kanpai / 乾杯, translating to 'cheers') and Korean words such as 'Hana (하나), Dúl (둘), Sae (From Set [셋]'' meaning 'One, Two, Three'), and many other languages. In Minions, new Minionese words were heard from the minions, such as 'Trōpa' in Tagalog and Spanish which means a group of friends. Also, some words such as 'Papōy' (toy) are unique to Minionese. No non-Minion character has ever been heard to speak Minionese directly, although some characters (most notably Gru) can understand it anyway. The Minions can also understand English although none of them have ever been heard to actually speak it. All of the Minionese heard in the films was created and voiced by Pierre Coffin and Chris Renaud, the directors of the Despicable Me movies.",
//     "img":""
//     },
   
    
// ]
// async function storeProjects() {
//     // Add a new message entry to the Firebase database.
//     try {
//         projects.forEach(async(obj)=>{
//       await addDoc(collection(getFirestore(), 'projects'), {
//         title: obj.title,
//                 publishedDate: obj.publishedDate,
//                 img: obj.img,
//                 sourceUrl: obj.source_url,
//                 desc:obj.projectDesc,
//                 liveUrl: obj.live_url,
//                 techUsed: obj.tech_used,
//       });
//     })
// }
//     catch(error) {
//       console.error('Error writing new message to Firebase Database', error);
//     }
//   }
// // async function storeBlogs(messageText) {
// //     // Add a new message entry to the Firebase database.
// //     try {
// //         blogs.forEach(async(obj)=>{
// //       await addDoc(collection(getFirestore(), 'blogs'), {
// //         title: obj.title,
// //                 publishedDate: obj.publishedDate,
// //                 img: obj.img,
// //                 blogDesc: obj.blogDesc
// //       });
// //     })
// // }
// //     catch(error) {
// //       console.error('Error writing new message to Firebase Database', error);
// //     }
// //   }



//   storeProjects()
//   // storeBlogs()
// // projects.forEach(function(obj) {
// //     collection("projects").add({
// //         title: obj.title,
// //         publishedDate: obj.publishedDate,
// //         img: obj.img,
// //         source_url: obj.source_url,
// //         live_url: obj.live_url,
// //         tech_used: obj.tech_used,

// //     }).then(function(docRef) {
// //         console.log("Document written with ID: ", docRef.id);
// //     })
// //     .catch(function(error) {
// //         console.error("Error adding document: ", error);
// //     });
// // });
// // blogs.forEach(function(obj) {
// //     collection("blogs").add({
// //         title: obj.title,
// //         publishedDate: obj.publishedDate,
// //         img: obj.img,
// //         blogDesc: obj.blogDesc

// //     }).then(function(docRef) {
// //         console.log("Document written with ID: ", docRef.id);
// //     })
// //     .catch(function(error) {
// //         console.error("Error adding document: ", error);
// //     });
// // });