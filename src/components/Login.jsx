

export const Login = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center ">
            <div className="w-96 h-[26rem] shadow-lg rounded-xl bg-slate-50 p-8">
                <h1 className="w-full text-3xl text-center font-bold">LOGIN</h1>
                <form action="" className="flex flex-col p-4">

                    <div className="flex h-10 shadow px-2 rounded-lg my-6 focus-within:shadow-md">
                        <img className="w-8 h-8" src="/src/assets/mail.svg" alt="email icon" />
                        <input type="email" name="email" id="email" className="w-full px-2 outline-none" placeholder="Email" />
                    </div>

                    <div className="flex h-10 shadow px-2 rounded-lg my-6 focus-within:shadow-md">
                        <img className="w-8 h-8" src="/src/assets/lock.svg" alt="email icon" />
                        <input type="password" name="password" id="password" className="w-full px-2 outline-none" placeholder="Password" />
                    </div>

                    <div className="w-full flex justify-center mt-6">
                        <button className="w-44 h-9 shadow-md text-center rounded-md hover:bg-slate-200 text-lg font-medium">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
