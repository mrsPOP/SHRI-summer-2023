'use client';

import React, { useCallback, useContext, useState, ReactNode } from 'react';
import './styles/accordion.scss';

const MenuContext = React.createContext<{
  activeGroup: string | undefined;
  switchGroup: (title: string) => void;
}>({ activeGroup: undefined, switchGroup: () => {} });

const MenuAccordion = ({ children }: { children: ReactNode }) => {
  const [activeGroup, setActiveGroup] = useState<string | undefined>(undefined);

  const switchGroup = useCallback((title: string) => {
    setActiveGroup((activeTitle) =>
      activeTitle === title ? undefined : title
    );
  }, []);

  return (
    <MenuContext.Provider value={{ activeGroup, switchGroup }}>
      {children}
    </MenuContext.Provider>
  );
};

MenuAccordion.Label = function MenuItem({ title }: { title: string }) {
  return (
    <article className='accordion__card accordion__card_wrap_label'>
      <h3 className='accordion__label'>{title}</h3>
    </article>
  );
};

MenuAccordion.Question = function MenuGroup({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const { activeGroup, switchGroup } = useContext(MenuContext);
  return (
    <article
      className='accordion__card accordion__card_wrap_question'
      onClick={() => switchGroup(question)}
    >
      <h3 className='accordion__question'>{question}</h3>

      <svg
        className={'accordion__arrow' + (activeGroup === question ? ' ' + 'accordion__arrow_active' : '')}
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 29.3334H19C26.24 29.3334 29.3333 26.2401 29.3333 19.0001V11.0001C29.3333 3.76008 26.24 0.666748 19 0.666748H11C3.76001 0.666748 0.666672 3.76008 0.666672 11.0001V19.0001C0.666672 26.2401 3.76001 29.3334 11 29.3334ZM2.66667 11.0001C2.66667 4.85341 4.85334 2.66675 11 2.66675H19C25.1467 2.66675 27.3333 4.85341 27.3333 11.0001V19.0001C27.3333 25.1467 25.1467 27.3334 19 27.3334H11C4.85334 27.3334 2.66667 25.1467 2.66667 19.0001V11.0001ZM14.2933 18.5868C14.4933 18.7868 14.7467 18.8801 15 18.8801C15.2533 18.8801 15.5067 18.7868 15.7067 18.5868L20.4133 13.8801C20.8 13.4934 20.8 12.8534 20.4133 12.4668C20.0267 12.0801 19.3867 12.0801 19 12.4668L15 16.4668L11 12.4668C10.6133 12.0801 9.97333 12.0801 9.58666 12.4668C9.2 12.8534 9.2 13.4934 9.58666 13.8801L14.2933 18.5868Z"
          fill="#333333"
        />
      </svg>

      {activeGroup === question && (
        <span className='accordion__answer'>{answer}</span>
      )}
    </article>
  );
};

export default function CompoundComponent() {
  return (
    <div className='accordion'>
      <MenuAccordion>
        <MenuAccordion.Label title="Вопросы-ответы" />
        <MenuAccordion.Question
          question="Что такое Билетопоиск?"
          answer="Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."
        />
        <MenuAccordion.Question
          question="Какой компании принадлежит Билетопоиск?"
          answer="Билетопоиск - это независимый сервис, который помогает любителям кино быстро и удобно выбрать фильм и купить билеты в кинотеатры по всей России."
        />

        <MenuAccordion.Question
          question="Как купить билет на Билетопоиск?"
          answer="На Билетопоиске можно купить билеты в кино. Для этого нужно выбрать нужный фильм и сеанс, затем оплатить билеты онлайн."
        />

        <MenuAccordion.Question
          question="Как оставить отзыв на Билетопоиск?"
          answer='Чтобы поделиться своим мнением о фильме на Билетопоиске, нужно зарегистрироваться на сайте и перейти на страницу фильма. Там вы найдете раздел "Отзывы", где сможете оставить свой комментарий и поделиться впечатлениями с другими зрителями.'
        />
      </MenuAccordion>
    </div>
  );
}
