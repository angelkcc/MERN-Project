import BrandForm from "../forms/brand.form"

const AddNewBrand = () => {
    return (
        <section className=' h-full  bg-white rounded mt-3 border border-gray-200'>
            <h1>Brand List</h1>
            <BrandForm />
        </section>
    )
}

export default AddNewBrand