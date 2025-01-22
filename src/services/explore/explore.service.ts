import { httpGetPublic } from '../common/http.service';
import { PageType } from '@/app/types/pagination.types';
import { TrendingHashtag } from '@/app/types/hash.types';
import { URLSearchParams } from 'url';

class ExploreApi {
  getTrendingHashtags = async (page: number, size: number): Promise<PageType<TrendingHashtag>> =>
    httpGetPublic(`/explore/trending`, new URLSearchParams({ page: `${page}`, size: `${size}` }));

  getFollowRecomendation = async (page: number, size: number): Promise<PageType<TrendingHashtag>> =>
    httpGetPublic(
      `/explore/follow-recommendations`,
      new URLSearchParams({ page: `${page}`, size: `${size}` })
    );
}

const exploreApi = new ExploreApi();
export default exploreApi;
