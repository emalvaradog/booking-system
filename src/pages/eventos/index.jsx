import { startUserLogout } from "@/store/auth/authThunks";
import { AuthAction, withAuthUser, withAuthUserSSR } from "next-firebase-auth";
import { useDispatch } from "react-redux";

export function Index() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(startUserLogout());
  }

  return (
    <div>
      <h1>EVENTOS</h1>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}

export const getServerSideProps = withAuthUserSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
  whenAuthed: AuthAction.RENDER,
})();

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  whenUnauthedBeforeInit: AuthAction.REDIRECT_TO_LOGIN,
})(Index);
