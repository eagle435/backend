 <script>
        document.addEventListener('DOMContentLoaded', function () {
            var ctxSkills = document.getElementById('skillsChart').getContext('2d');
            var skillsChart = new Chart(ctxSkills, {
                type: 'bar',
                data: {
                    labels: ['Python', 'Java', 'Ruby', 'PHP', '.NET', 'Node.js'],
                    datasets: [{
                        label: 'Proficiency (%)',
                        data: [85, 80, 75, 70, 65, 90],
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            var ctxTrends = document.getElementById('trendsChart').getContext('2d');
            var trendsChart = new Chart(ctxTrends, {
                type: 'pie',
                data: {
                    labels: ['Microservices', 'Serverless', 'Containerization', 'API-first', 'Cloud-native'],
                    datasets: [{
                        data: [25, 20, 30, 15, 10],
                        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#ff9f40'],
                    }]
                }
            });

            var ctxSalary = document.getElementById('salaryChart').getContext('2d');
            var salaryChart = new Chart(ctxSalary, {
                type: 'line',
                data: {
                    labels: ['2019', '2020', '2021', '2022', '2023'],
                    datasets: [{
                        label: 'Average Salary ($)',
                        data: [70000, 75000, 80000, 85000, 90000],
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        borderColor: 'rgba(153, 102, 255, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: false
                        }
                    }
                }
            });

            var ctxDemographics = document.getElementById('demographicsChart').getContext('2d');
            var demographicsChart = new Chart(ctxDemographics, {
                type: 'pie',
                data: {
                    labels: ['North America', 'Europe', 'Asia', 'South America', 'Africa', 'Oceania'],
                    datasets: [{
                        data: [40, 25, 20, 5, 5, 5],
                        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40']
                    }]
                }
            });

            var ctxExperience = document.getElementById('experienceChart').getContext('2d');
            var experienceChart = new Chart(ctxExperience, {
                type: 'bar',
                data: {
                    labels: ['Junior', 'Mid-Level', 'Senior'],
                    datasets: [{
                        label: 'Experience Level (%)',
                        data: [30, 50, 20],
                        backgroundColor: 'rgba(255, 159, 64, 0.2)',
                        borderColor: 'rgba(255, 159, 64, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        });
    </script>
