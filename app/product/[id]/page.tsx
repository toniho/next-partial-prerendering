import { Suspense } from 'react';
import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from '#/components/recommended-products';
import { Reviews, ReviewsSkeleton } from '#/components/reviews';
import { SingleProduct } from '#/components/single-product';
import { Ping } from '#/components/ping';

export const experimental_ppr = true;

export default async function Page({ params }: { params: Promise<{ id: string }>}) {
  const id = (await params).id;

  return (
    <div className="space-y-8 lg:space-y-14">
      <SingleProduct id={Number(id)} />
      <h2 data-test-id="product-id">{id}</h2>

      <Ping />

      <Suspense fallback={<RecommendedProductsSkeleton />}>
        <RecommendedProducts />
      </Suspense>

      <Ping />

      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews />
      </Suspense>
    </div>
  );
}
