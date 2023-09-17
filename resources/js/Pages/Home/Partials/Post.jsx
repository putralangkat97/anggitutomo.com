import moment from 'moment';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Post = ({ title, content, time, tag = null }) => {
  return (
    <div className="mt-4 prose max-w-none prose-pre:bg-white prose-code:bg-gray-100 prose-pre:p-0 prose-h2:text-zinc-900 prose-h6:text-zinc-900 prose-a:text-orange-500">
      <h1>{title}</h1>
      <time>{moment(time).format('LLL')}</time>
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={oneDark}
                PreTag="div"
                language={match[1]}
                children={String(children).replace(/\n$/, '')}
                {...props}
              />
            ) : (
              <code className={className ? className : ''} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default Post;
