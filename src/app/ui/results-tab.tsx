'use client';
import { Tab } from '@headlessui/react';
import XlsxTable from '@/app/ui/XlsxTable';
import {
  IconBallBasketball,
  IconBallFootball,
  IconBallVolleyball,
  IconPingPong,
  IconRun,
  IconSwimming,
  IconTargetArrow,
} from '@tabler/icons-react';
import UnderConstruction from '@/app/ui/under-construction';

const tabs = [
  {
    title: 'Labdarúgás',
    icon: (
      <IconBallFootball
        className={`me-2 size-4 text-gray-400 group-hover:text-secondary-600 ui-selected:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 ui-selected:dark:text-primary-400`}
        aria-hidden="true"
        stroke={1.5}
      />
    ),
    content: <XlsxTable xlsx={`https://utfs.io/f/ddbfe101-56a4-48f6-84ce-48a24d090c44-nxmxdm.xlsx`} />,
  },
  {
    title: 'Úszás',
    icon: (
      <IconSwimming
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 ui-selected:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 ui-selected:dark:text-primary-400"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
    content: <UnderConstruction />,
  },
  {
    title: 'Futás',
    icon: (
      <IconRun
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 ui-selected:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 ui-selected:dark:text-primary-400"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
    content: <UnderConstruction />,
  },
  {
    title: 'Asztalitenisz',
    icon: (
      <IconPingPong
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 ui-selected:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 ui-selected:dark:text-primary-400"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
    content: <UnderConstruction />,
  },
  {
    title: 'Súlylökés',
    icon: (
      <IconBallVolleyball
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 ui-selected:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 ui-selected:dark:text-primary-400"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
    content: <UnderConstruction />,
  },
  {
    title: 'Darts',
    icon: (
      <IconTargetArrow
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 ui-selected:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 ui-selected:dark:text-primary-400"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
    content: <UnderConstruction />,
  },
  {
    title: 'Kosárlabda',
    icon: (
      <IconBallBasketball
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 ui-selected:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 ui-selected:dark:text-primary-400"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
    content: <UnderConstruction />,
  },
];

export default function ResultsTab({ className }: Readonly<{ className?: string }>) {
  return (
    <Tab.Group as={`div`} className={className}>
      <Tab.List className="-mb-px flex flex-wrap border-b text-center text-sm font-medium border-gray-200 text-gray-500 dark:border-gray-700 dark:text-gray-400">
        {tabs.map((tab) => (
          <Tab
            key={tab.title}
            className="me-2 focus-visible:outline-1 focus-visible:outline-primary-800 dark:focus-visible:outline-primary-600"
          >
            <div className="group inline-flex items-center justify-center rounded-t-lg border-b-2 p-4 hover:border-secondary-600 hover:text-secondary-600 ui-selected:border-primary ui-selected:text-primary ui-not-selected:border-transparent dark:hover:text-gray-300 ui-selected:dark:border-primary-400 ui-selected:dark:text-primary-400">
              {tab.icon}
              {tab.title}
            </div>
          </Tab>
        ))}
        {/*<Tab disabled>*/}
        {/*  <a className="inline-block cursor-not-allowed rounded-t-lg p-4 text-gray-400 dark:text-gray-500">Disabled</a>*/}
        {/*</Tab>*/}
      </Tab.List>
      <Tab.Panels>
        {tabs.map((tab) => (
          <Tab.Panel key={tab.title} className={`flex flex-col gap-1`}>
            {tab.content}
          </Tab.Panel>
        ))}
        {/*<Tab.Panel>Content 2</Tab.Panel>*/}
        {/*<Tab.Panel>Disabled content</Tab.Panel>*/}
      </Tab.Panels>
    </Tab.Group>
  );
}
