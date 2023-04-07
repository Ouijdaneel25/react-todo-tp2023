import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const { n } = useParams();
  const { c } = useParams();

  console.log(id);
  console.log(n);
  console.log(c);

  return (
    <>
  <center>
    <div>
      <br />
      <br />
        <h1 style={{ color: "white" }}>Detail</h1>
        <br />
      <br />
        <h4 style={{ color: "white" }}>ID :   {id}</h4>
        <h4 style={{ color: "white" }}>Todo :   {n}</h4>
        <h4 style={{ color: "white" }}>Completed :   {c}</h4>
      </div>
  </center>
    
    </>
      
  );
}

export default Detail;
