import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoverPhoto from "./CoverPhoto";
import ProfileDetail from "./ProfileDetail";
import axios from "../../config/axios";
import Spinner from "../common/Spinner";

function ProfileContainer() {
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/users/" + id);
        //  console.log(res);
        setUserProfile(res.data.user);
        // console.log(res);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, [id]);
  if (loading) return <Spinner />;
  // console.log(userProfile);

  return (
    <div className="border border-2 shadow-sm pb-2">
      <CoverPhoto src={userProfile.CoverPhoto} />
      <ProfileDetail userProfile={userProfile} />
    </div>
  );
}

export default ProfileContainer;
