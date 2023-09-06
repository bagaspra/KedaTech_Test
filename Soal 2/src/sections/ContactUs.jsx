import { Button } from '../components';

const ContactUs = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center flex-col gap-10"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Hubungi<span className="text-royalblue-100"> Kami </span>
      </h3>
      <div className="lg:max-w-[50%] w-full flex items-center gap-5 py-2.5 border  border-slate-gray rounded-lg">
        <input type="text" placeholder="Nama Kamu" className="input" />
      </div>
      <div className="lg:max-w-[50%] w-full flex items-center gap-5 py-2.5 border border-slate-gray rounded-lg">
        <input type="text" placeholder="Email Kamu" className="input" />
      </div>
      <div className="lg:max-w-[50%] w-full flex items-center gap-5 py-2.5 border border-slate-gray rounded-lg">
        <textarea
          placeholder="Pesan Kamu"
          className="input"
          rows="4"
        ></textarea>
      </div>
      <div className="flex lg:max-w-[50%] max-sm:justify-end items-center max-sm:w-full">
        <Button label="Kirim Pesan" fullWidth />
      </div>
    </section>
  );
};

export default ContactUs;
