function updateDescription() {
    const years = ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014"];
    const selectedYear = document.getElementById("year-select").value;
    
    years.forEach(year => {
        document.getElementById(year).style.display = year === selectedYear ? "block" : "none";
    });
}