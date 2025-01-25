import { TrendingHashtag } from '@/app/types/hash.types';
import { PageType } from '@/app/types/pagination.types';
import { TrendingUserType } from '@/app/types/user.types';
import { httpGetPublic } from '../common/http.service';

class ExploreApi {
  getTrendingHashtags = async (page: number, size: number): Promise<PageType<TrendingHashtag>> =>
    httpGetPublic(`/explore/trending`, new URLSearchParams({ page: `${page}`, size: `${size}` }));

  getFollowRecomendation = async (
    page: number,
    size: number
  ): Promise<PageType<TrendingUserType>> =>
    httpGetPublic(
      `/explore/follow-recommendations`,
      new URLSearchParams({ page: `${page}`, size: `${size}` })
    );
}

const exploreApi = new ExploreApi();
export default exploreApi;
