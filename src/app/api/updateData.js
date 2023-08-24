export default function UpdateData(item, url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            console.log("post didnt update");
            console.log(item)
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