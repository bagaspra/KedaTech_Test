import { useState } from 'react';
import { statistics } from '../constants';
import { Button } from '../components';
import { modernDesign } from '../assets/images';
import { arrowRight } from '../assets/icons';

const Hero = () => {
  const [bigPeopleImg] = useState(modernDesign);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-royalblue-100">
          Produk Terbaru Kami
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            Optimalkan Bisnis
          </span>
          <br />
          Dengan{' '}
          <span className="text-royalblue-100 inline-block mt-3">ERP</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Erp Canggih untuk Kelancaran Bisnis dan Keuntungan Maksimal
        </p>

        <Button label="Pesan Sekarang" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center max-xl:hidden bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigPeopleImg}
          alt="bigPeople"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />
      </div>
    </section>
  );
};

export default Hero;
