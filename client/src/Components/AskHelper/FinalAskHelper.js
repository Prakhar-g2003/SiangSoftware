import { useEffect, useState } from "react";
import AskHelperMain from "./AskHelperMain";

const Doubts = [
  {
    username: "Siddharth Kashyap",
    discription:
      "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.",
    comments: ["good", "Bad", "mid"],
  },
  {
    username: "Siddharth Kashyap",
    discription:
      "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.",
    comments: ["good", "Bad", "mid"],
  },
  {
    username: "Siddharth Kashyap",
    discription:
      "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.",
    comments: ["good", "Bad", "mid"],
  },
  {
    username: "Siddharth Kashyap",
    discription:
      "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.",
    comments: ["good", "Bad", "mid"],
  },
];
const FinalAskHelperMain = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchFeed = async(req, res) => {
      try{
        var responses = await fetch('http://localhost:3001/api/full-feed', {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });
        responses = await responses.json();
        
        setData(responses);
        setLoading(false);
      } catch(error){
        console.log(error);
      }
    }

    fetchFeed();
  }, []);

  if(loading){
    return (
      <div>
        loading...
      </div>
    )
  }
  return <AskHelperMain data={data} setData={setData} />;
};

export default FinalAskHelperMain;
