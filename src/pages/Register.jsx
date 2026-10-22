export default function Register() {
  return (
    <div className="max-w-md mx-auto mt-12 bg-rose-50 border border-rose-100 p-8 rounded-2xl shadow-xl">
      <h2 className="text-xl font-bold mb-6 text-center text-black">Create an Account</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-black mb-1">Username / Name</label>
          <input type="text" className="w-full bg-rose-50/50 border border-black rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-black" placeholder="Rupali" />
        </div>
        <div>
          <label className="block text-xs font-medium text-black mb-1">Email</label>
          <input type="email" className="w-full bg-rose-50/50 border border-black rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-black" placeholder="user@example.com" />
        </div>
        <div>
          <label className="block text-xs font-medium text-black mb-1">Password</label>
          <input type="password" className="w-full bg-rose-50/50 border border-black rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-black" placeholder="••••••••" />
        </div>
        <button type="submit" className="w-full bg-black hover:bg-black text-white font-medium py-2 rounded-lg transition text-sm">
          Register
        </button>
      </form>
    </div>
  );
}