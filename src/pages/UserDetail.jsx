import React from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { userId } = useParams();

  return <div>userDetail Id: {userId}</div>;
};

export default UserDetail;
