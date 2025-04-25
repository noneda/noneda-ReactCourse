import { memo } from "react";
const SlowerItem = ({ children }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        marginTop: "2rem",
      }}
    >
      {children}
    </div>
  );
};

export default memo(SlowerItem);
