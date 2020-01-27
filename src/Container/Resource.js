import React, { useState, useEffect } from "react";

export function Resource(props) {
  const [posts, setPosts] = useState([]),
    { URL } = props;

  useEffect(() => {
    let isCurrent = true;

    const getter = async () => {
      try {
        let response = await fetch(URL, {
          headers: {
            Accept: "application/json"
          },
          timeout: 2000
        });

        if (isCurrent) {
          console.log(response);
          response.json();
        }
      } catch (e) {
        if (isCurrent) {
          return { type: "ERROR" };
        }
      }
    };

    getter();
    return () => (isCurrent = false);
  }, [posts]);

  return posts;
}
