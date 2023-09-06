import { teamSpirit } from '../assets/images';
import { Button } from '../components';

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex-1 flex justify-center items-center">
        <img
          src={teamSpirit}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          Kami Menyediakan Aplikasi
          <span className="text-royalblue-100"> ERP </span> Berkualitas Tinggi
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Kami adalah Profesional yang menjunjung tinggi kepuasan pelanggan.
          Dengan menjamin kenyamanan dan gaya premium, aplikasi ERP yang kami
          ciptakan dengan teliti dirancang untuk meningkatkan pengalaman Anda,
          memberikan Anda kualitas yang tak tertandingi, inovasi, dan sentuhan
          elegansi.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Kesungguhan kami terhadap detail dan keunggulan memastikan kepuasan
          Anda.
        </p>
        <div className="mt-11">
          <Button label="About Us" />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
