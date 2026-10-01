const AdminHeader = () => {
    return (
        <header className="h-20 bg-white border-b flex items-center justify-between px-6">

            <div>
                <h2 className="text-xl font-semibold">
                    Admin Dashboard
                </h2>

                <p className="text-sm text-gray-500">
                    Manage your store
                </p>
            </div>

            <div className="flex items-center gap-3">

                <div className="text-right">
                    <p className="font-medium">
                        Admin
                    </p>

                    <p className="text-xs text-gray-500">
                        Administrator
                    </p>
                </div>

                <div className="w-10 h-10 rounded-full bg-blue-600
                    text-white flex items-center justify-center font-bold">
                    A
                </div>

            </div>

        </header>
    )
}

export default AdminHeader