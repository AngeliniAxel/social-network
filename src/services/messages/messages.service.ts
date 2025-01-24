import { MessageType } from '@/app/types/message.type';
import { PageType } from '@/app/types/pagination.types';
import { httpGetPublic } from '../common/http.service';

class MessageApi {
  getMessageFeed = async (page: number, size: number): Promise<PageType<MessageType>> =>
    httpGetPublic(`/messages/feed`, new URLSearchParams({ page: `${page}`, size: `${size}` }));
}

const messageApi = new MessageApi();
export default messageApi;
