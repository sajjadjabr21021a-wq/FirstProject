import "./Tagbutton.css";
export default function Buttum({ title, childern }) {
  return (
    <div>
      {title == null || title == "" ? (
        <div></div>
      ) : (
        <button className="tagbtn">
          {title}
          {childern}
        </button>
      )}
    </div>
  );
}
