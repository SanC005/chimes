// async function getData() {
//     const response = await fetch('http://reddit.com/r/popular.json?limit=10');

//     if (!response.ok) {
//       const message = `An error has occured: ${response.status}`;
//       throw new Error(message);
//     }

//     const data = await response.json();
//     return data;
//   }
//   export default async function Postingdata(){
//         const items = await getData();
//         console.log(items);
//         // const boxes = items.map(item => {
//         //     <div key={item.id}>{item.id}</div>
//         // })
//         return(
//                 <div>
//                     {/* {boxes} */}
//                     click
//                 </div>
//         )
//   }
