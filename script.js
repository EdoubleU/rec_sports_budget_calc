function calculateBudget() {
    // Input values
    const fee = parseFloat(document.getElementById('fee').value);
    const patronsPerTeam = parseFloat(document.getElementById('patronsPerTeam').value);
    const numTeams = parseInt(document.getElementById('numTeams').value);
    const numGames = parseInt(document.getElementById('numGames').value);
    const officialFee = parseFloat(document.getElementById('officialFee').value);
    const staffPerGame = parseInt(document.getElementById('staffPerGame').value);
    const staffHoursPerGame = parseFloat(document.getElementById('staffHoursPerGame').value);
    const staffHourlyRate = parseFloat(document.getElementById('staffHourlyRate').value);

    // Calculate total players
    const totalPlayers = patronsPerTeam * numTeams;

    // Calculate cost per player per game
    const costPerPlayerPerGame = fee / numGames;

    // Calculate revenue
    const totalRevenue = fee * totalPlayers;

    // Calculate total official cost
    const totalOfficialCost = (numGames * numTeams / 2) * officialFee;

    // Calculate total staff cost
    const totalStaffCost = (numGames * numTeams / 2) * staffPerGame * staffHoursPerGame * staffHourlyRate;

    // Calculate net revenue without MS/Overhead
    const netRevenue = totalRevenue - (totalOfficialCost + totalStaffCost);

    // Display the result
    document.getElementById('result').innerHTML = `
        Cost per Player per Game: $${costPerPlayerPerGame.toFixed(2)}<br>
        Revenue for the Program: $${totalRevenue.toFixed(2)}<br>
        Total Official Cost: $${totalOfficialCost.toFixed(2)}<br>
        Total Staff Cost: $${totalStaffCost.toFixed(2)}<br>
        Net Revenue (without MS/Overhead): $${netRevenue.toFixed(2)}
    `;
}
