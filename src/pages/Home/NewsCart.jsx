import { Link } from "react-router-dom";
import PropType from "prop-types";

const NewsCart = ({ news }) => {
  const { _id, image_url, title, details } = news;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl mb-16">
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}{" "}
              <Link to={`/news/${_id}`} className="text-pink-800 link-hover">
                Read more......
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </div>
    </div>
  );
};

NewsCart.propTypes = {
  news: PropType.object,
};

export default NewsCart;
