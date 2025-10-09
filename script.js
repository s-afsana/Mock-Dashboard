// Mock data for the dashboard
const mockData = {
    mtd: {
        revenue: { value: 847250, goal: 1000000, percentage: 84.7 },
        closeRate: { value: 52.3, benchmark: 48.1, difference: 4.2 },
        avgTicket: { value: 687, targetMin: 650, targetMax: 750 },
        activeLearners: { value: 47, engagement: 78 }
    },
    qtd: {
        revenue: { value: 2340000, goal: 3000000, percentage: 78.0 },
        closeRate: { value: 49.8, benchmark: 48.1, difference: 1.7 },
        avgTicket: { value: 692, targetMin: 650, targetMax: 750 },
        activeLearners: { value: 52, engagement: 82 }
    },
    '7months': {
        revenue: { value: 15600000, goal: 18000000, percentage: 86.7 },
        closeRate: { value: 51.2, benchmark: 48.1, difference: 3.1 },
        avgTicket: { value: 678, targetMin: 650, targetMax: 750 },
        activeLearners: { value: 45, engagement: 75 }
    },
    ytd: {
        revenue: { value: 8900000, goal: 12000000, percentage: 74.2 },
        closeRate: { value: 50.5, benchmark: 48.1, difference: 2.4 },
        avgTicket: { value: 685, targetMin: 650, targetMax: 750 },
        activeLearners: { value: 48, engagement: 79 }
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
            data: [800000, 800000, 800000, 800000, 800000, 1000000],
            borderColor: '#ef4444',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            borderWidth: 2,
            borderDash: [5, 5],
            fill: false
        }
    ]
};

// Training correlation data
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
    // Training Attendance Chart
    const trainingCtx = document.getElementById('trainingChart').getContext('2d');
    new Chart(trainingCtx, {
        type: 'bar',
        data: trainingData,
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
    
    // Correlation Chart
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
                        padding: 15
                    }
                }
            },
            cutout: '60%'
        }
    });
}

// Update charts based on filters
function updateCharts(timeRange, repFilter) {
    // This would update chart data based on filters
    // For demo purposes, we'll just add some visual feedback
    console.log(`Updating charts for ${timeRange} and ${repFilter}`);
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
