import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div class="max-w-3xl mx-auto px-4 py-4 bg-slate-100 relative">
        {isAuthor && (
          <div className="absolute right-6 top-6">
            <Link to={`/edit-post/${post.$id}`}>
              <Button bgColor="bg-green-500" className="mr-3">
                Edit
              </Button>
            </Link>
            <Button bgColor="bg-red-500" onClick={deletePost}>
              Delete
            </Button>
          </div>
        )}
        <div class="py-8 ">
          <h1 class="text-3xl font-bold mb-2">{post.title}</h1>
        </div>
        <img
          src={appwriteService.getFilePreview(post.featuredImage)}
          alt="Featured image"
          class="w-full h-auto mb-8"
        />
        <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
          {parse(post.content)}
        </div>
      </div>
    </div>
  ) : null;
}

// <div className="py-8 w-full flex flex-col justify-center items-center">
//         <div className="w-[50%] bg-contain flex flex-col justify-center mb-4 relative border rounded-xl p-2">
//             <img
//                 src={appwriteService.getFilePreview(post.featuredImage)}
//                 alt={post.title}
//                 className="rounded-xl"
//             />

//             {isAuthor && (
//                 <div className="absolute right-6 top-6">
//                     <Link to={`/edit-post/${post.$id}`}>
//                         <Button bgColor="bg-green-500" className="mr-3">
//                             Edit
//                         </Button>
//                     </Link>
//                     <Button bgColor="bg-red-500" onClick={deletePost}>
//                         Delete
//                     </Button>
//                 </div>
//             )}
//         </div>
//         <div className="w-full mb-6 flex items-center justify-center">
//             <h1 className="text-2xl font-bold">{post.title}</h1>
//         </div>
//         <div className="browser-css">
//             {parse(post.content)}
//             </div>
// </div>
