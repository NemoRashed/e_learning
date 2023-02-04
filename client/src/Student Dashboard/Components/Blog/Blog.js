import User from "../Main dashboard/User";
import { Link } from "react-router-dom";
import { cardBlog } from "../../../constants";

function Blog() {
  return (
    <div className="flex flex-col pl-72 pr-20  md:pl-0 md:pr-0 ">
      <User name={"Latest Update"} />
      <div class="-my-8 divide-y-2 divide-gray-100">
        {cardBlog.map((blog) => (
          <div class="py-10 flex  justify-between md:flex-wrap my-10 px-10 md:my-5 md:px-5 ">
            <div class="w-80 md:w-full h-44 mb-6  md:mr-5 flex-shrink-0 flex flex-row justify-center items-center student-gradient rounded-lg">
              <img src={blog.img} className="w-32 h-32" />
              <div className="flex flex-col ml-5 text-white">
                <span class="font-semibold title-font text-xl">
                  {blog.category}
                </span>

                <span class="mt-1 text-gray-700 text-sm">{blog.date}</span>
              </div>
            </div>
            <div class="md:flex-grow ml-10 md:ml-0">
              <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                {blog.title}
              </h2>
              <p class="leading-relaxed">{blog.description}</p>
              <Link
                to="/Blog/DetailBlog"
                class="text-green-400 inline-flex items-center mt-4"
              >
                Learn More
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
