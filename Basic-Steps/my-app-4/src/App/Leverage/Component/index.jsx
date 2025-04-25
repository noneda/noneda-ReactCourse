import avatar from "../../../Assets/default-avatar.svg";

const Component = (props) => {
  const { name, images, nickName = "Developer" } = props;

  const img = images?.[0]?.small?.url ?? avatar;
  return (
    <div>
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h4>{name} </h4>
      <p>Nickname : {nickName}</p>
    </div>
  );
};

export default Component;
