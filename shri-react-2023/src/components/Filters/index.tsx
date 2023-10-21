"use client";

import Selector from "../Selector";
import Input from "../Input";
import "./styles/filters.scss";

export default function Filters({
  inputOnChange,
  genreOnChange,
  genreOptions,
  cinemaOnChange,
  cinemaOptions,
}: {
  inputOnChange: (value: string) => void;
  genreOnChange: (value: string) => void;
  cinemaOnChange: (value: string) => void;
  genreOptions: {
    id?: string;
    name: string;
  }[];
  cinemaOptions: {
    id?: string;
    name: string;
  }[];
}) {
  return (
    <div className="filters">
      <h2 className="filters__head">Фильтр поиска</h2>
      <Input placeholder="Введите название" onChange={inputOnChange} label="Название" />
      <Selector
        label="Жанр"
        defaultText="Выберите жанр"
        options={genreOptions}
        onChange={genreOnChange}
      />
      <Selector
        label="Кинотеатр"
        defaultText="Выберите кинотеатр"
        options={cinemaOptions}
        onChange={cinemaOnChange}
      />
    </div>
  );
}
