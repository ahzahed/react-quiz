import { useEffect, useState } from "react";
import { getDatabase, ref, query, orderByKey, get } from "firebase/database";

const useAnswers = (videoID) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchAnswers() {
      const db = getDatabase();
      const answerRef = ref(db, "answers/" + videoID + "/questions");
      const answerQuery = query(answerRef, orderByKey());
      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(answerQuery);
        setLoading(false);
        // console.log(snapshot.val());
        if (snapshot.exists()) {
          // setAnswers((oldValue) => {
          //   return [...oldValue, ...Object.values(snapshot.val())];
          // });
          setAnswers(snapshot.val());
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    fetchAnswers();
  }, [videoID]);

  return { loading, error, answers };
};

export default useAnswers;
