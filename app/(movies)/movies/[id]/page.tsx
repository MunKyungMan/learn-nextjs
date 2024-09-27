// 영화 상세페이지

import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../Components/movie-info";
import MovieVideos from "../../../../Components/movie-videos";
import { title } from "process";

interface IParams {
  params: { id: string };
}

// 페이지 제목 관련 코드
export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
