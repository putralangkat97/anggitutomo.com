import moment from 'moment';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const Post = ({ title, content, time, tag = null }) => {
  return (
    <div className="mt-4 prose max-w-none prose-h2:text-zinc-900 prose-h6:text-zinc-900 prose-a:text-orange-500">
      <h1>{title}</h1>
      <time>{moment(time).format('LLL')}</time>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Post;
