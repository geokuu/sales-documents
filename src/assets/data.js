const data = {
  invoices: [
    {
      type: "Receipt",
      number: 10012,
      date: new Date("2023-08-12T23:50:21.817Z"),
      customer: "Lydia Mägi",
      location: "Tallinn",
      state: "in progress",
      total: 190.0,
      paid: 160.0,
    },

    {
      type: "Prepayment",
      number: 10048,
      date: new Date("2023-01-10T23:50:21.817Z"),
      customer: "Carl Newton",
      location: "Tartu",
      state: "success",
      total: 1290.9,
      paid: 0.0,
    },

    {
      type: "Receipt",
      number: 10049,
      date: new Date("2023-07-04T23:50:21.817Z"),
      customer: "Anna Dias",
      location: "Tallinn",
      state: "pending",
      total: 14.0,
      paid: 0.0,
    },
    {
      type: "Invoice",
      number: 10050,
      date: new Date("2023-07-11T23:50:21.817Z"),
      customer: "Micheal Weber",
      location: "Tartu",
      state: "pending",
      total: 530.12,
      paid: 0.0,
    },
    {
      type: "Invoice",
      number: 12048,
      date: new Date("2023-02-25T23:50:21.817Z"),
      customer: "Mia Kivi",
      location: "Tallinn",
      state: "in progress",
      total: 280.0,
      paid: 149.23,
    },
    {
      type: "Receipt",
      number: 10338,
      date: new Date("2023-07-10T23:50:21.817Z"),
      customer: "Lydia Dias",
      location: "Tallinn",
      state: "success",
      total: 78.0,
      paid: 78.0,
    },
    {
      type: "Receipt",
      number: 22048,
      date: new Date("2023-05-12T23:50:21.817Z"),
      customer: "Georg Kuusk",
      location: "Tallinn",
      state: "pending",
      total: 1240.28,
      paid: 0.0,
    },
  ],
  customers: [
    "Marathon Oil Corp.",
    "Sealed Air",
    "Southern Company",
    "Atmos Energy",
    "Equifax Inc.",
    "G Holding",
    "Kansas City Southern",
    "Fidelity National Information Services",
    "Colgate-Palmolie",
    "Air Products & Chemicals Inc",
    "Intuitive Surgical Inc.",
    "Quest Diagnostics",
    "Crown Castle International",
    "News Corp. Class A",
    "Federal Realty Investment Trust",
    "Humana",
  ],
};

export default data;
