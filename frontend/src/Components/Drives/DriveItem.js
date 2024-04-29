import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaRegBuilding,
  FaBriefcase,
  FaClipboardList,
  FaMoneyBillAlt,
  FaUserFriends,
  FaUserCheck,
  FaRegPaperPlane,
} from "react-icons/fa";
import { FcOrganization } from "react-icons/fc";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyProfile } from "../../redux/Actions/StudentAction";
import { motion } from "framer-motion";

const DriveItem = (props) => {
  const { Drive } = props;
  const { profile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const role = sessionStorage.getItem("role");
  const [applicationStatus, setApplicationStatus] = useState("");
  const navigate = useNavigate();


  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  
  };

  return (
    <div className="flex justify-center items-center ">


      <FcOrganization className="" size={50} />
      <motion.div
        className=" rounded-lg p-6 mb-4 flex flex-col gap-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="text-lime-300   text-xl text-center  font-normal self-center  pr-4 pl-4 p-1  hover:scale-[1.1] duration-200 "
          // variants={itemVariants}
        >

          {Drive.CompanyName}
        </motion.div>
        <motion.p
          className="text-white flex items-center"
          variants={itemVariants}
        >
          <FaBriefcase className="mr-2" />
          {Drive.JobTitle}
        </motion.p>
        <motion.p
          className="text-white flex items-center"
          variants={itemVariants}
        >
          <FaClipboardList className="mr-2" />
          {Drive.JobDescription}
        </motion.p>

        <motion.p
          className="text-white flex items-center"
          variants={itemVariants}
        >
          <FaUserFriends className="mr-2" />
          Expected Openings: {Drive.ExpectedOpening}
        </motion.p>

      </motion.div>
    </div>
  );
};

export default DriveItem;