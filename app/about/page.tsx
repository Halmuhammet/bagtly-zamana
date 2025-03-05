"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"


const translations = {
  en: {
    title: "About Bagtly Zamana",
    slogan: "We care about cleanliness",
    history:
      'Economic Society "Bagtli Zamana" was founded in 2013 and started production of synthetic detergents and beauty soap in 2019. At present, the enterprise is one of the leading manufacturers of household chemicals in Turkmenistan.',
    mainActivity:
      "The main activity of the enterprise is the production of detergents, bleaching agents and beauty soaps.",
    uniqueTechnology:
      'THE ENTERPRISE IS THE ONLY MANUFACTURER IN THE COUNTRY THAT USES THE "TOWER METHOD" IN THE PRODUCTION OF WASHING DETERGENTS ACCORDING TO ITALIAN TECHNOLOGY.',
    productionCapacity:
      "Our production plant is equipped with production equipment from leading Italian manufacturers and has a capacity of 40,000 tons of detergents and 2,400 tons of beauty soap per year.",
    productRange: "ENTERPRISE PRODUCES MORE THAN 20 TYPES OF PRODUCTS THAT ARE IN HIGH DEMAND AMONG THE POPULATION.",
    productionProcess:
      "The entire production process is fully automatic, which ensures an increase in productivity and product quality.",
    marketDemand:
      "The enterprise manufactures products that are in high demand among the population in the market of similar goods and are of high quality and reliability.",
    characteristics: "CHARACTERISTICS OF OUR DETERGENTS",
    characteristicsList: [
      "High flowability",
      "Homogeneous composition",
      "No synthetic dust",
      "Quickly soluble in water",
      "Highly concentrated",
      "Preserves the structure and color of the garment",
      "Has a fresh and pleasant fragrance",
      "Easily removes stubborn stains",
      "Evenly dispersed components in granules",
      "Effective at low temperatures and all water hardness",
    ],
    contactUs: "Contact Us",
  },
  ru: {
    title: "О компании Багтлы Замана",
    slogan: "Мы заботимся о чистоте",
    history:
      'Хозяйственное общество "Багтлы Замана" основано в 2013 году и начало производство синтетических моющих средств и туалетного мыла в 2019 году. В настоящее время предприятие является одним из ведущих производителей бытовой химии в Туркменистане.',
    mainActivity: "Основная деятельность предприятия - производство моющих средств, отбеливателей и туалетного мыла.",
    uniqueTechnology:
      'ПРЕДПРИЯТИЕ ЯВЛЯЕТСЯ ЕДИНСТВЕННЫМ ПРОИЗВОДИТЕЛЕМ В СТРАНЕ, ИСПОЛЬЗУЮЩИМ "БАШЕННЫЙ МЕТОД" В ПРОИЗВОДСТВЕ МОЮЩИХ СРЕДСТВ ПО ИТАЛЬЯНСКОЙ ТЕХНОЛОГИИ.',
    productionCapacity:
      "Наше производство оснащено оборудованием от ведущих итальянских производителей и имеет мощность 40 000 тонн моющих средств и 2 400 тонн туалетного мыла в год.",
    productRange: "ПРЕДПРИЯТИЕ ПРОИЗВОДИТ БОЛЕЕ 20 ВИДОВ ПРОДУКЦИИ, ПОЛЬЗУЮЩЕЙСЯ ВЫСОКИМ СПРОСОМ СРЕДИ НАСЕЛЕНИЯ.",
    productionProcess:
      "Весь производственный процесс полностью автоматизирован, что обеспечивает повышение производительности и качества продукции.",
    marketDemand:
      "Предприятие производит продукцию, пользующуюся высоким спросом среди населения на рынке аналогичных товаров, отличающуюся высоким качеством и надежностью.",
    characteristics: "ХАРАКТЕРИСТИКИ НАШИХ МОЮЩИХ СРЕДСТВ",
    characteristicsList: [
      "Высокая текучесть",
      "Однородный состав",
      "Отсутствие синтетической пыли",
      "Быстро растворяется в воде",
      "Высококонцентрированное",
      "Сохраняет структуру и цвет одежды",
      "Имеет свежий и приятный аромат",
      "Легко удаляет стойкие пятна",
      "Равномерно распределенные компоненты в гранулах",
      "Эффективно при низких температурах и любой жесткости воды",
    ],
    contactUs: "Свяжитесь с нами",
  },
  tm: {
    title: "Bagtly Zamana barada",
    slogan: "Biz arassaçylygyň aladasyny edýäris",
    history:
      '"Bagtly Zamana" hojalyk jemgyýeti 2013-nji ýylda esaslandyryldy we 2019-njy ýylda sintetiki ýuwujy serişdeleriň we hajathana sabynlarynyň önümçiligine başlady. Häzirki wagtda kärhanamyz Türkmenistanda öý hojalyk himiýasynyň öňdebaryjy öndürijileriniň biridir.',
    mainActivity: "Kärhananyň esasy işi ýuwujy serişdeleriň, agardyjylaryň we hajathana sabynlarynyň öndürilmesidir.",
    uniqueTechnology:
      'KÄRHANAMYZ ÝUWUJY SERIŞDELERIŇ ÖNDÜRILIŞINDE ITALIÝA TEHNOLOGIÝASY BOÝUNÇA "BAŞNÝA USULYNY" ULANÝAN ÝURDUŇ ÝEKE-TÄK ÖNDÜRIJISIDIR.',
    productionCapacity:
      "Önümçilik desgamyz öňdebaryjy Italiýa öndürijileriniň enjamlaryndan enjamlaşdyrylan we ýylda 40 000 tonna ýuwujy serişde we 2 400 tonna hajathana sabynyny öndürmek kuwwatyna eýedir.",
    productRange: "KÄRHANAMYZ ILAT ARASYNDA ÝOKARY ISLEG BILDIRILÝÄN 20-DEN GOWRAK GÖRNÜŞLI ÖNÜM ÖNDÜRÝÄR.",
    productionProcess:
      "Tutuş önümçilik prosesi doly awtomatlaşdyrylan, bu bolsa önümçiligiň we önümiň hiline ýokarlanmagyny üpjün edýär.",
    marketDemand:
      "Kärhanamyz meňzeş harytlar bazarynda ilat arasynda ýokary isleg bildirilýän, ýokary hilli we ygtybarly önümleri öndürýär.",
    characteristics: "ÝUWUJY SERIŞDELERIMIZIŇ AÝRATYNLYKLARY",
    characteristicsList: [
      "Ýokary akyjylyk",
      "Birmeňzeş düzüm",
      "Sintetiki tozanyň ýoklugy",
      "Suwda çalt ereýär",
      "Ýokary konsentrasiýaly",
      "Eşigiň gurluşyny we reňkini saklaýar",
      "Ter we ýakymly ysly",
      "Kyn tegmilleri aňsatlyk bilen aýyrýar",
      "Granullarda deň paýlanan düzüm bölekleri",
      "Pes temperaturada we ähli suw gatylygynda täsirli",
    ],
    contactUs: "Biz bilen habarlaşyň",
  },
}

export default function AboutPage() {
  const { language } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto bg-white px-4 sm:px-8 md:px-16 lg:px-28 py-8 pt-32">
        <h1 className="text-4xl font-bold mb-4 text-green-800 font-playfair">{translations[language].title}</h1>
        <p className="text-xl mb-8 text-green-600 italic">{translations[language].slogan}</p>
        <div className="prose max-w-none">
          <p className="mb-4">{translations[language].history}</p>
          <p className="mb-4">{translations[language].mainActivity}</p>
          <video 
            controls
            autoPlay 
            loop 
            muted 
            className="w-full h-auto object-cover rounded mb-6"
            width={300}
            height={300}
          >
            <source src="/website_visuals/FactoryProductionVideo.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="mb-4 text-green-700 font-bold">{translations[language].uniqueTechnology}</p>
          <p className="mb-4">{translations[language].productionCapacity}</p>

          <Image
                  src= "/website_visuals/more/factory.png"
                  alt="Factroy image"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover mb-6 rounded"
                />
          <p className="mb-4 text-green-700 font-bold">{translations[language].productRange}</p>
          <p className="mb-4">{translations[language].productionProcess}</p>
          <p className="mb-4">{translations[language].marketDemand}</p>
          <Image 
            src= "/website_visuals/more/aboutBannerTwo.af5d7778.png"
            alt="Factroy image"
            width={300}
            height={300}
            className="w-full h-auto object-cover mb-6 rounded"
          />
          <h2 className="text-2xl font-bold mt-8 mb-4 text-green-700">{translations[language].characteristics}</h2>
          <ul className="list-disc pl-5 mb-4">
            {translations[language].characteristicsList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}

