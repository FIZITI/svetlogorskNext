import Image from "next/image";
import Layout from "../../components/layout";
import agroserv from "../../images/industry/agroserv.webp";
import ckk from "../../images/industry/ckk.webp";
import gbiik from "../../images/industry/gbiik.webp";
import himvolokno from "../../images/industry/himvolokno.webp";
import hlebzavod from "../../images/industry/hlebzavod.webp";
import tehmontag from "../../images/industry/tehmontag.webp";
import postsIndustry from "../../json/postsIndustry.json";

export default function Page() {
  return (
    <>
      <Layout content={postsIndustry}>
        <h2 data-section="himvolokno"
            className="component-block__title mb section"
            id="himvolokno">
          ОАО «СветлогорскХимволокно»
        </h2>
        <figure className="max-w-lg mx-auto my">
          <Image className="max-w-full mx-auto h-auto rounded-lg" src={himvolokno}
                 alt="ОАО «СветлогорскХимволокно»"/>
        </figure>
        <p className="mb">История ОАО «СветлогорскХимволокно» берёт свое начало с завода искусственного волокна.
          Строительство
          завода началось в 1960 году, а в 1964 году уже был получен первый метр кордной ткани.</p>
        <p className="mb">Год за годом на площадке завода появлялись все новые и новые производства. В 70-х годах
          организован
          выпуск термостойких материалов, в 80-х — введен в эксплуатацию участок по производству углеродных материалов,
          в
          90-х — организован выпуск мешков из пленочных полипропиленовых нитей, нетканого материала «спанбонд».</p>
        <p className="mb">Более чем за 40 лет предприятие создало собственную школу высококвалифицированных
          химиков-производственников и сегодня ЗИВ представляет собой крупнейшее производство продукции технического
          назначения в широком ассортименте.</p>
        <p className="mb">В структуру завода входят мощности по выпуску углеродных и термостойких материалов,
          полипропиленовой
          продукции, нетканых материалов «СпанБел» и «АкваСпан». Благодаря внедрению современных технологий и
          модернизации
          основных мощностей, завод искусственного волокна поставляет на мировые рынки высококачественную продукцию.</p>
        <h2 data-section="ckk"
            className="component-block__title mb section"
            id="ckk">
          Светлогорский целлюлозно-картонный комбинат
        </h2>
        <figure className="max-w-lg mx-auto my">
          <Image className="max-w-full mx-auto h-auto rounded-lg" src={ckk}
                 alt="Светлогорский целлюлозно-картонный комбинат"/>
        </figure>
        <p className="mb">ОАО «Светлогорский ЦКК» - крупный производитель сульфатной беленой целлюлозы, гофрокартона,
          гофроящиков, бумаги для гофрирования и других продуктов из первичных и вторичных бумажных волокон.</p>
        <p className="mb">С вводом в 2020 году в эксплуатацию завода по производству сульфатной беленой целлюлозы (с
          возможностью производства вискозной целлюлозы) мощностью 400 тыс. тонн в год, ОАО «Светлогорский ЦКК» стал
          единственным в Республике Беларусь производителем целлюлозы. Выпускаемая целлюлоза беленая сульфатная из
          хвойных
          пород древесины изготавливается с использованием метода безхлорного отбеливания целлюлозы ECF (Elementary
          Chlorin
          Free) и идеально подходит для изготовления бумаги-основы для санитарно-гигиенических изделий, также
          предназначена
          для изготовления бумаги и картона, химии, как составляющая часть разного рода строительных смесей и пр.</p>
        <p className="mb">Продукция предприятия – сульфатная беленая целлюлоза, вискозная целлюлоза, масло таловое,
          скипидар,
          транспортная упаковка из гофрокартона (гофрокороба, лотки различной конфигурации, листовой гофрокартон,
          комплектующие из гофрокартона). Также производится бумага для гофрирования собственного производства,
          фильтровальные картоны, мешки бумажные трехслойные, пиломатериалы.</p>
        <p className="mb">Предприятие обладает высоким уровнем автоматизации и механизации технологических процессов,
          имеет
          высокие производственные мощности, собственную сырьевую базу, высококвалифицированный персонал.</p>
        <p className="mb">В состав ОАО «Светлогорский ЦКК» входят филиал «Бумажная фабрика» Красная Звезда»,
          расположенный в
          Витебской области, г. Чашники, и филиал «Лесопиление» в городе Светлогорске.</p>
        <h2 data-section="gbiik"
            className="component-block__title mb section"
            id="gbiik">
          Светлогорский ЖБИиК»
        </h2>
        <figure className="max-w-lg mx-auto my">
          <Image className="max-w-full mx-auto h-auto rounded-lg" src={gbiik}
                 alt="ОАО «Светлогорский ЖБИиК»"/>
        </figure>
        <p className="mb">Открытое акционерное общество «Светлогорский завод железобетонных изделий и конструкций» (ОАО
          «Светлогорский завод ЖБИиК») является лидером на высококонкурентном рынке производителей железобетонных
          изделий и
          конструкций для электросетевого и специального строительства.</p>
        <p className="mb">Некогда Светлогорский (а еще ранее Василевичский) завод железобетонных изделий и конструкций
          начал
          свою работу с января 1959 года. В течение долгого периода времени Общество относилось к ведению Минэнерго
          СССР,
          Министерства энергетики Республики Беларусь, входя в состав государственного производственного объединения
          электроэнергетики «Белэнерго».</p>
        <p className="mb">Общество является надежным многолетним партнером десятков белорусских и зарубежных
          строительных,
          торговых и энергетических компаний (например, ГПО «Белэнерго» (Беларусь), ПАО «Газпром» (Россия), ПАО
          «Россети»
          (Россия), ОАО «Бакэлектро» (Азербайджан), компаний Европейского союза). Мы сотрудничаем с ведущими проектными
          институтами Беларуси и России, что позволяет находить нестандартные варианты решений, не имеющие аналогов на
          рынке, а также постоянно повышать качество выпускаемой продукции.</p>
        <p className="mb">Продукция ОАО «Светлогорский завод ЖБИиК» используется при строительстве линий
          электропередачи,
          открытых распределительных устройств подстанций при строительстве вспомогательных зданий и сооружений ГРЭС и
          ТЭЦ
          во всей европейской части СНГ, при строительстве основных и вспомогательных сооружений и зданий АЭС Беларуси и
          северо-западной части Российской Федерации.</p>
        <h2 data-section="agroserv"
            className="component-block__title mb section"
            id="agroserv">
          ОАО "Светлогорский агросервис"
        </h2>
        <figure className="max-w-lg mx-auto my">
          <Image className="max-w-full mx-auto h-auto rounded-lg" src={agroserv}
                 alt='ОАО "Светлогорский агросервис"'/>
        </figure>
        <p className="mb">Технический центр является дилером ОАО «Гомсельмаш», ОАО «МАЗ», СП «МАЗ-MAN», ОАО «ММЗ», ОАО
          «Лидагромпроммаш», ОАО «Лидсельмаш», СП «Вестерн технолоджиз», ОАО «Бобруйскагромаш».</p>
        <p className="mb">В зону обслуживания ТЦ ОАО «Светлогорский агросервис» по ОАО «Гомсельмаш» входят 5 районов
          Гомельской
          области: Светлогорский, Речицкий, Октябрьский, Жлобинский и Рогачевский. По ОАО «Лидагромпроммаш и ОАО
          «Лидсельмаш» — вся Гомельская область.</p>
        <p className="mb">Для проведения сервисного и технического обслуживания машин указанных предприятий имеются
          квалифицированные и обученные специалисты и весь комплект необходимого технологического, диагностического и
          производственного оборудования.</p>
        <p className="mb">Для оперативного устранения отказов в работе техники имеются 5 мобильных бригад, оснащенных
          пятью
          автомобилями, укомплектованными необходимым набором оборудования, инструмента и мобильной связью.</p>
        <h2 data-section="tehmontag"
            className="component-block__title mb section"
            id="tehmontag">
          Светлогорское монтажное управление ОАО Гомельтехмонтаж
        </h2>
        <figure className="max-w-lg mx-auto my">
          <Image className="max-w-full mx-auto h-auto rounded-lg" src={tehmontag}
                 alt="Светлогорское монтажное управление ОАО Гомельтехмонтаж"/>
        </figure>
        <p className="mb">Светлогорское монтажное управление - структурное подразделение ОАО «Гомельтехмонтаж». Филиал,
          образованный в 1978 году, осуществляет строительно-монтажные, специальные работы, монтаж сооружений,
          технологического оборудования, трубопроводов, а также изготавливает конструкции из металла. Среди наших
          заказчиков
          ОАО «Светлогорский ЦКК», ОАО «СветлогорскХимволокно», ОАО «Мозырский НПЗ», ОАО «Нафтан», РУП ПО
          «Белоруснефть»,
          ОАО «БМЗ - управляющая компания холдинга «БМК». </p>
        <p className="mb">В составе управления собственная производственная база, оснащенная современным оборудованием,
          механизмами, позволяющими изготавливать качественные трубные узлы, металлоконструкции различного
          назначения.</p>
        <p className="mb">За год выпускаем около 450 тонн изделий и конструкций из металла. Наши сотрудники -
          профессионалы
          своего дела, обладающие высокой квалификацией, аттестацией на выполнение необходимых видов деятельности.
          Гарантируем качественное и оперативное выполнение задач без срывов оговоренных сроков. </p>
        <h2 data-section="hlebzavod"
            className="component-block__title mb section"
            id="hlebzavod">
          Филиал Светлогорский хлебозавод РУП «Гомельхлебпром»
        </h2>
        <figure className="max-w-lg mx-auto my">
          <Image className="max-w-full mx-auto h-auto rounded-lg" src={hlebzavod}
                 alt="Филиал Светлогорский хлебозавод РУП «Гомельхлебпром»"/>
        </figure>
        <p className="mb">С 1963 года предприятие поставляет ароматную вкусную продукцию в торговые предприятия
          Светлогорского
          района. 169 работников хлебозавода обеспечивают выпуск 225 тонн хлебобулочных и 50 тонн кондитерских изделий в
          месяц, которые поставляются более чем в тысячу объектов торговли, детские сады и школы. Последнее десятилетие
          предприятие расширило границы поставок хлеба, пряников, печенья и тортов светлогорского бренда по всей
          территории
          Республики Беларусь.</p>
        <p className="mb">О том, какой хлеб наиболее популярен и пользуется большим спросом у покупателей, рассказала
          начальник
          производственно-технологической лаборатории Ирина Цветкова: «Хлеб «Светлогорский с зеленым чаем» – уже 20 лет
          на
          рынке. Его гармоничный вкус получился благодаря составу, в который входят зеленый чай, концентрат квасного
          сусла,
          солод. Хлеб «Фирменный оригинальный» содержит семена подсолнечника и кунжута, а «Паричский классический» и
          «Чирковичский» – это основные сорта хлеба без добавок, которые пользуются наибольшей популярностью у
          покупателей.
          Булочные изделия «Хала с кунжутом», булка «Светлогорская» с отрубями и многие другие являются собственными
          разработками высококлассных инженеров-технологов Светлогорского хлебозавода.</p>
        <p className="mb">По словам Ирины Цветковой, хлебозавод еще выпускает хлеб «Хозяйский простой», «Встречный
          новый»,
          которые предназначены для диетического и профилактического питания.</p>
        <p className="mb">Кроме того, хлебозавод выпускает и многочисленные кондитерские изделия: пряники, печенье,
          мучные
          сладости, торты, пирожные, сладости сахарные. Из широкой линейки ассортимента выделяются «Пряники имбирные»,
          «Пряники Светлогорские» с ароматом топленого молока, «Постные», «Шоколадные», печенье овсяное «Имбирное»,
          «Шатилинское» с арахисом, «Наслаждение» с кунжутом – они способны удовлетворить самый требовательный вкус
          покупателя. Торты «Три сестры», «Карамельный глянец», «Лесная поляна» уже много лет являются любимым
          лакомством у
          знатоков и ценителей высокого кондитерского искусства. Все они изготавливаются исключительно из
          высококачественного натурального сырья, а потому обладают превосходными органолептическими характеристиками и
          привлекательным внешним видом.</p>
      </Layout>
    </>
  )
}