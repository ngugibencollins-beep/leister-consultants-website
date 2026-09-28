const unsplash = (id, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const SITE_IMAGES = {
  financialDesk: {
    src: unsplash('photo-1707157284454-553ef0a4ed0d'),
    alt: 'Financial reports, a calculator, and a smartphone arranged on a desk',
    creditHref: 'https://unsplash.com/photos/office-desk-with-smartphone-and-financial-charts-heiYgqp0Tsk',
  },
  financialLaptop: {
    src: unsplash('photo-1710488350873-392a99d1da5d'),
    alt: 'Laptop and calculator side by side on an office desk',
    creditHref: 'https://unsplash.com/photos/a-laptop-computer-sitting-on-top-of-a-desk-next-to-a-calculator-fgNgbnMdgBM',
  },
  advisoryMeeting: {
    src: unsplash('photo-1707902665498-a202981fb5ac'),
    alt: 'Desk with calculator and notebook, financial charts on screen',
    creditHref: 'https://unsplash.com/photos/a-person-sitting-at-a-desk-with-a-calculator-and-a-notebook-LNnmSumlwO4',
  },
  solarProject: {
    src: unsplash('photo-1756913455114-182d7584ed49'),
    alt: 'Solar farm in a rural landscape under a clear sky',
    creditHref: 'https://unsplash.com/photos/solar-farm-in-a-rural-landscape-under-a-clear-sky-SuHKJl7nPho',
  },
  governanceBoardroom: {
    src: unsplash('photo-1431540015161-0bf868a2d407'),
    alt: 'Oval wooden conference table and chairs in a boardroom',
    creditHref: 'https://unsplash.com/photos/oval-brown-wooden-conference-table-and-chairs-inside-conference-room-GWe0dlVD9e0',
  },
  complianceTiles: {
    src: unsplash('photo-1704969724221-8b7361b61f75'),
    alt: 'The word compliance spelled out with wooden letter tiles',
    creditHref: 'https://unsplash.com/photos/compliance-spelled-with-wooden-letter-tiles-UGfFIrvCXVY',
  },
  financialCoins: {
    src: '/images/financial-management-kes.jpg',
    alt: 'Kenyan shilling banknotes, a calculator, and financial charts on a desk',
    creditHref: null,
  },
  secretarialTable: {
    src: '/images/company-secretarial-safe.jpg',
    alt: 'A SAFE agreement document with a pen resting on top',
    creditHref: null,
  },
};
