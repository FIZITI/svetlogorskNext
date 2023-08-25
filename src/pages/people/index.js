import Image from "next/image";
import Layout from '../../components/layout';
import cherenok from "../../images/people/cherenok.webp";
import chizh from "../../images/people/chizh.webp";
import docenko  from "../../images/people/docenko.webp";
import hmarun from "../../images/people/hmarun.webp";
import hudoleeva from "../../images/people/hudoleeva.webp";
import kotlyarov from "../../images/people/kotlyarov.webp";
import kravchuk from "../../images/people/kravchuk.webp";
import lutugovskiy from "../../images/people/lutugovskiy.webp";
import neustupova from "../../images/people/neustupova.webp";
import ovsyannikov from "../../images/people/ovsyannikov.webp";
import pirshtuk from "../../images/people/pirshtuk.webp";
import timohin from "../../images/people/timohin.webp";
import yavor from "../../images/people/yavor.webp";
import zapesochnaya from "../../images/people/zapesochnaya.webp";
import zinkevich from "../../images/people/zinkevich.webp";
import postsPeople from "../../json/postsPeople.json";

export default function Page() {
    return (
      <>
      <Layout content={postsPeople}>
          <h2 data-section="zapesochnaya"
              className="component-block__title mb section"
              id="zapesochnaya">
              Запесочная Нина Никитична
          </h2>
          <figure className="max-w-lg mx-auto my">
              <Image className="max-w-full mx-auto h-auto rounded-lg" src={zapesochnaya}
                     alt="zapesochnaya"/>
          </figure>
          <p className="mb">После окончания медицинского института работала врачом на пристани Осетрово Ленского
              водздравотдела. С 1938 г. — в Нижнеиртышском водздравотделе. В годы войны заведует санэпидемстанцией в г.
              Омске, с 1944 г. — заведующая санэпидемстанцией в г. Днепропетровске. В 1947 г. в качестве врача
              военно-восстановительного отряда № 16 прибыла в Белоруссию в д. Шатилки на судостроительную верфь.
              Работала врачом, заведующей больницей и амбулаторией. Обслуживала не только рабочих судоверфи, но и
              жителей
              д. Шатилки (ныне г. Светлогорск).</p>
          <h2 data-section="hmarun"
              className="component-block__title mb section"
              id="hmarun">
              Хмарун Иван Федорович
          </h2>
          <figure className="max-w-lg mx-auto my">
              <Image className="max-w-full mx-auto h-auto rounded-lg" src={hmarun}
                     alt="hmarun"/>
          </figure>
          <p className="mb">8 марта 1916, д. Боровики Светлогорского р-на Гомельской обл. – 13 ноября 1998, Герой
              Социалистического Труда (1966).</p>
          <p className="mb">С 1930 по 1937 гг. работал столяром на строительной базе Шатилковской судоверфи. В 1937 г.
              призван
              на военную службу, участвовал в освобождении Западной Белоруссии, войне СССР с Финляндией, освобождении
              Бессарабии.</p>
          <p className="mb">С 1942 г. на фронтах Великой Отечественной войны. Участник Сталинградской битвы, боев под
              Харьковом. После капитуляции фашистской Германии участвовал в боях с Японией. Демобилизовался в 1946
              г.</p>
          <p className="mb">В 1950 году приезжает в Шатилки (ныне г. Светлогорск), с 1954 года — бригадир строи-тельной
              бригады, строил Василевичскую ГРЭС. В 1962 году возглавил бригаду строителей стройтреста №20. Бригада И.
              Ф.
              Хмаруна первой в городе завоевала звание «Бригада коммунистического труда», ей поручали самые
              ответственные
              объекты: она строила первую и вторую очереди завода искусственного волокна, первые корпуса
              целлюлозно-картонного комбината, жилые дома.</p>
          <h2 data-section="kravchuk"
              className="component-block__title mb section"
              id="kravchuk">
              Кравчук Николай Иванович
          </h2>
          <figure className="max-w-lg mx-auto my">
              <Image className="max-w-full mx-auto h-auto rounded-lg" src={kravchuk}
                     alt="kravchuk"/>
          </figure>
          <p className="mb">25 мая 1932, Житомирская обл. — февраль 2016. Ветеран труда, Отличник энергетики и
              электрификации
              СССР.</p>
          <p className="mb">В 1950 г. окончил школу и работал на Украине в тресте «Первомайскуголь». После службы в
              Советской
              Армии приезжает в Беларусь в п. Шатилки, работает в строительном управлении Василевичской ГРЭС. С 1 января
              1959 г. (день образования завода) до выхода на заслуженный отдых работал мотористом, мастером
              бетонно-смесительного цеха Светлогорского завода железобетонных изделий и конструкций.</p>
          <p className="mb">За добросовестный труд Кравчук Н. И. награжден грамотой Верховного Совета БССР, почетным
              званием
              «Отличник энергетики и электрификации СССР», медалью «Ветеран труда», почетными грамотами за высокие
              производственные показатели, рационализаторские предложения.</p>
          <h2 data-section="timohin"
              className="component-block__title mb section"
              id="timohin">
              Тимохин Виктор Васильевич
          </h2>
          <figure className="max-w-lg mx-auto my">
              <Image className="max-w-full mx-auto h-auto rounded-lg" src={timohin}
                     alt="timohin"/>
          </figure>
          <p className="mb">1 января 1930, с. Михайловское Перемышльского района Калужской обл. — 2002, Заслуженный
              строитель
              БССР (1990), кавалер ордена «Знак почета».</p>
          <p className="mb">В 1945 г. поступил в Калужский коммунально-строительный техникум, после окончания которого
              был
              направлен в Новосибирск, где до 1953 г. работал десятником.</p>
          <p className="mb">В 1953 г. поступил в Новосибирский инженерно-строительный институт им. Куйбышева. После
              окончания
              института работал в стройуправлении «Донецкшахтстроя» начальником участка, а затем главным инженером.</p>
          <p className="mb">В Светлогорске с 1967 года, 1967-1975 гг. — начальник СУ-112 треста № 20, 1975-1980 гг. —
              главный
              инженер строительного треста №6 «Мозырьнефтехимстрой», с мая 1980 и до ухода на пенсию (март 1991) —
              управляющий строительным трестом № 20.</p>
          <h2 data-section="hudoleeva"
              className="component-block__title mb section"
              id="hudoleeva">
              Худолеева Любовь Петровна
          </h2>
          <figure className="max-w-lg mx-auto my">
              <Image className="max-w-full mx-auto h-auto rounded-lg" src={hudoleeva}
                     alt="hudoleeva"/>
          </figure>
          <p className="mb">25 августа 1934, Ветковский р-н, Гомельской обл., Заслуженный учитель БССР.</p>
          <p className="mb">Окончила школу в 1952 г. в д. Рудаков Хойникского района. В 1956 окончила Гомельский
              государственный педагогический институт — по специальности «учитель химии и биологии».</p>
          <p className="mb">В 1953 г. поступил в Новосибирский инженерно-строительный институт им. Куйбышева. После
              окончания
              института работал в стройуправлении «Донецкшахтстроя» начальником участка, а затем главным инженером.</p>
          <p className="mb">Работала в Минской обл. С 1964 г. – в Светлогорске. Работала учителем химии в
              школе-интернате, СШ
              № 6, СШ №7. С 1989 г. — на пенсии.</p>
          <h2 data-section="chizh"
              className="component-block__title mb section"
              id="chizh">
              Чиж Александр Ильич
          </h2>
          <figure className="max-w-lg mx-auto my">
              <Image className="max-w-full mx-auto h-auto rounded-lg" src={chizh}
                     alt="chizh"/>
          </figure>
          <p className="mb">15 мая 1927, д. Рассумака Краснопольского р-на Могилевской обл. — 21 октября 2015 го-да,
              Заслуженный работник промышленности Республики Беларусь (1995).</p>
          <p className="mb">В 1947 г. окончил керамико-механический техникум, в 1954 г. — Львовский политехнический
              институт
              по специальности «инженер-теплотехник». С 1950 по 1952 г. – главный механик Майдан-Вильского огнеупорного
              завода металлургической промышленности, с 1955 по 1958 г. – начальник котельного цеха, заместитель
              директора, главный энергетик Ванновского нефтеперерабатывающего завода в Ферганской обл. С 1958 по 1964 г.
              –
              главный энергетик деревоперерабатывающего комбината в г. Гомеле.</p>
          <p className="mb">С 1966 по 2001 г. – главный инженер, директор, генеральный директор ОАО «Светлогорский
              целлюлозно-картонный комбинат». Под руководством А.И. Чижа построены основные производства комбината: цех
              гофротары, картонно-бумажный, бумажных мешков, целлюлозы. В социальной сфере построено 98,6 тыс. кв. м.
              жилья, 3 детских сада, спорт-комплекс, санаторий-профилакторий, подсобное хозяйство, торговые
              предприятия.</p>
          <h2 data-section="zinkevich"
              className="component-block__title mb section"
              id="zinkevich">
              Зинкевич Владимир Леонидович
          </h2>
          <figure className="max-w-lg mx-auto my">
              <Image className="max-w-full mx-auto h-auto rounded-lg" src={zinkevich}
                     alt="zinkevich"/>
          </figure>
          <p className="mb">23 января 1951, п. Стреличево Хойникского р-на Гомельской обл., художник, член Союза
              художников
              Беларуси, заведующий кафедрой монументально-декоративного искусства Белорусской Академии искусств (1995),
              Вице-президент Белорусской Академии изобразительного искусства (1997).</p>
          <p className="mb">Детские годы прошли в г. Светлогорске. Учился в СШ № 4. Окончил Минское художественное
              училище им.
              Глебова (1971), в этом же году поступил в Белорусский государственный театрально-художественный институт
              (ныне — Белорусская Академия искусств), который окончил в 1977 г.</p>
          <p className="mb">Основные выставки, творческие акции: международная выставка «Советское монументальное
              искусство»
              (1980), Дания — Швеция — Чехословакия; международная художественная выставка «Современный портрет» (1985),
              Болгария; международная художественная выставка «Интерьер и станковая живопись» (1991), Бельгия;
              творческая
              акция «Белорусские художники — детям Чернобыля» (1992), Германия; групповая выставка картин белорусских
              художников в галерее «Спектрум» г. Бад-Зальцуфлен в Германии (1993); участие в декаде культуры Республики
              Беларусь «Современная живопись Беларуси» (1994), Германия; персональная выставка в картинной галерее
              «Традиция» (1996), г. Светлогорск; персональная выставка в галерее «Мастацтва» (1997), г. Минск;
              персональная выставка в картинной галерее «Традиция» (1998), г. Светлогорск, выставка белорусcкой живописи
              (2000), Рим.</p>
          <h2 data-section="lutugovskiy"
              className="component-block__title mb section"
              id="lutugovskiy">
              Латуговский Виктор Аркадьевич
          </h2>
          <figure className="max-w-lg mx-auto my">
              <Image className="max-w-full mx-auto h-auto rounded-lg" src={lutugovskiy}
                     alt="lutugovskiy"/>
          </figure>
          <p className="mb">13 марта 1937, г. Речица Гомельской обл. — январь 2016, Заслуженный работник промышленности
              Республики Беларусь (1998), начальник Светлогорского агропромышленного управления.</p>
          <p className="mb">Трудовая биография В. А. Латуговского началась в 1957 году, большая часть которой посвящена
              нефтяной промышленности. Начинал работать в Речице в должности начальника автоколонны, затем 5 лет
              (1972-1977) исполнял обязанности главного инженера Речицкой АТК. С 1977 г. — главный инженер Речицкого
              управления технологического транспорта. В 1980 году назначен начальником Светлогорского управления
              технологического транспорта. С 1985 по 1988 — заместитель начальника управления технологического
              транспорта
              по специальной технике объединения «Беларусьнафта» в Западной Сибири.</p>
          <p className="mb">С 1988 по 2006 г. — начальник Светлогорского управления технологического транспорта, после
              реорганизации этого управления — начальник агропромышленного управления «Беларусьнафта».</p>
          <h2 data-section="neustupova"
              className="component-block__title mb section"
              id="neustupova">
              Неуступова Елена Ивановна
          </h2>
          <figure className="max-w-lg mx-auto my">
              <Image className="max-w-full mx-auto h-auto rounded-lg" src={neustupova}
                     alt="neustupova"/>
          </figure>
          <p className="mb">Окончила планово-экономический факультет Белорусского государственного института народного
              хозяйства
              (1969). С июля 1969 — старший экономист Светлогорского хлебозавода, с 1988 — директор завода.</p>
          <p className="mb">Благодаря ее умелому руководству Светлогорский хлебозавод является лидером на рынке
              кондитерских и
              хлебобулочных изделий в городе, победителем множества фестивалей и выставок, обладателем сертификата
              международного качества продукции. На заводе неустанно расширяются мощности, вводятся новые производства.
              Поражает
              разнообразие ассортимента выпечки. Продукцию завода покупают не только в Светлогорске и Гомельской
              области,
              но и
              в России.</p>
          <h2 data-section="ovsyannikov"
              className="component-block__title mb section"
              id="ovsyannikov">
              Овсянников Сергей Аврамович
          </h2>
          <figure className="max-w-lg mx-auto my">
              <Image className="max-w-full mx-auto h-auto rounded-lg" src={ovsyannikov}
                     alt="ovsyannikov"/>
          </figure>
          <p className="mb">Работал в колхозах им. Кирова и им. Ленина, главным агрономом в совхозе «Пиревичский»,
              заместителем начальника Светлогорского управления сельского хозяйства.</p>
          <p className="mb">С 1970 по 1989 годы С.А.Овсянников возглавлял совхоз «Березина» (ныне КСУП). Благодаря
              высокому уровню
              профессиональных знаний, организаторским способностям ему удалось слабое хозяйство вывести на передовые
              позиции в
              районе. За период его руководства в совхозе значительно повысилась эффективность использования земель и
              культура
              земледелия.</p>
          <p className="mb">Благодаря ускоренному строительству животноводческих помещений, внедрению новейших
              технологий
              содержания скота и производства продукции, поголовье КРС достигло более 4 тысяч голов. Значительно
              возросла
              продуктивность дойного стада и скота на откорме и доращивании. Рентабельность производства в целом
              составила
              16,6%.</p>
          <p className="mb">За 19 лет его руководства в хозяйстве была создана развитая социально-культурная сфера,
              сформирован
              ведомственный жилищный фонд.</p>
          <h2 data-section="pirshtuk"
              className="component-block__title mb section"
              id="pirshtuk">
              Пирштук Болеслав Казимирович
          </h2>
          <figure className="max-w-lg mx-auto my">
              <Image className="max-w-full mx-auto h-auto rounded-lg" src={pirshtuk}
                     alt="pirshtuk"/>
          </figure>
          <p className="mb">Окончил Белорусский политехнический институт по специальности инженер – тепло-энергетик
              (1981) и
              Академию управления при Совете Министров Республики Беларусь по специальности менеджер – экономист
              (1993).</p>
          <p className="mb">С 1981 по 1983 г. – инженер группы режимов, старший инженер по эксплуатации Светло-горской
              теплоэлектроцентрали Гомельской области.</p>
          <p className="mb">С 10.1990 по 11.1990 – заведующий отделом социально – экономического развития
              исполнительного
              комитета Светлогорского городского Совета депутатов Гомельской области.</p>
          <p className="mb">С 1990 по 1995 – первый заместитель председателя исполнительного комитета Светло-горского
              городского Совета народных депутатов Гомельской области.</p>
          <p className="mb">С 1995 по 1997 – первый заместитель председателя Светлогорского городского исполни-тельного
              комитета Гомельской области.</p>
          <p className="mb">С 1997 по 2002 – председатель Светлогорского городского исполнительного комитета Гомельской
              области.</p>
          <p className="mb">С 2002 по 2007 – председатель Светлогорского районного исполнительного комитета Гомельской
              области.</p>
          <p className="mb">В 2007 году назначен заместителем председателя Гомельского облисполкома.</p>
          <h2 data-section="docenko"
              className="component-block__title mb section"
              id="docenko">
              Доценко Владислав Юрьевич
          </h2>
          <figure className="max-w-lg mx-auto my">
              <Image className="max-w-full mx-auto h-auto rounded-lg" src={docenko}
                     alt="docenko"/>
          </figure>
          <p className="mb">Начальник Вышкомонтажного управления республиканского унитарного предприятия
              «Производственное
              объединение «Белоруснефть».</p>
          <p className="mb">Окончил в 1972 году Куйбышевский политехнический институт по специальности «машины и
              оборудование
              нефтяных и газовых промыслов».</p>
          <p className="mb">1972-1973 – вышкомонтажник-слесарь 4 разряда, механик по монтажу и наладке бурового
              оборудования
              Вышкомонтажной конторы управления буровых работ «Азнакаевскбур-нефть» объединения «Татнефть», г. Азнакаево
              Татарская АССР.</p>
          <p className="mb">1973-1978 – начальник производственно-диспетчерской службы, главный инженер Вышкомонтажного
              управления РУП «Производственное объединение «Белоруснефть», г. Светлогорск РБ</p>
          <p className="mb">С 1978 года — начальник Вышкомонтажного управления республиканского унитарного предприятия
              «Производственное объединение «Белоруснефть»</p>
          <h2 data-section="yavor"
              className="component-block__title mb section"
              id="yavor">
              Явор Николай Матвеевич
          </h2>
          <figure className="max-w-lg mx-auto my">
              <Image className="max-w-full mx-auto h-auto rounded-lg" src={yavor}
                     alt="yavor"/>
          </figure>
          <p className="mb">Главный зоотехник-селекционер Светлогорского филиала республиканского сельскохозяйственного
              унитарного предприятия «Гомельгосплемпредприятие».</p>
          <p className="mb">Окончил в 1987 году Белорусскую сельскохозяйственную академию, г. Горки Могилевская область,
              по
              специальности «зоотехния».</p>
          <p className="mb">1974-1989 – главный зоотехник колхоза «Советская Белоруссия», Наровлянский район Гомельская
              область.</p>
          <p className="mb">1989-1992 – директор Светлогорской райплемстанции Гомельского облгосплемпредприятия.</p>
          <p className="mb">С 1992 года – главный зоотехник-селекционер Светлогорского филиала республиканского
              сельскохозяйственного унитарного предприятия «Гомельгосплемпредприятие».</p>
          <h2 data-section="cherenok"
              className="component-block__title mb section"
              id="cherenok">
              Черенок Владимир Леонтьевич
          </h2>
          <figure className="max-w-lg mx-auto my">
              <Image className="max-w-full mx-auto h-auto rounded-lg" src={cherenok}
                     alt="cherenok"/>
          </figure>
          <p className="mb">Директор сельскохозяйственного дочернего унитарного предприятия «Михайловское-агро»
              производственного унитарного предприятия «Калинковичский молочный комби-нат».</p>
          <p className="mb">Окончил в 1989 году Великолукский сельскохозяйственный институт по специальности
              «агрономия».</p>
          <p className="mb">1981 – 1991 – агроном, главный агроном, секретарь парткома, заместитель председателя колхоза
              «Знамя коммунизма» Светлогорского района Гомельской области.</p>
          <p className="mb">1991 — 1999 – председатель колхоза «Знамя коммунизма» Светлогорского района Гомельской
              области.</p>
          <p className="mb">1999 – 2002 – заместитель председателя РО «Сельхозхимия» по подсобному хозяйству
              Светлогорского
              района Гомельской области.</p>
          <p className="mb">С 2002 года – директор сельскохозяйственного дочернего унитарного предприятия
              «Михайловское-агро»
              производственного унитарного предприятия «Калинковичский молочный комбинат» Светлогорского района
              Гомельской
              области.</p>
          <h2 data-section="kotlyarov"
              className="component-block__title mb section"
              id="kotlyarov">
              Котляров Изяслав Григорьевич
          </h2>
          <figure className="max-w-lg mx-auto my">
              <Image className="max-w-full mx-auto h-auto rounded-lg" src={kotlyarov}
                     alt="kotlyarov"/>
          </figure>
          <p className="mb">21 февраля 1938 г. Чаусы Могилевской обл. Поэт, критик, журналист. Член Союза журналистов
              Беларуси
              (1965), член Союза писателей Беларуси (1990), член Союза писателей России (2002).</p>
          <p className="mb">Родился в рабочей семье. Отец — Григорий Львович, участник советско-финской и Великой
              Отечественной войн, рабочий металлургического завода. Мать — Евгения Исааковна, умерла, когда Изяславу
              было
              7 лет. После окончания 7 классов И. Котляров работал на обувной фабрике, одновременно учился в вечерней
              школе. В 1960 г. поступил на вечернее отделение факультета журналистики БГУ. Учебу совмещал с работой,
              работал в геодезической конторе Мингорисполкома (1960-1962), литературным сотрудником газеты «Западная
              трасса» (1962-1966). После окончания университета (1966) работал в «Светлогорской районной газете «Aгні
              камунізму» (сейчас — «Светлагорскія навіны») корреспондентом, ответственным секретарем, а с 1979 —
              заместителем редактора.</p>
          <p className="mb">Многие его публикации стали журналисткой летописью города и района. Автор истории
              Светлогорского
              строительного треста №20 (брошюра «Ровесник города») и Светлогорского домостроительного комбината
              («Домостроители»), брошюры о картинной галерее «Традиция» им. Г.М. Прянишникова («Верность традициям»),
              каталога о творчестве Г.М.Прянишникова.</p>
          <p className="mb">Автор поэтических сборников «Мой ровесник» (1975), «Конфетное дерево» (1980), «Дру-зья мои –
              свидетели мои» (1981), «Здесь на трепетной земле» (1989), «На расстоянии взгляда и души» (1990), «А душа и
              в
              молитве болит» (1994), «Но даже умираем, чтобы жить» (1999), « Россыпь » ( 2000), «Куда б ни шел – иду к
              своей судьбе»(2002), « Земля простит, но не прощает небо» (2002), «Вечное время во мне» (2003),
              « Сам себе дорога» (2004), «И гром словно эхо» (2005), «По ту и эту сторону окна» (2006), «Сначала жизнь –
              потом судьба» (2007), «Принял крещение от клена»(2009).</p>
          <p className="mb">Награжден почетными грамотами Республиканского комитета по печати, Министерства культуры
              Республики Беларусь, почетными грамотами Гомельского облисполкома и др.</p>
            </Layout>
      </>
    )
}