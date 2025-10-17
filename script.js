// Mock data for the dashboard
// Mock data for the dashboard
const mockData = {
    mtd: {
        revenue: { value: 847250, goal: 1000000, percentage: 84.7 },
        closeRate: { value: 64.6, benchmark: 58.1, difference: 6.5},
        avgTicket: { value: 787, targetMin: 650, targetMax: 900 },
        activeLearners: { value: 47, engagement: 78 }
    },
    qtd: {
        revenue: { value: 2340000, goal: 3000000, percentage: 78.0 },
        closeRate: { value: 62.3, benchmark: 58.1, difference: 4.2 },
        avgTicket: { value: 792, targetMin: 650, targetMax: 900 },
        activeLearners: { value: 52, engagement: 82 }
    },
    ytd: {
        revenue: { value: 8900000, goal: 12000000, percentage: 74.2 },
        closeRate: { value: 51.2, benchmark: 48.1, difference: 3.1 },
        avgTicket: { value: 778, targetMin: 650, targetMax: 900 },
        activeLearners: { value: 48, engagement: 79 }
    }
};

// Training attendance data
const trainingData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    datasets: [
        {
            label: 'Recurring',
            data: [12, 15, 18, 14, 16, 19],
            backgroundColor: '#4f46e5',
            borderRadius: 4
        },
        {
            label: 'One-Off',
            data: [8, 12, 10, 15, 13, 11],
            backgroundColor: '#06b6d4',
            borderRadius: 4
        },
        {
            label: 'Coaching',
            data: [6, 8, 9, 7, 10, 12],
            backgroundColor: '#10b981',
            borderRadius: 4
        }
    ]
};

// Performance data
const performanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            label: 'Team Revenue',
            data: [720000, 780000, 820000, 790000, 850000, 847250],
            borderColor: '#4f46e5',
            backgroundColor: 'rgba(79, 70, 229, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4
        },
        {
            label: 'Goal',
            data: [900000, 900000, 900000, 1000000, 1000000, 1000000],
            borderColor: '#ef4444',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            borderWidth: 2,
            borderDash: [5, 5],
            fill: false
        }
    ]
};
    

// Training correlation data
// Shared Training Attendance Data
const trainingAttendanceData = {
    departments: {
        'Customer Service': {
            lastQuarter: { attended: 4.1, total: 6, employees: 8 },
            yearToDate: { attended: 10.2, total: 12, employees: 8 },
            employees: [
                { name: 'Sarah Johnson', lastQuarter: 4, yearToDate: 10, classes: ['Safety Training', 'Customer Service', 'Communication', 'Product Knowledge'] },
                { name: 'Mike Chen', lastQuarter: 5, yearToDate: 11, classes: ['Safety Training', 'Customer Service', 'Communication', 'Product Knowledge', 'Conflict Resolution'] },
                { name: 'Emily Davis', lastQuarter: 3, yearToDate: 9, classes: ['Safety Training', 'Customer Service', 'Communication'] },
                { name: 'David Wilson', lastQuarter: 4, yearToDate: 10, classes: ['Safety Training', 'Customer Service', 'Communication', 'Product Knowledge'] },
                { name: 'Lisa Brown', lastQuarter: 5, yearToDate: 12, classes: ['Safety Training', 'Customer Service', 'Communication', 'Product Knowledge', 'Conflict Resolution', 'Advanced Techniques'] },
                { name: 'Tom Anderson', lastQuarter: 4, yearToDate: 10, classes: ['Safety Training', 'Customer Service', 'Communication', 'Product Knowledge'] },
                { name: 'Rachel Green', lastQuarter: 4, yearToDate: 10, classes: ['Safety Training', 'Customer Service', 'Communication', 'Product Knowledge'] },
                { name: 'Chris Taylor', lastQuarter: 4, yearToDate: 10, classes: ['Safety Training', 'Customer Service', 'Communication', 'Product Knowledge'] }
            ]
        },
        'Dispatch': {
            lastQuarter: { attended: 1.8, total: 6, employees: 5 },
            yearToDate: { attended: 9.5, total: 12, employees: 5 },
            employees: [
                { name: 'Alex Rodriguez', lastQuarter: 2, yearToDate: 10, classes: ['Dispatch Systems', 'Emergency Procedures'] },
                { name: 'Maria Garcia', lastQuarter: 1, yearToDate: 8, classes: ['Dispatch Systems'] },
                { name: 'James Smith', lastQuarter: 2, yearToDate: 10, classes: ['Dispatch Systems', 'Emergency Procedures'] },
                { name: 'Jennifer Lee', lastQuarter: 2, yearToDate: 10, classes: ['Dispatch Systems', 'Emergency Procedures'] },
                { name: 'Robert Kim', lastQuarter: 2, yearToDate: 10, classes: ['Dispatch Systems', 'Emergency Procedures'] }
            ]
        },
        'Plumbers': {
            lastQuarter: { attended: 5.5, total: 6, employees: 4 },
            yearToDate: { attended: 8.3, total: 12, employees: 4 },
            employees: [
                { name: 'Pablo Escobar', lastQuarter: 6, yearToDate: 12, classes: ['Plumbing Basics', 'Advanced Techniques', 'Safety Protocols', 'Code Compliance', 'Emergency Repairs', 'Customer Service'] },
                { name: 'Nick Fergis', lastQuarter: 5, yearToDate: 10, classes: ['Plumbing Basics', 'Advanced Techniques', 'Safety Protocols', 'Code Compliance', 'Emergency Repairs'] },
                { name: 'Bob Carter', lastQuarter: 5, yearToDate: 10, classes: ['Plumbing Basics', 'Advanced Techniques', 'Safety Protocols', 'Code Compliance', 'Emergency Repairs'] },
                { name: 'Miguel Herhandez', lastQuarter: 6, yearToDate: 12, classes: ['Plumbing Basics', 'Advanced Techniques', 'Safety Protocols', 'Code Compliance', 'Emergency Repairs', 'Customer Service'] }
            ]
        },
        'Management': {
            lastQuarter: { attended: 3.0, total: 3, employees: 3 },
            yearToDate: { attended: 5.0, total: 6, employees: 3 },
            employees: [
                { name: 'John Manager', lastQuarter: 3, yearToDate: 6, classes: ['Leadership', 'Team Management', 'Strategic Planning', 'Performance Management', 'Budget Planning', 'Communication'] },
                { name: 'Jane Director', lastQuarter: 3, yearToDate: 6, classes: ['Leadership', 'Team Management', 'Strategic Planning', 'Performance Management', 'Budget Planning', 'Communication'] },
                { name: 'Mark Supervisor', lastQuarter: 3, yearToDate: 6, classes: ['Leadership', 'Team Management', 'Strategic Planning', 'Performance Management', 'Budget Planning', 'Communication'] }
            ]
        }
    }
};

const correlationData = {
    labels: ['Training Hours', 'Close Rate', 'Avg Ticket', 'Revenue'],
    datasets: [
        {
            label: 'Training Impact',
            data: [85, 52.3, 78, 84.7],
            backgroundColor: [
                'rgba(79, 70, 229, 0.8)',
                'rgba(6, 182, 212, 0.8)',
                'rgba(16, 185, 129, 0.8)',
                'rgba(139, 92, 246, 0.8)'
            ],
            borderColor: [
                '#4f46e5',
                '#06b6d4',
                '#10b981',
                '#8b5cf6'
            ],
            borderWidth: 2
        }
    ]
};

// Stack Ranking Data
const stackRankingData = {
    ytd: [
        {
            name: 'Sophie',
            level: 'Jr',
            startDate: '9/15/2024',
            closeRate: 50,
            revenue: 141000,
            jobs: 208,
            avgTicket: 1423,
            trainingScores: 'yellow',
            trainingAttendance: 'green'
        },
        {
            name: 'Ava',
            level: 'Snr',
            startDate: '6/1/2023',
            closeRate: 68,
            revenue: 483000,
            jobs: 672,
            avgTicket: 1247,
            trainingScores: 'green',
            trainingAttendance: 'green'
        },
        {
            name: 'Liam',
            level: 'Mid',
            startDate: '3/1/2024',
            closeRate: 64,
            revenue: 496000,
            jobs: 714,
            avgTicket: 1198,
            trainingScores: 'green',
            trainingAttendance: 'green'
        },
        {
            name: 'Marcus',
            level: 'Snr',
            startDate: '1/1/2024',
            closeRate: 61,
            revenue: 264000,
            jobs: 518,
            avgTicket: 1156,
            trainingScores: 'red',
            trainingAttendance: 'yellow'
        },
        {
            name: 'Noah',
            level: 'Mid',
            startDate: '7/15/2023',
            closeRate: 47,
            revenue: 399000,
            jobs: 615,
            avgTicket: 1089,
            trainingScores: 'yellow',
            trainingAttendance: 'green'
        }
    ],
    qtd: [
        {
            name: 'Sophie',
            level: 'Jr',
            startDate: '9/15/2024',
            closeRate: 48,
            revenue: 95000,
            jobs: 140,
            avgTicket: 1423,
            trainingScores: 'yellow',
            trainingAttendance: 'green'
        },
        {
            name: 'Ava',
            level: 'Snr',
            startDate: '6/1/2023',
            closeRate: 65,
            revenue: 320000,
            jobs: 450,
            avgTicket: 710,
            trainingScores: 'green',
            trainingAttendance: 'green'
        },
        {
            name: 'Liam',
            level: 'Mid',
            startDate: '3/1/2024',
            closeRate: 62,
            revenue: 330000,
            jobs: 480,
            avgTicket: 690,
            trainingScores: 'green',
            trainingAttendance: 'green'
        },
        {
            name: 'Noah',
            level: 'Mid',
            startDate: '7/15/2023',
            closeRate: 45,
            revenue: 280000,
            jobs: 420,
            avgTicket: 665,
            trainingScores: 'yellow',
            trainingAttendance: 'green'
        },
        {
            name: 'Marcus',
            level: 'Snr',
            startDate: '1/1/2024',
            closeRate: 58,
            revenue: 180000,
            jobs: 350,
            avgTicket: 515,
            trainingScores: 'red',
            trainingAttendance: 'yellow'
        }
    ],
    mtd: [
        {
            name: 'Sophie',
            level: 'Jr',
            startDate: '9/15/2024',
            closeRate: 52,
            revenue: 35000,
            jobs: 55,
            avgTicket: 1423,
            trainingScores: 'yellow',
            trainingAttendance: 'green'
        },
        {
            name: 'Ava',
            level: 'Snr',
            startDate: '6/1/2023',
            closeRate: 70,
            revenue: 120000,
            jobs: 180,
            avgTicket: 1247,
            trainingScores: 'green',
            trainingAttendance: 'green'
        },
        {
            name: 'Liam',
            level: 'Mid',
            startDate: '3/1/2024',
            closeRate: 68,
            revenue: 110000,
            jobs: 165,
            avgTicket: 1198,
            trainingScores: 'green',
            trainingAttendance: 'green'
        },
        {
            name: 'Marcus',
            level: 'Snr',
            startDate: '1/1/2024',
            closeRate: 55,
            revenue: 65000,
            jobs: 120,
            avgTicket: 1156,
            trainingScores: 'red',
            trainingAttendance: 'yellow'
        },
        {
            name: 'Noah',
            level: 'Mid',
            startDate: '7/15/2023',
            closeRate: 50,
            revenue: 95000,
            jobs: 150,
            avgTicket: 1089,
            trainingScores: 'yellow',
            trainingAttendance: 'green'
        }
    ]
};

// Initialize charts when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    updateTimestamp();
    setInterval(updateTimestamp, 60000); // Update every minute
});

// Theme toggle functionality
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const icon = document.querySelector('.theme-toggle i');
    if (document.body.classList.contains('dark-theme')) {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Update timestamp
function updateTimestamp() {
    const now = new Date();
    const timestamp = now.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    document.querySelector('.timestamp').textContent = `Updated ${timestamp} (demo)`;
}

// Update dashboard based on filters
function updateDashboard() {
    const timeRange = document.getElementById('timeRange').value;
    const repFilter = document.getElementById('repFilter').value;
    
    // Update KPI values
    updateKPIs(timeRange);
    
    // Update charts
    updateCharts(timeRange, repFilter);
    
    // Update stack ranking table
    updateStackRanking(timeRange);
    
    // Add loading effect
    document.body.classList.add('loading');
    setTimeout(() => {
        document.body.classList.remove('loading');
    }, 500);
}

// Update KPI values
function updateKPIs(timeRange) {
    const data = mockData[timeRange];
    
    // Update Revenue
    const revenueCard = document.querySelector('.kpi-card:nth-child(1)');
    const revenueTitle = revenueCard.querySelector('.kpi-header h3');
    
    // Update title based on time range
    const timeRangeLabels = {
        'mtd': 'Revenue (MTD)',
        'qtd': 'Revenue (QTD)',
        'ytd': 'Revenue (YTD)'
    };
    revenueTitle.textContent = timeRangeLabels[timeRange] || 'Revenue (MTD)';
    
    revenueCard.querySelector('.kpi-value').textContent = `$${data.revenue.value.toLocaleString()}`;
    revenueCard.querySelector('.progress-fill').style.width = `${data.revenue.percentage}%`;
    revenueCard.querySelector('.progress-text').textContent = `${data.revenue.percentage}% of $${(data.revenue.goal / 1000000).toFixed(1)}M goal`;
    
    // Update Close Rate
    const closeRateCard = document.querySelector('.kpi-card:nth-child(2)');
    closeRateCard.querySelector('.kpi-value').textContent = `${data.closeRate.value}%`;
    const benchmarkIndicator = closeRateCard.querySelector('.benchmark-indicator');
    benchmarkIndicator.textContent = `${data.closeRate.difference > 0 ? '+' : ''}${data.closeRate.difference}%`;
    benchmarkIndicator.className = `benchmark-indicator ${data.closeRate.difference > 0 ? 'positive' : 'negative'}`;
    
    // Update Average Ticket
    const avgTicketCard = document.querySelector('.kpi-card:nth-child(3)');
    avgTicketCard.querySelector('.kpi-value').textContent = `$${data.avgTicket.value}`;
    
    // Update Active Learners
    const learnersCard = document.querySelector('.kpi-card:nth-child(4)');
    learnersCard.querySelector('.kpi-value').textContent = data.activeLearners.value;
    learnersCard.querySelector('.engagement-fill').style.width = `${data.activeLearners.engagement}%`;
    learnersCard.querySelector('.engagement-score').textContent = `${data.activeLearners.engagement}/100`;
}

// Initialize charts
function initializeCharts() {
    // Correlation Chart (Pie Chart)
    const correlationCtx = document.getElementById('correlationChart').getContext('2d');
    new Chart(correlationCtx, {
        type: 'doughnut',
        data: correlationData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        padding: 20
                    }
                }
            }
        }
    });
    
    // Performance Chart
    const performanceCtx = document.getElementById('performanceChart').getContext('2d');
    new Chart(performanceCtx, {
        type: 'line',
        data: performanceData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 20
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + (value / 1000) + 'K';
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Update charts based on filters
function updateCharts(timeRange, repFilter) {
    // This would update chart data based on filters
    // For demo purposes, we'll just add some visual feedback
    console.log(`Updating charts for ${timeRange} and ${repFilter}`);
}

// Update stack ranking list based on time range
function updateStackRanking(timeRange) {
    const data = stackRankingData[timeRange];
    if (!data) return;
    
    const rankingItems = document.querySelectorAll('.ranking-item');
    
    data.forEach((employee, index) => {
        if (rankingItems[index]) {
            const item = rankingItems[index];
            
        // Update ranking number
        const rankingNumberElement = item.querySelector('.ranking-number');
        if (rankingNumberElement) rankingNumberElement.textContent = index + 1;
        
        // Update employee name
        const nameElement = item.querySelector('.employee-name');
        if (nameElement) nameElement.textContent = employee.name;
        
        // Update employee level
        const levelElement = item.querySelector('.employee-level');
        if (levelElement) {
            levelElement.textContent = employee.level;
            levelElement.className = `employee-level ${employee.level.toLowerCase()}`;
        }
            
            // Update key metrics
            const revenueElement = item.querySelector('.metric-value.revenue');
            if (revenueElement) revenueElement.textContent = '$' + (employee.revenue / 1000) + 'K';
            
            const closeRateElement = item.querySelector('.metric-value.close-rate');
            if (closeRateElement) closeRateElement.textContent = employee.closeRate + '%';
            
        const ticketElement = item.querySelector('.metric-value.ticket');
        if (ticketElement) ticketElement.textContent = '$' + employee.avgTicket.toLocaleString();
            
            // Update status badges
            const statusBadges = item.querySelectorAll('.status-badge');
            if (statusBadges[0]) {
                statusBadges[0].textContent = employee.trainingScores.charAt(0).toUpperCase() + employee.trainingScores.slice(1);
                statusBadges[0].className = `status-badge ${employee.trainingScores}`;
            }
            if (statusBadges[1]) {
                statusBadges[1].textContent = employee.trainingAttendance.charAt(0).toUpperCase() + employee.trainingAttendance.slice(1);
                statusBadges[1].className = `status-badge ${employee.trainingAttendance}`;
            }
        }
    });
}

// Add tooltip functionality
document.addEventListener('DOMContentLoaded', function() {
    const tooltipCards = document.querySelectorAll('[data-tooltip]');
    
    tooltipCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Add smooth navigation for drill-in links
document.addEventListener('DOMContentLoaded', function() {
    const drillLinks = document.querySelectorAll('.drill-link');
    
    drillLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Add loading state
            this.style.opacity = '0.6';
            
            // Navigate to the appropriate drill-in page
            const href = this.getAttribute('href');
            if (href) {
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            } else {
                // Fallback if href is not set
                this.style.opacity = '1';
            }
        });
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close any open modals or tooltips
        document.body.classList.remove('loading');
    }
});

// Add performance monitoring (demo)
function logPerformance() {
    const performance = window.performance;
    if (performance && performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Dashboard loaded in ${loadTime}ms`);
    }
}

// Initialize performance monitoring
document.addEventListener('DOMContentLoaded', logPerformance);

// Add error handling for charts
window.addEventListener('error', function(e) {
    console.error('Dashboard error:', e.error);
    // In a real application, you might want to show a user-friendly error message
});

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        updateDashboard,
        toggleTheme,
        updateKPIs
    };
}
