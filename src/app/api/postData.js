
function postData(linkdata,url) {
    return new Promise((resolve, reject) => {
      fetch(url,{
        method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "id":linkdata?.id,
        "title": linkdata?.title,
        "img": linkdata?.img,
        "postTitle": linkdata?.postTitle,
        "link": linkdata?.link,
      })
    }
      )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log(linkdata?.url)
        console.log("post didnt add")
        // throw new Error("Post didnt happen.");
      }
    })
    .then((data) => {
      resolve(data);
    })
    // .then(()=> setCount((count) => (count+1)))
    .catch((error) => {
      reject(error);
    });
    });
}
function fetchData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log("error while fetching")
        throw new Error("Network response was not ok.");
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
  export {postData,fetchData}