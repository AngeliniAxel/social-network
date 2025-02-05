import UserPageContainerAsync from '@/app/components/users/UserPageContainerAsync';

const UserPage = async ({ params }: { params: { username: string } }) => {
  return <UserPageContainerAsync username={params.username} />;
};

export default UserPage;
