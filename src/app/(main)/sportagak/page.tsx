import { Metadata } from 'next';
import { ReactNode } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons/faHashtag';

export const metadata: Metadata = {
  title: 'Sportágak',
};

function Title({ children, id }: Readonly<{ children: ReactNode; id: string }>) {
  return (
    <h2
      id={id}
      className="group/title flex flex-row text-3xl font-bold tracking-tight transition-colors duration-200 text-gray-900 sm:text-4xl dark:text-bg-contrast"
    >
      <a href={`#${id}`} className={`flex items-center align-middle standalone:hidden print:hidden`}>
        <FontAwesomeIcon
          icon={faHashtag}
          className={`invisible size-6 group-hover/title:visible dark:text-bg-contrast`}
        />
      </a>
      {children}
    </h2>
  );
}

function Media({ src, alt, priority }: Readonly<{ src: string; alt: string; priority?: boolean }>) {
  return (
    <div className="grid gap-4 sm:gap-6 lg:gap-8">
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        priority={priority}
        className={`hidden size-auto rounded-lg object-scale-down lg:block print:hidden`}
      />
    </div>
  );
}

function Entry({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 px-4 py-6 sm:gap-y-16 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8 print:grid-cols-1 print:py-0 print:[page-break-after:always] [&>div:first-of-type]:even:lg:order-last">
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <main className="flex flex-col bg-white dark:bg-gray-800">
      <h1 className={`mx-auto text-xl text-bg-contrast`}>Az adatok nem véglegesek!</h1>
      <Entry>
        <div
          className={`prose prose-headings:text-gray-600 prose-p:hyphens-auto prose-p:text-justify
          prose-p:text-gray-600 prose-ol:text-gray-600 prose-ul:hyphens-auto
          prose-ul:text-justify prose-ul:text-gray-600 dark:prose-headings:text-bg-contrast prose-p:dark:text-bg-contrast
          prose-ol:dark:text-bg-contrast prose-ul:dark:text-bg-contrast`}
        >
          <Title id={`Labdarúgás`}>Labdarúgás</Title>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Helyszín</dt>
              <dd className="mt-2 text-sm capitalize text-gray-500 dark:text-bg-contrast/80">
                Nyíregyházi Spartacus Sportpálya
              </dd>
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Sportág felelős</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ul>
                  <li></li>
                </ul>
              </dd>
            </div>
          </dl>
          <h3>Fontosabb szabályok</h3>
          <p>
            A résztvevő csapatokat három 4 csapatos csoportba sorsoltuk. A mérkőzések két pályán kerülnek megrendezésre.
            A győzelemért három pont jár, döntetlen esetén mindkét csapat egy-egy pontot kap. A csoportok sorrendje a
            körmérkőzések után alakul ki.
          </p>
          <p>Pontazonosság esetén a csoportok sorrendjét az alábbiak szerint állapítjuk meg:</p>
          <ol>
            <li>Egymás elleni eredmény</li>
            <li>Gólkülönbség</li>
            <li>Rúgott gólok száma</li>
            <li>Sorsolás</li>
          </ol>
          <p>
            A játékosok csak terem- vagy salak/műfüves cipőt használhatnak.{' '}
            <span className={`inline-block max-w-full text-balance font-bold uppercase`}>
              Stoplis cipő használata tilos!
            </span>{' '}
            A mérkőzések kétszer <span className={`underline decoration-from-font`}>12 percig tartanak</span>,{' '}
            <span className={`italic`}>
              a csapatok 5 fő mezőnyjátékosból és 1 fő kapusból, továbbá mérkőzésenként maximum 4 fő cserejátékosból
              állnak.
            </span>{' '}
            A mérkőzésekről külön jegyzőkönyvek készülnek, a csapatkapitány a kijelölt sportágfelelősnél, vagy
            segédjeinél előre le kell, hogy adja a mérkőzésre nevezett játékosok nevét és mezszámát.
          </p>
          <h3>A mérkőzések a kispályás labdarúgás szabályi szerint kerülnek megrendezésre az alábbiak szerint</h3>
          <ul>
            <li>
              a támadó csapat tagjáról az alapvonalon túlra került labdát a kapus kidobással vagy kirúgással, akár a
              felezővonalon túlra is játékba hozhatja, de a játékba hozatalhoz a labda el kell hogy hagyja a büntető
              területet
            </li>
            <li>a játékban lévő labdával a kapus is érhet el gólt, akár kidobásból is</li>
            <li>az oldalbedobást a kapus kézzel nem foghatja meg</li>
            <li>
              a védekező csapat tagjáról – beleértve a kapust is – az alapvonalon túlra került labda szögletrúgással,
              míg az oldalvonalon túlra került labda bedobással és berúgással is játékba hozható
            </li>
            <li>
              a kiállítás 2 perces, vagy végleges lehet, a 2 perces kiállítást követően akár a kiállított játékos, vagy
              a csapat másik tagja is pályára léphet
            </li>
            <li>végleges kiállítás esetén a kiállított játékos helyére 5 perc elteltével új játékos léphet pályára</li>
            <li>
              <q>becsúszás</q> nem engedélyezett, ezt a játékvezető szabadrúgással bünteti
            </li>
            <li>
              a csoportmérkőzéseket követően, az <q>egyenes</q> kieséses szakaszban döntetlen esetén 3-3 büntetőrúgás
              dönti el a mérkőzést, majd amennyiben továbbra is döntetlen, 1-1 rúgó, felváltva következik, azzal, hogy a
              csapatok minden tagjának (ideértve a kapust is) büntetőjét követően lőhet újra az, aki már korábban is
              szerepelt.
            </li>
          </ul>
          <p>
            A mérkőzéseket játékvezetői vizsgával rendelkező személyek vezetik. A mérkőzés időpontjában a játékvezető
            döntésének függvénye, hogy a mérkőzés az időjárási viszonyok mellett megrendezhető-e, illetve félbeszakítása
            szükséges-e.
          </p>
        </div>
        <Media
          src={'https://source.unsplash.com/person-playing-soccer-mY2ZHBU6GRk'}
          alt={'Labdarúgás'}
          priority={true}
        />
      </Entry>
      <Entry>
        <div
          className={`prose prose-headings:text-gray-600 prose-p:hyphens-auto prose-p:text-justify
          prose-p:text-gray-600 prose-ol:text-gray-600 prose-ul:hyphens-auto
          prose-ul:text-justify prose-ul:text-gray-600 dark:prose-headings:text-bg-contrast prose-p:dark:text-bg-contrast
          prose-ol:dark:text-bg-contrast prose-ul:dark:text-bg-contrast`}
        >
          <Title id={`Úszás`}>Úszás</Title>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Helyszín</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">Egyetemi uszoda</dd>
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Időpont</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <time dateTime={`2024-06-29T09:00`}>2024. június 29. szombat 9.00</time>
              </dd>
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Sportág felelős</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ul>
                  <li></li>
                </ul>
              </dd>
            </div>
          </dl>
          <h3>Szabályok</h3>
          <p>
            A résztvevő csapatok kettő futamba nyertek sorsolás alapján besorolást (6-6). A csapatok 4 főből, 2-2 fő
            férfi és női úszóból állnak. A férfiúszók száma 2 főnél nem lehet több, elháríthatatlan akadály esetén egy
            női versenyző kétszer is teljesítheti a távot. A táv 4 x 66 méter mellúszásban, versenyzőnként egy
            fordulóval (mivel a medence 33 méter) úgy, hogy a falat kézzel meg kell érinteni. Az ún. bukóforduló nem
            engedélyezett. A váltások sorrendjét a csapatok döntik el, de ha csak egy női versenyző van a csapatban,
            akkor egymás utáni két távot nem úszhat. Az indulás és a váltás is a medencében történik, a végső sorrendet
            az elért időeredmények határozzák meg.
          </p>
        </div>
        <Media src={'https://source.unsplash.com/people-in-swimming-pool-TVOAbbLL050'} alt={'Úszás'} />
      </Entry>
      <Entry>
        <div
          className={`prose prose-headings:text-gray-600 prose-p:hyphens-auto prose-p:text-justify
          prose-p:text-gray-600 prose-ol:text-gray-600 prose-ul:hyphens-auto
          prose-ul:text-justify prose-ul:text-gray-600 dark:prose-headings:text-bg-contrast prose-p:dark:text-bg-contrast
          prose-ol:dark:text-bg-contrast prose-ul:dark:text-bg-contrast`}
        >
          <Title id={`Futás`}>Síkfutás</Title>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Helyszín</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">Egyetemi sportpálya</dd>
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Időpont</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <time dateTime={`2024-06-28`}>2024. június 28. péntek</time>
                <ul>
                  <li>
                    <time dateTime={`2024-06-28T13:00`}>13.00 óra</time> (női futam)
                  </li>
                  <li>
                    <time dateTime={`2024-06-28T13:30`}>13.30 óra</time> (férfi futam)
                  </li>
                </ul>
              </dd>
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Sportág felelős</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ul>
                  <li className={`inline-block`}></li>
                </ul>
              </dd>
            </div>
          </dl>
          <h3>Szabályok</h3>
          <p>
            A résztvevő női és férfi versenyzők 400 méteres atlétika pályán (rekortán) futnak, a nők 200 méteres (1/2
            kör), a férfiak 400 méteres (1 kör) távon.
          </p>
          <p>
            Az első futam a női, a második futam a férfi, a futamokban egyszerre 6-6 megye képviselői indulnak, a női és
            férfi futambeosztások azonosak.
          </p>
          <p>Szöges cipő használata nem engedélyezett.</p>
        </div>
        <Media src={'https://source.unsplash.com/group-of-people-running-on-stadium-atSaEOeE8Nk'} alt={'Futás'} />
      </Entry>
      <Entry>
        <div
          className={`prose prose-headings:text-gray-600 prose-p:hyphens-auto prose-p:text-justify
          prose-p:text-gray-600 prose-ol:text-gray-600 prose-ul:hyphens-auto
          prose-ul:text-justify prose-ul:text-gray-600 dark:prose-headings:text-bg-contrast prose-p:dark:text-bg-contrast
          prose-ol:dark:text-bg-contrast prose-ul:dark:text-bg-contrast`}
        >
          <Title id={`Asztalitenisz`}>Asztalitenisz</Title>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Helyszín</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">Nyíregyházi Egyetem</dd>
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Időpont</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <time dateTime={`2024-06-28T13:00`}>2024. június 28. 13:00</time> (kezdéssel folyamatosan)
              </dd>
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Sportág felelős</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ul>
                  <li></li>
                </ul>
              </dd>
            </div>
          </dl>
          <h3>Játékszabályok</h3>
          <p>
            A játszmát az a játékos nyeri, aki előbb éri el a 11 pontot, kivéve, ha mindkét játékos 10 pontot szerzett.
            Ebben az esetben a játszmát az a játékos nyeri, akinek elsőként lesz 2 ponttal többje, mint ellenfelének. A
            mérkőzés két nyert játszmáig tart.
          </p>
          <p>
            A játékosok az adogatás- és a fogadás rendjének a jogát sorsolással döntik el, és a győztes választhat, hogy
            elsőként adogat vagy elsőként fogad. Minden második pontszerzés után a fogadó játékos adogató játékos lesz,
            és így tovább felváltva a játszma végéig, kivéve, ha mindkét játékos már 10 pontot szerzett, mert ekkortól
            az adogatás és fogadás rendje azonos, de pontonként cserélődik.
          </p>
          <p>
            Az a játékos, aki egy játszmában az egyik térfélen kezd játszani, a soron következő játszmát a túlsó
            térfélen játssza. A mérkőzés döntő játszmájában a játékosok akkor cserélnek térfelet, amikor valamelyik
            játékos elsőként eléri az 5 pontot. A mérkőzések során az eredményt a versenyzők számolják, majd a mérkőzés
            végeredményét – <span className={`italic`}>az egyes játszmák eredményének megadásával</span> – a
            sportágfelelősnek diktálják be, illetve a jegyzőkönyvet ellátják szignójukkal. Fehér felsőben játszani nem
            lehet.
          </p>
          <h3>Lebonyolítás</h3>
          <p>
            Kettő (A és B) hatos csoportban kezdődnek a küzdelmek. A csoportmérkőzések során körmérkőzések lesznek,
            annak alapján alakul ki a csoport végeredménye. Ezt követően minden csoport azonos helyezési számú
            versenyzői játszák egymás ellen a helyosztókat, azaz a csoportokban első helyen végző két versenyző az első
            helyért, a csoportokban második helyen végző két versenyző a harmadik helyért és így tovább…
          </p>
        </div>
        <Media
          src={'https://source.unsplash.com/red-and-brown-wooden-table-tennis-racket-i0kB5B9J8Ds'}
          alt={'Asztalitenisz'}
        />
      </Entry>
      <Entry>
        <div
          className={`prose prose-headings:text-gray-600 prose-p:hyphens-auto prose-p:text-justify
          prose-p:text-gray-600 prose-ol:text-gray-600 prose-ul:hyphens-auto
          prose-ul:text-justify prose-ul:text-gray-600 dark:prose-headings:text-bg-contrast prose-p:dark:text-bg-contrast
          prose-ol:dark:text-bg-contrast prose-ul:dark:text-bg-contrast`}
        >
          <Title id={`Súlylökés`}>Férfi Súlylökés</Title>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Helyszín</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">egyetemi sportpálya</dd>
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Időpont</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <time dateTime={`2024-06-24`}>2024. június 24.</time>
              </dd>
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Sportág felelős</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ul>
                  <li className={`inline-block`}></li>
                </ul>
              </dd>
            </div>
          </dl>
          <h3>Szabályok</h3>
          <p>
            A résztvevők a nevezett csapatok ABC sorrendjében dobnak, egy próbadobás, majd három mért kísérlet
            következik. A férfiversenyzők 4 kg-os súlygolyóval dobnak. A végeredményt a három mért dobás közül a legjobb
            adja, egyenlőség esetén sorrendben a legjobb második, majd a legjobb harmadik dobás alakítja ki.
          </p>
        </div>
        <div></div>
        {/*<Media src={'https://source.unsplash.com/basketball-on-ring-QAX5Ylx-lKo'} alt={'Súlylökés'} />*/}
      </Entry>
      <Entry>
        <div
          className={`prose prose-headings:text-gray-600 prose-p:hyphens-auto prose-p:text-justify
          prose-p:text-gray-600 prose-ol:text-gray-600 prose-ul:hyphens-auto
          prose-ul:text-justify prose-ul:text-gray-600 dark:prose-headings:text-bg-contrast prose-p:dark:text-bg-contrast
          prose-ol:dark:text-bg-contrast prose-ul:dark:text-bg-contrast`}
        >
          <Title id={`Darts`}>Darts</Title>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Helyszín</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                Az egyetem ebédlője az esti buli helyszíne
              </dd>
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Időpont</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <time dateTime={`2024-06-28T20:00`}>2024. június 28. péntek 20 óra</time>
              </dd>
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Sportág felelős</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ul>
                  <li className={`inline-block max-w-full`}></li>
                </ul>
              </dd>
            </div>
          </dl>
          <h3>Szabályok</h3>
          <p>
            A résztvevő női és férfi versenyzők párosítását sorsolással állapítottuk meg. a női és férfi versenyzők
            külön-külön versenyeznek és eredményeik a csapatpontszámba külön-külön számítanak be.
          </p>
          <p>
            Egységes versenykiírás vonatkozik mindkét nemre. A verseny egyenes kieséses rendszerrel kerül
            lebonyolításra.
          </p>
          <p>
            A verseny lebonyolítására{' '}
            <span className={`font-bold italic underline decoration-from-font`}>két/három</span> gép áll rendelkezésre.
          </p>
          <p>
            Női és férfi versenyzőnként 12 sorozat (1 sorozat 3 nyíl) dobásra beállított (gépi korlátozással), 301-ről
            kezdődő sima kiszállóval történő verseny. A győzelemhez egy nyert parti szükséges. Az adott partin belül
            maximum (12) sorozat esetén az a győztes, aki közelebb áll a nullához. Amennyiben a kezdőjátékos eléri a
            nullát, a második játékos még ledobja a saját körét és ez alapján állapítjuk meg a parti eredményét.
            Pontegyenlőség esetén a már ledobott pontszámon kívül plusz egy dobás, aki nagyobbat dob, az nyer.
          </p>
          <h3>Pontozás</h3>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">7–12. hely</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <p>az első körben kiesett versenyzők esetében a helyezéseket</p>
                <ul>
                  <li>a vesztes játszmák során a nullához közelebb álló pontok száma</li>
                  <li>pontegyenlőség esetén szétdobással a nagyobb pontszám dönti el a helyezést</li>
                </ul>
              </dd>
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">4-6. hely</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <p>a második körben kiesett versenyzők esetében a helyezéseket</p>
                <ul>
                  <li>második körben vesztes játszmák során a nullához közelebb álló pontok száma</li>
                  <li>pontegyenlőség esetén szétdobással a nagyobb pontszám dönti el a helyezést</li>
                </ul>
              </dd>
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">1-3. hely</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <p>
                  a döntőbe jutott legjobb három versenyző egy táblán, egy dobássorozattal dönti el (12-es korlátozás
                  nélkül) a helyezéseket
                </p>
                <ul>
                  <li>a nullára kiszálló a győztes</li>
                  <li>a másik két helyezést a versenyzők addig elért pontszám</li>
                  <li>pontegyenlőség esetén szétdobással a nagyobb pontszám dönti el a helyezést</li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
        <Media src={'https://source.unsplash.com/red-white-and-black-round-wheel-RjqCk9MqhNg'} alt={'Darts'} />
      </Entry>
      <Entry>
        <div
          className={`prose prose-headings:text-gray-600 prose-p:hyphens-auto prose-p:text-justify
          prose-p:text-gray-600 prose-ol:text-gray-600 prose-ul:hyphens-auto
          prose-ul:text-justify prose-ul:text-gray-600 dark:prose-headings:text-bg-contrast prose-p:dark:text-bg-contrast
          prose-ol:dark:text-bg-contrast prose-ul:dark:text-bg-contrast`}
        >
          <Title id={`Kosárlabda`}>Kosárlabda</Title>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Helyszín</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80"></dd>
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Időpont</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <time dateTime={`2024-06-29T09:00`}></time>
              </dd>
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Sportág felelős</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ul>
                  <li></li>
                </ul>
              </dd>
            </div>
          </dl>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero nec purus ultricies.</p>
        </div>
        <Media src={'https://source.unsplash.com/ball-under-basketball-ring-BfphcCvhl6E'} alt={'Kosárlabda'} />
      </Entry>
    </main>
  );
}
