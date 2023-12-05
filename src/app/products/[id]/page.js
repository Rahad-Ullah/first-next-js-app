
const DynamicPage = ({params, searchParams}) => {
    console.log(searchParams); 
    
    return (
        <div>
            <h1 className="text-4xl text-center my-8">This is Dynamic Page: {params.id}</h1>
            <h1 className="text-2xl text-center my-8">Search by Category: {searchParams.category}</h1>
        </div>
    );
};

export default DynamicPage;