function Profile() {
    
    const user = {
        name: 'Rayan',
        email: 'rayanbanerjee@gmail.com',
        platform: 'LeetCode',
        solved: 128,
        streak: 10,

    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Your Profile</h1>

            <div className="bg-white p-6 rounded-lg shadow-md max-w-md"> 
                <p className="mb-2"> 
                    <span className="font-semibold">Name: </span> {user.name}
                </p>
                <p className="mb-2">
                    <span className="font-semibold">Email: </span> {user.email}
                </p>                
                <p className="mb-2">
                    <span className="font-semibold">Platform: </span> {user.platform}
                </p>                
                <p className="mb-2"> 
                    <span className="font-semibold">Problem Solved: </span> {user.solved}
                </p>               
                <p className="mb-2">
                    <span className="font-semibold">Current streak: </span> {user.streak}
                </p>
            </div>
        </div>
    );
}

export default Profile