export interface HistoricalEvent {
  id: number;
  description: string;
  correctYear: number;
  additionalInfo: string;
  options: number[];
}

export const historicalEvents: HistoricalEvent[] = [
  {
    id: 1,
    description: "Cristóbal Colón realiza su primer viaje a América",
    correctYear: 1492,
    additionalInfo: "Este viaje marcó el inicio del período colonial español en América y el intercambio cultural entre continentes.",
    options: [1492, 1488, 1496]
  },
  {
    id: 2,
    description: "Inicio de la Revolución Mexicana",
    correctYear: 1910,
    additionalInfo: "Fue un conflicto armado que transformó la política y economía mexicana del siglo XX.",
    options: [1910, 1900, 1920]
  },
  {
    id: 3,
    description: "Independencia de Argentina",
    correctYear: 1816,
    additionalInfo: "La declaración fue firmada en San Miguel de Tucumán, estableciendo la independencia de las Provincias Unidas.",
    options: [1816, 1810, 1821]
  },
  {
    id: 4,
    description: "Fin de la Guerra Civil Española",
    correctYear: 1939,
    additionalInfo: "El conflicto terminó con la victoria del bando nacional y el inicio de la dictadura de Francisco Franco.",
    options: [1939, 1936, 1942]
  },
  {
    id: 5,
    description: "Independencia de Chile",
    correctYear: 1818,
    additionalInfo: "Bernardo O'Higgins y José de San Martín fueron figuras clave en este proceso de independencia.",
    options: [1818, 1810, 1826]
  }
];