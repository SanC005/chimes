function postData(item, url,token) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        temp_id: item?.temp_id,
        title: item?.title,
        img: item?.img,
        postTitle: item?.postTitle,
        link: item?.link,
        visibility: item?.visibility,
        bookmark: item?.bookmark,
        liked:item?.liked,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log(item?.url);
          console.log("post didnt add");
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
function postUser(item, url) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        item
      ),
    })
      .then((response) => {
        if (response.ok) {
          console.log("success")
          return response.json();
        } else {
          console.log(JSON.stringify(item));
          console.log("user didnt add");
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
          console.log("error while fetching");
          throw new Error("error while fetching the data.");
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
export { postData, fetchData,postUser };
