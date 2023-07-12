import React from "react";
import Text from "../../../Components/CommonText/Text";
import idea from "../../../assets/photo-1655721529468-d0d81b2dc489.jpeg";
import life from "../../../assets/photo-1557704595-ecd34dc3a4b9.jpeg";
import design from "../../../assets/photo-1611486212557-88be5ff6f941.jpeg";
import h from "../../../assets/photo-1657299170129-858a7f31a794.jpeg";
import Interior from "../../../assets/photo-1631679706909-1844bbd07221.jpeg";
import Eco from "../../../assets/vonvix-mYc0ivMNvCI-unsplash.jpg";
import Review from "../../../assets/photo-1627463869605-48fbcda8253b.jpeg";

const Tag = () => {
  return (
    <div className="my_container">
      <Text text="POPULAR TAGS"></Text>
      <div className="lg:flex grid grid-cols-2  gap-2">
        <div>
          <img src={idea} className="w-[180px] h-[126px] rounded-lg" />
          <strong className="ms-2 rounded-xl font-semibold h-[25px] bg-white relative bottom-10  px-2 py-1">
            Idea
          </strong>
        </div>{" "}
        <div>
          <img src={life} className="w-[180px] h-[126px] rounded-lg" />
          <strong className="ms-2 rounded-xl font-semibold h-[25px] bg-white relative bottom-10  py-1 px-2">
            Lifestyle
          </strong>
        </div>{" "}
        <div>
          <img src={design} className="w-[180px] h-[126px] rounded-lg" />
          <strong className="ms-2 rounded-xl font-semibold h-[25px] bg-white relative bottom-10 py-1  px-2">
            Design
          </strong>
        </div>{" "}
        <div>
          <img src={h} className="w-[180px] h-[126px] rounded-lg" />
          <strong className="ms-2 rounded-xl font-semibold h-[25px] bg-white relative bottom-10 py-1  px-2">
            Health
          </strong>
        </div>
        <div>
          <img src={Interior} className="w-[180px] h-[126px] rounded-lg" />
          <strong className="ms-2 rounded-xl font-semibold h-[25px] bg-white relative bottom-10 py-1  px-2">
            Interior
          </strong>
        </div>  <div>
          <img src={Eco} className="w-[180px] h-[126px] rounded-lg" />
          <strong className="ms-2 rounded-xl font-semibold h-[25px] bg-white relative bottom-10 py-1  px-2">
           Eco
          </strong>
        </div> <div>
          <img src={Review} className="w-[180px] h-[126px] rounded-lg" />
          <strong className="ms-2 rounded-xl font-semibold h-[25px] bg-white relative bottom-10 py-1  px-2">
          Review
          </strong>
        </div>
      </div>
    </div>
  );
};

export default Tag;
