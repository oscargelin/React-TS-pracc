import style from "../styles/Card.module.scss";
interface Props {
  id: number;
  title: string;
  description: string;
  price: number;
  coverImg: string;
  stats: {
    rating: number;
    reviewCount: number;
  };
  location: string;
  openSpots: number;
}

const Card = (props: Props) => {
  let badgeText: string = "";
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  if (badgeText) console.log(badgeText);
  return (
    <div>
      <div>
        {badgeText && <div className={style.openSpots}>{badgeText}</div>}
        <p>{props.id}</p>
        <p>{props.title}</p>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <p>{props.coverImg}</p>
      </div>
      <div className="stats">
        <p>{props.stats.rating}</p>
        <p>{props.stats.reviewCount}</p>
      </div>
      <div>
        <p>{props.location}</p>
        <p>{props.openSpots}</p>
      </div>
    </div>
  );
};
export default Card;
