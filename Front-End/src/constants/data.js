// import images from './images';

const ROLE = {
  ADMIN: "admin",
  CUSTOMER: "customer",
};

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: "Latif", role: ROLE.ADMIN },
    { id: 1, name: "Latif", role: ROLE.CUSTOMER },
    { id: 1, name: "Latif", role: ROLE.CUSTOMER },
  ],

  bicycle: [
    {
      title: "dayly",
      price: "$5",
    },
    {
      title: "weekly",
      price: "$30",
    },
    {
      title: "monthly",
      price: "$100",
    },
    {
      title: "annually",
      price: "$500",
    },
  ],
};

// export default { cocktails, awards };
