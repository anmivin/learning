function NewsList({ isLoading, props }) {
    if (!isLoading) return <div>Держите {props}</div>

        else return (
            <div>
                <h1>Подождите, данные загружаются!</h1>
            </div>
        )
    }

export default NewsList