import { useNavigate } from "react-router";
import CustomButton from "../components/shared/customButton";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <h1 className="text-8xl font-[LobsterTwo]">Reporter</h1>
      <CustomButton
        title={"Start"}
        className="bg-transparent border-black text-3xl text-black font-[LobsterTwo]
                  transition duration-300 ease-in-out
                hover:bg-black hover:text-white hover:-translate-y-1"
        onClick={() => navigate("/form")}
      />
    </div>
  );
}
