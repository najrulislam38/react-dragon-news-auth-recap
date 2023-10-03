// import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";

const NewsDetails = () => {
  //   const { id } = useParams();
  return (
    <div>
      <div className="my-10">
        <Header></Header>
        <Navbar></Navbar>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className="md:col-span-2 lg:col-span-3">
          <h2>News Details</h2>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
