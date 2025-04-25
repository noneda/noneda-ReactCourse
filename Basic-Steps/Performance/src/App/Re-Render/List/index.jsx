import { hookPerson } from "./hook";
import PersonRr from "./Person";

const ListRr = () => {
  const show = hookPerson();
  console.log("Render");

  return (
    <div>
      {show.map((_) => (
        <PersonRr key={_.id} {..._} />
      ))}
    </div>
  );
};

export default ListRr;
