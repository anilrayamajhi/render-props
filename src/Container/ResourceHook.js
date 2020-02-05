import { useState, useEffect } from "react";

export function ResourceHook(props) {
  const [posts, setPosts] = useState([]),
    [loading, setLoading] = useState(true),
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
          setLoading(false);
        }
      } catch (e) {
        if (isCurrent) {
          setPosts([]);
        }
      }
    };

    getter(URL);
    return () => (isCurrent = false);
  }, [URL]);

  return render({ payload: posts, loading });
}
