import { TourData } from "../../../Utils/Info";

const Card = () =>
  TourData.map((_, index) => (
    <article key={index} className="tour-card">
      <div className="tour-img-container">
        <img src={_.picture} className="tour-img" alt="" />
        <p className="tour-date">{_.date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{_.title}</h4>
        </div>
        <p>{_.text}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {_.country}
          </p>
          <p>{_.days}</p>
          <p>{_.price}</p>
        </div>
      </div>
    </article>
  ));

export default Card;
