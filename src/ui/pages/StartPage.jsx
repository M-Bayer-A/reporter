import { useNavigate } from "react-router";
import CustomButton from "../components/shared/CustomButton";
import { customIcons, getIcon } from "../../helpers/iconHelper";
import CustomIconButton from "../components/shared/CustomIconButton";

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col gap-10 p-10">
      <div className="flex flex-col justify-center items-center gap-5 font-[LobsterTwo] grow">
        <h1 className="text-8xl ">Reporter</h1>
        <p>Write your report with easy way</p>
        <CustomButton
          title={"Start"}
          className="bg-transparent border-black text-3xl text-black
                hover:bg-black hover:text-white hover:-translate-y-1"
          onClick={() => navigate("/form")}
        />
      </div>
      <div className="flex flex-col items-center gap-2 font-[Cairo]">
        <p>By: Mohammad Bayer Al-Ali</p>
        <div className="flex flex-row gap-4">
          <CustomIconButton
            className={"w-12"}
            icon={getIcon(customIcons.telegram)}
            onClick={() =>
              window.open("https://t.me/Mohammad_Bayer_AlAli", "_blank")
            }
          />
          <CustomIconButton
            className={"w-12"}
            icon={getIcon(customIcons.github)}
            onClick={() =>
              window.open("https://github.com/M-Bayer-A", "_blank")
            }
          />
        </div>
      </div>
    </div>
  );
}
