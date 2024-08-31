"use client";
import { deleteWishlistByProductId } from "@/app/wishlists/action";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const DeleteWishlist = ({ productId }: { productId: string }) => {
  async function del(productId: string) {
    try {
      await deleteWishlistByProductId(productId);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <button
        className="bg-neutral-600 mt-6 px-4 py-3 rounded-md"
        onClick={() => del(productId)}
      >
        Delete wislist
      </button>
    </div>
  );
};

export default DeleteWishlist;
