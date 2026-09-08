const unsplash = (id, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const SITE_IMAGES = {
  financialDesk: {
    src: unsplash('photo-1707157284454-553ef0a4ed0d'),
    alt: 'Financial reports, a calculator, and a smartphone arranged on a desk',
    credit: 'Jakub Żerdzicki / Unsplash',
    creditHref: 'https://unsplash.com/photos/office-desk-with-smartphone-and-financial-charts-heiYgqp0Tsk',
  },
  financialLaptop: {
    src: unsplash('photo-1710488350873-392a99d1da5d'),
    alt: 'Laptop and calculator side by side on an office desk',
    credit: 'Jakub Żerdzicki / Unsplash',
    creditHref: 'https://unsplash.com/photos/a-laptop-computer-sitting-on-top-of-a-desk-next-to-a-calculator-fgNgbnMdgBM',
  },
  advisoryMeeting: {
    src: unsplash('photo-1707902665498-a202981fb5ac'),
    alt: 'Desk with calculator and notebook, financial charts on screen',
    credit: 'Jakub Żerdzicki / Unsplash',
    creditHref: 'https://unsplash.com/photos/a-person-sitting-at-a-desk-with-a-calculator-and-a-notebook-LNnmSumlwO4',
  },
  solarProject: {
    src: unsplash('photo-1756913455114-182d7584ed49'),
    alt: 'Solar farm in a rural landscape under a clear sky',
    credit: 'Vlad Burac / Unsplash',
    creditHref: 'https://unsplash.com/photos/solar-farm-in-a-rural-landscape-under-a-clear-sky-SuHKJl7nPho',
  },
};