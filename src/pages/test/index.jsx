import Script from "next/script";

export default function Page() {
  return (
    <>
      <Script src="/questions.js" strategy="afterInteractive"></Script>
      <form>
        <h2 className="component-block__title mb">
          1. Сколько человек проживает в Светлогорске?
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q1-1" type="radio" name="q1" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q1-1" className="py-3 ml-2 w-full text-sm text-gray-900">Менее 40000 людей</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q1-2" type="radio" name="q1" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q1-2" className="py-3 ml-2 w-full text-sm text-gray-900">Около 65000 человек</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q1-3" type="radio" name="q1" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q1-3" className="py-3 ml-2 w-full text-sm text-gray-900">Более 100000 людей</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q1-4" type="radio" name="q1" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q1-4" className="py-3 ml-2 w-full text-sm text-gray-900">Около 75000 человек</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          2. Где расположен г. Светлогорск?
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q2-1" type="radio" name="q2" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q2-1" className="py-3 ml-2 w-full text-sm text-gray-900">Город расположен в
                Гродненской области,
                пристань на реке Днепр</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q2-2" type="radio" name="q2" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q2-2" className="py-3 ml-2 w-full text-sm text-gray-900">Город расположен в Гомельском
                Полесье,
                пристань на реке Березина</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q2-3" type="radio" name="q2" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q2-3" className="py-3 ml-2 w-full text-sm text-gray-900">Город расположен в Минской
                области,
                пристань на реке Березина</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          3. Жилая планировка города состоит из следующих частей:
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q3-1" type="checkbox" name="q3" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q3-1" className="py-3 ml-2 w-full text-sm text-gray-900">Шатилки — вдоль р.
                Березина</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q3-2" type="checkbox" name="q3" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q3-2" className="py-3 ml-2 w-full text-sm text-gray-900">Новый город</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q3-3" type="checkbox" name="q3" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q3-3" className="py-3 ml-2 w-full text-sm text-gray-900">Старый город</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q3-4" type="checkbox" name="q3" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q3-4" className="py-3 ml-2 w-full text-sm text-gray-900">Посёлок Строителей</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q3-5" type="checkbox" name="q3" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q3-5" className="py-3 ml-2 w-full text-sm text-gray-900">Округ Энергетиков</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q3-6" type="checkbox" name="q3" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q3-6" className="py-3 ml-2 w-full text-sm text-gray-900">8 микрорайонов; посёлок
                Нефтяников;
                Светоч</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          4. Сколько общеобразовательных школ работает в Светлогорске?
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q4-1" type="radio" name="q4" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q4-1" className="py-3 ml-2 w-full text-sm text-gray-900"> В Светлогорске действует 14
                общеобразовательных школ</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q4-2" type="radio" name="q4" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q4-2" className="py-3 ml-2 w-full text-sm text-gray-900">В г. Светлогорске работают 9
                школ</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q4-3" type="radio" name="q4" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q4-3" className="py-3 ml-2 w-full text-sm text-gray-900">В городе работают 12
                общеобразовательных
                школ</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          5. Одни из крупнейших предприятий:
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q5-1" type="checkbox" name="q5" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q5-1" className="py-3 ml-2 w-full text-sm text-gray-900">ОАО
                «СветлогорскХимволокно»</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q5-2" type="checkbox" name="q5" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q5-2" className="py-3 ml-2 w-full text-sm text-gray-900">Светлогорский БМЗ</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q5-3" type="checkbox" name="q5" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q5-3" className="py-3 ml-2 w-full text-sm text-gray-900">Светлогорский
                целлюлозно-картонный
                комбинат</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q5-4" type="checkbox" name="q5" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q5-4" className="py-3 ml-2 w-full text-sm text-gray-900">Светлогорский ЖБИиК»</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q5-5" type="checkbox" name="q5" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q5-5" className="py-3 ml-2 w-full text-sm text-gray-900">Филиал Светлогорский
                хлебозавод РУП
                «Гомельхлебпром»</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q5-6" type="checkbox" name="q5" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q5-6" className="py-3 ml-2 w-full text-sm text-gray-900">ОАО
                «СветлогорскМолоко»</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q5-7" type="checkbox" name="q5" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q5-7" className="py-3 ml-2 w-full text-sm text-gray-900">Светлогорское монтажное
                управление ОАО
                Гомельтехмонтаж</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q5-8" type="checkbox" name="q5" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q5-8" className="py-3 ml-2 w-full text-sm text-gray-900">Светлогорский
                мясокомбинат</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q5-9" type="checkbox" name="q5" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q5-9" className="py-3 ml-2 w-full text-sm text-gray-900">ОАО "Светлогорский
                агросервис"</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          6. Сколько бюстов воинов возведено на Аллее Героев Советского Союза?
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q6-1" type="radio" name="q6" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q6-1" className="py-3 ml-2 w-full text-sm text-gray-900">10 бюстов воинов-героев
                Советского
                Союза</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q6-2" type="radio" name="q6" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q6-2" className="py-3 ml-2 w-full text-sm text-gray-900">11 бюстов воинов</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q6-3" type="radio" name="q6" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q6-3" className="py-3 ml-2 w-full text-sm text-gray-900">9 бюстов воинов</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          7. С какого года существует Крестовоздвиженский костел?
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q7-1" type="radio" name="q7" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q7-1" className="py-3 ml-2 w-full text-sm text-gray-900">Костёл существовал с 1638
                года</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q7-2" type="radio" name="q7" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q7-2" className="py-3 ml-2 w-full text-sm text-gray-900">Первый костёл был построен в
                1698
                году</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q7-3" type="radio" name="q7" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q7-3" className="py-3 ml-2 w-full text-sm text-gray-900">Костёл существовал с 1538
                года</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q7-4" type="radio" name="q7" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q7-4" className="py-3 ml-2 w-full text-sm text-gray-900">Костёл построили в 1409
                году</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          8. В каком году появилось Современное здание костёла Святого Креста?
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q8-1" type="radio" name="q8" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q8-1" className="py-3 ml-2 w-full text-sm text-gray-900">Современное здание достроили
                к 1989
                году</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q8-2" type="radio" name="q8" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q8-2" className="py-3 ml-2 w-full text-sm text-gray-900">Новый костёл появился в 1997
                году
                году</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q8-3" type="radio" name="q8" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q8-3" className="py-3 ml-2 w-full text-sm text-gray-900">Современный костёл Вознесения
                Святого
                Креста из красного кирпича появился в 1994</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          9. На что направлена деятельность Дома ремёсел?
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q9-1" type="radio" name="q9" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q9-1" className="py-3 ml-2 w-full text-sm text-gray-900">Деятельности Дома ремёсел
                направлена на
                вдохновение граждан города изучать историю своего населённого пункта</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q9-2" type="radio" name="q9" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q9-2" className="py-3 ml-2 w-full text-sm text-gray-900">Деятельности Дома ремёсел
                направлена на
                поддержку гос. мероприятий города</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q9-3" type="radio" name="q9" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q9-3" className="py-3 ml-2 w-full text-sm text-gray-900">Деятельность Дома ремёсел
                направлена на
                возрождение, сохранение и поддержку традиций народных ремёсел</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          10. Чьё имя было присвоено картинной галереи «Традиция»?
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q10-1" type="radio" name="q10" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q10-1" className="py-3 ml-2 w-full text-sm text-gray-900">Картинной галерее «Традиция»
                было
                присвоено имя народного художника Виктора Корнеплода</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q10-2" type="radio" name="q10" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q10-2" className="py-3 ml-2 w-full text-sm text-gray-900">Картинной галерее «Традиция»
                было
                присвоено имя Германа Прянишникова</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q10-3" type="radio" name="q10" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q10-3" className="py-3 ml-2 w-full text-sm text-gray-900">Картинной галерее «Традиция»
                было
                присвоено имя популярного белорусского скульптора Миско Ивана Якимовича</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          11. Сколько произведений искусства составляет фонд картинной галереи «Традиция»?
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q11-1" type="radio" name="q11" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q11-1" className="py-3 ml-2 w-full text-sm text-gray-900">Фонд картинной галереи
                «Традиция»
                составляет больше 1000 предметов произведений искусства</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q11-2" type="radio" name="q11" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q11-2" className="py-3 ml-2 w-full text-sm text-gray-900">На сегодняшний момент фонд
                картинной
                галереи составляет около 200 экспонатов произведений искусства: живопись, графика,
                скульптура</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q11-3" type="radio" name="q11" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q11-3" className="py-3 ml-2 w-full text-sm text-gray-900">Сегодня основной фонд
                картинной галереи
                составляет свыше 600 предметов произведений искусства: живопись, графика, скульптура</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          12. Кто сделал скульптуру «Ника»? В каком году?
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q12-1" type="radio" name="q12" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q12-1" className="py-3 ml-2 w-full text-sm text-gray-900">Скульптура «Ника» Была
                сделана в 1984 году
                местным автором Виктором Смоляром</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q12-2" type="radio" name="q12" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q12-2" className="py-3 ml-2 w-full text-sm text-gray-900">Скульптура была сделана
                местным автором
                Миско Иваном Якимовичем в 1984 году</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q12-3" type="radio" name="q12" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q12-3" className="py-3 ml-2 w-full text-sm text-gray-900">В 1984 году скульптор Колчев
                Евгений
                Алексеевич создал скульптуру «Ника»</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          13. Сколько воинов перезахоронено в памятник «Скорбящий колокол»?
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q13-1" type="radio" name="q13" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q13-1" className="py-3 ml-2 w-full text-sm text-gray-900">Сюда перезахоронены 264
                воинов, которые
                погибли в боях при освобождении д. Шатилки и территории района</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q13-2" type="radio" name="q13" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q13-2" className="py-3 ml-2 w-full text-sm text-gray-900">Сюда перезахоронены 256
                воинов</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q13-3" type="radio" name="q13" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q13-3" className="py-3 ml-2 w-full text-sm text-gray-900">Сюда перезахоронены 265
                воинов, которые
                погибли в боях при освобождении д. Шатилки и территории района от немецко-фашистских
                захватчиков</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          14. В каком году открыт Мемориальный комплекс «Багратион»?
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q14-1" type="radio" name="q14" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q14-1" className="py-3 ml-2 w-full text-sm text-gray-900">Комплекс «Багратион» открыли
                в начале 2015
                году</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q14-2" type="radio" name="q14" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q14-2" className="py-3 ml-2 w-full text-sm text-gray-900">Монумент открыт в июне 2014
                года</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q14-3" type="radio" name="q14" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q14-3" className="py-3 ml-2 w-full text-sm text-gray-900">Мемориальный комплекс
                «Багратион» открыт в
                мае 2017 года</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          15. «Багратион» вошел в учебники как…
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q15-1" type="radio" name="q15" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q15-1" className="py-3 ml-2 w-full text-sm text-gray-900">«Багратион» вошел в учебники
                как самая
                быстрая наступательная операция XX века</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q15-2" type="radio" name="q15" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q15-2" className="py-3 ml-2 w-full text-sm text-gray-900">«Багратион» вошел в учебники
                как самая
                успешная наступательная операция XX века</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q15-3" type="radio" name="q15" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q15-3" className="py-3 ml-2 w-full text-sm text-gray-900">«Багратион» вошел в учебники
                как самая
                средство затратная наступательная операция XX века</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          16. В каком году начато Строительство «Храма Преображения Господня»?
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q16-1" type="radio" name="q16" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q16-1" className="py-3 ml-2 w-full text-sm text-gray-900">В 1998 году начато
                строительство
                собора</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q16-2" type="radio" name="q16" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q16-2" className="py-3 ml-2 w-full text-sm text-gray-900">17 сентября 2006 года
                закончено
                строительство храма Преображения Господня</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q16-3" type="radio" name="q16" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q16-3" className="py-3 ml-2 w-full text-sm text-gray-900">Строительство собора
                началось в 1989
                году</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          17. Храм по высоте до основания креста…
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q17-1" type="radio" name="q17" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q17-1" className="py-3 ml-2 w-full text-sm text-gray-900">Храм по высоте до основания
                креста
                35.55556 м</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q17-2" type="radio" name="q17" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q17-2" className="py-3 ml-2 w-full text-sm text-gray-900">Храм по высоте от основания
                до креста 33
                м</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q17-3" type="radio" name="q17" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q17-3" className="py-3 ml-2 w-full text-sm text-gray-900">Высота храма около 40
                м</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          18. Сколько жителей погибло в д. Ола?
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q18-1" type="radio" name="q18" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q18-1" className="py-3 ml-2 w-full text-sm text-gray-900">Погибли 2109 мирных
                жителей</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q18-2" type="radio" name="q18" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q18-2" className="py-3 ml-2 w-full text-sm text-gray-900">Погибли 1758 мирных
                жителей</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q18-3" type="radio" name="q18" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q18-3" className="py-3 ml-2 w-full text-sm text-gray-900">Было убито порядка 1332
                жителей деревни
                Ола</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          19. Сколько мирных жителей и советских воинов захоронено в братской могиле?
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q19-1" type="radio" name="q19" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q19-1" className="py-3 ml-2 w-full text-sm text-gray-900">2253 человека</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q19-2" type="radio" name="q19" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q19-2" className="py-3 ml-2 w-full text-sm text-gray-900">2783 человека</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q19-3" type="radio" name="q19" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q19-3" className="py-3 ml-2 w-full text-sm text-gray-900">1857 человек</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          20. В каком году на братской могиле был установлен памятник – скульптура коленопреклонённого солдата с
          венком?
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q20-1" type="radio" name="q20" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q20-1" className="py-3 ml-2 w-full text-sm text-gray-900">В 1948 году на братской
                могиле установили
                памятник - скульптура коленопреклоненного солдата с венком</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q20-2" type="radio" name="q20" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q20-2" className="py-3 ml-2 w-full text-sm text-gray-900">В 1958 году на братской
                могиле был
                установлен памятник - скульптура коленопреклоненного солдата с венком</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q20-3" type="radio" name="q20" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q20-3" className="py-3 ml-2 w-full text-sm text-gray-900">Памятник был установлен в
                1997
                году</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          21. Как Светлогорцы называют памятник воинам-интернационалистам?
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q21-1" type="radio" name="q21" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q21-1" className="py-3 ml-2 w-full text-sm text-gray-900">Памятник
                воинам-афганцам</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q21-2" type="radio" name="q21" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q21-2" className="py-3 ml-2 w-full text-sm text-gray-900">Памятник
                воинам-интернационалистам</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q21-3" type="radio" name="q21" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q21-3" className="py-3 ml-2 w-full text-sm text-gray-900">Памятник
                воинам-освободителям</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          22. В каком месте был установлен памятник основателю местечка Шатилки, Роману Шатиле?
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q22-1" type="radio" name="q22" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q22-1" className="py-3 ml-2 w-full text-sm text-gray-900">Памятник был установлен на
                набережной
                города</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q22-2" type="radio" name="q22" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q22-2" className="py-3 ml-2 w-full text-sm text-gray-900">Памятник установлен на аллее
                героев</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q22-3" type="radio" name="q22" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q22-3" className="py-3 ml-2 w-full text-sm text-gray-900">Памятник установлен в центре
                города</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          23. В урочище "Николин Остров" находится единственная в Беларуси действующая…
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q23-1" type="radio" name="q23" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q23-1" className="py-3 ml-2 w-full text-sm text-gray-900">Ветряная мельница</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q23-2" type="radio" name="q23" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q23-2" className="py-3 ml-2 w-full text-sm text-gray-900">Водяная мельница</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          24. К какому типу относится ветряная мельница в урочище «Николин Остров»?
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q24-1" type="radio" name="q24" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q24-1" className="py-3 ml-2 w-full text-sm text-gray-900">Мельница относится к
                козловому
                типу</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q24-2" type="radio" name="q24" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q24-2" className="py-3 ml-2 w-full text-sm text-gray-900">Мельница относится к
                шатровому
                (голландскому) типу</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          25. Сколько лет отработал Тепловоз на предприятии?
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q25-1" type="radio" name="q25" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q25-1" className="py-3 ml-2 w-full text-sm text-gray-900">Тепловоз отработал около 40
                лет</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q25-2" type="radio" name="q25" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q25-2" className="py-3 ml-2 w-full text-sm text-gray-900">Тепловоз отработал 27
                лет</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q25-3" type="radio" name="q25" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q25-3" className="py-3 ml-2 w-full text-sm text-gray-900">Тепловоз отработал 44
                года</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          26. С какого года известен населённый пункт как имение Шатилинский Остров, в Великом княжестве Литовском?
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q26-1" type="radio" name="q26" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q26-1" className="py-3 ml-2 w-full text-sm text-gray-900">Известен с 18 века</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q26-2" type="radio" name="q26" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q26-2" className="py-3 ml-2 w-full text-sm text-gray-900">Известен с 30 января 1560
                года</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q26-3" type="radio" name="q26" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q26-3" className="py-3 ml-2 w-full text-sm text-gray-900">Известен с 15 июля 1560
                года</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          27. В каком году рядом с Шатилками проведена железная дорога и образована станция?
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q27-1" type="radio" name="q27" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q27-1" className="py-3 ml-2 w-full text-sm text-gray-900">Построена к 1989
                году</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q27-2" type="radio" name="q27" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q27-2" className="py-3 ml-2 w-full text-sm text-gray-900">В 1915 году</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q27-3" type="radio" name="q27" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q27-3" className="py-3 ml-2 w-full text-sm text-gray-900">В 2001 году</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          28. В каких годах началось бурное развитие города?
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q28-1" type="radio" name="q28" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q28-1" className="py-3 ml-2 w-full text-sm text-gray-900">Бурное развитие началось в
                1950 годах и
                продолжалось до 1970 года</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q28-2" type="radio" name="q28" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q28-2" className="py-3 ml-2 w-full text-sm text-gray-900">Бурное развитие началось в
                1960 годах и
                продолжалось до 1990 года</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q28-3" type="radio" name="q28" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q28-3" className="py-3 ml-2 w-full text-sm text-gray-900">Бурное развитие началось в
                1910 годах и
                продолжалось до 1950 года</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          29. В каком году посёлок Шатилки был преобразован в город Светлогорск?
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q29-1" type="radio" name="q29" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q29-1" className="py-3 ml-2 w-full text-sm text-gray-900">В 1969 году поселок Шатилки
                был
                преобразован в город Светлогорск</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q29-2" type="radio" name="q29" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q29-2" className="py-3 ml-2 w-full text-sm text-gray-900">В 1965 году поселок Шатилки
                был
                преобразован в город Светлогорск</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q29-3" type="radio" name="q29" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q29-3" className="py-3 ml-2 w-full text-sm text-gray-900">В 1961 году поселок Шатилки
                был
                преобразован в город Светлогорск</label>
            </div>
          </li>
        </ul>
        <h2 className="component-block__title mb">
          30. Кто был первым учителем и директором cветлогорской детской школы изобразительного искусства?
        </h2>
        <ul className="mb rounded-lg border border-gray-200">
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q30-1" type="radio" name="q30" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q30-1" className="py-3 ml-2 w-full text-sm text-gray-900">Николай Владимирович
                Кухаренко</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q30-2" type="radio" name="q30" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q30-2" className="py-3 ml-2 w-full text-sm text-gray-900">Анатолий Михайлович
                Сидоренко</label>
            </div>
          </li>
          <li className="w-full rounded-t-lg border-b border-gray-200">
            <div className="flex items-center pl-3">
              <input id="q30-3" type="radio" name="q30" className="w-4 h-4 bg-gray-100 border-gray-300"/>
              <label htmlFor="q30-3" className="py-3 ml-2 w-full text-sm text-gray-900">Геннадий Алексеевич
                Чех</label>
            </div>
          </li>
        </ul>
        <button type="button" className="btn-bg mt" id="button">Отправить ответы</button>
      </form>
    </>
  )
}