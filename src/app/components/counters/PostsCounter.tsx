type PostCounterProps = {
  count: number;
};

const PostsCounter = ({ count }: PostCounterProps) => {
  const label = count > 1 ? 'posts' : 'post';
  return (
    <div>
      {count} {label}
    </div>
  );
};

export default PostsCounter;
