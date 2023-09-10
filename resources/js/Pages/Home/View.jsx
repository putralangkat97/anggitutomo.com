import HomeLayout from '@/Layouts/HomeLayout';
import Post from './Partials/Post';

const View = ({ post }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 mt-6 lg:mt-10 mb-20">
        {post && (
          <Post
            title={post.title}
            content={post.content}
            time={post.updated_at}
          />
        )}
      </div>
    </>
  );
};

View.layout = (page) => <HomeLayout children={page} head={'post title'} />;

export default View;
