import { UserType } from '@/app/types/user.types';
import { httpGet } from '../common/http.service';
import { PageType } from '@/app/types/pagination.types';
import { MessageType } from '@/app/types/message.type';

class UserApi {
  getUserData = async (username: string): Promise<UserType> => httpGet(`/users/${username}`);
  getUserMessages = async (username: string): Promise<PageType<MessageType>> =>
    httpGet(`/users/${username}/messages`);

  getUserMessageReplies = async (username: string): Promise<PageType<MessageType>> =>
    httpGet(`/users/${username}/messages/replies`);
}

const userApi = new UserApi();
export default userApi;
