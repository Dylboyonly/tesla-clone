type CardProduct = {
  name: string;
  thumbnail: string;
  price: number;
  slug: string;
};

export default function CardPage({
  name,
  thumbnail,
  price,
  slug,
}: CardProduct) {
  return (
    <div className="h-[38rem] w-[26rem]">
      <figure className="w-full h-[70%]">
        <img className="w-full h-full object-cover" src={thumbnail} />
      </figure>
      <div className="w-full h-[30%]">
        <span className="text-[15px] text-neutral-200">{name}</span>
        <p className="text-[13px] text-neutral-200 mt-1">${price}</p>
      </div>
    </div>
  );
}
