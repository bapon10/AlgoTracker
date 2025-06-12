function dashboard() {
    const stats = [
        { label: 'Problems Solved', value: 120},
        { label: 'Daily Streak', value: 15},
        { label: 'Time Spent (hrs)', value: 42},
        { label: 'Topics Covered', value: 10},
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Your Progress</h1>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                    <div
                        key = {i}
                        className="bg-white shadow-md rounded-xl p-4 text-center border"
                    >
                        <h2 className="text-xl font-sembold">{stat.value}</h2>
                        <p className="text-sm text-grey-600">{stat.label}</p>
                </div>
            ))}
        </div>
    </div>
    );
}

export default dashboard;