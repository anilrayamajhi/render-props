import { useState, useEffect } from "react";

export function Resource(props) {
  const [posts, setPosts] = useState([]),
    [loading, setLoading] = useState(false),
    { URL, render } = props;

  useEffect(() => {
    let isCurrent = true;
    setLoading(true);

    const getter = async URL => {
      try {
        let response = await fetch(URL, {
          headers: {
            Accept: "application/json"
          },
          timeout: 2000
        });

        if (isCurrent) {
          let json = await response.json();
          setPosts(json);
        }
      } catch (e) {
        if (isCurrent) {
          setPosts([]);
        }
      }
    };

    getter(URL);
    setLoading(false);
    return () => (isCurrent = false);
  }, [posts, loading]);

  return render({ posts, loading });
}
