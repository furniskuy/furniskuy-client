import { FaSpinner } from "react-icons/fa";

export const Loading = () => {
  return (
    <div className="column" style={{ gap: 10, alignItems: "center" }}>
      <FaSpinner />
      Loading...
    </div>
  );
};
