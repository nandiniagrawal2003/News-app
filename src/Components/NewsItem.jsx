import image from "../assets/default.jpg";
import { format } from 'date-fns';

const NewsItem = ({ title, description, src, url, publishedAt }) => {
  const formattedDate = publishedAt ? format(new Date(publishedAt), 'MMMM dd, yyyy') : 'Date not available';

  return (
    <div className="card mb-4 shadow-lg">
      <img
        src={src || image}
        style={{ height: "200px", objectFit: "cover" }}
        className="card-img-top"
        alt="News"
      />
      <div className="card-body">
        <h5 className="card-title">{title || "No Title Available"}</h5>
        {/* Only show description if it exists */}
        <p className="card-text">
          {description ? description : ''}
        </p>
        <p className="card-text text-muted">{formattedDate}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
