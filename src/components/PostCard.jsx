import React from "react";
import appwriteService from "../appwrite/config";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage, content }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="md:p-2 flex flex-col relative">
        <div className="rounded-xl overflow-hidden">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt="Blog Post"
          />
        </div>
        <h1 className="text-xl md:text-2xl font-medium mt-3">{title}</h1>
            <p
              className="text-slate-700 text-lg mt-3"
            >
              {parse(content)}
            </p>
            <button className="bg-blue-400  hover:bg-blue-300 text-blue-700 font-semibold py-2  rounded-lg focus:scale-95 transition-all duration-200 ease-out">
              View Post
            </button>
      </div>
    </Link>
  );
}

export default PostCard;
