export type MenuItem = { name: string; price: number };
export type MenuSection = { id: string; title: string; items: MenuItem[] };

export const menu: MenuSection[] = [
  {
    id: "buldak",
    title: "Buldak",
    items: [
      { name: "Cheesy Samyang", price: 139 },
      { name: "Samyang Overload", price: 179 },
      { name: "Samyang Poppers", price: 189 },
      { name: "Burrito Samyang", price: 199 },
    ],
  },
  {
    id: "chicken",
    title: "Chicken",
    items: [
      { name: "Garlic Parmesan Wings", price: 189 },
      { name: "Buffalo Wings", price: 189 },
      { name: "Garlic Parmesan Tenders", price: 179 },
      { name: "Buffalo Tenders", price: 179 },
    ],
  },
  {
    id: "rice-meal",
    title: "Rice Meal",
    items: [
      { name: "Spam Rice", price: 99 },
      { name: "Chicken Tenders", price: 119 },
      { name: "Wings Rice Bowl", price: 119 },
    ],
  },
  {
    id: "spud-potato",
    title: "Spud Potato",
    items: [
      { name: "Chili Con Carne", price: 179 },
      { name: "Cheesy Bacon", price: 149 },
      { name: "Chicken Poppers", price: 149 },
    ],
  },
  {
    id: "quesadilla",
    title: "Quesadilla",
    items: [
      { name: "Tuna Quesadilla", price: 149 },
      { name: "Beef Quesadilla", price: 159 },
    ],
  },
];
