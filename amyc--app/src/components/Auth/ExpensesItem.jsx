import "../../styles/StatItem.css";

const ExpensesItem = ({ img, text, num, color }) => {
  return (
    <div className="item">
      {img}
      <div>{text}</div>
      <div style={{ marginLeft: "auto" }}>{num}</div>
    </div>
  );
};

export default ExpensesItem;
