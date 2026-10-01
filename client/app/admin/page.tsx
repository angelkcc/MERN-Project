const AdminPage = () => {

    return (
        <div>

            <h1 className="text-2xl font-bold mb-6">
                Dashboard
            </h1>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-500">
                        Total Products
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                        120
                    </h2>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-500">
                        Total Orders
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                        45
                    </h2>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-500">
                        Total Users
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                        89
                    </h2>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-500">
                        Total Brands
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                        15
                    </h2>
                </div>

            </div>

        </div>
    )
}

export default AdminPage