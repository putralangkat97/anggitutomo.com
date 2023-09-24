import HomeLayout from "@/Layouts/HomeLayout";
import Posts from "./Partials/Posts";

const PostTag = ({ post_tag, tag }) => {
  return (
    <>
      <div className="flex justify-start mx-auto mt-10 mb-4">
        <h1 className="text-zinc-950 text-2xl font-medium">{`${tag} Post`}</h1>
      </div>
      <hr className="text-left" />

      <div className="grid grid-cols-1 gap-8 mt-6 lg:mt-10">
        {post_tag.length > 0 &&
          post_tag.map((item, key) => (
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

PostTag.layout = (page) => <HomeLayout children={page} head={'Blog'} />;

export default PostTag;
