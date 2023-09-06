import { tiers } from '../constants';
import { check } from '../assets/icons';

const Price = () => {
  return (
    <div>
      <h2 className="text-4xl font-palanquin font-bold text-center mb-4">
        Pilih <span className="text-royalblue-200"> Tier </span> Kamu
      </h2>
      <p className="font-montserrat text-slate-gray text-center">
        Ayo pilih paket yang terbaik untuk Anda dan Bisnis Anda.
      </p>

      <div className="grid lg:grid-cols-3 lg:gap-8 gap-12 py-24 px-4 sm:px-6 lg:px-8">
        {tiers.map((tier) => (
          <div
            key={tier.label}
            className="border border-slate-200 shadow-lg p-8 bg-white rounded-2xl relative flex flex-col"
          >
            <h3 className="text-lg font-semibold leading-5">{tier.label}</h3>
            {tier.mostPopular && (
              <p className="absolute top-0 -translate-y-1/2 bg-royalblue-100 text-white px-3 py-0.5 text-sm font-semibold tracking-wide rounded-full shadow-md">
                Most Popular
              </p>
            )}
            <div className="mt-4 bg-slate-50 p-6 rounded-lg -mx-6">
              <p className="flex items-center text-sm font-semibold text-slate-500">
                <span>{tier.currency}</span>
                <span className="text-4xl text-slate-900 ml-3">
                  {tier.price}
                </span>
                <span className="ml-1.5">{tier.frequency}</span>
              </p>
            </div>
            <ul className="mt-6 space-y-4 flex-1">
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className="flex text-sm text-slate-700 leading-6"
                >
                  <img src={check} alt="check" className="h-5 w-5 shrink-0" />
                  <span className="ml-3">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className={`mt-8 block px-6 py-4 text-sm font-semibold leading-4 text-center rounded-lg
              ${
                tier.mostPopular
                  ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-md'
                  : 'text-blue-700 bg-blue-50 hover:bg-blue-100'
              }
              `}
            >
              Pilih
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
