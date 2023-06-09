import { ChangeEvent, FormEvent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

import { inputState } from "../../../store/inputStore";

// StartAndLegendPokemonSearchInput
const SALSearchInput = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FieldValues>({
  //   defaultValues: {
  //     name: "",
  //   },
  // });

  const [value, setValue] = useRecoilState(inputState);
  const navigate = useNavigate();

  // const onSubmit: SubmitHandler<FieldValues> = (data) => {
  //   setValue(data.name);
  //   navigate(`/pokemoninfo/name=${data.name}`);
  // };

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      navigate(`/pokemoninfo/name=${value}`);
    },
    [value, navigate]
  );

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [value, navigate]
  );

  return (
    <form className="flex lg:w-1/6 ml-5 lg:ml-0" onSubmit={onSubmit}>
      <input
        className="border-spacing-1 border-2 rounded-md dark:text-black pl-1"
        type="text"
        // {...register("name")}
        placeholder="스타팅 & 전설의 포켓몬"
        value={value}
        onChange={onChange}
      />
      <button className="hidden" type="submit"></button>
    </form>
  );
};

export default SALSearchInput;
