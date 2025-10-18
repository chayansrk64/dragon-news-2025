import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    tags,
  } = news;

  const date = new Date(author.published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="card w-full bg-base-100 shadow-md hover:shadow-lg transition-all duration-300 ">
      <div className="flex items-center justify-between bg-base-200 gap-3 px-4 pt-4">
        <div className="flex gap-2 items-center">
            <div className="avatar">
          <div className="w-10 rounded-full">
            <img src={author.img} alt={author.name} />
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-sm">{author.name}</h2>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
        </div>
        <div className="flex gap-2">
        <CiBookmark />
        <CiShare2 />
        </div>
      </div>

      <div className="card-body pt-2">
        <h2 className="card-title text-lg font-bold leading-snug">
          {title}
        </h2>

        <figure className="mt-2">
          <img
            src={thumbnail_url}
            alt={title}
            className="w-full h-48 object-cover rounded-lg"
          />
        </figure>

        <div className="mt-3 text-sm text-gray-600 leading-relaxed">
          {details.length > 180
            ? `${details.slice(0, 180)}...`
            : details}
          {details.length > 180 && (
            <span className="text-primary font-semibold cursor-pointer hover:underline ml-1">
              Read More
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="badge badge-outline badge-sm text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="divider my-2"></div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-warning">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar key={i} className={i < rating.number ? "" : "text-gray-300"} />
            ))}
            <span className="ml-1 text-sm font-medium text-gray-600">
              {rating.number}
            </span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <FaEye />
            <span className="text-sm">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
