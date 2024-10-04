"use client"
import Link from 'next/link';

type Country = {
  name: string;
  population: number;
  capital: string;
};

const countries: Country[] = [
  { name: 'Canada', population: 37742154, capital: 'Ottawa' },
  { name: 'Australia', population: 25687041, capital: 'Canberra' },
  { name: 'Germany', population: 83149300, capital: 'Berlin' },
  { name: 'Japan', population: 125960000, capital: 'Tokyo' },
  { name: 'India', population: 1393409038, capital: 'New Delhi' }
];

export default function HomePage() {
  return (
    <div className="container mx-auto py-10" >
      <h1 className="text-4xl font-bold text-center mb-6" >Country Listing</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6" >
        {countries.map((country) => (
          <li key={country.name} className="bg-white p-6 shadow-lg rounded-lg text-center" >
            <Link className="text-xl font-semibold"  href={`/country/${country.name.toLowerCase()}`}>
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
