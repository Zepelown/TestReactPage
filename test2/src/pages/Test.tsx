import { useParams } from "react-router-dom";

const Test = () => {
    const {id} = useParams();
    return <div>���� ��ġ "/test/{id}"</div>;
  };
  
  export default Test;
  