type RepliesCounterProps = {
  count: number;
  onClick?: () => void;
};

const RepliesCounter = ({ count, onClick }: RepliesCounterProps) => {
  if (count === 0) {
    return (
      <div className='link-primary' onClick={onClick}>
        Be the first one to reply
      </div>
    );
  }
  return (
    <div className='link-primary' onClick={onClick}>
      {count} {'replies'}
    </div>
  );
};

export default RepliesCounter;
