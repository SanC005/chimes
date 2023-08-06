function fetchData(url) {
    return new Promise((resolve, reject) => {
      fetch(url).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        // throw new Error("Network response was not ok.");
          console.log("error")
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
export default function PostsDataDB(url){
  console.log(url)
    fetchData(url).then(function(result){
          console.log("setting")
          console.log(result)
          console.log("setted")
        }).then((res) =>{

          return res
        })
}
