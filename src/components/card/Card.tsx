import React, { lazy, useState } from "react";
import { useQuery } from "react-query";
import { pokemonDetailAPI } from "../../apis/api";
import { pokemonDetailState } from "../../store/pokemonStore";
import { useRecoilState, useRecoilValue } from "recoil";
import { IPokemonDetail } from "../../types/pokemonType";
import Skeleton from "../skeleton/Skeleton";
import KoreanName from "../common/koreanName/KoreanName";
import PokeTypes from "../common/types/PokeTypes";
import Modal from "../modal/Modal";
import { selectedState } from "../../store/selectedStore";

const Image = lazy(() => import("../common/image/Image"));

interface CardProps {
  name: string;
}

const Card = (props: CardProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [pokemon, setPokemon] = useRecoilState(pokemonDetailState);
  const selectedType = useRecoilValue(selectedState);

  useQuery(["pokemonDetail", props.name], () => pokemonDetailAPI(props.name), {
    onSuccess: (data) => {
      if (!!data) {
        setPokemon((prevPokemon) => ({
          ...prevPokemon,
          [props.name]: data ? data : undefined,
        }));
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const pokemonData: IPokemonDetail = pokemon[props.name];

  const onToggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  if (
    !pokemonData ||
    (selectedType && !pokemonData.types.includes(selectedType))
  ) {
    return null; // 필터링 조건에 맞지 않는 경우 카드를 렌더링하지 않음
  }

  return (
    <div className="mb-10 px-4 mx-1.5 border border-gray-400 pb-3 xs:w-full xs:px-1 dark:border-b dark:border-b-slate-600">
      <button onClick={onToggleModal}>
        <Image img={pokemonData.image} />
        <p className="flex flex-1 pl-4">No. {pokemonData.id}</p>
        <KoreanName korean={pokemonData.koreanName} />
        <PokeTypes types={pokemonData.types} />
      </button>
      {openModal && <Modal props={pokemonData} onToggleModal={onToggleModal} />}
    </div>
  );
};

export default React.memo(Card);
