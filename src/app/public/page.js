import Profile from "components/profile/profile";
import Feedgrid from "components/public_feed/feedgrid";
import { postDatas } from "components/public_feed/postdata";

export default function Public() {
  return (
    <div>
      <Profile />
      <Feedgrid data={postDatas} />
    </div>
  );
}
