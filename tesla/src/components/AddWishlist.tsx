"use client";
import { addToWishlist } from "@/app/products/[slug]/action";
import { ObjectId } from "mongodb";
import React from "react";
import { useRouter } from "next/navigation";

const AddWishlist = ({ productId }: { productId: ObjectId }) => {
  const router = useRouter();
  async function add(productId: ObjectId) {
    try {
      await addToWishlist(productId);
      router.push("/wishlists");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <button
        className="w-full py-3 bg-neutral-900 font-semibold text-[14px] border border-neutral-700 border-[0.1px] border-t-4"
        onClick={() => add(productId)}
      >
        add to wishlist
      </button>
    </div>
  );
};

export default AddWishlist;
