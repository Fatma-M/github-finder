import { useContext } from "react";
import Spinner from "../UI/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/github-context";

function UserResult() {
  const { users, loading } = useContext(GithubContext);

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      )}
    </>
  );
}

export default UserResult;
