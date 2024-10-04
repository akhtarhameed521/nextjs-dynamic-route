import { notFound } from 'next/navigation';

type Country = {
  name: string;
  population: number;
  capital: string;
};

const countries: Record<string, Country> = {
  canada: { name: 'Canada', population: 37742154, capital: 'Ottawa' },
  australia: { name: 'Australia', population: 25687041, capital: 'Canberra' },
  germany: { name: 'Germany', population: 83149300, capital: 'Berlin' },
  japan: { name: 'Japan', population: 125960000, capital: 'Tokyo' },
  india: { name: 'India', population: 1393409038, capital: 'New Delhi' }
};

type Params = {
  params: {
    country_name: string;
  };
};

export default function CountryPage({ params }: Params) {
  const { country_name } = params;

  const country = countries[country_name.toLowerCase()];

  if (!country) {
    return notFound(); // Will show 404 page if the country is not found
  }

  return (
    <div className="container mx-auto py-10">
      <div className="bg-white p-8 shadow-lg rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">{country.name}</h1>
        <p className="text-lg mb-2"><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p className="text-lg"><strong>Capital:</strong> {country.capital}</p>
      </div>
    </div>
  );
}
