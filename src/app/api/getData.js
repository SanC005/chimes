import React from "react";

export default function getData(url) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((response) => {
        if (response.ok) {
          console.log("data is coming...");
          return response.json();
        } else {
          console.log("error");
        }
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => reject(error));
  });
  //   const url = `https://chimes-api.vercel.app/api/v1/posts`;
  // fetch(url)
  //   .then((response) => response.json())
  //   .then((data) => {
  //       console.log(data.posts)
  //       return data.posts;
  //   });
}
