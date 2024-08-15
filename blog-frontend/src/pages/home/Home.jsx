import React from "react";
import Article from "../../components/article/Article.jsx";
import "./home.css";
import TagsBlock from "../../components/tagsBlock/TagsBlock.jsx";
import axios from "../../axios.js";
import { useDispatch } from "react-redux";
import { fetchArticle } from "../../redux/slices/article.js";
export default function Home() {
  const dispatch = useDispatch();
  React.useEffect(() => {
      dispatch(fetchArticle());
  }, []);

  return (
    <div className="container-home">
      <div className="tag">
        <TagsBlock tags={["react", "fun", "typescript"]}/>
      </div>
      <div className="article">
        <Article
          id={1}
          title="Roast the code #1 | Rock Paper Scissors"
          imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
          user={{
            avatarUrl:
              "https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png",
            fullName: "Keff",
          }}
          createdAt={"9 августа 2024 г."}
          viewsCount={150}
          commentsCount={3}
          tags={["react", "fun", "typescript"]}
          isLoading={true}
          isEditable={false}
        />
      </div>
      <div className="article">
        <Article
          id={1}
          title="Roast the code #1 | Rock Paper Scissors"
          imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
          user={{
            avatarUrl:
              "https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png",
            fullName: "Keff",
          }}
          createdAt={"9 августа 2024 г."}
          viewsCount={150}
          commentsCount={3}
          tags={["react", "fun", "typescript"]}
          isEditable={false}
        />
      </div>
      <div className="article">
        <Article
          id={1}
          title="Roast the code #1 | Rock Paper Scissors"
          imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
          user={{
            avatarUrl:
              "https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png",
            fullName: "Keff",
          }}
          createdAt={"9 августа 2024 г."}
          viewsCount={150}
          commentsCount={3}
          tags={["react", "fun", "typescript"]}
          isEditable={false}
        />
      </div>
    </div>
  );
}
