export default function Post({ postName, postBody }) {
  return (
    <div>
      {(postBody == null && postName == null) ||
      (postBody == "" && postName == "") ? (
        <div></div>
      ) : (
        <div
          style={{
            padding: "10px",
            border: "solid teal 5px",
            margin: "10px",
            boxShadow: "0px 10px 10px gray",
            borderRadius: "16px",
          }}
        >
          <h1>{postName}</h1>
          <hr />
          <h2>{postBody}</h2>
        </div>
      )}
    </div>
  );
}
