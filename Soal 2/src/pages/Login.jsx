import { login } from '../assets/images';
import { google } from '../assets/icons';

const Login = () => {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5">
        <div className="md:w-1/2 px-16">
          <h2 className="font-bold text-royalblue-100 text-2xl">Login</h2>
          <p className="text-sm mt-4 text-royalblue-100">
            Kalau kamu sudah daftar, Login Aja
          </p>
          <form action="" className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border "
              type="email"
              placeholder="Email"
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                placeholder="Password"
              />
            </div>
            <button className="bg-royalblue-100 rounded-xl text-white py-2 hover:scale-105 duration-300">
              Log In
            </button>
          </form>
          <div className="mt-10 grid grid-cols-3 items-center text-gray-500">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300">
            <img src={google} alt="google" className="w-[25px] mr-3" />
            Login with Google
          </button>

          <div className="mt-5 text-xs border-b border-gray-400 py-4">
            <a href="/">Forgot your password?</a>
          </div>

          <div className="mt-3 text-xs flex justify-between items-center">
            <p>Belum Punya Akun?</p>
            <button className="py-2 px-4 bg-white border rounded-xl hover:scale-110 duration-300">
              Register
            </button>
          </div>
        </div>

        <div className="w-1/2 md:block hidden">
          <img className="rounded-2xl " src={login} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Login;
