import React from "react";
import appwriteService from "../appwrite/config";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage, content }) {
  return (
    <div className="md:p-2 flex flex-col relative">
      <Link to={`/post/${$id}`} className="block rounded-xl overflow-hidden">
        <img
          src={appwriteService.getFilePreview(featuredImage)}
          alt="Blog Post"
        />
      </Link>
      <h1 className="text-xl md:text-2xl font-medium mt-3">{title}</h1>
      <div className="text-slate-700 text-lg mt-3">{parse(content)}</div>
      <Link to={`/post/${$id}`} className="mt-3">
        <button className="bg-blue-400 hover:bg-blue-300 text-blue-700 font-semibold py-2 rounded-lg focus:scale-95 transition-all duration-200 ease-out">
          View Post
        </button>
      </Link>
    </div>
  );
}

export default PostCard;
