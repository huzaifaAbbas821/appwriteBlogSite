import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import bg from "../assets/Backgroung.svg";
import { useNavigate } from "react-router-dom";
import {Link , Element} from "react-scroll";

function Home() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="max-w-screen py-8 text-center bg-[#DDD0C8] text-[#323232] px-[4vw]">
      <Container>
        <div className="flex h-[82vh] w-full  ">
          <div className=" flex flex-col w-[50%] gap-[2vw] items-start justify-start">
            <h1 className="text-[4vw] text-start font-bold font-sans lg:mt-[6vw] text-gray-950 leading-none">
              Discover Your Next Adventure Here{" "}
            </h1>
            <p className="text-start  font-semibold text-[1.3vw] w-[80%]">
              Welcome to our blog, your gateway to exciting adventures. Discover
              inspiring stories, helpful tips, and hidden gems. Join our
              community of passionate explorers and embark on unforgettable
              journeys!
            </p>
            {
                posts.length === 0 ? (
            <button
              onClick={() => navigate("/login")}
              className="px-[0.6em] py-[0.4em] text-[1.4vw] bg-[#323232] text-[#fff] rounded-lg hover:cursor-pointer"
            >
              Login to View Posts
            </button>

                ) :(<Link to="posts" smooth={true} duration={500}
                  className="px-[0.6em] py-[0.4em] text-[1.4vw] bg-[#323232] text-[#fff] rounded-lg hover:cursor-pointer"
                >
                  Your Posts
                </Link>) 
              }
          </div>
          <div className=" w-[50%] flex items-center justify-center bg-cover">
            <img
              src={bg}
              className="bg-cover mix-blend-multiply w-[80%] lg:mb-[4vw] "
              alt=""
            />
          </div>
        </div>
        {posts.length === 0 ? (
          <></>
        ) : (
          <Element name="posts">
          <div className="w-full" id="posts">
            <Container>
              <div className="flex flex-wrap">
                {posts.map((post) => (
                  <div key={post.$id} className="p-2 w-1/4">
                    <PostCard {...post} />
                  </div>
                ))}
              </div>
            </Container>
          </div>
          </Element>
        )}
      </Container>
    </div>
  );
}

export default Home;
