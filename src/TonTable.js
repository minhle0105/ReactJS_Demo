export const thetons = [
    {
        id: 1,
        name: "Ton Bo",
        age: 24
    },
    {
        id: 2,
        name: "Ton Me",
        age: 24
    },
    {
        id: 3,
        name: "Ton Ton",
        age: 5
    }
];

export const TonTable = () => {
    return (
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
            </thead>
            <tbody>
            {thetons.map((ton, key) => {
                return (
                    <tr key={ton.id}>
                        <td>{ton.id}</td>
                        <td>{ton.name}</td>
                        <td>{ton.age}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}
