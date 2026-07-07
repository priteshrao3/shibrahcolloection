import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { StarRating } from "@/components/ui/StarRating";
import { Badge } from "@/components/ui/Badge";
import { WhatsAppEnquireButton } from "@/components/shop/WhatsAppEnquireButton";

export function ProductListItem({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group flex gap-4 overflow-hidden rounded-xl border border-neutral-200 bg-white p-3 transition-shadow hover:shadow-lg"
    >
      <div className="relative h-32 w-24 shrink-0 overflow-hidden rounded-lg bg-neutral-100 sm:h-40 sm:w-32">
        <Image src={product.images[0]} alt={product.name} fill sizes="128px" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col justify-center py-1">
        <Badge variant="maroon" className="mb-1.5 w-fit">{product.category}</Badge>
        <h3 className="font-medium text-navy-900 group-hover:text-maroon-600">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-neutral-500">{product.description}</p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <StarRating rating={product.rating} reviewCount={product.reviewCount} />
          <WhatsAppEnquireButton product={product} size="sm" />
        </div>
      </div>
    </Link>
  );
}
