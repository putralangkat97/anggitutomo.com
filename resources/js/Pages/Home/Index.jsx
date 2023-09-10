import HomeLayout from '@/Layouts/HomeLayout';
import Jumbotron from './Partials/Jumbotron';
import Posts from './Partials/Posts';

const Index = ({ posts }) => {
  return (
    <>
      <Jumbotron />

      <div className="flex md:justify-center mx-auto mt-16 lg:mt-20 mb-4">
        <h1 className="text-zinc-950 text-2xl font-medium">
          My Recent Article
        </h1>
      </div>
      <hr className="mx-auto max-w-xl" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 lg:mt-10">
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

Index.layout = (page) => <HomeLayout children={page} />;

export default Index;
