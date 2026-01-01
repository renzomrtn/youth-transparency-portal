export interface OriginStats {
  name: string;
  annualBudget: string;
  lineItems: number;
  verifiedExpenses: number;
  documents: number;
}

export const originStats: Record<string, OriginStats> = {
  '': {
    name: 'All Origins',
    annualBudget: '₱13,500,000',
    lineItems: 1265,
    verifiedExpenses: 1120,
    documents: 4230
  },
  'sk-federation': { name: 'SK Federation', annualBudget: '₱500,000', lineItems: 50, verifiedExpenses: 43, documents: 156 },
  'abella': { name: 'Abella', annualBudget: '₱450,000', lineItems: 42, verifiedExpenses: 38, documents: 142 },
  'bagumbayan-norte': { name: 'Bagumbayan Norte', annualBudget: '₱480,000', lineItems: 45, verifiedExpenses: 40, documents: 150 },
  'bagumbayan-sur': { name: 'Bagumbayan Sur', annualBudget: '₱510,000', lineItems: 48, verifiedExpenses: 44, documents: 160 },
  'balatas': { name: 'Balatas', annualBudget: '₱480,000', lineItems: 45, verifiedExpenses: 40, documents: 150 },
  'calauag': { name: 'Calauag', annualBudget: '₱520,000', lineItems: 49, verifiedExpenses: 45, documents: 165 },
  'cararayan': { name: 'Cararayan', annualBudget: '₱490,000', lineItems: 46, verifiedExpenses: 41, documents: 155 },
  'carolina': { name: 'Carolina', annualBudget: '₱530,000', lineItems: 50, verifiedExpenses: 46, documents: 170 },
  'concepcion-grande': { name: 'Concepcion Grande', annualBudget: '₱550,000', lineItems: 52, verifiedExpenses: 48, documents: 180 },
  'concepcion-pequena': { name: 'Concepcion Pequeña', annualBudget: '₱540,000', lineItems: 51, verifiedExpenses: 47, documents: 175 },
  'dayangdang': { name: 'Dayangdang', annualBudget: '₱485,000', lineItems: 46, verifiedExpenses: 41, documents: 153 },
  'del-rosario': { name: 'Del Rosario', annualBudget: '₱515,000', lineItems: 49, verifiedExpenses: 44, documents: 162 },
  'dinaga': { name: 'Dinaga', annualBudget: '₱450,000', lineItems: 42, verifiedExpenses: 38, documents: 142 },
  'igualdad': { name: 'Igualdad', annualBudget: '₱460,000', lineItems: 43, verifiedExpenses: 39, documents: 145 },
  'lerma': { name: 'Lerma', annualBudget: '₱505,000', lineItems: 48, verifiedExpenses: 43, documents: 159 },
  'liboton': { name: 'Liboton', annualBudget: '₱470,000', lineItems: 44, verifiedExpenses: 40, documents: 148 },
  'mabolo': { name: 'Mabolo', annualBudget: '₱495,000', lineItems: 46, verifiedExpenses: 42, documents: 154 },
  'pacol': { name: 'Pacol', annualBudget: '₱530,000', lineItems: 51, verifiedExpenses: 46, documents: 171 },
  'panicuason': { name: 'Panicuason', annualBudget: '₱470,000', lineItems: 44, verifiedExpenses: 39, documents: 146 },
  'penafrancia': { name: 'Peñafrancia', annualBudget: '₱510,000', lineItems: 48, verifiedExpenses: 43, documents: 160 },
  'sabang': { name: 'Sabang', annualBudget: '₱490,000', lineItems: 46, verifiedExpenses: 41, documents: 152 },
  'san-felipe': { name: 'San Felipe', annualBudget: '₱520,000', lineItems: 48, verifiedExpenses: 45, documents: 168 },
  'san-francisco': { name: 'San Francisco', annualBudget: '₱460,000', lineItems: 43, verifiedExpenses: 39, documents: 145 },
  'san-isidro': { name: 'San Isidro', annualBudget: '₱485,000', lineItems: 45, verifiedExpenses: 41, documents: 150 },
  'santa-cruz': { name: 'Santa Cruz', annualBudget: '₱495,000', lineItems: 46, verifiedExpenses: 42, documents: 155 },
  'tabuco': { name: 'Tabuco', annualBudget: '₱505,000', lineItems: 47, verifiedExpenses: 43, documents: 158 },
  'tinago': { name: 'Tinago', annualBudget: '₱480,000', lineItems: 45, verifiedExpenses: 40, documents: 151 },
  'triangulo': { name: 'Triangulo', annualBudget: '₱510,000', lineItems: 49, verifiedExpenses: 44, documents: 162 }
};

export const origins = Object.keys(originStats).map(key => ({
  value: key,
  label: originStats[key].name
}));