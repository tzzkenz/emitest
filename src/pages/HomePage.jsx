// HomePage.js
import Navbar from "../components/Navbar";
import PostList from "../components/home-page/PostList";
import CreatePostSidebar from "../components/home-page/CreatePostSidebar";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
            <div className="lg:w-1/4">
              <CreatePostSidebar />
            </div>
            <div className="lg:w-3/4">
              <PostList />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
