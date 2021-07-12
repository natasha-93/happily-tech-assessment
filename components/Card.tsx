import clsx from "clsx";
import Link from "next/link";
import Button from "./Button";

type CardProps = {
  image: string;
  title?: string;
  body?: string;
  ctaText: string;
  ctaUrl: string;
  center?: boolean;
};

const Card: React.FC<CardProps> = ({
  image,
  title,
  body,
  ctaText,
  ctaUrl,
  center,
}) => (
  <div>
    <img src={image} className="w-full rounded-xl" alt="placeholder image" />
    <div className="px-3">
      <h2
        className={clsx("text-xl font-bold pt-2", {
          "text-center": center,
        })}
      >
        {title}
      </h2>
      <p className="text-lg">{body}</p>
      <div className="flex justify-center mt-3">
        <Link href={ctaUrl}>
          <Button size="large">{ctaText}</Button>
        </Link>
      </div>
    </div>
  </div>
);

Card.defaultProps = {
  center: false,
};

export default Card;
