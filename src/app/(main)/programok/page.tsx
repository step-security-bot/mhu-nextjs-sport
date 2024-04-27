import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Programok',
};

function Entry({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <article className={`border-collapse border-b border-solid pb-1 border-primary dark:border-primary-600`}>
      {children}
    </article>
  );
}

function Grid({ children }: Readonly<{ children: ReactNode }>) {
  return <div className={`grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-1`}>{children}</div>;
}

export default function Page() {
  return (
    <>
      <main
        className={`prose prose-sm m-auto box-border max-w-7xl p-2 dark:text-bg-contrast dark:prose-headings:text-bg-contrast`}
      >
        <h1 className={`dark:text-bg-contrast`}>Programok - 2024</h1>
        <section>
          <h2 className={`font-medium`}>December 2.</h2>
          <Grid>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium text-primary dark:text-primary-600`}>
                <time dateTime={`2011-12-02T09:00:00Z`}>9:00</time>
              </h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>10:00</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>12:30</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>13:30</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
              {/*<FontAwesomeIcon*/}
              {/*  icon={faMountainSun}*/}
              {/*  className={`h-[250px] w-full rounded-md object-cover bg-gray-100 sm:h-min sm:object-none`}*/}
              {/*  title={`Kép helye`}*/}
              {/*/>*/}
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>14:30</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>15:30</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>16:30</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>17:30</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
              {/*<FontAwesomeIcon*/}
              {/*  icon={faMountainSun}*/}
              {/*  className={`h-[250px] w-full rounded-md object-cover bg-gray-100 sm:h-min sm:object-none`}*/}
              {/*  title={`Kép helye`}*/}
              {/*/>*/}
            </Entry>
          </Grid>
        </section>
        <section>
          <h2 className={`font-medium`}>Január 3.</h2>
          <Grid>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>
                <time dateTime={`2012-01-03T09:00:00Z`}>9:00</time>
              </h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>10:00</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>12:30</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>13:30</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
              {/*<FontAwesomeIcon*/}
              {/*  icon={faMountainSun}*/}
              {/*  className={`h-[250px] w-full rounded-md object-cover bg-gray-100 sm:h-min sm:object-none`}*/}
              {/*  title={`Kép helye`}*/}
              {/*/>*/}
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>14:30</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>15:30</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>16:30</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>17:30</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
              {/*<FontAwesomeIcon*/}
              {/*  icon={faMountainSun}*/}
              {/*  className={`h-[250px] w-full rounded-md object-cover bg-gray-100 sm:h-min sm:object-none`}*/}
              {/*  title={`Kép helye`}*/}
              {/*/>*/}
            </Entry>
          </Grid>
        </section>
      </main>
    </>
  );
}
