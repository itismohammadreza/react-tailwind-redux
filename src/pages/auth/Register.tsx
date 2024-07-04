import { useRegisterMutation } from "@services/dataService";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [trigger, {isLoading}] = useRegisterMutation();
  const navigate = useNavigate();

  const onSubmit = async (value: any) => {
    try {
      await trigger(value);
      navigate('/');
    } catch {
    }
  }

  return (
      <div>Register</div>
  )
}
