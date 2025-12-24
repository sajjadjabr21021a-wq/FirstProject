import Buttum from "./buttum";
import "./Tagbutton.css";
export default function SideMENU() {
  const categories = [
    {
      id: 1,
      titile: "اخر المقالات",
      c: (
        <div>
          <span>😍😍</span>
        </div>
      ),
    },
    {
      id: 2,
      titile: "الاكثر قرائة",
      c: (
        <div>
          <img style={{ width: "100px" }} src="./phto.png" alt="img.png" />
        </div>
      ),
    },
    {
      id: 3,
      titile: "المميز",
      c: (
        <div>
          <h1>Click Me </h1>
          <span>👍👍</span>
        </div>
      ),
    },
  ];
  const categorieslist = categories.map((cat) => {
    return (
      <Buttum key={cat.id} title={cat.titile}>
        {cat.c}
      </Buttum>
    );
  });
  return (
    <div
      style={{ margin: "5px", border: "solid teal 5px", borderRadius: "16px" }}
    >
      {categorieslist}
    </div>
  );
}
