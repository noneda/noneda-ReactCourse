import { toast } from "react-toastify";

const Component = ({ alpha, rgb, type, weight, hex }) => {
  const handleSave = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Copied");
      } catch (error) {
        toast.error("Failed Copied");
      }
    } else {
      toast.error("Access not Available");
    }
  };

  return (
    <article
      style={{ backgroundColor: `rgb(${rgb})` }}
      className={`color ${type === "shade" ? `color-light` : `false`}`}
      onClick={handleSave}
    >
      <p className="percent-value">%{weight}</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};

export default Component;
