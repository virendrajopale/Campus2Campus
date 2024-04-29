import { useSelector } from "react-redux";

const PlacementStatus = ({ profile }) => {
    return (
      <div className="profile_item bg-gray-400/30 rounded-lg p-4 hover:scale-[1.01] duration-500 cursor-pointer">
        <div className="btn_cnt">
          <h3 className="text-xl font-bold">Placement Status</h3>
          <p className="text-lg"> <span className={`${profile.placed ? "text-green-500" : "text-red-500"}`}>{profile.placed ? "Placed" : "Unplaced"}</span></p>
        </div>
        <div className="profile_cnt" id="experience">
          {profile.placed && (
            <div className="Item mt-4">
              <div className='head_cnt'>
                <h5 className="text-lg font-semibold">Placed Companies</h5>
              </div>
              {profile.className && profile.CompanyName.map((ele, index) => (
                <div key={index} className="mt-2 flex items-center">
                  <p className="text-lg">Company: <span className="text-blue-500">{ele}</span></p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default PlacementStatus;
  