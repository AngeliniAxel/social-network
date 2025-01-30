import { MessageType } from '@/app/types/message.type';
import { PageType } from '@/app/types/pagination.types';
import { UserType } from '@/app/types/user.types';
import httpInternalApi from '../common/http.internal.service';

class UserApi {
  getUserData = async (username: string): Promise<UserType> =>
    httpInternalApi.httpGetPublic(`/users/${username}`);
  getUserMessages = async (username: string): Promise<PageType<MessageType>> =>
    httpInternalApi.httpGetPublic(`/users/${username}/messages`);

  getUserMessageReplies = async (username: string): Promise<PageType<MessageType>> =>
    httpInternalApi.httpGetPublic(`/users/${username}/messages/replies`);
}

const userApi = new UserApi();
export default userApi;
