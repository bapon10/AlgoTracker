function patternCard({name, totalProblems, completed, difficultyBreakdown, onClick}) {
    return(
        <div onClick={onClick} className="grid grid-cols-4 bg-gray-100">
            <p>Name: {name}</p>
            <p>Total Problems: {totalProblems}</p>
            <p>Completed:{completed}</p>
            <p>Difficulty Breakdown: {difficultyBreakdown}</p>
        </div>
      );
}

export default patternCard; 