import firebase from "./firebase";
import room2 from "../images/details-2.jpeg";
import room3 from "../images/details-3.jpeg";
import room4 from "../images/details-4.jpeg";
import img1 from "../images/room-1.jpeg";
import img2 from "../images/room-2.jpeg";

let db = firestore.firebase()
let ref = db.ref('resort-data')
let d ={
  name:'susi'
}


// let data = [
//   {
//         sys: {
//           id: "1",
//         },
//         fields: {
//           name: "single economy",
//           slug: "single-economy",
//           type: "single",
//           price: 100,
//           size: 200,
//           capacity: 1,
//           pets: false,
//           breakfast: false,
//           featured: false,
//           description:
//             "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
//           extras: [
//             "Plush pillows and breathable bed linens",
//             "Soft, oversized bath towels",
//             "Full-sized, pH-balanced toiletries",
//             "Complimentary refreshments",
//             "Adequate safety/security",
//             "Internet",
//             "Comfortable beds",
//           ],
//           images: [
//             {
//               fields: {
//                 file: {
//                   url: img1,
//                 },
//               },
//             },
//             {
//               fields: {
//                 file: {
//                   url: room2,
//                 },
//               },
//             },
//             {
//               fields: {
//                 file: {
//                   url: room3,
//                 },
//               },
//             },
//             {
//               fields: {
//                 file: {
//                   url: room4,
//                 },
//               },
//             },
//           ],
//         },
//       },
//       {
//         sys: {
//           id: "2",
//         },
//         fields: {
//           name: "single basic",
//           slug: "single-basic",
//           type: "single",
//           price: 150,
//           size: 250,
//           capacity: 1,
//           pets: false,
//           breakfast: false,
//           featured: false,
//           description:
//             "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
//           extras: [
//             "Plush pillows and breathable bed linens",
//             "Soft, oversized bath towels",
//             "Full-sized, pH-balanced toiletries",
//             "Complimentary refreshments",
//             "Adequate safety/security",
//             "Internet",
//             "Comfortable beds",
//           ],
//           images: [
//             {
//               fields: {
//                 file: {
//                   url: img2,
//                 },
//               },
//             },
//             {
//               fields: {
//                 file: {
//                   url: room2,
//                 },
//               },
//             },
//             {
//               fields: {
//                 file: {
//                   url: room3,
//                 },
//               },
//             },
//             {
//               fields: {
//                 file: {
//                   url: room4,
//                 },
//               },
//             },
//           ],
//         },
//       },
// ]
// firebase
//   .firestore()
//   .collection("resort-data")
//   .add({
//     data: [
      
//     ],
//   });

ref.push(d)