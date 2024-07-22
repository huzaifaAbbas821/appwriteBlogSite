import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import bg from "../assets/Backgroung.svg";
import { useNavigate } from "react-router-dom";
import { Link, Element } from "react-scroll";

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
    <div className="max-w-screen md:py-8 text-center bg-[#DDD0C8] text-[#323232] md:px-[4vw]">
      <Container>
        <div className="flex  flex-col-reverse md:flex-row  w-full ">
          <div className=" flex flex-col w-full md:w-[50%] md:-mt-[4vw]  gap-[2vw] items-center justify-center md:items-start lg:justify-start">
            <h1 className=" text-3xl md:text-[5vw] lg:text-[4vw] md:text-start text-center  font-bold font-sans lg:mt-[6vw] text-gray-950 leading-none">
              Discover Your Next Adventure Here{" "}
            </h1>
            <p className=" text-center text-lg px-3 md:px-0 md:text-start mt-4 md:mt-0  font-semibold md:text-xl md:w-[90%] lg:w-[80%]">
              Welcome to our blog, your gateway to exciting adventures. Discover
              inspiring stories, helpful tips, and hidden gems. Join our
              community of passionate explorers and embark on unforgettable
              journeys!
            </p>
            {posts.length === 0 ? (
              <button
                onClick={() => navigate("/login")}
                className=" text-lg px-3 py-1 my-4 md:my-0  md:px-[0.6em] md:py-[0.4em]  md:text-[1.4vw] bg-[#323232] text-[#fff] rounded-lg hover:cursor-pointer"
              >
                Login to View Posts
              </button>
            ) : (
              <Link
                to="posts"
                smooth={true}
                duration={500}
                className="text-lg px-3 py-1 my-4 md:my-0 md:px-[0.6em] md:py-[0.4em] md:text-[1.4vw] bg-[#323232] text-[#fff] rounded-lg hover:cursor-pointer"
              >
                Your Posts
              </Link>
            )}
          </div>
          <div className=" md:w-[50%] w-full max-h-[10%] md:max-h-[75vh] lg:max-h-[85vh] flex items-center justify-center bg-cover overflow-hidden">
            <img
              src={bg}
              className=" mix-blend-multiply h-[50vh] min-w-full md:h-auto md:w-full lg:w-[80%] lg:mb-[4vw] "
              alt=""
            />
          </div>
        </div>
        {posts.length === 0 ? (
          <></>
        ) : (
          <Element name="posts">
            <div className="flex  justify-center items-center min-h-screen mx-auto container mb-20 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
                {posts.map((post) => (
                  <div
                    key={post.$id}
                    className="rounded-xl shadow-lg bg-slate-200 border-slate-400 border-[1px] "
                  >
                    <PostCard {...post} />
                  </div>
                ))}
              </div>
            </div>
          </Element>
        )}
      </Container>
    </div>
  );
}

export default Home;
