function fetchData(url) {
    return new Promise((resolve, reject) => {
      fetch(url).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network response was not ok.");
          // console.log("error")
      }
    })
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
    });
}
export default function PostsData(){
    fetchData(`https://chimes-api-sanc005.vercel.app/api/v1/posts`).then(function(result){
          console.log("setting")
          console.log(result)
          setVal(result)
          // setVal(result)

          console.log("setted")
        }).then(() => {

          console.log(val)
          console.log("this is val")
        }
  )
}
