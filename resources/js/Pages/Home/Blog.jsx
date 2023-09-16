import HomeLayout from '@/Layouts/HomeLayout';
import Posts from './Partials/Posts';

const Blog = ({ posts }) => {
  return (
    <>
      <div className="flex justify-start mx-auto mt-10 mb-4">
        <h1 className="text-zinc-950 text-2xl font-medium">Recent Articles</h1>
      </div>
      <hr className="text-left" />

      <div className="grid grid-cols-1 gap-8 mt-6 lg:mt-10">
        {posts.length > 0 &&
          posts.map((item, key) => (
            <div key={key}>
              <Posts
                title={item.title}
                content={item.content}
                slug={item.slug}
              />
            </div>
          ))}
      </div>
    </>
  );
};

Blog.layout = (page) => <HomeLayout children={page} head={'Blog'} />;

export default Blog;
