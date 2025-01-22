import { UserType } from '@/app/types/user.types';
import { httpGetPublic } from '../common/http.service';
import { PageType } from '@/app/types/pagination.types';
import { MessageType } from '@/app/types/message.type';

class UserApi {
  getUserData = async (username: string): Promise<UserType> => httpGetPublic(`/users/${username}`);
  getUserMessages = async (username: string): Promise<PageType<MessageType>> =>
    httpGetPublic(`/users/${username}/messages`);

  getUserMessageReplies = async (username: string): Promise<PageType<MessageType>> =>
    httpGetPublic(`/users/${username}/messages/replies`);
}

const userApi = new UserApi();
export default userApi;
