import { useLazyGetProfileQuery, useLoginMutation } from "@services/dataService";
import { useNavigate, useSearchParams } from "react-router-dom";
import { User } from "@models/business";
import { useDispatch } from "react-redux";
import { updateUser } from "@redux/slices/userSlice";

export const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [login, {isLoading}] = useLoginMutation();
  const [getProfile] = useLazyGetProfileQuery();

  const onSubmit = async (value: User) => {
    try {
      const {data} = await login(value);
      localStorage.setItem('token', data.access_token);
      const {data: user} = await getProfile();
      dispatch(updateUser(user));
      navigate(searchParams.get('return') ?? '/');
    } catch {
    }
  }

  return (
      <div>Login</div>
  )
}
