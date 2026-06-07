import Logo from "./logo";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#004C54] via-[#2d6a3f] to-[#93AD1E] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        
        {/* Logo */}
        <div className="w-full flex justify-center items-center mb-8">
          <Logo />
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#93AD1E]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#93AD1E]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Create password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#93AD1E]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#93AD1E]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#93AD1E] hover:bg-[#7d9419] text-black font-semibold py-3 rounded-lg transition duration-300"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-[#004C54] font-semibold hover:underline"
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}