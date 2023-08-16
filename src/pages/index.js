import Image from "next/image";
import square from "../images/attractions/square.webp";
import svetlogorskInMap from "../images/map/map3.webp";
import mapSvetlogorsk from "../images/map/map2.webp";
import school12 from "../images/attractions/school12.webp";
import school9 from "../images/attractions/school9.webp";

export default function Page() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-start mx-auto max-w-screen-xl gap px">
        <main className="w-full component-block">
          <h2 data-section="information"
              className="component-block__title mb section"
              id="information">
            Информация
          </h2>
          <figure className="max-w-lg mx-auto my">
            <Image className="max-w-full mx-auto h-auto rounded-lg" src={square} alt="Центральная площадь"/>
            <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Центральная площадь
            </figcaption>
          </figure>
          <p className="mb"> Светлогорский район расположен на северо-западе Гомельской области. Образован 17 июля 1924 года.
            Площадь Светлогорского района 1,87 тыс. кв. км.</p>
          <p className="mb">По территории района проходят: железная дорога Жлобин – Калинковичи, автомобильные дороги:
            Бобруйск – Калинковичи, Бобруйск – Речица. Судоходство осуществляется по реке Березина.</p>
          <p className="mb">На территории района расположены: сельских населенных пунктов – 101, поселков городского типа —
            2.</p>
          <p className="mb">Территория разделена на 8 сельских Советов: Осташковичский, Боровиковский, Давыдовский,
            Красновский, Николаевский, Чирковичский, Паричский и Сосновоборский. Центром района является город
            Светлогорск.</p>
          <p className="mb">Светлогорский район граничит со Жлобинским, Речицким, Калинковичским, Октябрьским районами
            Гомельской области и Могилевской областью на севере района.</p>
          <h2 data-section="history"
              className="component-block__title mb section"
              id="history">
            История развития
          </h2>
          <p className="mb">Светлогорск известен с 16 века веке как деревня Шатиловичи (позднее Шатилки) в Речицком повете
            Великого княжества Литовского. С 1793 года находился в составе России, в Паричской волости Бобруйского
            уезда. С 1924 года Шатилки — центр сельсовета в Паричском районе, один из центров лесосплава на Березине. С
            1956 года — городской посёлок, с 1960 года — центр Паричского района, с 1961 года — город Светлогорск.</p>
          <h2 data-section="klimat"
              className="component-block__title mb section"
              id="klimat">
            Природные и климатические условия Светлогорского района
          </h2>
          <figure className="max-w-lg mx-auto my">
            <Image className="max-w-full mx-auto h-auto rounded-lg" src={svetlogorskInMap} alt="Светлогорск на карте"/>
            <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Светлогорск на карте
              Республики
              Беларусь
            </figcaption>
          </figure>
          <p className="mb">Район расположен в Гомельском Полесье. Высшая точка района — 160 м — возле д.Круки.</p>
          <p className="mb">Поверхность района преимущественно равнинная (высота до 150 метров над уровнем моря). Почвы
            сельскохозяйственных угодий (в процентах): суглинистых – 3,1, супесчаных – 14,1, песчаных — 50,1, торфяных —
            32,7.</p>
          <p className="mb">Площадь, покрытая лесом, составляет 54 процента территории района.</p>
          <p className="mb">Полезные ископаемые: 5 месторождений нефти, Давыдовское месторождение каменной соли, 4 месторождения
            легкоплавких глин 1,8 млн. куб.м., 5 месторождений строительных песков — 8 млн. куб.м., 125 месторождений торфа —
            около 25 млн. т.</p>
          <p className="mb">Средняя температура января — минус 6,6 градусов, июля — 18,4 градусов по шкале Цельсия. Осадков
            выпадает 602 мм. в год. Вегетационный период составляет 194 суток.</p>
          <p className="mb">Реки: Березина (с притоками Ала, Сведь, Жердянка), Ипа (приток Припяти).</p>
          <p className="mb">В районе находятся заказники республиканского значения: биологический Чирковичский, часть
            ландшафтного Выдрица, создан биологический микрозаказник местного значения Светлогорский.</p>
          <p className="mb">По территории района проходят: железная дорога Жлобин – Калинковичи, автомобильные дороги:
            Бобруйск – Паричи – Мозырь – граница Украины, Паричи – Светлогорск – Речица, Светлогорск – Жлобин – Рогачев.
            Судоходство осуществляется по реке Березина.</p>
          <p className="mb">Жилая планировка города состоит из следующих частей:</p>
          <ul className="mb space-y-1 list-disc list-inside">
            <li>Шатилки — вдоль р. Березина;</li>
            <li>Старый город;</li>
            <li>Посёлок Строителей;</li>
            <li>8 микрорайонов, составляющих основную часть города; посёлок Нефтяников; Светоч — бывшая деревня Какель и
              территория господского дома Еленполь, присоединённые к городу.
            </li>
          </ul>
          <p className="mb">Остальные места, вдоль железной дороги, а также прилегающие к пос. Нефтяников — не имеют вполне
            сложившихся наименований, хотя в отношении последних иногда употребляется название «Старый аэродром».</p>
          <h2 data-section="population"
              className="component-block__title mb section"
              id="population">
            Население
          </h2>
          <p className="mb">Население — 64 989 человек.</p>
          <ol className="mb list-decimal list-inside">
            <li>Белорусы 87,55%</li>
            <li>Русские 9,57%</li>
            <li>Украинцы 1,85%</li>
            <li>Другие 1,03%</li>
          </ol>
          <h2 data-section="education"
              className="component-block__title mb section"
              id="education">
            Образование
          </h2>
          <ul className="space-y-1 list-disc list-inside">
            <li>В городе работают 12 общеобразовательных школ, в том числе гимназия; межшкольный учебно-производственный
              комбинат.
            </li>
            <li>Действует индустриальный колледж (основан в 1960 году как филиал Молодечненского политехникума, с 1966
              году — Светлогорский индустриальный техникум).
            </li>
            <li>Есть дом детского и юношеского творчества, детская художественная школа и детская школа искусств.</li>
            <li>Имеются спортивный комплекс, плавательный бассейн, 3 стадиона, теннисный корт.</li>
          </ul>
          <figure className="max-w-lg mx-auto my">
            <Image className="max-w-full mx-auto h-auto rounded-lg" src={school12}
                   alt="Средняя школа №12"/>
            <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Средняя школа №12</figcaption>
          </figure>
          <figure className="max-w-lg mx-auto my">
            <Image className="max-w-full mx-auto h-auto rounded-lg" src={school9} alt="Средняя школа №9"/>
            <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Средняя школа №9</figcaption>
          </figure>
          <p className="mb">Система образования района включает в себя 64 учреждения, в которых обучается и воспитывается 12
            575 детей.</p>
          <p className="mb">(Всего 64 подведомственных учреждения: 26 учреждений общего среднего образования (1 гимназия, 17
            средних школ, 2 базовые школы, 6 учебно-педагогических комплексов «ясли-сад–школа»), 28 учреждений
            дошкольного образования (из них 2 центра развития ребенка), 6 учреждений дополнительного образования, 1
            центр коррекционно-развивающего обучения и реабилитации, 1 социально-педагогический центр, государственное
            учреждение «Оздоровительный лагерь «Космос Светлогорского района», государственное учреждение «Светлогорский
            районный учебно-методический кабинет".</p>
          <p className="mb">В 2022/2023 учебном году в учреждениях дошкольного образования воспитывается 3 439 детей
            (в городе – 3197 детей, в сельских населенных пунктах – 242 ребенка). Показатель охвата детей дошкольным
            образованием от 1 до 6 лет составляет 88,4% (при плане 88,3%).</p>
          <p className="mb">Норматив охвата детей пятилетнего возраста подготовкой к обучению в учреждениях общего среднего
            образования ежегодно выполняется на 100%.</p>
          <p className="mb">По запросу родителей открыто 124 разных форм дошкольного образования (9 материнских школ, 27
            прогулочных групп, 13 групп вечернего пребывания, 13 групп выходного дня, 53 адаптационные группы, 9 –
            дежурных
            групп).</p>
          <h2 data-section="economy"
              className="component-block__title mb section"
              id="economy">
            Хозяйственная деятельность Светлогорского района
          </h2>
          <figure className="max-w-lg mx-auto my">
            <Image className="max-w-full mx-auto h-auto rounded-lg" src={mapSvetlogorsk}
                   alt="Светлогорский район на карте"/>
            <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Светлогорский район на карте
            </figcaption>
          </figure>
          <p className="mb">Торговая инфраструктура Светлогорского района включает в себя 407 магазинов торговой площадью 37,1
            тыс. квадратных метров.</p>
          <p className="mb">Сеть общедоступного общественного питания состоит из 69 предприятий на 3742 посадочных мест, 7
            предприятий торговли, имеющих статус фирменной торговой сети, 12 объектов придорожного сервиса, 5
            рынков.</p>
          <p className="mb">Бытовые услуги населению оказывают 132 организации различных форм собственности, в том числе:</p>
          <ul className="mb space-y-1 list-disc list-inside">
            <li>26 – предприятия оказывающие парикмахерские услуги,</li>
            <li>6 – фото-услуги, 9 – ритуальные услуги,</li>
            <li>7 – ремонт бытовых изделий и приборов,</li>
            <li>6 – ремонт и техническое обслуживание телерадиоаппаратуры,</li>
            <li>20 – пунктов по техническому обслуживанию транспорта,</li>
            <li>2 – пункты видео проката,</li>
            <li>9 – ремонт обуви,</li>
            <li>12 – ремонт и пошив одежды,</li>
            <li>2 – ремонт реставрация и изготовление мебели,</li>
            <li>1 – химчистка и крашение,</li>
            <li>4 – услуги прачечных,</li>
            <li>3 – строительство и ремонт жилья и других построек,</li>
            <li>1 – услуги бань и душевых,</li>
            <li>5 – прокат бытовых изделий и предметов личного пользования,</li>
            <li>6 – ремонт часов и ювелирных изделий,</li>
            <li>13 – предприятий с комплексно-приемными пунктами, оказывающими ряд услуг населению сельской местности
              (ОАО «Светбытсервис»).
            </li>
          </ul>
          <p className="mb">Отрасль «Связь» в районе представлена Светлогорским узлом электрической связи Гомельского филиала
            республиканского унитарного предприятия «Белтелеком», Светлогорским районным узлом почтовой связи
            Гомельского филиала республиканского унитарного предприятия «Белпочта». В районе работает 21 отделение
            почтовой связи.</p>
          <p className="mb">Площадь сельхозугодий составляет 58,0 тысяч гектаров, в том числе пашни 29,4 тысячи гектар.
            Сельскохозяйственные угодья района по кадастровой оценке имеют – 24,3 балла, пахотные земли оцениваются в
            26,5 балла. В основном преобладают песчаные (80%) и торфяно-болотные (18%) почвы, супесчаные составляют
            2%.</p>
        </main>
      </div>
    </>
  )
}