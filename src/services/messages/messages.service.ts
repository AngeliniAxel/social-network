import { MessageType } from '@/app/types/message.type';
import { PageType } from '@/app/types/pagination.types';
import httpInternalApi from '../common/http.internal.service';

class MessageApi {
  getMessageFeed = async (page: number, size: number): Promise<PageType<MessageType>> =>
    httpInternalApi.httpGetPublic(
      `/messages/feed`,
      new URLSearchParams({ page: `${page}`, size: `${size}` })
    );

  getMessage = async (id: string): Promise<MessageType> =>
    httpInternalApi.httpGetPublic(`/messages/${id}`);

  getMessageReplies = async (
    id: string,
    page: number,
    size: number
  ): Promise<PageType<MessageType>> =>
    httpInternalApi.httpGetPublic(
      `/messages/${id}/replies`,
      new URLSearchParams({ page: `${page}`, size: `${size}` })
    );

  postMessage = async (message: string, parentId?: string): Promise<MessageType> =>
    httpInternalApi.httpPost(`/messages`, { message: message, parentId: parentId ?? null });

  getMessagesByHash = async (
    hashtag: string,
    page: number,
    size: number
  ): Promise<PageType<MessageType>> =>
    httpInternalApi.httpGetPublic(
      `/messages/hash/${hashtag}`,
      new URLSearchParams({ page: `${page}`, size: `${size}` })
    );
}

const messageApi = new MessageApi();
export default messageApi;
