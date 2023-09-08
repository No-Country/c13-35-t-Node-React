

export default async function SearchResultsById({params}: any) {
    const {id} = params;   
    return (    
        <div>
            <h1>SearchResultsBy {id}</h1>
        </div>
    )
}