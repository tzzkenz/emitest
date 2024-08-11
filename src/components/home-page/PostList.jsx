import PostCard from "./PostCard";
import profile from "../../assets/logo.svg";

const PostList = () => {
  return (
    <div className="space-y-6 sm:space-y-8 md:space-y-10">
      {[1, 2, 3].map((index) => (
        <PostCard
          key={index}
          authorName="Santamonica"
          profilePicture={profile}
          timePosted="1w"
          heading="The Latest Trends in Web Development"
          shortContent="Explore the latest trends in web development with our comprehensive guide. Learn about new technologies and practices..."
          fullContent="Explore the latest trends in web development with our comprehensive guide. Learn about new technologies and practices, including the rise of serverless architectures, the importance of mobile-first design, and the integration of AI in development workflows. Stay ahead of the curve with insights from industry experts and practical tips for implementing these trends in your projects."
        />
      ))}
    </div>
  );
};

export default PostList;
